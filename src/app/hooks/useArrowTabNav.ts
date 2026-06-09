/**
 * useArrowTabNav — adds ArrowLeft/ArrowRight keyboard navigation to a tab bar.
 *
 * Pass a ref to the container element that holds the tab `<button>` children.
 * When a tab button inside the container has focus and the user presses
 * ArrowLeft or ArrowRight, focus moves to the adjacent tab and `onSelect` is
 * called with the new index.
 *
 * Usage:
 *   const tabBarRef = useArrowTabNav(activeTabIndex, setActiveTabIndex);
 *   <div ref={tabBarRef} role="tablist">
 *     {tabs.map((t, i) => <button key={t} role="tab" ...>...</button>)}
 *   </div>
 */

import { useRef, useEffect, useCallback, RefObject } from "react";

export function useArrowTabNav<T extends HTMLElement = HTMLDivElement>(
  tabCount: number,
  onSelect: (index: number) => void
): RefObject<T> {
  const ref = useRef<T>(null);

  const handler = useCallback(
    (e: KeyboardEvent) => {
      if (!ref.current) return;
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

      const buttons = Array.from(
        ref.current.querySelectorAll<HTMLButtonElement>("button[role='tab']")
      );
      const focused = document.activeElement as HTMLButtonElement;
      const idx = buttons.indexOf(focused);
      if (idx === -1) return;

      e.preventDefault();
      const next =
        e.key === "ArrowRight"
          ? (idx + 1) % tabCount
          : (idx - 1 + tabCount) % tabCount;

      buttons[next]?.focus();
      onSelect(next);
    },
    [tabCount, onSelect]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("keydown", handler);
    return () => el.removeEventListener("keydown", handler);
  }, [handler]);

  return ref;
}
