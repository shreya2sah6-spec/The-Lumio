import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  X,
  Microphone,
  VideoCamera,
  PhoneDisconnect,
  ChatCircleText,
  Screencast,
  CameraRotate,
  Star,
} from "@phosphor-icons/react";
import type { Mentor } from "../components/MentorCard";

// Fallback mentor video background (used if no avatar is passed)
const FALLBACK_MENTOR_BG =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=1000&fit=crop&crop=face&auto=format";

// Google Drive mentor preview image
const PREVIEW_IMAGE =
  "https://drive.google.com/thumbnail?id=1wQqlrIICHStj_DzHXbJjFVy66Ajv19TN&sz=w1000";

// ─── Review bottom sheet ──────────────────────────────────────────────────────

function ReviewBottomSheet({
  mentorName,
  onDone,
}: {
  mentorName: string;
  onDone: () => void;
}) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [anonymous, setAnonymous] = useState(true);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-[rgba(26,26,26,0.5)]" />

      {/* Sheet */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] z-50 bg-white rounded-tl-[24px] rounded-tr-[24px]">
        {/* Drag handle */}
        <div className="flex justify-center pt-[12px] pb-[8px]">
          <div className="bg-[#1a1128] h-[4px] rounded-full w-[32px]" />
        </div>

        {/* Title */}
        <div className="text-center px-[24px] pt-[12px] pb-[4px]">
          <p className="font-['Manrope',sans-serif] font-bold text-[#1a1128] text-[22px] leading-[32px]">
            Write a Review
          </p>
        </div>

        {/* Stars */}
        <div className="flex gap-[10px] justify-center py-[16px]">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="cursor-pointer active:scale-90 transition-transform"
            >
              <Star
                size={44}
                weight={star <= rating ? "fill" : "regular"}
                color="#F7B500"
              />
            </button>
          ))}
        </div>

        {/* Question */}
        <div className="px-[24px] pb-[14px]">
          <p className="font-['Manrope',sans-serif] text-[#1a1128] text-[17px] leading-[26px]">
            <span className="font-semibold">
              How would you rate the mentor&apos;s effectiveness?
            </span>{" "}
            <span className="font-normal text-[#6b5f7a] text-[15px]">
              (clarity, engagement, and helpfulness)
            </span>
          </p>
        </div>

        {/* Textarea */}
        <div className="px-[24px] pb-[20px]">
          <div className="rounded-[12px] border border-[#e2d9ef] bg-[#fafafa] overflow-hidden">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Briefly describe your experience with the mentor."
              className="w-full h-[160px] p-[16px] font-['Manrope',sans-serif] text-[#1a1128] text-[15px] leading-[23px] placeholder:text-[#9d90ad] outline-none resize-none bg-transparent"
            />
          </div>
        </div>

        {/* Anonymous toggle */}
        <div className="px-[24px] pb-[24px] flex items-center justify-between">
          <p className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[18px] leading-[28px]">
            Post anonymously
          </p>
          <button
            onClick={() => setAnonymous(!anonymous)}
            className={`w-[51px] h-[31px] rounded-full relative transition-colors duration-200 shrink-0 ${
              anonymous ? "bg-[#22c55e]" : "bg-[#e2d9ef]"
            }`}
          >
            <div
              className={`absolute top-[2px] w-[27px] h-[27px] bg-white rounded-full shadow transition-transform duration-200 ${
                anonymous ? "translate-x-[21px]" : "translate-x-[2px]"
              }`}
            />
          </button>
        </div>

        {/* CTAs */}
        <div className="px-[24px] pb-[24px] flex gap-[16px] items-center">
          <button
            onClick={onDone}
            className="px-[20px] py-[14px] cursor-pointer shrink-0 active:opacity-70"
          >
            <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[17px] leading-[26px]">
              Skip
            </span>
          </button>
          <button
            onClick={onDone}
            className="flex-1 h-[52px] rounded-[12px] flex items-center justify-center cursor-pointer active:opacity-90"
            style={{ background: "linear-gradient(to right, #7d3aea, #5e28b5)" }}
          >
            <span className="font-['Manrope',sans-serif] font-semibold text-white text-[17px] leading-[26px]">
              Submit
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

// ─── Video call page ──────────────────────────────────────────────────────────

