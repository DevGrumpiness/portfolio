import Image from "next/image";
import type { RefObject } from "react";
import Arrow from "./Arrow";

export default function Contact({
  sectionRef,
}: {
  sectionRef: RefObject<HTMLElement | null>;
}) {
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
        </div>
      </div>
    </section>
  );
}
