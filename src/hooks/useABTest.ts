import { useState } from "react";

/**
 * Simple A/B testing hook using localStorage for persistent variant assignment.
 *
 * Usage:
 *   const variant = useABTest("hero-cta", ["Jetzt starten", "Kostenlos testen"]);
 *   // variant is one of the provided options, assigned randomly on first visit
 *
 * Variant is persisted in localStorage so users always see the same version.
 * To track results, log `ab-test:${testName}:${variant}` to your analytics.
 */
export function useABTest<T extends string>(testName: string, variants: T[]): T {
  const [variant] = useState<T>(() => {
    const key = `ab-test-${testName}`;
    const stored = localStorage.getItem(key);

    // Return stored variant if valid
    if (stored && variants.includes(stored as T)) {
      return stored as T;
    }

    // Assign random variant
    const selected = variants[Math.floor(Math.random() * variants.length)];
    localStorage.setItem(key, selected);
    return selected;
  });

  return variant;
}

/**
 * Helper to get all active A/B test assignments (useful for analytics).
 */
export function getABTestAssignments(): Record<string, string> {
  const assignments: Record<string, string> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith("ab-test-")) {
      assignments[key.replace("ab-test-", "")] = localStorage.getItem(key) ?? "";
    }
  }
  return assignments;
}
