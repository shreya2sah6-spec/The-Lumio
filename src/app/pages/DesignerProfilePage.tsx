import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Star,
  ShareFat,
  DotsThreeVertical,
  CaretDown,
  CaretUp,
  Check,
  MagicWand,
} from "@phosphor-icons/react";
import { truncateAiBulletItem } from "../utils/aiSummary";
import { Button } from "../components/ui/button";
import { SaveButton } from "../components/SaveButton";
import { ViewMoreButton } from "../components/ViewMoreButton";
import { PageHeader } from "../components/PageHeader";

import imgProject1 from "@/imports/MentorsListing-1/af1c850daadb743337a79569abbde7a01ce4354c.png";
import { rv, rvAnon } from "@/app/data/reviewIdentities";
import imgProject2 from "@/imports/MentorsListing-1/9e04564b5d619027fe26e99798384a89ec7dbd7e.png";
import imgProject3 from "@/imports/MentorsListing-1/a21445b6a5efdaefec15a6540ac50ce7fe9c4bf8.png";

// ─── Company logos — sourced from the centralized registry ───────────────────
import {
  logoAnamikaKhanna,
  logoTarunTahiliani,
  logoFabIndia,
  logoManishMalhotra,
  logoRimzimDadu,
  logoIkai,
  logoAnavila,
  logoRawMango,
  logoPero,
  logoRituKumar,
  logoJaipurRugs,
  logoAmrapali,
  logoNIFT,
  logoNID,
  logoGauravGupta,
  logoJJValya,
  logoAnitaDongre,
  logoSabyasachi,
  logoPapaDontPreach,
  logoMasaba,
  logoEkayaBanaras,
  logoRohitBal,
  logoMyntra,
  logoMAX,
  logoZara,
  logoHM,
  logoMango,
  logoForever21,
  logoShein,
  logoBiba,
  logoWForWoman,
  logoAurelia,
  logoAnokhi,
  logoGoodEarth,
  logoAbrahamThakore,
  logoWestside,
  logoPantaloons,
  logoShoppersStop,
  logoCentral,
  logoArvind,
  logoRelianceTrend,
  logoNykaaFashion,
  logoPuma,
  logoINIFD,
  logoPearl,
  logoSymbiosis,
  logoLifestyle,
  logoMarksSpencer,
  logoGlobalDesi,
} from "../data/companyLogos";

// ─── Types ────────────────────────────────────────────────────────────────────

type DesignerTab = "Overview" | "Mentor review";

interface ReviewEntry {
  avatar: string;
  name: string;
  role: string;
  rating: number;
  title: string;
  text: string;
}

interface ExperienceEntry {
  company: string;
  letter: string;
  logo?: string;
  /** Fallback badge bg color when logo is absent or fails. Defaults to #433059. */
  color?: string;
  role: string;
  start: string;
  end: string;
}

interface EducationEntry {
  school: string;
  letter: string;
  logo?: string;
  /** Fallback badge bg color when logo is absent or fails. Defaults to #433059. */
  color?: string;
  degree: string;
  start: string;
  end: string;
}

interface InsightEntry {
  label: string;
  text: string;
}

interface DesignerConfig {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  experienceYears: string;
  exCompany: string;
  tabs: DesignerTab[];
  experience: ExperienceEntry[];
  education: EducationEntry;
  showAboutMe: boolean;
  bio: string;
  showRecentPosts: boolean;
  reviews: ReviewEntry[];
  rating: number;
  reviewCount: number;
  insights: InsightEntry[];
}

// Review avatar pool removed — identities come from reviewIdentities.ts

// ─── Designer configs ─────────────────────────────────────────────────────────

