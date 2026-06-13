import { knowledgeBase } from "../data/knowledgeBase.js";

const unknownResponse =
  "That's a great question. I don't have information about that yet. Feel free to connect with Charan through the contact section.";

const intents = [
  {
    id: "oracle",
    keywords: ["oracle", "intern", "internship", "cicd", "ci/cd", "jenkins", "kubernetes", "deployment", "pipeline"],
    phrases: ["what did you do at oracle", "oracle internship", "deployment automation"],
  },
  {
    id: "netradyne",
    keywords: ["netradyne", "sdet", "testing", "pytest", "api testing", "qa", "automation"],
    phrases: ["netradyne internship", "sdet intern", "api validation"],
  },
  {
    id: "projects",
    keywords: ["project", "projects", "built", "portfolio", "dsa", "games", "jenkins assistant", "demo"],
    phrases: ["tell me about your projects", "what projects", "featured projects"],
  },
  {
    id: "skills",
    keywords: ["skill", "skills", "technology", "technologies", "stack", "tools", "language", "framework", "know"],
    phrases: ["what technologies do you know", "tech stack", "technical skills"],
  },
  {
    id: "hire",
    keywords: ["hire", "recruit", "candidate", "why", "fit", "strength", "strengths"],
    phrases: ["why should i hire", "why hire charan", "good fit"],
  },
  {
    id: "contact",
    keywords: ["contact", "email", "mail", "github", "linkedin", "reach", "connect"],
    phrases: ["how can i contact", "contact you", "connect with charan"],
  },
  {
    id: "achievements",
    keywords: ["achievement", "achievements", "award", "rank", "sslc", "art", "impressions", "engagements"],
    phrases: ["tell me about your achievements", "state rank", "digital art portfolio"],
  },
];

const normalize = (value) =>
  value
    .toLowerCase()
    .replace(/ci\s*\/\s*cd/g, "cicd")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const editDistance = (left, right) => {
  if (Math.abs(left.length - right.length) > 2) {
    return 3;
  }

  const previous = Array.from({ length: right.length + 1 }, (_, index) => index);

  for (let i = 1; i <= left.length; i += 1) {
    let lastDiagonal = previous[0];
    previous[0] = i;

    for (let j = 1; j <= right.length; j += 1) {
      const nextDiagonal = previous[j];
      const cost = left[i - 1] === right[j - 1] ? 0 : 1;
      previous[j] = Math.min(
        previous[j] + 1,
        previous[j - 1] + 1,
        lastDiagonal + cost,
      );
      lastDiagonal = nextDiagonal;
    }
  }

  return previous[right.length];
};

const isCloseMatch = (word, keyword) => {
  if (word === keyword || word.includes(keyword) || keyword.includes(word)) {
    return true;
  }

  if (word.length < 4 || keyword.length < 4) {
    return false;
  }

  return editDistance(word, keyword) <= (Math.min(word.length, keyword.length) >= 5 ? 2 : 1);
};

const scoreIntent = (question, intent) => {
  const normalizedQuestion = normalize(question);
  const words = normalizedQuestion.split(" ").filter(Boolean);
  let score = 0;

  intent.phrases.forEach((phrase) => {
    if (normalizedQuestion.includes(normalize(phrase))) {
      score += 5;
    }
  });

  intent.keywords.forEach((keyword) => {
    const normalizedKeyword = normalize(keyword);
    if (normalizedQuestion.includes(normalizedKeyword)) {
      score += 3;
      return;
    }

    if (words.some((word) => isCloseMatch(word, normalizedKeyword))) {
      score += 2;
    }
  });

  return score;
};

const joinList = (items) => items.join(", ");

const responses = {
  oracle: () => {
    const oracle = knowledgeBase.experience.find((item) => item.company === "Oracle");
    return `${oracle.summary} Key highlights: ${oracle.highlights.join(" ")}`;
  },
  netradyne: () => {
    const netradyne = knowledgeBase.experience.find((item) => item.company === "Netradyne");
    return `${netradyne.summary} Key highlights: ${netradyne.highlights.join(" ")}`;
  },
  projects: () =>
    knowledgeBase.projects
      .map(
        (project) =>
          `${project.name}: ${project.summary} Tech: ${joinList(project.technologies)}. Impact: ${joinList(project.metrics)}.`,
      )
      .join(" "),
  skills: () => {
    const { skills } = knowledgeBase;
    return `Charan works with languages like ${joinList(skills.languages)}, frontend tools like ${joinList(skills.frontend)}, backend technologies like ${joinList(skills.backend)}, DevOps tools like ${joinList(skills.devops)}, and AI systems involving ${joinList(skills.ai)}.`;
  },
  hire: () =>
    `You should hire Charan if you need an engineer who can move across product, backend, AI tooling, and DevOps. ${knowledgeBase.person.differentiators.join(" ")}`,
  contact: () =>
    `You can contact Charan through the contact section, email him at ${knowledgeBase.contact.email}, or connect through GitHub and LinkedIn.`,
  achievements: () => `Charan's achievements include ${knowledgeBase.achievements.join(" and ")}.`,
};

export const getAssistantResponse = (question) => {
  const trimmedQuestion = question.trim();

  if (!trimmedQuestion) {
    return "Ask me about Charan's experience, projects, skills, achievements, or how to contact him.";
  }

  const ranked = intents
    .map((intent) => ({ ...intent, score: scoreIntent(trimmedQuestion, intent) }))
    .sort((left, right) => right.score - left.score);

  if (!ranked[0] || ranked[0].score < 2) {
    return unknownResponse;
  }

  return responses[ranked[0].id]?.() ?? unknownResponse;
};

export const suggestionPrompts = [
  "What did you do at Oracle?",
  "Tell me about your projects",
  "What technologies do you know?",
  "Why should I hire you?",
];
