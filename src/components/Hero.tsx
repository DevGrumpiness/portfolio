"use client";

import { Download, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { siteConfig } from "@/config/site";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="mx-auto max-w-[1280px] px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-accent">{siteConfig.location}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-3 text-xl text-foreground/70 sm:text-2xl">
          {t.hero.title}
        </p>
        <p className="mt-2 font-mono text-sm text-foreground/50">
          {t.hero.stack}
        </p>
        <p className="mt-6 text-base leading-relaxed text-foreground/70 sm:text-lg">
          {t.hero.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            {t.hero.viewProjects}
          </a>
          <a
            href={siteConfig.links.cv}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40"
          >
            <Download size={16} aria-hidden />
            {t.hero.downloadCv}
          </a>

          <div className="ml-1 flex items-center gap-1">
            <a
              href={siteConfig.links.github}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2.5 text-foreground/60 transition-colors hover:bg-muted hover:text-foreground"
            >
              <GithubIcon width={18} height={18} />
            </a>
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
          </div>
        </div>
      </div>
    </section>
  );
}
