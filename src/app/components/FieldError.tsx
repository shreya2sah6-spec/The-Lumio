import { WarningCircle } from "@phosphor-icons/react";

/**
 * Reusable inline validation error row.
 * Matches Figma: 16px WarningCircle fill + 12px/18px Regular #de3226 text.
 * Usage: render below the field container with gap-[8px] between them.
 */
export function FieldError({ message }: { message: string }) {
  return (
    <div
      className="flex gap-[8px] items-center"
      role="alert"
      aria-live="polite"
    >
      <WarningCircle
        size={16}
        color="#de3226"
        weight="fill"
        className="shrink-0"
      />
      <span className="font-['Manrope',sans-serif] font-normal text-[#de3226] text-[12px] leading-[18px] tracking-[0.24px]">
        {message}
      </span>
    </div>
  );
}
