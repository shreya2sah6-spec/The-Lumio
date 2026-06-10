import { forwardRef, KeyboardEvent, ChangeEvent, MutableRefObject } from "react";

// ─── Single OTP cell ──────────────────────────────────────────────────────────
// Fixed dimensions: w-[42px], py-[8px] px-[4px], rounded-[4px].
// Only borderColor and textColor change between states — no layout shift ever.

interface OtpCellProps {
  value: string;
  isFocused: boolean;
  onChange: (val: string) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const OtpCell = forwardRef<HTMLInputElement, OtpCellProps>(
  ({ value, isFocused, onChange, onKeyDown, onFocus, onBlur }, ref) => {
    const isFilled = value !== "";
    const borderColor = isFocused ? "#1A1128" : "rgba(157,148,170,0.40)";
    const textColor = isFilled || isFocused ? "#1A1128" : "rgba(157,148,170,0.40)";

    return (
      <div
        className="w-[42px] px-[4px] py-[8px] bg-white rounded-[4px] border flex flex-col justify-center items-center transition-colors"
        style={{ borderColor }}
      >
        <input
          ref={ref}
          inputMode="numeric"
          maxLength={1}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          // self-stretch fills the container width; type-h5 applies font spec globally
          className="self-stretch h-[21px] text-center type-h5 bg-transparent outline-none caret-[#7d3aea]"
          style={{ color: textColor }}
        />
      </div>
    );
  }
);
OtpCell.displayName = "OtpCell";

// ─── OTP row ──────────────────────────────────────────────────────────────────
// Renders `length` cells with gap-[10px] as per design spec.

interface OtpInputProps {
  digits: string[];
  focusedIndex: number | null;
  inputRefs: MutableRefObject<(HTMLInputElement | null)[]>;
  onDigitChange: (index: number, val: string) => void;
  onKeyDown: (index: number, e: KeyboardEvent<HTMLInputElement>) => void;
  onFocus: (index: number) => void;
  onBlur: () => void;
}

export function OtpInput({
  digits,
  focusedIndex,
  inputRefs,
  onDigitChange,
  onKeyDown,
  onFocus,
  onBlur,
}: OtpInputProps) {
  return (
    <div className="flex gap-[10px] items-center">
      {digits.map((digit, i) => (
        <OtpCell
          key={i}
          ref={(el) => {
            inputRefs.current[i] = el;
          }}
          value={digit}
          isFocused={focusedIndex === i}
          onChange={(val) => onDigitChange(i, val)}
          onKeyDown={(e) => onKeyDown(i, e)}
          onFocus={() => onFocus(i)}
          onBlur={onBlur}
        />
      ))}
    </div>
  );
}
