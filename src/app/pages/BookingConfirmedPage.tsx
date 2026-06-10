import { useNavigate, useLocation } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { X, VideoCamera, CalendarDots } from "@phosphor-icons/react";
import type { Mentor } from "../components/MentorCard";
import imgGif from "@/imports/MentorsBookingConfirmed/f542fa271d38a41401e77674d52427657cdceb02.png";
import imgMentorAvatarFallback from "@/imports/MentorsBookingConfirmed/8a0297188511b9e7d739e0bdb0fad1599992ea67.png";

type BookingType = "session" | "chat-unlock";

interface BookingConfirmedPageProps {
  onDone?: () => void;
  bookingType?: BookingType;
  mentor?: Mentor;
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

export function BookingConfirmedPage({ onDone, bookingType: typeProp, mentor: mentorProp }: BookingConfirmedPageProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const locationState = (location.state as { mentor?: Mentor; bookingType?: string } | null);
  const mentor: Mentor = mentorProp ?? locationState?.mentor ?? defaultMentor;
  const bookingType: BookingType = typeProp ?? (locationState?.bookingType as BookingType) ?? "session";

  const isChatUnlock = bookingType === "chat-unlock";
  const isFreeSession = !isChatUnlock && mentor.discountedPrice === "Free";

  const handleDone = () => {
    navigate("/home/feed", {
      state: {
        sessionBooked: !isChatUnlock,
        mentorName: mentor.name,
        mentorAvatar: mentor.avatar,
      },
    });
  };

  const title = isChatUnlock ? "Chat Request Sent" : "Booking Request Sent";
  const subtitle = isChatUnlock
    ? `${mentor.name} usually accepts and replies within 24 hours.`
    : "You'll be notified once the mentor confirms your session.";
  const refundNote = isFreeSession
    ? null
    : isChatUnlock
    ? "If the mentor declines your chat request, your payment will be refunded within 3–5 business days."
    : "If the request is declined, your payment will be refunded within 3–5 business days.";

  return (
    <AppLayout
      hideNav
      header={
        <div className="bg-[#fffeff] flex items-center px-[16px] py-[12px]">
          <button
            onClick={handleDone}
            className="p-[8px] -ml-[8px] flex items-center justify-center"
          >
            <X size={24} color="#1A1128" />
          </button>
        </div>
      }
    >
        {/* Scrollable content */}
        <div className="pb-[160px]">
          <div className="flex flex-col items-center px-[16px]">
            {/* GIF illustration */}
            <div className="relative shrink-0 size-[64px] mt-[8px] mb-[36px]">
              <img alt="Confirmed" className="absolute max-w-none object-cover size-full" src={imgGif} />
            </div>

            {/* Confirmation message */}
            <div className="flex flex-col gap-[8px] items-center text-center w-full mb-[32px]">
              <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[24px] leading-[31px] w-full text-center">
                {title}
              </p>
              <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px] w-full text-center">
                {subtitle}
              </p>
            </div>

            {/* Booking summary card */}
            <div className="flex flex-col gap-[20px] w-full">
              <div className="bg-white relative rounded-[4px] w-full">
                <div aria-hidden className="absolute border border-[rgba(157,148,170,0.4)] inset-0 pointer-events-none rounded-[4px]" />
                <div className="flex flex-col gap-[16px] px-[16px] py-[20px]">
                  {/* Mentor info row */}
                  <div className="flex gap-[12px] items-start w-full">
                    <div className="relative rounded-[200px] shrink-0 size-[42px] overflow-hidden">
                      <img
                        alt={mentor.name}
                        className="absolute inset-0 size-full object-cover"
                        src={mentor.avatar}
                      />
                    </div>
                    <div className="flex flex-col gap-[4px] flex-1 min-w-px">
                      <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[16px] leading-[25px] tracking-[0.16px] overflow-hidden text-ellipsis whitespace-nowrap">
                        {mentor.name}
                      </p>
                      <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[14px] leading-[21px] tracking-[0.14px] overflow-hidden text-ellipsis whitespace-nowrap">
                        {mentor.title} @{mentor.company}
                      </p>
                      {/* Duration — only for session bookings */}
                      {!isChatUnlock && (
                        <div className="flex gap-[12px] items-center mt-[4px]">
                          <VideoCamera size={20} color="#6B5F7A" />
                          <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                            60mins
                          </span>
                        </div>
                      )}
                      <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                        {isChatUnlock
                          ? "Usually replies within 24 hours"
                          : "Usually confirms within 24 hours"}
                      </p>
                    </div>
                  </div>

                  {/* Session date card — only for session bookings */}
                  {!isChatUnlock && (
                    <div className="bg-[#f7f4fa] rounded-[4px] w-full">
                      <div className="flex gap-[12px] items-center justify-center px-[12px] py-[8px]">
                        <CalendarDots size={16} color="#1A1128" />
                        <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[14px] leading-[21px] tracking-[0.14px] whitespace-nowrap text-center">
                          Sat · 30 July, 6:00–7:00 PM
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Refund / note */}
              {refundNote && (
                <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px] text-center w-full">
                  {refundNote}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Sticky footer */}
        <div className="fixed bottom-0 left-0 right-0 z-30 drop-shadow-[0px_-1px_2.5px_rgba(200,192,212,0.6)]">
          <div className="max-w-[430px] mx-auto bg-white">
            <div className="px-[16px] pt-[12px] pb-[24px] flex gap-[16px]">
              {/* Share booking button — only for session */}
              {!isChatUnlock && (
                <button
                  onClick={() => navigate("/home/feed")}
                  className="relative flex items-center justify-center gap-[8px] min-h-[48px] max-h-[48px] px-[16px] py-[12px] rounded-[8px] shrink-0"
                >
                  <div aria-hidden className="absolute border border-[#7d3aea] inset-0 pointer-events-none rounded-[8px]" />
                  <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[16px] leading-[20px] tracking-[0.48px] whitespace-nowrap">
                    Share booking
                  </span>
                </button>
              )}
              {/* Done button */}
              <button
                onClick={handleDone}
                className="flex-1 min-h-[48px] max-h-[48px] rounded-[8px] flex items-center justify-center gap-[8px]"
                style={{ background: "linear-gradient(to right, #7d3aea, #5e28b5)" }}
              >
                <span className="font-['Manrope',sans-serif] font-semibold text-white text-[16px] leading-[20px] tracking-[0.48px]">
                  Done
                </span>
              </button>
            </div>
          </div>
        </div>
    </AppLayout>
  );
}
