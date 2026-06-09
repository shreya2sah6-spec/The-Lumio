interface MediaItem {
  src: string;
  alt?: string;
}

interface MediaPreviewGridProps {
  items: MediaItem[];
  /** Maximum cells to show before "+N more" overflow. Default 4 */
  max?: number;
}

export function MediaPreviewGrid({ items, max = 4 }: MediaPreviewGridProps) {
  if (items.length === 0) return null;

  const shown = items.slice(0, max);
  const overflow = items.length - max;

  return (
    <div className="grid grid-cols-4 gap-2">
      {shown.map((item, i) => {
        const isLast = i === max - 1 && overflow > 0;
        return (
          <div
            key={i}
            className="aspect-square rounded-[6px] overflow-hidden relative bg-[#e2d9ef]"
          >
            <img
              src={item.src}
              alt={item.alt ?? ""}
              className="w-full h-full object-cover"
            />
            {isLast && (
              <div className="absolute inset-0 bg-[#1a1128]/50 flex items-center justify-center">
                <span className="font-['Manrope',sans-serif] font-semibold text-white text-[14px]">
                  +{overflow}
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
