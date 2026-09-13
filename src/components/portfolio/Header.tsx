"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/translations";
import Arrow from "./Arrow";

export default function Header() {
  const { locale, setLocale, t } = useLanguage();
  const nextLocale: Locale = locale === "en" ? "de" : "en";

  return (
    <header className="top-nav">
      <a className="brand" href="#home" aria-label="Back to top">
        José Vazquez
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#home">Home</a>
        <a href="#projects">{t.nav.work}</a>
        <a href="#experience">{t.nav.experience}</a>
        <a href="#ai-data">AI & Data</a>
      </nav>
      <button
        className="lang-toggle"
        type="button"
        onClick={() => setLocale(nextLocale)}
        aria-label={`Switch language to ${nextLocale.toUpperCase()}`}
      >
        {locale.toUpperCase()}
      </button>
      <a className="nav-cta" href="#contact">
        {t.nav.contact} <Arrow />
      </a>
    </header>
  );
}
