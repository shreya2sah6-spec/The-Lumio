import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import type { Mentor } from "../components/MentorCard";
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

// ─── Review avatar URLs (face-cropped, Indian-presenting, 20–40, professional) ─

const ANON_AVATAR =
  "https://tse1.explicit.bing.net/th/id/OIP.0CZd1ESLnyWIHdO38nyJDAHaGF?r=0&cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3";
const PF1 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face&auto=format";
const PF2 = "https://images.unsplash.com/photo-1548142813-c348350df52b?w=200&h=200&fit=crop&crop=face&auto=format";
const PF3 = "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face&auto=format";
const PF4 = "https://images.unsplash.com/photo-1530785602389-07594beb8b73?w=200&h=200&fit=crop&crop=face&auto=format";
const PM1 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face&auto=format";
const PM2 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face&auto=format";
const PM3 = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face&auto=format";
const PM4 = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face&auto=format";

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
  { avatar: PF1, name: "Neha Agarwal", role: "Fashion Design Student", rating: 5, title: "Transformative mentorship", text: "Shruti's mentorship completely transformed my approach to fashion design. Her insights on pattern making and fabric selection were invaluable. She takes time to understand your goals and provides actionable feedback that accelerates your growth." },
  { avatar: PM1, name: "Varun Shetty", role: "Jr. Fashion Designer", rating: 5, title: "Career-defining sessions", text: "Every session with Shruti gave me concrete tools I could apply immediately. Her industry knowledge is exceptional and she has a rare ability to see exactly where you are in your journey and what you need next." },
  { avatar: ANON_AVATAR, name: "Anonymous", role: "", rating: 4, title: "Genuinely invested in your success", text: "The mentorship sessions with Shruti were the best investment I made in my design career. She helped me refine my aesthetic, build confidence, and understand the business side of fashion. Her industry connections are also invaluable." },
  { avatar: PF2, name: "Simran Kaur", role: "Design Intern", rating: 4, title: "Practical real-world insights", text: "Shruti brings authentic real-world experience to every session. Her advice on garment construction and navigating production challenges was eye-opening. She never gives generic advice — everything is grounded in her actual industry experience." },
  { avatar: PM2, name: "Krish Malviya", role: "Fashion Graduate", rating: 5, title: "Best investment in my career", text: "I came to Shruti at a pivotal moment in my career and she helped me see opportunities I had completely missed. Her guidance on portfolio positioning and building industry relationships directly led to my first design role." },
  { avatar: PF3, name: "Tanya Arora", role: "Textile Design Student", rating: 5, title: "Excellent technical guidance", text: "Shruti's technical knowledge is exceptional. She taught me advanced draping techniques and how to approach difficult fabrics with confidence. Her feedback is always constructive and immediately actionable." },
  { avatar: PM3, name: "Harsh Vardhan", role: "Associate Designer", rating: 4, title: "Helped me land my first role", text: "Shruti worked with me intensively on my portfolio and interview preparation. The way she coached me to articulate my design thinking made a real difference. I landed my first design role within two months of our sessions." },
  { avatar: PF4, name: "Ritika Bose", role: "Design Intern", rating: 5, title: "Exceptional portfolio coaching", text: "Shruti has a sharp eye for what makes a portfolio stand out and she articulates it clearly. She helped me restructure and rethink how I was presenting my work, and the response from studios improved immediately." },
  { avatar: PM4, name: "Mohit Saxena", role: "Jr. Designer", rating: 4, title: "Deep industry knowledge", text: "The depth of Shruti's industry knowledge is remarkable. She understands both the creative and commercial dimensions of fashion and helps you see how they connect. A mentor who genuinely cares about your long-term development." },
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
interface ExperienceEntry { company: string; letter: string; role: string; start: string; end: string; }
interface EducationEntry { school: string; letter: string; degree: string; start: string; end: string; }
interface MentorData {
  trainedCount: string;
  aboutMode: "image" | "text" | "hidden";
  aboutText?: string;
  aboutImage?: string;
  aboutImageText?: string;
  showWebinar: boolean;
  showResponseTime: boolean;
  experience: ExperienceEntry[];
  education: EducationEntry;
  skills: string[];
  faqs: { question: string; answer: string }[];
  insights: { label: string; text: string }[];
  reviews: ReviewEntry[];
}

