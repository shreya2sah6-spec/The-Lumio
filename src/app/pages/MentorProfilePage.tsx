import { useState } from "react";
import { useNavigate } from "react-router";
import { BookingReviewPage } from "./BookingReviewPage";
import {
  Star,
  ShareNetwork,
  ShareFat,
  DotsThreeVertical,
  CaretLeft,
  CaretRight,
  CaretDown,
  CaretUp,
  Clock,
  CalendarBlank,
  CalendarDots,
  Check,
  Lock,
  MagicWand,
} from "@phosphor-icons/react";
import { MentorCard, type Mentor } from "../components/MentorCard";
import { Button } from "../components/ui/button";
import { SaveButton } from "../components/SaveButton";
import { ViewMoreButton } from "../components/ViewMoreButton";

import { PageHeader } from "../components/PageHeader";

// ─── Images ──────────────────────────────────────────────────────────────────

import imgMentor from "@/imports/MentorsListing-1/256d9888e94601d5c3ad0b35893b712ad1983479.png";
import imgWebinar from "@/imports/MentorsListing-1/200308a276b1feba2bec4e28e27dda4b6aaab137.png";
import imgAbout from "@/imports/MentorsListing-1/9aecea038a5eba6222a77595fc22c0549d614720.png";
import imgProject1 from "@/imports/MentorsListing-1/af1c850daadb743337a79569abbde7a01ce4354c.png";
import imgProject2 from "@/imports/MentorsListing-1/9e04564b5d619027fe26e99798384a89ec7dbd7e.png";
import imgProject3 from "@/imports/MentorsListing-1/a21445b6a5efdaefec15a6540ac50ce7fe9c4bf8.png";
import imgRelated1 from "@/imports/MentorsListing-1/4a29d0654aaab6716cd873400f7020bd2faded80.png";
import imgRelated2 from "@/imports/MentorsListing-1/44f0132e097541fab04aec7d33348dc2876131fb.png";

// ─── Types & Data ─────────────────────────────────────────────────────────────

type Tab = "Overview" | "Reviews" | "Mentee FAQ";

const otherHighestRatedMentors: Mentor[] = [
  {
    id: "m2",
    name: "Priya Mehta",
    title: "Sr. Fashion Designer",
    company: "MAX",
    avatar: imgRelated1,
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
    title: "Lead Designer",
    company: "Myntra",
    avatar: imgRelated2,
    experience: "8 yrs exp • EX - H&M",
    rating: 4.8,
    reviews: 120,
    originalPrice: 550,
    discountedPrice: 350,
    isTopMentor: true,
  },
  {
    id: "m4",
    name: "Sneha Patel",
    title: "Lead Fashion Designer",
    company: "Anita Dongre",
    avatar: imgAbout,
    experience: "10 yrs exp • EX - Mango",
    rating: 4.6,
    reviews: 75,
    originalPrice: 580,
    discountedPrice: 250,
    isTopMentor: true,
  },
];

const mentorReviews = [
  {
    avatar: imgRelated1,
    name: "Ananya Sharma",
    role: "Fashion Design Student",
    rating: 5,
    title: "Transformative mentorship experience",
    text: "Shruti's mentorship completely transformed my approach to fashion design. Her insights on pattern making and fabric selection were invaluable. She takes time to understand your goals and provides actionable feedback that accelerates your growth.",
  },
  {
    avatar: imgRelated2,
    name: "Rahul Verma",
    role: "Jr. Designer",
    rating: 5,
    title: "Incredibly supportive mentor",
    text: "I had an amazing experience with Shruti. Her guidance on portfolio building and industry navigation helped me land my first job. She's patient, encouraging, and genuinely invested in her mentees' success.",
  },
  {
    avatar: imgAbout,
    name: "Priya Nair",
    role: "Design Intern",
    rating: 4,
    title: "Practical industry knowledge",
    text: "Shruti brings real-world experience to every session. Her advice on garment construction techniques and dealing with production challenges has been eye-opening. Highly recommend for anyone serious about fashion design.",
  },
  {
    avatar: imgRelated1,
    name: "Anonymous",
    role: "",
    rating: 5,
    title: "Best investment in my career",
    text: "The mentorship sessions with Shruti were the best investment I made in my design career. She helped me refine my aesthetic, build confidence, and understand the business side of fashion. Her network and industry connections are also invaluable.",
  },
  {
    avatar: imgRelated2,
    name: "Kavya Reddy",
    role: "Fashion Student",
    rating: 4,
    title: "Excellent technical guidance",
    text: "Shruti's technical knowledge is exceptional. She taught me advanced draping techniques and how to work with difficult fabrics. Her feedback is always constructive and helps you improve quickly.",
  },
  {
    avatar: imgAbout,
    name: "Arjun Malhotra",
    role: "Design Graduate",
    rating: 5,
    title: "Career-changing mentorship",
    text: "Working with Shruti changed the trajectory of my career. Her mentorship helped me transition from student work to professional-level designs. She's generous with her time and genuinely cares about seeing her mentees succeed.",
  },
];

