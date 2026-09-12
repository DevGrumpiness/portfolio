import Image from "next/image";
import type { Project } from "@/data/portfolio";
import styles from "@/app/projects-scroll.module.css";
import Arrow from "./Arrow";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isQuiz = project.variant === "quiz";
  const isMenu = project.variant === "menu";

  const cardClassName = [
    "project-card",
    styles.card,
    project.confidential ? "confidential" : "",
    isQuiz ? styles.quizCard : "",
    isMenu ? styles.menuCard : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={cardClassName}
      data-project-card
      style={{ "--card-index": index } as React.CSSProperties}
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
              src={project.backdropImage ?? project.image}
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
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="260px"
                  className={styles.deviceImage}
                />
              </div>
            </div>
          </>
        ) : (
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 979px) 100vw, 680px"
          />
        )}

        <div className="project-shade" />

        {project.confidential ? (
          <div className="confidential-lock" aria-hidden="true">
            🔒
          </div>
        ) : null}
      </div>

      <div className="project-body">
        <p className="project-kicker">{project.kicker}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer">
            {project.linkLabel} <Arrow external />
          </a>
        ) : (
          <span className="muted-link">{project.linkLabel}</span>
        )}
      </div>
    </article>
  );
}
