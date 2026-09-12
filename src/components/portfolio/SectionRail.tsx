import { sections } from "@/data/portfolio";

export default function SectionRail({
  activeSection,
}: {
  activeSection: string;
}) {
  return (
    <aside className="section-rail" aria-label="Section navigation">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={activeSection === section.id ? "active" : ""}
          aria-current={activeSection === section.id ? "location" : undefined}
        >
          <span>{section.number}</span>
          <small>{section.label}</small>
        </a>
      ))}
    </aside>
  );
}