const DESIGNER_CONFIGS: Record<string, DesignerConfig> = {
  d1: {
    id: "d1",
    name: "Riya Roy",
    role: "Sr. Fashion Designer",
    company: "Anamika Khanna",
    avatar: "https://images.unsplash.com/photo-1531256456869-7b6b2a1d05f4?w=300&h=300&fit=crop&crop=face&auto=format",
    experienceYears: "8 yrs exp",
    exCompany: "EX - Tarun Tahiliani",
    tabs: ["Overview", "Mentor review"],
    experience: [
      { letter: "A", logo: logoAnamikaKhanna,  company: "Anamika Khanna",  role: "Sr. Fashion Designer", start: "2022", end: "Present" },
      { letter: "T", logo: logoTarunTahiliani, company: "Tarun Tahiliani", role: "Fashion Designer",      start: "2020", end: "2022"    },
      { letter: "F", logo: logoFabIndia,       company: "FabIndia",        role: "Jr. Designer",          start: "2018", end: "2020"    },
    ],
    education: { letter: "N", logo: logoNIFT, school: "NIFT Delhi", degree: "B.Des in Fashion Design", start: "2016", end: "2020" },
    showAboutMe: false,
    bio: "",
    showRecentPosts: false,
    rating: 4.5,
    reviewCount: 48,
    insights: [
      { label: "Couture precision",     text: "Heritage textiles and couture construction: a rigorous technical foundation from India's top studios." },
      { label: "Cultural intelligence", text: "Archival knowledge and artisan relationships ground every mentorship conversation in something real." },
      { label: "Career guidance",       text: "Six years at prestigious houses: realistic, hard-won advice for junior designers navigating early careers." },
    ],
    reviews: [
      // d1 — F09 M09 F10 M10 F11 (unique within d1)
      { ...rv("F09"), rating: 5, title: "Exceptional eye for detail",        text: "Riya's ability to research references and translate them into precise technical direction is rare at her level. She brought a quality of research to our collection development that genuinely elevated the final output." },
      { ...rv("M09"), rating: 5, title: "Collaborative and communicative",   text: "Working alongside Riya was a real pleasure. She communicates clearly, adapts quickly to feedback, and has a warmth that makes collaborative studio work enjoyable. A genuinely gifted designer." },
      { ...rv("F10"), rating: 4, title: "Brings craft depth to every project", text: "What stands out about Riya is how deeply she understands craft — not just aesthetically but technically. She knows what is achievable in embroidery and surface design, which makes collaboration much more efficient." },
      { ...rv("M10"), rating: 5, title: "Strong cultural grounding",         text: "Her knowledge of Indian heritage textiles is far beyond what you typically see in designers her age. She uses that knowledge with subtlety — it informs rather than dominates." },
      { ...rv("F11"), rating: 4, title: "Reliable under pressure",           text: "Collection seasons can be intense, and Riya handles the pace without compromising quality. She is the kind of designer you want on your team when deadlines are tight and stakes are high." },
    ],
  },

  d2: {
    id: "d2",
    name: "Rohan Singh",
    role: "Textile Designer",
    company: "Manish Malhotra",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face&auto=format",
    experienceYears: "7 yrs exp",
    exCompany: "EX - Rimzim Dadu",
    tabs: ["Overview", "Mentor review"],
    experience: [
      { letter: "M", logo: logoManishMalhotra, company: "Manish Malhotra",      role: "Textile Designer",     start: "2023", end: "Present" },
      { letter: "R", logo: logoRimzimDadu,     company: "Rimzim Dadu",          role: "Jr. Textile Designer", start: "2021", end: "2023"    },
      { letter: "A", logo: logoAnitaDongre,      company: "Anita Dongre",         role: "Textile Associate",    start: "2019", end: "2021"    },
      { letter: "I", logo: logoIkai,           company: "Ikai by Ragini Ahuja", role: "Textile Intern",       start: "2018", end: "2019"    },
    ],
    education: { letter: "N", logo: logoNID, school: "NID Ahmedabad", degree: "B.Des in Textile Design", start: "2016", end: "2020" },
    showAboutMe: false,
    bio: "",
    showRecentPosts: false,
    rating: 4.3,
    reviewCount: 35,
    insights: [
      { label: "Handloom expertise",   text: "Reads fabric construction at a glance; improvements that take others years of workshop experience." },
      { label: "Artisan networks",     text: "Builds craft partnerships that are both creatively satisfying and commercially enduring." },
      { label: "Commercial grounding", text: "Thinks textiles as craft and commerce — navigating creative integrity vs commercial viability." },
    ],
    reviews: [
      // d2 — M11 F12 M12 F05 M05 (unique within d2)
      { ...rv("M11"), rating: 5, title: "Rare technical depth",            text: "Rohan's understanding of weave structures and yarn behaviour is genuinely exceptional. He can look at a fabric and tell you exactly how it was constructed and what modifications would improve it. A rare skill set." },
      { ...rv("F12"), rating: 5, title: "Bridges craft and commercial",    text: "What I appreciate about Rohan is how he thinks about textiles commercially as well as craft-historically. He understands supply chain realities and designs for them without sacrificing quality or intention." },
      { ...rv("M12"), rating: 4, title: "Deep research approach",          text: "Every fabric direction Rohan proposes is backed by real research — archive visits, cluster relationships, material sourcing knowledge. It means the design decisions are always grounded in something real." },
      { ...rv("F05"), rating: 4, title: "Excellent artisan relationships", text: "Rohan has built genuine relationships with craft communities that take most designers years to develop. This gives the studio access to techniques and makers that are otherwise very difficult to source." },
      { ...rv("M05"), rating: 5, title: "Collaborative and generous",      text: "Working with Rohan on textile direction is a real collaboration — he brings strong ideas and holds them lightly. He is more interested in the best outcome than in being right." },
    ],
  },

  d3: {
    id: "d3",
    name: "Akshit Verma",
    role: "Fashion Designer",
    company: "Marks & Spencer India",
    avatar: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=300&h=300&fit=crop&crop=face&auto=format",
    experienceYears: "4 yrs exp",
    exCompany: "EX - Gaurav Gupta",
    tabs: ["Overview", "Mentor review"],
    experience: [
      { letter: "M", logo: logoMarksSpencer, company: "Marks & Spencer India", role: "Fashion Designer", start: "2024", end: "Present" },
      { letter: "G", logo: logoGauravGupta,  company: "Gaurav Gupta",          role: "Jr. Designer",     start: "2022", end: "2024"    },
      { letter: "A", logo: logoAnavila,      company: "Anavila",               role: "Design Assistant", start: "2021", end: "2022"    },
    ],
    education: { letter: "N", logo: logoNIFT, school: "NIFT Mumbai", degree: "B.Des in Fashion Design", start: "2017", end: "2021" },
    showAboutMe: true,
    bio: "I am a fashion designer based in Delhi, currently working at Marks & Spencer India on slow-fashion projects that draw from Indian tailoring traditions. My practice centres on natural fibres, hand-finishing, and collaborating with small artisan workshops to produce garments with genuine craft character. I believe the future of Indian fashion lies in depth — in knowing your materials, your makers, and your cultural references with real precision.",
    showRecentPosts: false,
    rating: 4.4,
    reviewCount: 28,
    insights: [
      { label: "Craft-led design practice", text: "Natural fibres, hand-finishing, and artisan sourcing — design built on material and maker knowledge." },
      { label: "Natural material focus", text: "Understands material realities of sustainable design practice, not just the aesthetic ideals." },
      { label: "Concept development",   text: "Sharp instincts for real potential vs merely interesting — one of the hardest skills to develop." },
    ],
    reviews: [
      // d3 — F06 M06 F07 M07 F08 (unique within d3)
      { ...rv("F06"), rating: 5, title: "Fresh perspective and strong instincts", text: "Akshit brings a clarity of vision that is unusual in a young designer. His ideas are original without being impractical, and he has a strong instinct for when a concept has real potential versus when it is just an interesting experiment." },
      { ...rv("M06"), rating: 4, title: "Rapid learner with visual intelligence", text: "The pace at which Akshit develops his skills is impressive. He absorbs feedback quickly and applies it thoughtfully. His visual intelligence — his ability to sense proportion, weight, and scale — is a real natural gift." },
      { ...rv("F07"), rating: 4, title: "Genuine craft curiosity",               text: "What I find most admirable about Akshit is his genuine curiosity about craft. He asks the right questions, wants to understand things at a technical level, and takes that understanding back into his design practice." },
      { ...rv("M07"), rating: 5, title: "Production awareness beyond his years", text: "Most designers at Akshit's level have limited understanding of production realities. He is the exception — he thinks about execution from the earliest stages of a concept, which makes his work much more viable." },
      { ...rv("F08"), rating: 4, title: "A designer to watch",                   text: "I do not often say this about junior designers but Akshit has the kind of foundational sensibility that builds into something significant. He is still developing but the trajectory is very clear." },
    ],
  },

  d4: {
    id: "d4",
    name: "Kavya Sharma",
    role: "Textile Artist",
    company: "Raw Mango",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face&auto=format",
    experienceYears: "7 yrs exp",
    exCompany: "EX - Péro",
    tabs: ["Overview", "Mentor review"],
    experience: [
      { letter: "R", logo: logoRawMango,   company: "Raw Mango",   role: "Textile Artist",      start: "2023", end: "Present" },
      { letter: "P", logo: logoPero,        company: "Péro",        role: "Surface Design Lead", start: "2021", end: "2023"    },
      { letter: "R", logo: logoRituKumar,  company: "Ritu Kumar",  role: "Design Associate",    start: "2019", end: "2021"    },
      { letter: "J", logo: logoJaipurRugs, company: "Jaipur Rugs", role: "Textile Intern",      start: "2018", end: "2019"    },
    ],
    education: { letter: "N", logo: logoNID, school: "NID Ahmedabad", degree: "B.Des in Textile Design", start: "2016", end: "2020" },
    showAboutMe: false,
    bio: "",
    showRecentPosts: false,
    rating: 4.6,
    reviewCount: 40,
    insights: [
      { label: "Natural dye mastery",    text: "Plant-based dye chemistry grounded in science — consistent, reproducible results at studio scale." },
      { label: "Narrative intelligence", text: "Connects fabric, colour, and surface into a coherent story for collection and brand positioning." },
      { label: "Artisan collaboration",  text: "Teaches the etiquette, economics, and mutual respect needed for sustainable craft partnerships." },
    ],
    reviews: [
      // d4 — M08 F01 M01 F02 M02 (unique within d4)
      { ...rv("M08"), rating: 5, title: "Elevated our surface design practice", text: "Kavya's natural dye knowledge transformed how we approach colour development. Her research into regional plant-based dye traditions brought a genuine depth to the collection's colour story that clients immediately responded to." },
      { ...rv("F01"), rating: 5, title: "Rare combination of art and rigour",   text: "What makes Kavya exceptional is that her artistic vision is matched by technical rigour. She understands chemistry, process, and outcome at a level that most textile artists do not, which means her work is both beautiful and reproducible." },
      { ...rv("M01"), rating: 4, title: "Strong narrative intelligence",        text: "Every project Kavya works on has a coherent story behind it — about place, craft, material, and meaning. That narrative intelligence distinguishes work that merely looks good from work that actually says something." },
      { ...rv("F02"), rating: 4, title: "Generous collaborator",                text: "Working with Kavya is a genuine exchange — she brings strong ideas and is genuinely interested in yours. Her collaborative instinct means shared projects always end up richer than either party could have created alone." },
      { ...rv("M02"), rating: 5, title: "Sets a high standard",                 text: "Kavya sets a standard of craft intentionality that raises the bar for everyone working alongside her. Her presence in a studio environment makes people more thoughtful about their own material choices." },
    ],
  },

  d5: {
    id: "d5",
    name: "Priya Das",
    role: "Accessories Designer",
    company: "Amrapali Jewels",
    avatar: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=300&h=300&fit=crop&crop=face&auto=format",
    experienceYears: "7 yrs exp",
    exCompany: "EX - JJ Valaya",
    tabs: ["Overview", "Mentor review"],
    experience: [
      { letter: "A", logo: logoAmrapali, company: "Amrapali Jewels", role: "Accessories Designer",     start: "2022", end: "Present" },
      { letter: "J", logo: logoJJValya,  company: "JJ Valaya",       role: "Accessories Designer",     start: "2020", end: "2022"    },
      { letter: "A", color: "#5C4033",      company: "Amethyst",        role: "Jr. Accessories Designer", start: "2019", end: "2020"    },
      { letter: "N", color: "#1A3A5C",      company: "Nimai",           role: "Design Intern",            start: "2018", end: "2019"    },
    ],
    education: { letter: "N", logo: logoNIFT, school: "NIFT Hyderabad", degree: "B.Des in Accessories Design", start: "2015", end: "2019" },
    showAboutMe: false,
    bio: "",
    showRecentPosts: false,
    rating: 4.5,
    reviewCount: 52,
    insights: [
      { label: "Heritage depth",         text: "Mughal and Rajasthani vocabulary at material and craft level — not just aesthetic visual reference." },
      { label: "Technical precision",    text: "Goldsmithing and stone-setting literacy gives you vocabulary to truly collaborate with makers." },
      { label: "Collection development", text: "Production-aware perspective: sequencing, sourcing, and execution discipline for full launches." },
    ],
    reviews: [
      // d5 — F03 M03 F04 M04 F05 (unique within d5)
      { ...rv("F03"), rating: 5, title: "Heritage knowledge at a deep level",    text: "Priya's knowledge of Mughal and Rajasthani jewellery traditions goes far beyond what you typically find in designers working in the contemporary Indian accessories space. She uses that knowledge to make pieces feel genuinely rooted rather than merely referential." },
      { ...rv("M03"), rating: 5, title: "Understands craft at a technical level", text: "What distinguishes Priya from most accessories designers is that she understands goldsmithing and stone-setting at a technical level. She knows what is possible and designs to that possibility, which makes our collaboration genuinely productive." },
      { ...rv("F04"), rating: 4, title: "Strong material intuition",              text: "Priya's instinct for materials — for understanding what a gem or metal wants to become — is something that cannot be taught. She has it naturally and it makes her design decisions consistently surprising and beautiful." },
      { ...rv("M04"), rating: 4, title: "Rigorous research practice",            text: "Every collection Priya contributes to is backed by real archival research. She visits museums, studies collections, and brings that knowledge back into contemporary design in a way that is always fresh rather than nostalgic." },
      { ...rv("F05"), rating: 5, title: "A genuine craftsperson",               text: "Beyond being a talented designer, Priya is a craftsperson at heart. She respects the materials she works with and the artisans she collaborates with, and that respect shows in the quality and integrity of everything she produces." },
    ],
  },
};

