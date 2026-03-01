"use client";

import type { GuideNode } from "@/data/types";
import SetupStep from "./SetupStep";

interface Props {
  node: GuideNode | null;
  onClose: () => void;
  isComplete: (stepId: string) => boolean;
  onToggle: (stepId: string) => void;
}

export default function DetailPanel({
  node,
  onClose,
  isComplete,
  onToggle,
}: Props) {
  if (!node) return null;

  const stepsComplete = node.detail.steps.filter((s) =>
    isComplete(s.id)
  ).length;
  const allDone = stepsComplete === node.detail.steps.length;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* panel */}
      <div className="relative w-full max-w-lg overflow-y-auto bg-white shadow-2xl dark:bg-gray-900 animate-slide-in">
        {/* header */}
        <div className={`sticky top-0 z-10 flex items-center gap-3 px-6 py-4 ${node.color} text-white`}>
          <span className="text-3xl">{node.icon}</span>
          <div className="flex-1">
            <h2 className="text-xl font-bold">{node.label}</h2>
            <p className="text-sm opacity-90">{node.summary}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 hover:bg-white/20 transition-colors text-xl leading-none"
            aria-label="Close panel"
          >
            {"\u2715"}
          </button>
        </div>

        <div className="space-y-6 px-6 py-6">
          {/* What / Why / Analogy */}
          <section>
            <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-gray-500">
              What is it?
            </h3>
            <p className="text-sm leading-relaxed">{node.detail.what}</p>
          </section>

          <section>
            <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Why do you need it?
            </h3>
            <p className="text-sm leading-relaxed">{node.detail.why}</p>
          </section>

          <section>
            <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-blue-500">
              {"\u{1F4A1}"} Real-world analogy
            </h3>
            <p className="text-sm italic leading-relaxed text-gray-600 dark:text-gray-400">
              {node.detail.analogy}
            </p>
          </section>

          {/* Setup steps */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Setup steps
              </h3>
              <span
                className={`text-xs font-medium ${
                  allDone ? "text-green-600" : "text-gray-400"
                }`}
              >
                {stepsComplete}/{node.detail.steps.length} done
              </span>
            </div>
            <div className="space-y-3">
              {node.detail.steps.map((step, i) => (
                <SetupStep
                  key={step.id}
                  step={step}
                  index={i}
                  done={isComplete(step.id)}
                  onToggle={() => onToggle(step.id)}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
