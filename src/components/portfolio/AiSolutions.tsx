"use client";

import {
  FileText,
  Mail,
  MessageSquare,
  Phone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import Arrow from "./Arrow";

// Same order as t.aiSolutions.items
const icons: LucideIcon[] = [FileText, MessageSquare, Phone, Mail, Workflow];

export default function AiSolutions() {
  const { t } = useLanguage();
  const { labels } = t.aiSolutions;

  return (
    <section id="ai-solutions" className="section section-ai-solutions">
      <div className="page-width">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">{t.aiSolutions.eyebrow}</p>
            <h2>{t.aiSolutions.heading}</h2>
          </div>
          <p>{t.aiSolutions.lead}</p>
        </div>

        <ul className="solutions-table" data-reveal>
          {t.aiSolutions.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <li key={item.title} className="solution-row">
                <div className="solution-name">
                  <span className="solution-icon" aria-hidden="true">
                    {Icon && <Icon size={18} />}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <ul className="solution-tech" aria-label="Tech">
                      {item.tech.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    {item.proofHref && (
                      <a className="solution-proof" href={item.proofHref}>
                        {t.aiSolutions.proof} <Arrow />
                      </a>
                    )}
                  </div>
                </div>
                <div className="solution-step">
                  <small>{labels.problem}</small>
                  <p>{item.problem}</p>
                </div>
                <div className="solution-step">
                  <small>{labels.solution}</small>
                  <p>{item.solution}</p>
                </div>
                <div className="solution-step solution-result">
                  <small>{labels.result}</small>
                  <p>{item.result}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="button-row compact solutions-cta" data-reveal>
          <a className="button button-primary" href="#contact">
            {t.aiSolutions.cta} <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
