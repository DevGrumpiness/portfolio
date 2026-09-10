/**
 * Single source of truth for personal info, contact details and external
 * links. Update this file instead of hardcoding URLs across components.
 */
export const siteConfig = {
  name: "José Guerrero Vazquez",
  role: "Frontend & Fullstack Developer",
  location: "Münster, Germany",
  availableFrom: "October 2026",
  email: "jbmj@outlook.de",
  siteUrl: "https://example.com", // TODO: replace with the deployed domain
  links: {
    github: "https://github.com/DevGrumpiness",
    linkedin:
      "https://www.linkedin.com/in/jos%C3%A9-benjamin-m-j-guerrero-vazquez-30369b14b/",
    cv: "/cv/Jose-Guerrero-Vazquez-CV.pdf",
  },
} as const;
