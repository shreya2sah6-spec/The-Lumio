import { useState, useMemo } from "react";
import { useNavigate } from "react-router";
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
import { Button } from "../components/ui/button";
import { ViewMoreButton } from "../components/ViewMoreButton";

// ─── Images ──────────────────────────────────────────────────────────────────

import imgLogo0 from "@/imports/JobsListing/b1bfc8d2227cfbb338a71f8b998ed42b5952cdb1.png";
import imgLogo1 from "@/imports/JobsListing/48187e2d2ea3da5ef767089ee3c4966516a33a63.png";
import imgLogo2 from "@/imports/JobsListing/a793d36d531bfadfc1dfbbc7bc5b9eac8935d380.png";
import imgLogo3 from "@/imports/JobsListing/67cf2fe1eceb8201ffc124d6599ebd2f96c9a49a.png";
import imgLogo4 from "@/imports/JobsListing/3d2408c4872e6284bda670b322969ddcea11be73.png";
import imgLogo5 from "@/imports/JobsListing/28d13f96340cd4282fa71f71e505e234b4902350.png";
import imgProfileNav from "@/imports/JobsListing/bb5b0e0896cc0396e3c8e2b6811f344da7f15455.png";
import imgSabyasachiLogo from "@/imports/JobsApplied/5d686febbf6bd99db27d32ec61024adf89b31b4f.png";
import imgDescImg1 from "@/imports/JobsDetailDescription/12eab16a6f86d4ce40d5e67467905952b23abd03.png";
import imgDescImg2 from "@/imports/JobsDetailDescription/fe40ed3138ffabdc2c0a9c8b66f1befac7fc4197.png";
import imgDescImg3 from "@/imports/JobsDetailDescription/998b82b2a2ffe924830a4a7a81200e468e5489d2.png";
import imgSimilar1 from "@/imports/JobsDetailDescription/19ed454ce73b7e33b4572f2ee25e284782237496.png";
import imgSimilar2 from "@/imports/JobsDetailDescription/54b30bea255f570e17b130b3c2290f9b1216dc8b.png";
import imgSimilar3 from "@/imports/JobsDetailDescription/3d2408c4872e6284bda670b322969ddcea11be73.png";
import imgReviewer1 from "@/imports/JobsDetailReviews/5dde8865bca1503c9d643f24bd440d5c48868565.png";
import imgReviewer2 from "@/imports/JobsDetailReviews/be6eb4acfee35fa9fb482f3e84f93a1f10551bbf.png";
import imgReviewer3 from "@/imports/JobsDetailReviews/f801d802405de74f12a3ae2fc96210f8d94e06db.png";
import imgNotFound from "@/imports/SharedNotFound/460b6c9e17511d97e9e5c7a1875505fb0de17812.png";

// ─── Status bar SVG paths ─────────────────────────────────────────────────────

const SIGNAL_BARS =
  "M3.26916 9.60239C3.8002 9.60239 4.23107 10.0333 4.23107 10.5643V12.4872C4.23107 13.0182 3.8002 13.4491 3.26916 13.4491H2.30724C1.77641 13.4488 1.3463 13.018 1.3463 12.4872V10.5643C1.3463 10.0334 1.77641 9.60263 2.30724 9.60239H3.26916ZM7.75646 7.67954C8.28748 7.67956 8.71837 8.11043 8.71837 8.64145V12.4872C8.71837 13.0182 8.28748 13.449 7.75646 13.4491H6.79455C6.26365 13.4489 5.83361 13.0181 5.83361 12.4872V8.64145C5.83361 8.11052 6.26365 7.67971 6.79455 7.67954H7.75646ZM12.2438 5.43637C12.7747 5.43647 13.2046 5.86638 13.2047 6.39731V12.4872C13.2047 13.0181 12.7747 13.449 12.2438 13.4491H11.2819C10.7509 13.449 10.3209 13.0181 10.3209 12.4872V6.39731C10.321 5.86639 10.7509 5.43648 11.2819 5.43637H12.2438ZM16.7311 3.19223C17.262 3.1924 17.692 3.6232 17.692 4.15415V12.4872C17.692 13.0181 17.262 13.4489 16.7311 13.4491H15.7692C15.2381 13.449 14.8072 13.0182 14.8072 12.4872V4.15415C14.8072 3.62313 15.2381 3.19227 15.7692 3.19223H16.7311Z";
