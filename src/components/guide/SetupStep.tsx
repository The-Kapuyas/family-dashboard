"use client";

import { useState } from "react";
import type { SetupStep as SetupStepType } from "@/data/types";

interface Props {
  step: SetupStepType;
  index: number;
  done: boolean;
  onToggle: () => void;
}

export default function SetupStep({ step, index, done, onToggle }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!step.command) return;
    await navigator.clipboard.writeText(step.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`rounded-lg border p-3 transition-colors ${
        done
          ? "border-green-300 bg-green-50 dark:border-green-800 dark:bg-green-950"
          : "border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={onToggle}
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs transition-colors ${
            done
              ? "border-green-500 bg-green-500 text-white"
              : "border-gray-300 hover:border-green-400 dark:border-gray-600"
          }`}
          aria-label={done ? "Mark incomplete" : "Mark complete"}
        >
          {done && "\u2713"}
        </button>
        <div className="flex-1 min-w-0">
          <p className={`text-sm ${done ? "line-through text-gray-400" : ""}`}>
            <span className="font-medium text-gray-500 mr-1">
              {index + 1}.
            </span>
            {step.instruction}
          </p>
          {step.command && (
            <div className="mt-2 flex items-center gap-2 rounded bg-gray-900 px-3 py-2 font-mono text-xs text-green-400">
              <code className="flex-1 overflow-x-auto whitespace-pre">
                {step.command}
              </code>
              <button
                onClick={handleCopy}
                className="shrink-0 rounded px-2 py-1 text-xs text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                title="Copy to clipboard"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
