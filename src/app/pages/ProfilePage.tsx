import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Star, CaretDown, CaretUp, Users, House, Briefcase, Plus, SuitcaseSimple, MagicWand
} from "@phosphor-icons/react";
import svgPaths from "@/imports/ProfileOverview-2/svg-n8z2v8xsv9";
import imgAvatar from "@/imports/ProfileOverview-2/bb5b0e0896cc0396e3c8e2b6811f344da7f15455.png";
import imgAboutImage from "@/imports/ProfileOverview-2/76ae4b7f2a4ed92c5b6590f918eac3b778e97c34.png";
import imgPostThumbnail from "@/imports/ProfileOverview-2/f83af4323ed17349164f483c50d5e9e721cbbfcd.png";
import imgPostThumbnail1 from "@/imports/ProfileOverview-2/d2a322f16c751ceb728333861c7d0f4601574181.png";
import imgImage from "@/imports/ProfileOverview-2/06ad09815f36bc85c8e439ebc39c81c3608d88de.png";
import imgImage1 from "@/imports/ProfileOverview-2/8d8cb47d126979904b08090e24b75a94fa6cfcaf.png";
import imgAvatarImage from "@/imports/ProfileOverview-2/40a55e11240d1f280bd2d46727f4c3745c016d02.png";
import imgAvatarImage1 from "@/imports/ProfileOverview-2/e21bfbc91d761c7bd6af9e2636361814de15e5dd.png";
import imgAvatarImage2 from "@/imports/ProfileOverview-2/1ba86bd95c41542063481b8e7645f2f1062e44a0.png";
import imgProfileNav from "@/imports/HomeProfileCompletion-1/cc599dc2703aa419b7d1aaf01dd41d54373d9628.png";
import imgReviewer1 from "@/imports/MentorsListing-1/4a29d0654aaab6716cd873400f7020bd2faded80.png";
import imgReviewer2 from "@/imports/MentorsListing-1/44f0132e097541fab04aec7d33348dc2876131fb.png";
import imgReviewer3 from "@/imports/MentorsListing-1/9aecea038a5eba6222a77595fc22c0549d614720.png";

