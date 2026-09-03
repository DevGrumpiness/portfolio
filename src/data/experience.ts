export interface ExperienceItem {
  period: string;
  titleEn: string;
  titleDe: string;
  org: string;
  tech: string[];
  notesEn?: string[];
  notesDe?: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: "2022 – present",
    titleEn: "Fullstack / Web Developer",
    titleDe: "Fullstack- / Webentwickler",
    org: "German Navy / Bundeswehr — Project LYnx",
    tech: ["Vue.js", "TypeScript", "SCSS", "Pinia", "Kafka"],
  },
  {
    period: "2020 – 2022",
    titleEn: "Frontend Developer",
    titleDe: "Frontend-Entwickler",
    org: "CHECK24",
    tech: ["React"],
    notesEn: ["Responsive frontend development", "Collaboration with UI/UX"],
    notesDe: ["Responsive Frontend-Entwicklung", "Zusammenarbeit mit UI/UX"],
  },
  {
    period: "2019 – 2020",
    titleEn: "Frontend Developer",
    titleDe: "Frontend-Entwickler",
    org: "Kommando Cyber- und Informationsraum / Bundeswehr",
    tech: ["React", "TypeScript", "REST APIs"],
  },
  {
    period: "2018 – 2020",
    titleEn: "Backend / Web Developer",
    titleDe: "Backend- / Webentwickler",
    org: "HAWK",
    tech: ["PHP", "MySQL", "jQuery"],
  },
];
