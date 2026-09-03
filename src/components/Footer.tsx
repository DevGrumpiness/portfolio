"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { siteConfig } from "@/config/site";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 text-xs text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.name}. {t.footer.rights}
        </p>
        <p>{siteConfig.location}</p>
      </div>
    </footer>
  );
}
