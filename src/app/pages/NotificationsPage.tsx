import { useNavigate } from "react-router";
import { ArrowLeft } from "@phosphor-icons/react";
import imgAvatar1 from "@/imports/HomeNotifications-1/8a0297188511b9e7d739e0bdb0fad1599992ea67.png";
import imgAvatar2 from "@/imports/HomeNotifications-1/5d686febbf6bd99db27d32ec61024adf89b31b4f.png";

// Status bar SVG paths — kept inline so Figma sync cannot delete them
const SIGNAL_BARS =
  "M3.26916 9.60239C3.8002 9.60239 4.23107 10.0333 4.23107 10.5643V12.4872C4.23107 13.0182 3.8002 13.4491 3.26916 13.4491H2.30724C1.77641 13.4488 1.3463 13.018 1.3463 12.4872V10.5643C1.3463 10.0334 1.77641 9.60263 2.30724 9.60239H3.26916ZM7.75646 7.67954C8.28748 7.67956 8.71837 8.11043 8.71837 8.64145V12.4872C8.71837 13.0182 8.28748 13.449 7.75646 13.4491H6.79455C6.26365 13.4489 5.83361 13.0181 5.83361 12.4872V8.64145C5.83361 8.11052 6.26365 7.67971 6.79455 7.67954H7.75646ZM12.2438 5.43637C12.7747 5.43647 13.2046 5.86638 13.2047 6.39731V12.4872C13.2047 13.0181 12.7747 13.449 12.2438 13.4491H11.2819C10.7509 13.449 10.3209 13.0181 10.3209 12.4872V6.39731C10.321 5.86639 10.7509 5.43648 11.2819 5.43637H12.2438ZM16.7311 3.19223C17.262 3.1924 17.692 3.6232 17.692 4.15415V12.4872C17.692 13.0181 17.262 13.4489 16.7311 13.4491H15.7692C15.2381 13.449 14.8072 13.0182 14.8072 12.4872V4.15415C14.8072 3.62313 15.2381 3.19227 15.7692 3.19223H16.7311Z";
const SIGNAL_WIFI =
  "M5.86291 11.2694C7.08941 10.2323 8.88553 10.2321 10.1119 11.2694C10.1736 11.3252 10.2098 11.404 10.2115 11.4872C10.2132 11.5703 10.1801 11.6506 10.1207 11.7088L8.19982 13.6473C8.14355 13.7041 8.06686 13.7362 7.98693 13.7362C7.90698 13.7361 7.83028 13.7041 7.77404 13.6473L5.85314 11.7088C5.79385 11.6505 5.76154 11.5703 5.7633 11.4872C5.76508 11.404 5.80118 11.3251 5.86291 11.2694ZM3.29943 8.68442C5.94193 6.22636 10.0349 6.22636 12.6774 8.68442C12.7367 8.74203 12.7703 8.82142 12.7711 8.90415C12.7718 8.98686 12.7395 9.06614 12.6813 9.12485L11.5709 10.2469C11.4566 10.3613 11.2723 10.364 11.1549 10.2528C10.2871 9.46701 9.15759 9.03201 7.98693 9.03208C6.81713 9.03263 5.68901 9.46758 4.82189 10.2528C4.70455 10.364 4.52022 10.3613 4.40587 10.2469L3.29552 9.12485C3.23716 9.06621 3.20403 8.98688 3.2047 8.90415C3.20548 8.82134 3.23996 8.74203 3.29943 8.68442ZM0.736929 6.10532C4.78991 2.22126 11.184 2.22118 15.2369 6.10532C15.2956 6.16301 15.3282 6.24181 15.3287 6.32407C15.3292 6.40622 15.2977 6.48544 15.2399 6.5438L14.1276 7.66587C14.0131 7.78071 13.8278 7.78193 13.7115 7.6688C12.1674 6.20072 10.1176 5.38178 7.98693 5.38169C5.85613 5.38174 3.80665 6.20067 2.26232 7.6688C2.14611 7.7823 1.95977 7.78115 1.84533 7.66587L0.733999 6.5438C0.676061 6.48537 0.643616 6.40635 0.644156 6.32407C0.644697 6.24178 0.678219 6.16298 0.736929 6.10532Z";
const BATTERY_OUTLINE =
  "M3.02599 2.71124H19.0514C20.2019 2.71129 21.1344 3.64466 21.1344 4.79522V10.5638C21.1344 11.7143 20.2019 12.6477 19.0514 12.6478H3.02599C1.8754 12.6478 0.942008 11.7144 0.942008 10.5638V4.79522C0.942008 3.64463 1.8754 2.71124 3.02599 2.71124Z";
const BATTERY_TIP =
  "M22.5769 5.75643V9.60258C23.3507 9.27684 23.8539 8.51906 23.8539 7.67951C23.8539 6.83996 23.3507 6.08218 22.5769 5.75643";
const BATTERY_FILL =
  "M2.38462 5.4359C2.38462 4.72784 2.95861 4.15385 3.66667 4.15385H18.4103C19.1183 4.15385 19.6923 4.72784 19.6923 5.4359V9.92308C19.6923 10.6311 19.1183 11.2051 18.4103 11.2051H3.66667C2.95861 11.2051 2.38462 10.6311 2.38462 9.92308V5.4359Z";

