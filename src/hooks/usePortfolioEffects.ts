"use client";

import { useEffect, type RefObject } from "react";
import styles from "@/app/projects-scroll.module.css";
import { sections } from "@/data/portfolio";

type PortfolioEffectsOptions = {
  heroRef: RefObject<HTMLElement | null>;
  footerRef: RefObject<HTMLElement | null>;
  projectsRef: RefObject<HTMLElement | null>;
  projectsViewportRef: RefObject<HTMLDivElement | null>;
  projectsTrackRef: RefObject<HTMLDivElement | null>;
  setActiveSection: (sectionId: string) => void;
};

export function usePortfolioEffects({
  heroRef,
  footerRef,
  projectsRef,
  projectsViewportRef,
  projectsTrackRef,
  setActiveSection,
}: PortfolioEffectsOptions) {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    reveals.forEach((node) => revealObserver.observe(node));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.15, 0.4, 0.7],
      },
    );

    sections.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) sectionObserver.observe(node);
    });

    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      if (reducedMotion) return;

      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const offset = Math.max(-70, Math.min(70, -rect.top * 0.14));
        heroRef.current.style.setProperty("--parallax-y", `${offset}px`);
        heroRef.current.style.setProperty(
          "--hero-copy-y",
          `${Math.max(-38, Math.min(38, -rect.top * 0.075))}px`,
        );
      }

      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const centerDelta =
          rect.top + rect.height / 2 - window.innerHeight / 2;
        footerRef.current.style.setProperty(
          "--footer-parallax-y",
          `${Math.max(-45, Math.min(45, centerDelta * -0.05))}px`,
        );
      }

      if (
        projectsRef.current &&
        projectsViewportRef.current &&
        projectsTrackRef.current
      ) {
        const section = projectsRef.current;
        const viewport = projectsViewportRef.current;
        const track = projectsTrackRef.current;
        const cards = Array.from(
          track.querySelectorAll<HTMLElement>("[data-horizontal-project]"),
        );

        if (window.innerWidth >= 980) {
          const rect = section.getBoundingClientRect();
          const scrollRange = Math.max(
            1,
            section.offsetHeight - window.innerHeight,
          );
          const progress = Math.max(0, Math.min(1, -rect.top / scrollRange));

          const viewportWidth = Math.min(
            window.innerWidth,
            viewport.getBoundingClientRect().width || window.innerWidth,
          );
          const maxTranslate = Math.max(0, track.scrollWidth - viewportWidth);
          const translateX = -maxTranslate * progress;

          track.style.setProperty("--projects-x", `${translateX}px`);
          section.style.setProperty("--projects-progress", progress.toFixed(4));

          const viewportRect = viewport.getBoundingClientRect();
          const viewportCenter = viewportRect.left + viewportRect.width / 2;

          cards.forEach((card) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distance = Math.min(
              1,
              Math.abs(cardCenter - viewportCenter) /
                (viewportRect.width * 0.58),
            );
            const scale = 1.055 - distance * 0.105;
            const opacity = 1 - distance * 0.32;

            card.style.setProperty("--project-scale", scale.toFixed(3));
            card.style.setProperty("--project-opacity", opacity.toFixed(3));
            card.classList.toggle(styles.focused, distance < 0.22);
          });
        } else {
          track.style.removeProperty("--projects-x");
          section.style.removeProperty("--projects-progress");
          cards.forEach((card) => {
            card.style.removeProperty("--project-scale");
            card.style.removeProperty("--project-opacity");
            card.classList.remove(styles.focused);
          });
        }
      }

      document
        .querySelectorAll<HTMLElement>("[data-project-media]")
        .forEach((node) => {
          const rect = node.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const delta = (center - window.innerHeight / 2) * -0.025;
          node.style.setProperty(
            "--media-y",
            `${Math.max(-16, Math.min(16, delta))}px`,
          );
        });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [
    footerRef,
    heroRef,
    projectsRef,
    projectsTrackRef,
    projectsViewportRef,
    setActiveSection,
  ]);
}
