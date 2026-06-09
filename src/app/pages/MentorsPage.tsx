import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Funnel, VideoCamera, Check } from "@phosphor-icons/react";
import { BottomNav } from "../components/BottomNav";
import { MentorCard, type Mentor } from "../components/MentorCard";
import { SearchBar } from "../components/SearchBar";
import { ViewMoreButton } from "../components/ViewMoreButton";
import { Button } from "../components/ui/button";
import imgNotFound from "@/imports/SharedNotFound/460b6c9e17511d97e9e5c7a1875505fb0de17812.png";

// ─── Images ──────────────────────────────────────────────────────────────────

import imgProfileNav from "@/imports/MentorsListing-1/bb5b0e0896cc0396e3c8e2b6811f344da7f15455.png";
// Session images for non-canonical session participants (Riya Raj, Ankita K)

// ─── Mentor avatars + webinar hosts — sourced from the centralized registry ───
import { MENTOR_AVATARS, WEBINAR_HOSTS } from "../data/mentorImages";

// ─── SVG paths ────────────────────────────────────────────────────────────────

const videoCameraPath =
  "M18.75 3.75V8.25C18.75 8.44891 18.829 8.63968 18.9697 8.78033C19.1103 8.92098 19.3011 9 19.5 9C19.6989 9 19.8897 8.92098 20.0303 8.78033C20.171 8.63968 20.25 8.44891 20.25 8.25V3.75C20.25 3.55109 20.171 3.36032 20.0303 3.21967C19.8897 3.07902 19.6989 3 19.5 3C19.3011 3 19.1103 3.07902 18.9697 3.21967C18.829 3.36032 18.75 3.55109 18.75 3.75ZM15.75 2.25H3C2.20435 2.25 1.44129 2.56607 0.87868 3.12868C0.316071 3.69129 0 4.45435 0 5.25V6.75C0 7.54565 0.316071 8.30871 0.87868 8.87132C1.44129 9.43393 2.20435 9.75 3 9.75H15.75C16.5456 9.75 17.3087 9.43393 17.8713 8.87132C18.4339 8.30871 18.75 7.54565 18.75 6.75V5.25C18.75 4.45435 18.4339 3.69129 17.8713 3.12868C17.3087 2.56607 16.5456 2.25 15.75 2.25ZM17.25 6.75C17.25 7.14782 17.092 7.52936 16.8107 7.81066C16.5294 8.09196 16.1478 8.25 15.75 8.25H3C2.60218 8.25 2.22064 8.09196 1.93934 7.81066C1.65804 7.52936 1.5 7.14782 1.5 6.75V5.25C1.5 4.85218 1.65804 4.47064 1.93934 4.18934C2.22064 3.90804 2.60218 3.75 3 3.75H15.75C16.1478 3.75 16.5294 3.90804 16.8107 4.18934C17.092 4.47064 17.25 4.85218 17.25 5.25V6.75Z";

// ─── Types ────────────────────────────────────────────────────────────────────

type MainTab = "Discover" | "Upcoming Sessions";
type SessionTab = "1:1 Sessions" | "Webinars";

// ─── Active mentor filters passed back from the filter sheet ──────────────────

interface ActiveMentorFilters {
  gender: string | null;   // "Female" | "Male" | "Non-binary" | null
  category: string | null; // e.g. "Career" | "Startup" | null
}

// Extended mentor type with filter metadata (local to this page)
interface MentorWithMeta extends Mentor {
  gender?: "Female" | "Male" | "Non-binary";
  tags?: string[];
}

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

