import { useState } from "react";
import { useNavigate } from "react-router";
import { Funnel, VideoCamera } from "@phosphor-icons/react";
import { BottomNav } from "../components/BottomNav";
import { MentorCard, type Mentor } from "../components/MentorCard";
import { SearchBar } from "../components/SearchBar";

// ─── Images ──────────────────────────────────────────────────────────────────

import imgMentor1 from "@/imports/MentorsListing-1/256d9888e94601d5c3ad0b35893b712ad1983479.png";
import imgMentor2 from "@/imports/MentorsListing-1/200308a276b1feba2bec4e28e27dda4b6aaab137.png";
import imgMentor3 from "@/imports/MentorsListing-1/9aecea038a5eba6222a77595fc22c0549d614720.png";
import imgMentor4 from "@/imports/MentorsListing-1/af1c850daadb743337a79569abbde7a01ce4354c.png";
import imgMentor5 from "@/imports/MentorsListing-1/9e04564b5d619027fe26e99798384a89ec7dbd7e.png";
import imgMentor6 from "@/imports/MentorsListing-1/a21445b6a5efdaefec15a6540ac50ce7fe9c4bf8.png";
import imgMentor7 from "@/imports/MentorsListing-1/4a29d0654aaab6716cd873400f7020bd2faded80.png";
import imgMentor8 from "@/imports/MentorsListing-1/44f0132e097541fab04aec7d33348dc2876131fb.png";
import imgSession1 from "@/imports/MentorsSession1On1-1/8a0297188511b9e7d739e0bdb0fad1599992ea67.png";
import imgSession2 from "@/imports/MentorsSessionWebinar-1/a48c218009c1c155a805b916c3fd6110ae050ef3.png";
import imgProfileNav from "@/imports/MentorsListing-1/bb5b0e0896cc0396e3c8e2b6811f344da7f15455.png";

// ─── SVG paths ────────────────────────────────────────────────────────────────

const chevronDownPath =
  "M16.281 1.28104L8.78104 8.78104C8.71139 8.85077 8.62867 8.90609 8.53762 8.94384C8.44657 8.98158 8.34898 9.00101 8.25042 9.00101C8.15186 9.00101 8.05426 8.98158 7.96321 8.94384C7.87216 8.90609 7.78945 8.85077 7.71979 8.78104L0.219792 1.28104C0.0790615 1.14031 0 0.94944 0 0.750417C0 0.551394 0.0790615 0.360522 0.219792 0.219792C0.360523 0.0790612 0.551394 0 0.750417 0C0.94944 0 1.14031 0.0790612 1.28104 0.219792L8.25042 7.1901L15.2198 0.219792C15.2895 0.150109 15.3722 0.0948337 15.4632 0.0571218C15.5543 0.0194098 15.6519 0 15.7504 0C15.849 0 15.9465 0.0194098 16.0376 0.0571218C16.1286 0.0948337 16.2114 0.150109 16.281 0.219792C16.3507 0.289474 16.406 0.3722 16.4437 0.463245C16.4814 0.554289 16.5008 0.651871 16.5008 0.750417C16.5008 0.848963 16.4814 0.946545 16.4437 1.03759C16.406 1.12863 16.3507 1.21136 16.281 1.28104Z";
const videoCameraPath =
  "M18.75 3.75V8.25C18.75 8.44891 18.829 8.63968 18.9697 8.78033C19.1103 8.92098 19.3011 9 19.5 9C19.6989 9 19.8897 8.92098 20.0303 8.78033C20.171 8.63968 20.25 8.44891 20.25 8.25V3.75C20.25 3.55109 20.171 3.36032 20.0303 3.21967C19.8897 3.07902 19.6989 3 19.5 3C19.3011 3 19.1103 3.07902 18.9697 3.21967C18.829 3.36032 18.75 3.55109 18.75 3.75ZM15.75 2.25H3C2.20435 2.25 1.44129 2.56607 0.87868 3.12868C0.316071 3.69129 0 4.45435 0 5.25V6.75C0 7.54565 0.316071 8.30871 0.87868 8.87132C1.44129 9.43393 2.20435 9.75 3 9.75H15.75C16.5456 9.75 17.3087 9.43393 17.8713 8.87132C18.4339 8.30871 18.75 7.54565 18.75 6.75V5.25C18.75 4.45435 18.4339 3.69129 17.8713 3.12868C17.3087 2.56607 16.5456 2.25 15.75 2.25ZM17.25 6.75C17.25 7.14782 17.092 7.52936 16.8107 7.81066C16.5294 8.09196 16.1478 8.25 15.75 8.25H3C2.60218 8.25 2.22064 8.09196 1.93934 7.81066C1.65804 7.52936 1.5 7.14782 1.5 6.75V5.25C1.5 4.85218 1.65804 4.47064 1.93934 4.18934C2.22064 3.90804 2.60218 3.75 3 3.75H15.75C16.1478 3.75 16.5294 3.90804 16.8107 4.18934C17.092 4.47064 17.25 4.85218 17.25 5.25V6.75Z";

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

