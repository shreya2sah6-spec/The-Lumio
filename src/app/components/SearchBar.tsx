import { MagnifyingGlass } from "@phosphor-icons/react";

interface SearchBarProps {
  placeholder: string;
  /**
   * When provided the component renders a real <input> (controlled).
   * When absent it renders a decorative <span> matching the current Figma style.
   */
  value?: string;
  onChange?: (value: string) => void;
  /**
   * "default" → h-[40px] px-4  (Jobs, Mentors, Home)
   * "sm"      → h-[36px] px-3  (Messaging inbox)
   */
  size?: "default" | "sm";
  /**
   * Use the lighter tertiary placeholder colour (#9d94aa).
   * Defaults to the secondary colour (#6b5f7a).
   */
  dimPlaceholder?: boolean;
  /** Extra classes applied to the outer container — typically "flex-1". */
  className?: string;
}

export function SearchBar({
  placeholder,
  value,
  onChange,
  size = "default",
  dimPlaceholder = false,
  className = "",
}: SearchBarProps) {
  const isInput = onChange !== undefined;

  const sizeClasses =
    size === "sm" ? "h-[36px] px-3" : "h-[40px] px-4";

  const containerCls = [
    "bg-white rounded-[4px] border border-[rgba(157,148,170,0.4)] flex items-center gap-2",
    sizeClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  /* Colour of the decorative placeholder span */
  const spanColor = dimPlaceholder ? "text-[#9d94aa]" : "text-[#6b5f7a]";

  const baseLabelCls =
    "font-['Manrope',sans-serif] font-normal text-[14px] leading-[21px]";

  return (
    <div className={containerCls}>
      <MagnifyingGlass size={16} color="#6B5F7A" className="shrink-0" />
      {isInput ? (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`flex-1 min-w-0 bg-transparent outline-none ${baseLabelCls} text-[#1a1128] placeholder:text-[#9d94aa]`}
        />
      ) : (
        <span className={`${baseLabelCls} ${spanColor} truncate`}>
          {placeholder}
        </span>
      )}
    </div>
  );
}
