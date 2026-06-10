import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import { AppLayout } from "../components/AppLayout";
import imgAvatar1 from "@/imports/HomeNotifications-1/8a0297188511b9e7d739e0bdb0fad1599992ea67.png";
import imgAvatar2 from "@/imports/HomeNotifications-1/5d686febbf6bd99db27d32ec61024adf89b31b4f.png";

export function NotificationsPage() {
  const navigate = useNavigate();

  return (
    <AppLayout
      header={
        <div className="flex items-center justify-between px-[16px] py-[12px] w-full">
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
      }
    >
        {/* Content */}
        <div className="flex flex-col gap-[16px] items-start pt-[16px] pb-[20px] w-full">
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
    </AppLayout>
  );
}
