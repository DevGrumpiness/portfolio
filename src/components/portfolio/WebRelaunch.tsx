"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import Arrow from "./Arrow";

export default function WebRelaunch() {
  const { t } = useLanguage();

  return (
    <section id="relaunch" className="section section-relaunch">
      <div className="page-width relaunch-grid">
        <div className="section-copy reveal-left" data-reveal>
          <p className="eyebrow">{t.relaunch.eyebrow}</p>
          <h2>{t.relaunch.heading}</h2>
          <p className="lead warm">{t.relaunch.lead}</p>
          <p>{t.relaunch.body}</p>
          <div className="button-row compact">
            <a className="button button-primary" href="#contact">
              {t.relaunch.cta} <Arrow />
            </a>
          </div>
        </div>

        <div className="relaunch-visual reveal-right" data-reveal>
          <div className="relaunch-browser">
            <div className="relaunch-browser-bar">
              <span className="relaunch-dot" />
              <span className="relaunch-dot" />
              <span className="relaunch-dot" />
              <span className="relaunch-browser-url">yourbusiness.com</span>
            </div>
            <div className="relaunch-browser-body">
              <div className="relaunch-skeleton relaunch-skeleton-title" />
              <div className="relaunch-skeleton" />
              <div className="relaunch-skeleton" />
              <div className="relaunch-skeleton relaunch-skeleton-short" />
            </div>
          </div>
          <p className="muted-link relaunch-note">{t.relaunch.note}</p>
        </div>
      </div>
    </section>
  );
}