const SIGNAL_WIFI =
  "M5.86291 11.2694C7.08941 10.2323 8.88553 10.2321 10.1119 11.2694C10.1736 11.3252 10.2098 11.404 10.2115 11.4872C10.2132 11.5703 10.1801 11.6506 10.1207 11.7088L8.19982 13.6473C8.14355 13.7041 8.06686 13.7362 7.98693 13.7362C7.90698 13.7361 7.83028 13.7041 7.77404 13.6473L5.85314 11.7088C5.79385 11.6505 5.76154 11.5703 5.7633 11.4872C5.76508 11.404 5.80118 11.3251 5.86291 11.2694ZM3.29943 8.68442C5.94193 6.22636 10.0349 6.22636 12.6774 8.68442C12.7367 8.74203 12.7703 8.82142 12.7711 8.90415C12.7718 8.98686 12.7395 9.06614 12.6813 9.12485L11.5709 10.2469C11.4566 10.3613 11.2723 10.364 11.1549 10.2528C10.2871 9.46701 9.15759 9.03201 7.98693 9.03208C6.81713 9.03263 5.68901 9.46758 4.82189 10.2528C4.70455 10.364 4.52022 10.3613 4.40587 10.2469L3.29552 9.12485C3.23716 9.06621 3.20403 8.98688 3.2047 8.90415C3.20548 8.82134 3.23996 8.74203 3.29943 8.68442ZM0.736929 6.10532C4.78991 2.22126 11.184 2.22118 15.2369 6.10532C15.2956 6.16301 15.3282 6.24181 15.3287 6.32407C15.3292 6.40622 15.2977 6.48544 15.2399 6.5438L14.1276 7.66587C14.0131 7.78071 13.8278 7.78193 13.7115 7.6688C12.1674 6.20072 10.1176 5.38178 7.98693 5.38169C5.85613 5.38174 3.80665 6.20067 2.26232 7.6688C2.14611 7.7823 1.95977 7.78115 1.84533 7.66587L0.733999 6.5438C0.676061 6.48537 0.643616 6.40635 0.644156 6.32407C0.644697 6.24178 0.678219 6.16298 0.736929 6.10532Z";
const BATTERY_OUTLINE =
  "M3.02599 2.71124H19.0514C20.2019 2.71129 21.1344 3.64466 21.1344 4.79522V10.5638C21.1344 11.7143 20.2019 12.6477 19.0514 12.6478H3.02599C1.8754 12.6478 0.942008 11.7144 0.942008 10.5638V4.79522C0.942008 3.64463 1.8754 2.71124 3.02599 2.71124Z";
const BATTERY_TIP =
  "M22.5769 5.75643V9.60258C23.3507 9.27684 23.8539 8.51906 23.8539 7.67951C23.8539 6.83996 23.3507 6.08218 22.5769 5.75643";
const BATTERY_FILL =
  "M2.38462 5.4359C2.38462 4.72784 2.95861 4.15385 3.66667 4.15385H18.4103C19.1183 4.15385 19.6923 4.72784 19.6923 5.4359V9.92308C19.6923 10.6311 19.1183 11.2051 18.4103 11.2051H3.66667C2.95861 11.2051 2.38462 10.6311 2.38462 9.92308V5.4359Z";

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
    logo: imgLogo0,
    salary: "7-8 LPA",
    expTag: "0-3 Years",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "2 days ago",
    promoted: true,
    domain: "Fashion Design",
  },
  {
    id: "j1",
    title: "Jr. Fashion Designer",
    company: "JJ Valya",
    logo: imgLogo1,
    expTag: "1-3 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "3 days ago",
    domain: "Fashion Design",
  },
  {
    id: "j2",
    title: "Jr. Fashion Designer",
    company: "Gaurav Gupta",
    logo: imgLogo2,
    salary: "8-10 LPA",
    expTag: "1-3 Years",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "3 days ago",
    domain: "Fashion Design",
  },
  {
    id: "j12",
    title: "Womenswear Designer",
    company: "Raw Mango",
    logoColor: "#C35A2A",
    salary: "6-9 LPA",
    expTag: "1-3 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "3 days ago",
    domain: "Fashion Design",
  },
  {
    id: "j13",
    title: "Print Designer",
    company: "Péro",
    logoColor: "#4A5568",
    salary: "5-8 LPA",
    expTag: "0-2 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "4hr ago",
    domain: "Surface & Print",
  },
  {
    id: "j14",
    title: "Fashion Illustrator",
    company: "Anavila",
    logoColor: "#2C7A5E",
    salary: "4-6 LPA",
    expTag: "Fresher",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "1 day ago",
    domain: "Fashion Design",
  },
];

