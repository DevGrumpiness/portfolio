"use client";

import Image from "next/image";
import type { RefObject } from "react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import Arrow from "./Arrow";

export default function Contact({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
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
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h2>{t.contact.heading}</h2>
        <p>{t.contact.body}</p>
        <div className="button-row centered">
          <a
            className="button button-primary"
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {t.contact.getInTouch} <Arrow external />
          </a>
        </div>
      </div>
    </section>
  );
}
