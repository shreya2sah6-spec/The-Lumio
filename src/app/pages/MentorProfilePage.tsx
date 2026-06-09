import { useState, useRef, useEffect } from "react";
import { truncateAiBulletItem } from "../utils/aiSummary";
import { useEscKey } from "../hooks/useEscKey";
import { useNavigate, useLocation } from "react-router-dom";
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

import imgAbout    from "@/imports/MentorsListing-1/9aecea038a5eba6222a77595fc22c0549d614720.png";
import { rv, rvAnon } from "@/app/data/reviewIdentities";
// About-section + webinar images — sourced from the centralized registry above
import imgRp770  from "@/imports/mentors-recent-post/image-770.png";
import imgRp771  from "@/imports/mentors-recent-post/image-771.png";
import imgRp772  from "@/imports/mentors-recent-post/image-772.png";
import imgRp773  from "@/imports/mentors-recent-post/image-773.png";
import imgRp774  from "@/imports/mentors-recent-post/image-774.png";
import imgRp775  from "@/imports/mentors-recent-post/image-775.png";
import imgRp776  from "@/imports/mentors-recent-post/image-776.png";
import imgRp777  from "@/imports/mentors-recent-post/image-777.png";
import imgRp778  from "@/imports/mentors-recent-post/image-778.png";
import imgRp779  from "@/imports/mentors-recent-post/image-779.png";
import imgRp780  from "@/imports/mentors-recent-post/image-780.png";
import imgRp781  from "@/imports/mentors-recent-post/image-781.png";
import imgRp782  from "@/imports/mentors-recent-post/image-782.png";
import imgRpA    from "@/imports/mentors-recent-post/image-a.png";
import imgRpB    from "@/imports/mentors-recent-post/image-b.png";
import imgRpC    from "@/imports/mentors-recent-post/post-image-01.png";
import imgRpD    from "@/imports/mentors-recent-post/post-image-01-1.png";

// ─── Company logos — sourced from the centralized registry ───────────────────
import {
  logoMyntra,
  logoFabIndia,
  logoNIFT,
  logoNID,
  logoAnitaDongre,
  logoRohitBal,
  logoMAX,
  logoZara,
  logoPantaloons,
  logoPearl,
  logoHM,
  logoPuma,
  logoSymbiosis,
  logoMango,
  logoBiba,
  logoForever21,
  logoNykaaFashion,
  logoWForWoman,
  logoRelianceTrend,
  logoAurelia,
  logoShein,
  logoINIFD,
  logoWestside,
  logoAnokhi,
  logoShoppersStop,
  logoCentral,
  logoArvind,
  logoGoodEarth,
  logoAbrahamThakore,
  logoLifestyle,
  logoMarksSpencer,
  logoGlobalDesi,
} from "../data/companyLogos";

// ─── Mentor avatar + media images — sourced from the centralized registry ─────
import {
  MENTOR_AVATARS,
  MENTOR_ABOUT,
  MENTOR_WEBINAR,
} from "../data/mentorImages";

// ─── Review avatar URLs (face-cropped, Indian-presenting, 20–40, professional) ─

// Avatar constants removed — all review identities now come from reviewIdentities.ts

// ─── Types & Data ─────────────────────────────────────────────────────────────

type Tab = "Overview" | "Reviews" | "Mentee FAQ";


