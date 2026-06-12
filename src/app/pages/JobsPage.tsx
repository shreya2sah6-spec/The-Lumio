import { useState, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { appliedJobsStore } from "@/app/stores/appliedJobsStore";
import { truncateAiSummary, truncateAiBulletItem } from "@/app/utils/aiSummary";
import { useEscKey } from "@/app/hooks/useEscKey";
import {
  Funnel,
  Star,
  Check,
  CaretDown,
  CaretUp,
  ShareFat,
  X,
  MagicWand,
} from "@phosphor-icons/react";
import { BottomNav } from "../components/BottomNav";
import { PageHeader } from "../components/PageHeader";
import { SearchBar } from "../components/SearchBar";
import { Job, LogoCell, JobCard, logoInitials } from "../components/JobCard";
import { JobDetailCompanyHeader } from "../components/JobDetailCompanyHeader";
import { Button } from "../components/ui/button";
import { ViewMoreButton } from "../components/ViewMoreButton";

// ─── Images ──────────────────────────────────────────────────────────────────

// ─── Company logos — sourced from the centralized registry ───────────────────
import {
  logoSabyasachi,
  logoManishMalhotra,
  logoFabIndia,
  logoRawMango,
  logoPero,
  logoAnavila,
  logoAmrapali,
  logoEkayaBanaras,
  logoPapaDontPreach,
  logoJJValya,
  logoGauravGupta,
  logoAnitaDongre,
  logoMasaba,
  logoRohitBal,
  logoAbuJani,
} from "../data/companyLogos";
// ─── Non-logo job detail images (reviewer avatars, nav) ──────────────────────
import imgProfileNav from "@/imports/JobsListing/bb5b0e0896cc0396e3c8e2b6811f344da7f15455.png";
import { rv, rvAnon } from "@/app/data/reviewIdentities";

// ─── Brand-specific job detail gallery images ─────────────────────────────────
import imgJdSabyasachi1    from "@/imports/job-details/sabyasachi-1.png";
import imgJdSabyasachi2    from "@/imports/job-details/sabyasachi-2.png";
import imgJdSabyasachi3    from "@/imports/job-details/sabyasachi-3.png";
import imgJdEkayaBanaras1  from "@/imports/job-details/ekaya-banaras-1.png";
import imgJdEkayaBanaras2  from "@/imports/job-details/ekaya-banaras-2.png";
import imgJdEkayaBanaras3  from "@/imports/job-details/ekaya-banaras-3.png";
import imgJdAmrapali1      from "@/imports/job-details/amrapali-1.png";
import imgJdAmrapali2      from "@/imports/job-details/amrapali-2.png";
import imgJdMasaba1        from "@/imports/job-details/masaba-1.png";
import imgJdMasaba2        from "@/imports/job-details/masaba-2.png";
import imgJdMasaba3        from "@/imports/job-details/masaba-3.png";
import imgJdAnavila1       from "@/imports/job-details/anavila-1.png";
import imgJdAnavila2       from "@/imports/job-details/anavila-2.png";
import imgJdAnavila3       from "@/imports/job-details/anavila-3.png";
import imgJdPero1          from "@/imports/job-details/pero-1.png";
import imgJdPero2          from "@/imports/job-details/pero-2.png";
import imgJdPero3          from "@/imports/job-details/pero-3.png";
import imgJdRawMango1      from "@/imports/job-details/raw-mango-1.png";
import imgJdRawMango2      from "@/imports/job-details/raw-mango-2.png";
import imgJdRawMango3      from "@/imports/job-details/raw-mango-3.png";
import imgJdJJValaya1      from "@/imports/job-details/jj-valaya-1.png";
import imgJdJJValaya2      from "@/imports/job-details/jj-valaya-2.png";
import imgJdJJValaya3      from "@/imports/job-details/jj-valaya-3.png";
import imgReviewer1 from "@/imports/JobsDetailReviews/5dde8865bca1503c9d643f24bd440d5c48868565.png";
import imgReviewer2 from "@/imports/JobsDetailReviews/be6eb4acfee35fa9fb482f3e84f93a1f10551bbf.png";
import imgReviewer3 from "@/imports/JobsDetailReviews/f801d802405de74f12a3ae2fc96210f8d94e06db.png";
import imgNotFound from "@/imports/SharedNotFound/460b6c9e17511d97e9e5c7a1875505fb0de17812.png";

// ─── Types ────────────────────────────────────────────────────────────────────

type JobsTab = "Discover" | "Applied";
type DetailTab = "Description" | "Reviews";
type Screen = "listing" | "detail";
type DiscoverFilter =
  | "Job Type"
  | "Experience"
  | "Salary / Stipend"
  | "Location"
  | "Company Category"
  | "Design Domain";
type AppliedFilter =
  | "Status"
  | "Date Applied"
  | "Company"
  | "Job Type"
  | "Work Mode";

interface ActiveFilters {
  discover: Record<DiscoverFilter, Set<string>>;
  applied: Record<AppliedFilter, Set<string>>;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const recentJobs: Job[] = [
  {
    id: "j0",
    title: "Associate Fashion Designer",
    company: "Papa Don't Preach",
    logo: logoPapaDontPreach,
    salary: "7-8 LPA",
    expTag: "0-3 Years",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "2 days ago",
    promoted: true,
    domain: "Fashion Design",
    brandKey: "papaDontPreach",
  },
  {
    id: "j1",
    title: "Jr. Fashion Designer",
    company: "JJ Valya",
    logo: logoJJValya,
    expTag: "1-3 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "3 days ago",
    domain: "Fashion Design",
    brandKey: "jjValya",
  },
  {
    id: "j2",
    title: "Jr. Fashion Designer",
    company: "Gaurav Gupta",
    logo: logoGauravGupta,
    salary: "8-10 LPA",
    expTag: "1-3 Years",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "3 days ago",
    domain: "Fashion Design",
    brandKey: "gauravGupta",
  },
  {
    id: "j12",
    title: "Womenswear Designer",
    company: "Raw Mango",
    logo: logoRawMango,
    logoColor: "#C35A2A",
    salary: "6-9 LPA",
    expTag: "1-3 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "3 days ago",
    domain: "Fashion Design",
    brandKey: "rawMango",
  },
  {
    id: "j13",
    title: "Print Designer",
    company: "Péro",
    logo: logoPero,
    logoColor: "#4A5568",
    salary: "5-8 LPA",
    expTag: "0-2 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "4hr ago",
    domain: "Surface & Print",
    brandKey: "pero",
  },
  {
    id: "j14",
    title: "Fashion Illustrator",
    company: "Anavila",
    logo: logoAnavila,
    logoColor: "#2C7A5E",
    salary: "4-6 LPA",
    expTag: "Fresher",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "1 day ago",
    domain: "Fashion Design",
    brandKey: "anavila",
  },
];

const latestJobs: Job[] = [
  {
    id: "j3",
    title: "Footwear Designer",
    company: "Anita Dongre",
    logo: logoAnitaDongre,
    salary: "5-6 LPA",
    expTag: "1-2 Years",
    typeTag: "Contract",
    location: "Mumbai",
    posted: "2 days ago",
    promoted: true,
    domain: "Accessories",
    brandKey: "anitaDongre",
  },
  {
    id: "j4",
    title: "Jr. Accessories Designer",
    company: "Masaba",
    logo: logoMasaba,
    salary: "5-8 LPA",
    expTag: "1-3 Years",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "4hr ago",
    domain: "Accessories",
    brandKey: "masaba",
  },
  {
    id: "j5",
    title: "Senior Fashion Designer",
    company: "Manish Malhotra",
    logo: logoManishMalhotra,
    salary: "13-18 LPA",
    expTag: "4-8 Years",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "10hr ago",
    domain: "Fashion Design",
    brandKey: "manishMalhotra",
  },
  {
    id: "j15",
    title: "Jewelry Designer",
    company: "Amrapali Jewels",
    logo: logoAmrapali,
    logoColor: "#7B6000",
    salary: "7-10 LPA",
    expTag: "1-3 Years",
    typeTag: "Full Time",
    location: "Jaipur",
    posted: "2 days ago",
    domain: "Accessories",
    brandKey: "amrapaliJewels",
  },
  {
    id: "j16",
    title: "Costume Designer",
    company: "Ekaya Banaras",
    logo: logoEkayaBanaras,
    logoColor: "#6B21A8",
    salary: "6-9 LPA",
    expTag: "2-4 Years",
    typeTag: "Contract",
    location: "Varanasi",
    posted: "5 days ago",
    domain: "Costume Design",
    brandKey: "ekayaBanaras",
  },
  {
    id: "j17",
    title: "Buying Merchandiser",
    company: "FabIndia",
    logo: logoFabIndia,
    logoColor: "#1E40AF",
    salary: "8-12 LPA",
    expTag: "2-4 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "1 week ago",
    domain: "Buying & Merch",
    brandKey: "fabIndia",
  },
];

const filteredJobs: Job[] = [
  {
    id: "jf0",
    title: "Jr. Fashion Designer",
    company: "Sabyasachi",
    logo: logoSabyasachi,
    salary: "10-12 LPA",
    expTag: "0-3 Years",
    typeTag: "Full Time",
    location: "Kolkata",
    posted: "1 day ago",
    promoted: true,
    domain: "Fashion Design",
    brandKey: "sabyasachi",
  },
  {
    id: "s0",
    title: "Associate Fashion Designer",
    company: "Rohit Bal",
    logo: logoRohitBal,
    salary: "7-8 LPA",
    expTag: "0-2 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "1 day ago",
    domain: "Fashion Design",
    brandKey: "rohitBal",
  },
  {
    id: "jf1",
    title: "Jr. Fashion Designer",
    company: "Abu Jani Sandeep Khosla",
    logo: logoAbuJani,
    salary: "7-8 LPA",
    expTag: "1-2 Years",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "3 days ago",
    domain: "Fashion Design",
    brandKey: "abuJaniSandeepKhosla",
  },
  {
    id: "j0",
    title: "Associate Fashion Designer",
    company: "Papa Don't Preach",
    logo: logoPapaDontPreach,
    salary: "7-8 LPA",
    expTag: "0-3 Years",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "2 days ago",
    promoted: true,
    domain: "Fashion Design",
    brandKey: "papaDontPreach",
  },
  {
    id: "j14",
    title: "Fashion Illustrator",
    company: "Anavila",
    logo: logoAnavila,
    logoColor: "#2C7A5E",
    salary: "4-6 LPA",
    expTag: "Fresher",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "1 day ago",
    domain: "Fashion Design",
    brandKey: "anavila",
  },
  {
    id: "j12",
    title: "Womenswear Designer",
    company: "Raw Mango",
    logo: logoRawMango,
    logoColor: "#C35A2A",
    salary: "6-9 LPA",
    expTag: "1-3 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "3 days ago",
    domain: "Fashion Design",
    brandKey: "rawMango",
  },
];

const appliedJobs: Job[] = [
  {
    id: "ja0",
    title: "Jr. Fashion Designer",
    company: "Sabyasachi",
    logo: logoSabyasachi,
    salary: "10-12 LPA",
    expTag: "0-3 Years",
    typeTag: "Full Time",
    location: "Kolkata",
    posted: "1 day ago",
    domain: "Fashion Design",
    brandKey: "sabyasachi",
  },
  {
    id: "ja1",
    title: "Womenswear Designer",
    company: "Raw Mango",
    logo: logoRawMango,
    logoColor: "#C35A2A",
    salary: "6-9 LPA",
    expTag: "1-3 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "5 days ago",
    domain: "Fashion Design",
    brandKey: "rawMango",
  },
  {
    id: "ja2",
    title: "Print Designer",
    company: "Péro",
    logo: logoPero,
    logoColor: "#4A5568",
    salary: "5-8 LPA",
    expTag: "0-2 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "1 week ago",
    domain: "Surface & Print",
    brandKey: "pero",
  },
];

const similarJobs: Job[] = [
  {
    id: "s0",
    title: "Associate Fashion Designer",
    company: "Rohit Bal",
    logo: logoRohitBal,
    salary: "7-8 LPA",
    expTag: "0-2 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "4hr ago",
    domain: "Fashion Design",
    brandKey: "rohitBal",
  },
  {
    id: "s1",
    title: "Jr. Fashion Designer",
    company: "Abu Jani Sandeep Khosla",
    logo: logoAbuJani,
    salary: "7-8 LPA",
    expTag: "1-2 Years",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "4hr ago",
    domain: "Fashion Design",
    brandKey: "abuJaniSandeepKhosla",
  },
  {
    id: "s2",
    title: "Footwear Designer",
    company: "Anita Dongre",
    logo: logoAnitaDongre,
    salary: "5-6 LPA",
    expTag: "1-2 Years",
    typeTag: "Contract",
    location: "Mumbai",
    posted: "4hr ago",
    domain: "Accessories",
    brandKey: "anitaDongre",
  },
];

// ─── Role-specific content ─────────────────────────────────────────────────────

// Avatar constants removed — identities come from reviewIdentities.ts

export interface ReviewEntry {
  avatar: string;
  name: string;
  role: string;
  rating: number;
  title: string;
  text: string;
}
export interface RoleContent {
  roleSnapshot: { keyWork: string; idealCandidate: string; skillsRequired: string };
  workplaceInsights: { label: string; text: string }[];
  description: string;
  reviews: ReviewEntry[];
}

function fashionRoleContent(job: Job): RoleContent {
  return {
    roleSnapshot: {
      keyWork: "Sketch silhouettes, prepare tech packs, attend fittings, and support production handoffs.",
      idealCandidate: "Appreciation for Indian craft, strong construction sensibility, collaborative mindset.",
      skillsRequired: "Flat sketching in Illustrator, garment construction basics, solid textile knowledge.",
    },
    workplaceInsights: [
      { label: "Creative mentorship",    text: "Senior designers guide juniors from concept mood boarding through to production sign-off." },
      { label: "Heritage immersion",     text: "Daily exposure to handloom, zari, and embroidery traditions — unavailable in any classroom." },
      { label: "Growth-oriented culture", text: "Pitch ideas, take creative ownership, and grow into increasingly senior roles over time." },
    ],
    description: `Are you a designer who wants your work to become part of India's most celebrated fashion story? If you have a deep appreciation for Indian craftsmanship, textiles, and detail-driven design, this is your opportunity.\n\n${job.company} is seeking a ${job.title} to join their creative studio in ${job.location}. This is a ${job.typeTag} position where you will learn by doing — working side by side with senior designers, artisans, and production teams across seasonal collections.\n\nYour day-to-day will include developing sketches and technical specifications, sourcing textiles and surface embellishments, attending fitting sessions, and coordinating with craft clusters and manufacturing partners. A rare chance to be immersed in one of India's most storied design houses and build a career rooted in authentic Indian craftsmanship.`,
    reviews: [
      // Job pool A — F01 M01 F02 M02 F03 M03 F04 M04 + ANON (unique within pool)
      { ...rv("F01"), rating: 5, title: "Incredible learning curve",             text: "Every single day I was learning something new — whether it was the way zardozi is applied at scale or how pattern grading works for couture silhouettes. The senior team are extremely open to sharing knowledge and genuinely invested in your growth." },
      { ...rv("M01"), rating: 5, title: "Best decision of my career",            text: `Joining ${job.company} was the best decision I made. The creative energy on the floor is unlike anything I experienced during my degree. You're pushed to think deeply about every design choice, which makes you a sharper designer.` },
      { ...rvAnon(),  rating: 4, title: "Challenging but rewarding",             text: "The pace is demanding and the deadlines are tight, especially during collection season. But the exposure to real couture production is worth every challenging moment. I grew more in six months here than in two years elsewhere." },
      { ...rv("F02"), rating: 4, title: "Rich craft traditions",                 text: "Working here opened my eyes to how deeply rooted Indian fashion is in regional craft traditions. Every collection is a research journey. The attention to sourcing and material authenticity is something very few studios practice at this level." },
      { ...rv("M02"), rating: 5, title: "A transformative internship",           text: "I came in expecting basic tasks and instead I was attending fittings, sourcing fabric with the design team, and presenting mood boards by week three. The trust this studio places in young designers is extraordinary." },
      { ...rv("F03"), rating: 4, title: "Strong collaborative culture",          text: "The team works closely together across collections and there is a genuine sense of shared ownership over the work. You feel proud of what you put out because everyone has invested deeply in the process." },
      { ...rv("M03"), rating: 5, title: "World-class craftsmanship exposure",   text: "Working alongside master karigar families and understanding how traditional embroidery techniques are passed down and evolved is a privilege that permanently changed my relationship with design." },
      { ...rv("F04"), rating: 4, title: "A real launch pad",                    text: "I came fresh out of NIFT and this role gave me a real understanding of how a design house actually functions — not just the creative side but the technical, business, and craft dimensions too. An invaluable foundation." },
      { ...rv("M04"), rating: 5, title: "The benchmark for Indian fashion",     text: `${job.company} sets the benchmark for what Indian fashion can be. The rigor, the heritage, the craft relationships — nothing else in the industry comes close. If you get the opportunity to work here, take it without hesitation.` },
    ],
  };
}

function accessoriesRoleContent(job: Job): RoleContent {
  return {
    roleSnapshot: {
      keyWork: "Sketch concepts, source materials and hardware, review prototypes, sign off production.",
      idealCandidate: "Passion for 3D form and materials, technical drawing skills, hardware sourcing knowledge.",
      skillsRequired: "Technical drawing, material sourcing, Rhino basics, vendor communication, colour trends.",
    },
    workplaceInsights: [
      { label: "Materials expertise",           text: "Hands-on learning across leather, hardware, and stones — rare junior-level material exposure." },
      { label: "End-to-end ownership",           text: "From first sketch to the retail floor — full production knowledge built from day one." },
      { label: "Cross-functional collaboration", text: "Buying and merchandising exposure builds commercial literacy that accelerates your career." },
    ],
    description: `Are you a designer drawn to the tactile — to materials, form, and the craft of creating objects that complete a look? ${job.company} is seeking a ${job.title} to join their accessories design studio in ${job.location}.\n\nThis is a ${job.typeTag} role where you will develop accessories collections from initial concept through to production. Your work will span concept ideation, technical sketching, hardware and material sourcing, prototype reviews, and vendor coordination.\n\nJoin a team that is redefining Indian accessories design — where traditional craft sensibility meets contemporary product thinking.`,
    reviews: [
      // Job pool B — F05 M05 F06 M06 F07 M07 F08 M08 + ANON (unique within pool)
      { ...rv("F05"), rating: 5, title: "Unmatched materials exposure",           text: "I never expected to work with such a range of materials — python leather, brass hardware, hand-knotted silk threads. The material education here cannot be replicated in any design program." },
      { ...rv("M05"), rating: 4, title: "Great team energy",                      text: "The accessories team is tight-knit and very collaborative. Senior designers are genuinely invested in sharing knowledge, and the culture encourages asking questions and exploring beyond your immediate brief." },
      { ...rvAnon(),  rating: 4, title: "Steep but rewarding learning curve",     text: "The workload is significant, especially when multiple collections run in parallel. But the quality of work you are exposed to and the trust placed in junior designers makes it absolutely worth it." },
      { ...rv("F06"), rating: 5, title: "Best internship I could have asked for", text: "I was involved in real projects from day one — attending vendor visits, sitting in on prototype reviews, contributing to colorway decisions. This is not a coffee-fetching internship; it is a genuine design education." },
      { ...rv("M06"), rating: 4, title: "Serious craft commitment",               text: "The studio's commitment to craft is remarkable. Decisions about materials, construction, and finish are made with real care and consideration. As a designer you develop deep respect for the process and for quality." },
      { ...rv("F07"), rating: 5, title: "Where careers are made",                 text: "The skills and relationships I built in this studio have been foundational to everything I have done since. There is a reason this company consistently produces some of the best designers working in Indian accessories today." },
      { ...rv("M07"), rating: 4, title: "Deep product understanding",             text: "What I most valued was understanding a product end-to-end — not just the design but the construction, costs, vendor relationships, and retail context. This is rare access for a young designer." },
      { ...rv("F08"), rating: 5, title: "Creative and commercial balance",        text: "This studio genuinely understands how to balance creative ambition with commercial reality. You learn to design beautifully while also thinking practically — a combination that is incredibly valuable in the industry." },
      { ...rv("M08"), rating: 4, title: "A strong foundation",                    text: "Starting your career here gives you a foundation that is very hard to replicate. The standards are high, the mentors are excellent, and the work you produce is something you will be proud of for a long time." },
    ],
  };
}

function printRoleContent(job: Job): RoleContent {
  return {
    roleSnapshot: {
      keyWork: "Create repeat patterns and colourways for seasonal collections — digital and artisan print.",
      idealCandidate: "Strong pattern and colour command, digital illustration skills, curiosity for Indian craft.",
      skillsRequired: "Photoshop and Illustrator, repeat construction, colourway development, print production basics.",
    },
    workplaceInsights: [
      { label: "Artisan print collaboration", text: "Work directly with block-printers and screen studios from artwork brief to finished fabric." },
      { label: "Creative research culture",   text: "Deep archival and cultural research begins every collection — travel and study actively encouraged." },
      { label: "Technical depth",             text: "Repeats, separations, and print production build rare versatility as a surface designer." },
    ],
    description: `Are you a designer who sees stories in patterns — in repeat motifs, colour relationships, and surface texture? ${job.company} is looking for a ${job.title} to join their surface design studio in ${job.location}.\n\nThis is a ${job.typeTag} role where you will create original print artworks, colour stories, and repeat patterns for use across seasonal garment collections. You will work with both digital tools and traditional craft techniques — from screen and block printing to digital and discharge — collaborating closely with artisan printing partners.\n\nBring your distinct design voice to a studio that values both contemporary visual language and India's extraordinary heritage of hand-printed textiles.`,
    reviews: [
      // Job pool C — M09 F09 M10 F10 M11 F11 M12 F12 + ANON (unique within pool)
      { ...rv("M09"), rating: 5, title: "Best environment for a print designer",  text: "The depth of research that goes into every collection here is extraordinary. You are not just creating pretty patterns — you are telling stories rooted in specific craft traditions, cultural archives, and seasonal concepts." },
      { ...rv("F09"), rating: 5, title: "Exceptional creative freedom",           text: "I was given genuine creative space to develop my own design language from a relatively early stage. The team values distinct voices and encourages you to push beyond safe, commercial pattern solutions." },
      { ...rvAnon(),  rating: 4, title: "Intense but creatively fulfilling",      text: "Collection deadlines are real and the pace picks up significantly during launch periods. But the level of creative work you are producing and the craft relationships you are building make the intensity completely worthwhile." },
      { ...rv("M10"), rating: 4, title: "Strong technical foundation",            text: "This studio taught me more about the technical side of print production — repeats, separations, colour matching — than any other experience. The blend of digital fluency and artisan collaboration is very rare." },
      { ...rv("F10"), rating: 5, title: "A genuine design education",             text: "As an intern I was involved in actual collection briefs, not just admin tasks. I produced repeat artworks that went into production — an extraordinary thing to be able to say about an internship." },
      { ...rv("M11"), rating: 4, title: "Rare artisan access",                    text: "The opportunity to visit block-printing villages and work directly with craft communities was something I did not expect from this role. It fundamentally changed how I think about surface design and its relationship to Indian craft." },
      { ...rv("F11"), rating: 5, title: "Sets the standard",                      text: `${job.company} is genuinely setting the standard for print and surface design in Indian fashion. The rigour, the craft relationships, and the creative ambition make this an extraordinary place to grow.` },
      { ...rv("M12"), rating: 4, title: "A studio that takes craft seriously",    text: "Very few studios in the country approach print and textile with the same level of seriousness and investment as this team. If you care about craft, this is the place to build your career." },
      { ...rv("F12"), rating: 5, title: "Where surface design careers are launched", text: "The combination of technical training, creative development, and artisan exposure here is unmatched. I left with a professional foundation that continues to define how I approach every project." },
    ],
  };
}

export function getRoleContent(job: Job): RoleContent {
  const d = job.domain ?? "";
  const t = job.title.toLowerCase();
  if (d === "Accessories" || t.includes("footwear") || t.includes("jewel") || t.includes("accessor")) {
    return accessoriesRoleContent(job);
  }
  if (d === "Surface & Print" || t.includes("print") || t.includes("textile")) {
    return printRoleContent(job);
  }
  return fashionRoleContent(job);
}

// ─── Filter options ───────────────────────────────────────────────────────────

const DISCOVER_FILTERS: DiscoverFilter[] = [
  "Job Type",
  "Experience",
  "Salary / Stipend",
  "Location",
  "Company Category",
  "Design Domain",
];
const APPLIED_FILTERS: AppliedFilter[] = [
  "Status",
  "Date Applied",
  "Company",
  "Job Type",
  "Work Mode",
];

const DISCOVER_FILTER_OPTIONS: Record<DiscoverFilter, string[]> = {
  "Job Type": ["All", "Internship", "Full-time", "Freelance", "Contract"],
  Experience: ["Fresher", "0–1 yr", "1–3 yrs", "3–5 yrs", "5+ yrs"],
  "Salary / Stipend": [],
  Location: [],
  "Company Category": [
    "Design House",
    "Couture Label",
    "Export House",
    "Retail Brand",
    "International Brand",
    "Textile Mill",
    "Accessories Brand",
    "D2C / Startup",
    "Craft NGO",
    "Film & Costume",
  ],
  "Design Domain": [
    "Fashion Design",
    "Textile Design",
    "Knitwear",
    "Accessories",
    "Surface & Print",
    "Sustainable Fashion",
    "Buying & Merch",
    "Fashion Communication",
    "Costume Design",
  ],
};

const APPLIED_FILTER_OPTIONS: Record<AppliedFilter, string[]> = {
  Status: ["Applied", "Interviewing", "Offered", "Rejected", "Withdrawn"],
  "Date Applied": ["Today", "This Week", "This Month", "Custom Range"],
  Company: [
    "Sabyasachi",
    "Raw Mango",
    "Péro",
    "Anita Dongre",
    "Masaba",
    "Gaurav Gupta",
    "Manish Malhotra",
    "Papa Don't Preach",
    "JJ Valya",
    "Rohit Bal",
    "Anavila",
  ],
  "Job Type": ["Full-time", "Internship", "Contract"],
  "Work Mode": ["Remote", "Hybrid", "On-site"],
};

const INTERNSHIP_STIPENDS = [
  "₹5k–10k/mo",
  "₹10k–15k/mo",
  "₹15k–25k/mo",
  "₹25k+/mo",
];
const FULLTIME_LPA = [
  "0–3 LPA",
  "3–6 LPA",
  "6–10 LPA",
  "10–15 LPA",
  "15–20 LPA",
  "20+ LPA",
];
const LOCATION_MODES = ["Remote", "On-site", "Hybrid"];
const LOCATION_CITIES = [
  "Mumbai",
  "New Delhi",
  "Kolkata",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Jaipur",
  "Varanasi",
];

const INIT_DISCOVER: Record<DiscoverFilter, Set<string>> = {
  "Job Type": new Set(),
  Experience: new Set(),
  "Salary / Stipend": new Set(),
  Location: new Set(),
  "Company Category": new Set(),
  "Design Domain": new Set(),
};
const INIT_APPLIED: Record<AppliedFilter, Set<string>> = {
  Status: new Set(),
  "Date Applied": new Set(),
  Company: new Set(),
  "Job Type": new Set(),
  "Work Mode": new Set(),
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const NON_FASHION_DOMAINS = new Set(["Buying & Merch", "Costume Design"]);

/** Filter all discover-tab jobs by the active filter selections. */
function applyDiscoverFilters(
  jobs: Job[],
  filters: Record<DiscoverFilter, Set<string>>
): Job[] {
  return jobs.filter((job) => {
    // Job Type
    const typeFilter = filters["Job Type"];
    if (typeFilter.size > 0 && !typeFilter.has("All")) {
      const t = (job.typeTag || "").toLowerCase();
      if (![...typeFilter].some((f) => t.includes(f.toLowerCase())))
        return false;
    }
    // Design Domain — exact match against job.domain
    const domainFilter = filters["Design Domain"];
    if (domainFilter.size > 0) {
      if (!job.domain || !domainFilter.has(job.domain)) return false;
    }
    // Location — match against city names only (ignore work-mode tokens)
    const locFilter = filters["Location"];
    if (locFilter.size > 0) {
      const cityTokens = new Set(LOCATION_CITIES);
      const citySelections = [...locFilter].filter((f) => cityTokens.has(f));
      if (
        citySelections.length > 0 &&
        !citySelections.some((c) => job.location?.includes(c))
      )
        return false;
    }
    return true;
  });
}

/** Filter applied-tab jobs by the active filter selections. */
function applyAppliedFilters(
  jobs: Job[],
  filters: Record<AppliedFilter, Set<string>>
): Job[] {
  // Normalize a string for loose comparison (remove hyphens and spaces)
  const norm = (s: string) => s.toLowerCase().replace(/[-\s]/g, "");

  return jobs.filter((job) => {
    // Status — all pre-seeded applied jobs are in "Applied" state.
    // Selecting any other status (Interviewing, Offered, Rejected, Withdrawn)
    // correctly produces zero results, triggering the empty state.
    const statusFilter = filters["Status"];
    if (statusFilter.size > 0 && !statusFilter.has("Applied")) return false;

    // Job Type — normalize both sides so "Full-time" matches "Full Time"
    const typeFilter = filters["Job Type"];
    if (typeFilter.size > 0) {
      const t = norm(job.typeTag || "");
      if (![...typeFilter].some((f) => t.includes(norm(f)))) return false;
    }

    // Company — exact match against company name
    const companyFilter = filters["Company"];
    if (companyFilter.size > 0) {
      if (!companyFilter.has(job.company)) return false;
    }

    return true;
  });
}

function isOutOfScope(job: Job): boolean {
  const exp = job.expTag.toLowerCase();
  const highExp =
    exp.includes("3-5") ||
    exp.includes("4-8") ||
    exp.includes("5-8") ||
    exp.includes("5+") ||
    exp.includes("4+");
  const nonFashion = !!job.domain && NON_FASHION_DOMAINS.has(job.domain);
  return highExp || nonFashion;
}

function cloneSets<K extends string>(
  r: Record<K, Set<string>>
): Record<K, Set<string>> {
  return Object.fromEntries(
    Object.entries(r).map(([k, v]) => [k, new Set(v as Set<string>)])
  ) as Record<K, Set<string>>;
}

// ─── Brand-keyed job detail gallery images ────────────────────────────────────
// Each brand maps to its own curated image set (1–3 images).
// Gallery layout adapts dynamically: 1 → full-width, 2 → side-by-side, 3 → masonry.
const JOB_DETAIL_IMAGES: Record<string, string[]> = {
  sabyasachi:    [imgJdSabyasachi1,   imgJdSabyasachi2,   imgJdSabyasachi3],
  ekayaBanaras:  [imgJdEkayaBanaras1, imgJdEkayaBanaras2, imgJdEkayaBanaras3],
  amrapaliJewels:[imgJdAmrapali1,     imgJdAmrapali2],
  masaba:        [imgJdMasaba1,       imgJdMasaba2,       imgJdMasaba3],
  anavila:       [imgJdAnavila1,      imgJdAnavila2,      imgJdAnavila3],
  pero:          [imgJdPero1,         imgJdPero2,         imgJdPero3],
  rawMango:      [imgJdRawMango1,     imgJdRawMango2,     imgJdRawMango3],
  jjValya:       [imgJdJJValaya1,     imgJdJJValaya2,     imgJdJJValaya3],
};

function getDetailImages(job: Job): string[] {
  return job.brandKey ? (JOB_DETAIL_IMAGES[job.brandKey] ?? []) : [];
}

// ─── Dynamic job detail gallery — adapts to 1, 2, or 3 images ────────────────
function JobDetailGallery({ images }: { images: string[] }) {
  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="w-full h-[200px] rounded-[4px] overflow-hidden relative">
        <img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src={images[0]} />
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="flex gap-[8px] w-full">
        <div className="flex-1 h-[181px] rounded-[4px] overflow-hidden relative">
          <img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src={images[0]} />
        </div>
        <div className="flex-1 h-[181px] rounded-[4px] overflow-hidden relative">
          <img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src={images[1]} />
        </div>
      </div>
    );
  }

  // 3-image masonry: left column (2 stacked) + right column (1 tall)
  return (
    <div className="flex gap-[8px] items-center w-full">
      <div className="flex flex-col gap-[8px]">
        <div className="h-[99px] w-[124px] rounded-[4px] overflow-hidden relative">
          <img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src={images[0]} />
        </div>
        <div className="h-[74px] w-[124px] rounded-[4px] overflow-hidden relative">
          <img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src={images[1]} />
        </div>
      </div>
      <div className="h-[181px] flex-1 rounded-[4px] overflow-hidden relative">
        <img alt="" className="absolute inset-0 w-full h-full object-cover object-center" src={images[2]} />
      </div>
    </div>
  );
}

// ─── Bottom nav ───────────────────────────────────────────────────────────────


// ─── Out-of-scope toast (Figma exact: _fragment/toast-out-of-scope-job) ──────

function OutOfScopeToast({
  onDismiss,
  onContinue,
}: {
  onDismiss: () => void;
  onContinue: () => void;
}) {
  return (
    <div className="fixed bottom-[90px] left-1/2 -translate-x-1/2 z-[60] w-[calc(100%-32px)] max-w-[440px]">
      <div className="bg-[#fef0d2] drop-shadow-[0px_1px_2px_rgba(26,26,26,0.6)] relative rounded-[8px] w-full border border-[#a26807]">
        <div className="flex items-center gap-[12px] px-[16px] py-[12px]">
          <div className="flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-w-px">
            <p className="font-['Manrope',sans-serif] font-normal text-[#a26807] text-[12px] leading-[18px] tracking-[0.24px] w-full">
              You're early in your career. We value your potential.
            </p>
            <div className="flex items-end py-[12px] w-full">
              <button onClick={onContinue} className="cursor-pointer">
                <span className="font-['Manrope',sans-serif] font-semibold text-[#a26807] text-[14px] leading-[20px] tracking-[0.14px]">
                  Continue to Apply
                </span>
              </button>
            </div>
          </div>
          <button
            onClick={onDismiss}
            className="cursor-pointer flex items-center p-[8px] shrink-0"
          >
            <X size={24} color="#A26807" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Application status modal (_component/application-status-modal) ──────────

function ApplicationStatusModal({
  onClose,
  onContinueApplying,
}: {
  onClose: () => void;
  onContinueApplying: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-[rgba(26,26,26,0.5)] flex items-center justify-center px-[16px]">
      <div className="bg-white drop-shadow-[0px_4px_2px_rgba(200,192,212,0.6)] flex flex-col gap-[36px] items-center justify-center px-[16px] py-[24px] rounded-[8px] w-full max-w-[358px] border border-[rgba(157,148,170,0.4)]">
        {/* success message */}
        <div className="flex flex-col gap-[12px] items-center w-full">
          <div className="flex items-start justify-center w-full">
            <div className="bg-[#d6f5dd] flex items-center p-[8px] rounded-[200px]">
              <Check size={24} color="#208436" weight="bold" />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] items-start w-full text-center">
            <p className="font-['Roboto_Serif',serif] font-semibold not-italic text-[#1a1128] text-[20px] leading-[28px] w-full">
              Your application is sent
            </p>
            <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[16px] leading-[25px] tracking-[0.16px] w-full">
              We'll notify you of any updates.
            </p>
          </div>
        </div>

        {/* application progress */}
        <div className="bg-[#f7f4fa] rounded-[4px] w-full">
          <div className="flex flex-col gap-[24px] items-center justify-center px-[16px] py-[12px]">
            <p className="font-['Manrope',sans-serif] font-semibold text-[#433059] text-[18px] leading-[28px] text-center w-full">
              Application status
            </p>
            <div className="flex gap-[16px] items-start w-full">
              <div className="flex flex-col gap-[12px] items-center shrink-0 w-[49px]">
                <div className="size-[12px] rounded-full bg-[#5E28B5]" />
                <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[14px] leading-[21px] text-center w-full">
                  Applied
                </p>
              </div>
              <div className="flex flex-col gap-[12px] items-center shrink-0">
                <div className="size-[12px] rounded-full bg-[#6B5F7A]" />
                <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[14px] leading-[21px] text-center whitespace-nowrap">
                  In review
                </p>
              </div>
              <div className="flex flex-col gap-[12px] items-center shrink-0">
                <div className="size-[12px] rounded-full bg-[#6B5F7A]" />
                <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[14px] leading-[21px] text-center whitespace-nowrap">
                  Shortlisted
                </p>
              </div>
              <div className="flex flex-col gap-[12px] items-center shrink-0">
                <div className="size-[12px] rounded-full bg-[#6B5F7A]" />
                <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[14px] leading-[21px] text-center whitespace-nowrap">
                  Decision
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* action buttons */}
        <div className="flex gap-[12px] items-start w-full">
          <Button
            variant="outline"
            size="lg"
            onClick={onClose}
            className="w-[112px] shrink-0"
          >
            Close
          </Button>
          <Button variant="gradient" size="lg" onClick={onContinueApplying} className="flex-1 min-w-px">
            Continue Applying
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── No-results state (shared/not-found without back button) ──────────────────

function NoResultsState() {
  return (
    <div className="flex flex-col gap-[12px] items-center px-[16px] py-[12px] w-full">
      <div className="h-[319px] mix-blend-darken relative w-full shrink-0">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-bottom size-full pointer-events-none"
          src={imgNotFound}
        />
      </div>
      <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] text-center w-full">
        No matches this time
      </p>
    </div>
  );
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
        className={`font-['Manrope',sans-serif] text-[16px] leading-[25px] tracking-[0.16px] ${selected ? "font-medium text-[#1a1128]" : "font-normal text-[#6b5f7a]"}`}
      >
        {label}
      </span>
    </button>
  );
}

// ─── Filter bottom sheet ──────────────────────────────────────────────────────

function FilterSheet({
  jobsTab,
  onClose,
  onShowResults,
}: {
  jobsTab: JobsTab;
  onClose: () => void;
  onShowResults: (filters: ActiveFilters) => void;
}) {
  const isDiscover = jobsTab === "Discover";
  const [discoverFilter, setDiscoverFilter] =
    useState<DiscoverFilter>("Job Type");
  const [appliedFilter, setAppliedFilter] = useState<AppliedFilter>("Status");
  const [companySearch, setCompanySearch] = useState("");
  const [discoverSel, setDiscoverSel] = useState<
    Record<DiscoverFilter, Set<string>>
  >(cloneSets(INIT_DISCOVER));
  const [appliedSel, setAppliedSel] = useState<
    Record<AppliedFilter, Set<string>>
  >(cloneSets(INIT_APPLIED));

  function toggleDiscover(opt: string) {
    setDiscoverSel((prev) => {
      const next = new Set(prev[discoverFilter]);
      if (next.has(opt)) next.delete(opt);
      else next.add(opt);
      return { ...prev, [discoverFilter]: next };
    });
  }
  function toggleApplied(opt: string) {
    setAppliedSel((prev) => {
      const next = new Set(prev[appliedFilter]);
      if (next.has(opt)) next.delete(opt);
      else next.add(opt);
      return { ...prev, [appliedFilter]: next };
    });
  }
  function clearAll() {
    if (isDiscover) setDiscoverSel(cloneSets(INIT_DISCOVER));
    else setAppliedSel(cloneSets(INIT_APPLIED));
  }
  function handleShowResults() {
    onShowResults({ discover: discoverSel, applied: appliedSel });
    onClose();
  }

  function renderSecondaryContent() {
    if (isDiscover) {
      if (discoverFilter === "Salary / Stipend") {
        const sel = discoverSel["Salary / Stipend"];
        return (
          <div className="flex flex-col gap-[20px] px-[16px] pt-[20px] pb-[20px] w-full">
            <div className="flex flex-col gap-[10px]">
              <p className="font-['Manrope',sans-serif] font-semibold text-[#2d2040] text-[14px] leading-[21px] tracking-[0.14px]">
                Internship Stipend
              </p>
              <div className="flex flex-wrap gap-[12px]">
                {INTERNSHIP_STIPENDS.map((opt) => (
                  <FilterChip
                    key={opt}
                    label={opt}
                    selected={sel.has(opt)}
                    onClick={() => toggleDiscover(opt)}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-['Manrope',sans-serif] font-semibold text-[#2d2040] text-[14px] leading-[21px] tracking-[0.14px]">
                Full-time (LPA)
              </p>
              <div className="flex flex-wrap gap-[12px]">
                {FULLTIME_LPA.map((opt) => (
                  <FilterChip
                    key={opt}
                    label={opt}
                    selected={sel.has(opt)}
                    onClick={() => toggleDiscover(opt)}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      }
      if (discoverFilter === "Location") {
        const sel = discoverSel["Location"];
        return (
          <div className="flex flex-col gap-[20px] px-[16px] pt-[20px] pb-[20px] w-full">
            <div className="flex flex-col gap-[10px]">
              <p className="font-['Manrope',sans-serif] font-semibold text-[#2d2040] text-[14px] leading-[21px] tracking-[0.14px]">
                Work Mode
              </p>
              <div className="flex flex-wrap gap-[12px]">
                {LOCATION_MODES.map((opt) => (
                  <FilterChip
                    key={opt}
                    label={opt}
                    selected={sel.has(opt)}
                    onClick={() => toggleDiscover(opt)}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="font-['Manrope',sans-serif] font-semibold text-[#2d2040] text-[14px] leading-[21px] tracking-[0.14px]">
                City
              </p>
              <div className="flex flex-wrap gap-[12px]">
                {LOCATION_CITIES.map((opt) => (
                  <FilterChip
                    key={opt}
                    label={opt}
                    selected={sel.has(opt)}
                    onClick={() => toggleDiscover(opt)}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      }
      const opts = DISCOVER_FILTER_OPTIONS[discoverFilter];
      const sel = discoverSel[discoverFilter];
      return (
        <div className="flex flex-wrap gap-[12px] px-[16px] pt-[20px] pb-[20px] w-full">
          {opts.map((opt) => (
            <FilterChip
              key={opt}
              label={opt}
              selected={sel.has(opt)}
              onClick={() => toggleDiscover(opt)}
            />
          ))}
        </div>
      );
    } else {
      if (appliedFilter === "Company") {
        const sel = appliedSel["Company"];
        const companies = APPLIED_FILTER_OPTIONS["Company"].filter((c) =>
          c.toLowerCase().includes(companySearch.toLowerCase())
        );
        return (
          <div className="flex flex-col gap-[12px] px-[16px] pt-[20px] pb-[20px] w-full">
            <SearchBar
              placeholder="Search company"
              value={companySearch}
              onChange={setCompanySearch}
            />
            <div className="flex flex-wrap gap-[12px]">
              {companies.map((opt) => (
                <FilterChip
                  key={opt}
                  label={opt}
                  selected={sel.has(opt)}
                  onClick={() => toggleApplied(opt)}
                />
              ))}
            </div>
          </div>
        );
      }
      const opts = APPLIED_FILTER_OPTIONS[appliedFilter];
      const sel = appliedSel[appliedFilter];
      return (
        <div className="flex flex-wrap gap-[12px] px-[16px] pt-[20px] pb-[20px] w-full">
          {opts.map((opt) => (
            <FilterChip
              key={opt}
              label={opt}
              selected={sel.has(opt)}
              onClick={() => toggleApplied(opt)}
            />
          ))}
        </div>
      );
    }
  }

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-[rgba(26,26,26,0.5)] animate-in fade-in duration-200"
        onClick={onClose}
      />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-[60] bg-white rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-1px_4px_0px_rgba(26,26,26,0.6)] flex flex-col items-start overflow-hidden animate-in slide-in-from-bottom duration-[320ms] ease-[cubic-bezier(0.32,0.72,0,1)]">
        <div className="flex flex-col items-center p-[16px] w-full">
          <div className="bg-[#1a1128] h-[4px] rounded-[24px] w-[32px]" />
        </div>
        <div className="flex items-center px-[16px] pb-[12px] w-full">
          <p className="flex-1 font-['Manrope',sans-serif] font-semibold text-[#2d2040] text-[18px] leading-[28px] text-center">
            Filter
          </p>
        </div>
        <div className="w-full border-b border-[#e2d9ef]">
          <div
            className="flex gap-[8px] items-center px-[16px] pb-[12px] overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {(isDiscover ? DISCOVER_FILTERS : APPLIED_FILTERS).map((f) => {
              const isActive = isDiscover
                ? f === discoverFilter
                : f === appliedFilter;
              return (
                <button
                  key={f}
                  onClick={() =>
                    isDiscover
                      ? setDiscoverFilter(f as DiscoverFilter)
                      : setAppliedFilter(f as AppliedFilter)
                  }
                  className={`flex h-[40px] items-center justify-center px-[16px] py-[10px] rounded-[12px] shrink-0 cursor-pointer border whitespace-nowrap ${isActive ? "bg-[#b090ef] border-[#7d3aea]" : "bg-white border-[#e2d9ef]"}`}
                >
                  <span
                    className={`type-tab ${isActive ? "font-medium text-[#2d2040]" : "font-normal text-[#433059]"}`}
                  >
                    {f}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="w-full overflow-y-auto max-h-[260px]">
          {renderSecondaryContent()}
        </div>
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

// ─── Tab bar ──────────────────────────────────────────────────────────────────

function TabBar<T extends string>({
  tabs,
  active,
  onChange,
}: {
  tabs: T[];
  active: T;
  onChange: (t: T) => void;
}) {
  const activeIdx = tabs.indexOf(active);
  const pct = tabs.length > 0 ? 100 / tabs.length : 0;

  return (
    <div className="relative flex items-end border-b border-[#e2d9ef] bg-[#fffeff]">
      {/* Sliding indicator */}
      <div
        className="absolute bottom-0 h-[2px] rounded-t-[2px] bg-[#7d3aea] transition-transform duration-[220ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ width: `${pct}%`, transform: `translateX(${activeIdx * 100}%)` }}
      />
      {tabs.map((tab) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className="flex flex-1 flex-col items-center justify-end h-[44px] px-[20px] cursor-pointer gap-0 active:opacity-70 transition-opacity duration-75"
          >
            <span
              className={`font-['Manrope',sans-serif] text-[16px] pb-[8px] leading-[25px] transition-colors duration-150 ${isActive ? "font-semibold text-[#1a1128]" : "font-normal text-[#6b5f7a]"}`}
            >
              {tab}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ViewMoreBtn aliased to shared component so all call-sites stay unchanged
const ViewMoreBtn = ViewMoreButton;

// ─── Listing view ─────────────────────────────────────────────────────────────

const PAGE_SIZE = 3;

function ListingView({
  activeTab,
  onTabChange,
  appliedIds,
  onApply,
  onViewDetails,
  onFilter,
  isFiltered,
  isAppliedFiltered,
  activeFilters,
}: {
  activeTab: JobsTab;
  onTabChange: (t: JobsTab) => void;
  appliedIds: Set<string>;
  onApply: (job: Job) => void;
  onViewDetails: (job: Job) => void;
  onFilter: () => void;
  isFiltered: boolean;
  isAppliedFiltered: boolean;
  activeFilters: ActiveFilters | null;
}) {
  const navigate = useNavigate();
  const [visibleRecent, setVisibleRecent] = useState(PAGE_SIZE);
  const [visibleLatest, setVisibleLatest] = useState(PAGE_SIZE);
  const [visibleFiltered, setVisibleFiltered] = useState(PAGE_SIZE);

  // Compute filtered jobs from all available jobs based on active filter selections.
  // Falls back to the static filteredJobs when no filters are stored yet.
  const allDiscoverJobs = [...recentJobs, ...latestJobs];
  const computedFilteredJobs =
    activeFilters
      ? applyDiscoverFilters(allDiscoverJobs, activeFilters.discover)
      : filteredJobs;

  // Build the live applied-jobs list: static pre-seeded jobs + jobs applied
  // during this session (from recentJobs/latestJobs via appliedIds).
  const userAppliedJobs = useMemo(() => {
    const seenIds = new Set(appliedJobs.map((j) => j.id));
    const sessionApplied = allDiscoverJobs.filter(
      (j) => appliedIds.has(j.id) && !seenIds.has(j.id)
    );
    return [...appliedJobs, ...sessionApplied];
  }, [appliedIds]);

  // When Applied tab has an active filter, compute the filtered subset.
  const computedAppliedJobs =
    isAppliedFiltered && activeFilters
      ? applyAppliedFilters(userAppliedJobs, activeFilters.applied)
      : userAppliedJobs;

  const searchPlaceholder =
    activeTab === "Discover"
      ? "Search job, brand, domain"
      : "Search job, brand";

  return (
    <div className="flex flex-col flex-1 overflow-hidden h-full">
      <div className="shrink-0 bg-[#fffeff] shadow-[0px_1px_2px_rgba(200,192,212,0.4)]">
        <div className="flex gap-[12px] items-center px-[16px] py-[12px]">
          <SearchBar placeholder={searchPlaceholder} className="flex-1" />
          <button
            onClick={onFilter}
            className="p-[8px] cursor-pointer shrink-0"
          >
            <Funnel size={24} color="#6B5F7A" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-[88px]">
        <TabBar
          tabs={["Discover", "Applied"] as JobsTab[]}
          active={activeTab}
          onChange={onTabChange}
        />
        {activeTab === "Discover" ? (
          isFiltered ? (
            computedFilteredJobs.length === 0 ? (
              // ── Empty filter state — matches Figma shared/not-found layout ──
              <>
                <NoResultsState />
                <div className="flex flex-col gap-[16px] items-start p-[16px]">
                  <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] w-full">
                    Similar jobs
                  </p>
                  <div className="flex flex-col gap-[4px] items-start w-full">
                    {recentJobs.slice(0, PAGE_SIZE).map((job) => (
                      <JobCard
                        key={job.id}
                        job={job}
                        applied={appliedIds.has(job.id)}
                        onApply={() => onApply(job)}
                        onViewDetails={() => onViewDetails(job)}
                        onCompanyClick={job.brandKey ? () => navigate("/brand/overview", { state: { brandKey: job.brandKey } }) : undefined}
                      />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              // ── Filtered results exist ──
              <div className="flex flex-col gap-[16px] items-start px-[16px] py-[20px]">
                <p className="font-['Roboto_Serif',serif] font-semibold not-italic text-[#1a1128] text-[20px] leading-[28px] w-full">
                  Jobs matching your search
                </p>
                <div className="flex flex-col gap-[4px] items-start w-full">
                  {computedFilteredJobs.slice(0, visibleFiltered).map((job) => (
                    <JobCard
                      key={job.id}
                      job={job}
                      applied={appliedIds.has(job.id)}
                      onApply={() => onApply(job)}
                      onViewDetails={() => onViewDetails(job)}
                    />
                  ))}
                </div>
                {visibleFiltered < computedFilteredJobs.length && (
                  <ViewMoreBtn
                    onClick={() =>
                      setVisibleFiltered((v) =>
                        Math.min(v + PAGE_SIZE, computedFilteredJobs.length)
                      )
                    }
                  />
                )}
              </div>
            )
          ) : (
            <>
              <div className="flex flex-col gap-[16px] items-start px-[16px] py-[20px]">
                <p className="font-['Roboto_Serif',serif] font-semibold not-italic text-[#1a1128] text-[20px] leading-[28px] w-full">
                  Recent jobs
                </p>
                <div className="flex flex-col gap-[4px] items-start w-full">
                  {recentJobs.slice(0, visibleRecent).map((job) => (
                    <JobCard
                      key={job.id}
                      job={job}
                      applied={appliedIds.has(job.id)}
                      onApply={() => onApply(job)}
                      onViewDetails={() => onViewDetails(job)}
                    />
                  ))}
                </div>
                {visibleRecent < recentJobs.length && (
                  <ViewMoreBtn
                    onClick={() =>
                      setVisibleRecent((v) =>
                        Math.min(v + PAGE_SIZE, recentJobs.length)
                      )
                    }
                  />
                )}
              </div>
              <div className="flex flex-col gap-[16px] items-start px-[16px] py-[20px] border-t border-[#f0ecf7]">
                <p className="font-['Roboto_Serif',serif] font-semibold not-italic text-[#1a1128] text-[20px] leading-[28px] w-full">
                  Latest job openings
                </p>
                <div className="flex flex-col gap-[4px] items-start w-full">
                  {latestJobs.slice(0, visibleLatest).map((job) => (
                    <JobCard
                      key={job.id}
                      job={job}
                      applied={appliedIds.has(job.id)}
                      onApply={() => onApply(job)}
                      onViewDetails={() => onViewDetails(job)}
                    />
                  ))}
                </div>
                {visibleLatest < latestJobs.length && (
                  <ViewMoreBtn
                    onClick={() =>
                      setVisibleLatest((v) =>
                        Math.min(v + PAGE_SIZE, latestJobs.length)
                      )
                    }
                  />
                )}
              </div>
            </>
          )
        ) : (
          isAppliedFiltered && computedAppliedJobs.length === 0 ? (
            // ── Empty applied-filter state — Figma: shared/job-applied-not-found ──
            <>
              <NoResultsState />
              <div className="flex flex-col gap-[16px] items-start px-[16px] py-[28px]">
                <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] w-full">
                  In review
                </p>
                <div className="flex flex-col gap-[4px] items-start w-full">
                  {userAppliedJobs.map((job) => (
                    <JobCard key={job.id} job={job} statusLabel="In Review" />
                  ))}
                </div>
              </div>
            </>
          ) : (
            // ── Normal applied list ──
            <div className="flex flex-col gap-[16px] items-start px-[16px] py-[28px]">
              <p className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] w-full">
                In review
              </p>
              <div className="flex flex-col gap-[4px] items-start w-full">
                {computedAppliedJobs.map((job) => (
                  <JobCard key={job.id} job={job} statusLabel="In Review" />
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

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

// ─── Detail view ──────────────────────────────────────────────────────────────

type DetailViewProps = {
  job: Job;
  detailTab: DetailTab;
  onTabChange: (t: DetailTab) => void;
  applied: boolean;
  onQuickApply: () => void;
  onBack: () => void;
  appliedIds: Set<string>;
  onApplyJob: (job: Job) => void;
  onViewDetailsJob: (job: Job) => void;
};

function DetailView({
  job,
  detailTab,
  onTabChange,
  applied,
  onQuickApply,
  onBack,
  appliedIds,
  onApplyJob,
  onViewDetailsJob,
}: DetailViewProps) {
  const navigate = useNavigate();

  const [descExpanded, setDescExpanded] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(3);

  const imgs = useMemo(() => getDetailImages(job), [job.id, job.brandKey]);

  // Save job-detail state
  useEffect(() => {
    sessionStorage.setItem(SK_JOB_ID, job.id);
  }, [job.id]);

  // Reset state when job changes
  useEffect(() => {
    setDescExpanded(false);
    setVisibleReviews(3);
  }, [job.id]);

  const roleContent = getRoleContent(job);

  const {
    roleSnapshot,
    workplaceInsights,
    description: descFull,
    reviews,
  } = roleContent;

  const descPreview = descFull.slice(0, 220);

  return (
    <div className="flex flex-col flex-1 overflow-hidden h-full">
      {/* Header */}
      <div className="shrink-0 bg-[#fffeff] shadow-[0px_1px_2px_rgba(200,192,212,0.4)]">
        <PageHeader
          title="Job Details"
          onBack={onBack}
          rightAction={
            <button className="p-2 cursor-pointer">
              <ShareFat size={24} color="#6B5F7A" />
            </button>
          }
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Company Header */}
        <JobDetailCompanyHeader job={job} />

        {/* Tabs */}
        <TabBar
          tabs={["Description", "Reviews"] as DetailTab[]}
          active={detailTab}
          onChange={onTabChange}
        />

        {/* DESCRIPTION TAB */}
        {detailTab === "Description" ? (
          <div className="flex flex-col gap-[24px] items-center pb-[20px] pt-[16px] px-[16px]">
            {/* Role Snapshot */}
            <div className="drop-shadow-[0px_1px_2px_rgba(132,111,132,0.12)] flex flex-col items-start w-full">
              <div
                className="mb-[-16px] relative rounded-tl-[12px] rounded-tr-[12px] w-full pb-[32px] pt-[16px] px-[16px]"
                style={{
                  backgroundImage:
                    "linear-gradient(264.845deg, rgb(247, 244, 250) 5.872%, rgb(239, 233, 252) 88.229%)",
                }}
              >
                <div className="flex gap-[12px] items-center">
                  <MagicWand size={20} color="#1A1128" weight="fill" />

                  <p className="font-['Manrope',sans-serif] font-semibold text-[#2d2040] text-[18px] leading-[28px]">
                    Role snapshot
                  </p>
                </div>
              </div>

              <div className="bg-white relative rounded-[12px] w-full border border-[#e2d9ef]">
                <div className="flex flex-col items-start px-[16px] py-[12px]">
                  <ul className="list-disc pl-[20px] flex flex-col gap-[2px]">
                    <li>
                      <span className="font-medium text-[#1a1128] text-[14px]">
                        Key Work:
                      </span>{" "}
                      <span className="text-[#6b5f7a] text-[14px]">
                        {truncateAiBulletItem(roleSnapshot.keyWork, 3)}
                      </span>
                    </li>

                    <li>
                      <span className="font-medium text-[#1a1128] text-[14px]">
                        Ideal Candidate:
                      </span>{" "}
                      <span className="text-[#6b5f7a] text-[14px]">
                        {truncateAiBulletItem(roleSnapshot.idealCandidate, 3)}
                      </span>
                    </li>

                    <li>
                      <span className="font-medium text-[#1a1128] text-[14px]">
                        Skills Required:
                      </span>{" "}
                      <span className="text-[#6b5f7a] text-[14px]">
                        {truncateAiBulletItem(roleSnapshot.skillsRequired, 3)}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Brand gallery — renders from curated folder only; null when brand has no mapped images */}
            <JobDetailGallery images={imgs} />

            {/* Description */}
            <div className="flex flex-col gap-[4px] items-start w-full">
              {descExpanded ? (
                descFull.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px]"
                  >
                    {para}
                  </p>
                ))
              ) : (
                <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px]">
                  {descPreview}...
                </p>
              )}

              <button
                onClick={() => setDescExpanded((v) => !v)}
                className="flex gap-[6px] items-center mt-[4px] cursor-pointer"
              >
                <span className="font-medium text-[#6b5f7a] text-[12px]">
                  {descExpanded ? "Read less" : "Read more"}
                </span>

                {descExpanded ? (
                  <CaretUp size={14} color="#6B5F7A" />
                ) : (
                  <CaretDown size={14} color="#6B5F7A" />
                )}
              </button>
            </div>
          </div>
        ) : (
          /* REVIEWS TAB */
          reviews.length === 0 ? (
            <div className="px-4 py-16 flex flex-col items-center gap-2">
              <p className="font-['Manrope',sans-serif] font-semibold text-[#6b5f7a] text-[16px] leading-[24px] text-center">
                No reviews available yet.
              </p>
              <p className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[14px] leading-[21px] text-center">
                Reviews will appear here once employees share their experience.
              </p>
            </div>
          ) : (
          <div className="flex flex-col gap-[24px] items-center pb-[20px] pt-[16px] px-[16px]">
            {/* Workplace Insights */}
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

                  <p className="font-semibold text-[#2d2040] text-[18px] leading-[28px]">
                    Workplace insights
                  </p>
                </div>
              </div>

              <div className="bg-white relative rounded-[12px] w-full border border-[#e2d9ef]">
                <div className="flex flex-col items-start px-[16px] py-[12px]">
                  <ul className="list-disc pl-[20px] flex flex-col gap-[2px]">
                    {workplaceInsights.map((insight, i) => (
                      <li key={i}>
                        <span className="font-medium text-[#1a1128] text-[14px]">
                          {insight.label}:
                        </span>{" "}
                        <span className="text-[#6b5f7a] text-[14px]">
                          {truncateAiBulletItem(insight.text, workplaceInsights.length)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Reviews */}
            {reviews.slice(0, visibleReviews).map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}

            {/* View More */}
            <ViewMoreButton
              onClick={() =>
                setVisibleReviews((v) =>
                  Math.min(v + 3, reviews.length)
                )
              }
              className={
                visibleReviews >= reviews.length
                  ? "pointer-events-none cursor-default"
                  : ""
              }
            />
          </div>
          )
        )}

        {/* Similar Jobs */}
        <div className="flex flex-col gap-[16px] items-start px-[16px] py-[20px] border-t border-[#f0ecf7]">
          <p className="font-['Roboto_Serif',serif] font-semibold text-[#2d2040] text-[20px] leading-[28px] w-full">
            Similar jobs
          </p>

          <div className="flex flex-col gap-[4px] items-start w-full">
            {similarJobs
              .filter((sj) => sj.id !== job.id)
              .map((sj) => (
                <JobCard
                  key={sj.id}
                  job={sj}
                  applied={appliedIds.has(sj.id)}
                  onApply={() => onApplyJob(sj)}
                  onViewDetails={() => onViewDetailsJob(sj)}
                  onCompanyClick={sj.brandKey ? () => navigate("/brand/overview", { state: { brandKey: sj.brandKey, fromJob: sj } }) : undefined}
                />
              ))}
          </div>

          <ViewMoreBtn onClick={() => {}} />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white shrink-0 shadow-[0px_-1px_2px_rgba(200,192,212,0.6)]">
        <div className="flex gap-[16px] items-start pb-[24px] pt-[12px] px-[16px]">
          <Button
            variant="outline"
            size="lg"
            className="w-[140px] shrink-0"
          >
            <span className="text-[#7d3aea]">Save</span>
          </Button>

          <Button
            variant={applied ? "success" : "gradient"}
            size="lg"
            onClick={applied ? undefined : onQuickApply}
            disabled={applied}
            className="flex-1 disabled:opacity-100"
          >
            {applied && (
              <Check
                className="size-[18px]"
                color="#208436"
                weight="bold"
              />
            )}

            {applied ? "Applied" : "Quick Apply"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DetailView;

// ─── Page ─────────────────────────────────────────────────────────────────────

// ─── Session-storage keys for back-navigation state restoration ───────────────
const SK_JOB_ID   = "lumio_detail_jobId";
const SK_DETAIL_TAB = "lumio_detail_tab";

// ─── All discoverable jobs (flat list for openJobId lookup) ───────────────────
const ALL_JOBS = [...recentJobs, ...latestJobs];

/** Featured job per brand — used by BrandProfilePage Jobs tab so the brand
 *  page and the main Jobs listing always show the same job object.
 *  Add an entry here whenever a new company gets a BrandProfilePage entry. */
export const BRAND_FEATURED_JOBS: Record<string, Job> = {
  sabyasachi:              filteredJobs[0],  // jf0  Jr. Fashion Designer
  rohitBal:                filteredJobs[1],  // s0   Associate Fashion Designer
  abuJaniSandeepKhosla:   filteredJobs[2],  // jf1  Jr. Fashion Designer
  papaDontPreach:          recentJobs[0],    // j0   Associate Fashion Designer
  jjValya:        recentJobs[1],    // j1   Jr. Fashion Designer
  gauravGupta:    recentJobs[2],    // j2   Jr. Fashion Designer
  rawMango:       recentJobs[3],    // j12  Womenswear Designer
  pero:           recentJobs[4],    // j13  Print Designer
  anavila:        recentJobs[5],    // j14  Fashion Illustrator
  anitaDongre:    latestJobs[0],    // j3   Footwear Designer
  masaba:         latestJobs[1],    // j4   Jr. Accessories Designer
  manishMalhotra: latestJobs[2],    // j5   Senior Fashion Designer
  amrapaliJewels: latestJobs[3],    // j15  Jewelry Designer
  ekayaBanaras:   latestJobs[4],    // j16  Costume Designer
  fabIndia:       latestJobs[5],    // j17  Buying Merchandiser
};

export function JobsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Bootstrap state from sessionStorage (back-nav from brand profile) or
  // from navigation state (View Details link in brand profile Jobs tab).
  // openJob (full object) takes priority over openJobId (id-only lookup) so
  // brand-profile jobs that are not in ALL_JOBS still resolve correctly.
  const [screen, setScreen] = useState<Screen>(() => {
    if (location.state?.openJob || location.state?.openJobId) return "detail";
    if (sessionStorage.getItem(SK_JOB_ID)) return "detail";
    return "listing";
  });
  const [activeTab, setActiveTab] = useState<JobsTab>("Discover");
  // Always open on the first tab (Description)
  const [detailTab, setDetailTab] = useState<DetailTab>("Description");
  const [selectedJob, setSelectedJob] = useState<Job | null>(() => {
    if (location.state?.openJob) return location.state.openJob as Job;
    const navId = location.state?.openJobId as string | undefined;
    const savedId = sessionStorage.getItem(SK_JOB_ID);
    const id = navId ?? savedId;
    return id ? (ALL_JOBS.find((j) => j.id === id) ?? null) : null;
  });

  // Applied IDs — store is the single source of truth. Local state is a
  // derived view kept in sync by the subscriber. Never push back into the
  // store from here (that creates a seed→notify→setState feedback loop).
  const [appliedIds, setAppliedIds] = useState<Set<string>>(
    () => new Set(appliedJobsStore.getIds())
  );

  useEffect(() => {
    return appliedJobsStore.subscribe(() => {
      setAppliedIds(new Set(appliedJobsStore.getIds()));
    });
  }, []);

  // Consume and clear the saved detail state so it does not re-apply on
  // subsequent mounts of this component.
  useEffect(() => {
    sessionStorage.removeItem(SK_JOB_ID);
  }, []);

  const [showFilter, setShowFilter] = useState(false);
  const [toastJob, setToastJob] = useState<Job | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isAppliedFiltered, setIsAppliedFiltered] = useState(false);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters | null>(null);

  // Prevent background scroll while filter sheet is open
  useEffect(() => {
    document.body.style.overflow = showFilter ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showFilter]);

  // Close any open overlays if navigation fires while we are still mounted
  // (defensive — Root.tsx key={location.key} normally remounts the component
  // on every navigate() call, so this only fires in edge cases).
  useEffect(() => {
    function onNavigate() {
      setShowFilter(false);
      setToastJob(null);
      setShowModal(false);
    }
    window.addEventListener("lumio:navigate", onNavigate as EventListener);
    return () => window.removeEventListener("lumio:navigate", onNavigate as EventListener);
  }, []);

  // Keyboard: Esc closes whichever overlay is currently open.
  useEscKey(() => {
    if (showModal) { setShowModal(false); return; }
    if (showFilter) { setShowFilter(false); return; }
    if (toastJob)  { setToastJob(null);    return; }
  }, showModal || showFilter || !!toastJob);

  function handleApply(id: string) {
    appliedJobsStore.apply(id);
    // subscriber (useEffect []) syncs setAppliedIds automatically
  }

  function requestApply(job: Job) {
    if (appliedIds.has(job.id)) return;
    if (isOutOfScope(job)) {
      setToastJob(job);
    } else {
      handleApply(job.id);
    }
  }

  function handleToastContinue() {
    if (toastJob) {
      handleApply(toastJob.id);
      // If the toast was triggered from the detail view, show the success modal
      if (screen === "detail" && selectedJob?.id === toastJob.id) {
        setShowModal(true);
      }
    }
    setToastJob(null);
  }

  function handleQuickApply(jobId: string) {
    handleApply(jobId);
    setShowModal(true);
  }

  function handleViewDetails(job: Job) {
    // Replace the current /jobs history entry so browser back from a brand page
    // returns to this exact job (not whatever state /jobs was loaded with).
    navigate("/jobs", { state: { openJob: job }, replace: true });
  }

  function handleModalClose() {
    setShowModal(false);
    // stay on detail, job already marked applied
  }

  function handleModalContinueApplying() {
    setShowModal(false);
    setScreen("listing");
  }

  function handleShowResults(filters: ActiveFilters) {
    setActiveFilters(filters);
    if (activeTab === "Discover") setIsFiltered(true);
    else setIsAppliedFiltered(true);
  }
  return (
    <div className="h-[100dvh] bg-[#f0ecf7] flex items-start justify-center overflow-hidden">
      <div className="w-full max-w-[430px] min-w-0 bg-[#fffeff] flex flex-col h-full overflow-hidden">
        {screen === "listing" ? (
          <>
            <ListingView
              activeTab={activeTab}
              onTabChange={(t) => {
                setActiveTab(t);
                setActiveFilters(null);
                if (t === "Applied") setIsFiltered(false);
                if (t === "Discover") setIsAppliedFiltered(false);
              }}
              appliedIds={appliedIds}
              onApply={requestApply}
              onViewDetails={handleViewDetails}
              onFilter={() => setShowFilter(true)}
              isFiltered={isFiltered}
              isAppliedFiltered={isAppliedFiltered}
              activeFilters={activeFilters}
            />
            <BottomNav active="jobs" profileNavImg={imgProfileNav} />
          </>
        ) : selectedJob ? (
          <DetailView
            key={selectedJob.id}
            job={selectedJob}
            detailTab={detailTab}
            onTabChange={setDetailTab}
            applied={appliedIds.has(selectedJob.id)}
            onQuickApply={() => {
              if (appliedIds.has(selectedJob.id)) return;
              if (isOutOfScope(selectedJob)) {
                setToastJob(selectedJob);
              } else {
                handleQuickApply(selectedJob.id);
              }
            }}
            onBack={() => setScreen("listing")}
            appliedIds={appliedIds}
            onApplyJob={requestApply}
            onViewDetailsJob={handleViewDetails}
          />
        ) : null}
      </div>

      {showFilter && (
        <FilterSheet
          jobsTab={activeTab}
          onClose={() => setShowFilter(false)}
          onShowResults={handleShowResults}
        />
      )}

      {toastJob && (
        <>
          {/* Transparent backdrop — click outside to dismiss */}
          <div
            className="fixed inset-0 z-[55]"
            onClick={() => setToastJob(null)}
          />
          <OutOfScopeToast
            onDismiss={() => setToastJob(null)}
            onContinue={handleToastContinue}
          />
        </>
      )}

      {showModal && (
        <ApplicationStatusModal
          onClose={handleModalClose}
          onContinueApplying={handleModalContinueApplying}
        />
      )}
    </div>
  );
}
