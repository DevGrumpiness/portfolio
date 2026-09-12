export const sections = [
  { id: "home", number: "01", label: "Home" },
  { id: "casa-ai", number: "02", label: "Featured" },
  { id: "projects", number: "03", label: "Projects" },
  { id: "stack", number: "04", label: "Tech Stack" },
  { id: "experience", number: "05", label: "Experience" },
  { id: "ai-data", number: "06", label: "AI & Data" },
  { id: "contact", number: "07", label: "Contact" },
] as const;

export const stack = [
  ["React", "R"],
  ["Next.js", "N"],
  ["Vue.js", "V"],
  ["TypeScript", "TS"],
  ["Python", "Py"],
  ["FastAPI", "FA"],
  ["PostgreSQL", "PG"],
  ["Docker", "D"],
  ["n8n", "n8n"],
  ["Vapi", "V"],
] as const;

export const experience = [
  {
    period: "2024 — Now",
    title: "Casa Vazquez",
    role: "Founder / Operator · Digital tools & automation",
    meta: "Business · Operations · AI workflows",
  },
  {
    period: "2022 — Now",
    title: "LYnx",
    role: "Web Developer · Protected project",
    meta: "Vue · TypeScript · Keycloak",
  },
  {
    period: "2020 — 2022",
    title: "CHECK24",
    role: "Frontend Developer · Hotel Comparison",
    meta: "React · TypeScript · E-Commerce",
  },
  {
    period: "2019 — 2020",
    title: "Commando Cyber Innovation Room",
    role: "Frontend Developer · Prototypes & dashboards",
    meta: "React · REST APIs · JavaScript",
  },
] as const;

export type ProjectVariant = "default" | "quiz" | "menu";

export type Project = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: readonly string[];
  href?: string;
  linkLabel: string;
  confidential?: boolean;
  variant?: ProjectVariant;
};

export const projects: readonly Project[] = [
  {
    id: "lynx",
    kicker: "Protected Project",
    title: "LYnx",
    description: "Innovative digital prototypes for public-sector organizations.",
    image: "/portfolio/lynx-confidential.webp",
    imageAlt: "Abstract confidential project placeholder",
    tags: ["Vue", "TypeScript", "Keycloak", "Docker"],
    linkLabel: "Project details available on request.",
    confidential: true,
  },
  {
    id: "check24-hotels",
    kicker: "E-Commerce",
    title: "CHECK24 Hotel Comparison",
    description:
      "Frontend development focused on performant, responsive hotel comparison experiences.",
    image: "/portfolio/check24-hotels.webp",
    imageAlt: "Hotel and travel imagery representing hotel comparison work",
    tags: ["React", "TypeScript", "PHP", "SCSS", "Docker"],
    href: "https://hotel.check24.de",
    linkLabel: "CHECK24 Hotel",
  },
  {
    id: "ms-game",
    kicker: "Local Web Game",
    title: "Münster Quiz Game",
    description:
      "Mobile-first local quiz game with category-based rounds, live scoring and chat.",
    image: "/portfolio/ms-game.webp",
    imageAlt: "Münster Quiz Game showing category selection and live scoring",
    tags: ["Local Quiz", "Mobile-first", "Game UX"],
    href: "https://ms-game.de",
    linkLabel: "Play at ms-game.de",
    variant: "quiz",
  },
  {
    id: "casa-menu",
    kicker: "Hospitality Web App",
    title: "Casa Vazquez Digital Menu",
    description:
      "Mobile-first digital menu with instant product availability management for day-to-day bar operations.",
    image: "/portfolio/casa-menu.webp",
    imageAlt: "Casa Vazquez digital menu availability management interface",
    tags: ["Digital Menu", "Availability", "Mobile-first"],
    href: "https://menu.casavazquez.de",
    linkLabel: "Open digital menu",
    variant: "menu",
  },
] as const;
