import { useNavigate } from "react-router";
import { ArrowLeft } from "@phosphor-icons/react";

const statusBarPaths = {
  signalBars: "M3.26916 9.60239C3.8002 9.60239 4.23107 10.0333 4.23107 10.5643V12.4872C4.23107 13.0182 3.8002 13.4491 3.26916 13.4491H2.30724C1.77641 13.4488 1.3463 13.018 1.3463 12.4872V10.5643C1.3463 10.0334 1.77641 9.60263 2.30724 9.60239H3.26916ZM7.75646 7.67954C8.28748 7.67956 8.71837 8.11043 8.71837 8.64145V12.4872C8.71837 13.0182 8.28748 13.449 7.75646 13.4491H6.79455C6.26365 13.4489 5.83361 13.0181 5.83361 12.4872V8.64145C5.83361 8.11052 6.26365 7.67971 6.79455 7.67954H7.75646ZM12.2438 5.43637C12.7747 5.43647 13.2046 5.86638 13.2047 6.39731V12.4872C13.2047 13.0181 12.7747 13.449 12.2438 13.4491H11.2819C10.7509 13.449 10.3209 13.0181 10.3209 12.4872V6.39731C10.321 5.86639 10.7509 5.43648 11.2819 5.43637H12.2438ZM16.7311 3.19223C17.262 3.1924 17.692 3.6232 17.692 4.15415V12.4872C17.692 13.0181 17.262 13.4489 16.7311 13.4491H15.7692C15.2381 13.449 14.8072 13.0182 14.8072 12.4872V4.15415C14.8072 3.62313 15.2381 3.19227 15.7692 3.19223H16.7311Z",
  wifi: "M5.86291 11.2694C7.08941 10.2323 8.88553 10.2321 10.1119 11.2694C10.1736 11.3252 10.2098 11.404 10.2115 11.4872C10.2132 11.5703 10.1801 11.6506 10.1207 11.7088L8.19982 13.6473C8.14355 13.7041 8.06686 13.7362 7.98693 13.7362C7.90698 13.7361 7.83028 13.7041 7.77404 13.6473L5.85314 11.7088C5.79385 11.6505 5.76154 11.5703 5.7633 11.4872C5.76508 11.404 5.80118 11.3251 5.86291 11.2694ZM3.29943 8.68442C5.94193 6.22636 10.0349 6.22636 12.6774 8.68442C12.7367 8.74203 12.7703 8.82142 12.7711 8.90415C12.7718 8.98686 12.7395 9.06614 12.6813 9.12485L11.5709 10.2469C11.4566 10.3613 11.2723 10.364 11.1549 10.2528C10.2871 9.46701 9.15759 9.03201 7.98693 9.03208C6.81713 9.03263 5.68901 9.46758 4.82189 10.2528C4.70455 10.364 4.52022 10.3613 4.40587 10.2469L3.29552 9.12485C3.23716 9.06621 3.20403 8.98688 3.2047 8.90415C3.20548 8.82134 3.23996 8.74203 3.29943 8.68442ZM0.736929 6.10532C4.78991 2.22126 11.184 2.22118 15.2369 6.10532C15.2956 6.16301 15.3282 6.24181 15.3287 6.32407C15.3292 6.40622 15.2977 6.48544 15.2399 6.5438L14.1276 7.66587C14.0131 7.78071 13.8278 7.78193 13.7115 7.6688C12.1674 6.20072 10.1176 5.38178 7.98693 5.38169C5.85613 5.38174 3.80665 6.20067 2.26232 7.6688C2.14611 7.7823 1.95977 7.78115 1.84533 7.66587L0.733999 6.5438C0.676061 6.48537 0.643616 6.40635 0.644156 6.32407C0.644697 6.24178 0.678219 6.16298 0.736929 6.10532Z",
  batteryOutline: "M3.02599 2.71124H19.0514C20.2019 2.71129 21.1344 3.64466 21.1344 4.79522V10.5638C21.1344 11.7143 20.2019 12.6477 19.0514 12.6478H3.02599C1.8754 12.6478 0.942008 11.7144 0.942008 10.5638V4.79522C0.942008 3.64463 1.8754 2.71124 3.02599 2.71124Z",
  batteryTip: "M22.5769 5.75643V9.60258C23.3507 9.27684 23.8539 8.51906 23.8539 7.67951C23.8539 6.83996 23.3507 6.08218 22.5769 5.75643",
  batteryFill: "M2.38462 5.4359C2.38462 4.72784 2.95861 4.15385 3.66667 4.15385H18.4103C19.1183 4.15385 19.6923 4.72784 19.6923 5.4359V9.92308C19.6923 10.6311 19.1183 11.2051 18.4103 11.2051H3.66667C2.95861 11.2051 2.38462 10.6311 2.38462 9.92308V5.4359Z",
};

