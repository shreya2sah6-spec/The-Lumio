import { useState, useEffect } from "react";
import { usePublishedPosts } from "../stores/postDraftStore";
import { useNavigate } from "react-router-dom";
import {
  Star,
  MagicWand,
  Check,
  Users,
  UserList,
} from "@phosphor-icons/react";
import { toTitleCase } from "../utils/validation";
import { truncateAiBulletItem } from "../utils/aiSummary";
import { BottomNav } from "../components/BottomNav";
import { StatusBar } from "../components/StatusBar";
import { ViewMoreButton } from "../components/ViewMoreButton";
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
import { rv, rvAnon } from "@/app/data/reviewIdentities";

type Tab = "Overview" | "Mentor review" | "Mentee review" | "Mentee FAQ";

// Avatar constants removed — identities come from reviewIdentities.ts

// Mentors Reviews — reviews written by Sanya's mentors about her as a mentee
// Identities: F09 M09 F10 F11 M10 F12 M11 M12 + ANON (all unique in this pool)
const mentorReviews = [
  { ...rv("F09"), rating: 5, title: "Outstanding dedication",       text: "Sanya is one of the most dedicated mentees I have worked with. She comes to every session with specific questions, applies feedback immediately, and follows through on every recommendation. Her progress has been remarkable." },
  { ...rv("M09"), rating: 5, title: "Exceptional design thinking",  text: "Working with Sanya transformed my expectations of what a junior mentee can achieve. Her design thinking is already at a level that most designers take years to reach. She's going to be a significant voice in Indian fashion." },
  { ...rv("F10"), rating: 4, title: "Great industry awareness",     text: "Sanya brings a level of industry awareness that is rare at her stage. She understands the commercial side of fashion as well as the creative, and she asks questions that show she is thinking about her career strategically." },
  { ...rvAnon(),  rating: 4, title: "A pleasure to mentor",         text: "Mentoring Sanya has been one of the most rewarding experiences of my career. She is genuinely curious, not just career-focused, and her love for Indian craft traditions gives her work a depth that is hard to manufacture." },
  { ...rv("F11"), rating: 5, title: "Natural talent in fashion",    text: "Sanya has a natural sense of proportion, colour, and fabric that cannot be taught — only refined. Our sessions have been focused on honing that instinct and giving her the technical vocabulary to articulate what she already feels." },
  { ...rv("M10"), rating: 5, title: "Remarkable growth trajectory", text: "The growth I have seen in Sanya over our sessions together is extraordinary. She started with strong potential and has turned that into genuine craft. Her portfolio now reflects a designer who is ready for a senior environment." },
  { ...rv("F12"), rating: 4, title: "Strong technical foundation",  text: "Sanya has worked seriously on building her technical foundation. Her understanding of construction, garment engineering, and textile properties is now well above par for her experience level." },
  { ...rv("M11"), rating: 5, title: "Star student",                 text: "In fifteen years of mentoring, I can count on one hand the students who approached their development with Sanya's combination of humility and ambition. She is the kind of designer who will continue growing long after formal mentorship ends." },
  { ...rv("M12"), rating: 4, title: "Ready for senior roles",       text: "After our mentorship sessions, I would have no hesitation recommending Sanya for a senior design position. She has the creative maturity, the technical skills, and the professional attitude that design houses look for." },
];