// ─── Company → logo lookup for stateCompany override ─────────────────────────
// When a profile is opened from a Company Profile's People tab, location.state.company
// carries the brand name. We use this map to resolve the correct logo so the
// present experience entry shows BOTH the right company name AND the right logo.

const COMPANY_LOGO_MAP: Record<string, string> = {
  // ── Indian fashion houses ──────────────────────────────────────────────────
  "Sabyasachi":           logoSabyasachi,
  "Papa Don't Preach":    logoPapaDontPreach,
  "JJ Valaya":            logoJJValya,
  "Gaurav Gupta":         logoGauravGupta,
  "Anita Dongre":         logoAnitaDongre,
  "Masaba":               logoMasaba,
  "House of Masaba":      logoMasaba,
  "Manish Malhotra":      logoManishMalhotra,
  "Raw Mango":            logoRawMango,
  "Péro":                 logoPero,
  "Pero":                 logoPero,
  "Anavila":              logoAnavila,
  "Amrapali":             logoAmrapali,
  "Amrapali Jewels":      logoAmrapali,
  "Ekaya Banaras":        logoEkayaBanaras,
  "FabIndia":             logoFabIndia,
  "Fabindia":             logoFabIndia,
  "Anamika Khanna":       logoAnamikaKhanna,
  "Tarun Tahiliani":      logoTarunTahiliani,
  "Rimzim Dadu":          logoRimzimDadu,
  "Ikai by Ragini Ahuja": logoIkai,
  "Ritu Kumar":           logoRituKumar,
  "Jaipur Rugs":          logoJaipurRugs,
  "Rohit Bal":            logoRohitBal,
  "Abu Jani Sandeep Khosla": logoRohitBal,
  "Abraham & Thakore":    logoAbrahamThakore,
  "Abraham Thakore":      logoAbrahamThakore,
  "Anokhi":               logoAnokhi,
  "Good Earth":           logoGoodEarth,
  // ── Retail & e-commerce ───────────────────────────────────────────────────
  "Myntra":               logoMyntra,
  "MAX":                  logoMAX,
  "MAX Fashion":          logoMAX,
  "Zara":                 logoZara,
  "Zara India":           logoZara,
  "H&M":                  logoHM,
  "H&M India":            logoHM,
  "Mango":                logoMango,
  "Mango India":          logoMango,
  "Forever 21":           logoForever21,
  "Forever 21 India":     logoForever21,
  "Shein":                logoShein,
  "Shein India":          logoShein,
  "Biba":                 logoBiba,
  "W for Woman":          logoWForWoman,
  "W For Woman":          logoWForWoman,
  "Aurelia":              logoAurelia,
  "Westside":             logoWestside,
  "Pantaloons":           logoPantaloons,
  "Shoppers Stop":        logoShoppersStop,
  "Central":              logoCentral,
  "Arvind":               logoArvind,
  "Arvind Brands":        logoArvind,
  "Reliance Trends":      logoRelianceTrend,
  "Reliance Trend":       logoRelianceTrend,
  "Nykaa Fashion":        logoNykaaFashion,
  "Puma":                 logoPuma,
  "Puma India":           logoPuma,
  // ── Department store chains ───────────────────────────────────────────────
  "Lifestyle":            logoLifestyle,
  "Lifestyle Brand":      logoLifestyle,
  // ── International retail ──────────────────────────────────────────────────
  "Marks & Spencer":      logoMarksSpencer,
  logoGlobalDesi,
  "Marks & Spencer India": logoMarksSpencer,
  "M&S":                  logoMarksSpencer,
  logoGlobalDesi,
  "M&S India":            logoMarksSpencer,
  "Global Desi":          logoGlobalDesi,
  logoGlobalDesi,
};

