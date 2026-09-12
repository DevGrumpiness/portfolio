import type { CSSProperties } from "react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section section-experience">
      <div className="page-width experience-grid">
        <div className="section-copy reveal-left" data-reveal>
          <p className="eyebrow">Experience</p>
          <h2>
            From missions to <em>products.</em>
          </h2>
          <p>
            8+ years across web development, AI/data work and building my own
            business. Different environments, same focus: solve problems and
            deliver value.
          </p>
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
