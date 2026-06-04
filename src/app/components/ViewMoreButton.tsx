import { CaretDown } from "@phosphor-icons/react";

interface ViewMoreButtonProps {
  onClick?: () => void;
  /** Button label. Defaults to "View More". */
  label?: string;
  /** Extra Tailwind classes (e.g. margin overrides). */
  className?: string;
}

/**
 * Standard ghost full-width "View More" button used across listing and detail
 * views. h-48px, rounded-8px, brand-purple text + CaretDown icon.
 */
export function ViewMoreButton({
  onClick,
  label = "View More",
  className = "",
}: ViewMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`text-[#7d3aea] h-[48px] rounded-[8px] w-full flex gap-[8px] items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-[#efe9fc] active:bg-[#e5dcf8] ${className}`}
    >
      <span className="type-btn-lg">{label}</span>
      <CaretDown size={20} color="#7D3AEA" weight="bold" />
    </button>
  );
}
