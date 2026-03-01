"use client";

import { useState, useMemo } from "react";
import type { Mode, GuideNode } from "@/data/types";
import { nodes } from "@/data/nodes";
import { connections } from "@/data/connections";
import { useProgress } from "@/hooks/useProgress";
import DiagramNode from "./DiagramNode";
import ConnectionArrows from "./ConnectionArrows";
import DetailPanel from "./DetailPanel";
import ModeToggle from "./ModeToggle";
import ProgressBar from "./ProgressBar";

export default function ArchitectureDiagram() {
  const [mode, setMode] = useState<Mode>("solo");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { completed, toggle, isComplete, reset } = useProgress();

  const visibleNodes = useMemo(
    () => nodes.filter((n) => n.mode === "both" || n.mode === mode),
    [mode]
  );

  const selectedNode: GuideNode | null =
    nodes.find((n) => n.id === selectedId) ?? null;

  // Count total steps across visible nodes
  const totalSteps = visibleNodes.reduce(
    (sum, n) => sum + n.detail.steps.length,
    0
  );
  const completedSteps = visibleNodes.reduce(
    (sum, n) => sum + n.detail.steps.filter((s) => completed.has(s.id)).length,
    0
  );

  // Is every step in a node done?
  const isNodeComplete = (node: GuideNode) =>
    node.detail.steps.length > 0 &&
    node.detail.steps.every((s) => completed.has(s.id));

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">
          {"\u{1F3D7}\uFE0F"} Builder&apos;s Guide
        </h1>
        <p className="text-gray-500 mb-4">
          Click any tool to learn what it does and how to set it up
        </p>
        <ModeToggle mode={mode} onChange={setMode} />
      </div>

      {/* Progress */}
      <div className="mb-6">
        <ProgressBar completed={completedSteps} total={totalSteps} />
      </div>

      {/* Diagram — desktop */}
      <div className="hidden md:block relative w-full rounded-2xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
        style={{ paddingBottom: "50%" /* aspect ratio ~2:1 */ }}
      >
        <div className="absolute inset-0 p-8">
          <ConnectionArrows
            connections={connections}
            nodes={visibleNodes}
            mode={mode}
          />
          {visibleNodes.map((node) => (
            <DiagramNode
              key={node.id}
              node={node}
              selected={selectedId === node.id}
              nodeComplete={isNodeComplete(node)}
              onClick={() =>
                setSelectedId(selectedId === node.id ? null : node.id)
              }
            />
          ))}
        </div>
      </div>

      {/* Card list — mobile */}
      <div className="flex flex-col gap-3 md:hidden">
        {visibleNodes.map((node) => {
          const done = isNodeComplete(node);
          return (
            <button
              key={node.id}
              onClick={() => setSelectedId(node.id)}
              className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                done
                  ? "border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950"
                  : "border-gray-200 bg-white hover:border-blue-300 dark:border-gray-700 dark:bg-gray-800"
              }`}
            >
              <span className="text-2xl">{node.icon}</span>
              <div className="flex-1 min-w-0">
                <span className="font-semibold">{node.label}</span>
                <p className="text-xs text-gray-500 truncate">
                  {node.summary}
                </p>
              </div>
              {done && (
                <span className="text-green-500 text-lg">{"\u2713"}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Reset button */}
      {completedSteps > 0 && (
        <div className="mt-4 text-center">
          <button
            onClick={reset}
            className="text-xs text-gray-400 hover:text-red-500 transition-colors"
          >
            Reset progress
          </button>
        </div>
      )}

      {/* Detail panel */}
      <DetailPanel
        node={selectedNode}
        onClose={() => setSelectedId(null)}
        isComplete={isComplete}
        onToggle={toggle}
      />
    </div>
  );
}
