export type ProjectCategory = "public" | "protected";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  url?: string;
  githubUrl?: string;
  image?: string;
  imageMobile?: string;
  role: string;
  tech: string[];
  descriptionEn: string;
  descriptionDe: string;
  tagEn: string;
  tagDe: string;
}

/** Publicly presentable projects (Selected Work section). */
export const publicProjects: Project[] = [
  {
    slug: "casa-vazquez",
    name: "Casa Vazquez",
    category: "public",
    url: "https://menu.casavazquez.de",
    image: "/projects/casa-vazquez.webp",
    imageMobile: "/projects/casa-vazquez-mobile.webp",
    role: "Frontend & Fullstack Development",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    tagEn: "Production web platform",
    tagDe: "Produktive Webplattform",
    descriptionEn:
      "Website and digital menu platform for Casa Vazquez, a tapas, wine and cocktail bar in Münster. Built as a responsive, mobile-first production site covering menu presentation, content updates and day-to-day deployment.",
    descriptionDe:
      "Website und digitale Speisekarte für Casa Vazquez, eine Tapas-, Wein- und Cocktailbar in Münster. Eine responsive, mobile-first Produktivseite für Speisekarte, Inhaltspflege und laufenden Betrieb.",
  },
  {
    slug: "muenster-quiz",
    name: "Münster Quiz",
    category: "public",
    url: "https://ms-game.de",
    image: "/projects/muenster-quiz.webp",
    imageMobile: "/projects/muenster-quiz-mobile.webp",
    role: "Frontend & Fullstack Development",
    tech: ["React", "TypeScript"],
    tagEn: "Local interactive quiz",
    tagDe: "Lokales Quiz-Spiel",
    descriptionEn:
      "A local interactive quiz/game built around Münster, letting players test their knowledge of the city through an engaging, browser-based experience.",
    descriptionDe:
      "Ein lokales interaktives Quiz rund um Münster, mit dem Spielerinnen und Spieler ihr Wissen über die Stadt in einem browserbasierten Erlebnis testen können.",
  },
];

/** Public-sector / confidential reference work. Details intentionally limited. */
export const protectedProjects: Project[] = [
  {
    slug: "lynx",
    name: "LYnx – Public Sector Platform",
    category: "protected",
    role: "Fullstack / Web Developer — German Navy / Bundeswehr, Team LYnx",
    tech: ["Vue.js", "TypeScript", "SCSS", "Pinia", "Kafka", "Git"],
    tagEn: "Public sector · since 2022",
    tagDe: "Öffentlicher Sektor · seit 2022",
    descriptionEn:
      "Fullstack development within Team LYnx at the German Navy (Marinekommando), building browser-based applications on the LYnx IT portal platform. Adminimator, the first publicly documented application on LYnx, is described in official Bundeswehr/BMVg communications as the initial application built on the LYnx portal solution. I have worked as a developer within Team LYnx; project details beyond publicly documented information are limited due to contractual and security requirements.",
    descriptionDe:
      "Fullstack-Entwicklung im Team LYnx bei der Deutschen Marine (Marinekommando) mit browserbasierten Anwendungen auf der IT-Portallösung LYnx. Adminimator, die erste öffentlich dokumentierte Anwendung von LYnx, wird in offiziellen Bundeswehr-/BMVg-Veröffentlichungen als erste Anwendung der LYnx-Portallösung beschrieben. Ich arbeite als Entwickler im Team LYnx; über öffentlich dokumentierte Informationen hinaus sind Projektdetails aus vertraglichen und sicherheitsrelevanten Gründen eingeschränkt.",
  },
];

// NOTE: specific article URLs could not be verified in this environment
// (no live web/search access at build time). Only the official top-level
// domains are linked; please replace with direct article URLs once verified.
export const adminimatorSources = [
  {
    labelEn: "Bundeswehr.de — official news (search \"Adminimator\")",
    labelDe: "Bundeswehr.de — offizielle Meldungen (Suche „Adminimator“)",
    url: "https://www.bundeswehr.de/de/aktuelles",
  },
  {
    labelEn: "Reservistenverband.de — search \"LYnx\"",
    labelDe: "Reservistenverband.de — Suche „LYnx“",
    url: "https://www.reservistenverband.de/",
  },
] as const;