const statusBarPaths = {
  signalBars: "M3.26916 9.60239C3.8002 9.60239 4.23107 10.0333 4.23107 10.5643V12.4872C4.23107 13.0182 3.8002 13.4491 3.26916 13.4491H2.30724C1.77641 13.4488 1.3463 13.018 1.3463 12.4872V10.5643C1.3463 10.0334 1.77641 9.60263 2.30724 9.60239H3.26916ZM7.75646 7.67954C8.28748 7.67956 8.71837 8.11043 8.71837 8.64145V12.4872C8.71837 13.0182 8.28748 13.449 7.75646 13.4491H6.79455C6.26365 13.4489 5.83361 13.0181 5.83361 12.4872V8.64145C5.83361 8.11052 6.26365 7.67971 6.79455 7.67954H7.75646ZM12.2438 5.43637C12.7747 5.43647 13.2046 5.86638 13.2047 6.39731V12.4872C13.2047 13.0181 12.7747 13.449 12.2438 13.4491H11.2819C10.7509 13.449 10.3209 13.0181 10.3209 12.4872V6.39731C10.321 5.86639 10.7509 5.43648 11.2819 5.43637H12.2438ZM16.7311 3.19223C17.262 3.1924 17.692 3.6232 17.692 4.15415V12.4872C17.692 13.0181 17.262 13.4489 16.7311 13.4491H15.7692C15.2381 13.449 14.8072 13.0182 14.8072 12.4872V4.15415C14.8072 3.62313 15.2381 3.19227 15.7692 3.19223H16.7311Z",
  wifi: "M5.86291 11.2694C7.08941 10.2323 8.88553 10.2321 10.1119 11.2694C10.1736 11.3252 10.2098 11.404 10.2115 11.4872C10.2132 11.5703 10.1801 11.6506 10.1207 11.7088L8.19982 13.6473C8.14355 13.7041 8.06686 13.7362 7.98693 13.7362C7.90698 13.7361 7.83028 13.7041 7.77404 13.6473L5.85314 11.7088C5.79385 11.6505 5.76154 11.5703 5.7633 11.4872C5.76508 11.404 5.80118 11.3251 5.86291 11.2694ZM3.29943 8.68442C5.94193 6.22636 10.0349 6.22636 12.6774 8.68442C12.7367 8.74203 12.7703 8.82142 12.7711 8.90415C12.7718 8.98686 12.7395 9.06614 12.6813 9.12485L11.5709 10.2469C11.4566 10.3613 11.2723 10.364 11.1549 10.2528C10.2871 9.46701 9.15759 9.03201 7.98693 9.03208C6.81713 9.03263 5.68901 9.46758 4.82189 10.2528C4.70455 10.364 4.52022 10.3613 4.40587 10.2469L3.29552 9.12485C3.23716 9.06621 3.20403 8.98688 3.2047 8.90415C3.20548 8.82134 3.23996 8.74203 3.29943 8.68442ZM0.736929 6.10532C4.78991 2.22126 11.184 2.22118 15.2369 6.10532C15.2956 6.16301 15.3282 6.24181 15.3287 6.32407C15.3292 6.40622 15.2977 6.48544 15.2399 6.5438L14.1276 7.66587C14.0131 7.78071 13.8278 7.78193 13.7115 7.6688C12.1674 6.20072 10.1176 5.38178 7.98693 5.38169C5.85613 5.38174 3.80665 6.20067 2.26232 7.6688C2.14611 7.7823 1.95977 7.78115 1.84533 7.66587L0.733999 6.5438C0.676061 6.48537 0.643616 6.40635 0.644156 6.32407C0.644697 6.24178 0.678219 6.16298 0.736929 6.10532Z",
  batteryOutline: "M3.02599 2.71124H19.0514C20.2019 2.71129 21.1344 3.64466 21.1344 4.79522V10.5638C21.1344 11.7143 20.2019 12.6477 19.0514 12.6478H3.02599C1.8754 12.6478 0.942008 11.7144 0.942008 10.5638V4.79522C0.942008 3.64463 1.8754 2.71124 3.02599 2.71124Z",
  batteryTip: "M22.5769 5.75643V9.60258C23.3507 9.27684 23.8539 8.51906 23.8539 7.67951C23.8539 6.83996 23.3507 6.08218 22.5769 5.75643",
  batteryFill: "M2.38462 5.4359C2.38462 4.72784 2.95861 4.15385 3.66667 4.15385H18.4103C19.1183 4.15385 19.6923 4.72784 19.6923 5.4359V9.92308C19.6923 10.6311 19.1183 11.2051 18.4103 11.2051H3.66667C2.95861 11.2051 2.38462 10.6311 2.38462 9.92308V5.4359Z",
};

type Tab = "Overview" | "Mentors review" | "Mentee review" | "Mentee FAQ";

// Sample data
const mentorReviews = [
  { avatar: imgReviewer1, name: "Ananya Sharma", role: "Sr. Fashion Designer @ MAX", rating: 5, title: "Amazing mentor and guide", text: "Sanya has been an incredible mentor. Her guidance on pattern making and fabric selection was invaluable. She takes time to understand your goals and provides actionable feedback that accelerates growth." },
  { avatar: imgReviewer2, name: "Rahul Verma", role: "Lead Designer @ Myntra", rating: 5, title: "Exceptional design thinking", text: "Working with Sanya transformed my approach to fashion design. Her insights on garment construction and industry navigation helped me advance my career significantly." },
  { avatar: imgReviewer3, name: "Priya Nair", role: "Fashion Consultant", rating: 4, title: "Great industry knowledge", text: "Sanya brings real-world experience to every session. Her advice on design techniques and dealing with production challenges has been eye-opening." },
];

const menteeReviews = [
  { avatar: imgReviewer1, name: "Kavya Reddy", role: "Fashion Design Student", rating: 5, title: "Best mentee experience", text: "Learning from Sanya has been transformative. Her patience and clear explanations made complex concepts easy to understand. Highly recommend!" },
  { avatar: imgReviewer2, name: "Arjun Malhotra", role: "Design Intern", rating: 5, title: "Career-changing mentorship", text: "Sanya's guidance helped me transition from student work to professional-level designs. She's generous with her time and genuinely cares about seeing mentees succeed." },
  { avatar: imgReviewer3, name: "Neha Singh", role: "Jr. Designer", rating: 4, title: "Excellent technical guidance", text: "Sanya's technical knowledge is exceptional. She taught me advanced draping techniques and how to work with difficult fabrics." },
];

