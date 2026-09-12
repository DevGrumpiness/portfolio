import Image from "next/image";
import type { Project } from "@/data/portfolio";
import styles from "@/app/projects-scroll.module.css";

export default function ProjectVisual({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const isQuiz = project.variant === "quiz";
  const isMenu = project.variant === "menu";

  return (
    <article className={styles.visualCard} data-project-visual aria-hidden="true">
      {isQuiz || isMenu ? (
        <>
          <Image
            src={project.backdropImage ?? project.image}
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 979px) 100vw, 720px"
            className={`${styles.visualBackdrop} ${isQuiz ? styles.quizBackdrop : styles.menuBackdrop
              }`}
          />

          <div
            className={`${styles.visualBackdropShade} ${isQuiz ? styles.quizBackdropShade : styles.menuBackdropShade
              }`}
          />

          {isQuiz ? (
            <div className={styles.quizVisualStage}>
              <div className={`${styles.device} ${styles.quizDevice}`}>
                <Image
                  src={project.image}
                  alt=""
                  fill
                  priority={priority}
                  sizes="300px"
                  className={styles.deviceImage}
                />
              </div>
            </div>
          ) : null}

          {isMenu ? (
            <div className={styles.menuVisualStage}>
              {project.secondaryImage ? (
                <div className={`${styles.device} ${styles.menuGuestDevice}`}>
                  <Image
                    src={project.secondaryImage}
                    alt=""
                    fill
                    priority={priority}
                    sizes="320px"
                    className={styles.deviceImage}
                  />
                </div>
              ) : null}

              <div className={`${styles.device} ${styles.menuAdminDevice}`}>
                <Image
                  src={project.image}
                  alt=""
                  fill
                  priority={priority}
                  sizes="250px"
                  className={styles.deviceImage}
                />
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <Image
          src={project.image}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 979px) 100vw, 720px"
          className={styles.visualImage}
        />
      )}

      <div className={styles.visualShade} />

      {project.confidential ? (
        <div className={styles.visualLock} aria-hidden="true">
          🔒
        </div>
      ) : null}
    </article>
  );
}