/**
 * BottomSafeArea — iOS home-indicator spacer.
 *
 * Must be placed INSIDE fixed/sticky footer containers so it
 * always appears attached to the very bottom of the screen.
 *
 * Height:      34px  (matches iOS home-indicator safe area)
 * Background:  #FFFEFF
 * Indicator:   #FFFEFF pill, 134px × 5px, centered, 8px from bottom
 */
export function BottomSafeArea({ bg = "#FFFEFF" }: { bg?: string }) {
  return (
    <div
      className="w-full flex items-end justify-center"
      style={{ height: 34, background: bg, paddingBottom: 8 }}
    >
      <div
        className="rounded-full"
        style={{ width: 134, height: 5, background: "#FFFEFF" }}
      />
    </div>
  );
}
