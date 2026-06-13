import { profile } from "./profile.js";

export const knowledgeBase = {
  person: {
    name: "Charan G",
    headline: "Software Engineer | Full Stack Developer | AI & DevOps Enthusiast",
    summary:
      "Charan builds scalable applications, intelligent systems, DevOps automation, and developer productivity tools.",
    differentiators: [
      "Strong full-stack foundation across React, Node.js, Express, MongoDB, and REST APIs.",
      "Hands-on DevOps experience with Jenkins, CI/CD, Kubernetes, Docker, and Bash.",
      "Applied AI experience through MCP-based workflow assistants and LLM applications.",
      "Proven ownership through production-minded projects, measurable usage, and pipeline automation impact.",
    ],
  },
  experience: [
    {
      company: "Oracle",
      role: "Associate Software Developer Intern",
      summary:
        "At Oracle, Charan worked on deployment automation, CI/CD systems, Jenkins troubleshooting, Kubernetes, and enterprise deployment workflows.",
      highlights: [
        "Built deployment automation reducing pipeline execution time by 70-80 minutes.",
        "Built an AI Jenkins troubleshooting assistant using MCP architecture.",
        "Worked on CI/CD, Jenkins, Kubernetes, and deployment systems.",
      ],
    },
    {
      company: "Netradyne",
      role: "SDET Intern",
      summary:
        "At Netradyne, Charan focused on API quality, automation, and reusable test frameworks for real customer scenarios.",
      highlights: [
        "Automated API testing with Python and Pytest.",
        "Built reusable testing frameworks.",
        "Collaborated with developers to validate product behavior against real-world scenarios.",
      ],
    },
  ],
  projects: [
    {
      name: "DSA Games",
      summary:
        "DSA Games is a full-stack platform for gamified DSA learning with XP, leaderboards, achievements, dashboards, and secure authentication.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Docker"],
      metrics: ["400+ visits", "780+ interactions"],
    },
    {
      name: "AI Jenkins Pipeline Assistant",
      summary:
        "An AI-powered DevOps assistant built with MCP architecture, Jenkins API integration, Confluence retrieval, and failure analysis.",
      technologies: ["Python", "MCP", "Jenkins API", "Confluence retrieval", "Failure analysis"],
      metrics: ["Enterprise-safe troubleshooting", "CI/CD operations support"],
    },
  ],
  skills: {
    languages: ["Python", "Java", "JavaScript", "SQL"],
    frontend: ["React", "Tailwind"],
    backend: ["Node.js", "Express", "REST APIs"],
    devops: ["Docker", "Jenkins", "CI/CD", "Bash"],
    ai: ["MCP", "LLM applications"],
  },
  achievements: [
    "Karnataka SSLC State Rank 6",
    "Digital art portfolio with 70K impressions and 1.7K engagements",
  ],
  contact: {
    email: profile.email,
    github: profile.socials.find((item) => item.label === "GitHub")?.href,
    linkedin: profile.socials.find((item) => item.label === "LinkedIn")?.href,
    preferredAction:
      "Use the contact section to email Charan or connect through GitHub and LinkedIn.",
  },
};
