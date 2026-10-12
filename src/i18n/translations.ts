export type Locale = "en" | "de";

export interface Translations {
  nav: {
    work: string;
    experience: string;
    technologies: string;
    certifications: string;
    about: string;
    aiSolutions: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    viewProjects: string;
    github: string;
    downloadCv: string;
    capabilities: string[];
  };
  work: {
    heading: string;
    subheading: string;
    role: string;
    tech: string;
    visit: string;
    code: string;
    confidentialHeading: string;
    confidentialSubheading: string;
    sources: string;
    otherHeading: string;
  };
  relaunch: {
    eyebrow: string;
    heading: string;
    lead: string;
    body: string;
    cta: string;
  };
  aiSolutions: {
    eyebrow: string;
    heading: string;
    lead: string;
    cta: string;
    labels: { problem: string; solution: string; result: string };
    proof: string;
    items: {
      title: string;
      problem: string;
      solution: string;
      result: string;
      tech: string[];
      proofHref?: string;
    }[];
  };
  aiData: {
    summary: string;
    teaser: string;
    heading: string;
    body: string;
    cards: { title: string; detail: string }[];
  };
  meta: {
    title: string;
    description: string;
  };
  experience: {
    heading: string;
    title: string;
    body: string;
  };
  technologies: {
    heading: string;
    subheading: string;
  };
  certifications: {
    heading: string;
  };
  about: {
    heading: string;
    body: string[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    body: string;
    location: string;
    available: string;
    email: string;
    linkedin: string;
    getInTouch: string;
    downloadCv: string;
  };
  footer: {
    tagline: string;
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
      aiSolutions: "AI Solutions",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Web Development + AI Automation",
      title: "Building *production-ready* web applications and AI-powered tools.",
      description:
        "I build with React, Vue, TypeScript and Next.js, and I ship practical web applications that solve real problems.",
      viewProjects: "View Projects",
      github: "GitHub",
      downloadCv: "Download CV",
      capabilities: [
        "▣ Web Applications",
        "⌁ AI & Automation",
        "◇ Data Annotation",
        "◎ Real-world Experience",
      ],
    },
    work: {
      heading: "Selected Work",
      subheading:
        "Production projects and AI systems I designed, built and deployed end to end.",
      role: "Role",
      tech: "Tech",
      visit: "Visit project",
      code: "View code",
      confidentialHeading: "Public Sector & Confidential Work",
      confidentialSubheading:
        "Selected projects cannot be presented publicly due to contractual and security requirements. Publicly documented information and non-sensitive technical context are shown where possible.",
      sources: "Public sources",
      otherHeading: "Built and shipped.",
    },
    relaunch: {
      eyebrow: "Web Relaunch",
      heading: "Outdated website? Time for a fresh start.",
      lead: "Your business deserves a modern web presence that impresses.",
      body:
        "If your site loads slow, looks dated, or just doesn't represent you anymore, I'll rebuild it from scratch: fast, modern, mobile-first, and easy to keep fresh long after launch.",
      cta: "Let's talk relaunch",
    },
    aiSolutions: {
      eyebrow: "AI Solutions",
      heading: "I automate what costs your team time.",
      lead:
        "Custom AI automations for small and mid-sized businesses: built for your processes, connected to your tools and running in production.",
      cta: "Request an AI solution",
      labels: { problem: "Problem", solution: "Solution", result: "Result" },
      proof: "Live in production: Casa AI Agent",
      items: [
        {
          title: "Quote automation",
          problem: "Writing quotes by hand takes hours.",
          solution: "AI reads the request and drafts a complete quote.",
          result: "Quotes ready in minutes.",
          tech: ["n8n", "LLM", "FastAPI"],
        },
        {
          title: "Intelligent chats",
          problem: "Customers wait for answers outside business hours.",
          solution: "A chatbot trained on your business answers around the clock.",
          result: "Fewer calls, faster answers.",
          tech: ["Next.js", "LLM", "FastAPI"],
        },
        {
          title: "Voice agents",
          problem: "Missed calls mean lost customers.",
          solution: "An AI phone assistant takes calls 24/7.",
          result: "Appointments booked automatically.",
          tech: ["Vapi", "n8n", "FastAPI"],
          proofHref: "#projects",
        },
        {
          title: "Email automation",
          problem: "The inbox eats up hours every day.",
          solution: "AI sorts, routes and drafts replies to incoming emails.",
          result: "Inbox handled in a fraction of the time.",
          tech: ["n8n", "LLM"],
        },
        {
          title: "Workflow automation",
          problem: "Data gets copied between tools by hand.",
          solution: "Your tools get connected into automated workflows.",
          result: "No more copy & paste, fewer errors.",
          tech: ["n8n", "Python"],
        },
      ],
    },
    aiData: {
      summary: "Also: AI QA & Data Annotation",
      teaser: "Annotation and quality assurance for LLM training",
      heading: "AI QA & Data Annotation",
      body:
        "Practical experience in data annotation, content evaluation and quality assurance for LLM and multimodal model training.",
      cards: [
        { title: "LLM Data Annotation", detail: "Text, image & video" },
        { title: "Content Evaluation", detail: "Relevance, safety, quality" },
        { title: "Transcription & QA", detail: "Legal & general content" },
      ],
    },
    meta: {
      title: "José Guerrero Vazquez | Web Developer & AI Automation",
      description:
        "Web Developer building modern web applications and practical AI-powered tools with React, Vue, TypeScript, Next.js and FastAPI.",
    },
    experience: {
      heading: "Experience",
      title: "From missions to products.",
      body:
        "8+ years across web development, AI/data work and building my own business. Different environments, same focus: solve problems and deliver value.",
    },
    technologies: {
      heading: "Core Stack",
      subheading:
        "A pragmatic stack for modern web development and AI integration, continuously adapting to new challenges.",
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
      eyebrow: "Good ideas. Built well.",
      heading: "Let's build something useful.",
      body: "Open for interesting projects, collaborations and opportunities.",
      location: "Münster, Germany",
      available: "Available from October 2026",
      email: "Email",
      linkedin: "LinkedIn",
      getInTouch: "Get in touch",
      downloadCv: "Download CV",
    },
    footer: {
      tagline: "Web Developer · AI Automation · Problem Solver",
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
      aiSolutions: "KI-Lösungen",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Webentwicklung + KI-Automatisierung",
      title: "Moderne *Webentwicklung*, die funktioniert.",
      description:
        "Ich entwickle mit React, Vue, TypeScript und Next.js und setze praxisnahe Web-Applikationen um, die echte Probleme lösen.",
      viewProjects: "Projekte ansehen",
      github: "GitHub",
      downloadCv: "Lebenslauf herunterladen",
      capabilities: [
        "▣ Webanwendungen",
        "⌁ KI & Automatisierung",
        "◇ Datenannotation",
      ],
    },
    work: {
      heading: "Ausgewählte Projekte",
      subheading:
        "Produktivprojekte und KI-Systeme, die ich vollständig konzipiert, gebaut und ausgerollt habe.",
      role: "Rolle",
      tech: "Tech",
      visit: "Projekt ansehen",
      code: "Code ansehen",
      confidentialHeading: "Öffentlicher Sektor & vertrauliche Projekte",
      confidentialSubheading:
        "Ausgewählte Projekte können aus vertraglichen und sicherheitsrelevanten Gründen nicht öffentlich gezeigt werden. Öffentlich dokumentierte Informationen und unkritischer technischer Kontext werden, soweit möglich, dargestellt.",
      sources: "Öffentliche Quellen",
      otherHeading: "Gebaut und im Einsatz.",
    },
    relaunch: {
      eyebrow: "Website-Relaunch",
      heading: "Alte Website? Zeit für einen Neuanfang.",
      lead: "Dein Unternehmen verdient eine moderne Webpräsenz, die überzeugt.",
      body:
        "Wenn Ihre Seite langsam lädt, veraltet wirkt oder Sie einfach nicht mehr richtig repräsentiert, baue ich sie von Grund auf neu: schnell, modern, mobile-first und danach leicht selbst aktuell zu halten.",
      cta: "Relaunch anfragen",
    },
    aiSolutions: {
      eyebrow: "KI-Lösungen",
      heading: "Ich automatisiere, was Ihr Team Zeit kostet.",
      lead:
        "Individuelle KI-Automatisierungen für kleine und mittlere Unternehmen: passend zu Ihren Prozessen, verbunden mit Ihren Tools und im echten Einsatz.",
      cta: "KI-Lösung anfragen",
      labels: { problem: "Problem", solution: "Lösung", result: "Ergebnis" },
      proof: "Live im Einsatz: Casa AI Agent",
      items: [
        {
          title: "Angebotsautomatisierung",
          problem: "Angebote zu schreiben dauert Stunden.",
          solution: "KI liest die Anfrage und erstellt ein fertiges Angebot.",
          result: "Angebote in Minuten statt Stunden.",
          tech: ["n8n", "LLM", "FastAPI"],
        },
        {
          title: "Intelligente Chats",
          problem: "Kunden warten außerhalb der Geschäftszeiten auf Antworten.",
          solution: "Ein Chatbot, der Ihr Unternehmen kennt, antwortet rund um die Uhr.",
          result: "Weniger Anrufe, schnellere Antworten.",
          tech: ["Next.js", "LLM", "FastAPI"],
        },
        {
          title: "Voice Agents",
          problem: "Verpasste Anrufe sind verlorene Kunden.",
          solution: "Ein KI-Telefonassistent nimmt Anrufe rund um die Uhr an.",
          result: "Termine werden automatisch gebucht.",
          tech: ["Vapi", "n8n", "FastAPI"],
          proofHref: "#projects",
        },
        {
          title: "E-Mail-Automatisierung",
          problem: "Das Postfach frisst jeden Tag Stunden.",
          solution: "KI sortiert E-Mails, leitet sie weiter und schreibt Antwortentwürfe.",
          result: "Posteingang in einem Bruchteil der Zeit erledigt.",
          tech: ["n8n", "LLM"],
        },
        {
          title: "Workflow-Automatisierung",
          problem: "Daten werden von Hand zwischen Tools kopiert.",
          solution: "Ihre Tools werden zu automatischen Abläufen verbunden.",
          result: "Kein Copy & Paste mehr, weniger Fehler.",
          tech: ["n8n", "Python"],
        },
      ],
    },
    aiData: {
      summary: "Außerdem: KI-QA & Datenannotation",
      teaser: "Annotation und Qualitätssicherung für LLM-Training",
      heading: "KI-QA & Datenannotation",
      body:
        "Praktische Erfahrung in Datenannotation, Inhaltsbewertung und Qualitätssicherung für das Training von LLMs und multimodalen Modellen.",
      cards: [
        { title: "LLM-Datenannotation", detail: "Text, Bild & Video" },
        { title: "Inhaltsbewertung", detail: "Relevanz, Sicherheit, Qualität" },
        { title: "Transkription & QA", detail: "Juristische & allgemeine Inhalte" },
      ],
    },
    meta: {
      title: "José Guerrero Vazquez | Webentwickler & KI-Automatisierung",
      description:
        "Webentwickler für moderne Webanwendungen und praxisnahe KI-gestützte Tools mit React, Vue, TypeScript, Next.js und FastAPI.",
    },
    experience: {
      heading: "Erfahrung",
      title: "Von Einsätzen zu Produkten.",
      body:
        "8+ Jahre in Webentwicklung, KI-/Datenarbeit und dem Aufbau eigener Geschäftslösungen. Unterschiedliche Umfelder, gleicher Fokus: Probleme lösen und Wert liefern.",
    },
    technologies: {
      heading: "Kern-Stack",
      subheading:
        "Ein pragmatischer Stack für moderne Webentwicklung und KI-Integration, der sich laufend an neue Anforderungen anpasst.",
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
      eyebrow: "Gute Ideen. Sauber umgesetzt.",
      heading: "Lass uns etwas Nützliches bauen.",
      body: "Offen für interessante Projekte, Kooperationen und Chancen.",
      location: "Münster, Deutschland",
      available: "Verfügbar ab Oktober 2026",
      email: "E-Mail",
      linkedin: "LinkedIn",
      getInTouch: "Kontakt aufnehmen",
      downloadCv: "Lebenslauf herunterladen",
    },
    footer: {
      tagline: "Webentwickler · KI-Automatisierung · Problemlöser",
      rights: "Alle Rechte vorbehalten.",
    },
  },
};
