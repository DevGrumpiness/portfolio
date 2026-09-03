"use client";

import { Download, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { siteConfig } from "@/config/site";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="border-t border-border py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.contact.heading}
          </h2>
          <p className="mt-3 text-foreground/60">
            {t.contact.location} · {t.contact.available}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              <Mail size={16} aria-hidden />
              {t.contact.email}
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40"
            >
              <LinkedinIcon width={16} height={16} aria-hidden />
              {t.contact.linkedin}
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40"
            >
              <GithubIcon width={16} height={16} aria-hidden />
              {t.contact.github}
            </a>
            <a
              href={siteConfig.links.cv}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground/40"
            >
              <Download size={16} aria-hidden />
              {t.contact.downloadCv}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
