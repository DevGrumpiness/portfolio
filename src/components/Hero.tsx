"use client";

import { Download, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { siteConfig } from "@/config/site";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="mx-auto max-w-[1280px] px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-accent">{siteConfig.location}</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-foreground/70 sm:text-lg">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40"
            >
              <GithubIcon width={16} height={16} aria-hidden />
              {t.hero.github}
            </a>
          </div>

          <div className="mt-6 flex items-center gap-1">
            <a
              href={siteConfig.links.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2.5 text-foreground/60 transition-colors hover:bg-muted hover:text-foreground"
            >
              <LinkedinIcon width={18} height={18} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="rounded-full p-2.5 text-foreground/60 transition-colors hover:bg-muted hover:text-foreground"
            >
              <Mail size={18} />
            </a>
            <a
              href={siteConfig.links.cv}
              aria-label={t.hero.downloadCv}
              className="rounded-full p-2.5 text-foreground/60 transition-colors hover:bg-muted hover:text-foreground"
            >
              <Download size={18} />
            </a>
          </div>
        </div>

        <div
          id="architecture"
          className="rounded-2xl border border-border bg-muted/40 p-5 sm:p-6"
        >
          <p className="font-mono text-xs text-foreground/50">
            Casa AI Agent — system architecture
          </p>
          <ArchitectureDiagram variant="hero" className="mt-4" />
        </div>
      </div>
    </section>
  );
}