const topRatedMentors: MentorWithMeta[] = [
  {
    id: "m1",
    name: "Shruti Jain",
    title: "Sr. Fashion Designer",
    company: "MAX",
    avatar: MENTOR_AVATARS.shrutiJain,
    experience: "7 yrs exp • EX - ZARA",
    rating: 4.9,
    reviews: 120,
    originalPrice: 600,
    discountedPrice: 300,
    isTopMentor: true,
    gender: "Female",
    tags: ["Design", "Career", "Fashion"],
  },
  {
    id: "m2",
    name: "Priya Mehta",
    title: "Sr. Fashion Designer",
    company: "MAX",
    avatar: MENTOR_AVATARS.priyaMehta,
    experience: "7 yrs exp • EX - Fab India",
    rating: 4.7,
    reviews: 120,
    originalPrice: 600,
    discountedPrice: 400,
    isTopMentor: true,
    gender: "Female",
    tags: ["Design", "Startup", "Marketing"],
  },
  {
    id: "m3",
    name: "Ravi Kumar",
    title: "Sr. Fashion Designer",
    company: "Myntra",
    avatar: MENTOR_AVATARS.raviKumar,
    experience: "8 yrs exp • EX - H&M",
    rating: 4.7,
    reviews: 120,
    originalPrice: 550,
    discountedPrice: 300,
    isTopMentor: true,
    gender: "Male",
    tags: ["Tech", "Career", "Design"],
  },
  {
    id: "m4",
    name: "Sneha Patel",
    title: "Lead Fashion Designer",
    company: "Anita Dongre",
    avatar: MENTOR_AVATARS.snehaPatel,
    experience: "10 yrs exp • EX - Mango",
    rating: 4.6,
    reviews: 75,
    originalPrice: 580,
    discountedPrice: 250,
    isTopMentor: true,
    gender: "Female",
    tags: ["Finance", "Design", "Wellness"],
  },
];

const pickedForYouMentors: MentorWithMeta[] = [
  {
    id: "m5",
    name: "Amit Sharma",
    title: "Mid-Level Designer",
    company: "Biba",
    avatar: MENTOR_AVATARS.amitSharma,
    experience: "5 yrs exp • EX - Forever 21",
    rating: 4.4,
    reviews: 95,
    originalPrice: 520,
    discountedPrice: 350,
    gender: "Male",
    tags: ["Career", "Tech"],
  },
  {
    id: "m6",
    name: "Neha Verma",
    title: "Fashion Designer",
    company: "W for Woman",
    avatar: MENTOR_AVATARS.nehaVerma,
    experience: "6 yrs exp • EX - Reliance Trends",
    rating: 4.5,
    reviews: 88,
    originalPrice: 480,
    discountedPrice: 320,
    gender: "Female",
    tags: ["Marketing", "Career", "Startup"],
  },
  {
    id: "m7",
    name: "Vikram Singh",
    title: "Mid-Level Designer",
    company: "Biba",
    avatar: MENTOR_AVATARS.vikramSingh,
    experience: "3 yrs exp • EX - Shein",
    rating: 4.2,
    reviews: 80,
    originalPrice: 100,
    discountedPrice: "Free",
    gender: "Male",
    tags: ["Tech", "Startup"],
  },
  {
    id: "m8",
    name: "Anjali Nair",
    title: "Fashion Designer",
    company: "Fabindia",
    avatar: MENTOR_AVATARS.anjaliNair,
    experience: "4 yrs exp • EX - Westside",
    rating: 4.3,
    reviews: 65,
    originalPrice: 450,
    discountedPrice: 280,
    gender: "Female",
    tags: ["Wellness", "Design"],
  },
];

const additionalMentors: MentorWithMeta[] = [
  {
    id: "m9",
    name: "Rajesh Patel",
    title: "Sr. Fashion Designer",
    company: "Lifestyle",
    avatar: MENTOR_AVATARS.rajeshPatel,
    experience: "9 yrs exp • EX - Shoppers Stop",
    rating: 4.8,
    reviews: 110,
    originalPrice: 650,
    discountedPrice: 400,
    gender: "Male",
    tags: ["Finance", "Career"],
  },
  {
    id: "m10",
    name: "Kavita Reddy",
    title: "Lead Designer",
    company: "FabIndia",
    avatar: MENTOR_AVATARS.kavitaReddy,
    experience: "11 yrs exp • EX - Good Earth",
    rating: 4.7,
    reviews: 98,
    originalPrice: 700,
    discountedPrice: 450,
    gender: "Female",
    tags: ["Finance", "Startup", "Wellness"],
  },
];

const sessionsData: Session[] = [
  {
    id: "s1",
    type: "1:1",
    mentor: "Shruti Jain",
    mentorTitle: "Sr. Fashion Designer",
    mentorCompany: "Max Fashion",
    mentorAvatar: MENTOR_AVATARS.shrutiJain,
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
    mentor: "Kiya Rathi",
    mentorTitle: "Intern",
    mentorCompany: "Nykaa Fashion",
    // Local bundled avatar — avoids runtime hotlink to Unsplash CDN
    mentorAvatar: MENTOR_AVATARS.nehaVerma,
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
    mentorAvatar: WEBINAR_HOSTS.main,
    coMentors: [
      { name: "Riya Raj", avatar: WEBINAR_HOSTS.alt1 },
      { name: "Ankita K", avatar: WEBINAR_HOSTS.alt2 },
    ],
    date: "Sat · 20 July",
    time: "9:00 AM – 2:00 PM",
    duration: 300,
    category: "Attending",
    status: "upcoming",
  },
];

