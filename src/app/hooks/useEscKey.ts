/**
 * useEscKey — fires `onEsc` when the Escape key is pressed.
 *
 * Attaches a single document-level keydown listener while the hook is mounted.
 * Pass `enabled = false` to temporarily disable (e.g. when the overlay is closed).
 *
 * Usage:
 *   useEscKey(() => setShowModal(false));
 *   useEscKey(() => setShowFilter(false), showFilter);
 */

import { useEffect, useCallback } from "react";

export function useEscKey(onEsc: () => void, enabled = true) {
  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onEsc();
      }
    },
    [onEsc]
  );

  useEffect(() => {
    if (!enabled) return;
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [handler, enabled]);
}
