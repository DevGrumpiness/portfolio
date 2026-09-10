"use client";

interface Node {
  id: string;
  label: string;
  sublabel?: string;
  x: number;
  y: number;
}

interface Edge {
  from: string;
  to: string;
  animated?: boolean;
  dashed?: boolean;
}

const MAIN_NODES: Node[] = [
  { id: "phone", label: "Phone", sublabel: "Caller", x: 40, y: 70 },
  { id: "vapi", label: "Vapi", sublabel: "Voice agent", x: 180, y: 70 },
  { id: "n8n", label: "n8n", sublabel: "Workflow", x: 320, y: 70 },
  { id: "fastapi", label: "FastAPI", sublabel: "Business rules", x: 460, y: 70 },
  { id: "postgres", label: "PostgreSQL", sublabel: "Persistence", x: 600, y: 70 },
];

const DASHBOARD_NODE: Node = {
  id: "dashboard",
  label: "Next.js Admin",
  sublabel: "Dashboard",
  x: 460,
  y: 180,
};

const EDGES: Edge[] = [
  { from: "phone", to: "vapi", animated: true },
  { from: "vapi", to: "n8n", animated: true },
  { from: "n8n", to: "fastapi", animated: true },
  { from: "fastapi", to: "postgres", animated: true },
  { from: "dashboard", to: "fastapi", dashed: true },
];

const NODE_W = 96;
const NODE_H = 44;

function nodeById(id: string): Node {
  const node = [...MAIN_NODES, DASHBOARD_NODE].find((n) => n.id === id);
  if (!node) throw new Error(`Unknown architecture node: ${id}`);
  return node;
}

/**
 * Technical architecture visualization for the Casa AI Agent system.
 * Deliberately plain (labeled nodes + connecting lines + a subtle animated
 * flow) rather than decorative — meant to read as a real system diagram.
 */
export function ArchitectureDiagram({
  variant = "hero",
  className,
}: {
  variant?: "hero" | "card";
  className?: string;
}) {
  const compact = variant === "card";
  const viewBoxHeight = 220;
  const viewBoxWidth = 640;

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        role="img"
        aria-labelledby="architecture-diagram-title"
        className="w-full"
      >
        <title id="architecture-diagram-title">
          Casa AI Agent system architecture
        </title>
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth={compact ? 5 : 6}
            markerHeight={compact ? 5 : 6}
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" className="fill-foreground/40" />
          </marker>
        </defs>

        {/* Connecting lines, drawn first so nodes sit on top */}
        {EDGES.map((edge) => {
          const from = nodeById(edge.from);
          const to = nodeById(edge.to);
          const isVertical = from.x === to.x;
          const x1 = isVertical ? from.x : from.x + NODE_W / 2;
          const x2 = isVertical ? to.x : to.x - NODE_W / 2;
          const y1 = isVertical ? from.y - NODE_H / 2 : from.y;
          const y2 = isVertical ? to.y + NODE_H / 2 : to.y;

          return (
            <path
              key={`${edge.from}-${edge.to}`}
              d={`M${x1},${y1} L${x2},${y2}`}
              className={`fill-none stroke-border ${
                edge.animated ? "architecture-flow-line" : ""
              }`}
              strokeWidth={edge.dashed ? 1.5 : 2}
              strokeDasharray={edge.dashed ? "3 4" : undefined}
              markerEnd="url(#arrow)"
            />
          );
        })}

        {/* Nodes */}
        {[...MAIN_NODES, DASHBOARD_NODE].map((node) => (
          <g key={node.id} transform={`translate(${node.x - NODE_W / 2}, ${node.y - NODE_H / 2})`}>
            <rect
              width={NODE_W}
              height={NODE_H}
              rx={8}
              className="fill-muted stroke-border"
              strokeWidth={1}
            />
            <text
              x={NODE_W / 2}
              y={NODE_H / 2 - (compact ? 2 : 3)}
              textAnchor="middle"
              className="fill-foreground font-mono text-[11px] font-medium"
            >
              {node.label}
            </text>
            {node.sublabel ? (
              <text
                x={NODE_W / 2}
                y={NODE_H / 2 + (compact ? 11 : 12)}
                textAnchor="middle"
                className="fill-foreground/50 font-mono text-[9px]"
              >
                {node.sublabel}
              </text>
            ) : null}
          </g>
        ))}
      </svg>
    </div>
  );
}
