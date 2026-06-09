import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import imgRemoteVideoPreview from "@/imports/remote-video-preview.png";

import {
  CameraRotate,
  ChatCircleText,
  Microphone,
  PhoneDisconnect,
  Screencast,
  Star,
  VideoCamera,
  X,
} from "@phosphor-icons/react";

import type { Mentor } from "../components/MentorCard";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

interface VideoCallState {
  mentor?: Mentor;
  mentorName?: string;
  mentorAvatar?: string;
}

/* -------------------------------------------------------------------------- */
/*                                  CONSTANTS                                 */
/* -------------------------------------------------------------------------- */

// Fallback mentor video background
const FALLBACK_MENTOR_BG =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=1000&fit=crop&crop=face&auto=format";

// Local remote-video preview asset (fixed, never dynamic)
const PREVIEW_IMAGE = imgRemoteVideoPreview;

const ROUTES = {
  HOME_FEED: "/home/feed",
} as const;

/* -------------------------------------------------------------------------- */
/*                            REVIEW BOTTOM SHEET                             */
/* -------------------------------------------------------------------------- */

interface ReviewBottomSheetProps {
  mentorName: string;
  onClose: () => void;
  onSubmit: () => void;
}

function ReviewBottomSheet({
  mentorName,
  onClose,
  onSubmit,
}: ReviewBottomSheetProps) {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [anonymous, setAnonymous] = useState<boolean>(true);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-title"
    >
      <div className="w-full max-w-[800px] rounded-t-[24px] bg-white shadow-2xl">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="h-1 w-8 rounded-full bg-[#1a1128]" />
        </div>

        {/* Header */}
        <div className="px-[16px] pt-[8px] pb-[16px] text-center">
          <h2
            id="review-title"
            className="font-['Manrope'] text-[22px] font-bold leading-[32px] text-[#1a1128]"
          >
            Write a Review
          </h2>

          <p className="mt-1 text-[14px] text-[#6b5f7a]">
            Share your session experience with {mentorName}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 px-[16px] py-[16px]">
          {[1, 2, 3, 4, 5].map((star) => {
            const active = star <= rating;

            return (
              <button
                key={star}
                type="button"
                aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                onClick={() => setRating(star)}
                className="transition-transform active:scale-90"
              >
                <Star
                  size={42}
                  weight={active ? "fill" : "regular"}
                  color="#F7B500"
                />
              </button>
            );
          })}
        </div>

        {/* Review */}
        <div className="px-[16px] pb-[16px]">
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Describe your mentoring experience..."
            className="h-[160px] w-full resize-none rounded-[14px] border border-[#e2d9ef] bg-[#fafafa] p-4 text-[15px] leading-[24px] text-[#1a1128] outline-none transition focus:border-[#7d3aea]"
          />
        </div>

        {/* Anonymous */}
        <div className="px-[16px] pb-[16px] flex items-center justify-between">
          <p className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[18px] leading-[28px]">
            Post anonymously
          </p>

          {/* Toggle */}
          <div
            className="relative w-[40px] h-[24px] cursor-pointer shrink-0"
            onClick={() => setAnonymous((prev) => !prev)}
            role="switch"
            aria-checked={anonymous}
            aria-label="Post anonymously"
          >
            {/* Track */}
            <div
              className={`absolute inset-0 rounded-[16px] transition-colors duration-200 ${
                anonymous ? "bg-[#208436]" : "bg-[#6B5F7A]"
              }`}
            />
            {/* Thumb */}
            <div
              className={`absolute top-[2px] w-[20px] h-[20px] rounded-full bg-white transition-transform duration-200 ${
                anonymous ? "translate-x-[18px]" : "translate-x-[2px]"
              }`}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-[16px] pb-[16px] flex items-center gap-[8px]">
          {/* Skip */}
          <button
            type="button"
            onClick={onClose}
            className="px-[24px] py-[12px] cursor-pointer shrink-0 active:opacity-70"
          >
            <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[16px] leading-[24px]">
              Skip
            </span>
          </button>

          {/* Submit Review */}
          <button
            type="button"
            onClick={onSubmit}
            className="flex h-[52px] flex-1 items-center justify-center rounded-[14px] bg-gradient-to-r from-[#7d3aea] to-[#5e28b5] font-semibold text-white"
          >
            Submit Review
          </button>
        </div>

        {/* Safe Area */}
        <div className="pb-[env(safe-area-inset-bottom)]" />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               VIDEO CALL PAGE                              */
/* -------------------------------------------------------------------------- */

export function VideoCallPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as VideoCallState | null;

  const mentorName = useMemo(
    () => state?.mentor?.name ?? state?.mentorName ?? "Shruti Jain",
    [state]
  );

  const mentorImage = useMemo(
    () =>
      state?.mentor?.avatar ??
      state?.mentorAvatar ??
      FALLBACK_MENTOR_BG,
    [state]
  );

  const [micEnabled, setMicEnabled] = useState<boolean>(true);
  const [cameraEnabled, setCameraEnabled] = useState<boolean>(true);
  const [showReview, setShowReview] = useState<boolean>(false);

  function handleLeaveCall() {
    setShowReview(true);
  }

  function handleReviewComplete() {
    navigate(ROUTES.HOME_FEED, {
      state: {
        sessionMode: "summary",
        // Forward mentor data so SessionJournalPage can display the correct mentor
        mentor: state?.mentor,
        mentorName,
        mentorAvatar: mentorImage,
      },
    });
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Background */}
      <img
        src={mentorImage}
        alt={mentorName}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/10" />

      {/* Main Container */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between">
        {/* ------------------------------------------------------------------ */}
        {/* TOP SECTION */}
        {/* ------------------------------------------------------------------ */}

        <header className="flex items-start justify-between px-5 pt-[max(24px,env(safe-area-inset-top))]">
          {/* Close */}
          <button
            type="button"
            aria-label="Leave call"
            onClick={() => navigate("/mentors")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/80 backdrop-blur-md"
          >
            <X size={20} color="#1A1128" weight="bold" />
          </button>

          {/* Preview */}
          <div className="relative">
            <div className="h-[102px] w-[102px] overflow-hidden rounded-[14px] border border-white/20 shadow-xl">
              <img
                src={PREVIEW_IMAGE}
                alt="Local camera preview"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <button
              type="button"
              aria-label="Switch camera"
              className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/90 backdrop-blur-md"
            >
              <CameraRotate size={18} color="#1A1128" />
            </button>
          </div>
        </header>

        {/* ------------------------------------------------------------------ */}
        {/* BOTTOM SECTION — details + actions with 28px vertical gap          */}
        {/* ------------------------------------------------------------------ */}

        <div className="flex flex-col items-center gap-[28px] pb-[calc(32px+env(safe-area-inset-bottom))] px-4">

          {/* Call Details */}
          <div className="flex items-center gap-2">
            {/* Role chip */}
            <div className="rounded-[4px] bg-white px-2 py-[2px] shrink-0">
              <span className="font-['Manrope',sans-serif] text-[12px] font-medium leading-[18px] text-[#1a1128]">
                Mentor
              </span>
            </div>

            {/* Name · Duration */}
            <p className="font-['Manrope',sans-serif] text-[16px] font-medium leading-[25px] text-white">
              {mentorName}
              <span className="text-white/60"> · 50:00</span>
            </p>
          </div>

          {/* Action Buttons — 20px horizontal gap, perfectly circular, no compression */}
          <div className="flex flex-nowrap items-center justify-center gap-[20px]">
            {/* Mic */}
            <button
              type="button"
              aria-label={micEnabled ? "Mute microphone" : "Unmute microphone"}
              onClick={() => setMicEnabled((prev) => !prev)}
              className="flex h-[48px] w-[48px] min-h-[48px] min-w-[48px] shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/90 backdrop-blur-md"
            >
              <Microphone size={22} color={micEnabled ? "#1A1128" : "#E53935"} />
            </button>

            {/* Camera */}
            <button
              type="button"
              aria-label={cameraEnabled ? "Turn camera off" : "Turn camera on"}
              onClick={() => setCameraEnabled((prev) => !prev)}
              className="flex h-[48px] w-[48px] min-h-[48px] min-w-[48px] shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/90 backdrop-blur-md"
            >
              <VideoCamera size={22} color={cameraEnabled ? "#1A1128" : "#E53935"} />
            </button>

            {/* End Call */}
            <button
              type="button"
              aria-label="End call"
              onClick={handleLeaveCall}
              className="flex h-[48px] w-[48px] min-h-[48px] min-w-[48px] shrink-0 items-center justify-center rounded-full bg-[#DE3226]"
            >
              <PhoneDisconnect size={22} color="white" weight="bold" />
            </button>

            {/* Chat */}
            <button
              type="button"
              aria-label="Open chat"
              className="flex h-[48px] w-[48px] min-h-[48px] min-w-[48px] shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/90 backdrop-blur-md"
            >
              <ChatCircleText size={22} color="#1A1128" />
            </button>

            {/* Share Screen */}
            <button
              type="button"
              aria-label="Share screen"
              className="flex h-[48px] w-[48px] min-h-[48px] min-w-[48px] shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/90 backdrop-blur-md"
            >
              <Screencast size={22} color="#1A1128" />
            </button>
          </div>

        </div>
      </div>

      {/* Review Modal */}
      {showReview && (
        <ReviewBottomSheet
          mentorName={mentorName}
          onClose={handleReviewComplete}
          onSubmit={handleReviewComplete}
        />
      )}
    </main>
  );
}