// ─── Status bar ───────────────────────────────────────────────────────────────

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
                className={`flex items-center justify-center px-2 py-1 rounded-[2px] ${
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
              className={`flex items-center justify-center px-2 py-1 rounded-[2px] ${
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
              {isImminent ? "Session in 10 mins" : "Session in 5 days"}
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
              <div className="bg-[#fef0d2] flex items-center justify-center px-2 py-1 rounded-[2px]">
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
              <div className="flex items-center shrink-0 pointer-events-none pr-3">
                <div className="mr-[-12px] relative rounded-[24px] shrink-0 size-12 shadow-[-2px_0px_2px_rgba(200,192,212,0.6)]">
                  <div className="absolute inset-0 overflow-hidden rounded-[24px]">
                    <img
                      alt=""
                      className="absolute inset-0 size-full object-cover"
                      src={WEBINAR_HOSTS.main}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[24px]"
                  />
                </div>
                <div className="mr-[-12px] relative rounded-[200px] shrink-0 size-12 shadow-[-2px_0px_2px_rgba(200,192,212,0.6)]">
                  <div className="absolute inset-0 overflow-hidden rounded-[200px]">
                    <img
                      alt=""
                      className="absolute inset-0 size-full object-cover"
                      src={WEBINAR_HOSTS.alt1}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]"
                  />
                </div>
                <div className="relative rounded-[200px] shrink-0 size-12 shadow-[-2px_0px_2px_rgba(200,192,212,0.6)]">
                  <div className="absolute inset-0 overflow-hidden rounded-[200px]">
                    <img
                      alt=""
                      className="absolute inset-0 size-full object-cover"
                      src={WEBINAR_HOSTS.alt2}
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
            <div className="bg-[#fef0d2] flex items-center justify-center px-2 py-1 rounded-[2px]">
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

// ─── Filter types & data ─────────────────────────────────────────────────────

type MentorFilterCategory =
  | "Experience"
  | "Specialization"
  | "Company"
  | "Price"
  | "Availability"
  | "Gender"
  | "Language";

type SessionFilterCategory =
  | "Attending"
  | "Hosting"
  | "Mentoring"
  | "Learning"
  | "Industry";

const MENTOR_FILTER_CATEGORIES: MentorFilterCategory[] = [
  "Experience",
  "Specialization",
  "Company",
  "Price",
  "Availability",
  "Gender",
  "Language",
];

const MENTOR_FILTER_OPTIONS: Record<MentorFilterCategory, string[]> = {
  Experience: ["0–2 yrs", "2–5 yrs", "5–10 yrs", "10–15 yrs", "15+ yrs"],
  Specialization: [
    "Fashion Design",
    "Textile Design",
    "Fashion Styling",
    "Fashion Communication",
    "Product Development",
    "Merchandising",
    "Luxury Fashion",
    "Sustainable Fashion",
  ],
  Company: [
    "Design House",
    "Export House",
    "International Brand",
    "Own Label",
    "Retail / Mass Market",
    "Film & Costume",
    "Academia / NIFT",
    "Craft / NGO",
  ],
  Price: ["Under ₹300/hr", "₹300–600/hr", "₹600+/hr"],
  Availability: [
    "Available this week",
    "Weekdays",
    "Weekends",
    "Evening slots",
  ],
  Gender: ["No preference", "Female", "Male", "Non-binary"],
  Language: ["English", "Hindi", "Marathi", "Tamil", "Bengali", "Gujarati"],
};

const SESSION_FILTER_CATEGORIES: SessionFilterCategory[] = [
  "Attending",
  "Hosting",
  "Mentoring",
  "Learning",
  "Industry",
];

const SESSION_FILTER_OPTIONS: Record<SessionFilterCategory, string[]> = {
  Attending: ["Webinar", "Workshop", "Panel Talk", "Networking Event", "Live Session"],
  Hosting: ["Hosted Webinar", "AMA Session", "Portfolio Review", "Brand Talk", "Masterclass"],
  Mentoring: ["Career Guidance", "Portfolio Review", "Business Mentorship", "Design Feedback", "Startup Advice"],
  Learning: ["Beginner Guidance", "Skill Building", "Career Switch", "Internship Help", "Industry Insights"],
  Industry: [],
};

function initMentorSel(): Record<MentorFilterCategory, Set<string>> {
  return Object.fromEntries(
    MENTOR_FILTER_CATEGORIES.map((c) => [c, new Set<string>()])
  ) as Record<MentorFilterCategory, Set<string>>;
}

function initSessionSel(): Record<SessionFilterCategory, Set<string>> {
  return Object.fromEntries(
    SESSION_FILTER_CATEGORIES.map((c) => [c, new Set<string>()])
  ) as Record<SessionFilterCategory, Set<string>>;
}

function hasActiveSelections(sel: Record<string, Set<string>>): boolean {
  return Object.values(sel).some((s) => s.size > 0);
}

// ─── Filter chip ──────────────────────────────────────────────────────────────

function FilterChip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex gap-[8px] items-center justify-center min-h-[44px] px-[16px] py-[10px] rounded-[8px] cursor-pointer border whitespace-nowrap ${
        selected ? "bg-white border-[#7d3aea]" : "bg-white border-[#e2d9ef]"
      }`}
    >
      {selected && <Check size={14} color="#7D3AEA" weight="bold" />}
      <span
        className={`font-['Manrope',sans-serif] text-[16px] leading-[25px] tracking-[0.16px] ${
          selected ? "font-medium text-[#1a1128]" : "font-normal text-[#6b5f7a]"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

// ─── Empty states ─────────────────────────────────────────────────────────────

function MentorsEmptyState({ mentors }: { mentors: Mentor[] }) {
  return (
    <div className="flex flex-col w-full pb-[20px]">
      {/* Illustration + heading */}
      <div className="flex flex-col gap-[12px] items-center px-[16px] py-[12px]">
        <div className="h-[319px] mix-blend-darken relative w-full shrink-0">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-bottom size-full pointer-events-none"
            src={imgNotFound}
          />
        </div>
        <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] text-center w-full">
          No mentors found
        </p>
      </div>

      {/* Similar Mentors */}
      {mentors.length > 0 && (
        <div className="flex flex-col gap-[16px] px-[16px] pt-[16px]">
          <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px]">
            Similar Mentors
          </p>
          <div className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-[12px] gap-y-[12px] w-full">
            {mentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SessionsEmptyState({ sessions }: { sessions: Session[] }) {
  const [expandedSession, setExpandedSession] = useState<string | null>(
    sessions[0]?.id ?? null
  );

  return (
    <div className="flex flex-col w-full pb-[20px]">
      {/* Illustration + heading */}
      <div className="flex flex-col gap-[12px] items-center px-[16px] py-[12px]">
        <div className="h-[319px] mix-blend-darken relative w-full shrink-0">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-bottom size-full pointer-events-none"
            src={imgNotFound}
          />
        </div>
        <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] text-center w-full">
          No sessions found
        </p>
      </div>

      {/* Upcoming Sessions */}
      {sessions.length > 0 && (
        <div className="flex flex-col gap-[12px] px-[16px] pt-[16px]">
          <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px]">
            Upcoming Sessions
          </p>
          <div className="flex flex-col gap-3">
            {sessions.map((session) =>
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
        </div>
      )}
    </div>
  );
}

// ─── Mentor filter sheet ──────────────────────────────────────────────────────

function MentorFilterSheet({
  onClose,
  onShowResults,
}: {
  onClose: () => void;
  onShowResults: (filters: ActiveMentorFilters) => void;
}) {
  const [activeCategory, setActiveCategory] =
    useState<MentorFilterCategory>("Experience");
  const [sel, setSel] = useState<Record<MentorFilterCategory, Set<string>>>(
    initMentorSel()
  );

  function toggle(opt: string) {
    setSel((prev) => {
      const next = new Set(prev[activeCategory]);
      if (next.has(opt)) next.delete(opt);
      else next.add(opt);
      return { ...prev, [activeCategory]: next };
    });
  }

  function clearAll() {
    setSel(initMentorSel());
  }

  function handleShowResults() {
    // Extract gender selection (pick first if multiple selected)
    const genderSel = [...sel["Gender"]].filter((g) => g !== "No preference");
    const gender = genderSel.length > 0 ? genderSel[0] : null;

    // Extract category from Specialization mapped to tag labels
    const specSel = [...sel["Specialization"]];
    // Map Specialization options to tag keywords used in mentor data
    const SPEC_TO_TAG: Record<string, string> = {
      "Fashion Design": "Design",
      "Textile Design": "Design",
      "Fashion Styling": "Design",
      "Fashion Communication": "Marketing",
      "Product Development": "Tech",
      "Merchandising": "Career",
      "Luxury Fashion": "Finance",
      "Sustainable Fashion": "Wellness",
    };
    const category = specSel.length > 0 ? (SPEC_TO_TAG[specSel[0]] ?? null) : null;

    onShowResults({ gender, category });
    onClose();
  }

  const currentOpts = MENTOR_FILTER_OPTIONS[activeCategory];

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-[rgba(26,26,26,0.5)]"
        onClick={onClose}
      />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] z-50 bg-white rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-1px_4px_0px_rgba(26,26,26,0.6)] flex flex-col items-start overflow-hidden">
        {/* Handle */}
        <div className="flex flex-col items-center p-[16px] w-full">
          <div className="bg-[#1a1128] h-[4px] rounded-[24px] w-[32px]" />
        </div>
        {/* Title */}
        <div className="flex items-center px-[16px] pb-[12px] w-full">
          <p className="flex-1 font-['Manrope',sans-serif] font-semibold text-[#2d2040] text-[18px] leading-[28px] text-center">
            Filter
          </p>
        </div>
        {/* Primary category tabs */}
        <div className="w-full border-b border-[#e2d9ef]">
          <div
            className="flex gap-[8px] items-center px-[16px] pb-[12px] overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {MENTOR_FILTER_CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex h-[40px] items-center justify-center px-[16px] py-[10px] rounded-[12px] shrink-0 cursor-pointer border whitespace-nowrap ${
                    isActive
                      ? "bg-[#b090ef] border-[#7d3aea]"
                      : "bg-white border-[#e2d9ef]"
                  }`}
                >
                  <span
                    className={`type-tab ${
                      isActive
                        ? "font-medium text-[#2d2040]"
                        : "font-normal text-[#433059]"
                    }`}
                  >
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        {/* Secondary options */}
        <div className="w-full overflow-y-auto max-h-[260px]">
          {currentOpts.length > 0 ? (
            <div className="flex flex-wrap gap-[12px] px-[16px] pt-[20px] pb-[20px] w-full">
              {currentOpts.map((opt) => (
                <FilterChip
                  key={opt}
                  label={opt}
                  selected={sel[activeCategory].has(opt)}
                  onClick={() => toggle(opt)}
                />
              ))}
            </div>
          ) : (
            <div className="px-[16px] pt-[20px] pb-[20px]">
              <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                No sub-filters for this category.
              </p>
            </div>
          )}
        </div>
        {/* Footer CTAs */}
        <div className="flex gap-[16px] items-center pt-[12px] pb-[24px] px-[16px] w-full border-t border-[#f0ecf7]">
          <Button
  variant="ghost"
  size="lg"
  onClick={clearAll}
  className="shrink-0 !text-[#7D3AEA]"
>
            Clear All
          </Button>
          <Button variant="gradient" size="lg" onClick={handleShowResults} className="flex-1">
            Show Results
          </Button>
        </div>
      </div>
    </>
  );
}

// ─── Session filter sheet ─────────────────────────────────────────────────────

function SessionFilterSheet({
  onClose,
  onShowResults,
}: {
  onClose: () => void;
  onShowResults: (hasFilters: boolean) => void;
}) {
  const [activeCategory, setActiveCategory] =
    useState<SessionFilterCategory>("Attending");
  const [sel, setSel] = useState<Record<SessionFilterCategory, Set<string>>>(
    initSessionSel()
  );

  function toggle(opt: string) {
    setSel((prev) => {
      const next = new Set(prev[activeCategory]);
      if (next.has(opt)) next.delete(opt);
      else next.add(opt);
      return { ...prev, [activeCategory]: next };
    });
  }

  function clearAll() {
    setSel(initSessionSel());
  }

  function handleShowResults() {
    onShowResults(hasActiveSelections(sel));
    onClose();
  }

  const currentOpts = SESSION_FILTER_OPTIONS[activeCategory];

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-[rgba(26,26,26,0.5)]"
        onClick={onClose}
      />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] z-50 bg-white rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-1px_4px_0px_rgba(26,26,26,0.6)] flex flex-col items-start overflow-hidden">
        {/* Handle */}
        <div className="flex flex-col items-center p-[16px] w-full">
          <div className="bg-[#1a1128] h-[4px] rounded-[24px] w-[32px]" />
        </div>
        {/* Title */}
        <div className="flex items-center px-[16px] pb-[12px] w-full">
          <p className="flex-1 font-['Manrope',sans-serif] font-semibold text-[#2d2040] text-[18px] leading-[28px] text-center">
            Filter
          </p>
        </div>
        {/* Primary category tabs */}
        <div className="w-full border-b border-[#e2d9ef]">
          <div
            className="flex gap-[8px] items-center px-[16px] pb-[12px] overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {SESSION_FILTER_CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex h-[40px] items-center justify-center px-[16px] py-[10px] rounded-[12px] shrink-0 cursor-pointer border whitespace-nowrap ${
                    isActive
                      ? "bg-[#b090ef] border-[#7d3aea]"
                      : "bg-white border-[#e2d9ef]"
                  }`}
                >
                  <span
                    className={`type-tab ${
                      isActive
                        ? "font-medium text-[#2d2040]"
                        : "font-normal text-[#433059]"
                    }`}
                  >
                    {cat}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        {/* Secondary options */}
        <div className="w-full overflow-y-auto max-h-[260px]">
          {currentOpts.length > 0 ? (
            <div className="flex flex-wrap gap-[12px] px-[16px] pt-[20px] pb-[20px] w-full">
              {currentOpts.map((opt) => (
                <FilterChip
                  key={opt}
                  label={opt}
                  selected={sel[activeCategory].has(opt)}
                  onClick={() => toggle(opt)}
                />
              ))}
            </div>
          ) : (
            <div className="px-[16px] pt-[20px] pb-[20px]">
              <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                Select a category to see filters.
              </p>
            </div>
          )}
        </div>
        {/* Footer CTAs */}
        <div className="flex gap-[16px] items-center pt-[12px] pb-[24px] px-[16px] w-full border-t border-[#f0ecf7]">
          <Button
  variant="ghost"
  size="lg"
  onClick={clearAll}
  className="shrink-0 !text-[#7D3AEA]"
>
            Clear All
          </Button>
          <Button variant="gradient" size="lg" onClick={handleShowResults} className="flex-1">
            Show Results
          </Button>
        </div>
      </div>
    </>
  );
}

