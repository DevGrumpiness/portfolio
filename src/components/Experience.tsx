"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { experience } from "@/data/experience";

export function Experience() {
  const { t, locale } = useLanguage();

  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.experience.heading}
        </h2>

        <ol className="mt-12 space-y-0">
          {experience.map((item, index) => (
            <li
              key={item.org + item.period}
              className={`grid gap-2 border-border py-6 sm:grid-cols-[160px_1fr] sm:gap-8 ${
                index !== 0 ? "border-t" : ""
              }`}
            >
              <p className="font-mono text-sm text-foreground/50">{item.period}</p>
              <div>
                <h3 className="font-medium">
                  {locale === "en" ? item.titleEn : item.titleDe}
                </h3>
                <p className="mt-0.5 text-sm text-foreground/60">{item.org}</p>
                <p className="mt-2 text-xs text-foreground/50">
                  {item.tech.join(" · ")}
                </p>
                {(locale === "en" ? item.notesEn : item.notesDe)?.length ? (
                  <ul className="mt-2 list-inside list-disc space-y-0.5 text-sm text-foreground/60">
                    {(locale === "en" ? item.notesEn : item.notesDe)?.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
