import { useState, createContext, useContext } from "react";
import { AppLayout } from "../components/AppLayout";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, ShareFat, Link, BookOpen, FileText, CaretDown, CaretUp } from "@phosphor-icons/react";
import imgMentorAvatarFallback from "@/imports/MentorsBookingConfirmed/8a0297188511b9e7d739e0bdb0fad1599992ea67.png";

// ─── Types ────────────────────────────────────────────────────────────────────

type JournalTab = "summary" | "transcript" | "chat";

// ─── Resolved session context ─────────────────────────────────────────────────
// Populated at the page level from navigation state + fallbacks.
// All child tabs consume this via useSession() — no prop drilling.

interface ResolvedSession {
  mentorName: string;
  mentorFirstName: string;
  mentorRole: string;
  mentorCompany: string;
  mentorTitle: string;
  mentorAvatar: string;
  userFirstName: string;
  date: string;
  duration: string;
}

const SessionCtx = createContext<ResolvedSession>({
  mentorName: "Shruti Jain",
  mentorFirstName: "Shruti",
  mentorRole: "Senior Fashion Designer",
  mentorCompany: "MAX Fashion",
  mentorTitle: "Sr. Fashion Designer, MAX Fashion",
  mentorAvatar: imgMentorAvatarFallback,
  userFirstName: "Sanaya",
  date: "25 July 2025",
  duration: "50 mins",
});

function useSession() {
  return useContext(SessionCtx);
}

/** Replace default mentor/user first names in transcript speech text. */
function resolveText(text: string, mentorFirst: string, userFirst: string) {
  return text
    .replace(/\bShruti\b/g, mentorFirst)
    .replace(/\bSanya\b/g, userFirst);
}

// ─── AI Summary content ───────────────────────────────────────────────────────

const SUMMARY = {
  overview: `Your session with Shruti Jain focused on strengthening your portfolio presentation, understanding salary benchmarks for junior fashion designers in India, and building a clear strategy for design-house interviews. Shruti reviewed your current work samples in detail and outlined a focused action plan for the next four weeks.`,
  keyTakeaways: [
    "Your portfolio has strong conceptual direction but needs a tighter edit — consolidate to 8–10 curated pieces with consistent cover pages.",
    "Salary expectations for Jr. Fashion Designers in Mumbai range from ₹3.5L–₹6L at established brands and ₹4L–₹8L at design studios and startups.",
    "Most design-house interviews include a live brief or take-home task — prepare a 20-minute walkthrough of your strongest case study.",
    "Your draping specialisation is a genuine differentiator — make it more visible with process shots, toile development, and finished-garment imagery.",
    "Networking through NID and NIFT alumni communities and LinkedIn can significantly accelerate your job search timeline.",
    "Add a personal branding section to your portfolio: a one-line creative philosophy and a short contextual brief for each project.",
  ],
  actionPoints: [
    "Redesign your portfolio layout — reduce to 8 projects, add consistent cover pages, and use a clean typographic hierarchy throughout.",
    "Research 5 target brands, shortlist open roles, understand their aesthetic, and tailor your cover letter for each application.",
    "Complete the take-home brief Shruti shared: design a 3-piece capsule collection for a contemporary Indian womenswear brand.",
    "Update your LinkedIn with a strong headline, a 3-line designer bio, and at least 3 portfolio project links.",
  ],
  nextSteps: `Your next session with Shruti is on 8 August. Before then, complete the portfolio redesign and share the first draft with her for async review. She'll leave written feedback directly on your PDF by 5 August.`,
};

// ─── Transcript content ───────────────────────────────────────────────────────

