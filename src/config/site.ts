/**
 * Single source of truth for personal info, contact details and external
 * links. Update this file instead of hardcoding URLs across components.
 */
export const siteConfig = {
  name: "José Guerrero Vazquez",
  role: "Frontend & Fullstack Developer",
  location: "Münster, Germany",
  availableFrom: "October 2026",
  email: "hello@example.com", // TODO: replace with real contact email
  siteUrl: "https://example.com", // TODO: replace with the deployed domain
  links: {
    github: "https://github.com/your-github-handle", // TODO: replace
    linkedin: "https://www.linkedin.com/in/your-linkedin-handle", // TODO: replace
    cv: "/cv/Jose-Guerrero-Vazquez-CV.pdf", // TODO: drop the real CV PDF here
  },
} as const;