// Pool A — m1 (Shruti Jain). Identities: F01 F02 F03 F04 M01 M02 M03 M04 + ANON
const mentorReviews = [
  { ...rv("F01"), rating: 5, title: "Transformative mentorship",      text: "Shruti's mentorship completely transformed my approach to fashion design. Her insights on pattern making and fabric selection were invaluable. She takes time to understand your goals and provides actionable feedback that accelerates your growth." },
  { ...rv("M01"), rating: 5, title: "Career-defining sessions",        text: "Every session with Shruti gave me concrete tools I could apply immediately. Her industry knowledge is exceptional and she has a rare ability to see exactly where you are in your journey and what you need next." },
  { ...rvAnon(),  rating: 4, title: "Genuinely invested in your success", text: "The mentorship sessions with Shruti were the best investment I made in my design career. She helped me refine my aesthetic, build confidence, and understand the business side of fashion. Her industry connections are also invaluable." },
  { ...rv("F02"), rating: 4, title: "Practical real-world insights",   text: "Shruti brings authentic real-world experience to every session. Her advice on garment construction and navigating production challenges was eye-opening. She never gives generic advice — everything is grounded in her actual industry experience." },
  { ...rv("M02"), rating: 5, title: "Best investment in my career",    text: "I came to Shruti at a pivotal moment in my career and she helped me see opportunities I had completely missed. Her guidance on portfolio positioning and building industry relationships directly led to my first design role." },
  { ...rv("F03"), rating: 5, title: "Excellent technical guidance",    text: "Shruti's technical knowledge is exceptional. She taught me advanced draping techniques and how to approach difficult fabrics with confidence. Her feedback is always constructive and immediately actionable." },
  { ...rv("M03"), rating: 4, title: "Helped me land my first role",    text: "Shruti worked with me intensively on my portfolio and interview preparation. The way she coached me to articulate my design thinking made a real difference. I landed my first design role within two months of our sessions." },
  { ...rv("F04"), rating: 5, title: "Exceptional portfolio coaching",  text: "Shruti has a sharp eye for what makes a portfolio stand out and she articulates it clearly. She helped me restructure and rethink how I was presenting my work, and the response from studios improved immediately." },
  { ...rv("M04"), rating: 4, title: "Deep industry knowledge",         text: "The depth of Shruti's industry knowledge is remarkable. She understands both the creative and commercial dimensions of fashion and helps you see how they connect. A mentor who genuinely cares about your long-term development." },
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

// ─── Per-mentor profile content ───────────────────────────────────────────────

interface ReviewEntry { avatar: string; name: string; role: string; rating: number; title: string; text: string; }
interface ExperienceEntry { company: string; letter: string; logo?: string; color?: string; role: string; start: string; end: string; }
interface EducationEntry { school: string; letter: string; logo?: string; color?: string; degree: string; start: string; end: string; }
interface MentorData {
  trainedCount: string;
  aboutMode: "image" | "text" | "hidden";
  aboutText?: string;
  aboutImage?: string;
  aboutImageText?: string;
  showWebinar: boolean;
  webinarImage?: string;
  showResponseTime: boolean;
  experience: ExperienceEntry[];
  education: EducationEntry;
  skills: string[];
  faqs: { question: string; answer: string }[];
  insights: { label: string; text: string }[];
  reviews: ReviewEntry[];
  availableDates: string[];
  timeSlots: string[];
}

// Pool B — m2 (Priya Mehta), m3 (Ravi Kumar). Identities: F05 F06 F07 F08 M05 M06 M07 M08 + ANON
const reviewsB: ReviewEntry[] = [
  { ...rv("F05"), rating: 5, title: "Exceptional depth of knowledge",        text: "The sessions were incredibly rich in content. The guidance on understanding fabric behaviour and how it translates into garment silhouettes gave me a level of technical clarity I had been missing throughout my formal education." },
  { ...rv("M05"), rating: 5, title: "A mentor who truly invests in you",     text: "What sets this mentorship apart is the genuine investment in your long-term development. Every session builds on the last and the feedback is specific, honest, and always directed at helping you grow into a more capable designer." },
  { ...rvAnon(),  rating: 4, title: "Strong real-world perspective",          text: "The insights on navigating the commercial pressures of fashion design while staying creatively authentic are ones I keep coming back to. The practical wisdom shared is something no design school can fully teach you." },
  { ...rv("F06"), rating: 4, title: "Clarity and confidence",                text: "I came into these sessions unsure about my direction and left with a much clearer sense of what I want to build in my career and how to get there. The mentorship style is warm but direct and exactly what I needed." },
  { ...rv("M06"), rating: 5, title: "Portfolio transformed",                  text: "My portfolio went from being a collection of work I was uncertain about to a cohesive story that I present with confidence. The guidance on how to frame your work and communicate your design thinking made a visible difference." },
  { ...rv("F07"), rating: 5, title: "Technical mastery shared generously",   text: "The technical depth in these sessions is remarkable. Advanced construction methods, draping solutions, and how to work with unconventional materials — all explained with patience and a real understanding of how designers learn." },
  { ...rv("M07"), rating: 4, title: "Grounded in industry reality",          text: "One of the most valuable things about this mentorship is how grounded it is in how the industry actually works. The advice on studio culture, career progression, and professional relationships is genuinely useful and honest." },
  { ...rv("F08"), rating: 5, title: "Highly recommended for any designer",   text: "Whether you are just starting out or are a few years into your career, this mentorship offers something meaningful. The ability to meet you exactly where you are and help you move forward is a rare skill in a mentor." },
  { ...rv("M08"), rating: 4, title: "Career direction and clarity",          text: "I had been drifting in my career without a clear strategy. These sessions helped me understand my strengths, identify opportunities that suit my profile, and build a focused plan for the next stage of my development." },
];

// Pool C — m4 (Sneha Patel). Identities: F09 F10 F11 F12 M09 M10 M11 M12 + ANON
const reviewsC: ReviewEntry[] = [
  { ...rv("F09"), rating: 5, title: "Practical, honest, impactful",           text: "Every session was filled with practical advice that I could apply immediately. No vague encouragement — just specific, honest guidance on what to improve, what to keep, and how to think about the next step in my design journey." },
  { ...rv("M09"), rating: 5, title: "The mentor I needed at this stage",      text: "At my stage of career, finding someone who understood exactly what I was facing and could give me relevant, specific advice was invaluable. The sessions gave me both technical improvements and a stronger sense of professional direction." },
  { ...rvAnon(),  rating: 4, title: "Clear and structured guidance",          text: "The structured approach to each session made the mentorship feel focused and purposeful. We worked through real challenges I was facing, and by the end of each session I had concrete next steps to work on. Very effective format." },
  { ...rv("F10"), rating: 5, title: "Transformed how I see garment design",   text: "My understanding of how a garment comes together — the relationship between design intent, fabric choice, and construction — was fundamentally transformed through these sessions. This is knowledge that will stay with me throughout my career." },
  { ...rv("M10"), rating: 4, title: "Great for building industry confidence", text: "The mentorship helped me understand the unwritten rules of the fashion industry — how to communicate with studios, how to handle feedback, how to present work. These things are rarely taught formally but matter enormously." },
  { ...rv("F11"), rating: 5, title: "A mentor who understands growth",        text: "What I valued most was the long-term perspective on career development. Rather than just addressing immediate concerns, the mentorship helped me think about where I want to be in 5 years and what choices will help me get there." },
  { ...rv("M11"), rating: 4, title: "Sharp technical eye",                    text: "The technical feedback in these sessions is precise and actionable. Each critique comes with a clear explanation of why something works or doesn't, which builds genuine understanding rather than just implementing corrections." },
  { ...rv("F12"), rating: 5, title: "Invaluable industry knowledge",          text: "The insider knowledge about how different types of fashion companies work, what they look for in junior designers, and how to position yourself effectively in the market is something you genuinely cannot get anywhere else." },
  { ...rv("M12"), rating: 4, title: "Accelerated my development",             text: "I made more progress in three months of mentorship than I had in the previous year on my own. The combination of technical guidance, career coaching, and honest feedback accelerated my development in a way I did not expect." },
];

// Pool D — m7–m10. Identities: F08 M12 F05 M05 F06 M07 F10 F12 M11 + ANON
// Deliberately avoids Pool A identities (F01–F04, M01–M04) so users who viewed
// m1 (Shruti Jain) do not see the same reviewer faces on m7–m10 profiles.
const reviewsD: ReviewEntry[] = [
  { ...rv("F08"), rating: 5, title: "Opened my eyes to the industry",      text: "This mentorship gave me a realistic and inspiring picture of what a design career can look like. The honesty about both the challenges and the opportunities helped me set expectations and approach my career with real confidence." },
  { ...rv("M12"), rating: 4, title: "Focused and effective",               text: "The sessions are structured and focused, which makes every minute feel useful. I came with specific questions and left with clear answers and a deeper understanding of the issues I was working through. Very efficient mentorship." },
  { ...rvAnon(),  rating: 4, title: "Real-world wisdom",                   text: "The mentorship brings real-world wisdom to every conversation. Understanding how studios actually operate, how decisions are made, and what matters to hiring managers gave me knowledge that changed how I approach my career." },
  { ...rv("F12"), rating: 5, title: "Patient and thorough",                text: "I appreciated how thoroughly each of my questions and concerns was addressed. Nothing felt rushed. The patience with which complex topics were explained helped me build genuine understanding rather than surface-level knowledge." },
  { ...rv("M05"), rating: 5, title: "Helped me think like a professional", text: "The shift from thinking like a student to thinking like a professional designer happened through these sessions. The perspective on how to evaluate your own work, engage with clients, and take ownership of your practice was transformative." },
  { ...rv("F06"), rating: 4, title: "Great for early-career designers",    text: "If you are at the beginning of your design career and feeling uncertain about where to go next, this mentorship will give you clarity and direction. The guidance is specific to where you actually are, not generic career advice." },
  { ...rv("M07"), rating: 5, title: "Builds real capability",              text: "The mentorship does not just give you answers — it builds your ability to find better answers yourself. The frameworks and perspectives shared have become part of how I think about design problems and career decisions every day." },
  { ...rv("F10"), rating: 4, title: "Consistent quality and care",         text: "Every session maintained a high standard of quality and genuine care for my development. The consistency made the mentorship feel trustworthy and made me confident that I was investing my time in something genuinely valuable." },
  { ...rv("M11"), rating: 5, title: "Worth every rupee",                   text: "The investment in this mentorship paid off many times over within the first few months. The combination of technical skill building, career guidance, and the confidence that comes from having an experienced mentor in your corner is priceless." },
];

const MENTOR_DATA: Record<string, MentorData> = {
  m1: {
    trainedCount: "500+",
    aboutMode: "image",
    aboutImage: MENTOR_ABOUT.shrutiJain,
    aboutImageText: "Passionate about craft, I design collections rooted in Indian heritage and contemporary sensibility. Every stitch tells a story of tradition meeting the modern wardrobe.",
    showWebinar: true,
    webinarImage: MENTOR_WEBINAR.shrutiJain,
    showResponseTime: true,
    experience: [
      { company: "MAX Fashion", letter: "M", logo: logoMAX,        role: "Sr. Fashion Designer",    start: "2020", end: "Present" },
      { company: "Zara India",  letter: "Z", logo: logoZara,       role: "Junior Fashion Designer", start: "2018", end: "2020"    },
      { company: "Pantaloons",  letter: "P", logo: logoPantaloons, role: "Design Trainee",          start: "2016", end: "2018"    },
    ],
    education: { school: "Pearl Academy", letter: "P", logo: logoPearl, degree: "B.Des in Fashion Design", start: "2014", end: "2018" },
    skills: ["Pattern Making", "Fabric Knowledge", "Garment Construction", "Fit Analysis", "Color Theory", "Trend Forecasting", "Technical Sketching", "Draping"],
    faqs: mentorFAQs,
    insights: [
      { label: "Expert guidance",    text: "7 years across top Indian and global brands; every session is tailored to your career stage." },
      { label: "Career acceleration", text: "Mentees advance quickly — she pinpoints exactly where you're stuck and what to do next." },
      { label: "Supportive approach", text: "Patient, honest feedback delivered in a safe environment genuinely built for growth." },
    ],
    reviews: mentorReviews,
    availableDates: ["30 Jul", "31 Jul", "3 Aug", "5 Aug", "8 Aug"],
    timeSlots: ["9:00 - 10:00 AM", "11:00 AM - 12:00 PM", "2:00 - 3:00 PM", "4:00 - 5:00 PM", "6:00 - 7:00 PM", "8:00 - 9:00 PM"],
  },
  m2: {
    trainedCount: "350+",
    aboutMode: "text",
    aboutText: "I have spent seven years building fashion collections that balance commercial relevance with genuine creative vision. At MAX Fashion, I lead a design team focused on accessible, trend-forward womenswear that resonates with Indian consumers across price points and seasons. My background in sustainable design practices informs everything from fabric sourcing to construction decisions. I believe mentorship is about giving younger designers the industry perspective they need to make confident, strategic choices in their careers.",
    showWebinar: true,
    webinarImage: MENTOR_WEBINAR.priyaMehta,
    showResponseTime: true,
    experience: [
      { company: "MAX Fashion",           letter: "M", logo: logoMAX,      role: "Sr. Fashion Designer", start: "2019", end: "Present" },
      { company: "Marks & Spencer India", letter: "M", logo: logoMarksSpencer, role: "Designer",             start: "2017", end: "2019"    },
      { company: "Global Desi",           letter: "G", logo: logoGlobalDesi, role: "Jr. Designer",         start: "2015", end: "2017"    },
    ],
    education: { school: "NIFT Delhi", letter: "N", logo: logoNIFT, degree: "B.Des in Fashion Technology", start: "2013", end: "2017" },
    skills: ["Womenswear Design", "Sustainable Fashion", "Fabric Sourcing", "Range Planning", "Visual Merchandising", "Team Leadership", "Trend Analysis", "CAD / Illustrator"],
    faqs: [
      { question: "How do I break into sustainable fashion design?", answer: "Start by learning about natural fibres, low-impact dyes, and zero-waste pattern cutting. Build relationships with ethical fabric suppliers and document your process — brands now want transparency as much as creativity." },
      { question: "What does a Sr. Fashion Designer actually do day to day?", answer: "Range planning, fabric sourcing meetings, design development with juniors, fitting sessions, and plenty of cross-functional coordination. The creative part is maybe 40% — the rest is communication and execution." },
      { question: "How important is CAD vs hand sketching early in a career?", answer: "Both matter, but CAD fluency will get you shortlisted. Learn Illustrator for tech packs and flats. Keep hand sketching for ideation — it is still faster for mood boarding and initial concept exploration." },
      { question: "How do I negotiate my first salary as a fashion designer?", answer: "Research market rates for your city and level. Know your BATNA. Lead with value — what specific skills, experience, or projects make you worth more. Most studios expect negotiation; the first offer is rarely the final one." },
      { question: "What separates good junior designers from great ones?", answer: "Curiosity and reliability in equal measure. Great juniors ask intelligent questions, take feedback without ego, and follow through on every detail. Technical skills can be taught; attitude and work ethic are what studios hire for." },
    ],
    insights: [
      { label: "Range intelligence",  text: "Balances trend-driven and core staples with commercial category coherence across a season." },
      { label: "Sustainable practice", text: "Makes sustainability practical — responsible sourcing decisions aligned with commercial success." },
      { label: "Clear communication", text: "Explains buying calendars and negotiations in plain, immediately applicable language." },
    ],
    reviews: reviewsB,
    availableDates: ["1 Aug", "2 Aug", "6 Aug", "9 Aug"],
    timeSlots: ["10:00 - 11:00 AM", "12:00 - 1:00 PM", "3:00 - 4:00 PM", "5:00 - 6:00 PM"],
  },
  m3: {
    trainedCount: "420+",
    aboutMode: "hidden",
    showWebinar: true,
    webinarImage: MENTOR_WEBINAR.raviKumar,
    showResponseTime: true,
    experience: [
      { company: "Myntra",     letter: "M", logo: logoMyntra, role: "Sr. Fashion Designer", start: "2018", end: "Present" },
      { company: "H&M India",  letter: "H", logo: logoHM,         role: "Associate Designer",   start: "2016", end: "2018"    },
      { company: "Puma India", letter: "P", logo: logoPuma,        role: "Jr. Apparel Designer", start: "2014", end: "2016"    },
    ],
    education: { school: "Symbiosis Institute of Design", letter: "S", logo: logoSymbiosis, degree: "B.Des in Fashion Design", start: "2012", end: "2016" },
    skills: ["E-commerce Design", "Digital Trend Research", "Photo Direction", "Technical Packs", "Fast Fashion", "Menswear", "Category Management", "Supplier Coordination"],
    faqs: [
      { question: "How do I design for e-commerce vs physical retail?", answer: "E-commerce demands that garments photograph well from multiple angles and communicate fabric quality visually. Think about how your design reads as a thumbnail. Physical retail allows more texture and drape experimentation." },
      { question: "What is it like working in fast fashion vs premium design?", answer: "Fast fashion is volume, speed, and commercial judgment. Premium is depth, craft, and storytelling. Both build valuable skills. Fast fashion sharpens your trend read and execution speed; premium builds your craft and conceptual thinking." },
      { question: "How do I develop menswear design skills as a womenswear trained designer?", answer: "Study tailoring, construction, and proportion carefully — menswear rewards technical precision. Work on fabric understanding and fit standards. Many transferable skills from womenswear apply; the aesthetic sensibility is the main shift." },
      { question: "How do I stay current with trends without losing my design identity?", answer: "Curate your inspiration sources carefully. Follow the trends that resonate with your design language and ignore the rest. The goal is to be informed, not to follow everything. Your distinct voice is what will make you memorable." },
      { question: "What should I prioritise in my first design role?", answer: "Learning to execute well. Show up with curiosity, ask intelligent questions, and take every brief seriously — even the simple ones. The best junior designers are the ones who make their seniors' jobs easier while learning everything they can." },
    ],
    insights: [
      { label: "E-commerce expertise", text: "Designs for thumbnails: quality, inclusivity, and data-led creative decisions at scale." },
      { label: "Speed and precision",  text: "Fast-fashion rigour: brief reading, tech-pack discipline, and rapid iteration skills." },
      { label: "Category breadth",     text: "Womenswear, menswear, accessories — a broad view of category trade-offs and career strategy." },
    ],
    reviews: reviewsB,
    availableDates: ["30 Jul", "2 Aug", "4 Aug", "7 Aug", "10 Aug"],
    timeSlots: ["9:00 - 10:00 AM", "1:00 - 2:00 PM", "4:00 - 5:00 PM", "7:00 - 8:00 PM", "8:00 - 9:00 PM"],
  },
  m4: {
    trainedCount: "280+",
    aboutMode: "image",
    aboutImage: MENTOR_ABOUT.snehaPatel,
    aboutImageText: "Leading design at Anita Dongre means working at the intersection of Indian craft traditions and contemporary luxury. My work is grounded in a deep respect for artisan communities and the slow, intentional craft they preserve.",
    showWebinar: true,
    webinarImage: MENTOR_WEBINAR.snehaPatel,
    showResponseTime: true,
    experience: [
      { company: "Anita Dongre", letter: "A", logo: logoAnitaDongre, role: "Lead Fashion Designer", start: "2016", end: "Present" },
      { company: "Mango India",  letter: "M", logo: logoMango,          role: "Senior Designer",       start: "2014", end: "2016"    },
      { company: "Rohit Bal",    letter: "R", logo: logoRohitBal,       role: "Fashion Designer",      start: "2012", end: "2014"    },
    ],
    education: { school: "NIFT Mumbai", letter: "N", logo: logoNIFT, degree: "M.Des in Fashion Design", start: "2012", end: "2014" },
    skills: ["Luxury Design", "Craft Collaboration", "Artisan Partnership", "Bridal Design", "Hand Embroidery Direction", "Heritage Textiles", "Sustainable Luxury", "Studio Management"],
    faqs: [
      { question: "How do I break into luxury or couture fashion design?", answer: "Build a portfolio that demonstrates craft sensibility, technical depth, and an understanding of the client at this price point. Internships at premium studios are invaluable — and be patient, as luxury moves slower and hires carefully." },
      { question: "What is the difference between designing for craft heritage vs commercial fashion?", answer: "Heritage design requires deep research, humility about the craft tradition, and patience with artisan timelines. Commercial design demands speed and commercial instinct. The best designers can operate in both modes depending on the context." },
      { question: "How do I develop relationships with artisan communities?", answer: "Start by listening and learning before asking for anything. Visit craft clusters, attend textile fairs, and take time to understand the craft tradition before trying to incorporate it into your work. Respect and patience are essential." },
      { question: "How do I build a design career in bridal or occasion wear?", answer: "Understand the emotional weight of the category — every garment marks a significant moment in someone's life. Study Indian bridal traditions across regions. Build technical skills in embroidery, heavy fabrics, and structured silhouettes." },
      { question: "What skills do fashion schools underteach that really matter in practice?", answer: "Studio management, artisan communication, cost awareness, and the commercial realities of running a design business. Also, resilience — the ability to handle creative rejection, iterate quickly, and maintain your vision under pressure." },
    ],
    insights: [
      { label: "Luxury craft expertise",  text: "Full arc from design intent to artisan briefing and final garment quality at every detail." },
      { label: "Artisan collaboration",   text: "Teaches the etiquette, economics, and accountability that make craft partnerships sustainable." },
      { label: "Heritage with modernity", text: "Draws on tradition without appropriating — rooted work that reads as genuinely contemporary." },
    ],
    reviews: reviewsC,
    availableDates: ["31 Jul", "1 Aug", "5 Aug", "9 Aug"],
    timeSlots: ["10:00 - 11:00 AM", "2:00 - 3:00 PM", "5:00 - 6:00 PM"],
  },
  m5: {
    trainedCount: "190+",
    aboutMode: "hidden",
    showWebinar: true,
    webinarImage: MENTOR_WEBINAR.amitSharma,
    showResponseTime: true,
    experience: [
      { company: "Biba",             letter: "B", logo: logoBiba,         role: "Mid-Level Designer", start: "2021", end: "Present" },
      { company: "Forever 21 India", letter: "F", logo: logoForever21,    role: "Jr. Designer",       start: "2019", end: "2021"    },
      { company: "Nykaa Fashion",    letter: "N", logo: logoNykaaFashion, role: "Design Intern",      start: "2018", end: "2019"    },
    ],
    education: { school: "Pearl Academy Bangalore", letter: "P", logo: logoPearl, degree: "B.Des in Fashion Design", start: "2015", end: "2019" },
    skills: ["Indian Ethnic Wear", "Kurta Design", "Salwar Kameez", "Print Development", "Block Printing", "Embellishment", "Market Research", "Trend Adaption"],
    faqs: [
      { question: "How do I design for the Indian ethnic wear market specifically?", answer: "Understand regional preferences — what sells in Rajasthan differs from what sells in Bengal. Study craft traditions relevant to your category. Work on fit standards for Indian body types, which are often underserved by global design education." },
      { question: "How do I transition from fast fashion experience to ethnic or traditional wear?", answer: "The commercial skills transfer well — trend reading, execution speed, supplier management. The key shift is developing cultural sensitivity and craft understanding. Immerse yourself in the traditions you want to work with." },
      { question: "What are the career opportunities in the Indian mass-market fashion segment?", answer: "Enormous and underrated. Brands like Biba, W for Woman, and Global Desi serve a massive market with real design needs. The segment offers good career stability, strong commercial training, and the chance to design for how most Indians actually dress." },
      { question: "How do I develop original print designs rather than adapting existing ones?", answer: "Start with deep research into your source material — regional textiles, craft motifs, historical archives. Develop your own drawing practice and learn to translate reference into original artwork. Originality comes from thorough research, not from trying to be different." },
      { question: "What should I focus on as a mid-level designer trying to move to a senior role?", answer: "Take ownership of projects end to end. Demonstrate that you can deliver without constant guidance, manage suppliers independently, and make commercial decisions. Show leadership by mentoring juniors and contributing ideas at the brief stage." },
    ],
    insights: [
      { label: "Indian ethnic wear focus",  text: "Deep knowledge of a festival-driven, regionally diverse design segment rarely taught formally." },
      { label: "Market-driven thinking",    text: "Designs for real Indian consumers with specific cultural needs and occasion motivations." },
      { label: "Print and craft expertise", text: "Block printing: sourcing clusters, briefing printers, and scaling craft to production." },
    ],
    reviews: reviewsC,
    availableDates: ["30 Jul", "4 Aug", "6 Aug", "11 Aug"],
    timeSlots: ["9:00 - 10:00 AM", "11:00 AM - 12:00 PM", "3:00 - 4:00 PM", "6:00 - 7:00 PM"],
  },
  m6: {
    trainedCount: "230+",
    aboutMode: "text",
    aboutText: "Six years into a career spanning India's dynamic mid-market womenswear segment, I have built expertise in designing collections that balance trend relevance with deep cultural understanding of the Indian woman consumer. My work at W for Woman taught me how to make fashion feel simultaneously aspirational and genuinely wearable. Before that, a formative stint at Reliance Trends gave me strong foundations in commercial range planning and supplier development. I mentor designers who want to build meaningful careers in India's domestic fashion market — a space that is growing rapidly and where great designers are genuinely needed.",
    showWebinar: false,
    showResponseTime: true,
    experience: [
      { company: "W for Woman",      letter: "W", logo: logoWForWoman,      role: "Fashion Designer", start: "2020", end: "Present" },
      { company: "Reliance Trends",  letter: "R", logo: logoRelianceTrend, role: "Jr. Designer",      start: "2018", end: "2020"    },
      { company: "Aurelia",          letter: "A", logo: logoAurelia,       role: "Design Intern",     start: "2016", end: "2018"    },
    ],
    education: { school: "NIFT Hyderabad", letter: "N", logo: logoNIFT, degree: "B.Des in Apparel Design", start: "2014", end: "2018" },
    skills: ["Womenswear", "Indian Consumer Research", "Commercial Range Building", "Colour Palette Development", "Fabric Selection", "Work Wear Design", "Weekend Wear", "Occasion Dressing"],
    faqs: [
      { question: "How do I design for working Indian women specifically?", answer: "Understand the dual demands of professionalism and cultural sensitivity. The modern Indian woman wants clothes that work in a meeting and a family gathering. Study silhouettes, fabrics, and colour palettes that serve both contexts without compromise." },
      { question: "What is range planning and why should junior designers understand it?", answer: "Range planning is the commercial backbone of a collection — how many styles, at what price points, in which categories, and for which occasions. Understanding it makes you a far more effective designer and a more attractive candidate for senior roles." },
      { question: "How important is understanding consumer research as a designer?", answer: "Extremely important, especially in the mid-market. You are designing for real women with specific incomes, lifestyles, and cultural contexts. The more precisely you understand your consumer, the more effectively you can design for her." },
      { question: "How do I build a career in domestic Indian fashion rather than pursuing international brands?", answer: "The domestic market offers more opportunity than most designers realise. Focus on understanding India deeply — its regional diversity, its evolving consumer base, its craft traditions. This is knowledge that gives you a competitive edge internationally applied locally." },
      { question: "How do I make a collection feel cohesive when working to a commercial brief?", answer: "Start with a strong colour story and a single clear point of view on proportion. Let the brief define the commercial guardrails and then find the creative direction within them. Cohesion comes from a clear lens, not from matching everything." },
    ],
    insights: [
      { label: "Consumer clarity",        text: "Framework for designing work that is culturally resonant and commercially viable for real women." },
      { label: "Range-building expertise", text: "Price architecture, fabric mix, occasion mapping, and hero vs volume balance — all covered." },
      { label: "Domestic market focus",   text: "Argues persuasively that India's most interesting design decade is happening right now." },
    ],
    reviews: reviewsC,
    availableDates: ["1 Aug", "3 Aug", "7 Aug", "10 Aug"],
    timeSlots: ["10:00 - 11:00 AM", "1:00 - 2:00 PM", "4:00 - 5:00 PM", "7:00 - 8:00 PM", "8:00 - 9:00 PM"],
  },
  m7: {
    trainedCount: "120+",
    aboutMode: "text",
    aboutText: "Three years into my design career and I have already learned more than I thought possible about how the fashion industry actually works. At Biba I design across ethnic and fusion categories, working quickly and responding to market feedback in real time. My experience at Shein India taught me the discipline of fast-cycle design — how to develop a garment from brief to final spec in days rather than weeks. I mentor designers who are just starting out, particularly those navigating the gap between design school and their first professional role. The confusion, uncertainty, and imposter syndrome of the early career is something I still remember clearly — and I am genuinely invested in helping others navigate it.",
    showWebinar: false,
    showResponseTime: false,
    experience: [
      { company: "Biba",        letter: "B", logo: logoBiba,  role: "Mid-Level Designer", start: "2023", end: "Present" },
      { company: "Shein India", letter: "S", logo: logoShein, role: "Jr. Designer",       start: "2021", end: "2023"    },
      { company: "Virgio",      letter: "V", color: "#5C3D8F", role: "Design Intern",      start: "2020", end: "2021"    },
    ],
    education: { school: "INIFD Pune", letter: "I", logo: logoINIFD, degree: "Diploma in Fashion Design", start: "2019", end: "2021" },
    skills: ["Fast Fashion Execution", "Ethnic Fusion Design", "Technical Spec Writing", "Trend Adoption", "Vendor Communication", "CAD Basics", "Print Selection", "Cost-Conscious Design"],
    faqs: [
      { question: "How do I deal with imposter syndrome as a new designer?", answer: "Almost every designer feels it, especially in the first two years. The antidote is doing the work — consistently, carefully, and without waiting to feel ready. Confidence follows action, not the other way around." },
      { question: "What is the best way to get my first design job with limited experience?", answer: "Have a clean, focused portfolio with 4 to 6 strong projects. Apply broadly and include smaller brands that are more likely to take a chance on you. Offer to do a brief trial project if they are hesitant. Getting in the door matters more than the salary at this stage." },
      { question: "How do I manage the mental load of working in fast fashion?", answer: "Pace and prioritisation are everything. Learn to work in focused sprints, protect your creative energy for the highest-priority tasks, and develop routines that help you decompress at the end of the day. Fast fashion is intense — boundaries matter." },
      { question: "Is it worth doing a paid design course after graduating from a design college?", answer: "Depends entirely on the course and what gap it fills. If it teaches something your college did not — specific software, a technical skill, industry knowledge — then potentially yes. But real work experience is almost always more valuable than another course." },
      { question: "How do I make the most of an internship in a design studio?", answer: "Be early, be enthusiastic, and say yes to everything. Observe more than you speak. Ask thoughtful questions at the right moments. Build relationships — internships are as much about proving your attitude as your skills. The best interns get offered jobs." },
    ],
    insights: [
      { label: "Early-career expertise", text: "Navigating school-to-studio transition with practical, peer-level honest guidance." },
      { label: "Fast fashion knowledge", text: "Execution speed, commercial judgment, and discipline for high-volume studio environments." },
      { label: "Peer-level honesty",     text: "Proximity to early-career reality makes his guidance unusually credible and relatable." },
    ],
    reviews: reviewsD,
    availableDates: ["31 Jul", "5 Aug", "12 Aug"],
    timeSlots: ["9:00 - 10:00 AM", "2:00 - 3:00 PM"],
  },
  m8: {
    trainedCount: "160+",
    aboutMode: "image",
    aboutImage: MENTOR_ABOUT.anjaliNair,
    aboutImageText: "At Fabindia I design across handloom and craft-based categories, working directly with artisan communities to translate traditional weaves into contemporary garments. Craft and commerce in honest conversation.",
    showWebinar: false,
    showResponseTime: true,
    experience: [
      { company: "Fabindia", letter: "F", logo: logoFabIndia, role: "Fashion Designer", start: "2022", end: "Present" },
      { company: "Westside", letter: "W", logo: logoWestside, role: "Jr. Designer",  start: "2020", end: "2022"    },
      { company: "Anokhi",   letter: "A", logo: logoAnokhi,   role: "Design Intern", start: "2019", end: "2020"    },
    ],
    education: { school: "NIFT Chennai", letter: "N", logo: logoNIFT, degree: "B.Des in Textile Design", start: "2016", end: "2020" },
    skills: ["Handloom Design", "Craft Collaboration", "Natural Fibres", "Woven Textiles", "Artisan Communication", "Surface Design", "Sustainable Sourcing", "Block Printing"],
    faqs: [
      { question: "How do I build a career in handloom and craft-based fashion?", answer: "Immerse yourself in the craft traditions. Visit weaving clusters, study regional textile histories, and learn to communicate with artisans in their language — literally and metaphorically. The design knowledge is secondary; the relationship and respect come first." },
      { question: "How do I work with natural fibres at a commercial scale?", answer: "Understand that natural fibres have variability that synthetics do not — and that is both a challenge and an opportunity. Learn how to spec for variation, how to work with artisan production timelines, and how to communicate natural uniqueness as a value proposition." },
      { question: "What is the career path in the Indian sustainable fashion space?", answer: "It ranges from craft-based labels like Fabindia and Good Earth to independent sustainable brands to NGOs working at the intersection of craft and livelihood. Build deep expertise in one craft tradition and a broad understanding of the sustainable design ecosystem." },
      { question: "How do I design garments that honour a craft tradition without making them feel like costumes?", answer: "The key is proportions and styling. Traditional textiles can sit in contemporary silhouettes. Study how designers like Anavila, Abraham & Thakore, and Injiri do it — they make handloom feel completely of-the-moment without compromising the textile's identity." },
      { question: "Is a textile design background more useful than fashion design for a handloom career?", answer: "Both are valuable. Textile design gives you deeper material knowledge. Fashion design gives you stronger garment construction and commercial sense. The ideal is developing both — take every opportunity to learn across disciplines." },
    ],
    insights: [
      { label: "Craft-based design",      text: "Expert at artisan tradition meeting sustainability and contemporary Indian design identity." },
      { label: "Natural material mastery", text: "Understands materials culturally, aesthetically, and environmentally — transforms design decisions." },
      { label: "Artisan partnership",     text: "Teaches trust, economics, and creative negotiation with craft communities over the long term." },
    ],
    reviews: reviewsD,
    availableDates: ["2 Aug", "4 Aug", "8 Aug"],
    timeSlots: ["11:00 AM - 12:00 PM", "3:00 - 4:00 PM", "6:00 - 7:00 PM"],
  },
  m9: {
    trainedCount: "390+",
    aboutMode: "image",
    aboutImage: MENTOR_ABOUT.rajeshPatel,
    aboutImageText: "Nine years of designing for some of India's largest retail fashion brands has taught me that great design is as much about understanding business as it is about creativity. My work at Lifestyle and Shoppers Stop shaped my commercial instincts and gave me the breadth of category knowledge I now bring to mentorship.",
    showWebinar: false,
    showResponseTime: true,
    experience: [
      { company: "Lifestyle",        letter: "L", logo: logoLifestyle,  role: "Sr. Fashion Designer", start: "2019", end: "Present" },
      { company: "Shoppers Stop",   letter: "S", logo: logoShoppersStop, role: "Designer",             start: "2017", end: "2019"    },
      { company: "Central",         letter: "C", logo: logoCentral,      role: "Jr. Designer",          start: "2015", end: "2017"    },
      { company: "Arvind Brands",   letter: "A", logo: logoArvind,       role: "Design Trainee",        start: "2013", end: "2015"    },
    ],
    education: { school: "Pearl Academy Jaipur", letter: "P", logo: logoPearl, degree: "B.Des in Fashion Design", start: "2013", end: "2017" },
    skills: ["Multi-Category Design", "Private Label Development", "Buying & Merchandising", "Retail Fashion", "Value Fashion", "Category Strategy", "Colour Story Development", "Visual Merchandising"],
    faqs: [
      { question: "How do I transition from design into buying or merchandising?", answer: "Start by understanding the commercial language — sell-through rates, margin, markdown cycles. Shadow buyers where possible. Your design eye is an asset in buying but you need to complement it with strong quantitative thinking and supplier management skills." },
      { question: "What does it mean to develop a private label for a large retailer?", answer: "You are building a brand within a brand — with its own identity, aesthetic codes, and target consumer. It requires the full spectrum of design skills: consumer research, range planning, design execution, and quality oversight from spec to finished garment." },
      { question: "How do I make value fashion feel premium without increasing the cost?", answer: "Design is about perception. Strong colour stories, clean silhouettes, and thoughtful print placement can elevate a garment regardless of price point. The details that matter most — finish, fit, proportion — often do not cost more to get right." },
      { question: "How should designers think about retail calendars and buying cycles?", answer: "Understand that retail is driven by business cycles, not creative cycles. Learn the seasons, the markdown windows, and the planning timelines your buying team works to. The more commercially fluent you are, the more effective you become as a designer." },
      { question: "What are the key differences between designing for a department store vs a brand?", answer: "Department stores require range breadth and category versatility. Brands allow deeper aesthetic focus and stronger identity. Both demand commercial competence, but in different forms. Department store experience builds range planning muscle; brand experience builds identity and consistency." },
    ],
    insights: [
      { label: "Retail and commercial expertise", text: "Nine years at major retailers: buying cycles, range architecture, margin management." },
      { label: "Private label mastery",           text: "Builds brand identities within large organisations where vision meets commercial reality." },
      { label: "Category breadth",                text: "Multi-category experience for strategic, clear thinking across all design career paths." },
    ],
    reviews: reviewsD,
    availableDates: ["30 Jul", "3 Aug", "6 Aug", "9 Aug"],
    timeSlots: ["9:00 - 10:00 AM", "12:00 - 1:00 PM", "3:00 - 4:00 PM", "5:00 - 6:00 PM", "7:00 - 8:00 PM"],
  },
  m10: {
    trainedCount: "310+",
    aboutMode: "text",
    aboutText: "Eleven years in fashion design have taken me from a junior position at Good Earth to leading the design team at FabIndia, one of India's most culturally significant fashion and lifestyle brands. The through-line in my career has been a commitment to India's craft traditions — understanding them deeply, working with them honestly, and finding ways to make them relevant to contemporary consumers without diluting their integrity. Mentorship for me is about passing on not just the technical knowledge of design but the broader cultural intelligence and business acumen that are equally essential for a meaningful career in Indian fashion today.",
    showWebinar: false,
    showResponseTime: true,
    experience: [
      { company: "FabIndia",          letter: "F", logo: logoFabIndia,       role: "Lead Designer",    start: "2018", end: "Present" },
      { company: "Good Earth",        letter: "G", logo: logoGoodEarth,      role: "Sr. Designer",     start: "2015", end: "2018"    },
      { company: "Abraham & Thakore", letter: "A", logo: logoAbrahamThakore, role: "Fashion Designer", start: "2012", end: "2015"    },
      { company: "Nicobar",           letter: "N", color: "#4A6741",      role: "Jr. Designer",     start: "2011", end: "2012"    },
    ],
    education: { school: "NIFT Kolkata", letter: "N", logo: logoNIFT, degree: "B.Des in Leather Design & Accessories", start: "2011", end: "2015" },
    skills: ["Craft Heritage Design", "Multi-Category Leadership", "Lifestyle Brand Design", "Handcraft Direction", "Artisan Network Development", "Category Expansion", "Brand Identity", "Design Leadership"],
    faqs: [
      { question: "How do I build a career at the intersection of heritage craft and contemporary design?", answer: "Develop your craft knowledge as rigorously as your design knowledge. Travel to craft clusters. Study both the tradition and the business of craft. The designers who do this well are rare and consistently in demand." },
      { question: "What does design leadership look like in the Indian fashion context?", answer: "It is equal parts creative direction, team development, stakeholder management, and cultural stewardship. The best design leaders in India understand the commercial pressures and the craft responsibilities equally, and navigate between them with skill." },
      { question: "How do I build and manage a design team as I move into more senior roles?", answer: "Invest in your team's development the way you wish someone had invested in yours. Be clear about creative direction, fair about feedback, and consistent in your support. Great design leaders make their teams feel safe to take creative risks." },
      { question: "How do I stay relevant in Indian fashion as trends and consumer tastes evolve rapidly?", answer: "The designers who stay relevant are those rooted in something deeper than trend — in craft knowledge, cultural intelligence, or a strong design philosophy. Trend fluency matters, but it is the depth beneath the trend that creates longevity." },
      { question: "What is the difference between designing for a lifestyle brand vs a pure fashion brand?", answer: "Lifestyle brands require a broader sensibility — you are designing for a way of living, not just a way of dressing. Home, accessories, and apparel need to speak a coherent visual language. It demands range breadth and a consistent aesthetic point of view across categories." },
    ],
    insights: [
      { label: "Cultural design intelligence", text: "Eleven years of craft vocabulary, artisan economics, and cultural resonance in Indian fashion." },
      { label: "Design leadership",            text: "Creative, commercial, and interpersonal insight into real studio team leadership." },
      { label: "Long-term career thinking",    text: "Decade-horizon thinking on craft-based, sustainable, heritage-informed design careers." },
    ],
    reviews: reviewsD,
    availableDates: ["1 Aug", "5 Aug", "7 Aug", "11 Aug"],
    timeSlots: ["10:00 - 11:00 AM", "2:00 - 3:00 PM", "4:00 - 5:00 PM", "8:00 - 9:00 PM"],
  },
};

// Default data for unknown mentor IDs
const defaultMentorData: MentorData = MENTOR_DATA["m1"];

// ─── Recent posts — per-mentor, unique dedicated images, zero repeats ────────
//
//  17 images distributed across 17 total cards (3+2+3+2+1+3+3).
//  m3 / m5 / m8 → empty array → section fully hidden.

type RecentPost = { img: string; date: string };

const MENTOR_RECENT_POSTS: Record<string, RecentPost[]> = {
  m1:  [                                           // Shruti Jain  — 3 cards
    { img: imgRp770, date: "18 May"     },
    { img: imgRp771, date: "3 April"    },
    { img: imgRp772, date: "14 March"   },
  ],
  m2:  [                                           // Priya Mehta  — 2 cards
    { img: imgRp773, date: "22 May"     },
    { img: imgRp774, date: "8 April"    },
  ],
  m3:  [],                                         // Ravi Kumar   — 0 (hidden)
  m4:  [                                           // Sneha Patel  — 3 cards
    { img: imgRp775, date: "27 April"   },
    { img: imgRp776, date: "11 March"   },
    { img: imgRp777, date: "2 February" },
  ],
  m5:  [],                                         // Amit Sharma  — 0 (hidden)
  m6:  [                                           // Neha Verma   — 2 cards
    { img: imgRp778, date: "15 May"     },
    { img: imgRp779, date: "29 March"   },
  ],
  m7:  [                                           // Vikram Singh — 1 card
    { img: imgRp780, date: "6 May"      },
  ],
  m8:  [],                                         // Anjali Nair  — 0 (hidden)
  m9:  [                                           // Rajesh Patel — 3 cards
    { img: imgRp781, date: "20 May"     },
    { img: imgRp782, date: "4 April"    },
    { img: imgRpA,   date: "17 March"   },
  ],
  m10: [                                           // Kavita Reddy — 3 cards
    { img: imgRpB,   date: "12 May"     },
    { img: imgRpC,   date: "25 March"   },
    { img: imgRpD,   date: "7 February" },
  ],
};

// ─── Full mentor pool for Similar Mentors logic ───────────────────────────────

const ALL_MENTORS: Mentor[] = [
  { id: "m1", name: "Shruti Jain",  title: "Sr. Fashion Designer",   company: "MAX",          avatar: MENTOR_AVATARS.shrutiJain,  experience: "7 yrs exp • EX - ZARA",          rating: 4.9, reviews: 120, originalPrice: 600, discountedPrice: 300, isTopMentor: true },
  { id: "m2", name: "Priya Mehta",  title: "Sr. Fashion Designer",   company: "MAX",          avatar: MENTOR_AVATARS.priyaMehta,  experience: "7 yrs exp • EX - M&S India",     rating: 4.7, reviews: 120, originalPrice: 600, discountedPrice: 400, isTopMentor: true },
  { id: "m3", name: "Ravi Kumar",   title: "Lead Designer",          company: "Myntra",       avatar: MENTOR_AVATARS.raviKumar,   experience: "8 yrs exp • EX - H&M",           rating: 4.8, reviews: 120, originalPrice: 550, discountedPrice: 350, isTopMentor: true },
  { id: "m4", name: "Sneha Patel",  title: "Lead Fashion Designer",  company: "Anita Dongre", avatar: MENTOR_AVATARS.snehaPatel,      experience: "10 yrs exp • EX - Mango",        rating: 4.6, reviews: 75,  originalPrice: 580, discountedPrice: 250, isTopMentor: true },
  { id: "m5", name: "Amit Sharma",  title: "Mid-Level Designer",     company: "Biba",         avatar: MENTOR_AVATARS.amitSharma,  experience: "5 yrs exp • EX - Forever 21",    rating: 4.4, reviews: 95,  originalPrice: 520, discountedPrice: 350 },
  { id: "m6", name: "Neha Verma",   title: "Fashion Designer",       company: "W for Woman",  avatar: MENTOR_AVATARS.nehaVerma,   experience: "6 yrs exp • EX - Reliance Trends", rating: 4.5, reviews: 88, originalPrice: 480, discountedPrice: 320 },
  { id: "m7", name: "Vikram Singh", title: "Mid-Level Designer",     company: "Biba",         avatar: MENTOR_AVATARS.vikramSingh, experience: "3 yrs exp • EX - Shein",         rating: 4.2, reviews: 80,  originalPrice: 100, discountedPrice: "Free" },
  { id: "m8", name: "Anjali Nair",  title: "Fashion Designer",       company: "Fabindia",     avatar: MENTOR_AVATARS.anjaliNair,  experience: "4 yrs exp • EX - Westside",      rating: 4.3, reviews: 65,  originalPrice: 450, discountedPrice: 280 },
  { id: "m9", name: "Rajesh Patel", title: "Sr. Fashion Designer", company: "Lifestyle", avatar: MENTOR_AVATARS.rajeshPatel, experience: "9 yrs exp • EX - Shoppers Stop", rating: 4.8, reviews: 110, originalPrice: 650, discountedPrice: 400 },
  { id: "m10", name: "Kavita Reddy", title: "Lead Designer", company: "FabIndia", avatar: MENTOR_AVATARS.kavitaReddy, experience: "11 yrs exp • EX - Good Earth", rating: 4.7, reviews: 98, originalPrice: 700, discountedPrice: 450 },
];

function getSimilarMentors(activeMentor: Mentor): Mentor[] {
  const activeId = activeMentor.id;
  const isFreeM = activeMentor.discountedPrice === "Free";
  const isTop = activeMentor.isTopMentor === true;

  if (isFreeM) {
    const freeOthers = ALL_MENTORS.filter(m => m.id !== activeId && m.discountedPrice === "Free");
    const paidNonTop = ALL_MENTORS.filter(m => m.id !== activeId && m.discountedPrice !== "Free" && !m.isTopMentor);
    return [...freeOthers.slice(0, 1), ...paidNonTop].slice(0, 3);
  }

  if (isTop) {
    return ALL_MENTORS.filter(m => m.id !== activeId && m.isTopMentor === true).slice(0, 3);
  }

  return ALL_MENTORS.filter(m => m.id !== activeId && m.discountedPrice !== "Free" && !m.isTopMentor).slice(0, 3);
}

// Helper to compute day-of-week label from a date string like "30 Jul"
function parseDateLabel(label: string): Date {
  const [day, month] = label.split(" ");
  const months: Record<string, number> = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
  return new Date(2026, months[month], parseInt(day));
}

// Mentor IDs where About Me is hidden (m3, m5)
// Mentor IDs where Webinar is hidden (m7, m8, m9, m10) — stored in the data map

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
  return (
    <div className="flex flex-col gap-[8px] items-start w-full border-b border-[#e2d9ef] pb-[16px]">
      <div className="flex gap-[12px] items-center w-full">
        <div className="relative shrink-0 size-[54px] rounded-full overflow-hidden border border-[#e2d9ef]">
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            src={avatar}
            loading="lazy"
            decoding="async"
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
      {/* Full review text — no truncation, no ellipsis, no expand/collapse */}
      <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px]">
        {text}
      </p>
    </div>
  );
}

