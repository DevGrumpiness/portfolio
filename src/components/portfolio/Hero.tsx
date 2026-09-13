"use client";

import Image from "next/image";
import type { RefObject } from "react";
import { useLanguage } from "@/i18n/LanguageProvider";
import Arrow from "./Arrow";

export default function Hero({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero" ref={sectionRef}>
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
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.title}</h1>
          <p className="hero-intro">{t.hero.description}</p>
          <div className="button-row">
            <a className="button button-primary" href="#casa-ai">
              {t.hero.viewProjects} <Arrow />
            </a>
          </div>
          <div className="hero-capabilities" aria-label="Core capabilities">
            {t.hero.capabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
