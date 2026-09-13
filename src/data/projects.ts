export type ProjectCategory = "public" | "confidential";

export interface ProjectSource {
  labelEn: string;
  labelDe: string;
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  featured?: boolean;
  url?: string;
  githubUrl?: string;
  image?: string;
  imageMobile?: string;
  backdropImage?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  variant?: "default" | "quiz" | "menu";
  role: string;
  tech: string[];
  descriptionEn: string;
  descriptionDe: string;
  tagEn: string;
  tagDe: string;
  sources?: ProjectSource[];
}

/** Publicly presentable projects (Selected Work section). */
export const publicProjects: Project[] = [
  {
    slug: "casa-ai-agent",
    name: "Casa AI Agent",
    category: "public",
    featured: true,
    url: "https://steadfast-rebirth-production-3301.up.railway.app",
    githubUrl: "https://github.com/DevGrumpiness/casa-ai-agent",
    image: "/projects/casa-ai-agent.webp",
    imageMobile: "/projects/casa-ai-agent-mobile.webp",
    role: "Fullstack Development & AI Voice Integration",
    tech: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Docker",
      "n8n",
      "Vapi",
    ],
    tagEn: "AI voice reservation PoC",
    tagDe: "KI-Sprachreservierung PoC",
    descriptionEn:
      "AI-powered voice reservation system built as an end-to-end production PoC. A Vapi voice agent takes phone reservations through n8n and FastAPI, applying business rules for party size and daily capacity before persisting to PostgreSQL. A Next.js admin dashboard lets staff review, confirm and manually create reservations against the same FastAPI backend.",
    descriptionDe:
      "KI-gestütztes Sprachreservierungssystem als End-to-End-Produktions-PoC. Ein Vapi-Sprachagent nimmt Telefonreservierungen über n8n und FastAPI entgegen und wendet dabei Geschäftsregeln für Personenzahl und Tageskapazität an, bevor die Daten in PostgreSQL gespeichert werden. Ein Next.js-Admin-Dashboard ermöglicht Mitarbeitenden die Prüfung, Bestätigung und manuelle Erstellung von Reservierungen über dasselbe FastAPI-Backend.",
  },
  {
    slug: "casa-vazquez",
    name: "Casa Vazquez",
    category: "public",
    url: "https://menu.casavazquez.de",
    image: "/portfolio/casa-menu.webp",
    imageMobile: "/projects/casa-vazquez-mobile.webp",
    secondaryImage: "/portfolio/casa-menu-carte.webp",
    secondaryImageAlt: "Casa Vazquez guest menu",
    backdropImage: "/portfolio/casa-menu-carte.webp",
    variant: "menu",
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
    image: "/portfolio/ms-game.webp",
    imageMobile: "/projects/muenster-quiz-mobile.webp",
    backdropImage: "/portfolio/muenster-backdrop.png",
    variant: "quiz",
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

export const confidentialProjects: Project[] = [
  {
    slug: "lynx",
    name: "LYnx — Public Sector Platform",
    category: "confidential",
    image: "/portfolio/lynx-confidential.webp",
    role: "Fullstack / Web Developer — German Navy / Bundeswehr, Team LYnx",
    tech: ["Vue.js", "TypeScript", "SCSS", "Pinia", "Kafka", "Git"],
    tagEn: "Public sector · since 2022",
    tagDe: "Öffentlicher Sektor · seit 2022",
    descriptionEn:
      "Fullstack development within Team LYnx at the German Navy (Marinekommando), building browser-based applications on the LYnx IT portal platform. Adminimator, the first publicly documented application on LYnx, is described in official Bundeswehr/BMVg communications as the initial application built on the LYnx portal solution. I have worked as a developer within Team LYnx; project details beyond publicly documented information are limited due to contractual and security requirements.",
    descriptionDe:
      "Fullstack-Entwicklung im Team LYnx bei der Deutschen Marine (Marinekommando) mit browserbasierten Anwendungen auf der IT-Portallösung LYnx. Adminimator, die erste öffentlich dokumentierte Anwendung von LYnx, wird in offiziellen Bundeswehr-/BMVg-Veröffentlichungen als erste Anwendung der LYnx-Portallösung beschrieben. Ich arbeite als Entwickler im Team LYnx; über öffentlich dokumentierte Informationen hinaus sind Projektdetails aus vertraglichen und sicherheitsrelevanten Gründen eingeschränkt.",
    sources: [
      {
        labelEn: 'Bundeswehr.de — official news (search "Adminimator")',
        labelDe: "Bundeswehr.de — offizielle Meldungen (Suche „Adminimator“)",
        url: "https://www.bundeswehr.de/de/aktuelles",
      },
      {
        labelEn: 'Reservistenverband.de — search "LYnx"',
        labelDe: "Reservistenverband.de — Suche „LYnx“",
        url: "https://www.reservistenverband.de/",
      },
    ],
  },
  {
    slug: "check24",
    name: "CHECK24 — Hotel Comparison",
    category: "confidential",
    image: "/portfolio/check24-hotels.webp",
    role: "Frontend Developer — CHECK24, Münster",
    tech: ["React", "Responsive Web", "UI/UX Collaboration"],
    tagEn: "Product company · 2020–2022",
    tagDe: "Produktunternehmen · 2020–2022",
    descriptionEn:
      "Developed and maintained the frontend for CHECK24's hotel comparison product using React, implementing responsive layouts for a seamless experience across devices and collaborating closely with UI/UX designers to turn wireframes into production interfaces. Codebase and live product are proprietary to CHECK24.",
    descriptionDe:
      "Entwicklung und Pflege des Frontends für die Hotelvergleichsplattform von CHECK24 mit React, Umsetzung responsiver Layouts für ein durchgängiges Nutzererlebnis über verschiedene Endgeräte sowie enge Zusammenarbeit mit UI/UX-Designern zur Umsetzung von Wireframes in produktive Oberflächen. Codebasis und Live-Produkt liegen im Eigentum von CHECK24.",
  },
];