// ─── Bottom nav ───────────────────────────────────────────────────────────────


// ─── Page ─────────────────────────────────────────────────────────────────────

export function MentorsPage() {
  const [mainTab, setMainTab] = useState<MainTab>("Discover");
  const [sessionTab, setSessionTab] = useState<SessionTab>("1:1 Sessions");
  const [expandedSession, setExpandedSession] = useState<string | null>("s1");
  const [showMore, setShowMore] = useState(false);
  const [showMentorFilter, setShowMentorFilter] = useState(false);
  const [showSessionFilter, setShowSessionFilter] = useState(false);
  const [activeMentorFilters, setActiveMentorFilters] = useState<ActiveMentorFilters>({ gender: null, category: null });
  const [sessionFiltersActive, setSessionFiltersActive] = useState(false);

  // Close mentor filters/sheets when navigation occurs elsewhere in the app.
  useEffect(() => {
    function onNavigate() {
      setShowMentorFilter(false);
      setShowSessionFilter(false);
      setShowMore(false);
      setActiveMentorFilters({ gender: null, category: null });
    }
    window.addEventListener("lumio:navigate", onNavigate as EventListener);
    return () => window.removeEventListener("lumio:navigate", onNavigate as EventListener);
  }, []);

  // Auto-expand the first session whenever the session sub-tab changes.
  useEffect(() => {
    const first = sessionsData.find((s) =>
      sessionTab === "1:1 Sessions" ? s.type === "1:1" : s.type === "webinar"
    );
    setExpandedSession(first?.id ?? null);
  }, [sessionTab]);

  const filteredSessions = sessionsData.filter((s) =>
    sessionTab === "1:1 Sessions" ? s.type === "1:1" : s.type === "webinar"
  );

  const displayedPickedMentors = showMore
    ? [...pickedForYouMentors, ...additionalMentors]
    : pickedForYouMentors;

  const mentorFiltersActive = activeMentorFilters.gender !== null || activeMentorFilters.category !== null;

  // Apply AND filter logic across all mentors
  const allMentors: MentorWithMeta[] = [...topRatedMentors, ...pickedForYouMentors, ...additionalMentors];
  const filteredMentors = mentorFiltersActive
    ? allMentors.filter((m) => {
        const genderMatch = !activeMentorFilters.gender || m.gender === activeMentorFilters.gender;
        const categoryMatch = !activeMentorFilters.category || (m.tags ?? []).includes(activeMentorFilters.category);
        return genderMatch && categoryMatch;
      })
    : [];

  // Dynamic heading
  function getFilterHeading(): string {
    const { gender, category } = activeMentorFilters;
    const parts: string[] = [];
    if (gender) parts.push(gender);
    if (category) parts.push(category);
    if (parts.length === 0) return "Mentors";
    return parts.join(" ") + " Mentors";
  }

  function handleFilterClick() {
    if (mainTab === "Discover") setShowMentorFilter(true);
    else setShowSessionFilter(true);
  }

  return (
    <div className="min-h-screen bg-[#f0ecf7] flex items-start justify-center">
      <div className="w-full max-w-[800px] min-w-[360px] bg-[#fffeff] flex flex-col min-h-screen">
        <TopBar
          onFilterClick={handleFilterClick}
          searchPlaceholder={
            mainTab === "Discover"
              ? "Search mentors, skills, domain"
              : "Search Sessions"
          }
        />

        <div className="flex-1 overflow-y-auto pb-[114px]">
          <MainTabs activeTab={mainTab} onTabChange={setMainTab} />

          {mainTab === "Discover" && (
            mentorFiltersActive ? (
              filteredMentors.length === 0 ? (
                <MentorsEmptyState mentors={[...topRatedMentors, ...pickedForYouMentors].slice(0, 4)} />
              ) : (
                <div className="flex flex-col items-start w-full px-4 py-5 gap-6">
                  <div className="flex flex-col gap-4 items-start w-full">
                    <div className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] w-full">
                      {getFilterHeading()}
                    </div>
                    <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                      Showing {filteredMentors.length} Matching Mentor{filteredMentors.length !== 1 ? "s" : ""}
                    </p>
                    <div
                      className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-[12px] gap-y-[12px] w-full"
                      style={{ contentVisibility: "auto", containIntrinsicSize: "0 400px" }}
                    >
                      {filteredMentors.map((mentor) => (
                        <MentorCard key={mentor.id} mentor={mentor} />
                      ))}
                    </div>
                  </div>
                </div>
              )
            ) : (
              <div className="flex flex-col items-start w-full px-4 py-5 gap-6">
                <div className="flex flex-col gap-4 items-start w-full">
                  <div className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] w-full">
                    Top rated mentors
                  </div>
                  <div
                    className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-[12px] gap-y-[12px] w-full"
                    style={{ contentVisibility: "auto", containIntrinsicSize: "0 400px" }}
                  >
                    {topRatedMentors.map((mentor) => (
                      <MentorCard key={mentor.id} mentor={mentor} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4 items-start w-full">
                  <div className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] w-full">
                    Picked for you
                  </div>
                  <div
                    className="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-[12px] gap-y-[12px] w-full"
                    style={{ contentVisibility: "auto", containIntrinsicSize: "0 400px" }}
                  >
                    {displayedPickedMentors.map((mentor) => (
                      <MentorCard key={mentor.id} mentor={mentor} />
                    ))}
                  </div>
                  {!showMore && (
                    <ViewMoreButton onClick={() => setShowMore(true)} />
                  )}
                </div>
              </div>
            )
          )}

          {mainTab === "Upcoming Sessions" && (
            <>
              <SessionTabs activeTab={sessionTab} onTabChange={setSessionTab} />
              {sessionFiltersActive || filteredSessions.length === 0 ? (
                <SessionsEmptyState sessions={sessionsData} />
              ) : (
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
              )}
            </>
          )}
        </div>

        <BottomNav active="mentors" profileNavImg={imgProfileNav} />

        {/* Filter sheets */}
        {showMentorFilter && (
          <MentorFilterSheet
            onClose={() => setShowMentorFilter(false)}
            onShowResults={(filters) => setActiveMentorFilters(filters)}
          />
        )}
        {showSessionFilter && (
          <SessionFilterSheet
            onClose={() => setShowSessionFilter(false)}
            onShowResults={(hasFilters) => setSessionFiltersActive(hasFilters)}
          />
        )}
      </div>
    </div>
  );
}
