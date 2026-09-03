"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { technologyGroups } from "@/data/technologies";

export function Technologies() {
  const { t, locale } = useLanguage();

  return (
    <section id="technologies" className="border-t border-border bg-muted/40 py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {t.technologies.heading}
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {technologyGroups.map((group) => (
            <div key={group.titleEn}>
              <h3 className="text-xs font-medium uppercase tracking-wide text-foreground/50">
                {locale === "en" ? group.titleEn : group.titleDe}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
