import { useState } from "react";
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
    <div className="min-h-screen bg-[#fffeff] flex items-start justify-center">
      <div className="w-full max-w-[800px] min-w-[360px] bg-[#fffeff] flex flex-col min-h-screen">
        {/* Status Bar */}
        <div className="w-full bg-[#fffeff] flex h-[44px] items-center justify-between px-4 py-2 shrink-0">
          <p className="font-['Roboto',sans-serif] font-normal text-[14.423px] leading-[20.192px] text-[#FFFEFF] tracking-[-0.3077px]">
            9:41
          </p>
          <div className="flex gap-[2px] items-center shrink-0">
            <div className="h-[15.385px] relative w-[19.231px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2308 15.3846">
                <path d="M3.26916 9.60239C3.8002 9.60239 4.23107 10.0333 4.23107 10.5643V12.4872C4.23107 13.0182 3.8002 13.4491 3.26916 13.4491H2.30724C1.77641 13.4488 1.3463 13.018 1.3463 12.4872V10.5643C1.3463 10.0334 1.77641 9.60263 2.30724 9.60239H3.26916ZM7.75646 7.67954C8.28748 7.67956 8.71837 8.11043 8.71837 8.64145V12.4872C8.71837 13.0182 8.28748 13.449 7.75646 13.4491H6.79455C6.26365 13.4489 5.83361 13.0181 5.83361 12.4872V8.64145C5.83361 8.11052 6.26365 7.67971 6.79455 7.67954H7.75646ZM12.2438 5.43637C12.7747 5.43647 13.2046 5.86638 13.2047 6.39731V12.4872C13.2047 13.0181 12.7747 13.449 12.2438 13.4491H11.2819C10.7509 13.449 10.3209 13.0181 10.3209 12.4872V6.39731C10.321 5.86639 10.7509 5.43648 11.2819 5.43637H12.2438ZM16.7311 3.19223C17.262 3.1924 17.692 3.6232 17.692 4.15415V12.4872C17.692 13.0181 17.262 13.4489 16.7311 13.4491H15.7692C15.2381 13.449 14.8072 13.0182 14.8072 12.4872V4.15415C14.8072 3.62313 15.2381 3.19227 15.7692 3.19223H16.7311Z" fill="#FFFEFF" />
              </svg>
            </div>
            <div className="relative size-[15.385px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3846 15.3846">
                <path d="M5.86291 11.2694C7.08941 10.2323 8.88553 10.2321 10.1119 11.2694C10.1736 11.3252 10.2098 11.404 10.2115 11.4872C10.2132 11.5703 10.1801 11.6506 10.1207 11.7088L8.19982 13.6473C8.14355 13.7041 8.06686 13.7362 7.98693 13.7362C7.90698 13.7361 7.83028 13.7041 7.77404 13.6473L5.85314 11.7088C5.79385 11.6505 5.76154 11.5703 5.7633 11.4872C5.76508 11.404 5.80118 11.3251 5.86291 11.2694ZM3.29943 8.68442C5.94193 6.22636 10.0349 6.22636 12.6774 8.68442C12.7367 8.74203 12.7703 8.82142 12.7711 8.90415C12.7718 8.98686 12.7395 9.06614 12.6813 9.12485L11.5709 10.2469C11.4566 10.3613 11.2723 10.364 11.1549 10.2528C10.2871 9.46701 9.15759 9.03201 7.98693 9.03208C6.81713 9.03263 5.68901 9.46758 4.82189 10.2528C4.70455 10.364 4.52022 10.3613 4.40587 10.2469L3.29552 9.12485C3.23716 9.06621 3.20403 8.98688 3.2047 8.90415C3.20548 8.82134 3.23996 8.74203 3.29943 8.68442ZM0.736929 6.10532C4.78991 2.22126 11.184 2.22118 15.2369 6.10532C15.2956 6.16301 15.3282 6.24181 15.3287 6.32407C15.3292 6.40622 15.2977 6.48544 15.2399 6.5438L14.1276 7.66587C14.0131 7.78071 13.8278 7.78193 13.7115 7.6688C12.1674 6.20072 10.1176 5.38178 7.98693 5.38169C5.85613 5.38174 3.80665 6.20067 2.26232 7.6688C2.14611 7.7823 1.95977 7.78115 1.84533 7.66587L0.733999 6.5438C0.676061 6.48537 0.643616 6.40635 0.644156 6.32407C0.644697 6.24178 0.678219 6.16298 0.736929 6.10532Z" fill="#FFFEFF" />
              </svg>
            </div>
            <div className="h-[15.385px] relative w-[24.038px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0385 15.3846">
                <path d="M3.02599 2.71124H19.0514C20.2019 2.71129 21.1344 3.64466 21.1344 4.79522V10.5638C21.1344 11.7143 20.2019 12.6477 19.0514 12.6478H3.02599C1.8754 12.6478 0.942008 11.7144 0.942008 10.5638V4.79522C0.942008 3.64463 1.8754 2.71124 3.02599 2.71124Z" opacity="0.35" stroke="#FFFEFF" strokeOpacity="0.4" strokeWidth="0.961538" fill="none" />
                <path d="M22.5769 5.75643V9.60258C23.3507 9.27684 23.8539 8.51906 23.8539 7.67951C23.8539 6.83996 23.3507 6.08218 22.5769 5.75643" fill="#FFFEFF" opacity="0.4" />
                <path d="M2.38462 5.4359C2.38462 4.72784 2.95861 4.15385 3.66667 4.15385H18.4103C19.1183 4.15385 19.6923 4.72784 19.6923 5.4359V9.92308C19.6923 10.6311 19.1183 11.2051 18.4103 11.2051H3.66667C2.95861 11.2051 2.38462 10.6311 2.38462 9.92308V5.4359Z" fill="#FFFEFF" />
              </svg>
            </div>
          </div>
        </div>

        <PageHeader title="Review the Booking" onBack={handleBack} sticky shadow />

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto pb-[140px]">
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
                <p className="font-['Manrope',sans-serif] font-medium text-[#2d2040] text-[16px] leading-[25px] tracking-[0.16px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {mentor.name}
                </p>
                <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px] tracking-[0.14px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {mentor.title} @{mentor.company}
                </p>
              </div>
            </div>

            {/* Session details row — hidden for chat-unlock */}
            {!isChatUnlock && (
              <div className="flex items-center pb-[12px]">
                <div className="flex gap-[4px] items-center shrink-0">
                  <VideoCamera size={24} color="#6B5F7A" />
                  <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                    60mins
                  </span>
                </div>
                <div className="flex items-center flex-1 min-w-px ml-[12px]">
                  <div className="flex gap-[4px] items-center min-w-px flex-1">
                    <CalendarDots size={24} color="#6B5F7A" />
                    <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[14px] leading-[21px] tracking-[0.14px] whitespace-nowrap">
                      Sat · 30 July, 6:00–7:00 PM
                    </p>
                  </div>
                  <button className="flex items-center justify-center pl-[16px] py-[8px] rounded-[4px] shrink-0">
                    <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[14px] leading-[20px] tracking-[0.14px]">
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
                <span className="font-['Manrope',sans-serif] font-semibold text-[#433059] text-[18px] leading-[28px]">
                  {sectionTitle}
                </span>
                <span className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[12px] leading-[18px] tracking-[0.24px]">
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
                    <span className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[14px] leading-[21px]">
                      Booking summary
                    </span>
                  </div>
                  {/* Line item 1 */}
                  <div className="bg-white relative px-[16px] py-[12px] flex gap-[12px] items-center">
                    <div aria-hidden className="absolute border-b border-[rgba(157,148,170,0.4)] inset-0 pointer-events-none" />
                    <span className="font-['Manrope',sans-serif] font-normal text-[#2d2040] text-[14px] leading-[21px] flex-1">
                      {isChatUnlock ? "Chat unlock" : "1:1 Mentorship"}
                    </span>
                    <span className="font-['Manrope',sans-serif] font-normal text-[#2d2040] text-[14px] leading-[21px] text-right shrink-0">
                      {isFreeSession ? "Free" : `₹${mentorFee}`}
                    </span>
                  </div>
                  {/* Platform fee — hidden for free session */}
                  {!isFreeSession && (
                    <div className="bg-white relative px-[16px] py-[12px] flex gap-[12px] items-center">
                      <div aria-hidden className="absolute border-b border-[rgba(157,148,170,0.4)] inset-0 pointer-events-none" />
                      <div className="flex flex-1 gap-[8px] items-center min-w-px">
                        <span className="font-['Manrope',sans-serif] font-normal text-[#2d2040] text-[14px] leading-[21px]">
                          Platform Fee
                        </span>
                        <Question size={16} color="#6B5F7A" />
                      </div>
                      <span className="font-['Manrope',sans-serif] font-normal text-[#2d2040] text-[14px] leading-[21px] text-right shrink-0">
                        ₹{platformFee}
                      </span>
                    </div>
                  )}
                  {/* Total */}
                  <div className="bg-[#f7f4fa] px-[16px] py-[12px] flex gap-[12px] items-center">
                    <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tracking-[0.16px] flex-1">
                      Total
                    </span>
                    <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tracking-[0.16px] text-right shrink-0">
                      {isFreeSession ? "Free" : `₹${total}${isPaidSession ? "/hr" : ""}`}
                    </span>
                  </div>
                </div>
                <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
              </div>

              {/* Cancellation note — only for sessions */}
              {!isChatUnlock && (
                <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[12px] leading-[18px] tracking-[0.24px] text-center w-full">
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
                  <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">
                    Secure &amp; encrypted payment
                  </span>
                </div>
                <button>
                  <span className="font-['Manrope',sans-serif] font-semibold text-[#6b5f7a] text-[14px] leading-[20px] tracking-[0.14px]">
                    Terms &amp; Conditions
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky CTA footer */}
        <div className="fixed bottom-0 left-0 right-0 z-30 drop-shadow-[0px_1px_2px_rgba(200,192,212,0.6)]">
          <div className="max-w-[800px] mx-auto bg-white">
            <div className="px-[16px] pt-[12px] pb-[24px]">
              <button
                onClick={handleConfirm}
                className="w-full min-h-[48px] max-h-[48px] rounded-[8px] flex items-center justify-center gap-[8px]"
                style={{ background: "linear-gradient(to right, #7d3aea, #5e28b5)" }}
              >
                <span className="font-['Manrope',sans-serif] font-semibold text-white text-[16px] leading-[20px] tracking-[0.48px]">
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
      </div>
    </div>
  );
}
