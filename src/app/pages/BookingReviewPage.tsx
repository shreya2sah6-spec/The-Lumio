import { useState } from "react";
import { AppLayout } from "../components/AppLayout";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CalendarDots,
  Question,
  ShieldCheck,
  VideoCamera,
} from "@phosphor-icons/react";
import { PageHeader } from "../components/PageHeader";
import type { Mentor } from "../components/MentorCard";
import svgPaths from "@/imports/MentorsBookingReview-2/svg-37p92hqhmy";
import imgMentorAvatarFallback from "@/imports/MentorsBookingReview-2/8a0297188511b9e7d739e0bdb0fad1599992ea67.png";
import { BookingConfirmedPage } from "./BookingConfirmedPage";

type BookingType = "session" | "chat-unlock";

interface BookingReviewPageProps {
  onBack?: () => void;
  mentor?: Mentor;
  bookingType?: BookingType;
}

const defaultMentor: Mentor = {
  id: "m1",
  name: "Shruti Jain",
  title: "Sr. Fashion Designer",
  company: "MAX Fashion",
  avatar: imgMentorAvatarFallback,
  experience: "7 yrs exp • EX - ZARA",
  rating: 4.9,
  reviews: 120,
  originalPrice: 600,
  discountedPrice: 300,
  isTopMentor: true,
};