const faqs = [
  {
    question: "How can I stand out as a junior designer early in my career?",
    answer: "Focus on mastering fundamentals, being reliable, and showing initiative—small details, consistency, and attitude matter more than flashy ideas at this stage."
  },
  {
    question: "What's the best way to build a strong design portfolio?",
    answer: "Include diverse projects that showcase your range, process, and problem-solving skills. Quality over quantity—each piece should tell a story about your design thinking."
  },
  {
    question: "How do I transition from student to professional design work?",
    answer: "Start by seeking internships or freelance projects. Learn industry workflows, collaborate with teams, and be open to feedback. Build connections and keep learning."
  },
  {
    question: "What skills are most important for fashion designers today?",
    answer: "Technical skills like pattern making and garment construction are essential, but also develop strong communication, digital tools proficiency, and understanding of sustainable practices."
  },
  {
    question: "How do I handle creative blocks?",
    answer: "Step away and seek inspiration outside fashion—art, nature, architecture. Keep a mood board, sketch freely without judgment, and collaborate with others to get fresh perspectives."
  },
];

function StatusBar() {
  return (
    <div className="w-full bg-[#fffeff] flex h-[44px] items-center justify-between px-4 py-2 shrink-0">
      <p className="font-['Roboto',sans-serif] font-normal text-[14.423px] leading-[20.192px] text-[#1a1128] tracking-[-0.3077px]">9:41</p>
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

function ReviewCard({ avatar, name, role, rating, title, text }: { avatar: string; name: string; role: string; rating: number; title: string; text: string }) {
  const [expanded, setExpanded] = useState(false);
  const preview = text.slice(0, 110);
  const hasMore = text.length > 110;
  return (
    <div className="flex flex-col gap-[8px] items-start w-full border-b border-[#e2d9ef] pb-[16px]">
      <div className="flex gap-[12px] items-center w-full">
        <div className="relative shrink-0 size-[54px] rounded-full overflow-hidden border border-[#e2d9ef]">
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={avatar} />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <p className="font-['Manrope',sans-serif] font-medium text-[#2d2040] text-[16px] leading-[25px] tracking-[0.16px] truncate">{name}</p>
          {role && <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[14px] leading-[21px] truncate">{role}</p>}
        </div>
      </div>
      <div className="flex gap-[8px] items-center w-full">
        <p className="flex-1 font-['Manrope',sans-serif] font-medium text-[#2d2040] text-[16px] leading-[25px] tracking-[0.16px] truncate min-w-0">{title}</p>
        <div className="flex gap-[4px] items-center shrink-0 h-[18px]">
          <div className="flex items-center justify-center h-full">
            <Star size={12} color="#1A1128" weight="fill" className="shrink-0" />
          </div>
          <span className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[12px] leading-[18px] tracking-[0.24px]">{rating}</span>
        </div>
      </div>
      <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px]">
        {expanded ? text : hasMore ? `${preview}…` : text}
      </p>
      {hasMore && (
        <button onClick={() => setExpanded((v) => !v)} className="flex gap-[6px] items-center cursor-pointer h-[18px]">
          <span className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">{expanded ? "Read less" : "Read more"}</span>
          <div className="shrink-0 flex items-center justify-center h-full">
            {expanded ? <CaretUp size={14} color="#6B5F7A" /> : <CaretDown size={14} color="#6B5F7A" />}
          </div>
        </button>
      )}
    </div>
  );
}

function DesignersYouMayKnow() {
  return (
    <div className="flex flex-col gap-[16px] pb-[20px]">
      <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px]">Designers you may know</p>
      {[
        { avatar: imgAvatarImage, name: "Riya Roy", role: "Sr. Fashion Designer @ Anamika Khanna" },
        { avatar: imgAvatarImage1, name: "Rohan Singh", role: "Textile Designer @ Manish Malhotra" },
        { avatar: imgAvatarImage2, name: "Akshit Verma", role: "Fashion Designer" }
      ].map((designer, i) => (
        <div key={i} className="flex gap-[8px] items-center py-[12px] border-b border-[rgba(157,148,170,0.4)]">
          <div className="flex-1 flex gap-[12px] items-center">
            <div className="size-[54px] rounded-full overflow-hidden border border-[#e2d9ef] shrink-0">
              <img alt="" className="w-full h-full object-cover" src={designer.avatar} />
            </div>
            <div className="flex-1 flex flex-col gap-[4px] min-w-0">
              <p className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tracking-[0.16px]">{designer.name}</p>
              <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">{designer.role}</p>
            </div>
          </div>
          <div className="flex gap-[8px] items-center px-[12px] py-[8px] shrink-0 h-[36px]">
            <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[14px] leading-[20px] tracking-[0.14px]">Follow</span>
            <div className="flex items-center justify-center h-[20px]">
              <svg className="block size-[20px] shrink-0" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p269480} fill="#7D3AEA" />
              </svg>
            </div>
          </div>
        </div>
      ))}
      <button className="w-full h-[48px] rounded-[8px] flex items-center justify-center gap-[8px] cursor-pointer">
        <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[16px] leading-[20px] tracking-[0.48px]">View More</span>
        <div className="flex items-center justify-center h-[20px]">
          <svg className="block size-[20px] shrink-0" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p13567b00} fill="#7D3AEA" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function MentorshipInsights({ insights }: { insights: Array<{ title: string; description: string }> }) {
  return (
    <div className="drop-shadow-[0px_1px_2px_rgba(132,111,132,0.12)] flex flex-col items-start w-full">
      <div className="mb-[-16px] relative rounded-tl-[12px] rounded-tr-[12px] w-full pb-[32px] pt-[16px] px-[16px]" style={{ backgroundImage: "linear-gradient(264.845deg, rgb(254, 240, 210) 5.872%, rgb(254, 250, 225) 88.229%)" }}>
        <div className="flex gap-[12px] items-center">
          <MagicWand size={20} color="#1A1128" weight="fill" className="shrink-0" />
          <p className="font-['Manrope',sans-serif] font-semibold text-[#2d2040] text-[18px] leading-[28px]">Mentorship insights</p>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] w-full border border-[#e2d9ef]">
        <div className="flex flex-col items-start px-[16px] py-[12px]">
          <ul className="list-disc pl-[20px] flex flex-col gap-[2px]">
            {insights.map((insight, i) => (
              <li key={i}>
                <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">{insight.title}: </span>
                <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">{insight.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function BottomNav() {
  const navigate = useNavigate();
  return (
    <div className="sticky bottom-0 z-10 bg-white shadow-[0px_-1px_2px_rgba(200,192,212,0.6)] flex flex-col items-center">
      <div className="w-full flex items-center justify-around px-4 h-[68px]">
        <button className="flex flex-col gap-px items-center justify-center h-[50px] px-4 cursor-pointer" onClick={() => navigate("/home/feed")}>
          <House size={24} color="#6B5F7A" className="shrink-0" />
          <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">Home</span>
        </button>
        <button className="flex flex-col gap-px items-center justify-center h-[50px] px-4 cursor-pointer" onClick={() => navigate("/jobs")}>
          <Briefcase size={24} color="#6B5F7A" className="shrink-0" />
          <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">Jobs</span>
        </button>
        <button className="flex flex-col gap-px items-center justify-center h-[50px] px-4 cursor-pointer">
          <Plus size={24} color="#6B5F7A" className="shrink-0" />
          <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">Post</span>
        </button>
        <button className="flex flex-col gap-px items-center justify-center h-[50px] px-4 cursor-pointer" onClick={() => navigate("/mentors")}>
          <Users size={24} color="#6B5F7A" className="shrink-0" />
          <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">Mentors</span>
        </button>
        <button className="flex flex-col gap-px items-center justify-center h-[50px] px-4 cursor-pointer" onClick={() => navigate("/profile")}>
          <div className="size-6 flex items-center justify-center shrink-0">
            <div className="relative size-[20px] rounded-full border border-[#1a1128] flex items-center justify-center p-[2px]">
              <img src={imgProfileNav} alt="" className="size-[16px] rounded-full object-cover" />
            </div>
          </div>
          <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">Profile</span>
        </button>
      </div>
      <div className="h-[46px] w-full bg-white flex items-end justify-center pb-[7.69px]">
        <div className="bg-[#1a1128] h-[4.808px] rounded-[200px] w-[128.846px]" />
      </div>
    </div>
  );
}

export function ProfilePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [expandedFAQs, setExpandedFAQs] = useState<Set<number>>(new Set([0]));
  const [visibleFAQCount, setVisibleFAQCount] = useState(3);

  const tabs: Tab[] = ["Overview", "Mentors review", "Mentee review", "Mentee FAQ"];

  return (
    <div className="min-h-screen bg-[#f0ecf7] flex items-start justify-center">
      <div className="w-full max-w-[800px] min-w-0 bg-[#fffeff] flex flex-col min-h-screen">
        <StatusBar />

        {/* Profile Header */}
        <div className="flex items-start pb-[12px] pt-[16px] px-[16px] bg-white gap-[8px]">
          <div className="flex-1 flex flex-col gap-[12px] items-center min-w-0">
            {/* Avatar with Edit Button */}
            <div className="relative size-[80px]">
              <div className="absolute left-0 rounded-[48px] size-[80px] top-0">
                <div className="absolute inset-0 overflow-hidden rounded-[48px]">
                  <img alt="" className="absolute h-[150%] left-0 max-w-none top-[-4.82%] w-full" src={imgAvatar} />
                </div>
                <div className="absolute border border-[rgba(157,148,170,0.4)] inset-0 rounded-[48px]" />
              </div>
              <div className="absolute backdrop-blur-[2px] bg-white left-[43.5px] p-[8px] rounded-[24px] top-[45px] border border-[#e2d9ef] flex items-center justify-center">
                <svg className="block size-[24px] shrink-0" fill="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p2c6d4000} fill="#6B5F7A" />
                </svg>
              </div>
            </div>

            {/* User Details */}
            <div className="flex flex-col gap-[4px] items-center w-full">
              <div className="flex flex-col gap-[2px] items-center text-[#433059] text-center w-full">
                <p className="font-['Manrope',sans-serif] font-semibold text-[18px] leading-[28px]">Sanya Gupta</p>
                <p className="font-['Manrope',sans-serif] font-normal text-[16px] leading-[24px]">Jr. Fashion Designer</p>
              </div>
              <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px] text-center">Seeking full-time</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-[12px] items-center justify-center w-full">
                <div className="flex gap-[8px] items-center h-[18px]">
                  <div className="flex items-center justify-center h-full shrink-0">
                    <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p3b153b00} fill="#1A1128" />
                    </svg>
                  </div>
                  <span className="font-['Manrope',sans-serif] font-normal text-[#1a1128] text-[12px] leading-[18px] tracking-[0.24px]">200</span>
                </div>
                <div className="flex gap-[8px] items-center h-[18px]">
                  <div className="flex items-center justify-center h-full shrink-0">
                    <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p3adf1680} fill="#1A1128" />
                    </svg>
                  </div>
                  <div className="flex gap-[4px] items-center h-full">
                    <span className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[12px] leading-[18px] tracking-[0.24px]">4.6</span>
                    <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">(20)</span>
                  </div>
                </div>
                <div className="flex gap-[8px] items-center h-[18px]">
                  <div className="flex items-center justify-center h-full shrink-0">
                    <svg className="block size-[16px]" fill="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p21cb6200} fill="#1A1128" />
                    </svg>
                  </div>
                  <div className="flex gap-[4px] items-center h-full">
                    <span className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[12px] leading-[18px] tracking-[0.24px]">4.3</span>
                    <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">(25)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Button */}
          <button className="p-2 cursor-pointer shrink-0 flex items-center justify-center" onClick={() => navigate("/settings")}>
            <svg className="block size-[24px] shrink-0" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p3b6f3900} fill="#6B5F7A" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="sticky top-0 z-10 bg-white pt-[12px] overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          <div className="flex border-b border-[#e2d9ef] min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex flex-col h-[40px] items-center justify-between px-[16px]"
              >
                <div className="flex-1 flex items-center justify-center">
                  <p className={`font-['Manrope',sans-serif] ${activeTab === tab ? "font-medium text-[#1a1128]" : "font-normal text-[#6b5f7a]"} text-[16px] ${activeTab === tab ? "leading-[25px] tracking-[0.16px]" : "leading-[24px]"} whitespace-nowrap`}>
                    {tab}
                  </p>
                </div>
                <div className={`h-[2px] w-full rounded-tl-[2px] rounded-tr-[2px] ${activeTab === tab ? "bg-[#7d3aea]" : "bg-transparent"}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-[16px]">
          {activeTab === "Overview" && (
            <div className="flex flex-col">
              {/* About */}
              <div className="flex flex-col gap-[16px] py-[28px]">
                <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px]">About</p>
                <div className="flex flex-col gap-[12px]">
                  <div className="aspect-[3340/2230] rounded-[8px] overflow-hidden">
                    <img alt="" className="w-full h-full object-cover" src={imgAboutImage} />
                  </div>
                  <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[14px] leading-[21px]">
                    A curious designer who think like from a business point of view work like a artist.
                  </p>
                </div>
              </div>

              {/* Recent Projects */}
              <div className="flex flex-col gap-[16px] py-[20px]">
                <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px]">Recent project</p>
                <div className="flex gap-[12px] overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                  {[
                    { img: imgPostThumbnail, label: "1 min" },
                    { img: imgPostThumbnail1, label: "6 July" }
                  ].map((post, i) => (
                    <div key={i} className="bg-white rounded-[8px] border border-[rgba(157,148,170,0.4)] shrink-0 overflow-hidden">
                      <div className="flex flex-col gap-[8px]">
                        <div className="h-[140px] w-[246px]">
                          <img alt="" className="w-full h-full object-cover" src={post.img} />
                        </div>
                        <div className="px-[12px] pb-[12px]">
                          <p className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">{post.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="flex flex-col gap-[16px] py-[20px]">
                <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px]">Experience</p>
                <div className="flex gap-[4px] items-center py-[4px]">
                  <div className="flex-1 flex gap-[8px] items-center">
                    <div className="size-[30px] rounded-[4px] overflow-hidden shrink-0">
                      <img alt="" className="w-full h-full object-cover" src={imgImage} />
                    </div>
                    <div className="flex-1 flex flex-col gap-[4px]">
                      <p className="font-['Manrope',sans-serif] font-medium text-[#2d2040] text-[16px] leading-[25px] tracking-[0.16px]">Myntra</p>
                      <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[14px] leading-[21px]">Fashion Design Intern</p>
                    </div>
                  </div>
                  <div className="bg-[#f7f4fa] px-[8px] py-[8px] rounded-[4px] flex items-center shrink-0">
                    <p className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px] whitespace-nowrap">Apr 2025-July 2025</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="flex flex-col gap-[16px] py-[20px]">
                <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px]">Education</p>
                <div className="flex gap-[4px] items-center py-[12px]">
                  <div className="flex-1 flex gap-[8px] items-center">
                    <div className="size-[30px] rounded-[4px] overflow-hidden shrink-0">
                      <img alt="" className="w-full h-full object-cover" src={imgImage1} />
                    </div>
                    <div className="flex-1 flex flex-col gap-[4px]">
                      <p className="font-['Manrope',sans-serif] font-medium text-[#2d2040] text-[16px] leading-[25px] tracking-[0.16px]">School of Fashion Technology</p>
                      <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[14px] leading-[21px]">Bachelors of Design, Fashion Design</p>
                    </div>
                  </div>
                  <div className="bg-[#f7f4fa] px-[8px] py-[8px] rounded-[4px] flex items-center shrink-0">
                    <p className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px] whitespace-nowrap">2022-2026</p>
                  </div>
                </div>
              </div>

              {/* Top Skills */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px]">Top skills</p>
                <div className="flex flex-wrap gap-[12px] py-[8px] items-center">
                  {["Pattern Making", "Fabric Knowledge", "Garment Construction", "Fit Analysis"].map((skill) => (
                    <div key={skill} className="bg-white border border-[#c8bbda] rounded-[4px] px-[12px] h-[38px] flex items-center justify-center">
                      <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px] whitespace-nowrap">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* View More Button */}
              <div className="py-[20px]">
                <button className="w-full h-[48px] rounded-[8px] flex items-center justify-center gap-[8px] cursor-pointer">
                  <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[16px] leading-[20px] tracking-[0.48px]">View More</span>
                  <div className="flex items-center justify-center h-[20px]">
                    <svg className="block size-[20px] shrink-0" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p13567b00} fill="#7D3AEA" />
                    </svg>
                  </div>
                </button>
              </div>

              <DesignersYouMayKnow />
            </div>
          )}

          {activeTab === "Mentors review" && (
            <div className="flex flex-col gap-[24px] py-[20px]">
              <MentorshipInsights
                insights={[
                  { title: "Strong dedication", description: "Mentors consistently praise Sanya's dedication and strong work ethic in fashion design." },
                  { title: "Technical excellence", description: "Recognized for exceptional technical skills in pattern making and garment construction." },
                  { title: "Quick learner", description: "Demonstrates ability to quickly absorb feedback and apply it to improve her craft." }
                ]}
              />

              <div className="flex flex-col gap-[16px]">
                {mentorReviews.slice(0, visibleReviews).map((review, i) => (
                  <ReviewCard key={i} {...review} />
                ))}
              </div>

              {visibleReviews < mentorReviews.length && (
                <button onClick={() => setVisibleReviews(mentorReviews.length)} className="w-full h-[48px] rounded-[8px] flex items-center justify-center gap-[8px] cursor-pointer">
                  <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[16px] leading-[20px] tracking-[0.48px]">View More</span>
                  <div className="flex items-center justify-center h-[20px]">
                    <svg className="block size-[20px] shrink-0" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p13567b00} fill="#7D3AEA" />
                    </svg>
                  </div>
                </button>
              )}

              <div className="border-t border-[#f0ecf7] pt-[20px]">
                <DesignersYouMayKnow />
              </div>
            </div>
          )}

          {activeTab === "Mentee review" && (
            <div className="flex flex-col gap-[24px] py-[20px]">
              <MentorshipInsights
                insights={[
                  { title: "Patient teaching", description: "Mentees value Sanya's patient teaching style and clear explanations of complex concepts." },
                  { title: "Genuine investment", description: "Shows genuine care for mentees' success and provides personalized guidance." },
                  { title: "Career transformation", description: "Many credit her mentorship as transformative for their design careers and skill development." }
                ]}
              />

              <div className="flex flex-col gap-[16px]">
                {menteeReviews.slice(0, visibleReviews).map((review, i) => (
                  <ReviewCard key={i} {...review} />
                ))}
              </div>

              {visibleReviews < menteeReviews.length && (
                <button onClick={() => setVisibleReviews(menteeReviews.length)} className="w-full h-[48px] rounded-[8px] flex items-center justify-center gap-[8px] cursor-pointer">
                  <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[16px] leading-[20px] tracking-[0.48px]">View More</span>
                  <div className="flex items-center justify-center h-[20px]">
                    <svg className="block size-[20px]" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p13567b00} fill="#7D3AEA" />
                    </svg>
                  </div>
                </button>
              )}

              <div className="border-t border-[#f0ecf7] pt-[20px]">
                <DesignersYouMayKnow />
              </div>
            </div>
          )}

          {activeTab === "Mentee FAQ" && (
            <div className="flex flex-col gap-[16px] py-[20px]">
              {faqs.slice(0, visibleFAQCount).map((faq, i) => {
                const isExpanded = expandedFAQs.has(i);
                return (
                  <div key={i} className="border-b border-[#e2d9ef] pb-[16px]">
                    <button
                      onClick={() => {
                        const newSet = new Set(expandedFAQs);
                        if (isExpanded) {
                          newSet.delete(i);
                        } else {
                          newSet.add(i);
                        }
                        setExpandedFAQs(newSet);
                      }}
                      className="flex items-start justify-between w-full gap-[12px] cursor-pointer"
                    >
                      <p className="flex-1 font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tracking-[0.16px] text-left">
                        {faq.question}
                      </p>
                      <div className="shrink-0 flex items-center justify-center h-[25px]">
                        {isExpanded ? <CaretUp size={20} color="#6B5F7A" /> : <CaretDown size={20} color="#6B5F7A" />}
                      </div>
                    </button>
                    {isExpanded && (
                      <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px] mt-[12px]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}

              {visibleFAQCount < faqs.length && (
                <button onClick={() => setVisibleFAQCount(faqs.length)} className="w-full h-[48px] rounded-[8px] flex items-center justify-center gap-[8px] cursor-pointer">
                  <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[16px] leading-[20px] tracking-[0.48px]">View More</span>
                  <div className="flex items-center justify-center h-[20px]">
                    <svg className="block size-[20px] shrink-0" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p13567b00} fill="#7D3AEA" />
                    </svg>
                  </div>
                </button>
              )}

              <div className="border-t border-[#f0ecf7] pt-[20px]">
                <DesignersYouMayKnow />
              </div>
            </div>
          )}
        </div>

        <BottomNav />
      </div>
    </div>
  );
}
