"use client";

import Image from "next/image";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { publicProjects, confidentialProjects } from "@/data/projects";
import { GithubIcon } from "./icons";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function Work() {
  const { t, locale } = useLanguage();

  const featured = publicProjects.find((project) => project.featured);
  const otherProjects = publicProjects.filter((project) => !project.featured);

  return (
    <section id="work" className="border-t border-border py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.work.heading}
          </h2>
          <p className="mt-3 text-foreground/60">{t.work.subheading}</p>
        </div>

        {featured ? (
          <article className="mt-12 overflow-hidden rounded-2xl border border-border bg-muted/40">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-6 sm:p-8">
                <span className="inline-flex items-center rounded-full bg-foreground px-2.5 py-0.5 text-xs font-medium text-background">
                  {t.work.featuredBadge}
                </span>
                <h3 className="mt-4 text-xl font-medium">{featured.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {locale === "en" ? featured.descriptionEn : featured.descriptionDe}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {featured.tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-foreground/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-medium">
                  {featured.url ? (
                    <a
                      href={featured.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-background transition-opacity hover:opacity-85"
                    >
                      {t.work.liveDemo}
                      <ArrowUpRight size={14} aria-hidden />
                    </a>
                  ) : null}
                  {featured.githubUrl ? (
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 transition-colors hover:border-foreground/40"
                    >
                      <GithubIcon width={14} height={14} aria-hidden />
                      {t.work.code}
                    </a>
                  ) : null}
                  <a
                    href="#architecture"
                    className="inline-flex items-center gap-1 text-foreground/60 hover:text-foreground"
                  >
                    {t.work.architecture}
                  </a>
                </div>

                <p className="mt-5 inline-flex items-center gap-1.5 text-xs text-foreground/50">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                    aria-hidden
                  />
                  {t.work.deployedNote}
                </p>
              </div>

              <div className="border-t border-border bg-background/60 p-6 sm:p-8 lg:border-t-0 lg:border-l">
                <p className="font-mono text-xs text-foreground/50">
                  Voice reservation flow
                </p>
                <ArchitectureDiagram variant="card" className="mt-4" />
                <p className="sr-only">
                  Phone call flows through Vapi, then n8n, then FastAPI, which
                  persists to PostgreSQL. A Next.js admin dashboard connects
                  directly to the same FastAPI backend.
                </p>

                {featured.image ? (
                  <div className="mt-6">
                    <p className="font-mono text-xs text-foreground/50">
                      Admin dashboard — live data
                    </p>
                    <div className="relative mt-3 aspect-[16/10] w-full overflow-hidden rounded-xl border border-border">
                      <Image
                        src={featured.image}
                        alt="Casa AI Agent admin dashboard showing live reservations"
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ) : null}

        <div className="mt-16">
          <h3 className="text-xs font-medium uppercase tracking-wide text-foreground/50">
            {t.work.confidentialHeading}
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-foreground/60">
            {t.work.confidentialSubheading}
          </p>

          <div className="mt-8 grid gap-6">
            {confidentialProjects.map((project) => (
              <article
                key={project.slug}
                className="rounded-2xl border border-border bg-muted/40 p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground/50">
                    <ShieldCheck size={18} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="text-lg font-medium">{project.name}</h4>
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/60">
                        {locale === "en" ? project.tagEn : project.tagDe}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-foreground/60">{project.role}</p>

                    <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                      {locale === "en" ? project.descriptionEn : project.descriptionDe}
                    </p>

                    <p className="mt-4 text-xs text-foreground/60">
                      <span className="font-medium text-foreground/80">
                        {t.work.tech}:
                      </span>{" "}
                      {project.tech.join(" · ")}
                    </p>

                    {project.sources?.length ? (
                      <div className="mt-5">
                        <p className="text-xs font-medium text-foreground/50 uppercase tracking-wide">
                          {t.work.sources}
                        </p>
                        <ul className="mt-2 space-y-1">
                          {project.sources.map((source) => (
                            <li key={source.url}>
                              <a
                                href={source.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                              >
                                {locale === "en" ? source.labelEn : source.labelDe}
                                <ArrowUpRight size={12} aria-hidden />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xs font-medium uppercase tracking-wide text-foreground/50">
            {t.work.otherHeading}
          </h3>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {otherProjects.map((project) => (
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
                    <h4 className="text-lg font-medium">{project.name}</h4>
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
      </div>
    </section>
  );
}
