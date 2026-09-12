import type { CSSProperties, RefObject } from "react";
import { projects } from "@/data/portfolio";
import styles from "@/app/projects-scroll.module.css";
import ProjectCard from "./ProjectCard";

export default function Projects({
  sectionRef,
  viewportRef,
  trackRef,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  viewportRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
}) {
  const scrollHeight = 100 + Math.max(0, projects.length - 1) * 110;

  return (
    <section
      id="projects"
      className={`${styles.scrollSection} section section-projects`}
      ref={sectionRef}
      style={
        {
          "--projects-scroll-height": `${scrollHeight}vh`,
        } as CSSProperties
      }
    >
      <div className={styles.sticky}>
        <div
          className={`page-width section-heading ${styles.heading}`}
          data-reveal
        >
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2>Recent Projects</h2>
          </div>
          <p>Real use cases. Real projects. Real impact.</p>
        </div>

        <div className={styles.viewport} ref={viewportRef}>
          <div className={styles.track} ref={trackRef}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className={styles.progress} aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
