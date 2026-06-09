import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  BellSimple,
  ChatCenteredDots,
  CaretLeft,
  CaretRight,
  Eye,
  Repeat,
  HandsClapping,
  Check,
  ShareFat,
} from "@phosphor-icons/react";
import { FileTextIcon } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { SearchBar } from "../components/SearchBar";
import { SaveButton } from "../components/SaveButton";

import imgPostImage01 from "@/imports/FeedCovers/sanyam-cover.png";
import imgAvatarImage1 from "@/imports/HomeProfileCompletion-1/733e8cf72a0fc5655efdb377f7a418e9263541e1.png";
import imgPostImage02 from "@/imports/HomeProfileCompletion-1/2237e23c0b0a917e12372a61adebbe568838af3e.png";
import imgAvatarPrimary from "@/imports/HomeProfileCompletion-1/5e72ee9d7d7c503b8d808c6f856192019f6d2e26.png";
import imgAvatarSecondary from "@/imports/HomeProfileCompletion-1/302a8171bbddedbee08d110930e4a4d9860625ed.png";
import imgCreativeCard01 from "@/imports/HomeProfileCompletion-1/2c2355387ac373692cffca7ca8c2506de23c4435.png";
import imgCreativeCard02 from "@/imports/HomeProfileCompletion-1/05dd7c8d14a43160151764b990777fe1c7136131.png";
import imgCreativeCard03 from "@/imports/HomeProfileCompletion-1/e6303e8f0e0306433072d30c7b018509d8b10041.png";
import imgCreativeCard04 from "@/imports/HomeProfileCompletion-1/de0d3d2ddba7f7f644a7adb44db0021a0f01e36d.png";
import imgPostImage2 from "@/imports/FeedCovers/arpita-cover.png";
import imgAvatarImage3 from "@/imports/HomeProfileCompletion-1/03a40532a3f775fa0602f3aa80f7e17e44cdc2cd.png";
import imgPromoImage from "@/imports/HomeProfileCompletion-1/7d4d7f01fddb9b53ad927532e884890ec05dedee.png";
import imgPromoImage1 from "@/imports/HomeProfileCompletion-1/cc4e7259abc400810d9f6971b03ec64ce45a0c06.png";
import imgPromoImage2 from "@/imports/HomeProfileCompletion-1/6470fe0aa7b4e6b1e00d8e32bc429a4545125d0d.png";
import imgPromoImage3 from "@/imports/HomeProfileCompletion-1/0ac8ae9d3d28473bf876c063463f1a287b18fce5.png";
import imgBrandLogo from "@/imports/HomeProfileCompletion-1/28d13f96340cd4282fa71f71e505e234b4902350.png";
import imgPostImage3 from "@/imports/HomeProfileCompletion-1/43396b0d46c184012a4997b17cf3f71f31a40883.png";
import imgAvatarImage4 from "@/imports/HomeProfileCompletion-1/bb4ae9acbf1717477721a1ac665229d89c11f830.png";
import imgPostImage4 from "@/imports/FeedCovers/aayush-cover.png";
import imgEngagementAvatar1 from "@/imports/HomeProfileCompletion-1/22a618f0acbc96cb390eccb456b612e531e62706.png";
import imgEngagementAvatar2 from "@/imports/HomeProfileCompletion-1/0cbc38f58cc3a3bcd0b44baafde4ddc2b85b6aa5.png";
import imgAvatarImage5 from "@/imports/HomeProfileCompletion-1/a95e6c88f73b1e84acd4af965b924859220e4a21.png";
import imgProfileNav from "@/imports/MentorsListing-1/bb5b0e0896cc0396e3c8e2b6811f344da7f15455.png";

// Placeholder profile avatar shown in navbar before the user uploads a photo
const PROFILE_PLACEHOLDER =
  "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg";

// ─── Top bar ──────────────────────────────────────────────────────────────────