const latestJobs: Job[] = [
  {
    id: "j3",
    title: "Footwear Designer",
    company: "Anita Dongre",
    logo: imgLogo3,
    salary: "5-6 LPA",
    expTag: "1-2 Years",
    typeTag: "Contract",
    location: "Mumbai",
    posted: "2 days ago",
    promoted: true,
    domain: "Accessories",
  },
  {
    id: "j4",
    title: "Jr. Accessories Designer",
    company: "Masaba",
    logo: imgLogo4,
    salary: "5-8 LPA",
    expTag: "1-3 Years",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "4hr ago",
    domain: "Accessories",
  },
  {
    id: "j5",
    title: "Senior Fashion Designer",
    company: "Manish Malhotra",
    logo: imgLogo5,
    salary: "13-18 LPA",
    expTag: "4-8 Years",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "10hr ago",
    domain: "Fashion Design",
  },
  {
    id: "j15",
    title: "Jewelry Designer",
    company: "Amrapali Jewels",
    logoColor: "#7B6000",
    salary: "7-10 LPA",
    expTag: "1-3 Years",
    typeTag: "Full Time",
    location: "Jaipur",
    posted: "2 days ago",
    domain: "Accessories",
  },
  {
    id: "j16",
    title: "Costume Designer",
    company: "Ekaya Banaras",
    logoColor: "#6B21A8",
    salary: "6-9 LPA",
    expTag: "2-4 Years",
    typeTag: "Contract",
    location: "Varanasi",
    posted: "5 days ago",
    domain: "Costume Design",
  },
  {
    id: "j17",
    title: "Buying Merchandiser",
    company: "FabIndia",
    logoColor: "#1E40AF",
    salary: "8-12 LPA",
    expTag: "2-4 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "1 week ago",
    domain: "Buying & Merch",
  },
];

const filteredJobs: Job[] = [
  {
    id: "jf0",
    title: "Jr. Fashion Designer",
    company: "Sabyasachi",
    logo: imgSabyasachiLogo,
    salary: "10-12 LPA",
    expTag: "0-3 Years",
    typeTag: "Full Time",
    location: "Kolkata",
    posted: "1 day ago",
    promoted: true,
    domain: "Fashion Design",
  },
  {
    id: "s0",
    title: "Associate Fashion Designer",
    company: "Rohit Bal",
    logo: imgSimilar1,
    salary: "7-8 LPA",
    expTag: "0-2 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "1 day ago",
    domain: "Fashion Design",
  },
  {
    id: "jf1",
    title: "Jr. Fashion Designer",
    company: "Abu Jani Sandeep Khosla",
    logo: imgSimilar2,
    salary: "7-8 LPA",
    expTag: "1-2 Years",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "3 days ago",
    domain: "Fashion Design",
  },
  {
    id: "j0",
    title: "Associate Fashion Designer",
    company: "Papa Don't Preach",
    logo: imgLogo0,
    salary: "7-8 LPA",
    expTag: "0-3 Years",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "2 days ago",
    promoted: true,
    domain: "Fashion Design",
  },
  {
    id: "j14",
    title: "Fashion Illustrator",
    company: "Anavila",
    logoColor: "#2C7A5E",
    salary: "4-6 LPA",
    expTag: "Fresher",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "1 day ago",
    domain: "Fashion Design",
  },
  {
    id: "j12",
    title: "Womenswear Designer",
    company: "Raw Mango",
    logoColor: "#C35A2A",
    salary: "6-9 LPA",
    expTag: "1-3 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "3 days ago",
    domain: "Fashion Design",
  },
];

