import Image from "next/image";
import type { Project } from "@/data/portfolio";
import styles from "@/app/projects-scroll.module.css";
import Arrow from "./Arrow";

export default function ProjectCard({ project }: { project: Project }) {
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

  const mediaClassName = [
    "project-media",
    isQuiz ? styles.quizMedia : "",
    isMenu ? styles.menuMedia : "",
  ]
    .filter(Boolean)
    .join(" ");

  const imageClassName = isQuiz
    ? styles.quizImage
    : isMenu
      ? styles.menuImage
      : undefined;

  return (
    <article className={cardClassName} data-horizontal-project>
      <div className={mediaClassName} data-project-media>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 979px) 100vw, 620px"
          className={imageClassName}
        />
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
