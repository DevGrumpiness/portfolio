"use client";

import type { CSSProperties } from "react";
import { experience } from "@/data/portfolio";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section section-experience">
      <div className="page-width experience-grid">
        <div className="section-copy reveal-left" data-reveal>
          <p className="eyebrow">{t.experience.heading}</p>
          <h2>{t.experience.title}</h2>
          <p>{t.experience.body}</p>
        </div>
        <div className="timeline" data-reveal>
          {experience.map((item, index) => (
            <div
              className="timeline-item"
              key={`${item.period}-${item.title}`}
              style={{
                "--delay": `${0.12 + index * 0.14}s`,
              } as CSSProperties}
            >
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
  );
}
