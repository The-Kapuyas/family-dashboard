"use client";

import type { Connection, GuideNode, Mode } from "@/data/types";

interface Props {
  connections: Connection[];
  nodes: GuideNode[];
  mode: Mode;
}

export default function ConnectionArrows({ connections, nodes, mode }: Props) {
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  const visible = connections.filter(
    (c) => c.mode === "both" || c.mode === mode
  );

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="6"
          refX="8"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 8 3, 0 6" className="fill-gray-400" />
        </marker>
      </defs>
      {visible.map((conn) => {
        const from = nodeMap.get(conn.from);
        const to = nodeMap.get(conn.to);
        if (!from || !to) return null;

        const x1 = from.position.x;
        const y1 = from.position.y;
        const x2 = to.position.x;
        const y2 = to.position.y;
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;

        return (
          <g key={`${conn.from}-${conn.to}`}>
            <line
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              className="stroke-gray-300 dark:stroke-gray-600"
              strokeWidth="2"
              strokeDasharray={conn.mode === "collaborative" ? "6 4" : "none"}
              markerEnd="url(#arrowhead)"
            />
            {conn.label && (
              <text
                x={`${mx}%`}
                y={`${my}%`}
                dy="-6"
                textAnchor="middle"
                className="fill-gray-400 text-[10px] font-medium"
              >
                {conn.label}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
