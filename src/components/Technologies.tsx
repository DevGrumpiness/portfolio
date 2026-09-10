"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { coreStack } from "@/data/technologies";

export function Technologies() {
  const { t } = useLanguage();

  return (
    <section id="technologies" className="border-t border-border bg-muted/40 py-16">
      <div className="mx-auto max-w-[1280px] px-6">
        <h2 className="text-xs font-medium uppercase tracking-wide text-foreground/50">
          {t.technologies.heading}
        </h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {coreStack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground/70"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
