import { useRef } from "react";
import type { ReactNode } from "react";
import { Plus } from "@phosphor-icons/react";

interface UploadBlockProps {
  icon: ReactNode;
  label: string;
  previewUrl?: string;
  onUpload: (url: string) => void;
  /** Cover step uses a taller placeholder */
  tall?: boolean;
  /**
   * When true and a preview is loaded the button renders without border /
   * border-radius so the image appears seamlessly edge-to-edge. The parent
   * is expected to have NO horizontal padding when using this flag.
   */
  fullBleed?: boolean;
  /**
   * Override the preview image size via CSS aspect-ratio instead of a fixed px height.
   * e.g. "1.12 / 1" for the cover image.
   * Takes precedence over `tall` when a previewUrl is set.
   */
  aspectRatio?: string;
}

/** Dashed-border upload tile with live image preview on upload. */
export function UploadBlock({
  icon,
  label,
  previewUrl,
  onUpload,
  tall,
  fullBleed,
  aspectRatio,
}: UploadBlockProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    onUpload(URL.createObjectURL(file));
  }

  // In bleed-preview mode: no border, no border-radius, no background
  const bleedPreview = fullBleed && !!previewUrl;

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      className={
        bleedPreview
          ? "w-full overflow-hidden active:opacity-80 transition-opacity block"
          : "w-full border border-dashed border-[#c9b4f6] rounded-[8px] overflow-hidden bg-[#fffeff] active:opacity-80 transition-opacity"
      }
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
        onClick={(e) => {
          (e.target as HTMLInputElement).value = "";
        }}
      />

      {previewUrl ? (
        <img
          src={previewUrl}
          alt={label}
          className="w-full object-cover block"
          style={
            aspectRatio
              ? { aspectRatio, width: "100%" }
              : { height: tall ? 240 : 180 }
          }
        />
      ) : (
        <div
          className={`flex flex-col items-center gap-[8px] ${
            tall ? "py-[48px]" : "py-[24px]"
          }`}
        >
          <div className="text-[#7d3aea]">{icon}</div>
          <p className="font-['Manrope',sans-serif] font-normal text-[#1a1128] text-[14px] leading-[21px]">
            {label}
          </p>
          <p className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[12px] leading-[18px]">
            JPEG, PNG
          </p>
        </div>
      )}
    </button>
  );
}

/** Round purple "+" tile for appending additional upload slots. */
export function AddMoreBlock({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="w-full border border-dashed border-[#c9b4f6] rounded-[8px] bg-[#fffeff]">
      <button
        type="button"
        onClick={onAdd}
        className="w-full flex flex-col items-center gap-[8px] py-[24px] active:opacity-80 transition-opacity"
        aria-label="Add more"
      >
        <div className="size-[52px] bg-[#7d3aea] rounded-full flex items-center justify-center">
          <Plus size={24} weight="bold" color="white" />
        </div>
        <p className="font-['Manrope',sans-serif] font-normal text-[#1a1128] text-[14px] leading-[21px]">
          Add more
        </p>
        <p className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[12px] leading-[18px]">
          JPEG, PNG
        </p>
      </button>
    </div>
  );
}
