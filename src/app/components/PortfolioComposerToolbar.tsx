import { useState, useEffect, useRef } from "react";
import {
  Image,
  VideoCamera,
  LinkSimpleHorizontal,
  Microphone,
  Lightbulb,
  CaretRight,
  X,
  WarningCircle,
} from "@phosphor-icons/react";
import { useNavigate, useLocation } from "react-router-dom";

// After Cover (step 3) go straight to the full Preview.
const CONTINUE_MAP: Record<string, string> = {
  "/post/project-editor/about":   "/post/project-editor/process",
  "/post/project-editor/process": "/post/project-editor/cover",
  "/post/project-editor/cover":   "/post/project-editor/preview",
  "/post/project-editor/preview": "/post/publish",
};

interface PortfolioComposerToolbarProps {
  /** Return a non-empty error string to block navigation and show a toast. */
  validate?: () => string | null | undefined;
}

export function PortfolioComposerToolbar({ validate }: PortfolioComposerToolbarProps) {
  const navigate  = useNavigate();
  const { pathname } = useLocation();
  const [showTip,  setShowTip]  = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showToast(msg: string) {
    setToastMsg(msg);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToastMsg(null), 2800);
  }
  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  function handleContinue() {
    if (validate) {
      const err = validate();
      if (err) { showToast(err); return; }
    }
    const next = CONTINUE_MAP[pathname];
    if (next) navigate(next);
  }

  return (
    /**
     * Fixed to viewport bottom, centred inside the 800px app container.
     * Matches the existing session-timer pattern in HomePage.
     * z-50 sits above all page content (FAB is z-40, lightbulb popover z-30).
     */
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50">

      {/* ── Error toast ──────────────────────────────────────────────────── */}
      {toastMsg && (
        <div className="mx-4 mb-2 bg-[#FDE8E8] border border-[#C30105] rounded-[10px] px-4 py-3 flex items-center gap-3 shadow-[0px_2px_8px_rgba(195,1,5,0.15)]">
          <WarningCircle size={18} weight="fill" color="#C30105" className="shrink-0" />
          <p className="flex-1 font-['Manrope',sans-serif] font-medium text-[13px] leading-[19px] text-[#C30105]">
            {toastMsg}
          </p>
          <button onClick={() => setToastMsg(null)} className="shrink-0 p-0.5 text-[#C30105] opacity-70" aria-label="Dismiss">
            <X size={14} />
          </button>
        </div>
      )}

      {/* ── Lightbulb popover ────────────────────────────────────────────── */}
      {showTip && (
        <div className="mx-4 mb-2 bg-white border border-[#e2d9ef] rounded-[10px] shadow-[0px_4px_16px_rgba(126,100,155,0.16)] p-4 z-30">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <Lightbulb size={16} color="#7d3aea" weight="fill" />
              <p className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[13px] leading-[18px]">Image tips</p>
            </div>
            <button onClick={() => setShowTip(false)} className="p-0.5 text-[#9d90ad]" aria-label="Dismiss"><X size={14} /></button>
          </div>
          <ul className="flex flex-col gap-1.5">
            <li className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[13px] leading-[19px]">• Upload high-quality images for best results.</li>
            <li className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[13px] leading-[19px]">
              • Recommended ratio: <span className="font-semibold text-[#1a1128]">1 : 1.2</span>
            </li>
          </ul>
        </div>
      )}

      {/* ── Main toolbar row + bottom safe area ─────────────────────────── */}
      {/*
          Spacing spec (updated):
            icon tap target         40 × 40 px
            between media icons     gap-[8px]
            mic → divider           16px   (ml-[16px] on divider)
            divider → lightbulb     8px    (ml-[8px] on lightbulb)
            lightbulb → continue    16px   (ml-[16px] on continue)
            row alignment           justify-center  (whole group centred)
      */}
      <div className="bg-[#fffeff] border-t border-[#e2d9ef] px-4 py-[10px] flex items-center justify-center">

        {/* Media-action icons — 8px gap, 40×40 touch targets, #1A1128 */}
        <div className="flex items-center gap-[8px]">
          {[
            { icon: <Image                size={24} />, label: "Image" },
            { icon: <VideoCamera          size={24} />, label: "Video" },
            { icon: <LinkSimpleHorizontal size={24} />, label: "Link"  },
            { icon: <Microphone           size={24} />, label: "Audio" },
          ].map(({ icon, label }) => (
            <button
              key={label}
              className="w-[40px] h-[40px] flex items-center justify-center text-[#1A1128] shrink-0"
              aria-label={label}
            >
              {icon}
            </button>
          ))}
        </div>

        {/* Mic → divider: 16px */}
        <div className="w-px h-[22px] bg-[#E2D9EF] ml-[16px]" />

        {/* Divider → lightbulb: 8px */}
        <button
          onClick={() => setShowTip((v) => !v)}
          className={`w-[40px] h-[40px] flex items-center justify-center ml-[8px] transition-colors shrink-0 ${
            showTip ? "text-[#7d3aea]" : "text-[#1A1128]"
          }`}
          aria-label="Image tips"
        >
          <Lightbulb size={24} weight={showTip ? "fill" : "regular"} />
        </button>

        {/* Lightbulb → continue: 16px */}
        <button
          onClick={handleContinue}
          className="w-[40px] h-[40px] flex items-center justify-center ml-[16px] bg-[#7d3aea] rounded-full active:bg-[#6d2fd9] transition-colors shrink-0"
          aria-label="Continue"
        >
          <CaretRight size={22} weight="bold" color="white" />
        </button>

      </div>
    </div>
  );
}
