"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-t border-border py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.about.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {t.about.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-foreground/70">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