// ─── Recent Posts (shared pool — used when showRecentPosts is true) ───────────

const RECENT_POSTS = [
  { img: imgProject1, title: "Spring Collection 2025", date: "Mar 2025" },
  { img: imgProject2, title: "Natural Dye Series",     date: "Jan 2025" },
  { img: imgProject3, title: "Artisan Collaboration",  date: "Nov 2024" },
];

// ─── Review card — matches MentorProfilePage ReviewCard exactly ───────────────

function ReviewCard({ avatar, name, role, rating, title, text }: ReviewEntry) {
  return (
    <div className="flex flex-col gap-[8px] items-start w-full border-b border-[#e2d9ef] pb-[16px]">
      <div className="flex gap-[12px] items-center w-full">
        <div className="relative shrink-0 size-[54px] rounded-full overflow-hidden border border-[#e2d9ef]">
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={avatar} loading="lazy" decoding="async" />
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
      {/* Full review text — no truncation, no ellipsis, no expand/collapse */}
      <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px]">
        {text}
      </p>
    </div>
  );
}

// ─── LogoImg ──────────────────────────────────────────────────────────────────
// Shows the org logo; falls back to the initials letter when the URL is absent
// or the image fails to load at runtime.

function LogoImg({
  src,
  alt,
  letter,
  color = "#433059",
}: {
  src?: string;
  alt: string;
  letter: string;
  color?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <span
          className="font-['Manrope',sans-serif] font-bold text-white select-none"
          style={{ fontSize: 12, lineHeight: 1 }}
        >
          {letter}
        </span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain object-center"
      onError={() => setFailed(true)}
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function DesignerProfilePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const designerId = (location.state?.designerId as string) ?? "d1";
  const cfg = DESIGNER_CONFIGS[designerId] ?? DESIGNER_CONFIGS.d1;

  // Name / avatar may be overridden by the caller (ProfilePage, PeopleTab) so
  // a "real person" opens a profile with their own face + name.
  const displayName   = (location.state?.name   as string | undefined) ?? cfg.name;
  const displayAvatar = (location.state?.avatar as string | undefined) ?? cfg.avatar;

  // When the caller (e.g. PeopleTab) passes an explicit company, honour it so the
  // header and experience section stay in sync with the originating card.
  // Otherwise fall back to the "Present" experience entry from the config.
  const stateCompany = location.state?.company as string | undefined;

  // Derive a display-ready experience array: if a company override was passed,
  // substitute it onto the "Present" entry so the Experience section matches the header.
  // Also resolve the correct logo for the overridden company so no brand mismatch occurs.
  // Finally, remove any non-Present entry whose company now duplicates the overridden
  // Present entry — this prevents the same company appearing twice (e.g. "Gaurav Gupta
  // 2024–Present" AND "Gaurav Gupta 2022–2024" when a Gaurav Gupta employee opens d3).
  const displayExperience = stateCompany
    ? cfg.experience
        .map((exp) => {
          if (exp.end !== "Present") return exp;
          const overrideLogo = COMPANY_LOGO_MAP[stateCompany];
          return {
            ...exp,
            company: stateCompany,
            // Use the mapped logo if available; keep original logo as fallback.
            // Clear color so the logo is always preferred over the initials badge.
            ...(overrideLogo
              ? { logo: overrideLogo, color: undefined }
              : {}),
          };
        })
        .filter((exp) => {
          // Keep all Present entries unchanged.
          if (exp.end === "Present") return true;
          // Drop past entries whose company now matches the overridden Present company,
          // so the same organisation never appears twice in a single Experience section.
          return exp.company !== stateCompany;
        })
    : cfg.experience;

  const currentExp = displayExperience.find((e) => e.end === "Present") ?? displayExperience[0];

  // Role comes from the state override OR the current experience entry.
  // Strip any "@ Company" suffix that older callers may have embedded to prevent
  // duplication (DesignerProfilePage appends @Company itself).
  const rawStateRole = location.state?.role as string | undefined;
  const displayRole  = rawStateRole
    ? rawStateRole.replace(/\s*@.*$/, "").trim()
    : currentExp.role;

  // Company is derived from the (possibly overridden) current experience entry —
  // always in sync with the Experience section below.
  const displayCompany = currentExp.company;

  const hasReviews = cfg.reviews.length > 0;

  // Only include Mentor review tab if the designer actually has reviews.
  const visibleTabs = cfg.tabs.filter(
    (t) => t !== "Mentor review" || hasReviews
  );

  const [activeTab, setActiveTab] = useState<DesignerTab>(visibleTabs[0]);
  const [saved, setSaved] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(3);

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [designerId]);

  return (
    <div className="min-h-screen bg-[#fffeff] flex items-start justify-center">
      <div className="w-full max-w-[800px] min-w-[360px] bg-[#fffeff] flex flex-col min-h-screen">

        <PageHeader
          title="Designer Profile"
          onBack={() => navigate(-1)}
          rightAction={
            <button className="p-2 cursor-pointer">
              <ShareFat size={24} color="#6B5F7A" />
            </button>
          }
          sticky
          shadow
        />

        <div ref={scrollRef} className="flex-1 overflow-y-auto">

          {/* ── Hero (matches Mentor hero section exactly) ── */}
          <div className="bg-[#fffeff] px-4 pt-5 pb-3">

            {/* Avatar + action buttons row */}
            <div className="flex justify-between items-center mb-3">
              <div className="relative shrink-0 size-[72px] rounded-full overflow-hidden border-2 border-[#e2d9ef]">
                <img
                  src={displayAvatar}
                  alt={displayName}
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
                  {followed && <Check size={16} weight="bold" color="#7D3AEA" />}
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
                  <DotsThreeVertical size={18} color="#6B5F7A" weight="bold" />
                </button>
              </div>
            </div>

            {/* Profile details */}
            <div className="mb-[2px]">

              {/* Name + ratings row (ratings only when designer has reviews) */}
              <div className="flex items-center justify-between mb-1">
                <h1 className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[18px] leading-[24px]">
                  {displayName}
                </h1>
                {hasReviews && (
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-[4px] bg-[#fffeff]">
                    <Star size={12} weight="fill" color="#1A1128" />
                    <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[12px] leading-[18px]">
                      {cfg.rating}
                    </span>
                    <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px]">
                      ({cfg.reviewCount})
                    </span>
                  </div>
                )}
              </div>

              {/* Role · @Company — always synced to the Present experience entry */}
              <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[14px] leading-[21px] tracking-[0.14px] mb-1">
                {displayRole}{displayCompany ? ` · @${displayCompany}` : ""}
              </p>

              {/* Experience row — no "Trained X designers", no "Responds in" */}
              <div className="flex flex-wrap gap-1.5 text-[12px] text-[#6b5f7a] font-['Manrope',sans-serif]">
                <span>{cfg.experienceYears}</span>
                {cfg.exCompany && (
                  <>
                    <span>•</span>
                    <span>{cfg.exCompany}</span>
                  </>
                )}
              </div>

            </div>
          </div>

          {/* ── Sticky tab bar (matches Mentor tab bar exactly) ── */}
          <div className="w-full border-b border-[#e2d9ef] bg-[#fffeff]">
            <div className="flex gap-3 px-4">
              {visibleTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="flex-1 h-[44px] px-1 relative transition-all"
                >
                  <span
                    className={`type-tab whitespace-nowrap transition-all ${
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

          {/* ── Tab content ── */}
          <div>

            {/* ── Tab content — CSS-hidden, never unmounted for instant revisits ── */}
            <div className={activeTab === "Overview" ? undefined : "hidden"}>
              <>
                {/* About Me — hidden when showAboutMe is false */}
                {cfg.showAboutMe && cfg.bio && (
                  <div className="bg-[#fffeff] px-4 py-3 mt-1">
                    <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-2">
                      About Me
                    </h3>
                    <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px]">
                      {cfg.bio}
                    </p>
                  </div>
                )}

                {/* Recent Posts — hidden when showRecentPosts is false */}
                {cfg.showRecentPosts && (
                  <div className="bg-[#fffeff] py-3 mt-1">
                    <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-4 px-4">
                      Recent posts
                    </h3>
                    <div className="flex gap-3 overflow-x-auto px-4 scrollbar-hide snap-x snap-mandatory">
                      {RECENT_POSTS.map((post, i) => (
                        <div
                          key={i}
                          className="shrink-0 w-[200px] snap-center bg-white rounded-[8px] border border-[rgba(157,148,170,0.4)] overflow-hidden"
                        >
                          <img
                            src={post.img}
                            alt={post.title}
                            className="w-full h-[120px] object-cover"
                          />
                          <div className="px-[12px] py-[10px] flex flex-col gap-[4px]">
                            <p className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[13px] leading-[18px]">
                              {post.title}
                            </p>
                            <p className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">
                              {post.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Experience */}
                <div className="bg-[#fffeff] px-4 py-3 mt-1">
                  <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-4">
                    Experience
                  </h3>
                  <div className="space-y-4">
                    {displayExperience.map((exp, i) => (
                      <div key={i}>
                        {i > 0 && <div className="h-px bg-[#e2d9ef] mb-4" />}
                        <div className="flex gap-3 items-center">
                          <div className="size-[30px] rounded-[8px] shrink-0 overflow-hidden border border-[#e2d9ef] bg-white flex items-center justify-center">
                            <LogoImg src={exp.logo} alt={exp.company} letter={exp.letter} color={exp.color} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[16px] leading-[24px]">
                              {exp.company}
                            </h4>
                            <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[20px]">
                              {exp.role}
                            </p>
                          </div>
                          <div className="shrink-0 inline-flex items-center justify-center rounded-[4px] bg-[#F7F4FA] p-[8px]">
                            <span className="font-['Manrope',sans-serif] font-medium text-[#6B5F7A] text-[12px] leading-[18px] tracking-[0.24px]">
                              {exp.start} – {exp.end}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="bg-[#fffeff] px-4 py-3 mt-1">
                  <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-4">
                    Education
                  </h3>
                  <div className="flex gap-3 items-center">
                    <div className="size-[30px] rounded-[8px] shrink-0 overflow-hidden border border-[#e2d9ef] bg-white flex items-center justify-center">
                      <LogoImg src={cfg.education.logo} alt={cfg.education.school} letter={cfg.education.letter} color={cfg.education.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[16px] leading-[24px]">
                        {cfg.education.school}
                      </h4>
                      <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[20px]">
                        {cfg.education.degree}
                      </p>
                    </div>
                    <div className="shrink-0 inline-flex items-center justify-center rounded-[4px] bg-[#F7F4FA] p-[8px]">
                      <span className="font-['Manrope',sans-serif] font-medium text-[#6B5F7A] text-[12px] leading-[18px] tracking-[0.24px]">
                        {cfg.education.start} – {cfg.education.end}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            </div>

            <div className={activeTab === "Mentor review" ? undefined : "hidden"}>
              {!hasReviews ? (
                <div className="px-4 py-16 flex flex-col items-center gap-2">
                  <p className="font-['Manrope',sans-serif] font-semibold text-[#6b5f7a] text-[16px] leading-[24px] text-center">
                    No reviews available yet.
                  </p>
                  <p className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[14px] leading-[21px] text-center">
                    Reviews will appear here once mentors share their feedback.
                  </p>
                </div>
              ) : (
              <div
                className="flex flex-col gap-[24px] items-center pb-[20px] pt-[16px] px-[16px]"
                style={{ contentVisibility: "auto", containIntrinsicSize: "0 500px" }}
              >

                {/* Mentors insights — same AI summary card as Mentor "Mentorship insights" */}
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
                        Mentors insights
                      </p>
                    </div>
                  </div>
                  <div className="bg-white relative rounded-[12px] w-full border border-[#e2d9ef]">
                    <div className="flex flex-col items-start px-[16px] py-[12px]">
                      <ul className="list-disc pl-[20px] flex flex-col gap-[2px]">
                        {cfg.insights.map((ins, i) => (
                          <li key={i}>
                            <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">
                              {ins.label}:{" "}
                            </span>
                            <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                              {truncateAiBulletItem(ins.text, cfg.insights.length)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Review cards */}
                {cfg.reviews.slice(0, visibleReviews).map((review, i) => (
                  <ReviewCard key={i} {...review} />
                ))}

                <ViewMoreButton
                  onClick={() =>
                    setVisibleReviews((v) => Math.min(v + 3, cfg.reviews.length))
                  }
                  className={
                    visibleReviews >= cfg.reviews.length
                      ? "pointer-events-none cursor-default"
                      : ""
                  }
                />
              </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
