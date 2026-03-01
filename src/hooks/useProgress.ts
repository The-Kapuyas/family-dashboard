"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "guide-progress";

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCompleted(new Set(JSON.parse(saved)));
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  const persist = useCallback((next: Set<string>) => {
    setCompleted(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
  }, []);

  const toggle = useCallback(
    (stepId: string) => {
      const next = new Set(completed);
      if (next.has(stepId)) {
        next.delete(stepId);
      } else {
        next.add(stepId);
      }
      persist(next);
    },
    [completed, persist]
  );

  const isComplete = useCallback(
    (stepId: string) => completed.has(stepId),
    [completed]
  );

  const reset = useCallback(() => {
    persist(new Set());
  }, [persist]);

  return { completed, toggle, isComplete, reset };
}
