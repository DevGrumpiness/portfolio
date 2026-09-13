"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";
import styles from "@/app/projects-scroll.module.css";
import { useLanguage } from "@/i18n/LanguageProvider";
import Arrow from "./Arrow";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { locale, t } = useLanguage();
  const isQuiz = project.variant === "quiz";
  const isMenu = project.variant === "menu";
  const image = project.image ?? "/portfolio/lynx-confidential.webp";
  const description =
    locale === "de" ? project.descriptionDe : project.descriptionEn;
  const tag = locale === "de" ? project.tagDe : project.tagEn;
  const unavailableLabel =
    locale === "de"
      ? "Details auf Anfrage."
      : "Project details available on request.";

  const cardClassName = [
    "project-card",
    styles.card,
    project.category === "confidential" ? "confidential" : "",
    isQuiz ? styles.quizCard : "",
    isMenu ? styles.menuCard : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={cardClassName}
      data-project-card
      style={{ "--card-index": index } as CSSProperties}
    >
      <div
        className={[
          "project-media",
          isQuiz || isMenu ? styles.showcaseMedia : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {isQuiz || isMenu ? (
          <>
            <Image
              src={project.backdropImage ?? image}
              alt=""
              fill
              aria-hidden="true"
              sizes="(max-width: 979px) 100vw, 680px"
              className={styles.showcaseBackdrop}
            />
            <div className={styles.showcaseBackdropShade} />

            <div
              className={
                isMenu ? styles.menuScreens : styles.quizScreenContainer
              }
            >
              {isMenu && project.secondaryImage ? (
                <div className={`${styles.deviceFrame} ${styles.menuGuestFrame}`}>
                  <Image
                    src={project.secondaryImage}
                    alt={project.secondaryImageAlt ?? ""}
                    fill
                    sizes="240px"
                    className={styles.deviceImage}
                  />
                </div>
              ) : null}

              <div
                className={`${styles.deviceFrame} ${
                  isMenu ? styles.menuAdminFrame : styles.quizFrame
                }`}
              >
                <Image
                  src={image}
                  alt={project.name}
                  fill
                  sizes="260px"
                  className={styles.deviceImage}
                />
              </div>
            </div>
          </>
        ) : (
          <Image
            src={image}
            alt={project.name}
            fill
            sizes="(max-width: 979px) 100vw, 680px"
          />
        )}

        <div className="project-shade" />

        {project.category === "confidential" ? (
          <div className="confidential-lock" aria-hidden="true">
            🔒
          </div>
        ) : null}
      </div>

      <div className="project-body">
        <p className="project-kicker">{tag}</p>
        <h3>{project.name}</h3>
        <p>{description}</p>
        <div className="tag-row">
          {project.tech.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {project.url ? (
          <a href={project.url} target="_blank" rel="noreferrer">
            {t.work.visit} <Arrow external />
          </a>
        ) : (
          <span className="muted-link">{unavailableLabel}</span>
        )}
      </div>
    </article>
  );
}