function StatusBar() {
  return (
    <div className="bg-[#fffeff] flex h-[44px] items-center justify-between overflow-clip px-[16px] py-[8px] relative shrink-0 w-full">
      <p className="font-['Roboto',sans-serif] font-normal leading-[20.192px] text-[#1a1128] text-[14.423px] tracking-[-0.3077px]">
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
            <path d={SIGNAL_BARS} fill="#1A1128" />
          </svg>
        </div>
        <div className="relative size-[15.385px]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15.3846 15.3846"
          >
            <path d={SIGNAL_WIFI} fill="#1A1128" />
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
              d={BATTERY_OUTLINE}
              opacity="0.35"
              stroke="#9D94AA"
              strokeOpacity="0.4"
              strokeWidth="0.961538"
              fill="none"
            />
            <path d={BATTERY_TIP} fill="#1A1128" opacity="0.4" />
            <path d={BATTERY_FILL} fill="#1A1128" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function NotificationsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fffeff] flex items-start justify-center">
      <div className="w-full max-w-[800px] min-w-0 bg-[#fffeff] flex flex-col min-h-screen">
        {/* Top bar */}
        <div className="absolute bg-[#fffeff] flex flex-col items-start left-0 right-0 top-0 z-10">
          <StatusBar />
          <div className="bg-[#fffeff] relative shrink-0 w-full">
            <div className="flex items-center justify-between px-[16px] py-[12px] max-w-[800px] mx-auto w-full">
              <div className="flex gap-[12px] items-center">
                <button
                  onClick={() => navigate("/home/feed")}
                  className="flex items-center p-[8px] cursor-pointer shrink-0"
                >
                  <ArrowLeft size={18} color="#1A1128" />
                </button>
                <p className="font-['Roboto_Serif',serif] font-semibold not-italic text-[#1a1128] text-[24px] leading-[31px]">
                  Notifications
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content — offset for fixed top bar (44px status + ~55px header) */}
        <div className="flex flex-col gap-[16px] items-start pt-[120px] pb-[20px] w-full">
          {/* Section header */}
          <div className="relative shrink-0 w-full">
            <div className="flex items-center justify-center w-full">
              <div className="flex items-center px-[16px] w-full">
                <p className="font-['Roboto_Serif',serif] font-semibold not-italic text-[#2d2040] text-[20px] leading-[28px] flex-1">
                  Today
                </p>
              </div>
            </div>
          </div>

          {/* Notifications list */}
          <div className="flex flex-col gap-[4px] items-start w-full">
            {/* Notification item 1 — bg-[#f7f4fa] */}
            <div className="bg-[#f7f4fa] relative shrink-0 w-full">
              <div className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-col items-start px-[16px] py-[12px] gap-[2px]">
                <div className="flex gap-[12px] items-center w-full">
                  {/* Avatar with Figma-exact image crop: h-[514.44%] left-[-108.64%] top-[-86.62%] w-[342.96%] */}
                  <div className="pointer-events-none relative rounded-[200px] shrink-0 size-[48px]">
                    <div className="absolute inset-0 overflow-hidden rounded-[200px]">
                      <img
                        alt=""
                        className="absolute max-w-none"
                        style={{
                          height: "514.44%",
                          left: "-108.64%",
                          top: "-86.62%",
                          width: "342.96%",
                        }}
                        src={imgAvatar1}
                      />
                    </div>
                    <div className="absolute border border-[#c8bbda] border-solid inset-[-0.5px] rounded-[200.5px] pointer-events-none" />
                  </div>
                  <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px] flex-1 min-w-0">
                    Mentorship Booking confirmed by shruti jain.
                  </p>
                </div>
                <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px] w-full text-right">
                  10 min ago
                </p>
              </div>
            </div>

            {/* Notification item 2 — no bg */}
            <div className="relative shrink-0 w-full">
              <div className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
              <div className="flex flex-col items-start px-[16px] py-[12px] gap-[2px]">
                <div className="flex gap-[12px] items-center w-full">
                  {/* Avatar with Figma-exact image crop: h-full left-[-37.05%] top-[-0.14%] w-[178.57%] */}
                  <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[48px]">
                    <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                      <img
                        alt=""
                        className="absolute max-w-none"
                        style={{
                          height: "100%",
                          left: "-37.05%",
                          top: "-0.14%",
                          width: "178.57%",
                        }}
                        src={imgAvatar2}
                      />
                    </div>
                    <div className="absolute border border-[#c8bbda] border-solid inset-0 rounded-[8px] pointer-events-none" />
                  </div>
                  <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px] flex-1 min-w-0">
                    Your job application for sabyasachi got views.
                  </p>
                </div>
                <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px] w-full text-right">
                  15 min ago
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom safe area */}
        <div className="mt-auto bg-white h-[46px] flex items-end justify-center pb-[7.69px]">
          <div className="bg-[#1a1128] h-[4.808px] rounded-[200px] w-[128.846px]" />
        </div>
      </div>
    </div>
  );
}