function TopBar() {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-10 bg-[#fffeff] shadow-[0px_1px_2px_rgba(200,192,212,0.4)]">
      <div className="flex gap-3 items-center px-4 py-3">
        <SearchBar placeholder="Search" className="flex-1" />
        <button
          className="p-2 cursor-pointer"
          onClick={() => navigate("/notifications")}
        >
          <BellSimple size={24} color="#6B5F7A" />
        </button>
        <button
          className="p-2 cursor-pointer"
          onClick={() => navigate("/messages")}
        >
          <ChatCenteredDots size={24} color="#6B5F7A" />
        </button>
      </div>
    </div>
  );
}


// ─── Profile completion card ──────────────────────────────────────────────────

// ─── Post card ────────────────────────────────────────────────────────────────

interface PostCardProps {
  image: string;
  /** When true: image rendered with object-contain + #FFFEFF bg (editorial cover).
   *  When false/omitted: default object-cover crop. */
  containImage?: boolean;
  avatarSingle?: string;
  avatarPrimary?: string;
  avatarSecondary?: string;
  name: string;
  role: string;
  status?: string;
  caption: string;
  date: string;
  engagementAvatar?: string;
  engagementLabel?: string;
  engagementIcon?: "repost" | "clap";
  coCreate?: boolean;
  coCreateWith?: string;
  onClick?: () => void;
}

