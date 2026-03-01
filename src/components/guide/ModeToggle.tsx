"use client";

import type { Mode } from "@/data/types";

interface Props {
  mode: Mode;
  onChange: (m: Mode) => void;
}

export default function ModeToggle({ mode, onChange }: Props) {
  return (
    <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 p-1 bg-gray-100 dark:bg-gray-800">
      <button
        onClick={() => onChange("solo")}
        className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
          mode === "solo"
            ? "bg-white text-gray-900 shadow dark:bg-gray-600 dark:text-white"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-400"
        }`}
      >
        Solo (6 tools)
      </button>
      <button
        onClick={() => onChange("collaborative")}
        className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
          mode === "collaborative"
            ? "bg-white text-gray-900 shadow dark:bg-gray-600 dark:text-white"
            : "text-gray-500 hover:text-gray-700 dark:text-gray-400"
        }`}
      >
        Collaborative (+4)
      </button>
    </div>
  );
}
