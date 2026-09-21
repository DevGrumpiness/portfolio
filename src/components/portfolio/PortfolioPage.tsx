"use client";

import { useRef, useState } from "react";
import { usePortfolioEffects } from "@/hooks/usePortfolioEffects";
import AiData from "./AiData";
import CasaAiFeatured from "./CasaAiFeatured";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import SectionRail from "./SectionRail";
import TechStack from "./TechStack";
import WebRelaunch from "./WebRelaunch";

export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");
  const heroRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  usePortfolioEffects({
    heroRef,
    footerRef,
    setActiveSection,
  });

  return (
    <div className="portfolio-shell">
      <Header />
      <SectionRail activeSection={activeSection} />

      <main>
        <Hero sectionRef={heroRef} />
        <CasaAiFeatured />
        <Projects />
        <WebRelaunch />
        <TechStack />
        <Experience />
        <AiData />
        <Contact sectionRef={footerRef} />
      </main>

      <Footer />
    </div>
  );
}