// Mentees Reviews — reviews written by Sanya's mentees about her as a mentor
// Identities: F01 M01 F02 F03 M02 F04 M03 M04 + ANON (all unique in this pool)
const menteeReviews = [
  { ...rv("F01"), rating: 5, title: "Transformative experience",      text: "Learning from Sanya has been one of the most transformative things I've done for my career. She has a gift for explaining complex concepts simply and always knows exactly what you need to hear at exactly the right moment." },
  { ...rv("M01"), rating: 5, title: "Career-changing mentorship",     text: "Sanya's guidance helped me make the leap from student work to professional-level design thinking. She is generous with her time, her knowledge, and her network. My first real design job came directly from her recommendation." },
  { ...rv("F02"), rating: 4, title: "Excellent technical guidance",   text: "Sanya's technical knowledge is exceptional and she communicates it with real clarity. She helped me understand draping, proportion, and fabric choice at a level that my formal education simply didn't cover." },
  { ...rvAnon(),  rating: 4, title: "Incredible mentor",              text: "Sanya is the kind of mentor you remember for life. She doesn't just answer your questions — she helps you ask better questions. Our sessions shifted my entire perspective on what it means to be a thoughtful designer." },
  { ...rv("F03"), rating: 5, title: "Patient and insightful",         text: "Sanya's patience is extraordinary. She never makes you feel rushed and always finds a way to explain something from a different angle if the first approach doesn't click. I left every session feeling more capable and more confident." },
  { ...rv("M02"), rating: 5, title: "Transformed my practice",        text: "The sessions with Sanya completely changed how I approach my design practice. She helped me see my work with much more critical eyes while also encouraging me to trust my instincts. A rare and valuable balance." },
  { ...rv("F04"), rating: 4, title: "Practical and actionable",       text: "What I value most about Sanya's mentorship is that it's always actionable. She doesn't deal in vague encouragement — she gives specific feedback, concrete next steps, and real examples from her own experience." },
  { ...rv("M03"), rating: 5, title: "World-class mentorship",         text: "I have had several mentors over my early career and Sanya is in a different category. Her combination of genuine care for your development and deep professional knowledge makes her mentorship feel uniquely valuable." },
  { ...rv("M04"), rating: 4, title: "Sets you up for success",        text: "Sanya doesn't just help you with your immediate challenges — she prepares you for the ones ahead. Her mentorship has given me a professional framework that I keep coming back to at every stage of my career." },
];

const faqs = [
  {
    question: "How can I stand out as a junior designer early in my career?",
    answer:
      "Focus on mastering fundamentals, being reliable, and showing initiative—small details, consistency, and attitude matter more than flashy ideas at this stage.",
  },
  {
    question: "What's the best way to build a strong design portfolio?",
    answer:
      "Include diverse projects that showcase your range, process, and problem-solving skills. Quality over quantity—each piece should tell a story about your design thinking.",
  },
  {
    question: "How do I transition from student to professional design work?",
    answer:
      "Start by seeking internships or freelance projects. Learn industry workflows, collaborate with teams, and be open to feedback. Build connections and keep learning.",
  },
  {
    question: "What skills are most important for fashion designers today?",
    answer:
      "Technical skills like pattern making and garment construction are essential, but also develop strong communication, digital tools proficiency, and understanding of sustainable practices.",
  },
  {
    question: "How do I handle creative blocks?",
    answer:
      "Step away and seek inspiration outside fashion—art, nature, architecture. Keep a mood board, sketch freely without judgment, and collaborate with others to get fresh perspectives.",
  },
];

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
        <div className="flex flex-col flex-1 min-w-0">
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
        <p className="flex-1 font-['Manrope',sans-serif] font-medium text-[#2d2040] text-[16px] leading-[25px] tracking-[0.16px] truncate min-w-0">
          {title}
        </p>
        <div className="flex gap-[4px] items-center shrink-0 h-[18px]">
          <div className="flex items-center justify-center h-full">
            <Star
              size={12}
              color="#1A1128"
              weight="fill"
              className="shrink-0"
            />
          </div>
          <span className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[12px] leading-[18px] tracking-[0.24px]">
            {rating}
          </span>
        </div>
      </div>
      {/* Full review text — no truncation, no ellipsis, no expand/collapse */}
      <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px]">
        {text}
      </p>
    </div>
  );
}