const TRANSCRIPT_SECTIONS = [
  {
    id: "t1",
    range: "00:00 – 05:00",
    title: "Introductions & Context",
    messages: [
      {
        speaker: "Shruti",
        text: "Hi Sanya, great to meet you properly. I've had a look through your portfolio and I've got lots of notes to share — really exciting work in there.",
      },
      {
        speaker: "Sanya",
        text: "Thank you so much Shruti! I've been really looking forward to this. I've been building my portfolio for a few months now but I'm not sure if I'm presenting it the right way for design-house applications.",
      },
      {
        speaker: "Shruti",
        text: "That's exactly what we'll work through today. Let's start with the portfolio — I want to go piece by piece. Then we'll cover salary expectations and interview preparation. Sound good?",
      },
      {
        speaker: "Sanya",
        text: "Yes, perfect. I also had a question about branding myself as a designer — is it too early at this stage?",
      },
    ],
  },
  {
    id: "t2",
    range: "05:00 – 18:00",
    title: "Portfolio Deep Dive",
    messages: [
      {
        speaker: "Shruti",
        text: "Your instincts are strong. The Rajasthani textile project shows real cultural sensitivity, and your draping work in the capsule collection is genuinely impressive for where you are in your career.",
      },
      {
        speaker: "Sanya",
        text: "Thank you! The Rajasthani project was my final-year thesis — I spent almost a year on the research. I wasn't sure if it was too academic for job applications.",
      },
      {
        speaker: "Shruti",
        text: "Not at all — the depth is a strength. But your presentation needs to work harder for you. Right now you have 22 projects in here, and a hiring manager gets maybe 3 minutes with a portfolio. Cut it to your 8 best pieces and make each one tell a complete story.",
      },
      {
        speaker: "Sanya",
        text: "Eight feels quite short. Which ones would you keep?",
      },
      {
        speaker: "Shruti",
        text: "Keep the Rajasthani draping project, your capsule collection, the sustainable knitwear collaboration, and anything where you can show process — sketches, toile development, final garment. Brands want to see how you think, not just the finished outcome. Drop any mood-board-only projects.",
      },
      {
        speaker: "Sanya",
        text: "That makes sense. Should I add personal projects if I have them?",
      },
      {
        speaker: "Shruti",
        text: "If they show a distinct point of view, absolutely. A strong personal project can outperform a weaker college brief. Add a short creative brief at the top of each project: what was the problem, what was your response, what did you learn. That framing makes an enormous difference.",
      },
    ],
  },
  {
    id: "t3",
    range: "18:00 – 30:00",
    title: "Salary & Career Positioning",
    messages: [
      {
        speaker: "Sanya",
        text: "Can we talk about salary expectations? I've seen a huge range online and I have no idea what to ask for.",
      },
      {
        speaker: "Shruti",
        text: "Great question. For a fresher role at a large established brand in Mumbai — think Max, Westside, Shoppers Stop — you're looking at around ₹3.5L to ₹5L per year. At a design studio or mid-size Indian fashion brand, typically ₹4L to ₹7L depending on their scale.",
      },
      {
        speaker: "Sanya",
        text: "What about startups?",
      },
      {
        speaker: "Shruti",
        text: "Startups can go higher — ₹6L to ₹9L for a strong designer joining early — but the learning opportunity and team quality need to be the real value there. For your first role, I'd prioritise a brand with a design team you can learn from over being the sole designer at a startup.",
      },
      {
        speaker: "Sanya",
        text: "I was thinking of asking for ₹5L — does that sound reasonable?",
      },
      {
        speaker: "Shruti",
        text: "For your skill level and portfolio? You should be asking ₹5.5L to ₹6L at mid-size brands. Don't undervalue yourself. Have one line ready to anchor it — tie it to your draping specialisation and your research depth. Those are genuinely differentiating.",
      },
    ],
  },
  {
    id: "t4",
    range: "30:00 – 45:00",
    title: "Interview Preparation",
    messages: [
      {
        speaker: "Shruti",
        text: "Most fashion design interviews at the brand level have two rounds — a portfolio review and then a creative brief or technical task with the design team. Sometimes they're combined into one.",
      },
      {
        speaker: "Sanya",
        text: "I've only had one interview so far and I got quite nervous during the live brief. I froze for a bit.",
      },
      {
        speaker: "Shruti",
        text: "That's very common. The key is to talk through your thinking out loud even when you're unsure — they're evaluating your creative process, not just your output. Practice giving a 20-minute walkthrough of your best project where you narrate every decision you made.",
      },
      {
        speaker: "Sanya",
        text: "Should I prepare answers to standard questions?",
      },
      {
        speaker: "Shruti",
        text: "Yes — especially: 'Where do you find inspiration?', 'Tell me about a project that didn't go as planned', and 'What designers are you currently following?' Have real, specific answers. Name actual designers and explain why their work excites you. Generic answers are obvious immediately.",
      },
    ],
  },
  {
    id: "t5",
    range: "45:00 – 50:00",
    title: "Next Steps & Closing",
    messages: [
      {
        speaker: "Shruti",
        text: "To summarise today: rework your portfolio to 8 strong projects with project briefs, target ₹5.5–6L in your applications, and practise your interview walkthrough. I'm sharing a brief for you to work on before our next session — a 3-piece capsule collection for a contemporary Indian womenswear brand.",
      },
      {
        speaker: "Sanya",
        text: "This has been so useful. I feel like I have a really clear direction now. Thank you so much Shruti.",
      },
      {
        speaker: "Shruti",
        text: "You're very welcome. You've got strong instincts — it's just about packaging them well now. I'll send you the brief and some portfolio references to study. See you on the 8th!",
      },
    ],
  },
];

