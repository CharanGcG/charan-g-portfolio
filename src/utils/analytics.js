import { track } from "@vercel/analytics";

const sendEvent = (name, properties = {}) => {
  try {
    if (typeof window === "undefined") {
      return;
    }

    track(name, properties);
  } catch {
    // Analytics should never block navigation or core portfolio interactions.
  }
};

export const trackResumeDownload = (source = "unknown") =>
  sendEvent("Resume Download Click", { source });

export const trackGitHubClick = (source = "unknown") =>
  sendEvent("GitHub Profile Click", { source });

export const trackLinkedInClick = (source = "unknown") =>
  sendEvent("LinkedIn Click", { source });

export const trackEmailClick = (source = "unknown") =>
  sendEvent("Email Click", { source });

export const trackProjectDemoClick = (projectName) =>
  sendEvent("Live Demo Click", { project: projectName });

export const trackProjectSourceClick = (projectName) =>
  sendEvent("Source Code Click", { project: projectName });

export const trackContactButtonClick = (source = "unknown") =>
  sendEvent("Contact Button Click", { source });

export const trackAIChatOpen = () => sendEvent("Ask Charan AI Open");

export const trackSocialClick = (label, source = "unknown") => {
  if (label === "GitHub") {
    trackGitHubClick(source);
    return;
  }

  if (label === "LinkedIn") {
    trackLinkedInClick(source);
    return;
  }

  if (label === "Email") {
    trackEmailClick(source);
  }
};