// ─── Types ────────────────────────────────────────────────────────────────────

type MainTab = "Discover" | "Upcoming Sessions";
type SessionTab = "1:1 Sessions" | "Webinars";

interface Session {
  id: string;
  type: "1:1" | "webinar";
  mentor: string;
  mentorTitle: string;
  mentorCompany: string;
  mentorAvatar: string;
  coMentors?: { name: string; avatar: string }[];
  date: string;
  time: string;
  duration: number;
  category: "Learning" | "Mentoring" | "Attending";
  status: "upcoming" | "imminent";
  timeUntil?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const topRatedMentors: Mentor[] = [
  {
    id: "m1",
    name: "Shruti Jain",
    title: "Sr. Fashion Designer",
    company: "MAX",
    avatar: imgMentor1,
    experience: "7 yrs exp • EX - ZARA",
    rating: 4.9,
    reviews: 120,
    originalPrice: 600,
    discountedPrice: 300,
    isTopMentor: true,
  },
  {
    id: "m2",
    name: "Priya Mehta",
    title: "Sr. Fashion Designer",
    company: "MAX",
    avatar: imgMentor2,
    experience: "7 yrs exp • EX - Fab India",
    rating: 4.7,
    reviews: 120,
    originalPrice: 600,
    discountedPrice: 400,
    isTopMentor: true,
  },
  {
    id: "m3",
    name: "Ravi Kumar",
    title: "Sr. Fashion Designer",
    company: "Myntra",
    avatar: imgMentor3,
    experience: "8 yrs exp • EX - H&M",
    rating: 4.7,
    reviews: 120,
    originalPrice: 550,
    discountedPrice: 300,
    isTopMentor: true,
  },
  {
    id: "m4",
    name: "Sneha Patel",
    title: "Lead Fashion Designer",
    company: "Anita Dongre",
    avatar: imgMentor4,
    experience: "10 yrs exp • EX - Mango",
    rating: 4.6,
    reviews: 75,
    originalPrice: 580,
    discountedPrice: 250,
    isTopMentor: true,
  },
];

const pickedForYouMentors: Mentor[] = [
  {
    id: "m5",
    name: "Amit Sharma",
    title: "Mid-Level Designer",
    company: "Biba",
    avatar: imgMentor5,
    experience: "5 yrs exp • EX - Forever 21",
    rating: 4.4,
    reviews: 95,
    originalPrice: 520,
    discountedPrice: 350,
  },
  {
    id: "m6",
    name: "Neha Verma",
    title: "Fashion Designer",
    company: "W for Woman",
    avatar: imgMentor6,
    experience: "6 yrs exp • EX - Lifestyle",
    rating: 4.5,
    reviews: 88,
    originalPrice: 480,
    discountedPrice: 320,
  },
  {
    id: "m7",
    name: "Vikram Singh",
    title: "Mid-Level Designer",
    company: "Biba",
    avatar: imgMentor7,
    experience: "3 yrs exp • EX - Shein",
    rating: 4.2,
    reviews: 80,
    originalPrice: 100,
    discountedPrice: "Free",
  },
  {
    id: "m8",
    name: "Anjali Nair",
    title: "Fashion Designer",
    company: "Fabindia",
    avatar: imgMentor8,
    experience: "4 yrs exp • EX - Westside",
    rating: 4.3,
    reviews: 65,
    originalPrice: 450,
    discountedPrice: 280,
  },
];

const additionalMentors: Mentor[] = [
  {
    id: "m9",
    name: "Rajesh Patel",
    title: "Sr. Fashion Designer",
    company: "Lifestyle",
    avatar: imgMentor1,
    experience: "9 yrs exp • EX - Shoppers Stop",
    rating: 4.8,
    reviews: 110,
    originalPrice: 650,
    discountedPrice: 400,
  },
  {
    id: "m10",
    name: "Kavita Reddy",
    title: "Lead Designer",
    company: "FabIndia",
    avatar: imgMentor2,
    experience: "11 yrs exp • EX - Good Earth",
    rating: 4.7,
    reviews: 98,
    originalPrice: 700,
    discountedPrice: 450,
  },
];

const sessionsData: Session[] = [
  {
    id: "s1",
    type: "1:1",
    mentor: "Shruti Jain",
    mentorTitle: "Sr. Fashion Designer",
    mentorCompany: "Max Fashion",
    mentorAvatar: imgSession1,
    date: "Sat · 30 July",
    time: "6:00 PM – 7:00 PM",
    duration: 60,
    category: "Learning",
    status: "imminent",
    timeUntil: "00:10 minutes",
  },
  {
    id: "s2",
    type: "1:1",
    mentor: "Riya Raj",
    mentorTitle: "Sr. Fashion Designer",
    mentorCompany: "Max Fashion",
    mentorAvatar: imgSession1,
    date: "Mon · 5 August",
    time: "4:00 PM – 5:00 PM",
    duration: 60,
    category: "Mentoring",
    status: "upcoming",
  },
  {
    id: "s3",
    type: "webinar",
    mentor: "Shruti Jain, Riya Raj, Ankita K",
    mentorTitle: "Sr. Fashion Designer",
    mentorCompany: "Max Fashion",
    mentorAvatar: imgSession1,
    coMentors: [
      { name: "Riya Raj", avatar: imgSession2 },
      { name: "Ankita K", avatar: imgSession2 },
    ],
    date: "Sat · 20 July",
    time: "9:00 AM – 2:00 PM",
    duration: 300,
    category: "Attending",
    status: "upcoming",
  },
];

// ─── Status bar ───────────────────────────────────────────────────────────────

function StatusBar() {
  return (
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
            <path d={statusBarPaths.batteryTip} fill="#1A1128" opacity="0.4" />
            <path d={statusBarPaths.batteryFill} fill="#1A1128" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Top bar ──────────────────────────────────────────────────────────────────

function TopBar({
  onFilterClick,
  searchPlaceholder,
}: {
  onFilterClick: () => void;
  searchPlaceholder: string;
}) {
  return (
    <div className="sticky top-0 z-10 bg-[#fffeff]">
      <StatusBar />
      <div className="flex gap-3 items-center px-4 py-3 h-[64px]">
        <SearchBar placeholder={searchPlaceholder} className="flex-1" />
        <button className="p-2 cursor-pointer" onClick={onFilterClick}>
          <Funnel size={24} color="#6B5F7A" />
        </button>
      </div>
    </div>
  );
}

// ─── Main tabs ────────────────────────────────────────────────────────────────

function MainTabs({
  activeTab,
  onTabChange,
}: {
  activeTab: MainTab;
  onTabChange: (tab: MainTab) => void;
}) {
  return (
    <div className="w-full border-b border-[#e2d9ef] px-4 pt-4">
      <div className="flex">
        <button
          onClick={() => onTabChange("Discover")}
          className="flex-1 h-10 px-4 flex flex-col justify-between items-center"
        >
          <div className="flex-1 flex items-center justify-center">
            <span
              className={`font-['Manrope',sans-serif] text-[16px] whitespace-nowrap ${
                activeTab === "Discover"
                  ? "font-medium text-[#1a1128] leading-[25px] tracking-[0.16px]"
                  : "font-normal text-[#6b5f7a] leading-[24px]"
              }`}
            >
              Discover
            </span>
          </div>
          <div
            className={`h-[2px] w-full rounded-tl-[2px] rounded-tr-[2px] ${activeTab === "Discover" ? "bg-[#7d3aea]" : "bg-transparent"}`}
          />
        </button>
        <button
          onClick={() => onTabChange("Upcoming Sessions")}
          className="flex-1 h-10 px-4 flex flex-col justify-between items-center"
        >
          <div className="flex-1 flex items-center justify-center">
            <span
              className={`font-['Manrope',sans-serif] text-[16px] whitespace-nowrap ${
                activeTab === "Upcoming Sessions"
                  ? "font-medium text-[#1a1128] leading-[25px] tracking-[0.16px]"
                  : "font-normal text-[#6b5f7a] leading-[24px]"
              }`}
            >
              Upcoming session
            </span>
          </div>
          <div
            className={`h-[2px] w-full rounded-tl-[2px] rounded-tr-[2px] ${activeTab === "Upcoming Sessions" ? "bg-[#7d3aea]" : "bg-transparent"}`}
          />
        </button>
      </div>
    </div>
  );
}

// ─── Session tabs ─────────────────────────────────────────────────────────────

function SessionTabs({
  activeTab,
  onTabChange,
}: {
  activeTab: SessionTab;
  onTabChange: (tab: SessionTab) => void;
}) {
  return (
    <div className="flex gap-3 items-center p-4">
      <button
        onClick={() => onTabChange("1:1 Sessions")}
        className={`flex h-10 items-center justify-center px-4 py-3 rounded-[4px] border border-[#7d3aea] ${
          activeTab === "1:1 Sessions" ? "bg-[#f5f0ff]" : "bg-white"
        }`}
      >
        <span
          className={`font-['Manrope',sans-serif] text-[16px] text-center whitespace-nowrap ${
            activeTab === "1:1 Sessions"
              ? "font-medium text-[#2d2040] leading-[25px] tracking-[0.16px]"
              : "font-normal text-[#6b5f7a] leading-[24px]"
          }`}
        >
          1:1 Sessions
        </span>
      </button>
      <button
        onClick={() => onTabChange("Webinars")}
        className={`flex h-10 items-center justify-center px-4 py-3 rounded-[4px] border border-[#7d3aea] ${
          activeTab === "Webinars" ? "bg-[#f5f0ff]" : "bg-white"
        }`}
      >
        <span
          className={`font-['Manrope',sans-serif] text-[16px] text-center whitespace-nowrap ${
            activeTab === "Webinars"
              ? "font-medium text-[#2d2040] leading-[25px] tracking-[0.16px]"
              : "font-normal text-[#6b5f7a] leading-[24px]"
          }`}
        >
          Webinars
        </span>
      </button>
    </div>
  );
}

// ─── Session card (1:1) ───────────────────────────────────────────────────────

function SessionCard1On1({
  session,
  isExpanded,
  onToggle,
}: {
  session: Session;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const isImminent = session.status === "imminent";

  return (
    <div className="bg-white border border-[#e2d9ef] rounded-[4px] overflow-hidden w-full max-w-[768px] min-w-[320px]">
      {isExpanded ? (
        <div className="flex flex-col gap-3 items-start px-4 py-3">
          <button
            onClick={onToggle}
            className="flex gap-2 items-center w-full cursor-pointer"
          >
            <div className="flex flex-col gap-2 items-start flex-1">
              <div
                className={`flex items-center justify-center px-2 py-2 rounded-[2px] ${
                  session.category === "Learning"
                    ? "bg-[#f4f7ff]"
                    : "bg-[#d6f5dd]"
                }`}
              >
                <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[12px] leading-[18px] tracking-[0.24px]">
                  {session.category}
                </span>
              </div>
              <p className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[18px] leading-[28px] text-left">
                {isImminent
                  ? `Your session starts in ${session.timeUntil}`
                  : "Session in 5 days"}
              </p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19.5 8.24988L12 15.7499L4.5 8.24988"
                stroke="#6B5F7A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex flex-col gap-3 items-start w-full">
            <div className="flex gap-3 items-center w-full">
              <div className="relative shrink-0 size-12 rounded-[24px] overflow-hidden border border-[#e2d9ef] shadow-[-2px_0px_2px_rgba(200,192,212,0.6)]">
                <img
                  src={session.mentorAvatar}
                  alt={session.mentor}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <p className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tracking-[0.16px] flex-1">
                {session.date}, {session.time}
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start w-full">
              <div className="flex flex-col gap-[2px] items-start w-full">
                <p className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px] overflow-hidden text-ellipsis whitespace-nowrap w-full">
                  {session.mentor}
                </p>
                <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px] overflow-hidden text-ellipsis whitespace-nowrap w-full">
                  ({session.mentorTitle} @{session.mentorCompany})
                </p>
              </div>
              <div className="inline-flex items-center gap-2">
                <div className="relative shrink-0 size-6 overflow-hidden flex items-center justify-center">
                  <VideoCamera size={20} color="#6B5F7A" weight="regular" />
                </div>
                <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                  {session.duration}mins
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-center w-full mt-6">
            <button className="flex-1 h-10 bg-white border border-[#7d3aea] rounded-[4px] flex items-center justify-center font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[14px] leading-[20px]">
              Reschedule
            </button>
            <button className="flex-1 h-10 bg-[#7d3aea] rounded-[4px] flex items-center justify-center font-['Manrope',sans-serif] font-semibold text-white text-[14px] leading-[20px]">
              Join session
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={onToggle}
          className="flex gap-2 items-center px-4 py-3 w-full cursor-pointer"
        >
          <div className="flex flex-col gap-2 items-start flex-1">
            <div
              className={`flex items-center justify-center px-2 py-2 rounded-[2px] ${
                session.category === "Learning"
                  ? "bg-[#f4f7ff]"
                  : "bg-[#d6f5dd]"
              }`}
            >
              <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[12px] leading-[18px] tracking-[0.24px]">
                {session.category}
              </span>
            </div>
            <p className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[18px] leading-[28px]">
              Session in 5 days
            </p>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19.5 15.7499L12 8.24988L4.5 15.7499"
              stroke="#6B5F7A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

// ─── Session card (Webinar) ───────────────────────────────────────────────────

function SessionCardWebinar({
  session,
  isExpanded,
  onToggle,
}: {
  session: Session;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white border border-[#e2d9ef] rounded-[4px] overflow-hidden w-full max-w-[768px] min-w-[320px]">
      {isExpanded ? (
        <div className="flex flex-col gap-3 items-start px-4 py-3">
          <button
            onClick={onToggle}
            className="flex gap-2 items-center w-full cursor-pointer"
          >
            <div className="flex flex-col gap-2 items-start flex-1">
              <div className="bg-[#fef0d2] flex items-center justify-center px-2 py-2 rounded-[2px]">
                <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[12px] leading-[18px] tracking-[0.24px]">
                  {session.category}
                </span>
              </div>
              <p className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[18px] leading-[28px]">
                Session in 7 days
              </p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19.5 8.24988L12 15.7499L4.5 8.24988"
                stroke="#6B5F7A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex flex-col gap-3 items-start w-full">
            <div className="flex gap-3 items-center w-full">
              <div className="flex items-center shrink-0 pointer-events-none shadow-[-2px_0px_2px_rgba(200,192,212,0.6)]">
                <div className="mr-[-12px] relative rounded-[24px] shrink-0 size-12">
                  <div className="absolute inset-0 overflow-hidden rounded-[24px]">
                    <img
                      alt=""
                      className="absolute inset-0 size-full object-cover"
                      src={imgSession1}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[24px]"
                  />
                </div>
                <div className="mr-[-12px] relative rounded-[200px] shrink-0 size-12">
                  <div className="absolute inset-0 overflow-hidden rounded-[200px]">
                    <img
                      alt=""
                      className="absolute inset-0 size-full object-cover"
                      src={imgSession2}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]"
                  />
                </div>
                <div className="relative rounded-[200px] shrink-0 size-12">
                  <div className="absolute inset-0 overflow-hidden rounded-[200px]">
                    <img
                      alt=""
                      className="absolute inset-0 size-full object-cover"
                      src={imgSession2}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]"
                  />
                </div>
              </div>
              <p className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tracking-[0.16px] flex-1">
                {session.date}, {session.time}
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start w-full">
              <div className="flex flex-col gap-[2px] items-start w-full">
                <p className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px] overflow-hidden text-ellipsis whitespace-nowrap w-full">
                  {session.mentor}
                </p>
                <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px] overflow-hidden text-ellipsis whitespace-nowrap w-full">
                  ({session.mentorTitle} @{session.mentorCompany})
                </p>
              </div>
              <div className="inline-flex items-center gap-2">
                <div className="relative shrink-0 size-6 overflow-hidden flex items-center justify-center">
                  <VideoCamera size={20} color="#6B5F7A" weight="regular" />
                </div>
                <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                  5 hrs
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 items-center w-full">
            <div className="flex-1 h-10 bg-[#7d3aea] rounded-[4px] flex items-center justify-center">
              <span className="font-['Manrope',sans-serif] font-semibold text-white text-[14px] leading-[20px] tracking-[0.14px]">
                Join session
              </span>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={onToggle}
          className="flex gap-2 items-center px-4 py-3 w-full cursor-pointer"
        >
          <div className="flex flex-col gap-2 items-start flex-1">
            <div className="bg-[#fef0d2] flex items-center justify-center px-2 py-2 rounded-[2px]">
              <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[12px] leading-[18px] tracking-[0.24px]">
                {session.category}
              </span>
            </div>
            <p className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[18px] leading-[28px]">
              Session in 7 days
            </p>
          </div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M19.5 15.7499L12 8.24988L4.5 15.7499"
              stroke="#6B5F7A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

// ─── Bottom nav ───────────────────────────────────────────────────────────────


// ─── Page ─────────────────────────────────────────────────────────────────────

export function MentorsPage() {
  const [mainTab, setMainTab] = useState<MainTab>("Discover");
  const [sessionTab, setSessionTab] = useState<SessionTab>("1:1 Sessions");
  const [expandedSession, setExpandedSession] = useState<string | null>("s1");
  const [showMore, setShowMore] = useState(false);

  const filteredSessions = sessionsData.filter((s) =>
    sessionTab === "1:1 Sessions" ? s.type === "1:1" : s.type === "webinar"
  );

  const displayedPickedMentors = showMore
    ? [...pickedForYouMentors, ...additionalMentors]
    : pickedForYouMentors;

  return (
    <div className="min-h-screen bg-[#f0ecf7] flex items-start justify-center">
      <div className="w-full max-w-[800px] min-w-[360px] bg-[#fffeff] flex flex-col min-h-screen">
        <TopBar
          onFilterClick={() => {}}
          searchPlaceholder={
            mainTab === "Discover"
              ? "Search mentors, skills, domain"
              : "Search Sessions"
          }
        />

        <div className="flex-1 overflow-y-auto pb-[114px]">
          <MainTabs activeTab={mainTab} onTabChange={setMainTab} />

          {mainTab === "Discover" && (
            <div className="flex flex-col items-start w-full px-4 py-5 gap-6">
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] w-full">
                  Top rated mentors
                </div>
                <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-[12px] gap-y-[12px] w-full">
                  {topRatedMentors.map((mentor) => (
                    <MentorCard key={mentor.id} mentor={mentor} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 items-start w-full">
                <div className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] w-full">
                  Picked for you
                </div>
                <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-[12px] gap-y-[12px] w-full">
                  {displayedPickedMentors.map((mentor) => (
                    <MentorCard key={mentor.id} mentor={mentor} />
                  ))}
                </div>
                {!showMore && (
                  <button
                    onClick={() => setShowMore(true)}
                    className="h-12 w-full rounded-[8px] flex items-center justify-center gap-2"
                  >
                    <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[16px] leading-[20px] tracking-[0.48px]">
                      View More
                    </span>
                    <div className="relative shrink-0 size-6">
                      <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]">
                        <svg
                          className="absolute block inset-0 size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 16.5008 9.00101"
                        >
                          <path d={chevronDownPath} fill="#7D3AEA" />
                        </svg>
                      </div>
                    </div>
                  </button>
                )}
              </div>
            </div>
          )}

          {mainTab === "Upcoming Sessions" && (
            <>
              <SessionTabs activeTab={sessionTab} onTabChange={setSessionTab} />
              <div className="flex flex-col gap-3 px-4 py-6">
                {filteredSessions.map((session) =>
                  session.type === "1:1" ? (
                    <SessionCard1On1
                      key={session.id}
                      session={session}
                      isExpanded={expandedSession === session.id}
                      onToggle={() =>
                        setExpandedSession(
                          expandedSession === session.id ? null : session.id
                        )
                      }
                    />
                  ) : (
                    <SessionCardWebinar
                      key={session.id}
                      session={session}
                      isExpanded={expandedSession === session.id}
                      onToggle={() =>
                        setExpandedSession(
                          expandedSession === session.id ? null : session.id
                        )
                      }
                    />
                  )
                )}
              </div>
            </>
          )}
        </div>

        <BottomNav active="mentors" profileNavImg={imgProfileNav} />
      </div>
    </div>
  );
}
