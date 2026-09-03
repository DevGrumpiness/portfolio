"use client";

import { ExternalLink, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { protectedProjects, adminimatorSources } from "@/data/projects";

export function ProtectedWork() {
  const { t, locale } = useLanguage();

  return (
    <section id="protected-work" className="border-t border-border bg-muted/40 py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.protectedWork.heading}
          </h2>
          <p className="mt-3 text-foreground/60">{t.protectedWork.subheading}</p>
        </div>

        <div className="mt-12 grid gap-6">
          {protectedProjects.map((project) => (
            <article
              key={project.slug}
              className="rounded-2xl border border-border bg-background/70 p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground/50">
                  <ShieldCheck size={18} aria-hidden />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-medium">{project.name}</h3>
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
                      {t.protectedWork.tech}:
                    </span>{" "}
                    {project.tech.join(" · ")}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-medium text-foreground/50 uppercase tracking-wide">
                      {t.protectedWork.sources}
                    </p>
                    <ul className="mt-2 space-y-1">
                      {adminimatorSources.map((source) => (
                        <li key={source.url}>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                          >
                            {locale === "en" ? source.labelEn : source.labelDe}
                            <ExternalLink size={12} aria-hidden />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