export function BookingReviewPage({ onBack, mentor: mentorProp, bookingType: typeProp }: BookingReviewPageProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const locationState = (location.state as { mentor?: Mentor; bookingType?: string } | null);
  const mentor: Mentor = mentorProp ?? locationState?.mentor ?? defaultMentor;
  const bookingType: BookingType = typeProp ?? (locationState?.bookingType as BookingType) ?? "session";

  const isInline = !!onBack;
  const isChatUnlock = bookingType === "chat-unlock";
  const isFreeSession = !isChatUnlock && mentor.discountedPrice === "Free";
  const isPaidSession = !isChatUnlock && !isFreeSession;

  const discountedAmt = typeof mentor.discountedPrice === "number" ? mentor.discountedPrice : 0;
  // For paid sessions: total = card price (platform fee already included inside)
  const mentorFee = isChatUnlock ? 79 : isFreeSession ? 0 : discountedAmt - 20;
  const platformFee = (isChatUnlock || isPaidSession) ? 20 : 0;
  const total = isChatUnlock ? 99 : isFreeSession ? 0 : discountedAmt;

  const sectionTitle = isChatUnlock ? "Why do you want to chat?" : "What is the call about?";
  const sectionSubtitle = isChatUnlock ? "(Helps the mentor respond)" : "(Helps your mentor prepare)";
  const ctaLabel = isChatUnlock
    ? "Unlock Chat for ₹99"
    : isFreeSession
    ? "Confirm Booking"
    : `Pay ₹${total} & Confirm`;

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/mentors");
    }
  };

  const [callAbout, setCallAbout] = useState("");
  const [showConfirmed, setShowConfirmed] = useState(false);
  const MAX_CHARS = 500;

  const handleConfirm = () => {
    if (isInline) {
      setShowConfirmed(true);
    } else {
      navigate("/mentors/booking-confirmed", { state: { mentor, bookingType } });
    }
  };

  if (showConfirmed && isInline) {
    return <BookingConfirmedPage onDone={onBack} bookingType={bookingType} mentor={mentor} />;
  }

  return (
    <AppLayout
      hideNav
      header={<PageHeader title="Review the Booking" onBack={handleBack} shadow />}
    >
        {/* Scrollable content */}
        <div className="pb-[140px]">
          <div className="px-4">
            {/* Mentor session header */}
            <div className="flex gap-[12px] items-center pt-[16px] pb-[8px]">
              <div className="relative rounded-full shrink-0 size-[48px] overflow-hidden">
                <img
                  alt={mentor.name}
                  className="absolute inset-0 size-full object-cover"
                  src={mentor.avatar}
                />
              </div>
              <div className="flex flex-col gap-[2px] flex-1 min-w-px">
                <p className="type-h4 text-[#2d2040] overflow-hidden text-ellipsis whitespace-nowrap">
                  {mentor.name}
                </p>
                <p className="type-body-2 text-[#6b5f7a] overflow-hidden text-ellipsis whitespace-nowrap">
                  {mentor.title} @{mentor.company}
                </p>
              </div>
            </div>

            {/* Session details row — hidden for chat-unlock */}
            {!isChatUnlock && (
              <div className="flex items-center pb-[12px]">
                <div className="flex gap-[4px] items-center shrink-0">
                  <VideoCamera size={24} color="#6B5F7A" />
                  <span className="type-body-2 text-[#6b5f7a]">
                    60 min
                  </span>
                </div>
                <div className="flex items-center flex-1 min-w-px ml-[12px]">
                  <div className="flex gap-[4px] items-center min-w-px flex-1">
                    <CalendarDots size={24} color="#6B5F7A" />
                    <p className="type-h5 text-[#433059] whitespace-nowrap">
                      Sat · 30 July, 6:00–7:00 PM
                    </p>
                  </div>
                  <button className="flex items-center justify-center pl-[16px] py-[8px] rounded-[4px] shrink-0">
                    <span className="type-btn-sm text-[#7d3aea]">
                      Edit
                    </span>
                  </button>
                </div>
              </div>
            )}

            <div className="h-px bg-[#e2d9ef] mb-[20px]" />

            {/* What is the call / chat about? */}
            <div className="flex flex-col gap-[16px] py-[20px]">
              <div className="flex gap-[2px] items-center flex-wrap">
                <span className="type-h3 text-[#433059]">
                  {sectionTitle}
                </span>
                <span className="type-caption text-[#433059]">
                  {sectionSubtitle}
                </span>
              </div>
              <div className="relative bg-white rounded-[8px] h-[140px]">
                <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] inset-0 pointer-events-none rounded-[8px]" />
                <textarea
                  value={callAbout}
                  onChange={(e) => {
                    if (e.target.value.length <= MAX_CHARS) setCallAbout(e.target.value);
                  }}
                  placeholder={
                    isChatUnlock
                      ? "Share what you'd like to discuss, ask, or get help with."
                      : "Portfolio feedback, career guidance, interview prep, design direction, or anything you'd like support with."
                  }
                  className="absolute inset-0 w-full h-full resize-none bg-transparent p-[12px] pb-[28px] font-['Manrope',sans-serif] font-normal text-[#1a1128] text-[14px] leading-[21px] placeholder-[#9d90ad] outline-none rounded-[8px]"
                />
                <span className="absolute bottom-[12px] right-[12px] font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[12px] leading-[18px] tracking-[0.24px] pointer-events-none">
                  {callAbout.length}/{MAX_CHARS}
                </span>
              </div>
            </div>

            {/* Booking summary */}
            <div className="flex flex-col gap-[12px] py-[20px]">
              <div className="relative rounded-[8px] w-full">
                <div className="flex flex-col overflow-clip rounded-[8px]">
                  {/* Header */}
                  <div className="bg-[#f7f4fa] relative px-[16px] py-[12px]">
                    <div aria-hidden className="absolute border-b border-[rgba(157,148,170,0.4)] inset-0 pointer-events-none" />
                    <span className="type-body-2 text-[#433059]">
                      Booking summary
                    </span>
                  </div>
                  {/* Line item 1 */}
                  <div className="bg-white relative px-[16px] py-[12px] flex gap-[12px] items-center">
                    <div aria-hidden className="absolute border-b border-[rgba(157,148,170,0.4)] inset-0 pointer-events-none" />
                    <span className="type-body-2 text-[#2d2040] flex-1">
                      {isChatUnlock ? "Chat unlock" : "1:1 Mentorship"}
                    </span>
                    <span className="type-body-2 text-[#2d2040] text-right shrink-0">
                      {isFreeSession ? "Free" : `₹${mentorFee}`}
                    </span>
                  </div>
                  {/* Platform fee — hidden for free session */}
                  {!isFreeSession && (
                    <div className="bg-white relative px-[16px] py-[12px] flex gap-[12px] items-center">
                      <div aria-hidden className="absolute border-b border-[rgba(157,148,170,0.4)] inset-0 pointer-events-none" />
                      <div className="flex flex-1 gap-[8px] items-center min-w-px">
                        <span className="type-body-2 text-[#2d2040]">
                          Platform Fee
                        </span>
                        <Question size={16} color="#6B5F7A" />
                      </div>
                      <span className="type-body-2 text-[#2d2040] text-right shrink-0">
                        ₹{platformFee}
                      </span>
                    </div>
                  )}
                  {/* Total */}
                  <div className="bg-[#f7f4fa] px-[16px] py-[12px] flex gap-[12px] items-center">
                    <span className="type-h4 text-[#1a1128] flex-1">
                      Total
                    </span>
                    <span className="type-h4 text-[#1a1128] text-right shrink-0">
                      {isFreeSession ? "Free" : `₹${total}${isPaidSession ? "/hr" : ""}`}
                    </span>
                  </div>
                </div>
                <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
              </div>

              {/* Cancellation note — only for sessions */}
              {!isChatUnlock && (
                <p className="type-caption text-[#433059] text-center w-full">
                  Cancel free up to 24 hours before your session.
                </p>
              )}
            </div>

            {/* Secure payment banner */}
            <div className="bg-white relative rounded-[8px] mb-[20px]">
              <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex items-center justify-between px-[12px] py-[16px] gap-[8px]">
                <div className="flex gap-[4px] items-center">
                  <ShieldCheck size={16} color="#6B5F7A" weight="fill" />
                  <span className="type-caption text-[#6b5f7a]">
                    Secure &amp; encrypted payment
                  </span>
                </div>
                <button>
                  <span className="type-btn-sm text-[#6b5f7a]">
                    Terms &amp; Conditions
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky CTA footer */}
        <div className="fixed bottom-0 left-0 right-0 z-30 drop-shadow-[0px_1px_2px_rgba(200,192,212,0.6)]">
          <div className="max-w-[430px] mx-auto bg-white">
            <div className="px-[16px] pt-[12px] pb-[24px]">
              <button
                onClick={handleConfirm}
                className="w-full min-h-[48px] max-h-[48px] rounded-[8px] flex items-center justify-center gap-[8px]"
                style={{ background: "linear-gradient(to right, #7d3aea, #5e28b5)" }}
              >
                <span className="type-btn-lg text-white">
                  {ctaLabel}
                </span>
                {!isFreeSession && (
                  <div className="max-h-[24px] max-w-[24px] min-h-[24px] min-w-[24px] overflow-clip relative shrink-0">
                    <div className="absolute inset-[18.75%_12.5%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0006 15.0008">
                        <path d={svgPaths.p269480} fill="white" />
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
    </AppLayout>
  );
}
