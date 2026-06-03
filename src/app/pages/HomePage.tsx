import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router";
import {
  BellSimple,
  ChatCenteredDots,
  CaretLeft,
  Eye,
  Repeat,
  HandsClapping,
  Check,
  ShareFat,
} from "@phosphor-icons/react";
import { BottomNav } from "../components/BottomNav";
import { SearchBar } from "../components/SearchBar";
import { SaveButton } from "../components/SaveButton";

// Status bar SVG paths kept as Figma-exact UI chrome (immune to Figma sync deletions)
const statusBarPaths = {
  signalBars:
    "M3.26916 9.60239C3.8002 9.60239 4.23107 10.0333 4.23107 10.5643V12.4872C4.23107 13.0182 3.8002 13.4491 3.26916 13.4491H2.30724C1.77641 13.4488 1.3463 13.018 1.3463 12.4872V10.5643C1.3463 10.0334 1.77641 9.60263 2.30724 9.60239H3.26916ZM7.75646 7.67954C8.28748 7.67956 8.71837 8.11043 8.71837 8.64145V12.4872C8.71837 13.0182 8.28748 13.449 7.75646 13.4491H6.79455C6.26365 13.4489 5.83361 13.0181 5.83361 12.4872V8.64145C5.83361 8.11052 6.26365 7.67971 6.79455 7.67954H7.75646ZM12.2438 5.43637C12.7747 5.43647 13.2046 5.86638 13.2047 6.39731V12.4872C13.2047 13.0181 12.7747 13.449 12.2438 13.4491H11.2819C10.7509 13.449 10.3209 13.0181 10.3209 12.4872V6.39731C10.321 5.86639 10.7509 5.43648 11.2819 5.43637H12.2438ZM16.7311 3.19223C17.262 3.1924 17.692 3.6232 17.692 4.15415V12.4872C17.692 13.0181 17.262 13.4489 16.7311 13.4491H15.7692C15.2381 13.449 14.8072 13.0182 14.8072 12.4872V4.15415C14.8072 3.62313 15.2381 3.19227 15.7692 3.19223H16.7311Z",
  wifi: "M5.86291 11.2694C7.08941 10.2323 8.88553 10.2321 10.1119 11.2694C10.1736 11.3252 10.2098 11.404 10.2115 11.4872C10.2132 11.5703 10.1801 11.6506 10.1207 11.7088L8.19982 13.6473C8.14355 13.7041 8.06686 13.7362 7.98693 13.7362C7.90698 13.7361 7.83028 13.7041 7.77404 13.6473L5.85314 11.7088C5.79385 11.6505 5.76154 11.5703 5.7633 11.4872C5.76508 11.404 5.80118 11.3251 5.86291 11.2694ZM3.29943 8.68442C5.94193 6.22636 10.0349 6.22636 12.6774 8.68442C12.7367 8.74203 12.7703 8.82142 12.7711 8.90415C12.7718 8.98686 12.7395 9.06614 12.6813 9.12485L11.5709 10.2469C11.4566 10.3613 11.2723 10.364 11.1549 10.2528C10.2871 9.46701 9.15759 9.03201 7.98693 9.03208C6.81713 9.03263 5.68901 9.46758 4.82189 10.2528C4.70455 10.364 4.52022 10.3613 4.40587 10.2469L3.29552 9.12485C3.23716 9.06621 3.20403 8.98688 3.2047 8.90415C3.20548 8.82134 3.23996 8.74203 3.29943 8.68442ZM0.736929 6.10532C4.78991 2.22126 11.184 2.22118 15.2369 6.10532C15.2956 6.16301 15.3282 6.24181 15.3287 6.32407C15.3292 6.40622 15.2977 6.48544 15.2399 6.5438L14.1276 7.66587C14.0131 7.78071 13.8278 7.78193 13.7115 7.6688C12.1674 6.20072 10.1176 5.38178 7.98693 5.38169C5.85613 5.38174 3.80665 6.20067 2.26232 7.6688C2.14611 7.7823 1.95977 7.78115 1.84533 7.66587L0.733999 6.5438C0.676061 6.48537 0.643616 6.40635 0.644156 6.32407C0.644697 6.24178 0.678219 6.16298 0.736929 6.10532Z",
  batteryOutline:
    "M3.02599 2.71124H19.0514C20.2019 2.71129 21.1344 3.64466 21.1344 4.79522V10.5638C21.1344 11.7143 20.2019 12.6477 19.0514 12.6478H3.02599C1.8754 12.6478 0.942008 11.7144 0.942008 10.5638V4.79522C0.942008 3.64463 1.8754 2.71124 3.02599 2.71124Z",
  batteryTip:
    "M22.5769 5.75643V9.60258C23.3507 9.27684 23.8539 8.51906 23.8539 7.67951C23.8539 6.83996 23.3507 6.08218 22.5769 5.75643",
  batteryFill:
    "M2.38462 5.4359C2.38462 4.72784 2.95861 4.15385 3.66667 4.15385H18.4103C19.1183 4.15385 19.6923 4.72784 19.6923 5.4359V9.92308C19.6923 10.6311 19.1183 11.2051 18.4103 11.2051H3.66667C2.95861 11.2051 2.38462 10.6311 2.38462 9.92308V5.4359Z",
};
import imgPostImage01 from "@/imports/HomeProfileCompletion-1/9b9825967a487a46eb220eafbeb9846153a9b187.png";
import imgAvatarImage1 from "@/imports/HomeProfileCompletion-1/733e8cf72a0fc5655efdb377f7a418e9263541e1.png";
import imgPostImage02 from "@/imports/HomeProfileCompletion-1/2237e23c0b0a917e12372a61adebbe568838af3e.png";
import imgAvatarPrimary from "@/imports/HomeProfileCompletion-1/5e72ee9d7d7c503b8d808c6f856192019f6d2e26.png";
import imgAvatarSecondary from "@/imports/HomeProfileCompletion-1/302a8171bbddedbee08d110930e4a4d9860625ed.png";
import imgCreativeCard01 from "@/imports/HomeProfileCompletion-1/2c2355387ac373692cffca7ca8c2506de23c4435.png";
import imgCreativeCard02 from "@/imports/HomeProfileCompletion-1/05dd7c8d14a43160151764b990777fe1c7136131.png";
import imgCreativeCard03 from "@/imports/HomeProfileCompletion-1/e6303e8f0e0306433072d30c7b018509d8b10041.png";
import imgCreativeCard04 from "@/imports/HomeProfileCompletion-1/de0d3d2ddba7f7f644a7adb44db0021a0f01e36d.png";
import imgPostImage2 from "@/imports/HomeProfileCompletion-1/fc872e61dc9faf56d7250cef8f2c4c41196d57da.png";
import imgAvatarImage3 from "@/imports/HomeProfileCompletion-1/03a40532a3f775fa0602f3aa80f7e17e44cdc2cd.png";
import imgPromoImage from "@/imports/HomeProfileCompletion-1/7d4d7f01fddb9b53ad927532e884890ec05dedee.png";
import imgPromoImage1 from "@/imports/HomeProfileCompletion-1/cc4e7259abc400810d9f6971b03ec64ce45a0c06.png";
import imgPromoImage2 from "@/imports/HomeProfileCompletion-1/6470fe0aa7b4e6b1e00d8e32bc429a4545125d0d.png";
import imgPromoImage3 from "@/imports/HomeProfileCompletion-1/0ac8ae9d3d28473bf876c063463f1a287b18fce5.png";
import imgBrandLogo from "@/imports/HomeProfileCompletion-1/28d13f96340cd4282fa71f71e505e234b4902350.png";
import imgPostImage3 from "@/imports/HomeProfileCompletion-1/43396b0d46c184012a4997b17cf3f71f31a40883.png";
import imgAvatarImage4 from "@/imports/HomeProfileCompletion-1/bb4ae9acbf1717477721a1ac665229d89c11f830.png";
import imgPostImage4 from "@/imports/HomeProfileCompletion-1/65db2a88ad9aef51f6a8fa6095b21715e5c54a29.png";
import imgEngagementAvatar1 from "@/imports/HomeProfileCompletion-1/22a618f0acbc96cb390eccb456b612e531e62706.png";
import imgEngagementAvatar2 from "@/imports/HomeProfileCompletion-1/0cbc38f58cc3a3bcd0b44baafde4ddc2b85b6aa5.png";
import imgAvatarImage5 from "@/imports/HomeProfileCompletion-1/a95e6c88f73b1e84acd4af965b924859220e4a21.png";
import imgProfileNav from "@/imports/MentorsListing-1/bb5b0e0896cc0396e3c8e2b6811f344da7f15455.png";

