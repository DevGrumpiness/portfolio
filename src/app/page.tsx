"use client";

import Image from "next/image";
import styles from "./projects-scroll.module.css";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

const sections = [
  { id: "home", number: "01", label: "Home" },
  { id: "casa-ai", number: "02", label: "Featured" },
  { id: "projects", number: "03", label: "Projects" },
  { id: "stack", number: "04", label: "Tech Stack" },
  { id: "experience", number: "05", label: "Experience" },
  { id: "ai-data", number: "06", label: "AI & Data" },
  { id: "contact", number: "07", label: "Contact" },
];

const stack = [
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
];

const experience = [
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
];

function Arrow({ external = false }: { external?: boolean }) {
  return (
    <span aria-hidden="true" className="inline-arrow">
      {external ? "↗" : "→"}
    </span>
  );
}

function ArchitectureNode({
  label,
  sublabel,
  mark,
  delay,
}: {
  label: string;
  sublabel: string;
  mark: string;
  delay: string;
}) {
  return (
    <div
      className="architecture-node"
      style={{ "--delay": delay } as CSSProperties}
    >
      <span className="architecture-mark">{mark}</span>
      <strong>{label}</strong>
      <small>{sublabel}</small>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const heroRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const projectsViewportRef = useRef<HTMLDivElement | null>(null);
  const projectsTrackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    reveals.forEach((node) => revealObserver.observe(node));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.15, 0.4, 0.7],
      },
    );

    sections.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) sectionObserver.observe(node);
    });

    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      if (reducedMotion) return;

      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const offset = Math.max(-70, Math.min(70, -rect.top * 0.14));
        heroRef.current.style.setProperty("--parallax-y", `${offset}px`);
        heroRef.current.style.setProperty(
          "--hero-copy-y",
          `${Math.max(-38, Math.min(38, -rect.top * 0.075))}px`,
        );
      }

      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const centerDelta =
          rect.top + rect.height / 2 - window.innerHeight / 2;
        footerRef.current.style.setProperty(
          "--footer-parallax-y",
          `${Math.max(-45, Math.min(45, centerDelta * -0.05))}px`,
        );
      }

      if (
        projectsRef.current &&
        projectsViewportRef.current &&
        projectsTrackRef.current
      ) {
        const section = projectsRef.current;
        const viewport = projectsViewportRef.current;
        const track = projectsTrackRef.current;
        const cards = Array.from(
          track.querySelectorAll<HTMLElement>("[data-horizontal-project]"),
        );

        if (window.innerWidth >= 980) {
          const rect = section.getBoundingClientRect();
          const scrollRange = Math.max(1, section.offsetHeight - window.innerHeight);
          const progress = Math.max(0, Math.min(1, -rect.top / scrollRange));

          // Measure the actually visible viewport, not the flex/grid item's
          // intrinsic content width. Otherwise the viewport can grow with the
          // max-content track and maxTranslate becomes 0.
          const viewportWidth = Math.min(
            window.innerWidth,
            viewport.getBoundingClientRect().width || window.innerWidth,
          );
          const maxTranslate = Math.max(0, track.scrollWidth - viewportWidth);
          const translateX = -maxTranslate * progress;

          track.style.setProperty("--projects-x", `${translateX}px`);
          section.style.setProperty("--projects-progress", progress.toFixed(4));

          const viewportRect = viewport.getBoundingClientRect();
          const viewportCenter = viewportRect.left + viewportRect.width / 2;

          cards.forEach((card) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distance = Math.min(
              1,
              Math.abs(cardCenter - viewportCenter) / (viewportRect.width * 0.58),
            );
            const scale = 1.055 - distance * 0.105;
            const opacity = 1 - distance * 0.32;

            card.style.setProperty("--project-scale", scale.toFixed(3));
            card.style.setProperty("--project-opacity", opacity.toFixed(3));
            card.classList.toggle(styles.focused, distance < 0.22);
          });
        } else {
          track.style.removeProperty("--projects-x");
          section.style.removeProperty("--projects-progress");
          cards.forEach((card) => {
            card.style.removeProperty("--project-scale");
            card.style.removeProperty("--project-opacity");
            card.classList.remove(styles.focused);
          });
        }
      }

      document
        .querySelectorAll<HTMLElement>("[data-project-media]")
        .forEach((node) => {
          const rect = node.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const delta = (center - window.innerHeight / 2) * -0.025;
          node.style.setProperty(
            "--media-y",
            `${Math.max(-16, Math.min(16, delta))}px`,
          );
        });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="portfolio-shell">
      <header className="top-nav">
        <a className="brand" href="#home" aria-label="Back to top">
          José Vazquez
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#ai-data">AI & Data</a>
        </nav>
        <a className="nav-cta" href="#contact">
          Contact <Arrow />
        </a>
      </header>

      <aside className="section-rail" aria-label="Section navigation">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={activeSection === section.id ? "active" : ""}
            aria-current={activeSection === section.id ? "location" : undefined}
          >
            <span>{section.number}</span>
            <small>{section.label}</small>
          </a>
        ))}
      </aside>

      <main>
        <section id="home" className="hero" ref={heroRef}>
          <div className="hero-media" aria-hidden="true">
            <Image
              src="/portfolio/hero-bar.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="hero-image"
            />
          </div>
          <div className="hero-overlay" />
          <div className="page-width hero-content">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">Web Developer · AI Automation · Real-world Solutions</p>
              <h1>
                Building digital solutions that <em>actually work.</em>
              </h1>
              <p className="hero-intro">
                I build modern web applications and AI-powered tools with a
                focus on real-world use cases, clean code and measurable impact.
              </p>
              <div className="button-row">
                <a className="button button-primary" href="#projects">
                  View my work <Arrow />
                </a>
                <a
                  className="button button-ghost"
                  href="https://github.com/DevGrumpiness"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <Arrow external />
                </a>
              </div>
              <div className="hero-capabilities" aria-label="Core capabilities">
                <span>▣ Web Applications</span>
                <span>⌁ AI & Automation</span>
                <span>◇ Data Annotation</span>
                <span>◎ Real-world Experience</span>
              </div>
            </div>
          </div>
        </section>

        <section id="casa-ai" className="section section-featured">
          <div className="page-width featured-grid">
            <div className="section-copy reveal-left" data-reveal>
              <p className="eyebrow">Featured Project</p>
              <h2>Casa AI Agent</h2>
              <p className="lead blue">
                AI-powered voice reservation system for a real hospitality
                business.
              </p>
              <p>
                End-to-end production PoC with voice agent, automation workflows,
                business rules and a deployed reservation dashboard.
              </p>
              <div className="button-row compact">
                <a
                  className="button button-primary"
                  href="https://steadfast-rebirth-production-3301.up.railway.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo <Arrow external />
                </a>
                <a
                  className="button button-ghost"
                  href="https://github.com/DevGrumpiness/casa-ai-agent"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <Arrow external />
                </a>
              </div>
            </div>

            <div className="architecture reveal-right" data-reveal>
              <div className="architecture-track">
                <ArchitectureNode label="Phone" sublabel="Customer calls" mark="☎" delay="0.05s" />
                <span className="architecture-arrow" style={{ "--delay": "0.22s" } as CSSProperties}>→</span>
                <ArchitectureNode label="Vapi" sublabel="Voice AI" mark="V" delay="0.32s" />
                <span className="architecture-arrow" style={{ "--delay": "0.5s" } as CSSProperties}>→</span>
                <ArchitectureNode label="n8n" sublabel="Automation" mark="n8n" delay="0.6s" />
                <span className="architecture-arrow" style={{ "--delay": "0.78s" } as CSSProperties}>→</span>
                <ArchitectureNode label="FastAPI" sublabel="Backend" mark="⚡" delay="0.88s" />
                <span className="architecture-arrow" style={{ "--delay": "1.06s" } as CSSProperties}>→</span>
                <ArchitectureNode label="PostgreSQL" sublabel="Database" mark="DB" delay="1.16s" />
              </div>
              <div className="dashboard-node" style={{ "--delay": "1.4s" } as CSSProperties}>
                <div className="dashboard-thumb">
                  <Image
                    src="/portfolio/casa-ai-agent.webp"
                    alt="Casa AI Agent reservation dashboard"
                    fill
                    sizes="(max-width: 900px) 70vw, 260px"
                  />
                </div>
                <div>
                  <strong>Next.js</strong>
                  <span>Admin Dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={`${styles.scrollSection} section section-projects`}
          ref={projectsRef}
        >
          <div className={styles.sticky}>
            <div className={`page-width section-heading ${styles.heading}`} data-reveal>
              <div>
                <p className="eyebrow">Selected Work</p>
                <h2>Recent Projects</h2>
              </div>
              <p>Real use cases. Real projects. Real impact.</p>
            </div>

            <div className={styles.viewport} ref={projectsViewportRef}>
              <div className={styles.track} ref={projectsTrackRef}>
                <article
                  className={`project-card confidential ${styles.card}`}
                  data-horizontal-project
                >
                  <div className="project-media" data-project-media>
                    <Image
                      src="/portfolio/lynx-confidential.webp"
                      alt="Abstract confidential project placeholder"
                      fill
                      sizes="(max-width: 979px) 100vw, 620px"
                    />
                    <div className="project-shade" />
                    <div className="confidential-lock" aria-hidden="true">🔒</div>
                  </div>
                  <div className="project-body">
                    <p className="project-kicker">Protected Project</p>
                    <h3>LYnx</h3>
                    <p>Innovative digital prototypes for public-sector organizations.</p>
                    <div className="tag-row">
                      <span>Vue</span>
                      <span>TypeScript</span>
                      <span>Keycloak</span>
                      <span>Docker</span>
                    </div>
                    <span className="muted-link">Project details available on request.</span>
                  </div>
                </article>

                <article
                  className={`project-card ${styles.card}`}
                  data-horizontal-project
                >
                  <div className="project-media" data-project-media>
                    <Image
                      src="/portfolio/check24-hotels.webp"
                      alt="Hotel and travel imagery representing hotel comparison work"
                      fill
                      sizes="(max-width: 979px) 100vw, 620px"
                    />
                    <div className="project-shade" />
                  </div>
                  <div className="project-body">
                    <p className="project-kicker">E-Commerce</p>
                    <h3>CHECK24 Hotel Comparison</h3>
                    <p>Frontend development focused on performant, responsive hotel comparison experiences.</p>
                    <div className="tag-row">
                      <span>React</span>
                      <span>TypeScript</span>
                      <span>PHP</span>
                      <span>SCSS</span>
                      <span>Docker</span>
                    </div>
                    <a href="https://hotel.check24.de" target="_blank" rel="noreferrer">
                      CHECK24 Hotel <Arrow external />
                    </a>
                  </div>
                </article>

                <article
                  className={`project-card ${styles.card} ${styles.quizCard}`}
                  data-horizontal-project
                >
                  <div className={`project-media ${styles.quizMedia}`} data-project-media>
                    <Image
                      src="/portfolio/ms-game.webp"
                      alt="Münster Quiz Game showing category selection and live scoring"
                      fill
                      sizes="(max-width: 979px) 100vw, 620px"
                      className={styles.quizImage}
                    />
                    <div className="project-shade" />
                  </div>
                  <div className="project-body">
                    <p className="project-kicker">Local Web Game</p>
                    <h3>Münster Quiz Game</h3>
                    <p>Mobile-first local quiz game with category-based rounds, live scoring and chat.</p>
                    <div className="tag-row">
                      <span>Local Quiz</span>
                      <span>Mobile-first</span>
                      <span>Game UX</span>
                    </div>
                    <a href="https://ms-game.de" target="_blank" rel="noreferrer">
                      Play at ms-game.de <Arrow external />
                    </a>
                  </div>
                </article>
              </div>
            </div>

            <div className={styles.progress} aria-hidden="true">
              <span />
            </div>
          </div>
        </section>

        <section id="stack" className="section section-stack">
          <div className="page-width">
            <div className="section-heading" data-reveal>
              <div>
                <p className="eyebrow">Tech Stack</p>
                <h2>Tools & Technologies</h2>
              </div>
              <p>A pragmatic stack for modern web development and AI integration.</p>
            </div>
            <div className="tech-strip" data-reveal>
              {stack.map(([name, mark], index) => (
                <div
                  key={name}
                  className="tech-card"
                  style={{ "--delay": `${index * 0.055}s` } as CSSProperties}
                >
                  <span className="tech-mark">{mark}</span>
                  <strong>{name}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section section-experience">
          <div className="page-width experience-grid">
            <div className="section-copy reveal-left" data-reveal>
              <p className="eyebrow">Experience</p>
              <h2>From missions to <em>products.</em></h2>
              <p>
                8+ years across web development, AI/data work and building my
                own business. Different environments, same focus: solve problems
                and deliver value.
              </p>
            </div>
            <div className="timeline" data-reveal>
              {experience.map((item, index) => (
                <div className="timeline-item" key={`${item.period}-${item.title}`} style={{ "--delay": `${0.12 + index * 0.14}s` } as CSSProperties}>
                  <span className="timeline-dot" />
                  <time>{item.period}</time>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.role}</p>
                  </div>
                  <small>{item.meta}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ai-data" className="section section-ai-data">
          <div className="page-width ai-data-grid">
            <div className="section-copy" data-reveal>
              <p className="eyebrow">AI & Data</p>
              <h2>AI QA & Data Annotation</h2>
              <p>
                Practical experience in data annotation, content evaluation and
                quality assurance for LLM and multimodal model training.
              </p>
            </div>
            <div className="data-cards" data-reveal>
              <article><span>⌘</span><div><strong>LLM Data Annotation</strong><small>Text, image & video</small></div></article>
              <article><span>✓</span><div><strong>Content Evaluation</strong><small>Relevance, safety, quality</small></div></article>
              <article><span>◉</span><div><strong>Transcription & QA</strong><small>Legal & general content</small></div></article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" ref={footerRef}>
          <div className="contact-media" aria-hidden="true">
            <Image
              src="/portfolio/footer-cta.webp"
              alt=""
              fill
              sizes="100vw"
              className="contact-image"
            />
          </div>
          <div className="contact-overlay" />
          <div className="page-width contact-content" data-reveal>
            <p className="eyebrow">Good ideas. Built well.</p>
            <h2>Let&apos;s build something great.</h2>
            <p>Open for interesting projects, collaborations and opportunities.</p>
            <div className="button-row centered">
              <a
                className="button button-primary"
                href="https://www.linkedin.com/in/jos%C3%A9-benjamin-m-j-guerrero-vazquez-30369b14b/"
                target="_blank"
                rel="noreferrer"
              >
                Get in touch <Arrow external />
              </a>
              <a
                className="button button-ghost"
                href="https://github.com/DevGrumpiness"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub <Arrow external />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-row">
          <div><strong>José Vazquez</strong><span>Web Developer · AI Automation · Problem Solver</span></div>
          <div><span>Münster, Germany</span><a href="#home" aria-label="Back to top">↑</a></div>
        </div>
      </footer>
    </div>
  );
}
