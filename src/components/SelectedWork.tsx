"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { publicProjects } from "@/data/projects";
import { GithubIcon } from "./icons";

export function SelectedWork() {
  const { t, locale } = useLanguage();

  return (
    <section id="work" className="border-t border-border py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.work.heading}
          </h2>
          <p className="mt-3 text-foreground/60">{t.work.subheading}</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {publicProjects.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-2xl border border-border bg-muted/40 transition-colors hover:border-foreground/30"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.name} — screenshot`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                ) : null}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-medium">{project.name}</h3>
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/60">
                    {locale === "en" ? project.tagEn : project.tagDe}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {locale === "en" ? project.descriptionEn : project.descriptionDe}
                </p>

                <dl className="mt-4 space-y-1 text-xs text-foreground/60">
                  <div className="flex gap-1.5">
                    <dt className="font-medium text-foreground/80">{t.work.role}:</dt>
                    <dd>{project.role}</dd>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <dt className="font-medium text-foreground/80">{t.work.tech}:</dt>
                    <dd>{project.tech.join(" · ")}</dd>
                  </div>
                </dl>

                <div className="mt-5 flex items-center gap-4 text-sm font-medium">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:underline"
                    >
                      {t.work.visit}
                      <ArrowUpRight size={14} aria-hidden />
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-foreground/60 hover:text-foreground"
                    >
                      <GithubIcon width={14} height={14} aria-hidden />
                      {t.work.code}
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