// ─── Status bar ───────────────────────────────────────────────────────────────

function StatusBar() {
  return (
    <div className="w-full bg-[#fffeff] flex h-[44px] items-center justify-between px-4 py-2 shrink-0">
      <p className="font-['Roboto',sans-serif] font-normal text-[14.423px] leading-[20.192px] text-[#1a1128] tracking-[-0.3077px]">
        9:41
      </p>
      <div className="flex gap-[2px] items-center shrink-0">
        <div className="h-[15.385px] relative w-[19.231px]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 19.2308 15.3846"
          >
            <path d={statusBarPaths.signalBars} fill="#1A1128" />
          </svg>
        </div>
        <div className="relative size-[15.385px]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15.3846 15.3846"
          >
            <path d={statusBarPaths.wifi} fill="#1A1128" />
          </svg>
        </div>
        <div className="h-[15.385px] relative w-[24.038px]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24.0385 15.3846"
          >
            <path
              d={statusBarPaths.batteryOutline}
              opacity="0.35"
              stroke="#9D94AA"
              strokeOpacity="0.4"
              strokeWidth="0.961538"
              fill="none"
            />
            <path d={statusBarPaths.batteryTip} fill="#1A1128" opacity="0.4" />
            <path d={statusBarPaths.batteryFill} fill="#1A1128" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Top bar ──────────────────────────────────────────────────────────────────

function TopBar() {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-10 bg-[#fffeff] shadow-[0px_1px_2px_rgba(200,192,212,0.4)]">
      <StatusBar />
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

function ProfileCompletionCard({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="bg-[#f5f0ff] w-full flex flex-col gap-4 px-4 py-3">
      <div className="flex flex-col gap-2 w-full">
        <p className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[18px] leading-[28px]">
          Complete your profile to apply for jobs
        </p>
        <div className="flex gap-3 items-center w-full">
          <div className="flex-1 h-1 relative rounded-full overflow-hidden bg-white border border-[#e2d9ef]">
            <div className="absolute left-0 top-0 h-full w-[40%] bg-[#7d3aea] rounded-full" />
          </div>
          <span className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[16px] leading-[25px] tracking-[0.16px]">
            40%
          </span>
        </div>
      </div>
      <button
        onClick={onComplete}
        className="bg-white border border-[#7d3aea] rounded-[8px] h-12 w-full flex items-center justify-center cursor-pointer"
      >
        <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[16px] leading-[20px] tracking-[0.48px]">
          Autofill Demo Profile
        </span>
      </button>
    </div>
  );
}

// ─── Post card ────────────────────────────────────────────────────────────────

interface PostCardProps {
  image: string;
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
}

function PostCard({
  image,
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
}: PostCardProps) {
  return (
    <div className="bg-white w-full flex flex-col">
      <div className="w-full aspect-[390/348] relative overflow-hidden">
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
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
            <div className="relative shrink-0 size-12">
              {avatarSingle ? (
                <img
                  src={avatarSingle}
                  alt=""
                  className="size-full rounded-full object-cover"
                />
              ) : (
                <>
                  <img
                    src={avatarPrimary}
                    alt=""
                    className="absolute top-0 left-0 size-8 rounded-tl-full rounded-tr-full rounded-bl-full object-cover border border-[#e2d9ef]"
                  />
                  <img
                    src={avatarSecondary}
                    alt=""
                    className="absolute bottom-0 right-0 size-8 object-cover border border-white shadow-[-1px_0px_2px_0px_rgba(26,26,26,0.15)] rounded-t-[200px] rounded-bl-[200px] rounded-br-[0px]"
                  />
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
        <p className="font-['Manrope',sans-serif] font-normal text-[#1a1128] text-[14px] leading-[21px]">
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
    if (inactivityRef.current) clearTimeout(inactivityRef.current);
    inactivityRef.current = setTimeout(advance, 60000);
  }, [advance]);

  useEffect(() => {
    currentRef.current = current;
    setProgress(0);
    resetInactivity();
    timerRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
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

        {/* bottom safe area — matches home indicator across all screens */}
        <div className="relative z-20 h-[46px] w-full flex items-end justify-center pb-[7.69px]">
          <div className="bg-white h-[4.808px] rounded-[200px] w-[128.846px] opacity-60" />
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
          {[imgPromoImage, imgPromoImage1, imgPromoImage2, imgPromoImage3].map(
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
            className={`font-['Manrope',sans-serif] font-semibold text-[16px] leading-[20px] tracking-[0.48px] ${applied ? "text-[#208436]" : "text-white"}`}
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

export function HomePage() {
  const [storyIndex, setStoryIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f0ecf7] flex items-start justify-center">
      {storyIndex !== null && (
        <StoryOverlay index={storyIndex} onClose={() => setStoryIndex(null)} />
      )}
      <div className="w-full max-w-[800px] min-w-0 bg-[#fffeff] flex flex-col min-h-screen">
        <TopBar />
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-1">
            <PostCard
              image={imgPostImage01}
              avatarSingle={imgAvatarImage1}
              name="Sanyam Kumar"
              role="Textile Designer"
              status="Seeking Internship"
              caption="A Rajasthan-inspired dome brought to life through the richness of Indian art."
              date="26 July"
              engagementAvatar={imgEngagementAvatar1}
              engagementLabel="Sr. Designer from Sabyasachi"
              engagementIcon="repost"
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
            />
            <CreativeMomentumSection onOpenStory={setStoryIndex} />
            <PostCard
              image={imgPostImage2}
              avatarSingle={imgAvatarImage3}
              name="Arpita Sharma"
              role="Jewellery Designer @Rubas"
              caption="A Rajasthani jewelry showcases vibrant colors, intricate craftsmanship, and royal heritage."
              date="25 July"
            />
            <BrandJobPost />
            <PostCard
              image={imgPostImage3}
              avatarSingle={imgAvatarImage4}
              name="Kamini Singh"
              role="Fashion Designer"
              caption="Denim dreams stitched with confidence and runway elegance."
              date="20 July"
            />
            <PostCard
              image={imgPostImage4}
              avatarSingle={imgAvatarImage5}
              name="Aayush Kumar"
              role="Accessory Designer"
              caption="A luxe crystal-embellished 3D handbag blending glamour with modern elegance."
              date="20 July"
              engagementAvatar={imgEngagementAvatar2}
              engagementLabel="Sr. Designer from Papa Dont' Preach"
              engagementIcon="clap"
            />
          </div>
        </div>
        <BottomNav active="home" profileNavImg={imgProfileNav} />
      </div>
    </div>
  );
}
