import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatCircle } from "@phosphor-icons/react";
import { PageHeader } from "../components/PageHeader";
import { StatusBar } from "../components/StatusBar";
import { PortfolioComposerToolbar } from "../components/PortfolioComposerToolbar";
import { usePostDraft } from "../stores/postDraftStore";

// ── Sub-components ────────────────────────────────────────────────────────────

/** Full-width edge-to-edge image — no horizontal padding, display:block to kill gap */
function PreviewImage({
  src,
  alt,
  aspectRatio,
}: {
  src: string;
  alt?: string;
  /** CSS aspect-ratio string, e.g. "1.12 / 1". Defaults to fixed 240px height. */
  aspectRatio?: string;
}) {
  return (
    <img
      src={src}
      alt={alt ?? ""}
      className="w-full object-cover block"
      style={aspectRatio ? { aspectRatio, width: "100%" } : { height: 240 }}
    />
  );
}

/** Padded text — 16px horizontal padding, only renders when non-empty */
function PreviewText({ text }: { text: string }) {
  if (!text.trim()) return null;
  return (
    <div className="px-4 py-3">
      <p className="font-['Manrope',sans-serif] font-normal text-[#1a1128] text-[14px] leading-[21px] whitespace-pre-wrap">
        {text}
      </p>
    </div>
  );
}

/**
 * Comments FAB — fixed bottom-right, above the toolbar.
 * When tapped shows a comment from Shruti.
 */
function CommentsFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-[160px] right-[16px] z-[55] flex flex-col items-end gap-2">
      {/* Comment bubble */}
      {open && (
        <div className="bg-white border border-[#e2d9ef] rounded-[12px] px-3 py-2.5 shadow-[0px_2px_12px_rgba(126,100,155,0.16)] max-w-[200px]">
          <p className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[12px] leading-[18px]">
            Shruti
          </p>
          <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[12px] leading-[18px] mt-0.5">
            improve the layout
          </p>
        </div>
      )}

      {/* FAB button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`w-[52px] h-[52px] rounded-full border bg-[#fffeff] flex items-center justify-center
          shadow-[0px_2px_12px_rgba(126,100,155,0.18)] active:opacity-80 transition-opacity ${
          open ? "border-[#7d3aea]" : "border-[#e2d9ef]"
        }`}
        aria-label="Comments"
      >
        <ChatCircle
          size={24}
          color={open ? "#7d3aea" : "#6b5f7a"}
          weight={open ? "fill" : "regular"}
        />
      </button>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function PostProjectPreviewPage() {
  const navigate  = useNavigate();
  const { draft } = usePostDraft();

  const aboutImages   = (draft.aboutImages   ?? []).filter(Boolean) as string[];
  const processImages = (draft.processImages ?? []).filter(Boolean) as string[];

  return (
    <div className="bg-[#fffeff] min-h-screen">

      {/* Sticky header */}
      <div className="sticky top-0 z-20 bg-[#fffeff] shadow-[0px_1px_2px_rgba(200,192,212,0.3)]">
        <StatusBar />
        <PageHeader
          title="Preview"
          onBack={() => navigate("/post/project-editor/cover")}
        />
      </div>

      {/* Scrollable content — pb clears fixed toolbar */}
      <div className="pb-[140px]">

        {/* ── Step 1 — About: text then images ─────────────────────────── */}
        <PreviewText text={draft.aboutText} />
        {aboutImages.map((url, i) => (
          <PreviewImage key={`about-${i}`} src={url} alt={`About image ${i + 1}`} />
        ))}

        {/* ── Step 2 — Process: text then images ───────────────────────── */}
        <PreviewText text={draft.processText} />
        {processImages.map((url, i) => (
          <PreviewImage key={`process-${i}`} src={url} alt={`Process image ${i + 1}`} />
        ))}

        {/* ── Cover image — 1.12:1 aspect ratio ───────────────────────── */}
        {draft.coverUrl && (
          <PreviewImage src={draft.coverUrl} alt="Cover" aspectRatio="1.12 / 1" />
        )}

        {/* Caption — padded text */}
        <PreviewText text={draft.caption} />

      </div>

      {/* Fixed FAB — above toolbar */}
      <CommentsFab />

      {/* Fixed toolbar */}
      <PortfolioComposerToolbar />
    </div>
  );
}