// ─── LogoImg ──────────────────────────────────────────────────────────────────
// Tiny stateful component — shows logo image when it loads, falls back to the
// initials letter when the URL is absent or the image fails to load.

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
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function MentorProfilePage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Read mentor passed via navigation state; fall back to m1 (Shruti Jain)
  const passedMentor = (location.state as { mentor?: Mentor } | null)?.mentor;
  const mentor: Mentor = passedMentor ?? {
    id: "m1", name: "Shruti Jain", title: "Sr. Fashion Designer", company: "MAX",
    avatar: MENTOR_AVATARS.shrutiJain, experience: "7 yrs exp • EX - ZARA",
    rating: 4.9, reviews: 120, originalPrice: 600, discountedPrice: 300, isTopMentor: true,
  };
  const pd = MENTOR_DATA[mentor.id] ?? defaultMentorData;

  // Derive current role + company from the "Present" experience entry in MENTOR_DATA
  // so the profile header is always in sync with the experience section.
  const mentorCurrentExp = pd.experience.find((e) => e.end === "Present") ?? pd.experience[0];
  const mentorDisplayTitle   = mentorCurrentExp.role;
  const mentorDisplayCompany = mentorCurrentExp.company;
  const isFree = mentor.discountedPrice === "Free";
  const similarMentors = getSimilarMentors(mentor);

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [mentor.id]);

  const [showBookingReview, setShowBookingReview] = useState(false);

  // Keyboard: Esc dismisses the booking review overlay
  useEscKey(() => setShowBookingReview(false), showBookingReview);

  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [selectedDateIdx, setSelectedDateIdx] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string>(pd.timeSlots[0]);
  const [saved, setSaved] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [expandedFAQs, setExpandedFAQs] = useState<Set<number>>(new Set([0])); // First FAQ expanded by default
  const [visibleFAQCount, setVisibleFAQCount] = useState(3);

  const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const selectedDateLabel = pd.availableDates[selectedDateIdx] ?? pd.availableDates[0];
  const selectedDayName = (() => {
    const d = parseDateLabel(selectedDateLabel);
    return `${DAY_NAMES[d.getDay()]} · ${selectedDateLabel}`;
  })();

  const timeSlots = pd.timeSlots;

  const skills = pd.skills;
  const displayedSkills = showAllSkills ? skills : skills.slice(0, 4);

  const footerHeight = 178; // Footer height for proper scroll padding

  if (showBookingReview) {
    return (
      <BookingReviewPage
        onBack={() => setShowBookingReview(false)}
        mentor={mentor}
        bookingType="session"
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#fffeff] flex items-start justify-center">
      <div className="w-full max-w-[800px] min-w-[360px] bg-[#fffeff] flex flex-col min-h-screen">
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

        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          {/* Mentor Hero Section */}
          <div className="bg-[#fffeff] px-4 pt-5 pb-3">
            {/* Image and Action Buttons Row */}
            <div className="flex justify-between items-center mb-3">
              <div className="relative shrink-0 size-[72px] rounded-full overflow-hidden border-2 border-[#e2d9ef] bg-[#f5f0ff]">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  className="absolute inset-0 size-full object-cover"
                  loading="eager"
                  decoding="async"
                  {...({ fetchpriority: "high" } as Record<string, string>)}
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
                  <DotsThreeVertical size={18} color="#6B5F7A" weight="bold" />
                </button>
              </div>
            </div>

            {/* Profile Details Section */}
            <div className="mb-[2px]">
              <div className="flex items-center justify-between mb-1">
                <h1 className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[18px] leading-[24px]">
                  {mentor.name}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-[4px] bg-[#fffeff]">
                    <Star size={12} weight="fill" color="#1A1128" />
                    <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[12px] leading-[18px]">
                      {mentor.rating}
                    </span>
                    <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px]">
                      ({mentor.reviews})
                    </span>
                  </div>
                  {mentor.isTopMentor && (
                    <div className="bg-gradient-to-l from-[rgba(247,181,0,0.4)] to-[rgba(254,250,225,0.4)] py-0.5 rounded-[4px] px-[8px]">
                      <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[12px] leading-[18px]">
                        Top 1%
                      </span>
                    </div>
                  )}
                </div>
              </div>
              {/* Role · @Company — derived from Present experience entry, never stale */}
              <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[14px] leading-[21px] tracking-[0.14px] mb-1">
                {mentorDisplayTitle} · @{mentorDisplayCompany}
              </p>
              <div className="flex flex-wrap gap-1.5 text-[12px] text-[#6b5f7a] font-['Manrope',sans-serif] mb-1">
                <span>{mentor.experience.split(" • ")[0]}</span>
                {mentor.experience.split(" • ")[1] && (
                  <>
                    <span>•</span>
                    <span>{mentor.experience.split(" • ")[1]}</span>
                  </>
                )}
                <span>•</span>
                <span>Trained {pd.trainedCount} designers</span>
              </div>
              {pd.showResponseTime && (
                <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[20px]">
                  Usually responds within 24 hours
                </p>
              )}
            </div>

            <div className="rounded-[8px] p-[0px]">
              <div className="flex items-baseline gap-[6px]">
                <span className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[14px] line-through">
                  ₹{mentor.originalPrice}
                </span>
                <span className="type-h4 text-[#1a1128]">
                  {isFree ? "Free" : `₹${mentor.discountedPrice}`}
                </span>
                {!isFree && (
                  <div className="flex items-baseline gap-[4px]">
                    <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px]">
                      /hr
                    </span>
                    <span className="font-['Manrope',sans-serif] font-medium text-[12px] leading-[18px] text-[#1a1128]">
                      + Free Chat for 10 days
                    </span>
                  </div>
                )}
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
              <span className="font-['Manrope',sans-serif] text-[15px] font-semibold text-[#1a1128] flex-1">
                {selectedDayName}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (selectedDateIdx > 0) {
                      setSelectedDateIdx(selectedDateIdx - 1);
                      setSelectedTime(pd.timeSlots[0]);
                    }
                  }}
                  disabled={selectedDateIdx === 0}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                    selectedDateIdx === 0
                      ? "border-[#e2d9ef] opacity-40 cursor-not-allowed"
                      : "border-[#C8BBDA] hover:bg-[#f5f0ff] active:bg-[#ede5ff] cursor-pointer"
                  }`}
                >
                  <CaretLeft size={16} color="#6B5F7A" />
                </button>
                <button
                  onClick={() => {
                    if (selectedDateIdx < pd.availableDates.length - 1) {
                      setSelectedDateIdx(selectedDateIdx + 1);
                      setSelectedTime(pd.timeSlots[0]);
                    }
                  }}
                  disabled={selectedDateIdx >= pd.availableDates.length - 1}
                  className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                    selectedDateIdx >= pd.availableDates.length - 1
                      ? "border-[#e2d9ef] opacity-40 cursor-not-allowed"
                      : "border-[#C8BBDA] hover:bg-[#f5f0ff] active:bg-[#ede5ff] cursor-pointer"
                  }`}
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

          {/* Webinar — hidden for last 4 mentor cards (m7–m10) */}
          {pd.showWebinar && (
            <div className="bg-[#fffeff] px-4 py-3 mt-1">
              <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-4">
                Webinar
              </h3>
              <div className="rounded-[12px] overflow-hidden mb-3">
                <img
                  src={pd.webinarImage}
                  alt="Webinar"
                  className="w-full h-[268px] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          )}

          {/* Sticky Tabs */}
          <div className="w-full border-b border-[#e2d9ef] bg-[#fffeff]">
            <div className="flex gap-3 px-4">
              {(["Overview", "Reviews", "Mentee FAQ"] as Tab[]).map((tab) => (
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

          {/* Tab Content — CSS-hidden, never unmounted.
               All three tabs stay in the DOM so images decoded on first visit
               are reused instantly on every subsequent tab switch. */}
          <div style={{ paddingBottom: `${footerHeight}px` }}>
            <div className={activeTab === "Overview" ? undefined : "hidden"}>
              <>
                {/* About Me — hidden for m3/m5; text-only for m2/m6/m7/m10; image+text for rest */}
                {pd.aboutMode !== "hidden" && (
                  <div className="bg-[#fffeff] px-4 py-3 mt-1">
                    <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-2">
                      About Me
                    </h3>
                    {pd.aboutMode === "image" && pd.aboutImage ? (
                      <div className="flex flex-col">
                        <img
                          src={pd.aboutImage}
                          alt="About"
                          className="w-full h-[200px] object-cover rounded-[8px]"
                          loading="lazy"
                          decoding="async"
                        />
                        <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px] mt-[12px]">
                          {pd.aboutImageText}
                        </p>
                      </div>
                    ) : (
                      <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px]">
                        {pd.aboutText}
                      </p>
                    )}
                  </div>
                )}

                {/* Recent Posts — per-mentor images from dedicated asset folder */}
                {(MENTOR_RECENT_POSTS[mentor.id] ?? []).length > 0 && (
                  <div className="bg-[#fffeff] py-3 mt-1">
                    <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-4 px-4">
                      Recent projects
                    </h3>
                    <div className="flex gap-3 overflow-x-auto px-4 scrollbar-hide snap-x snap-mandatory">
                      {(MENTOR_RECENT_POSTS[mentor.id] ?? []).map((post, i) => (
                        <div
                          key={i}
                          className="shrink-0 w-[200px] snap-center bg-white rounded-[8px] border border-[rgba(157,148,170,0.4)] overflow-hidden"
                        >
                          <img
                            src={post.img}
                            alt={`Recent post ${i + 1}`}
                            className="w-full h-[120px] object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="px-[12px] py-[10px] flex flex-col gap-[4px]">
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
                    {pd.experience.map((exp, i) => (
                      <div key={i}>
                        {i > 0 && <div className="h-px bg-[#e2d9ef] mb-4" />}
                        <div className="flex gap-3 items-center">
                          <div className="size-[30px] rounded-[8px] shrink-0 overflow-hidden border border-[#e2d9ef] bg-white flex items-center justify-center">
                            <LogoImg src={exp.logo} alt={exp.company} letter={exp.letter} color={exp.color} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[16px] leading-[24px]">{exp.company}</h4>
                            <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[20px]">{exp.role}</p>
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
                      <LogoImg src={pd.education.logo} alt={pd.education.school} letter={pd.education.letter} color={pd.education.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[16px] leading-[24px]">{pd.education.school}</h4>
                      <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[20px]">{pd.education.degree}</p>
                    </div>
                    <div className="shrink-0 inline-flex items-center justify-center rounded-[4px] bg-[#F7F4FA] p-[8px]">
                      <span className="font-['Manrope',sans-serif] font-medium text-[#6B5F7A] text-[12px] leading-[18px] tracking-[0.24px]">
                        {pd.education.start} – {pd.education.end}
                      </span>
                    </div>
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

                {/* Similar Mentors */}
                <div className="bg-[#fffeff] py-3 mt-1 mb-2">
                  <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-4 px-4">
                    Similar mentors
                  </h3>
                  <div
                    className="flex gap-3 overflow-x-auto px-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
                    style={{ scrollSnapType: "x mandatory" }}
                  >
                    {similarMentors.map((m) => (
                      <div
                        key={m.id}
                        className="shrink-0 snap-center w-[180px]"
                      >
                        <MentorCard mentor={m} />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            </div>

            <div className={activeTab === "Reviews" ? undefined : "hidden"}>
              {pd.reviews.length === 0 ? (
                <div className="px-4 py-16 flex flex-col items-center gap-2">
                  <p className="font-['Manrope',sans-serif] font-semibold text-[#6b5f7a] text-[16px] leading-[24px] text-center">
                    No reviews available yet.
                  </p>
                  <p className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[14px] leading-[21px] text-center">
                    Reviews will appear here once mentees share their experience.
                  </p>
                </div>
              ) : (
              <div
                className="flex flex-col gap-[24px] items-center pb-[20px] pt-[16px] px-[16px]"
                style={{ contentVisibility: "auto", containIntrinsicSize: "0 600px" }}
              >
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
                        {pd.insights.map((ins, i) => (
                          <li key={i}>
                            <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">
                              {ins.label}:{" "}
                            </span>
                            <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                              {truncateAiBulletItem(ins.text, pd.insights.length)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {pd.reviews.slice(0, visibleReviews).map((review, i) => (
                  <ReviewCard key={i} {...review} />
                ))}

                <ViewMoreButton
                  onClick={() =>
                    setVisibleReviews((v) => Math.min(v + 3, pd.reviews.length))
                  }
                  className={
                    visibleReviews >= pd.reviews.length
                      ? "pointer-events-none cursor-default"
                      : ""
                  }
                />

                {/* Similar Mentors */}
                <div className="flex flex-col gap-[16px] items-start w-full border-t border-[#f0ecf7] pt-[20px]">
                  <p className="font-['Roboto_Serif',serif] font-semibold text-[#2d2040] text-[20px] leading-[28px] w-full">
                    Similar mentors
                  </p>
                  <div
                    className="flex gap-3 overflow-x-auto w-full scrollbar-hide snap-x snap-mandatory scroll-smooth"
                    style={{ scrollSnapType: "x mandatory" }}
                  >
                    {similarMentors.map((m) => (
                      <div
                        key={m.id}
                        className="shrink-0 snap-center w-[180px]"
                      >
                        <MentorCard mentor={m} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              )}
            </div>

            <div className={activeTab === "Mentee FAQ" ? undefined : "hidden"}>
              <div className="bg-[#fffeff] px-[16px] py-[20px] flex flex-col gap-[16px] items-center">
                {/* faq-list */}
                <div className="flex flex-col gap-[4px] self-stretch">
                  {pd.faqs.slice(0, visibleFAQCount).map((faq, index) => {
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
                        className="flex flex-col gap-[8px] items-start py-[12px] self-stretch cursor-pointer text-left"
                      >
                        {/* Question Row */}
                        <div className="flex gap-[8px] items-center self-stretch">
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

                {/* View More Button */}
                {visibleFAQCount < pd.faqs.length && (
                  <ViewMoreButton
                    onClick={() => setVisibleFAQCount(pd.faqs.length)}
                    label={`View ${pd.faqs.length - visibleFAQCount} More`}
                  />
                )}

                {/* Similar Mentors */}
                <div className="mt-6 -mx-4">
                  <h3 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[18px] leading-[26px] mb-4 px-4">
                    Similar mentors
                  </h3>
                  <div
                    className="flex gap-3 overflow-x-auto px-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
                    style={{ scrollSnapType: "x mandatory" }}
                  >
                    {similarMentors.map((m) => (
                      <div
                        key={m.id}
                        className="shrink-0 snap-center w-[180px]"
                      >
                        <MentorCard mentor={m} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Footer - All Tabs */}
        <div className="fixed bottom-0 left-0 right-0 z-30 shadow-[0px_-2px_8px_rgba(0,0,0,0.06)]">
          <div className="max-w-[800px] mx-auto bg-[#fffeff]">
            {/* Unlock Chat Banner */}
            <div className="bg-[#f5f0ff] px-4 py-3 rounded-t-[8px]">
              <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[14px] leading-[20px] text-center">
                {isFree ? "Chat will be unlocked for just ₹99." : "Chat will be unlocked after the call is booked."}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="bg-[#fffeff] px-4 pt-3 pb-2 flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="h-[44px] px-6 font-[Manrope] gap-2 text-[#7d3aea]"
                onClick={
                  isFree
                    ? () => navigate("/messaging/chat-locked", { state: { mentor } })
                    : undefined
                }
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

          </div>
        </div>
      </div>
    </div>
  );
}
