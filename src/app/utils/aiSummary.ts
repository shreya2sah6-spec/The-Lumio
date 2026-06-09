/**
 * AI summary text helpers — shared across all review surfaces.
 *
 * AI summaries are authored to be concise (≤300 chars) at the data layer.
 * The UI must render them FULLY — no truncation, no ellipsis, no clipping.
 *
 * Both functions are intentional pass-throughs: they exist as named exports
 * so call sites remain unchanged, but they no longer mutate or shorten text.
 */

export const MAX_AI_SUMMARY_CHARS = 300;

/**
 * Returns the AI summary text exactly as provided.
 * No truncation. No ellipsis. Full text always rendered.
 */
export function truncateAiSummary(text: string): string {
  return text;
}

/**
 * Returns the AI bullet item text exactly as provided.
 * No truncation. No ellipsis. Full text always rendered.
 *
 * The `totalItems` parameter is retained for API compatibility
 * but is no longer used to compute a character budget.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function truncateAiBulletItem(text: string, _totalItems: number): string {
  return text;
}
