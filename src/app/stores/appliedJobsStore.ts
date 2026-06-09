/**
 * Applied-jobs store — module-level singleton.
 *
 * Survives React Router route changes within the SPA session.
 * Bootstrapped from sessionStorage so a hard refresh resets to empty
 * (consistent with the existing in-memory appliedIds in JobsPage).
 *
 * Usage:
 *   import { useAppliedJobs } from "@/app/stores/appliedJobsStore";
 *   const { appliedIds, apply } = useAppliedJobs();
 */

import { useState, useEffect } from "react";

const SESSION_KEY = "lumio_applied_jobs";

// ── Module-level state ──────────────────────────────────────────────────────

function loadFromSession(): Set<string> {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (raw) return new Set(JSON.parse(raw) as string[]);
  } catch {/* ignore */}
  return new Set();
}

let _ids: Set<string> = loadFromSession();
const _listeners = new Set<() => void>();

function notify() {
  _listeners.forEach((fn) => fn());
}

export const appliedJobsStore = {
  getIds: (): Set<string> => _ids,
  has: (id: string): boolean => _ids.has(id),

  apply(id: string) {
    if (_ids.has(id)) return;
    _ids = new Set(_ids);
    _ids.add(id);
    try { sessionStorage.setItem(SESSION_KEY, JSON.stringify([..._ids])); } catch {/* ignore */}
    notify();
  },

  /** Bulk-seed from an existing Set (called by JobsPage to sync its local state). */
  seed(ids: Set<string>) {
    _ids = new Set(ids);
    notify();
  },

  subscribe(fn: () => void): () => void {
    _listeners.add(fn);
    return () => _listeners.delete(fn);
  },
};

// ── React hook ────────────────────────────────────────────────────────────────

export function useAppliedJobs() {
  const [appliedIds, setAppliedIds] = useState<Set<string>>(appliedJobsStore.getIds);

  useEffect(() => {
    // Sync whenever any consumer calls apply()
    return appliedJobsStore.subscribe(() => {
      setAppliedIds(new Set(appliedJobsStore.getIds()));
    });
  }, []);

  return {
    appliedIds,
    apply: appliedJobsStore.apply,
    has: (id: string) => appliedIds.has(id),
  };
}
