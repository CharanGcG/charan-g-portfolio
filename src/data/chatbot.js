export const starterPrompts = [
  "What is Charan's strongest project?",
  "Tell me about his Oracle internship.",
  "Which skills match backend roles?",
];

const responses = [
  {
    keywords: ["oracle", "internship", "experience", "jenkins"],
    answer:
      "Charan worked as an Associate Software Developer Intern at Oracle from Jan 2026 to Jul 2026. He built deployment automation that reduced pipeline execution time by 70-80 minutes and created an MCP-based Jenkins troubleshooting assistant.",
  },
  {
    keywords: ["netradyne", "sdet", "testing", "pytest"],
    answer:
      "At Netradyne, Charan worked as an SDET Intern from May 2025 to Jul 2025, building Python and Pytest API validation scripts plus reusable testing frameworks integrated with GitHub.",
  },
  {
    keywords: ["project", "dsa", "games", "full stack"],
    answer:
      "DSA Games is Charan's gamified full-stack DSA platform with XP, leaderboards, achievements, progress dashboards, and secure authentication. It uses React, Node.js, Express.js, MongoDB, and Docker.",
  },
  {
    keywords: ["ai", "mcp", "devops", "triage", "assistant"],
    answer:
      "Charan built an AI Jenkins Pipeline Triage Assistant using Python, MCP, Jenkins REST APIs, and Confluence REST APIs. It retrieves operational knowledge, analyzes failure signatures, and suggests troubleshooting paths with enterprise safety controls.",
  },
  {
    keywords: ["skill", "stack", "backend", "frontend", "tools"],
    answer:
      "Charan works across Python, Java, JavaScript, SQL, React, Tailwind CSS, Node.js, Express.js, MongoDB, MySQL, Docker, Jenkins, CI/CD, Git, GitHub, Postman, Jira, MCP, and LLM applications.",
  },
  {
    keywords: ["achievement", "rank", "art", "sslc"],
    answer:
      "Charan earned Karnataka SSLC State Rank 6 and also created a digital art portfolio with 70K+ impressions and 1.7K+ engagements.",
  },
];

export function getMockResponse(input) {
  const normalized = input.toLowerCase();
  const match = responses.find((item) =>
    item.keywords.some((keyword) => normalized.includes(keyword)),
  );

  if (match) {
    return match.answer;
  }

  return "Charan is a software engineer focused on full-stack applications, AI-assisted developer tooling, backend systems, and DevOps automation. Ask me about his projects, internships, skills, or achievements.";
}
