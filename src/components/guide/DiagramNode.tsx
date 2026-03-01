"use client";

import type { GuideNode } from "@/data/types";

interface Props {
  node: GuideNode;
  selected: boolean;
  nodeComplete: boolean;
  onClick: () => void;
}

export default function DiagramNode({
  node,
  selected,
  nodeComplete,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        absolute flex flex-col items-center gap-1 -translate-x-1/2 -translate-y-1/2
        rounded-xl border-2 px-4 py-3 shadow-md
        transition-all duration-300 hover:scale-110 hover:shadow-lg
        cursor-pointer select-none
        ${
          selected
            ? "border-blue-500 ring-2 ring-blue-300 scale-110 z-20"
            : "border-gray-200 dark:border-gray-600 z-10"
        }
        ${
          nodeComplete
            ? "bg-green-50 dark:bg-green-950 border-green-400"
            : "bg-white dark:bg-gray-800"
        }
      `}
      style={{
        left: `${node.position.x}%`,
        top: `${node.position.y}%`,
      }}
      title={node.summary}
    >
      <span className="text-2xl leading-none">{node.icon}</span>
      <span className="text-xs font-semibold whitespace-nowrap">
        {node.label}
      </span>
      {nodeComplete && (
        <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[10px] text-white">
          {"\u2713"}
        </span>
      )}
    </button>
  );
}
