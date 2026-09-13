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
    role: "Web Developer · Innovation ",
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
