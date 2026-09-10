"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { LanguageSwitch } from "./LanguageSwitch";

export function Nav() {
  const { t } = useLanguage();

  const items: { href: string; label: string }[] = [
    { href: "#work", label: t.nav.work },
    { href: "#experience", label: t.nav.experience },
    { href: "#technologies", label: t.nav.technologies },
    { href: "#certifications", label: t.nav.certifications },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <Link href="#top" className="text-sm font-semibold tracking-tight">
          JGV
        </Link>
        <nav className="hidden gap-6 text-sm text-foreground/70 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <LanguageSwitch />
      </div>
    </header>
  );
}