// ─── Session chat resources ───────────────────────────────────────────────────

type ResourceType = "link" | "book" | "brief";

interface ChatResource {
  id: string;
  type: ResourceType;
  message: string;
  linkLabel: string;
  timestamp: string;
}

const CHAT_RESOURCES: ChatResource[] = [
  {
    id: "r1",
    type: "link",
    message:
      "Here's the portfolio framework template I mentioned — it works really well for fashion design portfolios applying to Indian design houses. Very clean presentation, lets the work breathe.",
    linkLabel: "Portfolio Framework Template — Notion",
    timestamp: "25 July · 11:42 AM",
  },
  {
    id: "r2",
    type: "link",
    message:
      "This is the salary benchmarking report I referenced — published by FDCI. Pages 14–18 are the most relevant for junior roles in Mumbai and Delhi.",
    linkLabel: "FDCI Industry Salary Report 2025 — PDF",
    timestamp: "25 July · 11:51 AM",
  },
  {
    id: "r3",
    type: "book",
    message:
      "I recommend this to every mentee at your stage. It changed how I thought about presenting my work early in my career — really practical and honest.",
    linkLabel: "The Fashion Designer's Handbook — Francesca Sterlacci",
    timestamp: "25 July · 11:58 AM",
  },
  {
    id: "r4",
    type: "brief",
    message:
      "And here's the take-home brief I mentioned! A 3-piece capsule collection for a contemporary Indian womenswear brand. Complete it before our next session on 8 August. Have fun with it!",
    linkLabel: "Take-home Design Brief — Capsule Collection",
    timestamp: "25 July · 12:04 PM",
  },
];

// ─── Shared: Journal header ───────────────────────────────────────────────────