// Additional review pools with fresh names from the curated pool
const reviewsB: ReviewEntry[] = [
  { avatar: PF1, name: "Sonal Kapoor", role: "Fashion Design Student", rating: 5, title: "Exceptional depth of knowledge", text: "The sessions were incredibly rich in content. The guidance on understanding fabric behaviour and how it translates into garment silhouettes gave me a level of technical clarity I had been missing throughout my formal education." },
  { avatar: PM1, name: "Chirag Arora", role: "Jr. Designer", rating: 5, title: "A mentor who truly invests in you", text: "What sets this mentorship apart is the genuine investment in your long-term development. Every session builds on the last and the feedback is specific, honest, and always directed at helping you grow into a more capable designer." },
  { avatar: ANON_AVATAR, name: "Anonymous", role: "", rating: 4, title: "Strong real-world perspective", text: "The insights on navigating the commercial pressures of fashion design while staying creatively authentic are ones I keep coming back to. The practical wisdom shared is something no design school can fully teach you." },
  { avatar: PF2, name: "Gayatri Naidu", role: "Design Intern", rating: 4, title: "Clarity and confidence", text: "I came into these sessions unsure about my direction and left with a much clearer sense of what I want to build in my career and how to get there. The mentorship style is warm but direct and exactly what I needed." },
  { avatar: PM2, name: "Tarun Khanna", role: "Fashion Graduate", rating: 5, title: "Portfolio transformed", text: "My portfolio went from being a collection of work I was uncertain about to a cohesive story that I present with confidence. The guidance on how to frame your work and communicate your design thinking made a visible difference." },
  { avatar: PF3, name: "Muskaan Bedi", role: "Textile Design Student", rating: 5, title: "Technical mastery shared generously", text: "The technical depth in these sessions is remarkable. Advanced construction methods, draping solutions, and how to work with unconventional materials — all explained with patience and a real understanding of how designers learn." },
  { avatar: PM3, name: "Tejas Pawar", role: "Associate Designer", rating: 4, title: "Grounded in industry reality", text: "One of the most valuable things about this mentorship is how grounded it is in how the industry actually works. The advice on studio culture, career progression, and professional relationships is genuinely useful and honest." },
  { avatar: PF4, name: "Zara Mirza", role: "Design Intern", rating: 5, title: "Highly recommended for any designer", text: "Whether you are just starting out or are a few years into your career, this mentorship offers something meaningful. The ability to meet you exactly where you are and help you move forward is a rare skill in a mentor." },
  { avatar: PM4, name: "Amarjeet Gill", role: "Jr. Designer", rating: 4, title: "Career direction and clarity", text: "I had been drifting in my career without a clear strategy. These sessions helped me understand my strengths, identify opportunities that suit my profile, and build a focused plan for the next stage of my development." },
];

const reviewsC: ReviewEntry[] = [
  { avatar: PF1, name: "Heena Qureshi", role: "Fashion Design Student", rating: 5, title: "Practical, honest, impactful", text: "Every session was filled with practical advice that I could apply immediately. No vague encouragement — just specific, honest guidance on what to improve, what to keep, and how to think about the next step in my design journey." },
  { avatar: PM1, name: "Rohit Parmar", role: "Jr. Fashion Designer", rating: 5, title: "The mentor I needed at this stage", text: "At my stage of career, finding someone who understood exactly what I was facing and could give me relevant, specific advice was invaluable. The sessions gave me both technical improvements and a stronger sense of professional direction." },
  { avatar: ANON_AVATAR, name: "Anonymous", role: "", rating: 4, title: "Clear and structured guidance", text: "The structured approach to each session made the mentorship feel focused and purposeful. We worked through real challenges I was facing, and by the end of each session I had concrete next steps to work on. Very effective format." },
  { avatar: PF2, name: "Lavanya Krishnan", role: "Textile Design Student", rating: 5, title: "Transformed how I see garment design", text: "My understanding of how a garment comes together — the relationship between design intent, fabric choice, and construction — was fundamentally transformed through these sessions. This is knowledge that will stay with me throughout my career." },
  { avatar: PM2, name: "Ayush Srivastava", role: "Design Intern", rating: 4, title: "Great for building industry confidence", text: "The mentorship helped me understand the unwritten rules of the fashion industry — how to communicate with studios, how to handle feedback, how to present work. These things are rarely taught formally but matter enormously." },
  { avatar: PF3, name: "Monica Dutta", role: "Sr. Design Student", rating: 5, title: "A mentor who understands growth", text: "What I valued most was the long-term perspective on career development. Rather than just addressing immediate concerns, the mentorship helped me think about where I want to be in 5 years and what choices will help me get there." },
  { avatar: PM3, name: "Dhruv Kulshreshtha", role: "Fashion Graduate", rating: 4, title: "Sharp technical eye", text: "The technical feedback in these sessions is precise and actionable. Each critique comes with a clear explanation of why something works or doesn't, which builds genuine understanding rather than just implementing corrections." },
  { avatar: PF4, name: "Farah Siddiqui", role: "Jr. Designer", rating: 5, title: "Invaluable industry knowledge", text: "The insider knowledge about how different types of fashion companies work, what they look for in junior designers, and how to position yourself effectively in the market is something you genuinely cannot get anywhere else." },
  { avatar: PM4, name: "Vinayak Sawant", role: "Associate Designer", rating: 4, title: "Accelerated my development", text: "I made more progress in three months of mentorship than I had in the previous year on my own. The combination of technical guidance, career coaching, and honest feedback accelerated my development in a way I did not expect." },
];

