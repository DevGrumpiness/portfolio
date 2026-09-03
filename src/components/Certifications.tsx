"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { certifications } from "@/data/certifications";

export function Certifications() {
  const { t, locale } = useLanguage();

  return (
    <section id="certifications" className="border-t border-border py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.certifications.heading}
        </h2>

        <ol className="mt-12 space-y-0">
          {certifications.map((item, index) => (
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
