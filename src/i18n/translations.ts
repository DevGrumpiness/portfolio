export type Locale = "en" | "de";

export interface Translations {
  nav: {
    work: string;
    experience: string;
    technologies: string;
    certifications: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    description: string;
    viewProjects: string;
    github: string;
    downloadCv: string;
  };
  work: {
    heading: string;
    subheading: string;
    role: string;
    tech: string;
    visit: string;
    code: string;
    featuredBadge: string;
    liveDemo: string;
    architecture: string;
    deployedNote: string;
    confidentialHeading: string;
    confidentialSubheading: string;
    sources: string;
    otherHeading: string;
  };
  experience: {
    heading: string;
  };
  technologies: {
    heading: string;
  };
  certifications: {
    heading: string;
  };
  about: {
    heading: string;
    body: string[];
  };
  contact: {
    heading: string;
    location: string;
    available: string;
    email: string;
    linkedin: string;
    downloadCv: string;
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      work: "Work",
      experience: "Experience",
      technologies: "Technologies",
      certifications: "Certifications",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title:
        "Web Developer building production-ready web applications and AI-powered tools.",
      description:
        "I build with React, Vue, TypeScript and Next.js, and I ship practical AI integrations — from voice agents to backend automation — as working systems, not demos.",
      viewProjects: "View Projects",
      github: "GitHub",
      downloadCv: "Download CV",
    },
    work: {
      heading: "Selected Work",
      subheading:
        "Production projects and AI systems I designed, built and deployed end to end.",
      role: "Role",
      tech: "Tech",
      visit: "Visit project",
      code: "View code",
      featuredBadge: "Latest project",
      liveDemo: "Live Demo",
      architecture: "Architecture",
      deployedNote: "Deployed and running — not a mockup.",
      confidentialHeading: "Public Sector & Confidential Work",
      confidentialSubheading:
        "Selected projects cannot be presented publicly due to contractual and security requirements. Publicly documented information and non-sensitive technical context are shown where possible.",
      sources: "Public sources",
      otherHeading: "Other Projects",
    },
    experience: {
      heading: "Experience",
    },
    technologies: {
      heading: "Core Stack",
    },
    certifications: {
      heading: "Certifications",
    },
    about: {
      heading: "About",
      body: [
        "Around a decade of experience in web and software development, with a frontend specialisation and hands-on fullstack experience across private-sector and public-sector projects.",
        "I favour pragmatic engineering and maintainable software over unnecessary complexity, and I'm comfortable taking ownership of a project and learning new technologies as needed.",
      ],
    },
    contact: {
      heading: "Let's build something useful.",
      location: "Münster, Germany",
      available: "Available from October 2026",
      email: "Email",
      linkedin: "LinkedIn",
      downloadCv: "Download CV",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  de: {
    nav: {
      work: "Projekte",
      experience: "Erfahrung",
      technologies: "Technologien",
      certifications: "Zertifikate",
      about: "Über mich",
      contact: "Kontakt",
    },
    hero: {
      title:
        "Webentwickler für produktionsreife Webanwendungen und KI-gestützte Tools.",
      description:
        "Ich entwickle mit React, Vue, TypeScript und Next.js und setze praxisnahe KI-Integrationen um — von Sprachagenten bis zur Backend-Automatisierung — als funktionierende Systeme, nicht als Demos.",
      viewProjects: "Projekte ansehen",
      github: "GitHub",
      downloadCv: "Lebenslauf herunterladen",
    },
    work: {
      heading: "Ausgewählte Projekte",
      subheading:
        "Produktivprojekte und KI-Systeme, die ich vollständig konzipiert, gebaut und ausgerollt habe.",
      role: "Rolle",
      tech: "Tech",
      visit: "Projekt ansehen",
      code: "Code ansehen",
      featuredBadge: "Vorzeigeprojekt",
      liveDemo: "Live-Demo",
      architecture: "Architektur",
      deployedNote: "Live im Einsatz — kein Mockup.",
      confidentialHeading: "Öffentlicher Sektor & vertrauliche Projekte",
      confidentialSubheading:
        "Ausgewählte Projekte können aus vertraglichen und sicherheitsrelevanten Gründen nicht öffentlich gezeigt werden. Öffentlich dokumentierte Informationen und unkritischer technischer Kontext werden, soweit möglich, dargestellt.",
      sources: "Öffentliche Quellen",
      otherHeading: "Weitere Projekte",
    },
    experience: {
      heading: "Erfahrung",
    },
    technologies: {
      heading: "Kern-Stack",
    },
    certifications: {
      heading: "Zertifikate",
    },
    about: {
      heading: "Über mich",
      body: [
        "Rund ein Jahrzehnt Erfahrung in der Web- und Softwareentwicklung, mit Schwerpunkt Frontend und praktischer Fullstack-Erfahrung in privatwirtschaftlichen und öffentlichen Projekten.",
        "Ich bevorzuge pragmatisches Engineering und wartbare Software gegenüber unnötiger Komplexität und übernehme gerne Verantwortung für Projekte sowie neue Technologien.",
      ],
    },
    contact: {
      heading: "Lass uns etwas Nützliches bauen.",
      location: "Münster, Deutschland",
      available: "Verfügbar ab Oktober 2026",
      email: "E-Mail",
      linkedin: "LinkedIn",
      downloadCv: "Lebenslauf herunterladen",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
    },
  },
};