const reviewsD: ReviewEntry[] = [
  { avatar: PF1, name: "Preeti Sood", role: "Fashion Design Student", rating: 5, title: "Opened my eyes to the industry", text: "This mentorship gave me a realistic and inspiring picture of what a design career can look like. The honesty about both the challenges and the opportunities helped me set expectations and approach my career with real confidence." },
  { avatar: PM1, name: "Gaurav Sehgal", role: "Jr. Designer", rating: 4, title: "Focused and effective", text: "The sessions are structured and focused, which makes every minute feel useful. I came with specific questions and left with clear answers and a deeper understanding of the issues I was working through. Very efficient mentorship." },
  { avatar: ANON_AVATAR, name: "Anonymous", role: "", rating: 4, title: "Real-world wisdom", text: "The mentorship brings real-world wisdom to every conversation. Understanding how studios actually operate, how decisions are made, and what matters to hiring managers gave me knowledge that changed how I approach my career." },
  { avatar: PF2, name: "Sanjana Rao", role: "Design Intern", rating: 5, title: "Patient and thorough", text: "I appreciated how thoroughly each of my questions and concerns was addressed. Nothing felt rushed. The patience with which complex topics were explained helped me build genuine understanding rather than surface-level knowledge." },
  { avatar: PM2, name: "Lakshay Oberoi", role: "Fashion Graduate", rating: 5, title: "Helped me think like a professional", text: "The shift from thinking like a student to thinking like a professional designer happened through these sessions. The perspective on how to evaluate your own work, engage with clients, and take ownership of your practice was transformative." },
  { avatar: PF3, name: "Radhika Menon", role: "Textile Design Student", rating: 4, title: "Great for early-career designers", text: "If you are at the beginning of your design career and feeling uncertain about where to go next, this mentorship will give you clarity and direction. The guidance is specific to where you actually are, not generic career advice." },
  { avatar: PM3, name: "Pankaj Tyagi", role: "Associate Designer", rating: 5, title: "Builds real capability", text: "The mentorship does not just give you answers — it builds your ability to find better answers yourself. The frameworks and perspectives shared have become part of how I think about design problems and career decisions every day." },
  { avatar: PF4, name: "Sakshi Batra", role: "Jr. Designer", rating: 4, title: "Consistent quality and care", text: "Every session maintained a high standard of quality and genuine care for my development. The consistency made the mentorship feel trustworthy and made me confident that I was investing my time in something genuinely valuable." },
  { avatar: PM4, name: "Uday Chawla", role: "Design Graduate", rating: 5, title: "Worth every rupee", text: "The investment in this mentorship paid off many times over within the first few months. The combination of technical skill building, career guidance, and the confidence that comes from having an experienced mentor in your corner is priceless." },
];

