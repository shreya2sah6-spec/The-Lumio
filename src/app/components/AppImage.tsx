/**
 * AppImage — unified image primitive for Lumio.
 *
 * Drop-in replacement for <img>. Keeps the exact same layout contract
 * (renders as a single <img> element) with added:
 *   • loading="lazy" + decoding="async"  by default
 *   • loading="eager" + fetchPriority="high"  for hero / above-fold images
 *   • Neutral fallback on error (no broken-image icon)
 *   • Memoized — prevents unnecessary re-renders
 *
 * Skeleton / shimmer:
 *   The parent container should supply a background colour (e.g. bg-[#f5f0ff]
 *   or bg-[#e2d9ef]) which acts as the shimmer baseline. AppImage itself stays
 *   a single <img> so it can be used with absolute/inset classes unchanged.
 *
 * Usage:
 *   // Below-fold (default)
 *   <AppImage src={avatar} alt="Name"
 *             className="absolute inset-0 size-full object-cover" />
 *
 *   // Above-fold hero — profile photo, story frames
 *   <AppImage src={hero} alt="Hero" loading="eager" fetchPriority="high"
 *             className="absolute inset-0 size-full object-cover" />
 *
 *   // Logos (contain, not cover)
 *   <AppImage src={logo} alt="Brand" loading="lazy"
 *             className="w-full h-full object-contain object-center" />
 */

import React, { useState } from "react";

// Neutral purple-toned SVG placeholder — shown on load error only
const FALLBACK_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f5f0ff'/%3E%3Ccircle cx='100' cy='78' r='34' fill='%23e2d9ef'/%3E%3Cellipse cx='100' cy='170' rx='54' ry='42' fill='%23e2d9ef'/%3E%3C/svg%3E";

interface AppImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * 'lazy'  (default) — below-fold: cards, lists, reviews, avatars in scroll areas.
   * 'eager'           — hero images, active story frames, primary profile photos.
   */
  loading?: "lazy" | "eager";
  /**
   * 'high' — above-fold hero (pair with loading="eager").
   * 'low'  — purely decorative, off-screen decorations.
   * 'auto' — browser decides (default).
   */
  fetchPriority?: "high" | "low" | "auto";
}

export const AppImage = React.memo(function AppImage({
  loading = "lazy",
  fetchPriority = "auto",
  src,
  alt = "",
  onError,
  ...rest
}: AppImageProps) {
  const [errored, setErrored] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setErrored(true);
    onError?.(e);
  };

  return (
    <img
      {...rest}
      src={errored ? FALLBACK_SVG : src}
      alt={alt}
      loading={loading}
      decoding="async"
      // fetchpriority is a valid HTML attribute; cast needed until TS catches up
      {...({ fetchpriority: fetchPriority } as Record<string, string>)}
      onError={handleError}
    />
  );
});
