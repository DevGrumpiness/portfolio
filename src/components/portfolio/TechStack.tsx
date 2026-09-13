"use client";

import type { CSSProperties } from "react";
import { stack } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="section section-stack">
      <div className="page-width">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">{t.technologies.heading}</p>
            <h2>Tools & Technologies</h2>
          </div>
          <p>{t.technologies.subheading}</p>
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
  );
}