function PostCard({
  image,
  containImage,
  avatarSingle,
  avatarPrimary,
  avatarSecondary,
  name,
  role,
  status,
  caption,
  date,
  engagementAvatar,
  engagementLabel,
  engagementIcon,
  coCreate,
  coCreateWith,
  onClick,
}: PostCardProps) {
  return (
    <div
      className="bg-white w-full flex flex-col"
      onClick={onClick}
      style={onClick ? { cursor: "pointer" } : undefined}
    >
      <div
        className="w-full aspect-[390/348] relative overflow-hidden"
        style={containImage ? { background: "#FFFEFF" } : undefined}
      >
        <img
          src={image}
          alt=""
          className={
            containImage
              ? "absolute inset-0 w-full h-full object-contain object-center"
              : "absolute inset-0 w-full h-full object-cover"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(26,26,26,0.12)]" />
        {engagementAvatar && (
          <div className="absolute bottom-0 left-0 p-4">
            <div className="bg-white rounded-[8px] flex gap-2 items-center p-2 h-[46px]">
              <div className="relative shrink-0">
                <img
                  src={engagementAvatar}
                  alt=""
                  className="size-6 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 bg-[rgba(26,26,26,0.6)] rounded-full flex items-center justify-center size-[18px]">
                  {engagementIcon === "repost" ? (
                    <Repeat size={12} color="white" />
                  ) : (
                    <HandsClapping size={12} color="white" />
                  )}
                </div>
              </div>
              <span className="font-['Manrope',sans-serif] font-medium text-[#2d2040] text-[12px] leading-[18px] tracking-[0.24px] max-w-[138px] truncate">
                {engagementLabel}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 px-4 pt-3 pb-5">
        <div className="flex gap-1 items-start w-full">
          <div className="flex gap-3 items-center flex-1 min-w-0">
            {/* Avatar — single or collaboration */}
            <div style={{ width: 48, height: 48, position: "relative", flexShrink: 0 }}>
              {avatarSingle ? (

                /* ── Standard single avatar ── */
                <img
                  src={avatarSingle}
                  alt=""
                  style={{
                    width: 48, height: 48,
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

              ) : (

                /* ── Collaboration double-avatar ── */
                <>
                  {/* Primary — TL / TR / BL = 200px · BR = 0 */}
                  <div
                    style={{
                      width: 32, height: 32,
                      position: "absolute", left: 0, top: 0,
                      overflow: "hidden",
                      borderTopLeftRadius: 200,
                      borderTopRightRadius: 200,
                      borderBottomLeftRadius: 200,
                      borderBottomRightRadius: 0,
                    }}
                  >
                    <img
                      src={avatarPrimary}
                      alt=""
                      style={{
                        width: 32, height: 32,
                        position: "absolute", left: 0, top: 0,
                        objectFit: "cover",
                        borderTopLeftRadius: 200,
                        borderTopRightRadius: 200,
                        borderBottomLeftRadius: 200,
                        borderBottomRightRadius: 0,
                        border: "1px solid #E2D9EF",
                      }}
                    />
                  </div>

                  {/* Secondary — TL / TR / BR = 200px · BL = 0 · offset left:16 top:16 */}
                  <div
                    style={{
                      width: 32, height: 32,
                      position: "absolute", left: 16, top: 16,
                      overflow: "hidden",
                      borderTopLeftRadius: 200,
                      borderTopRightRadius: 200,
                      borderBottomRightRadius: 200,
                      borderBottomLeftRadius: 0,
                    }}
                  >
                    <img
                      src={avatarSecondary}
                      alt=""
                      style={{
                        width: 32, height: 32,
                        position: "absolute", left: 0, top: 0,
                        objectFit: "cover",
                        borderTopLeftRadius: 200,
                        borderTopRightRadius: 200,
                        borderBottomRightRadius: 200,
                        borderBottomLeftRadius: 0,
                        border: "1px solid #E2D9EF",
                        boxShadow: "-1px 0px 2px rgba(26, 26, 26, 0.15)",
                      }}
                    />
                  </div>
                </>

              )}
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <p className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tracking-[0.16px] truncate">
                {coCreate ? (
                  <>
                    {name}
                    <span className="font-normal text-[#433059] text-[12px] tracking-[0.24px]">
                      {" "}
                      co-create with{" "}
                    </span>
                    {coCreateWith}
                  </>
                ) : (
                  name
                )}
              </p>
              <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px] truncate">
                {role}
              </p>
              {status && (
                <p className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[12px] leading-[18px] tracking-[0.24px] truncate">
                  {status}
                </p>
              )}
            </div>
          </div>
          <SaveButton />
        </div>
        <p
          className="font-['Manrope',sans-serif] font-normal text-[#1a1128] text-[14px] leading-[21px]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {caption}
        </p>
        <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px] text-right">
          {date}
        </p>
      </div>
    </div>
  );
}

// ─── Creative momentum ────────────────────────────────────────────────────────

const creativeCards = [
  {
    image: imgCreativeCard01,
    caption: "Floral fashion makes its bold comeback.",
    views: "2.5k",
    title: "Floral Fashion",
    description:
      "The season's most talked-about trend returns with vibrant botanicals and bold silhouettes dominating every runway.",
  },
  {
    image: imgCreativeCard02,
    caption: "Maximalist glamour is everywhere this season.",
    views: "2.1k",
    title: "Maximalist Glamour",
    description:
      "More is more — sequins, fringe, and oversized drama are rewriting the rules of evening wear for 2026.",
  },
  {
    image: imgCreativeCard03,
    caption:
      "Men's Footwear Trends Unveiled at Pitti Uomo's Fall 2026 Edition.",
    views: "1.4k",
    title: "Pitti Uomo Footwear",
    description:
      "Classic brogues, chunky platforms, and architectural soles were the story at Florence's most important menswear event.",
  },
  {
    image: imgCreativeCard04,
    caption: "Jackets redefine fashion now.",
    views: "952",
    title: "The Jacket Moment",
    description:
      "From tailored blazers to deconstructed outerwear — the jacket is having its biggest cultural moment in decades.",
  },
];

// ─── Story overlay ────────────────────────────────────────────────────────────

function StoryOverlay({
  index,
  onClose,
}: {
  index: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const inactivityRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentRef = useRef(index);
  const advance = useCallback(() => {
    if (currentRef.current < creativeCards.length - 1) {
      currentRef.current += 1;
      setCurrent(currentRef.current);
      setProgress(0);
    } else {
      onClose();
    }
  }, [onClose]);

  const resetInactivity = useCallback(() => {
    // Inactivity timer is only used as a fallback when the user holds a tap.
    // Under normal auto-advance, the interval handles timing — no duplicate
    // advance() calls. We restart inactivity on every user interaction.
    if (inactivityRef.current) clearTimeout(inactivityRef.current);
    inactivityRef.current = setTimeout(advance, 60000);
  }, [advance]);

  useEffect(() => {
    currentRef.current = current;
    setProgress(0);
    // Clear any stale inactivity timer from the previous story before starting fresh.
    if (inactivityRef.current) clearTimeout(inactivityRef.current);
    // The interval is the sole driver of auto-advance. When progress reaches 100%
    // it calls advance() ONCE, then immediately clears itself to prevent a second call.
    timerRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          advance();
          return 0;
        }
        return p + 100 / 60;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (inactivityRef.current) clearTimeout(inactivityRef.current);
    };
  }, [current, advance, resetInactivity]);

  function handlePrev() {
    resetInactivity();
    setProgress(0);
    currentRef.current = Math.max(0, currentRef.current - 1);
    setCurrent(currentRef.current);
  }

  function handleNext() {
    resetInactivity();
    if (currentRef.current < creativeCards.length - 1) {
      setProgress(0);
      currentRef.current += 1;
      setCurrent(currentRef.current);
    } else {
      onClose();
    }
  }

  const card = creativeCards[current];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black">
      <div className="relative h-full w-full max-w-[800px] flex flex-col">
        {/* background image — full bleed, no crop */}
        <img
          src={card.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* gradient: dark top + dark bottom for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] via-transparent to-[rgba(0,0,0,0.78)]" />

        {/* tap zones sit behind content but above image */}
        <div className="absolute inset-0 z-10 flex">
          <div className="flex-1 cursor-pointer" onClick={handlePrev} />
          <div className="flex-1 cursor-pointer" onClick={handleNext} />
        </div>

        {/* top section — progress + header row */}
        <div className="relative z-20 flex flex-col gap-3 pt-3 px-4">
          {/* progress track: white bg, purple fill */}
          <div className="flex gap-1">
            {creativeCards.map((_, i) => (
              <div
                key={i}
                className="flex-1 h-[3px] rounded-full overflow-hidden"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <div
                  className="h-full rounded-full transition-none"
                  style={{
                    width:
                      i < current
                        ? "100%"
                        : i === current
                          ? `${Math.min(progress, 100)}%`
                          : "0%",
                    backgroundColor: "#7D3AEA",
                  }}
                />
              </div>
            ))}
          </div>

          {/* back-button + views — same row */}
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center justify-center rounded-full cursor-pointer shrink-0"
              style={{ padding: "8px", background: "#FFFFFF" }}
            >
              <CaretLeft size={20} color="#1A1128" weight="bold" />
            </button>
            <div
              className="flex items-center gap-[8px] rounded-[4px]"
              style={{ padding: "8px 12px", background: "rgba(26,26,26,0.6)" }}
            >
              <Eye size={20} color="white" />
              <span className="font-['Manrope',sans-serif] font-medium text-white text-[14px] leading-[21px]">
                {card.views} views
              </span>
            </div>
          </div>
        </div>

        {/* spacer pushes overlay to bottom */}
        <div className="flex-1" />

        {/* bottom overlay — anchored to bottom, padding 32px 16px */}
        <div
          className="relative z-20 flex flex-col items-center w-full"
          style={{ padding: "32px 16px 0" }}
        >
          {/* 1. title */}
          <p
            className="font-['Manrope',sans-serif] font-semibold text-white text-center w-full"
            style={{ fontSize: "18px", lineHeight: "28px" }}
          >
            {card.title}
          </p>

          {/* 20px gap */}
          <div style={{ height: "20px" }} />

          {/* 2. description */}
          <p
            className="font-['Manrope',sans-serif] font-normal text-[rgba(255,255,255,0.85)] text-center w-full"
            style={{ fontSize: "14px", lineHeight: "21px" }}
          >
            {card.description}
          </p>

          {/* 32px gap */}
          <div style={{ height: "32px" }} />

          {/* 3. share button */}
          <button
            className="flex items-center justify-center cursor-pointer shrink-0"
            style={{
              padding: "8px",
              borderRadius: "200px",
              background: "#FFFFFF",
            }}
          >
            <ShareFat size={24} color="#1A1128" weight="regular" />
          </button>
        </div>

      </div>
    </div>
  );
}