const MENTOR_DATA: Record<string, MentorData> = {
  m1: {
    trainedCount: "500+",
    aboutMode: "image",
    aboutImage: imgAbout,
    aboutImageText: "Passionate about craft, I design collections rooted in Indian heritage and contemporary sensibility. Every stitch tells a story of tradition meeting the modern wardrobe.",
    showWebinar: true,
    showResponseTime: true,
    experience: [
      { company: "MAX Fashion", letter: "M", role: "Sr. Fashion Designer", start: "2020", end: "Present" },
      { company: "Zara", letter: "Z", role: "Junior Fashion Designer", start: "2018", end: "2020" },
    ],
    education: { school: "Pearl Academy", letter: "P", degree: "B.Des in Fashion Design", start: "2014", end: "2018" },
    skills: ["Pattern Making", "Fabric Knowledge", "Garment Construction", "Fit Analysis", "Color Theory", "Trend Forecasting", "Technical Sketching", "Draping"],
    faqs: mentorFAQs,
    insights: [
      { label: "Expert guidance", text: "Shruti provides personalised mentorship with real-world fashion industry expertise from 7 years across top Indian and global brands." },
      { label: "Career acceleration", text: "Mentees report significant improvements in skills and career opportunities within months of their first session." },
      { label: "Supportive approach", text: "Patient, encouraging teaching style with actionable feedback focused on continuous, measurable growth." },
    ],
    reviews: mentorReviews,
  },
  m2: {
    trainedCount: "350+",
    aboutMode: "text",
    aboutText: "I have spent seven years building fashion collections that balance commercial relevance with genuine creative vision. At MAX Fashion, I lead a design team focused on accessible, trend-forward womenswear that resonates with Indian consumers across price points and seasons. My background in sustainable design practices informs everything from fabric sourcing to construction decisions. I believe mentorship is about giving younger designers the industry perspective they need to make confident, strategic choices in their careers.",
    showWebinar: true,
    showResponseTime: true,
    experience: [
      { company: "MAX Fashion", letter: "M", role: "Sr. Fashion Designer", start: "2019", end: "Present" },
      { company: "Fab India", letter: "F", role: "Designer", start: "2017", end: "2019" },
    ],
    education: { school: "NIFT Delhi", letter: "N", degree: "B.Des in Fashion Technology", start: "2013", end: "2017" },
    skills: ["Womenswear Design", "Sustainable Fashion", "Fabric Sourcing", "Range Planning", "Visual Merchandising", "Team Leadership", "Trend Analysis", "CAD / Illustrator"],
    faqs: [
      { question: "How do I break into sustainable fashion design?", answer: "Start by learning about natural fibres, low-impact dyes, and zero-waste pattern cutting. Build relationships with ethical fabric suppliers and document your process — brands now want transparency as much as creativity." },
      { question: "What does a Sr. Fashion Designer actually do day to day?", answer: "Range planning, fabric sourcing meetings, design development with juniors, fitting sessions, and plenty of cross-functional coordination. The creative part is maybe 40% — the rest is communication and execution." },
      { question: "How important is CAD vs hand sketching early in a career?", answer: "Both matter, but CAD fluency will get you shortlisted. Learn Illustrator for tech packs and flats. Keep hand sketching for ideation — it is still faster for mood boarding and initial concept exploration." },
      { question: "How do I negotiate my first salary as a fashion designer?", answer: "Research market rates for your city and level. Know your BATNA. Lead with value — what specific skills, experience, or projects make you worth more. Most studios expect negotiation; the first offer is rarely the final one." },
      { question: "What separates good junior designers from great ones?", answer: "Curiosity and reliability in equal measure. Great juniors ask intelligent questions, take feedback without ego, and follow through on every detail. Technical skills can be taught; attitude and work ethic are what studios hire for." },
    ],
    insights: [
      { label: "Range intelligence", text: "Priya brings deep expertise in commercial range planning — how to balance trend-driven pieces with core staples across a seasonal collection." },
      { label: "Sustainable practice", text: "With a background in ethical sourcing, she guides mentees on building careers that are both commercially relevant and environmentally conscious." },
      { label: "Clear communication", text: "Known for her ability to explain complex industry dynamics in plain language that junior designers can apply immediately to their own situations." },
    ],
    reviews: reviewsB,
  },
  m3: {
    trainedCount: "420+",
    aboutMode: "hidden",
    showWebinar: true,
    showResponseTime: true,
    experience: [
      { company: "Myntra", letter: "M", role: "Sr. Fashion Designer", start: "2018", end: "Present" },
      { company: "H&M India", letter: "H", role: "Associate Designer", start: "2016", end: "2018" },
    ],
    education: { school: "Symbiosis Institute of Design", letter: "S", degree: "B.Des in Fashion Design", start: "2012", end: "2016" },
    skills: ["E-commerce Design", "Digital Trend Research", "Photo Direction", "Technical Packs", "Fast Fashion", "Menswear", "Category Management", "Supplier Coordination"],
    faqs: [
      { question: "How do I design for e-commerce vs physical retail?", answer: "E-commerce demands that garments photograph well from multiple angles and communicate fabric quality visually. Think about how your design reads as a thumbnail. Physical retail allows more texture and drape experimentation." },
      { question: "What is it like working in fast fashion vs premium design?", answer: "Fast fashion is volume, speed, and commercial judgment. Premium is depth, craft, and storytelling. Both build valuable skills. Fast fashion sharpens your trend read and execution speed; premium builds your craft and conceptual thinking." },
      { question: "How do I develop menswear design skills as a womenswear trained designer?", answer: "Study tailoring, construction, and proportion carefully — menswear rewards technical precision. Work on fabric understanding and fit standards. Many transferable skills from womenswear apply; the aesthetic sensibility is the main shift." },
      { question: "How do I stay current with trends without losing my design identity?", answer: "Curate your inspiration sources carefully. Follow the trends that resonate with your design language and ignore the rest. The goal is to be informed, not to follow everything. Your distinct voice is what will make you memorable." },
      { question: "What should I prioritise in my first design role?", answer: "Learning to execute well. Show up with curiosity, ask intelligent questions, and take every brief seriously — even the simple ones. The best junior designers are the ones who make their seniors' jobs easier while learning everything they can." },
    ],
    insights: [
      { label: "E-commerce expertise", text: "Ravi brings rare insight into designing for digital-first fashion — how garments need to communicate quality and appeal in a thumbnail-sized image." },
      { label: "Speed and precision", text: "His experience in fast fashion has honed an ability to develop commercially strong designs quickly and accurately, a skill he passes directly to mentees." },
      { label: "Category breadth", text: "Working across womenswear, menswear, and accessories at Myntra gives him a broad perspective that helps mentees think beyond single-category careers." },
    ],
    reviews: reviewsB,
  },
  m4: {
    trainedCount: "280+",
    aboutMode: "image",
    aboutImage: imgProject1,
    aboutImageText: "Leading design at Anita Dongre means working at the intersection of Indian craft traditions and contemporary luxury. My work is grounded in a deep respect for artisan communities and the slow, intentional craft they preserve.",
    showWebinar: true,
    showResponseTime: true,
    experience: [
      { company: "Anita Dongre", letter: "A", role: "Lead Fashion Designer", start: "2016", end: "Present" },
      { company: "Mango India", letter: "M", role: "Senior Designer", start: "2014", end: "2016" },
    ],
    education: { school: "NIFT Mumbai", letter: "N", degree: "M.Des in Fashion Design", start: "2012", end: "2014" },
    skills: ["Luxury Design", "Craft Collaboration", "Artisan Partnership", "Bridal Design", "Hand Embroidery Direction", "Heritage Textiles", "Sustainable Luxury", "Studio Management"],
    faqs: [
      { question: "How do I break into luxury or couture fashion design?", answer: "Build a portfolio that demonstrates craft sensibility, technical depth, and an understanding of the client at this price point. Internships at premium studios are invaluable — and be patient, as luxury moves slower and hires carefully." },
      { question: "What is the difference between designing for craft heritage vs commercial fashion?", answer: "Heritage design requires deep research, humility about the craft tradition, and patience with artisan timelines. Commercial design demands speed and commercial instinct. The best designers can operate in both modes depending on the context." },
      { question: "How do I develop relationships with artisan communities?", answer: "Start by listening and learning before asking for anything. Visit craft clusters, attend textile fairs, and take time to understand the craft tradition before trying to incorporate it into your work. Respect and patience are essential." },
      { question: "How do I build a design career in bridal or occasion wear?", answer: "Understand the emotional weight of the category — every garment marks a significant moment in someone's life. Study Indian bridal traditions across regions. Build technical skills in embroidery, heavy fabrics, and structured silhouettes." },
      { question: "What skills do fashion schools underteach that really matter in practice?", answer: "Studio management, artisan communication, cost awareness, and the commercial realities of running a design business. Also, resilience — the ability to handle creative rejection, iterate quickly, and maintain your vision under pressure." },
    ],
    insights: [
      { label: "Luxury craft expertise", text: "Sneha's experience at Anita Dongre gives mentees rare insight into how world-class Indian luxury fashion is conceived, crafted, and brought to market." },
      { label: "Artisan collaboration", text: "She guides designers on building authentic, respectful relationships with artisan communities — the foundation of India's strongest design houses." },
      { label: "Heritage with modernity", text: "Her mentorship helps designers understand how to draw on traditional craft traditions without appropriating them, creating work that feels both rooted and contemporary." },
    ],
    reviews: reviewsC,
  },
  m5: {
    trainedCount: "190+",
    aboutMode: "hidden",
    showWebinar: true,
    showResponseTime: true,
    experience: [
      { company: "Biba", letter: "B", role: "Mid-Level Designer", start: "2021", end: "Present" },
      { company: "Forever 21 India", letter: "F", role: "Jr. Designer", start: "2019", end: "2021" },
    ],
    education: { school: "Pearl Academy Bangalore", letter: "P", degree: "B.Des in Fashion Design", start: "2015", end: "2019" },
    skills: ["Indian Ethnic Wear", "Kurta Design", "Salwar Kameez", "Print Development", "Block Printing", "Embellishment", "Market Research", "Trend Adaption"],
    faqs: [
      { question: "How do I design for the Indian ethnic wear market specifically?", answer: "Understand regional preferences — what sells in Rajasthan differs from what sells in Bengal. Study craft traditions relevant to your category. Work on fit standards for Indian body types, which are often underserved by global design education." },
      { question: "How do I transition from fast fashion experience to ethnic or traditional wear?", answer: "The commercial skills transfer well — trend reading, execution speed, supplier management. The key shift is developing cultural sensitivity and craft understanding. Immerse yourself in the traditions you want to work with." },
      { question: "What are the career opportunities in the Indian mass-market fashion segment?", answer: "Enormous and underrated. Brands like Biba, W for Woman, and Global Desi serve a massive market with real design needs. The segment offers good career stability, strong commercial training, and the chance to design for how most Indians actually dress." },
      { question: "How do I develop original print designs rather than adapting existing ones?", answer: "Start with deep research into your source material — regional textiles, craft motifs, historical archives. Develop your own drawing practice and learn to translate reference into original artwork. Originality comes from thorough research, not from trying to be different." },
      { question: "What should I focus on as a mid-level designer trying to move to a senior role?", answer: "Take ownership of projects end to end. Demonstrate that you can deliver without constant guidance, manage suppliers independently, and make commercial decisions. Show leadership by mentoring juniors and contributing ideas at the brief stage." },
    ],
    insights: [
      { label: "Indian ethnic wear focus", text: "Amit's deep knowledge of the Indian ethnic wear market helps mentees understand a segment that is commercially huge but underrepresented in formal design education." },
      { label: "Market-driven thinking", text: "His commercial training at both fast fashion and ethnic wear brands gives mentees a strong grounding in how to design for real consumers with specific cultural needs." },
      { label: "Print and craft expertise", text: "With hands-on experience in block printing and print development, he guides mentees through the technical and creative aspects of surface design for the Indian market." },
    ],
    reviews: reviewsC,
  },
  m6: {
    trainedCount: "230+",
    aboutMode: "text",
    aboutText: "Six years into a career spanning two of India's strongest mid-market womenswear brands, I have built expertise in designing collections that balance trend relevance with deep cultural understanding of the Indian woman consumer. My work at W for Woman taught me how to make fashion feel simultaneously aspirational and genuinely wearable. Before that, a formative stint at Lifestyle brand gave me strong foundations in commercial range planning and supplier development. I mentor designers who want to build meaningful careers in India's domestic fashion market — a space that is growing rapidly and where great designers are genuinely needed.",
    showWebinar: false,
    showResponseTime: true,
    experience: [
      { company: "W for Woman", letter: "W", role: "Fashion Designer", start: "2020", end: "Present" },
      { company: "Lifestyle Brand", letter: "L", role: "Jr. Designer", start: "2018", end: "2020" },
    ],
    education: { school: "NIFT Hyderabad", letter: "N", degree: "B.Des in Apparel Design", start: "2014", end: "2018" },
    skills: ["Womenswear", "Indian Consumer Research", "Commercial Range Building", "Colour Palette Development", "Fabric Selection", "Work Wear Design", "Weekend Wear", "Occasion Dressing"],
    faqs: [
      { question: "How do I design for working Indian women specifically?", answer: "Understand the dual demands of professionalism and cultural sensitivity. The modern Indian woman wants clothes that work in a meeting and a family gathering. Study silhouettes, fabrics, and colour palettes that serve both contexts without compromise." },
      { question: "What is range planning and why should junior designers understand it?", answer: "Range planning is the commercial backbone of a collection — how many styles, at what price points, in which categories, and for which occasions. Understanding it makes you a far more effective designer and a more attractive candidate for senior roles." },
      { question: "How important is understanding consumer research as a designer?", answer: "Extremely important, especially in the mid-market. You are designing for real women with specific incomes, lifestyles, and cultural contexts. The more precisely you understand your consumer, the more effectively you can design for her." },
      { question: "How do I build a career in domestic Indian fashion rather than pursuing international brands?", answer: "The domestic market offers more opportunity than most designers realise. Focus on understanding India deeply — its regional diversity, its evolving consumer base, its craft traditions. This is knowledge that gives you a competitive edge internationally applied locally." },
      { question: "How do I make a collection feel cohesive when working to a commercial brief?", answer: "Start with a strong colour story and a single clear point of view on proportion. Let the brief define the commercial guardrails and then find the creative direction within them. Cohesion comes from a clear lens, not from matching everything." },
    ],
    insights: [
      { label: "Consumer clarity", text: "Neha's deep understanding of the Indian woman consumer gives mentees a powerful framework for designing work that is both culturally resonant and commercially viable." },
      { label: "Range-building expertise", text: "Her experience building seasonal ranges at W for Woman teaches mentees the commercial architecture behind fashion collections that sell consistently." },
      { label: "Domestic market focus", text: "She is a strong advocate for building careers in India's domestic fashion market and provides mentees with a realistic, optimistic view of the opportunities available." },
    ],
    reviews: reviewsC,
  },
  m7: {
    trainedCount: "120+",
    aboutMode: "text",
    aboutText: "Three years into my design career and I have already learned more than I thought possible about how the fashion industry actually works. At Biba I design across ethnic and fusion categories, working quickly and responding to market feedback in real time. My experience at Shein India taught me the discipline of fast-cycle design — how to develop a garment from brief to final spec in days rather than weeks. I mentor designers who are just starting out, particularly those navigating the gap between design school and their first professional role. The confusion, uncertainty, and imposter syndrome of the early career is something I still remember clearly — and I am genuinely invested in helping others navigate it.",
    showWebinar: false,
    showResponseTime: false,
    experience: [
      { company: "Biba", letter: "B", role: "Mid-Level Designer", start: "2023", end: "Present" },
      { company: "Shein India", letter: "S", role: "Jr. Designer", start: "2021", end: "2023" },
    ],
    education: { school: "INIFD Pune", letter: "I", degree: "Diploma in Fashion Design", start: "2019", end: "2021" },
    skills: ["Fast Fashion Execution", "Ethnic Fusion Design", "Technical Spec Writing", "Trend Adoption", "Vendor Communication", "CAD Basics", "Print Selection", "Cost-Conscious Design"],
    faqs: [
      { question: "How do I deal with imposter syndrome as a new designer?", answer: "Almost every designer feels it, especially in the first two years. The antidote is doing the work — consistently, carefully, and without waiting to feel ready. Confidence follows action, not the other way around." },
      { question: "What is the best way to get my first design job with limited experience?", answer: "Have a clean, focused portfolio with 4 to 6 strong projects. Apply broadly and include smaller brands that are more likely to take a chance on you. Offer to do a brief trial project if they are hesitant. Getting in the door matters more than the salary at this stage." },
      { question: "How do I manage the mental load of working in fast fashion?", answer: "Pace and prioritisation are everything. Learn to work in focused sprints, protect your creative energy for the highest-priority tasks, and develop routines that help you decompress at the end of the day. Fast fashion is intense — boundaries matter." },
      { question: "Is it worth doing a paid design course after graduating from a design college?", answer: "Depends entirely on the course and what gap it fills. If it teaches something your college did not — specific software, a technical skill, industry knowledge — then potentially yes. But real work experience is almost always more valuable than another course." },
      { question: "How do I make the most of an internship in a design studio?", answer: "Be early, be enthusiastic, and say yes to everything. Observe more than you speak. Ask thoughtful questions at the right moments. Build relationships — internships are as much about proving your attitude as your skills. The best interns get offered jobs." },
    ],
    insights: [
      { label: "Early-career expertise", text: "Vikram specialises in mentoring designers at the very start of their careers — helping them navigate the transition from design school to professional practice with confidence." },
      { label: "Fast fashion knowledge", text: "His experience in fast-cycle design gives mentees practical knowledge of execution speed, commercial judgment, and the technical discipline required at high-volume studios." },
      { label: "Peer-level honesty", text: "As a designer earlier in his own career, Vikram offers a peer-level honesty about the challenges, doubts, and learning curves of early professional life that more senior mentors cannot replicate." },
    ],
    reviews: reviewsD,
  },
  m8: {
    trainedCount: "160+",
    aboutMode: "image",
    aboutImage: imgProject2,
    aboutImageText: "At Fabindia I design across handloom and craft-based categories, working directly with artisan communities to translate traditional weaves into contemporary garments. Craft and commerce in honest conversation.",
    showWebinar: false,
    showResponseTime: true,
    experience: [
      { company: "Fabindia", letter: "F", role: "Fashion Designer", start: "2022", end: "Present" },
      { company: "Westside", letter: "W", role: "Jr. Designer", start: "2020", end: "2022" },
    ],
    education: { school: "NIFT Chennai", letter: "N", degree: "B.Des in Textile Design", start: "2016", end: "2020" },
    skills: ["Handloom Design", "Craft Collaboration", "Natural Fibres", "Woven Textiles", "Artisan Communication", "Surface Design", "Sustainable Sourcing", "Block Printing"],
    faqs: [
      { question: "How do I build a career in handloom and craft-based fashion?", answer: "Immerse yourself in the craft traditions. Visit weaving clusters, study regional textile histories, and learn to communicate with artisans in their language — literally and metaphorically. The design knowledge is secondary; the relationship and respect come first." },
      { question: "How do I work with natural fibres at a commercial scale?", answer: "Understand that natural fibres have variability that synthetics do not — and that is both a challenge and an opportunity. Learn how to spec for variation, how to work with artisan production timelines, and how to communicate natural uniqueness as a value proposition." },
      { question: "What is the career path in the Indian sustainable fashion space?", answer: "It ranges from craft-based labels like Fabindia and Good Earth to independent sustainable brands to NGOs working at the intersection of craft and livelihood. Build deep expertise in one craft tradition and a broad understanding of the sustainable design ecosystem." },
      { question: "How do I design garments that honour a craft tradition without making them feel like costumes?", answer: "The key is proportions and styling. Traditional textiles can sit in contemporary silhouettes. Study how designers like Anavila, Abraham & Thakore, and Injiri do it — they make handloom feel completely of-the-moment without compromising the textile's identity." },
      { question: "Is a textile design background more useful than fashion design for a handloom career?", answer: "Both are valuable. Textile design gives you deeper material knowledge. Fashion design gives you stronger garment construction and commercial sense. The ideal is developing both — take every opportunity to learn across disciplines." },
    ],
    insights: [
      { label: "Craft-based design", text: "Anjali's work at Fabindia positions her as an expert in craft-based fashion — the growing intersection of artisan tradition, sustainability, and contemporary design that defines India's strongest design identity." },
      { label: "Natural material mastery", text: "Her deep knowledge of handloom textiles and natural fibres helps mentees understand materials at a level that transforms how they approach every design decision." },
      { label: "Artisan partnership", text: "She teaches the art of building genuine, respectful partnerships with artisan communities — an essential skill for any designer who wants to work at this end of the fashion spectrum." },
    ],
    reviews: reviewsD,
  },
  m9: {
    trainedCount: "390+",
    aboutMode: "image",
    aboutImage: imgProject3,
    aboutImageText: "Nine years of designing for some of India's largest retail fashion brands has taught me that great design is as much about understanding business as it is about creativity. My work at Lifestyle and Shoppers Stop shaped my commercial instincts and gave me the breadth of category knowledge I now bring to mentorship.",
    showWebinar: false,
    showResponseTime: true,
    experience: [
      { company: "Lifestyle Brand", letter: "L", role: "Sr. Fashion Designer", start: "2019", end: "Present" },
      { company: "Shoppers Stop", letter: "S", role: "Designer", start: "2017", end: "2019" },
    ],
    education: { school: "Pearl Academy Jaipur", letter: "P", degree: "B.Des in Fashion Design", start: "2013", end: "2017" },
    skills: ["Multi-Category Design", "Private Label Development", "Buying & Merchandising", "Retail Fashion", "Value Fashion", "Category Strategy", "Colour Story Development", "Visual Merchandising"],
    faqs: [
      { question: "How do I transition from design into buying or merchandising?", answer: "Start by understanding the commercial language — sell-through rates, margin, markdown cycles. Shadow buyers where possible. Your design eye is an asset in buying but you need to complement it with strong quantitative thinking and supplier management skills." },
      { question: "What does it mean to develop a private label for a large retailer?", answer: "You are building a brand within a brand — with its own identity, aesthetic codes, and target consumer. It requires the full spectrum of design skills: consumer research, range planning, design execution, and quality oversight from spec to finished garment." },
      { question: "How do I make value fashion feel premium without increasing the cost?", answer: "Design is about perception. Strong colour stories, clean silhouettes, and thoughtful print placement can elevate a garment regardless of price point. The details that matter most — finish, fit, proportion — often do not cost more to get right." },
      { question: "How should designers think about retail calendars and buying cycles?", answer: "Understand that retail is driven by business cycles, not creative cycles. Learn the seasons, the markdown windows, and the planning timelines your buying team works to. The more commercially fluent you are, the more effective you become as a designer." },
      { question: "What are the key differences between designing for a department store vs a brand?", answer: "Department stores require range breadth and category versatility. Brands allow deeper aesthetic focus and stronger identity. Both demand commercial competence, but in different forms. Department store experience builds range planning muscle; brand experience builds identity and consistency." },
    ],
    insights: [
      { label: "Retail and commercial expertise", text: "Rajesh's nine years across India's largest retail fashion organisations give mentees unparalleled insight into how commercial fashion actually works at scale." },
      { label: "Private label mastery", text: "His experience developing private labels for major retailers teaches designers how to build distinct brand identities within large commercial organisations." },
      { label: "Category breadth", text: "With experience across multiple fashion categories, he helps mentees think about career choices strategically — understanding the trade-offs and opportunities across different design paths." },
    ],
    reviews: reviewsD,
  },
  m10: {
    trainedCount: "310+",
    aboutMode: "text",
    aboutText: "Eleven years in fashion design have taken me from a junior position at Good Earth to leading the design team at FabIndia, one of India's most culturally significant fashion and lifestyle brands. The through-line in my career has been a commitment to India's craft traditions — understanding them deeply, working with them honestly, and finding ways to make them relevant to contemporary consumers without diluting their integrity. Mentorship for me is about passing on not just the technical knowledge of design but the broader cultural intelligence and business acumen that are equally essential for a meaningful career in Indian fashion today.",
    showWebinar: false,
    showResponseTime: true,
    experience: [
      { company: "FabIndia", letter: "F", role: "Lead Designer", start: "2018", end: "Present" },
      { company: "Good Earth", letter: "G", role: "Sr. Designer", start: "2015", end: "2018" },
    ],
    education: { school: "NIFT Kolkata", letter: "N", degree: "B.Des in Leather Design & Accessories", start: "2011", end: "2015" },
    skills: ["Craft Heritage Design", "Multi-Category Leadership", "Lifestyle Brand Design", "Handcraft Direction", "Artisan Network Development", "Category Expansion", "Brand Identity", "Design Leadership"],
    faqs: [
      { question: "How do I build a career at the intersection of heritage craft and contemporary design?", answer: "Develop your craft knowledge as rigorously as your design knowledge. Travel to craft clusters. Study both the tradition and the business of craft. The designers who do this well are rare and consistently in demand." },
      { question: "What does design leadership look like in the Indian fashion context?", answer: "It is equal parts creative direction, team development, stakeholder management, and cultural stewardship. The best design leaders in India understand the commercial pressures and the craft responsibilities equally, and navigate between them with skill." },
      { question: "How do I build and manage a design team as I move into more senior roles?", answer: "Invest in your team's development the way you wish someone had invested in yours. Be clear about creative direction, fair about feedback, and consistent in your support. Great design leaders make their teams feel safe to take creative risks." },
      { question: "How do I stay relevant in Indian fashion as trends and consumer tastes evolve rapidly?", answer: "The designers who stay relevant are those rooted in something deeper than trend — in craft knowledge, cultural intelligence, or a strong design philosophy. Trend fluency matters, but it is the depth beneath the trend that creates longevity." },
      { question: "What is the difference between designing for a lifestyle brand vs a pure fashion brand?", answer: "Lifestyle brands require a broader sensibility — you are designing for a way of living, not just a way of dressing. Home, accessories, and apparel need to speak a coherent visual language. It demands range breadth and a consistent aesthetic point of view across categories." },
    ],
    insights: [
      { label: "Cultural design intelligence", text: "Kavita's eleven years navigating India's craft-heritage fashion space give mentees a rare depth of cultural intelligence that goes far beyond what formal design education provides." },
      { label: "Design leadership", text: "As a team leader at FabIndia, she offers mentees genuine insight into what design leadership looks like in practice — the creative, commercial, and interpersonal dimensions of the role." },
      { label: "Long-term career thinking", text: "Her ability to think strategically about design careers over a decade-long horizon helps mentees make choices today that will position them well for where the industry is heading." },
    ],
    reviews: reviewsD,
  },
};