function DesignersYouMayKnow() {
  const navigate = useNavigate();
  const [followed, setFollowed] = useState<Set<number>>(new Set());

  // Role strings must NEVER include company — DesignerProfilePage derives company
  // from its own experience data and appends @Company itself.
  const designers = [
    { id: 0, designerId: "d1", avatar: imgAvatarImage,  name: "Riya Roy",     role: "Sr. Fashion Designer" },
    { id: 1, designerId: "d2", avatar: imgAvatarImage1, name: "Rohan Singh",  role: "Textile Designer" },
    { id: 2, designerId: "d3", avatar: imgAvatarImage2, name: "Akshit Verma", role: "Fashion Designer" },
  ];

  function toggleFollow(id: number) {
    setFollowed((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function openProfile(designer: (typeof designers)[number]) {
    navigate("/designer-profile", {
      state: {
        designerId: designer.designerId,
        name: designer.name,
        role: designer.role,
        avatar: designer.avatar,
      },
    });
  }

  return (
    <div className="w-full flex flex-col gap-[16px] pb-[20px]">
      <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px]">
        Designers you may know
      </p>
      {designers.map((designer) => {
        const isFollowed = followed.has(designer.id);
        return (
          <div
            key={designer.id}
            className="flex gap-[8px] items-center py-[12px] border-b border-[rgba(157,148,170,0.4)]"
          >
            {/* Avatar + name → clickable, opens Designer Profile */}
            <button
              onClick={() => openProfile(designer)}
              className="flex-1 min-w-0 flex gap-[12px] items-center text-left cursor-pointer active:opacity-70 transition-opacity"
              style={{ WebkitTapHighlightColor: "transparent" }}
              aria-label={`View ${designer.name}'s profile`}
            >
              <div className="size-[54px] rounded-full overflow-hidden border border-[#e2d9ef] shrink-0">
                <img
                  alt=""
                  className="w-full h-full object-cover"
                  src={designer.avatar}
                />
              </div>
              <div className="flex-1 flex flex-col gap-[4px] min-w-0">
                <p className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tracking-[0.16px] truncate">
                  {designer.name}
                </p>
                <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px] truncate">
                  {designer.role}
                </p>
              </div>
            </button>

            {/* Follow / Followed toggle */}
            <button
              onClick={() => toggleFollow(designer.id)}
              className="flex gap-[6px] items-center px-[12px] py-[8px] shrink-0 h-[36px]"
              aria-label={isFollowed ? `Unfollow ${designer.name}` : `Follow ${designer.name}`}
            >
              {isFollowed ? (
                <>
                  <Check size={14} color="#7d3aea" weight="bold" />
                  <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[14px] leading-[20px] tracking-[0.14px]">
                    Followed
                  </span>
                </>
              ) : (
                <>
                  <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[14px] leading-[20px] tracking-[0.14px]">
                    Follow
                  </span>
                  <div className="flex items-center justify-center h-[20px]">
                    <svg className="block size-[20px] shrink-0" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p269480} fill="#7D3AEA" />
                    </svg>
                  </div>
                </>
              )}
            </button>
          </div>
        );
      })}
      <ViewMoreButton />
    </div>
  );
}

