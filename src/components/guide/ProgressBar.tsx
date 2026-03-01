"use client";

interface Props {
  completed: number;
  total: number;
}

export default function ProgressBar({ completed, total }: Props) {
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
  const allDone = pct === 100 && total > 0;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1 text-sm">
        <span className="font-medium">
          {allDone ? "All done!" : "Progress"}
        </span>
        <span className="text-gray-500">
          {completed}/{total} steps ({pct}%)
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            allDone
              ? "bg-gradient-to-r from-green-400 to-emerald-500"
              : "bg-blue-500"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {allDone && (
        <p className="mt-2 text-center text-lg font-bold text-green-600 animate-bounce">
          {"\u{1F389}"} You built it! Time to ship!
        </p>
      )}
    </div>
  );
}