const appliedJobs: Job[] = [
  {
    id: "ja0",
    title: "Jr. Fashion Designer",
    company: "Sabyasachi",
    logo: imgSabyasachiLogo,
    salary: "10-12 LPA",
    expTag: "0-3 Years",
    typeTag: "Full Time",
    location: "Kolkata",
    posted: "1 day ago",
    domain: "Fashion Design",
  },
  {
    id: "ja1",
    title: "Womenswear Designer",
    company: "Raw Mango",
    logoColor: "#C35A2A",
    salary: "6-9 LPA",
    expTag: "1-3 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "5 days ago",
    domain: "Fashion Design",
  },
  {
    id: "ja2",
    title: "Print Designer",
    company: "Péro",
    logoColor: "#4A5568",
    salary: "5-8 LPA",
    expTag: "0-2 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "1 week ago",
    domain: "Surface & Print",
  },
];

const similarJobs: Job[] = [
  {
    id: "s0",
    title: "Associate Fashion Designer",
    company: "Rohit Bal",
    logo: imgSimilar1,
    salary: "7-8 LPA",
    expTag: "0-2 Years",
    typeTag: "Full Time",
    location: "New Delhi",
    posted: "4hr ago",
    domain: "Fashion Design",
  },
  {
    id: "s1",
    title: "Jr. Fashion Designer",
    company: "Abu Jani Sandeep Khosla",
    logo: imgSimilar2,
    salary: "7-8 LPA",
    expTag: "1-2 Years",
    typeTag: "Full Time",
    location: "Mumbai",
    posted: "4hr ago",
    domain: "Fashion Design",
  },
  {
    id: "s2",
    title: "Footwear Designer",
    company: "Anita Dongre",
    logo: imgSimilar3,
    salary: "5-6 LPA",
    expTag: "1-2 Years",
    typeTag: "Contract",
    location: "Mumbai",
    posted: "4hr ago",
    domain: "Accessories",
  },
];

