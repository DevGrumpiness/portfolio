export type Locale = "en" | "de";

export interface Translations {
  nav: {
    work: string;
    protected: string;
    experience: string;
    technologies: string;
    certifications: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    stack: string;
    description: string;
    viewProjects: string;
    downloadCv: string;
  };
  work: {
    heading: string;
    subheading: string;
    role: string;
    tech: string;
    visit: string;
    code: string;
  };
  protectedWork: {
    heading: string;
    subheading: string;
    sources: string;
    tech: string;
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
      protected: "Public Sector",
      experience: "Experience",
      technologies: "Technologies",
      certifications: "Certifications",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Frontend & Fullstack Developer",
      stack: "React · Vue · TypeScript · JavaScript",
      description:
        "Web developer with many years of professional experience across frontend and fullstack applications. Based in Münster, Germany, available for new opportunities from October 2026.",
      viewProjects: "View Projects",
      downloadCv: "Download CV",
    },
    work: {
      heading: "Selected Work",
      subheading: "Production projects I designed and built end to end.",
      role: "Role",
      tech: "Tech",
      visit: "Visit project",
      code: "View code",
    },
    protectedWork: {
      heading: "Protected / Public-Sector Work",
      subheading:
        "Selected projects cannot be presented publicly due to contractual and security requirements. Publicly documented information and non-sensitive technical context are shown where possible.",
      sources: "Public sources",
      tech: "Tech",
    },
    experience: {
      heading: "Experience",
    },
    technologies: {
      heading: "Technologies",
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
      protected: "Öffentlicher Sektor",
      experience: "Erfahrung",
      technologies: "Technologien",
      certifications: "Zertifikate",
      about: "Über mich",
      contact: "Kontakt",
    },
    hero: {
      title: "Frontend- & Fullstack-Entwickler",
      stack: "React · Vue · TypeScript · JavaScript",
      description:
        "Webentwickler mit langjähriger Berufserfahrung in Frontend- und Fullstack-Anwendungen. Ansässig in Münster, verfügbar für neue Projekte ab Oktober 2026.",
      viewProjects: "Projekte ansehen",
      downloadCv: "Lebenslauf herunterladen",
    },
    work: {
      heading: "Ausgewählte Projekte",
      subheading: "Produktivprojekte, die ich vollständig konzipiert und umgesetzt habe.",
      role: "Rolle",
      tech: "Tech",
      visit: "Projekt ansehen",
      code: "Code ansehen",
    },
    protectedWork: {
      heading: "Verdeckte Referenzen / Öffentlicher Sektor",
      subheading:
        "Ausgewählte Projekte können aus vertraglichen und sicherheitsrelevanten Gründen nicht öffentlich gezeigt werden. Öffentlich dokumentierte Informationen und unkritischer technischer Kontext werden, soweit möglich, dargestellt.",
      sources: "Öffentliche Quellen",
      tech: "Tech",
    },
    experience: {
      heading: "Erfahrung",
    },
    technologies: {
      heading: "Technologien",
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
