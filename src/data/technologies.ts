export interface TechGroup {
  titleEn: string;
  titleDe: string;
  items: string[];
}

export const technologyGroups: TechGroup[] = [
  {
    titleEn: "Frontend",
    titleDe: "Frontend",
    items: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML", "CSS / SCSS"],
  },
  {
    titleEn: "Fullstack / Backend",
    titleDe: "Fullstack / Backend",
    items: ["Python", "FastAPI", "Node.js", "Express", "REST APIs"],
  },
  {
    titleEn: "Engineering",
    titleDe: "Engineering",
    items: ["Git", "Docker", "Playwright", "CI/CD", "Vite", "Jira"],
  },
  {
    titleEn: "AI-assisted development",
    titleDe: "KI-gestützte Entwicklung",
    items: ["GitHub Copilot", "Modern AI-assisted workflows"],
  },
];
