import { useNavigate } from "react-router";
import { House, SuitcaseSimple, Plus, Users, User } from "@phosphor-icons/react";

export type NavTab = "home" | "jobs" | "mentors" | "profile";

interface BottomNavProps {
  active?: NavTab;
  profileNavImg?: string;
}

export function BottomNav({ active, profileNavImg }: BottomNavProps) {
  const navigate = useNavigate();

  const isActive = (tab: NavTab) => active === tab;

  const iconColor = (tab: NavTab) => (isActive(tab) ? "#1A1128" : "#6B5F7A");

  const labelCls = (tab: NavTab) =>
    `font-['Manrope',sans-serif] text-[14px] leading-[21px] ${
      isActive(tab)
        ? "font-medium text-[#1a1128] tracking-[0.14px]"
        : "font-normal text-[#6b5f7a]"
    }`;

  return (
    <div className="sticky bottom-0 z-10 bg-white shadow-[0px_-1px_2px_rgba(200,192,212,0.6)] flex flex-col items-center">
      <div className="w-full flex items-center justify-around px-4 h-[68px]">
        <button
          className="flex flex-col gap-px items-center justify-center h-[50px] px-4 cursor-pointer"
          onClick={() => navigate("/home/feed")}
        >
          <House
            size={24}
            weight={isActive("home") ? "fill" : "regular"}
            color={iconColor("home")}
          />
          <span className={labelCls("home")}>Home</span>
        </button>

        <button
          className="flex flex-col gap-px items-center justify-center h-[50px] px-4 cursor-pointer"
          onClick={() => navigate("/jobs")}
        >
          <SuitcaseSimple
            size={24}
            weight={isActive("jobs") ? "fill" : "regular"}
            color={iconColor("jobs")}
          />
          <span className={labelCls("jobs")}>Jobs</span>
        </button>

        <button className="flex flex-col gap-px items-center justify-center h-[50px] px-4 cursor-pointer">
          <Plus size={24} color="#6B5F7A" />
          <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
            Post
          </span>
        </button>

        <button
          className="flex flex-col gap-px items-center justify-center h-[50px] px-4 cursor-pointer"
          onClick={() => navigate("/mentors")}
        >
          <Users
            size={24}
            weight={isActive("mentors") ? "fill" : "regular"}
            color={iconColor("mentors")}
          />
          <span className={labelCls("mentors")}>Mentors</span>
        </button>

        <button
          className="flex flex-col gap-px items-center justify-center h-[50px] px-4 cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          {profileNavImg ? (
            isActive("profile") ? (
              <div className="size-6 flex items-center justify-center">
                <div className="relative size-[20px] rounded-full border border-[#1a1128] flex items-center justify-center p-[2px]">
                  <div className="size-[16px] rounded-full overflow-hidden">
                    <img
                      src={profileNavImg}
                      alt=""
                      className="w-full h-full object-cover object-[50%_20%] scale-[1.3] origin-[50%_20%]"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="size-6 flex items-center justify-center">
                <div className="size-[18px] rounded-full overflow-hidden">
                  <img
                    src={profileNavImg}
                    alt=""
                    className="w-full h-full object-cover object-[50%_20%] scale-[1.3] origin-[50%_20%]"
                  />
                </div>
              </div>
            )
          ) : (
            <User
              size={24}
              weight={isActive("profile") ? "fill" : "regular"}
              color={iconColor("profile")}
            />
          )}
          <span className={labelCls("profile")}>Profile</span>
        </button>
      </div>

      <div className="h-[46px] w-full bg-white flex items-end justify-center pb-[7.69px]">
        <div className="bg-[#1a1128] h-[4.808px] rounded-[200px] w-[128.846px]" />
      </div>
    </div>
  );
}
