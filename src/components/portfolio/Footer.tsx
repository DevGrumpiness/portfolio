"use client";

import { siteConfig } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="page-width footer-row">
        <div>
          <strong>{siteConfig.name}</strong>
          <span>{t.footer.tagline}</span>
        </div>
        <div>
          <span>{t.contact.location}</span>
          <a href="#home" aria-label="Back to top">
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
