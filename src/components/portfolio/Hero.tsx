import Image from "next/image";
import type { RefObject } from "react";
import Arrow from "./Arrow";

export default function Hero({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLElement | null>;
}) {
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
          <p className="eyebrow">
            Web Developer · AI Automation · Real-world Solutions
          </p>
          <h1>
            Building digital solutions that <em>actually work.</em>
          </h1>
          <p className="hero-intro">
            I build modern web applications and AI-powered tools with a focus on
            real-world use cases, clean code and measurable impact.
          </p>
          <div className="button-row">
            <a className="button button-primary" href="#casa-ai">
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
  );
}
