"use client";

import { useEffect, type RefObject } from "react";
import { sections } from "@/data/portfolio";

type PortfolioEffectsOptions = {
  heroRef: RefObject<HTMLElement | null>;
  footerRef: RefObject<HTMLElement | null>;
  setActiveSection: (sectionId: string) => void;
};

export function usePortfolioEffects({
  heroRef,
  footerRef,
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
      {
        threshold: 0.16,
      },
    );

    reveals.forEach((node) => {
      revealObserver.observe(node);
    });

    const updateActiveSection = () => {
      const contact = document.getElementById("contact");

      if (contact) {
        const contactRect = contact.getBoundingClientRect();

        const isAtPageBottom =
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 4;

        const contactHasEnteredFocus =
          contactRect.top <= window.innerHeight * 0.52 &&
          contactRect.bottom > 0;

        if (isAtPageBottom || contactHasEnteredFocus) {
          setActiveSection("contact");
          return;
        }
      }

      const viewportLine = window.innerHeight * 0.4;

      const sectionElements = sections
        .map(({ id }) => document.getElementById(id))
        .filter((node): node is HTMLElement => node !== null);

      if (!sectionElements.length) {
        return;
      }

      const sectionAtViewportLine = sectionElements.find((section) => {
        const rect = section.getBoundingClientRect();

        return rect.top <= viewportLine && rect.bottom > viewportLine;
      });

      if (sectionAtViewportLine) {
        setActiveSection(sectionAtViewportLine.id);
        return;
      }

      let closestSection = sectionElements[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();

        let distance = 0;

        if (viewportLine < rect.top) {
          distance = rect.top - viewportLine;
        } else if (viewportLine > rect.bottom) {
          distance = viewportLine - rect.bottom;
        }

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });

      setActiveSection(closestSection.id);
    };

    const updateParallax = () => {
      if (reducedMotion) {
        return;
      }

      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();

        const offset = Math.max(
          -70,
          Math.min(70, -rect.top * 0.14),
        );

        heroRef.current.style.setProperty(
          "--parallax-y",
          `${offset}px`,
        );

        heroRef.current.style.setProperty(
          "--hero-copy-y",
          `${Math.max(
            -38,
            Math.min(38, -rect.top * 0.075),
          )}px`,
        );
      }

      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();

        const centerDelta =
          rect.top +
          rect.height / 2 -
          window.innerHeight / 2;

        footerRef.current.style.setProperty(
          "--footer-parallax-y",
          `${Math.max(
            -45,
            Math.min(45, centerDelta * -0.05),
          )}px`,
        );
      }
    };

    let frame = 0;

    const updatePageEffects = () => {
      frame = 0;

      updateActiveSection();
      updateParallax();
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updatePageEffects);
    };

    requestAnimationFrame(() => {
      updateActiveSection();
      updateParallax();
    });

    window.addEventListener("scroll", requestUpdate, {
      passive: true,
    });

    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);

    return () => {
      revealObserver.disconnect();

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [footerRef, heroRef, setActiveSection]);
}