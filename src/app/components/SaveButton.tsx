import { useState } from "react";
import { BookmarkSimple } from "@phosphor-icons/react";

interface SaveButtonProps {
  /**
   * Controlled saved state.
   * When provided the component is controlled — the parent owns the state.
   * When omitted the component manages its own internal state.
   */
  saved?: boolean;
  /** Called with the new saved value after each toggle */
  onToggle?: (saved: boolean) => void;
  /**
   * Extra Tailwind classes applied to the outer <button>.
   * Use to add card-specific borders, backgrounds, or transitions
   * (e.g. "bg-[#fffeff] border border-[#e2d9ef] rounded-[8px]").
   */
  className?: string;
}

/**
 * Standard save / bookmark toggle button.
 *
 * Guaranteed behaviour per spec:
 * – 40 × 40 touch target
 * – 24 × 24 BookmarkSimple icon, always centred
 * – regular weight + #6B5F7A  (unsaved)
 * – fill weight   + #7D3AEA  (saved)
 * – stopPropagation so clicks don't bubble through clickable card parents
 * – aria-label + aria-pressed for accessibility
 */
export function SaveButton({
  saved: savedProp,
  onToggle,
  className = "",
}: SaveButtonProps) {
  const [internalSaved, setInternalSaved] = useState(false);
  const [bounceKey, setBounceKey] = useState(0);

  // Controlled when savedProp is explicitly provided, uncontrolled otherwise.
  const saved = savedProp !== undefined ? savedProp : internalSaved;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    const next = !saved;
    if (savedProp === undefined) {
      setInternalSaved(next);
    }
    if (next) {
      // Re-trigger bounce by incrementing key
      setBounceKey((k) => k + 1);
    }
    onToggle?.(next);
  }

  return (
    <button
      onClick={handleClick}
      aria-label={saved ? "Remove from saved" : "Save"}
      aria-pressed={saved}
      className={`size-[40px] flex items-center justify-center shrink-0 cursor-pointer ${className}`}
    >
      <span
        key={bounceKey}
        className={`inline-flex ${bounceKey > 0 && saved ? "animate-lumio-save-bounce" : ""}`}
      >
        <BookmarkSimple
          size={24}
          weight={saved ? "fill" : "regular"}
          color={saved ? "#7D3AEA" : "#6B5F7A"}
        />
      </span>
    </button>
  );
}