function CreativeMomentumSection({
  onOpenStory,
}: {
  onOpenStory: (i: number) => void;
}) {
  return (
    <div className="bg-white w-full flex flex-col gap-5 pt-4 pb-6">
      <div className="flex gap-2 items-center px-4">
        <p className="font-['Roboto_Serif',serif] font-semibold not-italic text-[#1a1128] text-[20px] leading-[28px] whitespace-nowrap">
          Creative momentum
        </p>
        <div className="flex-1 h-px bg-[#e2d9ef]" />
      </div>
      <div
        className="flex gap-3 overflow-x-auto px-4 pb-1"
        style={{ scrollbarWidth: "none" }}
      >
        {creativeCards.map(({ image, caption, views }, i) => (
          <button
            key={i}
            onClick={() => onOpenStory(i)}
            className="h-[300px] w-[240px] shrink-0 rounded-[8px] overflow-clip relative cursor-pointer"
          >
            {/* image fills container, centred and cropped like Figma object-cover */}
            <div className="-translate-y-1/2 absolute aspect-[240/300] left-0 right-0 top-1/2">
              <img
                src={image}
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              />
            </div>
            {/* caption at bottom */}
            <div className="-translate-x-1/2 absolute bottom-0 flex items-center justify-center left-1/2 px-[12px] py-[16px] w-[240px]">
              <p className="font-['Manrope',sans-serif] font-normal text-white text-[16px] leading-[24px] text-center w-[210px] overflow-hidden text-ellipsis">
                {caption}
              </p>
            </div>
            {/* views badge top-right */}
            <div className="absolute bg-[rgba(26,26,26,0.6)] flex gap-2 items-center left-[148px] px-[8px] py-[4px] rounded-[4px] top-[16px]">
              <Eye size={24} color="white" />
              <span className="font-['Manrope',sans-serif] font-normal text-white text-[16px] leading-[24px]">
                {views}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Brand job post ───────────────────────────────────────────────────────────

function BrandJobPost() {
  const [applied, setApplied] = useState(false);

  return (
    <div className="bg-white w-full flex flex-col pt-2">
      <div className="overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        <div className="flex gap-3 px-4" style={{ width: "max-content" }}>
          {[imgPromoImage, imgPromoImage1, imgPromoImage2].map(
            (src, i) => (
              <div
                key={i}
                className="h-[291px] w-[292px] shrink-0 rounded-[4px] overflow-hidden"
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            )
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 px-4 pt-3 pb-6">
        <div className="flex gap-1 items-start w-full">
          <div className="flex gap-3 items-center flex-1 min-w-0">
            <img
              src={imgBrandLogo}
              alt=""
              className="size-12 rounded-full object-cover shrink-0"
            />

            <div className="flex flex-col flex-1 min-w-0">
              <p className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tracking-[0.16px] truncate">
                Manish Malhotra
              </p>

              <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px] truncate">
                Job Opportunity
              </p>
            </div>
          </div>

          <SaveButton />
        </div>

        <p className="font-['Manrope',sans-serif] font-normal text-[#1a1128] text-[14px] leading-[21px]">
          {
            "An exciting chance to join one of India's fashion houses apply now and step into the world of high fashion."
          }
        </p>

        <button
          onClick={() => setApplied(true)}
          disabled={applied}
          className={`h-12 rounded-[8px] w-full flex items-center justify-center gap-2 cursor-pointer transition-colors ${
            applied
              ? "bg-[#D6F5DD] border border-[#208436]"
              : "bg-gradient-to-r from-[#7d3aea] to-[#5e28b5]"
          }`}
        >
          {applied && <Check size={18} color="#208436" weight="bold" />}

          <span
            className={`font-['Manrope',sans-serif] font-semibold text-[16px] leading-[20px] tracking-[0.48px] ${
              applied ? "text-[#208436]" : "text-white"
            }`}
          >
            {applied ? "Applied" : "Quick Apply"}
          </span>
        </button>

        <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px] text-right">
          21 July
        </p>
      </div>
    </div>
  );
}
// ─── Bottom nav ───────────────────────────────────────────────────────────────


// ─── Page ─────────────────────────────────────────────────────────────────────

// ─── Upcoming session timer banner ────────────────────────────────────────────

function useCountdown(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

function UpcomingSessionBanner({ mentorName, onChevron }: { mentorName: string; onChevron: () => void }) {
  const label = useCountdown(3480); // 58:00
  // BottomNav = 68px nav row + 46px safe-area = 114px total
  return (
    <div className="fixed bottom-[114px] left-1/2 -translate-x-1/2 w-full max-w-[800px] z-20 bg-[#f5f0ff] border-t border-[#c8bbda] shadow-[0px_-1px_3px_rgba(157,148,170,0.25)]">
      <div className="inline-flex items-center justify-between w-full px-[16px] py-[12px]">
        {/* Left: label */}
        <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[15px] leading-[22px]">
          Upcoming session in
        </p>
        {/* Right: timer chip + chevron (12px gap) */}
        <div className="flex items-center gap-[12px] shrink-0">
          <div className="bg-white border border-[#c8bbda] rounded-[6px] px-[10px] py-[5px] min-w-[68px] flex items-center justify-center">
            <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tabular-nums tracking-[0.16px]">
              {label}
            </span>
          </div>
          <button
            onClick={onChevron}
            className="w-[32px] h-[32px] flex items-center justify-center cursor-pointer shrink-0"
          >
            <CaretRight size={20} color="#433059" weight="regular" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Session summary banner ────────────────────────────────────────────────────

function SessionSummaryBanner({ onChevron }: { onChevron: () => void }) {
  return (
    <div className="bg-white border-b border-[#e2d9ef] w-full">
      <button
        onClick={onChevron}
        className="flex items-center gap-[12px] px-[16px] py-[14px] w-full cursor-pointer"
      >
        <FileTextIcon size={32} color="#1A1128" className="shrink-0" />
        <p className="type-h2 flex-1 text-[#1a1128] text-left">
          Your session summary is ready.
        </p>
        <CaretRight size={20} color="#6B5F7A" className="shrink-0" />
      </button>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [storyIndex, setStoryIndex] = useState<number | null>(null);
  const [showUpcomingBanner, setShowUpcomingBanner] = useState(false);
  const [showPostToast, setShowPostToast] = useState<boolean>(() => !!(location.state as { showToast?: boolean } | null)?.showToast);

  // Close story overlay when navigation occurs elsewhere in the app.
  useEffect(() => {
    function onNavigate() {
      setStoryIndex(null);
    }
    window.addEventListener("lumio:navigate", onNavigate as EventListener);
    return () => window.removeEventListener("lumio:navigate", onNavigate as EventListener);
  }, []);

  // Read session state from location
  const locState = location.state as {
    sessionBooked?: boolean;
    mentorName?: string;
    mentorAvatar?: string;
    sessionMode?: "summary";
    // Forwarded from VideoCallPage so journal can display the correct mentor
    mentor?: {
      id?: string;
      name?: string;
      avatar?: string;
      role?: string;
      company?: string;
    };
    showToast?: boolean;
  } | null;

  const sessionBooked = locState?.sessionBooked ?? false;
  const mentorName = locState?.mentorName ?? "Shruti Jain";
  const mentorAvatar = locState?.mentorAvatar ?? "";
  const showSummaryBanner = locState?.sessionMode === "summary";

  // After 2 seconds of landing from booking, show the upcoming session banner
  useEffect(() => {
    if (!sessionBooked) return;
    const t = setTimeout(() => setShowUpcomingBanner(true), 2000);
    return () => clearTimeout(t);
  }, [sessionBooked]);

  // Auto-dismiss post toast after 3s or on any interaction
  useEffect(() => {
    if (!showPostToast) return;
    const t = setTimeout(() => setShowPostToast(false), 3000);
    return () => clearTimeout(t);
  }, [showPostToast]);

  // Banner ~46px + BottomNav 114px = 160px total clearance when banner visible
  const feedPb = showUpcomingBanner ? "pb-[160px]" : "pb-[0px]";

  // Navbar profile image
  const profileNavImage = imgProfileNav;

  return (
    <div className="min-h-screen bg-[#f0ecf7] flex items-start justify-center">
      {storyIndex !== null && (
        <StoryOverlay index={storyIndex} onClose={() => setStoryIndex(null)} />
      )}
      <div className="w-full max-w-[800px] min-w-0 bg-[#fffeff] flex flex-col min-h-screen">
        <TopBar />

        {/* ── Post success toast ── */}
        {showPostToast && (
          <div
            onClick={() => setShowPostToast(false)}
            className="fixed top-[60px] left-1/2 -translate-x-1/2 z-[90] w-[calc(100%-32px)] max-w-[368px]"
          >
            <div
              className="flex items-center gap-[10px] px-[16px] py-[12px] rounded-[10px]"
              style={{
                background: "#1A1128",
                boxShadow: "0px 4px 16px rgba(26, 17, 40, 0.28)",
              }}
            >
              <div
                className="shrink-0 flex items-center justify-center rounded-full"
                style={{ width: 28, height: 28, background: "#7D3AEA" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7.5L5.5 11L12 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p
                className="flex-1 font-['Manrope',sans-serif] font-medium text-white text-[14px] leading-[20px]"
              >
                Your post is now live
              </p>
            </div>
          </div>
        )}

        <div className={`flex-1 overflow-y-auto ${feedPb}`}>
          <div className="flex flex-col gap-1">
            {/* Session summary banner — fixed as first feed item */}
            {showSummaryBanner && (
              <SessionSummaryBanner
                onChevron={() =>
                  navigate("/journal/summary", {
                    state: {
                      mentor: locState?.mentor,
                      mentorName: locState?.mentorName,
                      mentorAvatar: locState?.mentorAvatar,
                    },
                  })
                }
              />
            )}
            <PostCard
              image={imgPostImage01}
              containImage
              avatarSingle={imgAvatarImage1}
              name="Sanyam Kumar"
              role="Fashion Designer and Stylist"
              status="Seeking Internship"
              caption="Maximal Baarat styling meets royal drama with layered jewels, bold turbans, and statement silhouettes."
              date="26 July"
              engagementAvatar={imgEngagementAvatar1}
              engagementLabel="Sr. Designer from Sabyasachi"
              engagementIcon="repost"
              onClick={() => navigate("/profile/project-detail-screen", { state: { postId: "sanyam" } })}
            />
            <PostCard
              image={imgPostImage02}
              avatarPrimary={imgAvatarPrimary}
              avatarSecondary={imgAvatarSecondary}
              name="Neha Jain"
              role="Fashion Designer"
              status="Seeking Full time"
              caption="A Celebration of Resilience, Beauty, and Feminine Power."
              date="25 July"
              coCreate
              coCreateWith="2 Others"
              onClick={() => navigate("/profile/project-detail-screen", { state: { postId: "neha" } })}
            />
            <CreativeMomentumSection onOpenStory={setStoryIndex} />
            <PostCard
              image={imgPostImage2}
              containImage
              avatarSingle={imgAvatarImage3}
              name="Arpita Sharma"
              role="Jewellery Designer @Rubas"
              caption="Temple artistry steeped in South Indian tradition."
              date="25 July"
              onClick={() => navigate("/profile/project-detail-screen", { state: { postId: "arpita" } })}
            />
            <BrandJobPost />
            <PostCard
              image={imgPostImage3}
              avatarSingle={imgAvatarImage4}
              name="Kamini Singh"
              role="Fashion Designer"
              caption="Denim dreams stitched with confidence and runway elegance."
              date="20 July"
              onClick={() => navigate("/profile/project-detail-screen", { state: { postId: "kamini" } })}
            />
            <PostCard
              image={imgPostImage4}
              containImage
              avatarSingle={imgAvatarImage5}
              name="Aayush Kumar"
              role="Textile Designer"
              caption="Modern swirl patterns in muted tones bring artistic movement and cozy elegance to the rug design."
              date="20 July"
              engagementAvatar={imgEngagementAvatar2}
              engagementLabel="Sr. Designer from Papa Dont' Preach"
              engagementIcon="clap"
              onClick={() => navigate("/profile/project-detail-screen", { state: { postId: "aayush" } })}
            />
          </div>
        </div>
        <BottomNav active="home" profileNavImg={profileNavImage} />

        {/* Upcoming session banner — fixed above BottomNav */}
        {showUpcomingBanner && (
          <UpcomingSessionBanner
            mentorName={mentorName}
            onChevron={() =>
              navigate("/mentors/video-call", { state: { mentorName, mentorAvatar } })
            }
          />
        )}
      </div>
    </div>
  );
}
