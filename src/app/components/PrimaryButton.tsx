import type { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  /** Icon rendered after the label */
  trailingIcon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  /** Override gradient — defaults to Lumio brand gradient */
  gradient?: string;
  className?: string;
}

/**
 * Lumio primary CTA button.
 *
 * Spec:
 *  height:        52px
 *  border-radius: 8px   (NOT pill)
 *  gradient:      135deg  #A67CF5 → #7D3AEA → #6023C8
 *  typography:    Manrope · semibold · 16px / 24px · white
 */
export function PrimaryButton({
  children,
  trailingIcon,
  onClick,
  disabled = false,
  type = "button",
  gradient = "linear-gradient(135deg, #A67CF5 0%, #7D3AEA 60%, #6023C8 100%)",
  className = "",
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        "w-full h-[52px] rounded-[8px] flex items-center justify-center gap-[8px]",
        "font-['Manrope',sans-serif] font-semibold text-white text-[16px] leading-[24px]",
        "active:opacity-90 transition-opacity",
        disabled ? "opacity-50 pointer-events-none" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ background: gradient }}
    >
      {children}
      {trailingIcon && <span className="flex items-center">{trailingIcon}</span>}
    </button>
  );
}
