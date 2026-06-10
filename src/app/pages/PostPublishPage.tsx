import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, WarningCircle, X } from "@phosphor-icons/react";
import { PageHeader } from "../components/PageHeader";
import { AppLayout } from "../components/AppLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { usePostDraft } from "../stores/postDraftStore";
import { postDraftStore } from "../stores/postDraftStore";
import svgPaths from "@/imports/PostDetails/svg-qgafcdr1f2";

// ── Chevron right ─────────────────────────────────────────────────────────────
function ChevronRight() {
  return (
    <div className="flex items-center justify-center p-[8px] shrink-0">
      <div className="relative size-[24px] overflow-clip">
        <div className="absolute inset-[15.62%_28.12%_15.62%_34.37%]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 9.00101 16.5008"
          >
            <path d={svgPaths.pebee80} fill="#6B5F7A" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ── Metadata row — icon · label · chevron ─────────────────────────────────────
function MetaRow({
  iconPath,
  viewBox,
  label,
}: {
  iconPath: string;
  viewBox: string;
  label: string;
}) {
  return (
    <div className="relative flex items-center gap-[12px] py-[16px] w-full">
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-[rgba(157,148,170,0.4)]"
      />
      <div className="flex flex-[1_0_0] gap-[12px] items-center min-w-0">
        <div className="relative shrink-0 size-[24px]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox={viewBox}
          >
            <path d={iconPath} fill="#6B5F7A" />
          </svg>
        </div>
        <p className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tracking-[0.16px] whitespace-nowrap">
          {label}
        </p>
      </div>
      <ChevronRight />
    </div>
  );
}

// ── Error toast — same visual system as PortfolioComposerToolbar ──────────────
function ErrorToast({
  message,
  onDismiss,
}: {
  message: string;
  onDismiss: () => void;
}) {
  return (
    <div className="mx-4 mb-2 bg-[#FDE8E8] border border-[#C30105] rounded-[10px] px-4 py-3 flex items-center gap-3 shadow-[0px_2px_8px_rgba(195,1,5,0.15)]">
      <WarningCircle size={18} weight="fill" color="#C30105" className="shrink-0" />
      <p className="flex-1 font-['Manrope',sans-serif] font-medium text-[13px] leading-[19px] text-[#C30105]">
        {message}
      </p>
      <button
        onClick={onDismiss}
        className="shrink-0 p-0.5 text-[#C30105] opacity-70"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export function PostPublishPage() {
  const navigate        = useNavigate();
  const { draft }       = usePostDraft();
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [posting,  setPosting]  = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  function showToast(msg: string) {
    setToastMsg(msg);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToastMsg(null), 3000);
  }

  function handlePost() {
    // Guard: prevent duplicate taps
    if (posting) return;

    // ── Cover validation ──────────────────────────────────────────────────────
    if (!draft.coverUrl) {
      showToast("Please add a cover image before publishing your project.");
      return;
    }

    // ── All validation passed — commit and navigate to publishing screen ──────
    setPosting(true);
    postDraftStore.publishPost();
    navigate("/post/publishing", { replace: true });
  }

  // Footer height: border(1) + pt-3(12) + button(52) + pb-2(8) ≈ 73px
  const FOOTER_HEIGHT = 76;

  return (
    <AppLayout
      hideNav
      header={
        <PageHeader
          title="New Project"
          onBack={() => navigate("/post/project-editor/preview")}
        />
      }
    >

      {/* ── Scrollable content — padded to clear fixed footer ──────────────── */}
      <div style={{ paddingBottom: FOOTER_HEIGHT }}>

        {/* Hero / cover image — 1.12:1 aspect ratio, edge-to-edge */}
        {draft.coverUrl ? (
          <img
            src={draft.coverUrl}
            alt="Project cover"
            className="w-full object-cover block"
            style={{ aspectRatio: "1.12 / 1" }}
          />
        ) : (
          <div
            className="w-full bg-[#f5f0ff] flex items-center justify-center"
            style={{ aspectRatio: "1.12 / 1" }}
          >
            <p className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[14px]">
              No cover image
            </p>
          </div>
        )}

        {/* ── Post information ──────────────────────────────────────────────── */}
        <div className="px-4">

          {draft.caption ? (
            <div className="py-[12px]">
              <p className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tracking-[0.16px] break-words">
                {draft.caption}
              </p>
            </div>
          ) : null}

          <div className="flex flex-col">
            <MetaRow iconPath={svgPaths.pca9d300}  viewBox="0 0 24 24" label="Co-created with" />
            <MetaRow iconPath={svgPaths.p13b60970} viewBox="0 0 24 24" label="Domain" />
            <MetaRow iconPath={svgPaths.p3367de00} viewBox="0 0 24 24" label="Tools Used" />
          </div>

        </div>
      </div>

      {/* ── Fixed footer — validation toast + gradient Post button ─────────── */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50
          bg-[#fffeff] border-t border-[#e2d9ef] px-4 pt-3 pb-2"
        style={{ boxShadow: "0px -1px 4px rgba(200,192,212,0.45)" }}
      >
        {/* Error toast — rendered inside footer, above button */}
        {toastMsg && (
          <ErrorToast message={toastMsg} onDismiss={() => setToastMsg(null)} />
        )}

        <PrimaryButton
          onClick={handlePost}
          disabled={posting}
          trailingIcon={<ArrowRight size={20} weight="bold" />}
        >
          {posting ? "Publishing…" : "Post"}
        </PrimaryButton>
      </div>

    </AppLayout>
  );
}
