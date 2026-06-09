import { useNavigate, useLocation } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import type { Mentor } from "../components/MentorCard";

export function MessagingChatLockedPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const mentor = (location.state as { mentor?: Mentor } | null)?.mentor ?? null;

  return (
    <div className="min-h-screen bg-[#fffeff] flex items-start justify-center">
      <div className="w-full max-w-[800px] min-w-[360px] bg-[#fffeff] flex flex-col min-h-screen relative">
        <PageHeader
          title={mentor?.name ?? "Chat"}
          onBack={() =>
            mentor
              ? navigate("/mentor-profile", { state: { mentor } })
              : navigate("/messages")
          }
        />

        {/* Chat Messages (blurred background) */}
        <div className="flex-1 relative">
          <div className="px-4 py-7 space-y-3">
            {/* Date Divider */}
            <div className="bg-[#f7f4fa] flex items-center justify-center px-4 py-3 rounded-lg w-fit mx-auto">
              <p className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[14px]">
                Mon, 03:34
              </p>
            </div>

            {/* Received Message */}
            <div className="flex flex-col gap-0.5 items-start">
              <div className="bg-[#f7f4fa] max-w-[300px] px-4 py-3 rounded-br-lg rounded-tl-lg rounded-tr-2xl">
                <p className="font-['Manrope',sans-serif] text-[#1a1128] text-[14px]">
                  Hi
                </p>
              </div>
              <p className="font-['Manrope',sans-serif] text-[#6b5f7a] text-[12px]">
                02:35 PM
              </p>
            </div>

            {/* Sent Message */}
            <div className="flex flex-col gap-0.5 items-end">
              <div className="bg-[#f7f4fa] max-w-[300px] px-4 py-3 rounded-bl-lg rounded-br-lg rounded-tl-lg">
                <p className="font-['Manrope',sans-serif] text-[#1a1128] text-[14px]">
                  Hi, i need your help
                </p>
              </div>
              <p className="font-['Manrope',sans-serif] text-[#6b5f7a] text-[12px]">
                02:37 PM
              </p>
            </div>

            {/* Received Message */}
            <div className="flex flex-col gap-0.5 items-start">
              <div className="bg-[#f7f4fa] max-w-[300px] px-4 py-3 rounded-br-lg rounded-tl-lg rounded-tr-lg">
                <p className="font-['Manrope',sans-serif] text-[#1a1128] text-[14px]">
                  I'm excited to contribute!
                </p>
              </div>
              <p className="font-['Manrope',sans-serif] text-[#6b5f7a] text-[12px]">
                03:00 PM
              </p>
            </div>
          </div>

          {/* Blur Overlay */}
          <div className="absolute inset-0 backdrop-blur-[7.5px] bg-[rgba(26,26,26,0.35)]" />

          {/* Locked Chat Modal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg border border-[rgba(157,148,170,0.4)] px-4 py-5 w-[358px] max-w-[calc(100%-32px)] z-10">
            <div className="flex flex-col gap-7 items-center">
              {/* Icon and Copy */}
              <div className="flex flex-col gap-5 items-center w-[175px]">
                <div className="bg-[#f5f0ff] p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 18 20.25">
                    <path
                      d="M18 10.5C18 9.67157 17.3284 9 16.5 9H15.75V6.75C15.75 3.85051 13.3995 1.5 10.5 1.5C7.60051 1.5 5.25 3.85051 5.25 6.75V9H4.5C3.67157 9 3 9.67157 3 10.5V18.75C3 19.5784 3.67157 20.25 4.5 20.25H16.5C17.3284 20.25 18 19.5784 18 18.75V10.5ZM6.75 6.75C6.75 4.67893 8.42893 3 10.5 3C12.5711 3 14.25 4.67893 14.25 6.75V9H6.75V6.75Z"
                      fill="#7D3AEA"
                    />
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
                  onClick={() =>
                    mentor
                      ? navigate("/mentor-profile", { state: { mentor } })
                      : navigate("/messages")
                  }
                  className="bg-white border border-[#7d3aea] px-4 py-3 rounded-lg min-w-[112px]"
                >
                  <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[16px]">
                    Close
                  </span>
                </button>
                <button
                  onClick={() =>
                    navigate("/mentors/booking-review", {
                      state: { mentor, bookingType: "chat-unlock" },
                    })
                  }
                  className="flex-1 bg-gradient-to-r from-[#7d3aea] to-[#5e28b5] px-4 py-3 rounded-lg"
                >
                  <span className="font-['Manrope',sans-serif] font-semibold text-white text-[16px]">
                    Unlock Chat for ₹99
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
              <p className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[14px]">
                Messages
              </p>
            </div>
            <div className="bg-[#7d3aea] p-2 rounded-2xl w-[45px] h-[47px] flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path
                  d="M21.4264 2.57355C21.0405 2.18762 20.4999 1.99512 19.9592 2.04043L3.0842 3.54043C2.45295 3.59512 1.90295 4.00199 1.64982 4.58824C1.39669 5.17449 1.48607 5.84668 1.88607 6.35199L7.63607 13.5614L7.63607 20.2501C7.63607 20.7814 7.91794 21.2767 8.38607 21.5626C8.63138 21.7173 8.91326 21.797 9.19513 21.797C9.44982 21.797 9.70451 21.7345 9.93607 21.6095L14.0592 19.3173L18.8311 23.5548C19.1061 23.7954 19.4483 23.9173 19.7999 23.9173C20.0623 23.9173 20.3249 23.8548 20.5608 23.7251C21.0999 23.4298 21.4483 22.872 21.4483 22.2501L21.4264 2.57355ZM8.8842 12.797L4.13107 6.70137L18.1967 5.48262L8.8842 12.797ZM19.1967 21.0001L13.2467 15.672L19.1967 10.8126L19.1967 21.0001Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
