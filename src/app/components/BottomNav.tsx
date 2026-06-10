import { useNavigate, useLocation } from "react-router-dom";

import { House, SuitcaseSimple, Plus, Users, User } from "@phosphor-icons/react";

export type NavTab = "home" | "jobs" | "post" | "mentors" | "profile";

interface BottomNavProps {
  /** Optional avatar image for the Profile tab. */
  profileNavImg?: string;
  /**
   * @deprecated active state is now derived from useLocation().
   * Kept for backward-compatibility only — passing it has no effect.
   */
  active?: NavTab;
}

/**
 * Derives the active tab from the current URL so the highlight is always
 * in sync with the rendered page, regardless of what prop is passed.
 */
function useActiveTab(): NavTab | null {
  const { pathname } = useLocation();
  if (pathname.startsWith("/home")) return "home";
  if (pathname.startsWith("/jobs")) return "jobs";
  if (pathname.startsWith("/post")) return "post";
  if (pathname.startsWith("/mentors")) return "mentors";
  if (pathname.startsWith("/profile")) return "profile";
  if (pathname.startsWith("/brand")) return "jobs"; // brand/overview is a jobs sub-flow
  return null;
}

export function BottomNav({ profileNavImg }: BottomNavProps) {
  const navigate = useNavigate();
  const activeTab = useActiveTab();

  const isActive = (tab: NavTab) => activeTab === tab;
  const iconColor = (tab: NavTab) => (isActive(tab) ? "#1A1128" : "#6B5F7A");
  const labelCls = (tab: NavTab) =>
    `text-[14px] leading-[21px] ${
      isActive(tab)
        ? "font-medium text-[#1a1128] tracking-[0.14px]"
        : "font-normal text-[#6b5f7a]"
    }`;

  return (
    <div className="sticky bottom-0 z-10 bg-white shadow-[0px_-1px_2px_rgba(200,192,212,0.6)] flex flex-col items-center">
      <div className="w-full flex items-center justify-around px-4 h-[68px]">

        <button
          data-nav-item
          className="flex flex-col gap-px items-center justify-center h-[50px] px-4 cursor-pointer rounded-[8px]"
          onClick={() => navigate("/home/feed")}
          aria-label="Home"
        >
          <House size={24} weight={isActive("home") ? "fill" : "regular"} color={iconColor("home")} />
          <span className={labelCls("home")}>Home</span>
        </button>

        <button
          data-nav-item
          className="flex flex-col gap-px items-center justify-center h-[50px] px-4 cursor-pointer rounded-[8px]"
          onClick={() => navigate("/jobs")}
          aria-label="Jobs"
        >
          <SuitcaseSimple size={24} weight={isActive("jobs") ? "fill" : "regular"} color={iconColor("jobs")} />
          <span className={labelCls("jobs")}>Jobs</span>
        </button>

        <button
          data-nav-item
          className="flex flex-col gap-px items-center justify-center h-[50px] px-4 cursor-pointer rounded-[8px]"
          onClick={() => navigate("/post/create-project")}
          aria-label="Post"
        >
          <Plus size={24} weight={isActive("post") ? "fill" : "regular"} color={iconColor("post")} />
          <span className={labelCls("post")}>Post</span>
        </button>

        <button
          data-nav-item
          className="flex flex-col gap-px items-center justify-center h-[50px] px-4 cursor-pointer rounded-[8px]"
          onClick={() => navigate("/mentors")}
          aria-label="Mentors"
        >
          <Users size={24} weight={isActive("mentors") ? "fill" : "regular"} color={iconColor("mentors")} />
          <span className={labelCls("mentors")}>Mentors</span>
        </button>

        <button
          data-nav-item
          className="flex flex-col gap-px items-center justify-center h-[50px] px-4 cursor-pointer rounded-[8px]"
          onClick={() => navigate("/profile")}
          aria-label="Profile"
        >
          {profileNavImg ? (
            isActive("profile") ? (
              <div className="size-6 flex items-center justify-center">
                <div className="relative size-[20px] rounded-full border border-[#1a1128] flex items-center justify-center p-[2px]">
                  <div className="size-[16px] rounded-full overflow-hidden">
                    <img src={profileNavImg} alt="" className="w-full h-full object-cover object-[50%_20%] scale-[1.3] origin-[50%_20%]" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="size-6 flex items-center justify-center">
                <div className="size-[18px] rounded-full overflow-hidden">
                  <img src={profileNavImg} alt="" className="w-full h-full object-cover object-[50%_20%] scale-[1.3] origin-[50%_20%]" />
                </div>
              </div>
            )
          ) : (
            <User size={24} weight={isActive("profile") ? "fill" : "regular"} color={iconColor("profile")} />
          )}
          <span className={labelCls("profile")}>Profile</span>
        </button>

      </div>

    </div>
  );
}
