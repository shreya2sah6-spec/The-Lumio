import { ArrowLeft } from "@phosphor-icons/react";

interface HeaderBackButtonProps {
  onClick: () => void;
  ariaLabel?: string;
}

export function HeaderBackButton({
  onClick,
  ariaLabel = "Go back",
}: HeaderBackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-[40px] h-[40px] flex items-center justify-center shrink-0 cursor-pointer"
      aria-label={ariaLabel}
    >
      <ArrowLeft size={24} color="#1A1128" weight="regular" />
    </button>
  );
}