function StatusBar() {
  return (
    <div className="w-full bg-[#fffeff] flex h-[44px] items-center justify-between px-4 py-2 shrink-0">
      <p className="font-['Roboto',sans-serif] font-normal text-[14.423px] leading-[20.192px] text-[#1a1128] tracking-[-0.3077px]">
        9:41
      </p>
      <div className="flex gap-[2px] items-center shrink-0">
        <div className="h-[15.385px] relative w-[19.231px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2308 15.3846">
            <path d={statusBarPaths.signalBars} fill="#1A1128" />
          </svg>
        </div>
        <div className="relative size-[15.385px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3846 15.3846">
            <path d={statusBarPaths.wifi} fill="#1A1128" />
          </svg>
        </div>
        <div className="h-[15.385px] relative w-[24.038px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0385 15.3846">
            <path d={statusBarPaths.batteryOutline} opacity="0.35" stroke="#9D94AA" strokeOpacity="0.4" strokeWidth="0.961538" fill="none" />
            <path d={statusBarPaths.batteryTip} fill="#1A1128" opacity="0.4" />
            <path d={statusBarPaths.batteryFill} fill="#1A1128" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function MessagingChatLockedPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fffeff] flex items-start justify-center">
      <div className="w-full max-w-[800px] min-w-[360px] bg-[#fffeff] flex flex-col min-h-screen relative">
        <StatusBar />

        {/* Header */}
        <div className="bg-[#fffeff] flex items-center px-4 py-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2">
            <ArrowLeft size={24} color="#1A1128" />
          </button>
          <h1 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[24px] leading-[31px] ml-3">
            Priya Desai
          </h1>
        </div>

        {/* Chat Messages (blurred background) */}
        <div className="flex-1 relative">
          <div className="px-4 py-7 space-y-3">
            {/* Date Divider */}
            <div className="bg-[#f7f4fa] flex items-center justify-center px-4 py-3 rounded-lg w-fit mx-auto">
              <p className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[14px]">Mon, 03:34</p>
            </div>

            {/* Received Message */}
            <div className="flex flex-col gap-0.5 items-start">
              <div className="bg-[#f7f4fa] max-w-[300px] px-4 py-3 rounded-br-lg rounded-tl-lg rounded-tr-2xl">
                <p className="font-['Manrope',sans-serif] text-[#1a1128] text-[14px]">Hi</p>
              </div>
              <p className="font-['Manrope',sans-serif] text-[#6b5f7a] text-[12px]">02:35 PM</p>
            </div>

            {/* Sent Message */}
            <div className="flex flex-col gap-0.5 items-end">
              <div className="bg-[#f7f4fa] max-w-[300px] px-4 py-3 rounded-bl-lg rounded-br-lg rounded-tl-lg">
                <p className="font-['Manrope',sans-serif] text-[#1a1128] text-[14px]">Hi, i need your help</p>
              </div>
              <p className="font-['Manrope',sans-serif] text-[#6b5f7a] text-[12px]">02:37 PM</p>
            </div>

            {/* Received Message */}
            <div className="flex flex-col gap-0.5 items-start">
              <div className="bg-[#f7f4fa] max-w-[300px] px-4 py-3 rounded-br-lg rounded-tl-lg rounded-tr-lg">
                <p className="font-['Manrope',sans-serif] text-[#1a1128] text-[14px]">I'm excited to contribute!</p>
              </div>
              <p className="font-['Manrope',sans-serif] text-[#6b5f7a] text-[12px]">03:00 PM</p>
            </div>
          </div>

          {/* Blur Overlay */}
          <div className="absolute inset-0 backdrop-blur-[7.5px] bg-[rgba(26,26,26,0.2)]" />

          {/* Locked Chat Modal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg border border-[rgba(157,148,170,0.4)] px-4 py-5 w-[358px] max-w-[calc(100%-32px)] z-10">
            <div className="flex flex-col gap-7 items-center">
              {/* Icon and Copy */}
              <div className="flex flex-col gap-5 items-center w-[175px]">
                <div className="bg-[#f5f0ff] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 18 20.25">
                    <path d="M18 10.5C18 9.67157 17.3284 9 16.5 9H15.75V6.75C15.75 3.85051 13.3995 1.5 10.5 1.5C7.60051 1.5 5.25 3.85051 5.25 6.75V9H4.5C3.67157 9 3 9.67157 3 10.5V18.75C3 19.5784 3.67157 20.25 4.5 20.25H16.5C17.3284 20.25 18 19.5784 18 18.75V10.5ZM6.75 6.75C6.75 4.67893 8.42893 3 10.5 3C12.5711 3 14.25 4.67893 14.25 6.75V9H6.75V6.75Z" fill="#7D3AEA" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1 items-center text-center w-full">
                  <h2 className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[18px] leading-[28px]">
                    Chat is locked
                  </h2>
                  <p className="font-['Manrope',sans-serif] text-[#6b5f7a] text-[14px] leading-[21px]">
                    Unlock to message directly
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => navigate(-1)}
                  className="bg-white border border-[#7d3aea] px-4 py-3 rounded-lg min-w-[112px]"
                >
                  <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[16px]">
                    Close
                  </span>
                </button>
                <button
                  onClick={() => navigate("/mentors/booking-review?type=chat-unlock")}
                  className="flex-1 bg-gradient-to-r from-[#7d3aea] to-[#5e28b5] px-4 py-3 rounded-lg"
                >
                  <span className="font-['Manrope',sans-serif] font-semibold text-white text-[16px]">
                    Unlock Chat ₹99
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Message Composer (disabled/blurred) */}
        <div className="bg-white px-4 py-3">
          <div className="bg-white shadow-md border border-[#e2d9ef] rounded-2xl flex gap-2 items-center px-4 py-2 h-16 opacity-50">
            <div className="flex-1">
              <p className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[14px]">Messages</p>
            </div>
            <div className="bg-[#7d3aea] p-2 rounded-2xl w-[45px] h-[47px] flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d="M21.4264 2.57355C21.0405 2.18762 20.4999 1.99512 19.9592 2.04043L3.0842 3.54043C2.45295 3.59512 1.90295 4.00199 1.64982 4.58824C1.39669 5.17449 1.48607 5.84668 1.88607 6.35199L7.63607 13.5614L7.63607 20.2501C7.63607 20.7814 7.91794 21.2767 8.38607 21.5626C8.63138 21.7173 8.91326 21.797 9.19513 21.797C9.44982 21.797 9.70451 21.7345 9.93607 21.6095L14.0592 19.3173L18.8311 23.5548C19.1061 23.7954 19.4483 23.9173 19.7999 23.9173C20.0623 23.9173 20.3249 23.8548 20.5608 23.7251C21.0999 23.4298 21.4483 22.872 21.4483 22.2501L21.4264 2.57355ZM8.8842 12.797L4.13107 6.70137L18.1967 5.48262L8.8842 12.797ZM19.1967 21.0001L13.2467 15.672L19.1967 10.8126L19.1967 21.0001Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        {/* Safe Area */}
        <div className="h-[46px] w-full bg-white flex items-end justify-center pb-2">
          <div className="bg-[#1a1128] h-1 rounded-full w-[130px]" />
        </div>
      </div>
    </div>
  );
}