const reviewsPool = [
  {
    avatar: imgReviewer1,
    name: "Anaya",
    role: "Fashion Designer",
    rating: 5,
    title: "Supportive learning environment",
    text: "I had a great experience working at this company, as the team was professional and supportive. The work environment encouraged learning, growth, and collaboration. Senior designers are always willing to share knowledge and guide younger talent through the creative process.",
  },
  {
    avatar: imgReviewer2,
    name: "Anonymous",
    role: "",
    rating: 4,
    title: "Great place to grow",
    text: "This studio offers a unique opportunity to work with traditional Indian textiles and craftsmanship. The mentorship from senior designers is invaluable. You learn by doing, and the exposure to haute couture is unparalleled in the industry.",
  },
  {
    avatar: imgReviewer3,
    name: "Riya Mehta",
    role: "Jr. Designer",
    rating: 5,
    title: "Incredible craft exposure",
    text: "Working here gave me exposure to the finest Indian craftsmanship. The attention to detail is unmatched and I learned immensely from every project. The studio culture is intense but deeply rewarding for anyone passionate about Indian fashion.",
  },
  {
    avatar: imgReviewer1,
    name: "Priya Sharma",
    role: "Textile Designer",
    rating: 4,
    title: "Excellent craft traditions",
    text: "The brand's commitment to Indian handcraft is genuine and inspiring. Every project involves deep research into regional craft traditions. A wonderful place to develop as a designer with a respect for heritage.",
  },
  {
    avatar: imgReviewer2,
    name: "Aakash Verma",
    role: "Design Intern",
    rating: 5,
    title: "Transformative experience",
    text: "My internship here transformed my understanding of Indian couture. The studio's attention to detail, its relationship with artisans, and the pride everyone takes in the work makes this an extraordinary place to begin a career.",
  },
  {
    avatar: imgReviewer3,
    name: "Meera Nair",
    role: "Sr. Designer",
    rating: 4,
    title: "World-class atelier",
    text: "The level of craft here is world-class. Working alongside master karigars and seeing how traditional embroidery techniques are preserved and evolved is a privilege. The pace is demanding but the work is deeply fulfilling.",
  },
];

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
  return jobs.filter((job) => {
    // Job Type
    const typeFilter = filters["Job Type"];
    if (typeFilter.size > 0) {
      const t = (job.typeTag || "").toLowerCase();
      if (![...typeFilter].some((f) => t.includes(f.toLowerCase()))) return false;
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

const DETAIL_IMAGE_SETS: [string, string, string][] = [
  [imgDescImg1, imgDescImg2, imgDescImg3],
  [imgDescImg2, imgDescImg3, imgDescImg1],
  [imgDescImg3, imgDescImg1, imgDescImg2],
];

function getDetailImages(jobId: string): [string, string, string] {
  const hash = jobId.charCodeAt(jobId.length - 1) % 3;
  return DETAIL_IMAGE_SETS[hash];
}

// ─── StatusBar ────────────────────────────────────────────────────────────────

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
            <path d={SIGNAL_BARS} fill="#1A1128" />
          </svg>
        </div>
        <div className="relative size-[15.385px]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15.3846 15.3846"
          >
            <path d={SIGNAL_WIFI} fill="#1A1128" />
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
              d={BATTERY_OUTLINE}
              opacity="0.35"
              stroke="#9D94AA"
              strokeOpacity="0.4"
              strokeWidth="0.961538"
              fill="none"
            />
            <path d={BATTERY_TIP} fill="#1A1128" opacity="0.4" />
            <path d={BATTERY_FILL} fill="#1A1128" />
          </svg>
        </div>
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
          <Button variant="outline" size="lg" onClick={onClose} className="w-[112px] shrink-0">
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
        className="fixed inset-0 z-40 bg-[rgba(26,26,26,0.5)]"
        onClick={onClose}
      />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] z-50 bg-white rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-1px_4px_0px_rgba(26,26,26,0.6)] flex flex-col items-start overflow-hidden">
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
                    className={`font-['Manrope',sans-serif] text-[15px] leading-[22px] tracking-[0.15px] ${isActive ? "font-medium text-[#2d2040]" : "font-normal text-[#433059]"}`}
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
          <Button variant="ghost" size="lg" onClick={clearAll} className="shrink-0">
            Clear All
          </Button>
          <Button variant="gradient" size="lg" onClick={handleShowResults} className="flex-1">
            Show Results
          </Button>
        </div>
        <div className="bg-white h-[46px] w-full flex items-end justify-center pb-[7.69px]">
          <div className="bg-[#1a1128] h-[4.808px] rounded-[200px] w-[128.846px]" />
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
  return (
    <div className="flex items-end border-b border-[#e2d9ef] bg-[#fffeff]">
      {tabs.map((tab) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className="flex flex-1 flex-col items-center justify-end h-[44px] px-[20px] cursor-pointer gap-0"
          >
            <span
              className={`font-['Manrope',sans-serif] text-[16px] pb-[8px] leading-[25px] ${isActive ? "font-semibold text-[#1a1128]" : "font-normal text-[#6b5f7a]"}`}
            >
              {tab}
            </span>
            {isActive && (
              <div className="h-[2px] w-full bg-[#7d3aea] rounded-t-[2px]" />
            )}
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
        <StatusBar />
        <div className="flex gap-[12px] items-center px-[16px] py-[12px]">
          <SearchBar placeholder={searchPlaceholder} className="flex-1" />
          <button
            onClick={onFilter}
            className="p-[8px] cursor-pointer shrink-0"
          >
            <Funnel size={24} color="#6B5F7A" />
          </button>
        </div>
        <TabBar
          tabs={["Discover", "Applied"] as JobsTab[]}
          active={activeTab}
          onChange={onTabChange}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
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
}: {
  job: Job;
  detailTab: DetailTab;
  onTabChange: (t: DetailTab) => void;
  applied: boolean;
  onQuickApply: () => void;
  onBack: () => void;
  appliedIds: Set<string>;
  onApplyJob: (job: Job) => void;
  onViewDetailsJob: (job: Job) => void;
}) {
  const [descExpanded, setDescExpanded] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [imgs] = useState(() => getDetailImages(job.id));

  const descFull = `Are you a designer eager to experience what it feels like when your work becomes part of iconic fashion worn across generations? If you have a deep appreciation for Indian craftsmanship, textiles, and detail-driven design, this role is for you.\n\n${job.company} is looking for a ${job.title} to join its studio. This is a ${job.typeTag} role based in ${job.location} where you will learn by doing — working closely with senior designers, artisans, and production teams.\n\nYou will assist in developing seasonal collections, create detailed sketches and technical specs, source textiles and embroidery, attend fittings, and coordinate with craft clusters and production partners. This is a rare opportunity to be immersed in one of India's most celebrated design houses.`;
  const descPreview = descFull.slice(0, 220);

  return (
    <div className="flex flex-col flex-1 overflow-hidden h-full">
      <div className="shrink-0 bg-[#fffeff] shadow-[0px_1px_2px_rgba(200,192,212,0.4)]">
        <StatusBar />
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

      <div className="flex-1 overflow-y-auto">
        {/* job header */}
        <div className="bg-[#fffeff] flex gap-[12px] items-start px-[16px] pb-[12px] pt-[16px] w-full">
          <LogoCell job={job} size={84} />
          <div className="flex flex-col flex-1 min-w-px">
            <div className="flex gap-[4px] items-center w-full">
              <p className="flex-1 font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[18px] leading-[28px] truncate min-w-px">
                {job.title}
              </p>
              <div className="flex gap-[4px] h-[18px] items-center shrink-0">
                <Star size={12} color="#1A1128" weight="fill" />
                <span className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[12px] leading-[18px] tracking-[0.24px]">
                  4.2
                </span>
                <span className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[12px] leading-[18px] tracking-[0.24px]">
                  (60)
                </span>
              </div>
            </div>
            <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[16px] leading-[25px] tracking-[0.16px] truncate">
              {job.company}
            </p>
            <div className="flex gap-[4px] items-center mt-[2px]">
              <span className="font-['Manrope',sans-serif] font-normal text-[#1a1128] text-[14px] leading-[21px]">
                {job.location}
              </span>
              <span className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[14px] leading-[21px]">
                · Posted {job.posted}
              </span>
            </div>
          </div>
        </div>

        <TabBar
          tabs={["Description", "Reviews"] as DetailTab[]}
          active={detailTab}
          onChange={onTabChange}
        />

        {detailTab === "Description" ? (
          <div className="flex flex-col gap-[24px] items-center pb-[20px] pt-[16px] px-[16px]">
            {/* AI role snapshot with MagicWand fill icon */}
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
                      <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">
                        Key Work:{" "}
                      </span>
                      <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                        Assist in collections, sketches, textiles, embroidery,
                        fittings, and coordination with artisans & production
                        teams.
                      </span>
                    </li>
                    <li>
                      <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">
                        Ideal Candidate:{" "}
                      </span>
                      <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                        Strong appreciation for Indian craftsmanship,
                        detail-oriented, curious, collaborative, and eager to
                        learn.
                      </span>
                    </li>
                    <li>
                      <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">
                        Skills Required:{" "}
                      </span>
                      <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                        Knowledge of textiles & couture, software (Illustrator,
                        Photoshop) & communication skills.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* per-job detail images */}
            <div className="flex gap-[8px] items-center w-full">
              <div className="flex flex-col gap-[8px]">
                <div className="h-[99px] w-[124px] rounded-[4px] overflow-hidden shrink-0 relative">
                  <img
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    src={imgs[0]}
                  />
                </div>
                <div className="h-[74px] w-[124px] rounded-[4px] overflow-hidden shrink-0 relative">
                  <img
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    src={imgs[1]}
                  />
                </div>
              </div>
              <div className="h-[181px] flex-1 rounded-[4px] overflow-hidden relative">
                <img
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  src={imgs[2]}
                />
              </div>
            </div>

            {/* description text */}
            <div className="flex flex-col gap-[4px] items-start w-full">
              {descExpanded ? (
                descFull.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px] mt-[4px] first:mt-0"
                  >
                    {para}
                  </p>
                ))
              ) : (
                <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px]">
                  {descPreview}…
                </p>
              )}
              <button
                onClick={() => setDescExpanded((v) => !v)}
                className="flex gap-[6px] items-center mt-[4px] cursor-pointer"
              >
                <span className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">
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
          <div className="flex flex-col gap-[24px] items-center pb-[20px] pt-[16px] px-[16px]">
            {/* workplace insights with MagicWand fill */}
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
                    Workplace insights
                  </p>
                </div>
              </div>
              <div className="bg-white relative rounded-[12px] w-full border border-[#e2d9ef]">
                <div className="flex flex-col items-start px-[16px] py-[12px]">
                  <ul className="list-disc pl-[20px] flex flex-col gap-[2px]">
                    <li>
                      <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">
                        Strong mentorship:{" "}
                      </span>
                      <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                        Culture with opportunities to learn and grow from senior
                        designers.
                      </span>
                    </li>
                    <li>
                      <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">
                        Fast-paced work:{" "}
                      </span>
                      <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                        Demanding environment that sharpens craft instincts
                        quickly.
                      </span>
                    </li>
                    <li>
                      <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">
                        Supportive workplace:{" "}
                      </span>
                      <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                        Focused on innovation, work–life balance, and employee
                        empowerment.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {reviewsPool.slice(0, visibleReviews).map((review, i) => (
              <ReviewCard key={i} {...review} />
            ))}

            {visibleReviews < reviewsPool.length && (
              <ViewMoreButton
                onClick={() =>
                  setVisibleReviews((v) => Math.min(v + 3, reviewsPool.length))
                }
              />
            )}
          </div>
        )}

        {/* similar jobs */}
        <div className="flex flex-col gap-[16px] items-start px-[16px] py-[20px] border-t border-[#f0ecf7]">
          <p className="font-['Roboto_Serif',serif] font-semibold not-italic text-[#2d2040] text-[20px] leading-[28px] w-full">
            Similar jobs
          </p>
          <div className="flex flex-col gap-[4px] items-start w-full">
            {similarJobs.map((sj) => (
              <JobCard
                key={sj.id}
                job={sj}
                applied={appliedIds.has(sj.id)}
                onApply={() => onApplyJob(sj)}
                onViewDetails={() => onViewDetailsJob(sj)}
              />
            ))}
          </div>
          <ViewMoreBtn onClick={() => {}} />
        </div>
      </div>

      {/* footer */}
      <div className="bg-white shrink-0 shadow-[0px_-1px_2px_rgba(200,192,212,0.6)]">
        <div className="flex gap-[16px] items-start pb-[24px] pt-[12px] px-[16px]">
          <Button variant="outline" size="lg" className="w-[140px] shrink-0">
            <span className="text-[#7d3aea]">Save</span>
          </Button>
          <Button
            variant={applied ? "success" : "gradient"}
            size="lg"
            onClick={applied ? undefined : onQuickApply}
            disabled={applied}
            className="flex-1 disabled:opacity-100"
          >
            {applied && <Check className="size-[18px]" color="#208436" weight="bold" />}
            {applied ? "Applied" : "Quick Apply"}
          </Button>
        </div>
        <div className="h-[46px] w-full bg-white flex items-end justify-center pb-[7.69px]">
          <div className="bg-[#1a1128] h-[4.808px] rounded-[200px] w-[128.846px]" />
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function JobsPage() {
  const [screen, setScreen] = useState<Screen>("listing");
  const [activeTab, setActiveTab] = useState<JobsTab>("Discover");
  const [detailTab, setDetailTab] = useState<DetailTab>("Description");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [appliedIds, setAppliedIds] = useState<Set<string>>(new Set());
  const [showFilter, setShowFilter] = useState(false);
  const [toastJob, setToastJob] = useState<Job | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isAppliedFiltered, setIsAppliedFiltered] = useState(false);
  const [activeFilters, setActiveFilters] = useState<ActiveFilters | null>(null);

  function handleApply(id: string) {
    setAppliedIds((prev) => new Set([...prev, id]));
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
    if (toastJob) handleApply(toastJob.id);
    setToastJob(null);
  }

  function handleQuickApply(jobId: string) {
    handleApply(jobId);
    setShowModal(true);
  }

  function handleViewDetails(job: Job) {
    setSelectedJob(job);
    setDetailTab("Description");
    setScreen("detail");
    // Scroll to top smoothly when viewing a new job
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    <div className="h-screen bg-[#f0ecf7] flex items-start justify-center overflow-hidden">
      <div className="w-full max-w-[800px] min-w-0 bg-[#fffeff] flex flex-col h-full overflow-hidden">
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
            job={selectedJob}
            detailTab={detailTab}
            onTabChange={setDetailTab}
            applied={appliedIds.has(selectedJob.id)}
            onQuickApply={() => handleQuickApply(selectedJob.id)}
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
        <OutOfScopeToast
          onDismiss={() => setToastJob(null)}
          onContinue={handleToastContinue}
        />
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