// Default data for unknown mentor IDs
const defaultMentorData: MentorData = MENTOR_DATA["m1"];

// Mentor IDs where About Me is hidden (m3, m5)
// Mentor IDs where Webinar is hidden (m7, m8, m9, m10) — stored in the data map

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
  const location = useLocation();

  // Read mentor passed via navigation state; fall back to m1 (Shruti Jain)
  const passedMentor = (location.state as { mentor?: Mentor } | null)?.mentor;
  const mentor: Mentor = passedMentor ?? {
    id: "m1", name: "Shruti Jain", title: "Sr. Fashion Designer", company: "MAX",
    avatar: imgMentor, experience: "7 yrs exp • EX - ZARA",
    rating: 4.9, reviews: 120, originalPrice: 600, discountedPrice: 300, isTopMentor: true,
  };
  const pd = MENTOR_DATA[mentor.id] ?? defaultMentorData;
  const isFree = mentor.discountedPrice === "Free";

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

  const skills = pd.skills;
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
                  src={mentor.avatar}
                  alt={mentor.name}
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
              <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[20px] mb-1">
                {mentor.title} @ {mentor.company}
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
              <div className="flex items-baseline gap-2">
                <span className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[14px] line-through">
                  ₹{mentor.originalPrice}
                </span>
                <span className="inline-block font-['Roboto_Serif',serif] font-semibold leading-[36px] text-[16px] text-[#1a1128]">
                  {isFree ? "Free" : `₹${mentor.discountedPrice}`}
                </span>
                {!isFree && (
                  <div className="flex items-baseline gap-1">
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

          {/* Webinar — hidden for last 4 mentor cards (m7–m10) */}
          {pd.showWebinar && (
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
          )}

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
                    {pd.experience.map((exp, i) => (
                      <div key={i}>
                        {i > 0 && <div className="h-px bg-[#e2d9ef] mb-4" />}
                        <div className="flex gap-3 items-center">
                          <div className="size-[30px] bg-[#f5f0ff] rounded-[8px] flex items-center justify-center shrink-0">
                            <span className="font-['Roboto_Serif',serif] font-bold text-[#7d3aea] text-[16px]">{exp.letter}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[16px] leading-[24px]">{exp.company}</h4>
                            <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[20px]">{exp.role}</p>
                          </div>
                          <span className="shrink-0 bg-[#f7f4fa] px-[12px] py-[8px] rounded-[4px] font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[16px]">
                            {exp.start} – {exp.end}
                          </span>
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
                    <div className="size-[30px] bg-[#f5f0ff] rounded-[8px] flex items-center justify-center shrink-0">
                      <span className="font-['Roboto_Serif',serif] font-bold text-[#7d3aea] text-[16px]">{pd.education.letter}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[16px] leading-[24px]">{pd.education.school}</h4>
                      <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[20px]">{pd.education.degree}</p>
                    </div>
                    <span className="shrink-0 bg-[#f7f4fa] px-[12px] py-[8px] rounded-[4px] font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[16px]">
                      {pd.education.start} – {pd.education.end}
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
                        {pd.insights.map((ins, i) => (
                          <li key={i}>
                            <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">
                              {ins.label}:{" "}
                            </span>
                            <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                              {ins.text}
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
                {isFree ? "Chat will be unlocked in 99 rs" : "Chat will be unlocked after the call is booked."}
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
