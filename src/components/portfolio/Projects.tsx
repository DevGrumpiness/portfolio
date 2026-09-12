"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/portfolio";
import styles from "@/app/projects-scroll.module.css";
import Arrow from "./Arrow";
import ProjectCard from "./ProjectCard";
import ProjectVisual from "./ProjectVisual";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const activeIndexRef = useRef(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const getScrollDistance = () => {
    if (typeof window === "undefined") return 0;

    return Math.max(
      window.innerHeight * 1.7,
      (projects.length - 1) * window.innerHeight * 0.95,
    );
  };

  const handleProjectNavClick = (index: number) => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (window.innerWidth < 980 || prefersReducedMotion) {
      const target = document.getElementById(`project-${projects[index].id}`);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const totalSteps = Math.max(1, projects.length - 1);
    const progress = index / totalSteps;
    const targetY = sectionTop + getScrollDistance() * progress;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;

    if (!section || !pin) return;

    const media = gsap.matchMedia();

    media.add(
      "(min-width: 980px) and (prefers-reduced-motion: no-preference)",
      () => {
        const cards = gsap.utils.toArray<HTMLElement>(
          "[data-project-visual]",
          section,
        );

        const details = gsap.utils.toArray<HTMLElement>(
          "[data-project-detail]",
          section,
        );

        const progress = section.querySelector<HTMLElement>(
          "[data-project-progress]",
        );

        if (!cards.length || cards.length !== details.length) {
          return;
        }

        const ACTIVE_X = 92;
        const INCOMING_X = 270;

        activeIndexRef.current = 0;
        setActiveProjectIndex(0);

        cards.forEach((card, index) => {
          gsap.set(card, {
            x: index === 0 ? ACTIVE_X : INCOMING_X,
            y: 0,
            scale: index === 0 ? 1.02 : 0.95,
            rotationZ: index === 0 ? 0 : 2.5,
            autoAlpha: index === 0 ? 1 : 0,
            zIndex: index === 0 ? 20 : 5 - index,
            transformOrigin: "center center",
          });
        });

        gsap.set(details, {
          autoAlpha: 0,
          y: 24,
        });

        gsap.set(details[0], {
          autoAlpha: 1,
          y: 0,
        });

        if (progress) {
          gsap.set(progress, { scaleX: 0 });
        }

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollDistance()}`,
            pin,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progress) {
                gsap.set(progress, { scaleX: self.progress });
              }

              const totalSteps = Math.max(1, cards.length - 1);
              const nextIndex = Math.min(
                totalSteps,
                Math.max(0, Math.round(self.progress * totalSteps)),
              );

              if (nextIndex !== activeIndexRef.current) {
                activeIndexRef.current = nextIndex;
                setActiveProjectIndex(nextIndex);
              }
            },
          },
        });

        for (
          let activeIndex = 1;
          activeIndex < cards.length;
          activeIndex += 1
        ) {
          const position = activeIndex - 1;

          for (
            let previousIndex = 0;
            previousIndex < activeIndex;
            previousIndex += 1
          ) {
            const previewRank = activeIndex - previousIndex - 1;

            timeline.to(
              cards[previousIndex],
              {
                x: Math.max(-40, 6 - previewRank * 28),
                y: 8 + previewRank * 6,
                scale: Math.max(0.82, 0.93 - previewRank * 0.05),
                rotationZ: -1.4 - previewRank * 0.5,
                autoAlpha: Math.max(0.2, 0.56 - previewRank * 0.14),
                zIndex: 10 - previewRank,
                duration: 0.9,
                ease: "power2.inOut",
              },
              position,
            );
          }

          timeline.to(
            cards[activeIndex],
            {
              x: ACTIVE_X,
              y: 0,
              scale: 1.02,
              rotationZ: 0,
              autoAlpha: 1,
              zIndex: 20,
              duration: 0.9,
              ease: "power2.out",
            },
            position + 0.02,
          );

          timeline.to(
            details[activeIndex - 1],
            {
              autoAlpha: 0,
              y: -18,
              duration: 0.28,
              ease: "power1.in",
            },
            position + 0.12,
          );

          timeline.fromTo(
            details[activeIndex],
            {
              autoAlpha: 0,
              y: 24,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.38,
              ease: "power2.out",
            },
            position + 0.34,
          );
        }

        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });

        const onLoad = () => {
          ScrollTrigger.refresh();
        };

        window.addEventListener("load", onLoad);

        return () => {
          window.removeEventListener("load", onLoad);
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      },
    );

    return () => {
      media.revert();
    };
  }, []);

  return (
    <section
      id="projects"
      className={`${styles.scrollSection} section section-projects`}
      ref={sectionRef}
    >
      <div className={styles.pin} ref={pinRef}>
        <div className={`page-width section-heading ${styles.heading}`}>
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2>Recent Projects</h2>
          </div>

          <p>Real use cases. Real projects. Real impact.</p>
        </div>

        <div className={styles.desktopShowcase}>
          <div className={styles.deckWrap}>
            <div className={styles.deck}>
              {projects.map((project, index) => (
                <ProjectVisual
                  key={project.id}
                  project={project}
                  priority={index === 0}
                />
              ))}
            </div>
          </div>

          <div className={styles.detailsWrap}>
            {projects.map((project, index) => (
              <article
                className={styles.detail}
                data-project-detail
                key={project.id}
              >
                <div className={styles.detailCounter}>
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </div>

                <p className="project-kicker">{project.kicker}</p>

                <h3>{project.title}</h3>

                <p className={styles.detailDescription}>
                  {project.description}
                </p>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.href ? (
                  <a
                    className={styles.projectLink}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.linkLabel} <Arrow external />
                  </a>
                ) : (
                  <span className="muted-link">{project.linkLabel}</span>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className={styles.thumbNav} aria-label="Recent projects quick navigation">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={`${styles.thumbButton} ${activeProjectIndex === index ? styles.thumbButtonActive : ""
                }`}
              onClick={() => handleProjectNavClick(index)}
              aria-pressed={activeProjectIndex === index}
            >
              <span className={styles.thumbMeta}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={styles.thumbTitle}>{project.title}</span>
            </button>
          ))}
        </div>

        <div className={styles.mobileList}>
          {projects.map((project, index) => (
            <div id={`project-${project.id}`} key={project.id}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        <div className={styles.progress} aria-hidden="true">
          <span data-project-progress />
        </div>
      </div>
    </section>
  );
}