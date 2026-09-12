import Image from "next/image";
import type { CSSProperties } from "react";
import Arrow from "./Arrow";

function ArchitectureNode({
  label,
  sublabel,
  mark,
  delay,
}: {
  label: string;
  sublabel: string;
  mark: string;
  delay: string;
}) {
  return (
    <div
      className="architecture-node"
      style={{ "--delay": delay } as CSSProperties}
    >
      <span className="architecture-mark">{mark}</span>
      <strong>{label}</strong>
      <small>{sublabel}</small>
    </div>
  );
}

export default function CasaAiFeatured() {
  return (
    <section id="casa-ai" className="section section-featured">
      <div className="page-width featured-grid">
        <div className="section-copy reveal-left" data-reveal>
          <p className="eyebrow">Featured Project</p>
          <h2>Casa AI Agent</h2>
          <p className="lead blue">
            AI-powered voice reservation system for a real hospitality business.
          </p>
          <p>
            End-to-end production PoC with voice agent, automation workflows,
            business rules and a deployed reservation dashboard.
          </p>
          <div className="button-row compact">
            <a
              className="button button-primary"
              href="https://steadfast-rebirth-production-3301.up.railway.app"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo <Arrow external />
            </a>
            <a
              className="button button-ghost"
              href="https://github.com/DevGrumpiness/casa-ai-agent"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow external />
            </a>
          </div>
        </div>

        <div className="architecture reveal-right" data-reveal>
          <div className="architecture-track">
            <ArchitectureNode
              label="Phone"
              sublabel="Customer calls"
              mark="☎"
              delay="0.05s"
            />
            <span
              className="architecture-arrow"
              style={{ "--delay": "0.22s" } as CSSProperties}
            >
              →
            </span>
            <ArchitectureNode
              label="Vapi"
              sublabel="Voice AI"
              mark="V"
              delay="0.32s"
            />
            <span
              className="architecture-arrow"
              style={{ "--delay": "0.5s" } as CSSProperties}
            >
              →
            </span>
            <ArchitectureNode
              label="n8n"
              sublabel="Automation"
              mark="n8n"
              delay="0.6s"
            />
            <span
              className="architecture-arrow"
              style={{ "--delay": "0.78s" } as CSSProperties}
            >
              →
            </span>
            <ArchitectureNode
              label="FastAPI"
              sublabel="Backend"
              mark="⚡"
              delay="0.88s"
            />
            <span
              className="architecture-arrow"
              style={{ "--delay": "1.06s" } as CSSProperties}
            >
              →
            </span>
            <ArchitectureNode
              label="PostgreSQL"
              sublabel="Database"
              mark="DB"
              delay="1.16s"
            />
          </div>
          <div
            className="dashboard-node"
            style={{ "--delay": "1.4s" } as CSSProperties}
          >
            <div className="dashboard-thumb">
              <Image
                src="/portfolio/casa-ai-agent.webp"
                alt="Casa AI Agent reservation dashboard"
                fill
                sizes="(max-width: 900px) 70vw, 260px"
              />
            </div>
            <div>
              <strong>Next.js</strong>
              <span>Admin Dashboard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
