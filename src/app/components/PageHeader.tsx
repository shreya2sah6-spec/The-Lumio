import { ArrowLeft } from "@phosphor-icons/react";

interface PageHeaderProps {
  title: string;
  onBack: () => void;
  /** Optional icon button (or any node) rendered flush to the right edge */
  rightAction?: React.ReactNode;
  /** Stick to the top of its scroll container */
  sticky?: boolean;
  /** Apply a soft bottom shadow — use on pages where content scrolls underneath */
  shadow?: boolean;
}

export function PageHeader({
  title,
  onBack,
  rightAction,
  sticky = false,
  shadow = false,
}: PageHeaderProps) {
  return (
    <div
      className={[
        "bg-[#fffeff] flex items-center px-4 py-3 shrink-0",
        sticky ? "sticky top-0 z-20" : "",
        shadow ? "shadow-sm" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Back button — negative left margin aligns icon visually with page edge */}
      <button
        onClick={onBack}
        className="p-2 -ml-2 shrink-0 flex items-center justify-center cursor-pointer"
        aria-label="Go back"
      >
        <ArrowLeft size={24} color="#1A1128" />
      </button>

      {/* Title — H1 spec: Roboto Serif · Extrabold 800 · 24/31 */}
      <h1 className="type-h1 text-[#1a1128] ml-3 flex-1 min-w-0 truncate">
        {title}
      </h1>

      {/* Optional right action — negative right margin mirrors the back button offset */}
      {rightAction && (
        <div className="-mr-2 shrink-0 ml-2">{rightAction}</div>
      )}
    </div>
  );
}