const mentorFAQs = [
  {
    question: "How can I stand out as a junior designer early in my career?",
    answer:
      "Focus on mastering fundamentals, being reliable, and showing initiative—small details, consistency, and attitude matter more than flashy ideas at this stage.",
  },
  {
    question:
      "What are the essential skills I should focus on developing as a new designer?",
    answer:
      "Start with strong technical skills in pattern making, garment construction, and fabric knowledge. Build your understanding of color theory and fit analysis. Most importantly, develop your ability to take feedback and iterate quickly on designs.",
  },
  {
    question:
      "How do I effectively network and build connections in the design industry?",
    answer:
      "Attend industry events, workshops, and fashion weeks. Be genuine in your interactions and focus on building real relationships rather than just collecting contacts. Follow up with people you meet and stay engaged with the design community on social media.",
  },
  {
    question:
      "What should I include in my design portfolio to attract potential employers?",
    answer:
      "Showcase 8-12 of your best projects that demonstrate range and depth. Include your design process from concept sketches to final pieces. Make sure each project tells a story and shows your problem-solving abilities. Keep it updated with your latest work.",
  },
  {
    question:
      "How can I balance creativity with commercial viability in my designs?",
    answer:
      "Understand your target market and their needs while maintaining your unique design perspective. Study successful brands that balance both aspects. Learn to present creative ideas in ways that highlight their business value and market appeal.",
  },
];

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

// ─── Bottom nav ───────────────────────────────────────────────────────────────


// ─── Review card ──────────────────────────────────────────────────────────────