export function VideoCallPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as {
    mentorName?: string;
    mentorAvatar?: string;
    mentor?: Mentor;
  } | null;

  // Derive mentor name + avatar from whatever context navigated here
  const mentorName = state?.mentor?.name ?? state?.mentorName ?? "Shruti Jain";
  const mentorBg = state?.mentor?.avatar ?? state?.mentorAvatar ?? FALLBACK_MENTOR_BG;

  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [showReview, setShowReview] = useState(false);

  function handleReviewDone() {
    navigate("/home/feed", { state: { sessionMode: "summary" } });
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-start justify-center">
      <div className="relative w-full max-w-[800px] min-w-[360px] h-screen overflow-hidden">

        {/* Full-screen mentor video background */}
        <img
          src={mentorBg}
          alt={mentorName}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Gradient overlay — heavier at bottom for controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.88)] via-[rgba(0,0,0,0.08)] to-transparent pointer-events-none" />

        {/* ── Top bar ── */}
        <div className="absolute top-[56px] left-0 right-0 z-20 px-[20px] flex items-start justify-between">

          {/* Close button */}
          <button
            onClick={() => navigate(-1)}
            className="bg-white/85 backdrop-blur-[4px] rounded-full w-[44px] h-[44px] flex items-center justify-center border border-white/50 shadow-md active:scale-95 transition-transform"
          >
            <X size={20} color="#1A1128" weight="bold" />
          </button>

          {/* Preview panel */}
          <div className="relative w-[102px]">

            {/* remote-video-preview */}
            <div className="w-[102px] h-[102px] rounded-[8px] overflow-hidden border border-[#E2D9EF] shadow-lg">
              <img
                src={PREVIEW_IMAGE}
                alt="Mentor Preview"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* preview-controls */}
            <button className="absolute -bottom-[10px] -right-[10px] bg-white/85 backdrop-blur-[6px] border border-white/50 rounded-full w-[34px] h-[34px] flex items-center justify-center active:scale-90 transition-transform shadow-md">
              <CameraRotate size={18} color="#1A1128" weight="regular" />
            </button>

          </div>
        </div>

        {/* controls bottom=72px, height=58px → top=130px; gap=28px → details bottom=158px */}
        <div
          className="absolute z-20 left-0 right-0 flex items-center justify-center px-[20px]"
          style={{ bottom: "158px" }}
        >
          {/* Role chip */}
          <div className="bg-white rounded-[4px] px-[8px] py-[4px] flex items-center justify-center shrink-0">
            <span className="type-caption-1-trim text-[#1a1128]">Mentor</span>
          </div>
          {/* 8px gap between role-chip and participant-name */}
          <div className="w-[8px] shrink-0" />
          {/* Participant name + call duration — 2px gap between them */}
          <div className="flex items-center" style={{ gap: "2px" }}>
            <span className="type-h4 text-white drop-shadow-lg">{mentorName}</span>
            <span className="type-h4 text-white/60 drop-shadow-lg">· 50:00</span>
          </div>
        </div>

        {/* ── Controls row ── */}
        <div
          className="absolute z-20 flex items-center justify-center gap-[14px] left-0 right-0 px-[16px]"
          style={{ bottom: "72px" }}
        >
          {/* Mic */}
          <button
            onClick={() => setMicOn(!micOn)}
            className="w-[58px] h-[58px] bg-white/90 backdrop-blur-[4px] border border-white/60 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform"
          >
            <Microphone size={24} color={micOn ? "#1A1128" : "#E53935"} weight="regular" />
          </button>

          {/* Camera */}
          <button
            onClick={() => setCameraOn(!cameraOn)}
            className="w-[58px] h-[58px] bg-white/90 backdrop-blur-[4px] border border-white/60 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform"
          >
            <VideoCamera size={24} color={cameraOn ? "#1A1128" : "#E53935"} weight="regular" />
          </button>

          {/* End call — solid red fill, white icon, equal sizing */}
          <button
            onClick={() => setShowReview(true)}
            className="w-[58px] h-[58px] bg-[#DE3226] rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform"
          >
            <PhoneDisconnect size={24} color="white" weight="bold" />
          </button>

          {/* Chat */}
          <button className="w-[58px] h-[58px] bg-white/90 backdrop-blur-[4px] border border-white/60 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform">
            <ChatCircleText size={24} color="#1A1128" weight="regular" />
          </button>

          {/* Screen share */}
          <button className="w-[58px] h-[58px] bg-white/90 backdrop-blur-[4px] border border-white/60 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform">
            <Screencast size={24} color="#1A1128" weight="regular" />
          </button>
        </div>

        {/* Review bottom sheet */}
        {showReview && (
          <ReviewBottomSheet mentorName={mentorName} onDone={handleReviewDone} />
        )}
      </div>
    </div>
  );
}
