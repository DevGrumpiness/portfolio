"use client";

import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

const marks = ["⌘", "✓", "◉"];

export default function AiData() {
  const { t } = useLanguage();

  return (
    <section id="ai-data" className="section section-ai-data">
      <div className="page-width">
        <details className="ai-data-accordion" data-reveal>
          <summary>
            <span>
              <strong>{t.aiData.summary}</strong>
              <small>{t.aiData.teaser}</small>
            </span>
            <ChevronDown className="ai-data-chevron" size={18} aria-hidden="true" />
          </summary>
          <div className="ai-data-grid">
            <div className="section-copy">
              <h2>{t.aiData.heading}</h2>
              <p>{t.aiData.body}</p>
            </div>
            <div className="data-cards">
              {t.aiData.cards.map((card, index) => (
                <article key={card.title}>
                  <span>{marks[index]}</span>
                  <div>
                    <strong>{card.title}</strong>
                    <small>{card.detail}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