function ReviewCard({
  avatar,
  name,
  role,
  rating,
  title,
  text,
}: {
  avatar: string;
  name: string;
  role: string;
  rating: number;
  title: string;
  text: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const preview = text.slice(0, 110);
  const hasMore = text.length > 110;
  return (
    <div className="flex flex-col gap-[8px] items-start w-full border-b border-[#e2d9ef] pb-[16px]">
      <div className="flex gap-[12px] items-center w-full">
        <div className="relative shrink-0 size-[54px] rounded-full overflow-hidden border border-[#e2d9ef]">
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            src={avatar}
          />
        </div>
        <div className="flex flex-col flex-1 min-w-px">
          <p className="font-['Manrope',sans-serif] font-medium text-[#2d2040] text-[16px] leading-[25px] tracking-[0.16px] truncate">
            {name}
          </p>
          {role && (
            <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[14px] leading-[21px] truncate">
              {role}
            </p>
          )}
        </div>
      </div>
      <div className="flex gap-[8px] items-center w-full">
        <p className="flex-1 font-['Manrope',sans-serif] font-medium text-[#2d2040] text-[16px] leading-[25px] tracking-[0.16px] truncate min-w-px">
          {title}
        </p>
        <div className="flex gap-[4px] items-center shrink-0">
          <Star size={12} color="#1A1128" weight="fill" />
          <span className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[12px] leading-[18px] tracking-[0.24px]">
            {rating}
          </span>
        </div>
      </div>
      <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px]">
        {expanded ? text : hasMore ? `${preview}…` : text}
      </p>
      {hasMore && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex gap-[6px] items-center cursor-pointer"
        >
          <span className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">
            {expanded ? "Read less" : "Read more"}
          </span>
          {expanded ? (
            <CaretUp size={14} color="#6B5F7A" />
          ) : (
            <CaretDown size={14} color="#6B5F7A" />
          )}
        </button>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function MentorProfilePage() {
  const navigate = useNavigate();
  const [showBookingReview, setShowBookingReview] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [selectedDateIdx, setSelectedDateIdx] = useState(0);
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [expandedFAQs, setExpandedFAQs] = useState<Set<number>>(new Set([0])); // First FAQ expanded by default
  const [visibleFAQCount, setVisibleFAQCount] = useState(3);

  const BASE_DATE = new Date(2026, 4, 25); // Monday May 25 2026
  const WEEKDAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(BASE_DATE);
    d.setDate(BASE_DATE.getDate() + weekOffset * 7 + i);
    return {
      day: WEEKDAY_NAMES[d.getDay()],
      date: d.getDate(),
      month: MONTH_NAMES[d.getMonth()],
      fullDate: d,
    };
  });

  const selectedFullDate = dates[selectedDateIdx];
  const selectedDayName = selectedFullDate
    ? `${["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][selectedFullDate.fullDate.getDay()]} - ${selectedFullDate.date} ${selectedFullDate.month}`
    : "";

  // Dynamic time slots based on selected date
  const getTimeSlotsForDate = (dateIdx: number) => {
    const allSlots = [
      "9:00 - 10:00 AM",
      "10:00 - 11:00 AM",
      "11:00 AM - 12:00 PM",
      "12:00 - 1:00 PM",
      "1:00 - 2:00 PM",
      "2:00 - 3:00 PM",
      "3:00 - 4:00 PM",
      "4:00 - 5:00 PM",
      "5:00 - 6:00 PM",
      "6:00 - 7:00 PM",
    ];

    // Return exactly 6 slots per day
    const dayOfWeek = dates[dateIdx]?.fullDate.getDay();

    // Weekend: different 6 slots
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return [
        allSlots[0],
        allSlots[2],
        allSlots[4],
        allSlots[5],
        allSlots[7],
        allSlots[9],
      ];
    }

    // Weekday: 6 slots (skip lunch hour)
    return [
      allSlots[0],
      allSlots[1],
      allSlots[2],
      allSlots[4],
      allSlots[6],
      allSlots[8],
    ];
  };

  const timeSlots = getTimeSlotsForDate(selectedDateIdx);

  const skills = [
    "Pattern Making",
    "Fabric Knowledge",
    "Garment Construction",
    "Fit Analysis",
    "Color Theory",
    "Trend Forecasting",
    "Technical Sketching",
    "Draping",
  ];

  const displayedSkills = showAllSkills ? skills : skills.slice(0, 4);

  const footerHeight = 178; // Footer height for proper scroll padding

  if (showBookingReview) {
    return <BookingReviewPage onBack={() => setShowBookingReview(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#fffeff] flex items-start justify-center">
      <div className="w-full max-w-[800px] min-w-[360px] bg-[#fffeff] flex flex-col min-h-screen">
        <StatusBar />

        <PageHeader
          title="Mentor's Profile"
          onBack={() => navigate("/mentors")}
          rightAction={
            <button className="p-2 cursor-pointer">
              <ShareFat size={24} color="#6B5F7A" />
            </button>
          }
          sticky
          shadow
        />

        <div className="flex-1 overflow-y-auto">
          {/* Mentor Hero Section */}
          <div className="bg-[#fffeff] px-4 pt-5 pb-3">
            {/* Image and Action Buttons Row */}
            <div className="flex justify-between items-center mb-3">
              <div className="relative shrink-0 size-[72px] rounded-full overflow-hidden border-2 border-[#e2d9ef]">
                <img
                  src={imgMentor}
                  alt="Shruti Jain"
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div className="flex gap-2 items-center">
                <Button
                  onClick={() => setFollowed(!followed)}
                  variant={followed ? "subtle" : "outline"}
                  size="sm"
                  className="text-[#7d3aea]"
                >
                  {followed && (
                    <Check size={16} weight="bold" color="#7D3AEA" />
                  )}
                  <span style={{ color: "#7D3AEA" }}>
                    {followed ? "Followed" : "Follow"}
                  </span>
                </Button>
                <SaveButton
                  saved={saved}
                  onToggle={setSaved}
                  className="bg-[#fffeff] border border-[#e2d9ef] rounded-[8px] transition-all active:scale-95"
                />
                <button className="h-[40px] w-[40px] bg-[#fffeff] border border-[#e2d9ef] rounded-[8px] flex items-center justify-center transition-all active:scale-95">
                  <DotsThreeVertical size={18} color="#6B5F7A" />
                </button>
              </div>
            </div>

            {/* Profile Details Section */}
            <div className="mb-[2px]">
              <div className="flex items-center justify-between mb-1">
                <h1 className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[18px] leading-[24px]">
                  Shruti Jain
                </h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-[4px] bg-[#fffeff]">
                    <Star size={12} weight="fill" color="#1A1128" />
                    <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[12px] leading-[18px]">
                      4.9
                    </span>
                    <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px]">
                      (120)
                    </span>
                  </div>
                  <div className="bg-gradient-to-l from-[rgba(247,181,0,0.4)] to-[rgba(254,250,225,0.4)] py-0.5 rounded-[4px] px-[8px] py-[4px]">
                    <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[12px] leading-[18px]">
                      Top 1%
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[20px] mb-1">
                Sr. Fashion Designer @ MAX Fashion
              </p>
              <div className="flex flex-wrap gap-1.5 text-[12px] text-[#6b5f7a] font-['Manrope',sans-serif] mb-1">
                <span>7 yrs exp</span>
                <span>•</span>
                <span>Ex-Zara</span>
                <span>•</span>
                <span className="font-m text-[12px]edium">
                  Trained 500+ designers
                </span>
              </div>
              <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[20px]">
                Usually responds within 24 hours
              </p>
            </div>

            <div className="rounded-[8px] p-[0px]">
              <div className="flex items-baseline gap-2">
                <span className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[14px] line-through">
                  ₹600
                </span>
                <span className="inline-block font-['Roboto_Serif',serif] font-semibold leading-[36px] font-[Manrope] text-[16px] text-[#1a1128]">
                  ₹300
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px]">
                    /hr
                  </span>
                  <span className="font-['Manrope',sans-serif] font-medium text-[12px] leading-[18px] text-[#1a1128]">
                    + Free Chat for 10 days
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="bg-[#fffeff] px-4 py-3">
            <h2 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] mb-3">
              Book a 1:1 session
            </h2>

            {/* Date navigation row */}
            <div className="flex items-center mb-4">
              <CalendarDots
                size={18}
                color="#1A1128"
                className="mr-2 flex-shrink-0"
              />
              <span className="font-['Manrope',sans-serif] text-[15px] font-semibold text-[#1a1128]">
                {selectedDayName}
              </span>
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => {
                    setWeekOffset((w) => w - 1);
                    setSelectedDateIdx(0);
                    setSelectedTime(null);
                  }}
                  className="w-8 h-8 rounded-full border border-[#C8BBDA] flex items-center justify-center hover:bg-[#f5f0ff] active:bg-[#ede5ff] transition-colors disabled:opacity-40"
                >
                  <CaretLeft size={16} color="#6B5F7A" />
                </button>
                <button
                  onClick={() => {
                    setWeekOffset((w) => w + 1);
                    setSelectedDateIdx(0);
                    setSelectedTime(null);
                  }}
                  className="w-8 h-8 rounded-full border border-[#C8BBDA] flex items-center justify-center hover:bg-[#f5f0ff] active:bg-[#ede5ff] transition-colors"
                >
                  <CaretRight size={16} color="#6B5F7A" />
                </button>
              </div>
            </div>

            {/* Time chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-[16px] py-[8px] rounded-[4px] font-['Manrope',sans-serif] text-[16px] leading-[24px] transition-all ${
                    selectedTime === time
                      ? "bg-[#fffeff] text-[#2d2040] border border-[#7d3aea]"
                      : "bg-[#fffeff] text-[#6b5f7a] border border-[#e2d9ef]"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Webinar */}
          <div className="bg-[#fffeff] px-4 py-3 mt-1">
            <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-4">
              Webinar
            </h3>
            <div className="rounded-[12px] overflow-hidden mb-3">
              <img
                src={imgWebinar}
                alt="Webinar"
                className="w-full h-[268px] object-cover"
              />
            </div>
          </div>

          {/* Sticky Tabs */}
          <div className="sticky top-[60px] z-10 w-full border-b border-[#e2d9ef] bg-[#fffeff]">
            <div className="flex gap-3 px-4">
              {(["Overview", "Reviews", "Mentee FAQ"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="flex-1 h-[44px] px-1 relative transition-all"
                >
                  <span
                    className={`font-['Manrope',sans-serif] text-[15px] whitespace-nowrap transition-all ${
                      activeTab === tab
                        ? "font-semibold text-[#1a1128]"
                        : "font-normal text-[#6b5f7a]"
                    }`}
                  >
                    {tab}
                  </span>
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7d3aea] rounded-t-[2px] transition-all" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div style={{ paddingBottom: `${footerHeight}px` }}>
            {activeTab === "Overview" && (
              <>
                {/* About Me */}
                <div className="bg-[#fffeff] px-4 py-3 mt-1">
                  <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-2">
                    About Me
                  </h3>
                  <img
                    src={imgAbout}
                    alt="About Me"
                    className="w-full h-[240px] object-cover rounded-[8px]"
                  />
                </div>

                {/* Recent Projects */}
                <div className="bg-[#fffeff] py-3 mt-1">
                  <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-4 px-4">
                    Recent projects
                  </h3>
                  <div className="flex gap-3 overflow-x-auto px-4 scrollbar-hide snap-x snap-mandatory">
                    {[
                      {
                        img: imgProject1,
                        title: "Spring Collection 2024",
                        category: "Fashion Design",
                        date: "Dec 2024",
                      },
                      {
                        img: imgProject2,
                        title: "Sustainable Textiles",
                        category: "R&D Project",
                        date: "Nov 2024",
                      },
                      {
                        img: imgProject3,
                        title: "Minimalist Wardrobe",
                        category: "Capsule Collection",
                        date: "Oct 2024",
                      },
                    ].map((project, i) => (
                      <div
                        key={i}
                        className="shrink-0 w-[200px] snap-center bg-white rounded-[8px] border border-[rgba(157,148,170,0.4)] overflow-hidden"
                      >
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-[120px] object-cover"
                        />
                        <div className="px-[12px] py-[10px] flex flex-col gap-[4px]">
                          <p className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">
                            {project.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="bg-[#fffeff] px-4 py-3 mt-1">
                  <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-4">
                    Experience
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-3 items-center">
                      <div className="size-[30px] bg-[#f5f0ff] rounded-[8px] flex items-center justify-center shrink-0">
                        <span className="font-['Roboto_Serif',serif] font-bold text-[#7d3aea] text-[16px]">
                          M
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[16px] leading-[24px]">
                          MAX Fashion
                        </h4>
                        <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[20px]">
                          Sr. Fashion Designer
                        </p>
                      </div>
                      <span className="shrink-0 bg-[#f7f4fa] px-[12px] py-[8px] rounded-[4px] font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[16px]">
                        2020 - Present
                      </span>
                    </div>
                    <div className="h-px bg-[#e2d9ef]" />
                    <div className="flex gap-3 items-center">
                      <div className="size-[30px] bg-[#f5f0ff] rounded-[8px] flex items-center justify-center shrink-0">
                        <span className="font-['Roboto_Serif',serif] font-bold text-[#7d3aea] text-[16px]">
                          Z
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[16px] leading-[24px]">
                          Zara
                        </h4>
                        <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[20px]">
                          Junior Fashion Designer
                        </p>
                      </div>
                      <span className="shrink-0 bg-[#f7f4fa] px-[12px] py-[8px] rounded-[4px] font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[16px]">
                        2018 - 2020
                      </span>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="bg-[#fffeff] px-4 py-3 mt-1">
                  <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-4">
                    Education
                  </h3>
                  <div className="flex gap-3 items-center">
                    <div className="size-[30px] bg-[#f5f0ff] rounded-[8px] flex items-center justify-center shrink-0">
                      <span className="font-['Roboto_Serif',serif] font-bold text-[#7d3aea] text-[16px]">
                        P
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[16px] leading-[24px]">
                        Pearl Academy
                      </h4>
                      <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[20px]">
                        Bachelor of Design in Fashion Design
                      </p>
                    </div>
                    <span className="shrink-0 bg-[#f7f4fa] px-[12px] py-[8px] rounded-[4px] font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[16px]">
                      2014 - 2018
                    </span>
                  </div>
                </div>

                {/* Top Skills */}
                <div className="bg-[#fffeff] px-4 py-3 mt-1">
                  <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-4">
                    Top Skills
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-5">
                    {displayedSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 border border-[#e2d9ef] rounded font-['Manrope',sans-serif] font-normal text-[#433059] text-[13px] leading-[20px] bg-[#fffeff]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {!showAllSkills && (
                    <Button
                      onClick={() => setShowAllSkills(true)}
                      variant="ghost"
                      size="sm"
                      className="w-full text-[#7d3aea]"
                    >
                      <span className="text-[#7d3aea]">View More</span>
                      <CaretDown size={16} color="#7D3AEA" />
                    </Button>
                  )}
                </div>

                {/* Other Highest Rated Mentors */}
                <div className="bg-[#fffeff] py-3 mt-1 mb-2">
                  <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-4 px-4">
                    Other highest rated mentors
                  </h3>
                  <div
                    className="flex gap-3 overflow-x-auto px-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
                    style={{ scrollSnapType: "x mandatory" }}
                  >
                    {otherHighestRatedMentors.map((mentor) => (
                      <div
                        key={mentor.id}
                        className="shrink-0 snap-center w-[180px]"
                      >
                        <MentorCard mentor={mentor} />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === "Reviews" && (
              <div className="flex flex-col gap-[24px] items-center pb-[20px] pt-[16px] px-[16px]">
                {/* Mentorship insights */}
                <div className="drop-shadow-[0px_1px_2px_rgba(132,111,132,0.12)] flex flex-col items-start w-full">
                  <div
                    className="mb-[-16px] relative rounded-tl-[12px] rounded-tr-[12px] w-full pb-[32px] pt-[16px] px-[16px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(264.845deg, rgb(254, 240, 210) 5.872%, rgb(254, 250, 225) 88.229%)",
                    }}
                  >
                    <div className="flex gap-[12px] items-center">
                      <MagicWand size={20} color="#1A1128" weight="fill" />
                      <p className="font-['Manrope',sans-serif] font-semibold text-[#2d2040] text-[18px] leading-[28px]">
                        Mentorship insights
                      </p>
                    </div>
                  </div>
                  <div className="bg-white relative rounded-[12px] w-full border border-[#e2d9ef]">
                    <div className="flex flex-col items-start px-[16px] py-[12px]">
                      <ul className="list-disc pl-[20px] flex flex-col gap-[2px]">
                        <li>
                          <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">
                            Expert guidance:{" "}
                          </span>
                          <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                            Shruti provides personalized mentorship with
                            real-world fashion industry expertise.
                          </span>
                        </li>
                        <li>
                          <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">
                            Career acceleration:{" "}
                          </span>
                          <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                            Mentees report significant improvements in skills
                            and career opportunities.
                          </span>
                        </li>
                        <li>
                          <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">
                            Supportive approach:{" "}
                          </span>
                          <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                            Patient, encouraging teaching style with actionable
                            feedback for continuous growth.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {mentorReviews.slice(0, visibleReviews).map((review, i) => (
                  <ReviewCard key={i} {...review} />
                ))}

                {visibleReviews < mentorReviews.length && (
                  <ViewMoreButton
                    onClick={() =>
                      setVisibleReviews((v) =>
                        Math.min(v + 3, mentorReviews.length)
                      )
                    }
                  />
                )}

                {/* Other Highest Rated Mentors */}
                <div className="flex flex-col gap-[16px] items-start w-full border-t border-[#f0ecf7] pt-[20px]">
                  <p className="font-['Roboto_Serif',serif] font-semibold text-[#2d2040] text-[20px] leading-[28px] w-full">
                    Other highest rated mentors
                  </p>
                  <div
                    className="flex gap-3 overflow-x-auto w-full scrollbar-hide snap-x snap-mandatory scroll-smooth"
                    style={{ scrollSnapType: "x mandatory" }}
                  >
                    {otherHighestRatedMentors.map((mentor) => (
                      <div
                        key={mentor.id}
                        className="shrink-0 snap-center w-[180px]"
                      >
                        <MentorCard mentor={mentor} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Mentee FAQ" && (
              <div className="bg-[#fffeff] px-4 py-12">
                {/* FAQ List */}
                <div className="flex flex-col gap-[4px] items-start w-full">
                  {mentorFAQs.slice(0, visibleFAQCount).map((faq, index) => {
                    const isExpanded = expandedFAQs.has(index);
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          const newExpanded = new Set(expandedFAQs);
                          if (isExpanded) {
                            newExpanded.delete(index);
                          } else {
                            newExpanded.add(index);
                          }
                          setExpandedFAQs(newExpanded);
                        }}
                        className="flex flex-col gap-[8px] items-start py-[12px] w-full cursor-pointer text-left"
                      >
                        {/* Question Row */}
                        <div className="flex gap-[8px] items-center w-full">
                          <div className="flex-1 min-w-px font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tracking-[0.16px]">
                            {index + 1}. {faq.question}
                          </div>
                          <div className="overflow-clip relative shrink-0 size-[24px]">
                            <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]">
                              <svg
                                className={`absolute block inset-0 size-full transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 16.5008 9.00101"
                              >
                                <path
                                  d="M16.281 1.28104L8.78104 8.78104C8.71139 8.85077 8.62867 8.90609 8.53762 8.94384C8.44657 8.98158 8.34898 9.00101 8.25042 9.00101C8.15186 9.00101 8.05426 8.98158 7.96321 8.94384C7.87216 8.90609 7.78945 8.85077 7.71979 8.78104L0.219792 1.28104C0.0790615 1.14031 0 0.94944 0 0.750417C0 0.551394 0.0790615 0.360522 0.219792 0.219792C0.360523 0.0790612 0.551394 0 0.750417 0C0.94944 0 1.14031 0.0790612 1.28104 0.219792L8.25042 7.1901L15.2198 0.219792C15.2895 0.150109 15.3722 0.0948337 15.4632 0.0571218C15.5543 0.0194098 15.6519 0 15.7504 0C15.849 0 15.9465 0.0194098 16.0376 0.0571218C16.1286 0.0948337 16.2114 0.150109 16.281 0.219792C16.3507 0.289474 16.406 0.3722 16.4437 0.463245C16.4814 0.554289 16.5008 0.651871 16.5008 0.750417C16.5008 0.848963 16.4814 0.946545 16.4437 1.03759C16.406 1.12863 16.3507 1.21136 16.281 1.28104Z"
                                  fill="#6B5F7A"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Answer (expandable) */}
                        {isExpanded && (
                          <div className="flex gap-[12px] items-center w-full">
                            <div className="h-full relative shrink-0 w-0">
                              <div className="absolute inset-[0_-0.5px]">
                                <svg
                                  className="block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 1 63"
                                >
                                  <path d="M0.5 0V63" stroke="#E2D9EF" />
                                </svg>
                              </div>
                            </div>
                            <div className="flex-1 min-w-px font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                              {faq.answer}
                            </div>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* View More Button */}
                {visibleFAQCount < mentorFAQs.length && (
                  <ViewMoreButton
                    onClick={() => setVisibleFAQCount(mentorFAQs.length)}
                    label={`View ${mentorFAQs.length - visibleFAQCount} More`}
                    className="mt-[16px]"
                  />
                )}

                {/* Other Highest Rated Mentors */}
                <div className="mt-6 -mx-4">
                  <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-4 px-4">
                    Other highest rated mentors
                  </h3>
                  <div
                    className="flex gap-3 overflow-x-auto px-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
                    style={{ scrollSnapType: "x mandatory" }}
                  >
                    {otherHighestRatedMentors.map((mentor) => (
                      <div
                        key={mentor.id}
                        className="shrink-0 snap-center w-[180px]"
                      >
                        <MentorCard mentor={mentor} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sticky Footer - All Tabs */}
        <div className="fixed bottom-0 left-0 right-0 z-30 shadow-[0px_-2px_8px_rgba(0,0,0,0.06)]">
          <div className="max-w-[800px] mx-auto bg-[#fffeff]">
            {/* Unlock Chat Banner */}
            <div className="bg-[#f5f0ff] px-4 py-3 rounded-t-[8px]">
              <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[14px] leading-[20px] text-center">
                Chat will be unlocked after the call is booked.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="bg-[#fffeff] px-4 pt-3 pb-2 flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="h-[44px] px-6 font-[Manrope] gap-2 text-[#7d3aea]"
              >
                <div className="w-[24px] h-[24px] flex items-center justify-center shrink-0">
                  <Lock width={18} height={20} color="#7D3AEA" />
                </div>
                <span style={{ color: "#7D3AEA" }}>Chat</span>
              </Button>
              <Button
                variant="gradient"
                size="lg"
                className="flex-1 font-['Manrope',sans-serif]"
                onClick={() => setShowBookingReview(true)}
              >
                Book the Sessions
              </Button>
            </div>

            {/* Safe Area */}
            <div className="h-[46px] w-full bg-[#fffeff] flex items-end justify-center pb-[7.69px]">
              <div className="bg-[#1a1128] h-[4.808px] rounded-[200px] w-[128.846px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
