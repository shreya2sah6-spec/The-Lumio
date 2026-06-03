import { X, ShareFat, VideoCamera, CalendarDots } from "@phosphor-icons/react";
import { useNavigate } from "react-router";
import svgPaths from "@/imports/MentorsBookingConfirmed/svg-tdicuf9fd4";
import imgGif from "@/imports/MentorsBookingConfirmed/f542fa271d38a41401e77674d52427657cdceb02.png";
import imgMentorAvatar from "@/imports/MentorsBookingConfirmed/8a0297188511b9e7d739e0bdb0fad1599992ea67.png";

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

export function BookingConfirmedPage({ onDone }: { onDone: () => void }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#fffeff] flex items-start justify-center">
      <div className="w-full max-w-[800px] min-w-[360px] bg-[#fffeff] flex flex-col min-h-screen">
        {/* Status Bar */}
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
                <path
                  d={statusBarPaths.batteryTip}
                  fill="#1A1128"
                  opacity="0.4"
                />
                <path d={statusBarPaths.batteryFill} fill="#1A1128" />
              </svg>
            </div>
          </div>
        </div>

        {/* Header with close button */}
        <div className="bg-[#fffeff] flex items-center px-[16px] py-[12px] shrink-0">
          <button
            onClick={() => navigate("/home/feed")}
            className="p-[8px] -ml-[8px] flex items-center justify-center"
          >
            <X size={24} color="#1A1128" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto pb-[160px]">
          <div className="flex flex-col items-center px-[16px]">
            {/* GIF illustration */}
            <div className="relative shrink-0 size-[64px] mt-[8px] mb-[36px]">
              <img
                alt="Booking confirmed"
                className="absolute max-w-none object-cover size-full"
                src={imgGif}
              />
            </div>

            {/* Confirmation message */}
            <div className="flex flex-col gap-[8px] items-center text-center w-full mb-[32px]">
              <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[24px] leading-[31px] w-full text-center">
                Booking Request Sent
              </p>
              <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px] w-full text-center">
                You'll be notified once the mentor confirms your session.
              </p>
            </div>

            {/* Booking summary card */}
            <div className="flex flex-col gap-[20px] w-full">
              {/* Session details card */}
              <div className="bg-white relative rounded-[4px] w-full">
                <div
                  aria-hidden
                  className="absolute border border-[rgba(157,148,170,0.4)] inset-0 pointer-events-none rounded-[4px]"
                />
                <div className="flex flex-col gap-[16px] px-[16px] py-[20px]">
                  {/* Mentor info row */}
                  <div className="flex gap-[12px] items-start w-full">
                    <div className="relative rounded-[200px] shrink-0 size-[42px] overflow-hidden">
                      <img
                        alt="Shruti Jain"
                        className="absolute h-[311.69%] left-[-48.84%] max-w-none top-[-48.31%] w-[207.79%]"
                        src={imgMentorAvatar}
                      />
                    </div>
                    <div className="flex flex-col gap-[4px] flex-1 min-w-px">
                      <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[16px] leading-[25px] tracking-[0.16px] overflow-hidden text-ellipsis whitespace-nowrap">
                        Shruti Jain
                      </p>
                      <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[14px] leading-[21px] tracking-[0.14px] overflow-hidden text-ellipsis whitespace-nowrap">
                        Sr. Fashion Designer @MAX Fashion
                      </p>
                      {/* Duration */}
                      <div className="flex gap-[12px] items-center mt-[4px]">
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <div className="-translate-y-1/2 absolute aspect-[22.5/13.5] left-[8.33%] right-[8.33%] top-1/2">
                            <svg
                              className="absolute block inset-0 size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 20 12"
                            >
                              <path d={svgPaths.p2d857100} fill="#6B5F7A" />
                            </svg>
                          </div>
                        </div>
                        <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                          60mins
                        </span>
                      </div>
                      <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                        Usually confirms within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Session date card */}
                  <div className="bg-[#f7f4fa] rounded-[4px] w-full">
                    <div className="flex gap-[12px] items-center justify-center px-[12px] py-[8px]">
                      <div className="relative shrink-0 size-[16px]">
                        <svg
                          className="absolute block inset-0 size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 16 16"
                        >
                          <path d={svgPaths.p255daf00} fill="#1A1128" />
                        </svg>
                      </div>
                      <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[14px] leading-[21px] tracking-[0.14px] whitespace-nowrap text-center">
                        Sat · 30 July, 6:00–7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refund note */}
              <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px] text-center w-full">
                If the request is declined, your payment will be refunded within
                3–5 business days.
              </p>
            </div>
          </div>
        </div>

        {/* Sticky footer */}
        <div className="fixed bottom-0 left-0 right-0 z-30 drop-shadow-[0px_-1px_2.5px_rgba(200,192,212,0.6)]">
          <div className="max-w-[800px] mx-auto bg-white">
            <div className="px-[16px] pt-[12px] pb-[24px] flex gap-[16px]">
              {/* Share booking button */}
              <button className="relative flex items-center justify-center gap-[8px] min-h-[48px] max-h-[48px] px-[16px] py-[12px] rounded-[8px] shrink-0">
                <div
                  aria-hidden
                  className="absolute border border-[#7d3aea] inset-0 pointer-events-none rounded-[8px]"
                />
                <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[16px] leading-[20px] tracking-[0.48px] whitespace-nowrap">
                  Share booking
                </span>
                <div className="overflow-clip relative shrink-0 size-[24px]">
                  <div className="absolute inset-[9.38%_6.25%_18.75%_6.25%]">
                    <svg
                      className="absolute block inset-0 size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 20.9996 17.2504"
                    >
                      <path d={svgPaths.p1adc0700} fill="#7D3AEA" />
                    </svg>
                  </div>
                </div>
              </button>
              {/* Done button */}
              <button
                onClick={() => navigate("/home/feed")}
                className="flex-1 min-h-[48px] max-h-[48px] rounded-[8px] flex items-center justify-center gap-[8px]"
                style={{
                  background: "linear-gradient(to right, #7d3aea, #5e28b5)",
                }}
              >
                <span className="font-['Manrope',sans-serif] font-semibold text-white text-[16px] leading-[20px] tracking-[0.48px]">
                  Done
                </span>
              </button>
            </div>
            {/* Safe area */}
            <div className="bg-white h-[46px] flex items-end justify-center pb-[8px]">
              <div className="bg-[#1a1128] h-[4px] rounded-[200px] w-[130px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