function JournalHeader({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative bg-[#fffeff] flex items-center px-4 py-3 shrink-0 border-b border-[#e2d9ef]">
      <button
        onClick={onBack}
        className="p-2 -ml-2 shrink-0 flex items-center justify-center cursor-pointer"
        aria-label="Go back"
      >
        <ArrowLeft size={24} color="#1A1128" />
      </button>

      {/* Centered title — absolute so it doesn't interact with the flex layout */}
      <h1 className="type-h1 text-[#1a1128] absolute left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none select-none">
        Session Journal
      </h1>

      <button
        className="ml-auto p-2 -mr-2 shrink-0 flex items-center justify-center cursor-pointer"
        aria-label="Share"
      >
        <ShareFat size={24} color="#6B5F7A" />
      </button>
    </div>
  );
}

// ─── Shared: Tab row ──────────────────────────────────────────────────────────

const TAB_LABELS: { id: JournalTab; label: string }[] = [
  { id: "summary", label: "AI summary" },
  { id: "transcript", label: "Transcript" },
  { id: "chat", label: "Session chat" },
];

function TabRow({
  active,
  onChange,
}: {
  active: JournalTab;
  onChange: (t: JournalTab) => void;
}) {
  return (
    <div className="bg-[#fffeff] border-b border-[#e2d9ef] shrink-0">
      <div className="flex gap-3 px-4">
        {TAB_LABELS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onChange(id)}
            className="flex-1 h-[44px] px-1 relative transition-all cursor-pointer"
          >
            <span
              className={`type-tab whitespace-nowrap transition-all ${
                active === id
                  ? "font-semibold text-[#1a1128]"
                  : "font-normal text-[#6b5f7a]"
              }`}
            >
              {label}
            </span>
            {active === id && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7d3aea] rounded-t-[2px]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Section divider ──────────────────────────────────────────────────────────

function SectionDivider() {
  return <div className="mx-[20px] h-px bg-[#e2d9ef] my-[24px]" />;
}

// ─── AI Summary tab ───────────────────────────────────────────────────────────

function AiSummaryTab() {
  const session = useSession();
  return (
    <div className="flex flex-col flex-1 overflow-y-auto">

      {/* ── Natural dynamic heading — replaces chips ── */}
      <div className="px-[20px] pt-[20px] pb-[4px]">
        <p className="type-body-1 text-[#433059]">
          Here's a summary of your mentorship session with{" "}
          <span className="font-semibold text-[#1a1128]">{session.mentorName}</span>,{" "}
          {session.mentorRole} at {session.mentorCompany}.
        </p>
      </div>

      {/* ── Overview ── */}
      <div className="flex flex-col gap-[10px] px-[20px] pt-[20px]">
        <p className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[13px] leading-[18px] tracking-[0.52px] uppercase">
          Session Overview
        </p>
        <p className="type-body-2 text-[#433059] leading-[22px]">
          {resolveText(SUMMARY.overview, session.mentorFirstName, session.userFirstName)}
        </p>
      </div>

      <SectionDivider />

      {/* ── Key Takeaways ── */}
      <div className="flex flex-col gap-[14px] px-[20px]">
        <p className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[13px] leading-[18px] tracking-[0.52px] uppercase">
          Key Takeaways
        </p>
        <div className="flex flex-col gap-[12px]">
          {SUMMARY.keyTakeaways.map((item, i) => (
            <div key={i} className="flex gap-[12px] items-start">
              {/* Bullet — same color as body text */}
              <div className="w-[6px] h-[6px] rounded-full bg-[#433059] mt-[8px] shrink-0" />
              <p className="type-body-2 text-[#433059] leading-[22px] flex-1">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* ── Action Points ── */}
      <div className="flex flex-col gap-[14px] px-[20px]">
        <p className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[13px] leading-[18px] tracking-[0.52px] uppercase">
          Action Points
        </p>
        <div className="flex flex-col gap-[12px]">
          {SUMMARY.actionPoints.map((item, i) => (
            <div key={i} className="flex gap-[12px] items-start">
              {/* Numbered badge — soft purple bg, dark text */}
              <div className="w-[22px] h-[22px] rounded-full bg-[#C9B4F6] flex items-center justify-center shrink-0 mt-[1px]">
                <span className="type-caption-1-trim text-[#433059] font-bold leading-none">
                  {i + 1}
                </span>
              </div>
              <p className="type-body-2 text-[#433059] leading-[22px] flex-1">
                {resolveText(item, session.mentorFirstName, session.userFirstName)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <SectionDivider />

      {/* ── Next Steps ── */}
      <div className="flex flex-col gap-[10px] px-[20px] pb-[24px]">
        <p className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[13px] leading-[18px] tracking-[0.52px] uppercase">
          Next Steps
        </p>
        <div className="bg-[#f5f0ff] border border-[#c8bbda] rounded-[12px] px-[16px] py-[14px]">
          <p className="type-body-2 text-[#433059] leading-[22px]">
            {resolveText(SUMMARY.nextSteps, session.mentorFirstName, session.userFirstName)}
          </p>
        </div>
      </div>

    </div>
  );
}

// ─── Transcript tab ───────────────────────────────────────────────────────────

function TranscriptSection({
  section,
}: {
  section: (typeof TRANSCRIPT_SECTIONS)[number];
}) {
  const session = useSession();
  const [expanded, setExpanded] = useState(false);

  /** Resolve speaker label: "Shruti" → mentor first name, "Sanya" → user first name */
  function resolveSpeaker(name: string) {
    if (name === "Shruti") return session.mentorFirstName;
    if (name === "Sanya") return session.userFirstName;
    return name;
  }

  // Preview: first speaker + truncated first message (≤110 chars)
  const firstMsg = section.messages[0];
  const resolvedPreviewText = resolveText(firstMsg.text, session.mentorFirstName, session.userFirstName);
  const preview = resolvedPreviewText.slice(0, 110);
  const hasMore = resolvedPreviewText.length > 110 || section.messages.length > 1;

  return (
    <div className="flex flex-col px-[20px] py-[16px] border-b border-[#e2d9ef]">
      {/* Section label — always visible, static */}
      <div className="flex flex-col gap-[2px] mb-[10px]">
        <span className="font-['Manrope',sans-serif] font-medium text-[#9d90ad] text-[12px] leading-[18px] tracking-[0.24px]">
          {section.range}
        </span>
        <span className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[15px] leading-[22px]">
          {section.title}
        </span>
      </div>

      {/* Collapsed: truncated first message + Read more */}
      {!expanded && (
        <div className="flex flex-col gap-[6px]">
          <p className="type-body-2 text-[#433059] leading-[22px]">
            <span className="font-semibold text-[#1a1128]">
              {resolveSpeaker(firstMsg.speaker)}:
            </span>{" "}
            {resolvedPreviewText.length > 110 ? `${preview}…` : resolvedPreviewText}
          </p>
          {hasMore && (
            <button
              onClick={() => setExpanded(true)}
              className="flex gap-[6px] items-center cursor-pointer self-start"
            >
              <span className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">
                Read more
              </span>
              <CaretDown size={14} color="#6B5F7A" />
            </button>
          )}
        </div>
      )}

      {/* Expanded: all messages + Read less */}
      {expanded && (
        <div className="flex flex-col gap-[14px]">
          {section.messages.map((msg, i) => (
            <div key={i} className="flex flex-col gap-[3px]">
              <span className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[13px] leading-[18px]">
                {resolveSpeaker(msg.speaker)}
              </span>
              <p className="type-body-2 text-[#433059] leading-[22px]">
                {resolveText(msg.text, session.mentorFirstName, session.userFirstName)}
              </p>
            </div>
          ))}
          <button
            onClick={() => setExpanded(false)}
            className="flex gap-[6px] items-center cursor-pointer self-start mt-[2px]"
          >
            <span className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">
              Read less
            </span>
            <CaretUp size={14} color="#6B5F7A" />
          </button>
        </div>
      )}
    </div>
  );
}

function TranscriptTab() {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <div>
        {TRANSCRIPT_SECTIONS.map((section) => (
          <TranscriptSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}

// ─── Session chat tab ─────────────────────────────────────────────────────────

function resourceIcon(type: ResourceType) {
  if (type === "book") return <BookOpen size={16} color="#7d3aea" weight="regular" />;
  if (type === "brief") return <FileText size={16} color="#7d3aea" weight="regular" />;
  return <Link size={16} color="#7d3aea" weight="regular" />;
}

function ChatResourceCard({ resource }: { resource: ChatResource }) {
  const session = useSession();
  // Replace the hardcoded "25 July" date in timestamps with the session date
  const timestamp = resource.timestamp.replace(/^\d+ \w+/, session.date.replace(/\s\d{4}$/, ""));
  return (
    <div className="flex flex-col gap-[12px] bg-white border border-[#e2d9ef] rounded-[12px] p-[16px] shadow-sm">
      {/* Mentor header */}
      <div className="flex items-center gap-[10px]">
        <img
          src={session.mentorAvatar}
          alt={session.mentorName}
          className="w-[36px] h-[36px] rounded-full object-cover object-top scale-110 shrink-0"
        />
        <div className="flex flex-col flex-1 min-w-0">
          <span className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[14px] leading-[21px] truncate">
            {session.mentorName}
          </span>
          <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] truncate">
            {session.mentorTitle}
          </span>
        </div>
      </div>

      {/* Message */}
      <p className="type-body-2 text-[#433059] leading-[22px]">
        {resolveText(resource.message, session.mentorFirstName, session.userFirstName)}
      </p>

      {/* Resource link card */}
      <div className="flex items-center gap-[10px] bg-[#f5f0ff] border border-[#c8bbda] rounded-[8px] px-[12px] py-[10px] cursor-pointer active:opacity-80">
        <div className="w-[32px] h-[32px] bg-white rounded-[6px] border border-[#e2d9ef] flex items-center justify-center shrink-0">
          {resourceIcon(resource.type)}
        </div>
        <span className="font-['Manrope',sans-serif] font-medium text-[#7d3aea] text-[13px] leading-[18px] flex-1 min-w-0 truncate">
          {resource.linkLabel}
        </span>
      </div>

      {/* Timestamp */}
      <p className="type-caption text-[#9d90ad] text-right">
        {timestamp}
      </p>
    </div>
  );
}

function SessionChatTab() {
  const session = useSession();
  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      {/* Date heading */}
      <div className="px-[20px] pt-[20px] pb-[4px]">
        <p className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[13px] leading-[18px] tracking-[0.52px] uppercase">
          Shared during your session · {session.date}
        </p>
      </div>

      {/* Resource cards */}
      <div className="flex flex-col gap-[12px] px-[20px] pt-[16px] pb-[24px]">
        {CHAT_RESOURCES.map((resource) => (
          <ChatResourceCard key={resource.id} resource={resource} />
        ))}
      </div>

    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

// ─── Navigation state shape (from VideoCallPage → HomePage → here) ────────────

interface JournalLocationState {
  tab?: JournalTab;
  mentor?: {
    id?: string;
    name?: string;
    avatar?: string;
    role?: string;
    company?: string;
  };
  mentorName?: string;
  mentorAvatar?: string;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function SessionJournalPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const locState = (location.state as JournalLocationState | null);

  // ── Build resolved session from navigation state with sensible fallbacks ──
  const mentorName =
    locState?.mentor?.name ??
    locState?.mentorName ??
    "Shruti Jain";

  const mentorFirstName = mentorName.split(" ")[0];

  const mentorRole =
    locState?.mentor?.role ??
    "Senior Fashion Designer";

  const mentorCompany =
    locState?.mentor?.company ??
    "MAX Fashion";

  const mentorTitle = `${mentorRole}, ${mentorCompany}`;

  const mentorAvatar =
    locState?.mentor?.avatar ??
    locState?.mentorAvatar ??
    imgMentorAvatarFallback;

  // User first name — read from localStorage (set by ProfilePage), fallback to default
  const userFirstName =
    (typeof window !== "undefined" && localStorage.getItem("lumio_user_first_name")) ||
    "Sanaya";

  const resolvedSession: ResolvedSession = {
    mentorName,
    mentorFirstName,
    mentorRole,
    mentorCompany,
    mentorTitle,
    mentorAvatar,
    userFirstName,
    date: "25 July 2025",   // session date — extend from locState when booking passes it
    duration: "50 mins",
  };

  // Always open on the first tab (AI summary)
  const [activeTab, setActiveTab] = useState<JournalTab>("summary");

  function handleBack() {
    navigate("/home/feed");
  }

  return (
    <SessionCtx.Provider value={resolvedSession}>
      <AppLayout
        hideNav
        header={
          <>
            <JournalHeader onBack={handleBack} />
            <TabRow active={activeTab} onChange={setActiveTab} />
          </>
        }
      >
        {/* Tab content — each tab renders its own SafeAreaBottom at scroll end */}
        {activeTab === "summary" && <AiSummaryTab />}
        {activeTab === "transcript" && <TranscriptTab />}
        {activeTab === "chat" && <SessionChatTab />}
      </AppLayout>
    </SessionCtx.Provider>
  );
}