function MentorshipInsights({
  insights,
}: {
  insights: Array<{ title: string; description: string }>;
}) {
  return (
    <div className="drop-shadow-[0px_1px_2px_rgba(132,111,132,0.12)] flex flex-col items-start w-full">
      <div
        className="mb-[-16px] relative rounded-tl-[12px] rounded-tr-[12px] w-full pb-[32px] pt-[16px] px-[16px]"
        style={{
          backgroundImage:
            "linear-gradient(264.845deg, rgb(254, 240, 210) 5.872%, rgb(254, 250, 225) 88.229%)",
        }}
      >
        <div className="flex gap-[12px] items-center">
          <MagicWand
            size={20}
            color="#1A1128"
            weight="fill"
            className="shrink-0"
          />
          <p className="font-['Manrope',sans-serif] font-semibold text-[#2d2040] text-[18px] leading-[28px]">
            Mentorship insights
          </p>
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] w-full border border-[#e2d9ef]">
        <div className="flex flex-col items-start px-[16px] py-[12px]">
          <ul className="list-disc pl-[20px] flex flex-col gap-[2px]">
            {insights.map((insight, i) => (
              <li key={i}>
                <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">
                  {insight.title}:{" "}
                </span>
                <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                  {truncateAiBulletItem(insight.description, insights.length)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


// ─── Domain → role title mapping ─────────────────────────────────────────────

const DOMAIN_TO_ROLE: Record<string, string> = {
  Fashion: "Fashion Designer",
  Textile: "Textile Designer",
  Jewelry: "Jewelry Designer",
  Accessory: "Accessory Designer",
  Footwear: "Footwear Designer",
  Leather: "Leather Designer",
  Illustrator: "Fashion Illustrator",
  Stylist: "Fashion Stylist",
  Merchandising: "Merchandiser",
};

const EXPERIENCE_TO_PREFIX: Record<string, string> = {
  Student: "Intern",
  Fresher: "Jr.",
  "1-2 Yrs": "Jr.",
  "3-5 Yrs": "Mid-Level",
  "6-9 Yrs": "Senior",
  "9-15 yrs": "Senior",
  "16+ yrs": "Senior",
};

function getProfileData() {
  const storedName = localStorage.getItem("lumio_name") ?? "";
  const storedDomain = localStorage.getItem("lumio_domain") ?? "";
  const storedExperience = localStorage.getItem("lumio_experience") ?? "";

  const hasOnboarded = !!storedName;
  const displayName = hasOnboarded ? toTitleCase(storedName) : "Sanya Gupta";
  const domainRole = DOMAIN_TO_ROLE[storedDomain] ?? "Fashion Designer";
  const expPrefix = EXPERIENCE_TO_PREFIX[storedExperience] ?? "Jr.";
  const displayTitle = hasOnboarded
    ? `${expPrefix} ${domainRole}`
    : "Jr. Fashion Designer";
  const displayStatus =
    storedExperience === "Student" ? "Seeking internship" : "Seeking full-time";

  return { displayName, displayTitle, displayStatus };
}

export function ProfilePage() {
  const navigate = useNavigate();
  // debug mount log
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("Mounted: ProfilePage");
    return () => {
      // eslint-disable-next-line no-console
      console.log("Unmounted: ProfilePage");
    };
  }, []);
  const { displayName, displayTitle, displayStatus } = getProfileData();
  const publishedPosts = usePublishedPosts();
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [visibleMentorReviews, setVisibleMentorReviews] = useState(3);
  const [visibleMenteeReviews, setVisibleMenteeReviews] = useState(3);
  const [expandedFAQs, setExpandedFAQs] = useState<Set<number>>(new Set([0]));
  const [visibleFAQCount, setVisibleFAQCount] = useState(3);

  const tabs: Tab[] = [
    "Overview",
    "Mentor review",
    "Mentee review",
    "Mentee FAQ",
  ];

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
                  <img
                    alt=""
                    className="absolute h-[150%] left-0 max-w-none top-[-4.82%] w-full"
                    src={imgAvatar}
                  />
                </div>
                <div className="absolute border border-[rgba(157,148,170,0.4)] inset-0 rounded-[48px]" />
              </div>
              <div className="absolute backdrop-blur-[2px] bg-white left-[43.5px] p-[8px] rounded-[24px] top-[45px] border border-[#e2d9ef] flex items-center justify-center">
                <svg
                  className="block size-[24px] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path d={svgPaths.p2c6d4000} fill="#6B5F7A" />
                </svg>
              </div>
            </div>

            {/* User Details */}
            <div className="flex flex-col gap-[4px] items-center w-full">
              <div className="flex flex-col gap-[2px] items-center text-[#433059] text-center w-full">
                <p className="font-['Manrope',sans-serif] font-semibold text-[18px] leading-[28px]">
                  {displayName}
                </p>
                <p className="font-['Manrope',sans-serif] font-normal text-[16px] leading-[24px]">
                  {displayTitle}
                </p>
              </div>
              <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px] text-center">
                {displayStatus}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-[12px] items-center justify-center w-full">
                <div className="flex gap-[8px] items-center h-[18px]">
                  <div className="flex items-center justify-center h-full shrink-0">
                    <UserList size={16} weight="fill" color="#1A1128" />
                  </div>
                  <span className="font-['Manrope',sans-serif] font-normal text-[#1a1128] text-[12px] leading-[18px] tracking-[0.24px]">
                    200
                  </span>
                </div>
                <div className="flex gap-[8px] items-center h-[18px]">
                  <div className="flex items-center justify-center h-full shrink-0">
                    <Users size={16} weight="fill" color="#1A1128" />
                  </div>
                  <div className="flex gap-[4px] items-center h-full">
                    <span className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[12px] leading-[18px] tracking-[0.24px]">
                      4.6
                    </span>
                    <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">
                      (20)
                    </span>
                  </div>
                </div>
                <div className="flex gap-[8px] items-center h-[18px]">
                  <div className="flex items-center justify-center h-full shrink-0">
                    <svg
                      className="block size-[16px]"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path d={svgPaths.p21cb6200} fill="#1A1128" />
                    </svg>
                  </div>
                  <div className="flex gap-[4px] items-center h-full">
                    <span className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[12px] leading-[18px] tracking-[0.24px]">
                      4.3
                    </span>
                    <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">
                      (25)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Button */}
          <button
            className="pl-2 pr-0 pt-0 pb-2 cursor-pointer shrink-0 flex items-start self-start"
            onClick={() => navigate("/settings")}
          >
            <svg
              className="block size-[24px] shrink-0"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path d={svgPaths.p3b6f3900} fill="#6B5F7A" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div
          className="bg-white pt-[12px] overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex border-b border-[#e2d9ef] min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex flex-col h-[40px] items-center justify-between px-[16px]"
              >
                <div className="flex-1 flex items-center justify-center">
                  <p
                    className={`font-['Manrope',sans-serif] ${activeTab === tab ? "font-medium text-[#1a1128]" : "font-normal text-[#6b5f7a]"} text-[16px] ${activeTab === tab ? "leading-[25px] tracking-[0.16px]" : "leading-[24px]"} whitespace-nowrap`}
                  >
                    {tab}
                  </p>
                </div>
                <div
                  className={`h-[2px] w-full rounded-tl-[2px] rounded-tr-[2px] ${activeTab === tab ? "bg-[#7d3aea]" : "bg-transparent"}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-[16px]">
          {activeTab === "Overview" && (
            <div className="flex flex-col">
              {/* About */}
              <div className="flex flex-col gap-[16px] pt-[28px] pb-[20px]">
                <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px]">
                  About
                </p>
                <div className="flex flex-col gap-[12px]">
                  <div className="aspect-[3340/2230] rounded-[8px] overflow-hidden">
                    <img
                      alt=""
                      className="w-full h-full object-cover"
                      src={imgAboutImage}
                    />
                  </div>
                  <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[14px] leading-[21px]">
                    A curious designer who think like from a business point of
                    view work like a artist.
                  </p>
                </div>
              </div>

              {/* Recent Projects */}
              <div className="flex flex-col gap-[16px] py-[20px]">
                <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px]">
                  Recent project
                </p>
                <div
                  className="flex gap-[12px] overflow-x-auto -mx-[16px] px-[16px] pr-[16px]"
                  style={{ scrollbarWidth: "none" }}
                >
                  {/* Published posts from store — prepended */}
                  {publishedPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white rounded-[8px] border border-[rgba(157,148,170,0.4)] shrink-0 overflow-hidden"
                    >
                      <div className="flex flex-col gap-[8px]">
                        <div className="h-[140px] w-[246px]">
                          {post.coverUrl ? (
                            <img
                              alt={post.caption || "Project"}
                              className="w-full h-full object-cover"
                              src={post.coverUrl}
                            />
                          ) : (
                            <div className="w-full h-full bg-[#f5f0ff]" />
                          )}
                        </div>
                        <div className="px-[12px] pb-[12px]">
                          <p className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">
                            {post.publishedAt}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Static seed posts */}
                  {[
                    { img: imgPostThumbnail, label: "3 days ago" },
                    { img: imgPostThumbnail1, label: "6 July" },
                  ].map((post, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-[8px] border border-[rgba(157,148,170,0.4)] shrink-0 overflow-hidden"
                    >
                      <div className="flex flex-col gap-[8px]">
                        <div className="h-[140px] w-[246px]">
                          <img
                            alt=""
                            className="w-full h-full object-cover"
                            src={post.img}
                          />
                        </div>
                        <div className="px-[12px] pb-[12px]">
                          <p className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">
                            {post.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="flex flex-col gap-[16px] py-[20px]">
                <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px]">
                  Experience
                </p>
                <div className="flex gap-[4px] items-center py-[4px]">
                  <div className="flex-1 flex gap-[8px] items-center">
                    <div className="size-[30px] rounded-[4px] overflow-hidden shrink-0">
                      <img
                        alt=""
                        className="w-full h-full object-cover"
                        src={imgImage}
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-[4px]">
                      <p className="font-['Manrope',sans-serif] font-medium text-[#2d2040] text-[16px] leading-[25px] tracking-[0.16px]">
                        Myntra
                      </p>
                      <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[14px] leading-[21px]">
                        Fashion Design Intern
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#f7f4fa] px-[8px] py-[8px] rounded-[4px] flex items-center shrink-0">
                    <p className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px] whitespace-nowrap">
                      Apr 2025-July 2025
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="flex flex-col gap-[16px] py-[20px]">
                <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px]">
                  Education
                </p>
                <div className="flex gap-[4px] items-center py-[12px]">
                  <div className="flex-1 flex gap-[8px] items-center">
                    <div className="size-[30px] rounded-[4px] overflow-hidden shrink-0">
                      <img
                        alt=""
                        className="w-full h-full object-cover"
                        src={imgImage1}
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-[4px]">
                      <p className="font-['Manrope',sans-serif] font-medium text-[#2d2040] text-[16px] leading-[25px] tracking-[0.16px]">
                        School of Fashion Technology
                      </p>
                      <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[14px] leading-[21px]">
                        Bachelors of Design, Fashion Design
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#f7f4fa] px-[8px] py-[8px] rounded-[4px] flex items-center shrink-0">
                    <p className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px] whitespace-nowrap">
                      2022-2026
                    </p>
                  </div>
                </div>
              </div>

              {/* Top Skills */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px]">
                  Top skills
                </p>
                <div className="flex flex-wrap gap-[12px] py-[8px] items-center">
                  {[
                    "Pattern Making",
                    "Fabric Knowledge",
                    "Garment Construction",
                    "Fit Analysis",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-white border border-[#c8bbda] rounded-[4px] px-[12px] h-[38px] flex items-center justify-center"
                    >
                      <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px] whitespace-nowrap">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* View More Button */}
              <div className="py-[20px]">
                <ViewMoreButton />
              </div>

              <DesignersYouMayKnow />
            </div>
          )}

          {activeTab === "Mentor review" && mentorReviews.length === 0 && (
            <div className="px-4 py-16 flex flex-col items-center gap-2">
              <p className="font-['Manrope',sans-serif] font-semibold text-[#6b5f7a] text-[16px] leading-[24px] text-center">No reviews available yet.</p>
              <p className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[14px] leading-[21px] text-center">Reviews will appear here once mentors share their feedback.</p>
            </div>
          )}

          {activeTab === "Mentor review" && mentorReviews.length > 0 && (
            <div className="flex flex-col gap-[24px] py-[20px]">
              <MentorshipInsights
                insights={[
                  {
                    title: "Strong dedication",
                    description:
                      "Prepares thoroughly, applies feedback without delay, and stays focused on long-term improvement.",
                  },
                  {
                    title: "Technical excellence",
                    description:
                      "Exceptional in pattern making, construction, and fit — unusual at her career stage.",
                  },
                  {
                    title: "Quick learner",
                    description:
                      "Absorbs critique and implements improvements with a speed and accuracy that is rare.",
                  },
                ]}
              />

              <div className="flex flex-col gap-[16px]">
                {mentorReviews.slice(0, visibleMentorReviews).map((review, i) => (
                  <ReviewCard key={i} {...review} />
                ))}
              </div>

              <ViewMoreButton
                onClick={() =>
                  setVisibleMentorReviews((v) => Math.min(v + 3, mentorReviews.length))
                }
                className={
                  visibleMentorReviews >= mentorReviews.length
                    ? "pointer-events-none cursor-default"
                    : ""
                }
              />

              <div className="w-full border-t border-[#f0ecf7] pt-[20px]">
                <DesignersYouMayKnow />
              </div>
            </div>
          )}

          {activeTab === "Mentee review" && menteeReviews.length === 0 && (
            <div className="px-4 py-16 flex flex-col items-center gap-2">
              <p className="font-['Manrope',sans-serif] font-semibold text-[#6b5f7a] text-[16px] leading-[24px] text-center">No reviews available yet.</p>
              <p className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[14px] leading-[21px] text-center">Reviews will appear here once mentees share their feedback.</p>
            </div>
          )}

          {activeTab === "Mentee review" && menteeReviews.length > 0 && (
            <div className="flex flex-col gap-[24px] py-[20px]">
              <MentorshipInsights
                insights={[
                  {
                    title: "Patient teaching",
                    description:
                      "Never rushes explanations; adapts method to ensure genuine understanding every session.",
                  },
                  {
                    title: "Genuine investment",
                    description:
                      "Tracks progress, tailors guidance, and stays available when critical decisions arise.",
                  },
                  {
                    title: "Career transformation",
                    description:
                      "Mentees leave with confidence, clarity, and a creative identity that defines their practice.",
                  },
                ]}
              />

              <div className="flex flex-col gap-[16px]">
                {menteeReviews.slice(0, visibleMenteeReviews).map((review, i) => (
                  <ReviewCard key={i} {...review} />
                ))}
              </div>

              <ViewMoreButton
                onClick={() =>
                  setVisibleMenteeReviews((v) => Math.min(v + 3, menteeReviews.length))
                }
                className={
                  visibleMenteeReviews >= menteeReviews.length
                    ? "pointer-events-none cursor-default"
                    : ""
                }
              />

              <div className="w-full border-t border-[#f0ecf7] pt-[20px]">
                <DesignersYouMayKnow />
              </div>
            </div>
          )}

          {activeTab === "Mentee FAQ" && (
            <div className="py-[20px] flex flex-col gap-[16px] items-center">
              {/* faq-list */}
              <div className="flex flex-col gap-[4px] self-stretch">
                {faqs.slice(0, visibleFAQCount).map((faq, i) => {
                  const isExpanded = expandedFAQs.has(i);
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        const newSet = new Set(expandedFAQs);
                        if (isExpanded) {
                          newSet.delete(i);
                        } else {
                          newSet.add(i);
                        }
                        setExpandedFAQs(newSet);
                      }}
                      className="flex flex-col gap-[8px] items-start py-[12px] self-stretch cursor-pointer text-left"
                    >
                      {/* Question Row */}
                      <div className="flex gap-[8px] items-center self-stretch">
                        <div className="flex-1 min-w-px font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tracking-[0.16px]">
                          {faq.question}
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
                        <div className="inline-flex gap-[12px] items-stretch self-stretch">
                          <div className="w-[2px] self-stretch bg-[#E2D9EF] rounded-[200px] shrink-0" />
                          <div className="flex-1 min-w-px font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px] break-words">
                            {faq.answer}
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {visibleFAQCount < faqs.length && (
                <ViewMoreButton onClick={() => setVisibleFAQCount(faqs.length)} />
              )}

              <div className="w-full border-t border-[#f0ecf7] pt-[20px]">
                <DesignersYouMayKnow />
              </div>
            </div>
          )}
        </div>

        <BottomNav active="profile" profileNavImg={imgAvatar} />
      </div>
    </div>
  );
}
