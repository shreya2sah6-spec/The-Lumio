import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ShareFat,
  DotsThreeVertical,
  Eye,
  ChatCircle,
  Repeat,
  HandsClapping,
  PaperPlaneTilt,
  CaretDown,
} from "@phosphor-icons/react";
import { StatusBar } from "../components/StatusBar";
import { BottomSafeArea } from "../components/BottomSafeArea";
import { SaveButton } from "../components/SaveButton";

// ── Image imports ──────────────────────────────────────────────────────────────

// Post cover images — Sanyam / Arpita / Aayush from dedicated FeedCovers folder
import imgCoverSanyam from "@/imports/FeedCovers/sanyam-cover.png";
import imgCoverNeha   from "@/imports/HomeProfileCompletion-1/2237e23c0b0a917e12372a61adebbe568838af3e.png";
import imgCoverArpita from "@/imports/FeedCovers/arpita-cover.png";
import imgCoverKamini from "@/imports/HomeProfileCompletion-1/43396b0d46c184012a4997b17cf3f71f31a40883.png";
import imgCoverAayush from "@/imports/FeedCovers/aayush-cover.png";

// Creator avatars
import imgAvatarSanyam          from "@/imports/HomeProfileCompletion-1/733e8cf72a0fc5655efdb377f7a418e9263541e1.png";
import imgAvatarNehaPrimary     from "@/imports/HomeProfileCompletion-1/5e72ee9d7d7c503b8d808c6f856192019f6d2e26.png";
import imgAvatarNehaSecondary   from "@/imports/HomeProfileCompletion-1/302a8171bbddedbee08d110930e4a4d9860625ed.png";
import imgAvatarArpita          from "@/imports/HomeProfileCompletion-1/03a40532a3f775fa0602f3aa80f7e17e44cdc2cd.png";
import imgAvatarKamini          from "@/imports/HomeProfileCompletion-1/bb4ae9acbf1717477721a1ac665229d89c11f830.png";
import imgAvatarAayush          from "@/imports/HomeProfileCompletion-1/a95e6c88f73b1e84acd4af965b924859220e4a21.png";

// Engagement context avatars (repost / clap)
import imgEngagementSabyasachi  from "@/imports/HomeProfileCompletion-1/22a618f0acbc96cb390eccb456b612e531e62706.png";
import imgEngagementPapaDP      from "@/imports/HomeProfileCompletion-1/0cbc38f58cc3a3bcd0b44baafde4ddc2b85b6aa5.png";

// Sanyam Kumar — full project sequence (01–10)
import imgSanyam01 from "@/imports/SanyamProject/s01.jpg";
import imgSanyam02 from "@/imports/SanyamProject/s02.jpg";
import imgSanyam03 from "@/imports/SanyamProject/s03.jpg";
import imgSanyam04 from "@/imports/SanyamProject/s04.jpg";
import imgSanyam05 from "@/imports/SanyamProject/s05.jpg";
import imgSanyam06 from "@/imports/SanyamProject/s06.jpg";
import imgSanyam07 from "@/imports/SanyamProject/s07.jpg";
import imgSanyam08 from "@/imports/SanyamProject/s08.jpg";
import imgSanyam09 from "@/imports/SanyamProject/s09.jpg";
import imgSanyam10 from "@/imports/SanyamProject/s10.jpg";

// Neha Jain — full project sequence (01–21)
import imgNeha01 from "@/imports/NehaProject/n01.png";
import imgNeha02 from "@/imports/NehaProject/n02.png";
import imgNeha03 from "@/imports/NehaProject/n03.png";
import imgNeha04 from "@/imports/NehaProject/n04.png";
import imgNeha05 from "@/imports/NehaProject/n05.png";
import imgNeha06 from "@/imports/NehaProject/n06.png";
import imgNeha07 from "@/imports/NehaProject/n07.png";
import imgNeha08 from "@/imports/NehaProject/n08.png";
import imgNeha09 from "@/imports/NehaProject/n09.png";
import imgNeha10 from "@/imports/NehaProject/n10.png";
import imgNeha11 from "@/imports/NehaProject/n11.png";
import imgNeha12 from "@/imports/NehaProject/n12.png";
import imgNeha13 from "@/imports/NehaProject/n13.png";
import imgNeha14 from "@/imports/NehaProject/n14.png";
import imgNeha15 from "@/imports/NehaProject/n15.png";
import imgNeha16 from "@/imports/NehaProject/n16.png";
import imgNeha17 from "@/imports/NehaProject/n17.png";
import imgNeha18 from "@/imports/NehaProject/n18.png";
import imgNeha19 from "@/imports/NehaProject/n19.png";
import imgNeha20 from "@/imports/NehaProject/n20.png";
import imgNeha21 from "@/imports/NehaProject/n21.png";

// Arpita Sharma — full project sequence (01–10)
import imgArpita01 from "@/imports/ArpitaProject/ar01.png";
import imgArpita02 from "@/imports/ArpitaProject/ar02.png";
import imgArpita03 from "@/imports/ArpitaProject/ar03.png";
import imgArpita04 from "@/imports/ArpitaProject/ar04.png";
import imgArpita05 from "@/imports/ArpitaProject/ar05.png";
import imgArpita06 from "@/imports/ArpitaProject/ar06.png";
import imgArpita07 from "@/imports/ArpitaProject/ar07.png";
import imgArpita08 from "@/imports/ArpitaProject/ar08.png";
import imgArpita09 from "@/imports/ArpitaProject/ar09.png";
import imgArpita10 from "@/imports/ArpitaProject/ar10.png";

// Kamini Singh — full project sequence (01–15)
import imgKamini01 from "@/imports/KaminiProject/k01.png";
import imgKamini02 from "@/imports/KaminiProject/k02.png";
import imgKamini03 from "@/imports/KaminiProject/k03.png";
import imgKamini04 from "@/imports/KaminiProject/k04.png";
import imgKamini05 from "@/imports/KaminiProject/k05.png";
import imgKamini06 from "@/imports/KaminiProject/k06.png";
import imgKamini07 from "@/imports/KaminiProject/k07.png";
import imgKamini08 from "@/imports/KaminiProject/k08.png";
import imgKamini09 from "@/imports/KaminiProject/k09.png";
import imgKamini10 from "@/imports/KaminiProject/k10.png";
import imgKamini11 from "@/imports/KaminiProject/k11.png";
import imgKamini12 from "@/imports/KaminiProject/k12.png";
import imgKamini13 from "@/imports/KaminiProject/k13.png";
import imgKamini14 from "@/imports/KaminiProject/k14.png";
import imgKamini15 from "@/imports/KaminiProject/k15.png";

// Aayush Kumar — full project sequence (01–09)
import imgAayush01 from "@/imports/AayushProject/a01.jpg";
import imgAayush02 from "@/imports/AayushProject/a02.jpg";
import imgAayush03 from "@/imports/AayushProject/a03.jpg";
import imgAayush04 from "@/imports/AayushProject/a04.jpg";
import imgAayush05 from "@/imports/AayushProject/a05.jpg";
import imgAayush06 from "@/imports/AayushProject/a06.jpg";
import imgAayush07 from "@/imports/AayushProject/a07.jpg";
import imgAayush08 from "@/imports/AayushProject/a08.jpg";
import imgAayush09 from "@/imports/AayushProject/a09.jpg";
// Similar Posts — Sanyam Kumar
import imgSimSanyam01 from "@/imports/SimilarPostsSanyam/01.png";
import imgSimSanyam02 from "@/imports/SimilarPostsSanyam/02.png";
import imgSimSanyam03 from "@/imports/SimilarPostsSanyam/03.png";
import imgSimSanyam04 from "@/imports/SimilarPostsSanyam/04.png";
import imgSimSanyam05 from "@/imports/SimilarPostsSanyam/05.png";

// Similar Posts — Neha Jain
import imgSimNeha01 from "@/imports/SimilarPostsNeha/01.png";

// Similar Posts — Arpita Sharma
import imgSimArpita01 from "@/imports/SimilarPostsArpita/01.png";
import imgSimArpita02 from "@/imports/SimilarPostsArpita/02.png";
import imgSimArpita03 from "@/imports/SimilarPostsArpita/03.png";
import imgSimArpita04 from "@/imports/SimilarPostsArpita/04.png";
import imgSimArpita05 from "@/imports/SimilarPostsArpita/05.png";

// Similar Posts — Kamini Singh
import imgSimKamini01 from "@/imports/SimilarPostsKamini/01.png";
import imgSimKamini02 from "@/imports/SimilarPostsKamini/02.png";
import imgSimKamini03 from "@/imports/SimilarPostsKamini/03.png";
import imgSimKamini04 from "@/imports/SimilarPostsKamini/04.png";
import imgSimKamini05 from "@/imports/SimilarPostsKamini/05.png";

// Similar Posts — Aayush Kumar
import imgSimAayush01 from "@/imports/SimilarPostsAayush/01.png";
import imgSimAayush02 from "@/imports/SimilarPostsAayush/02.png";
import imgSimAayush03 from "@/imports/SimilarPostsAayush/03.png";
import imgSimAayush04 from "@/imports/SimilarPostsAayush/04.png";
import imgSimAayush05 from "@/imports/SimilarPostsAayush/05.png";

// ── Types ──────────────────────────────────────────────────────────────────────

type EditorialBlock =
  | { type: "image"; src: string; aspectRatio?: string; height?: number }
  | { type: "text"; content: string; className?: string }
  | { type: "label"; label: string };

interface CreatorInfo {
  name: string;
  role: string;
  /** Optional status line — shown below role (e.g. "Seeking Full time") */
  status?: string;
  /** Single avatar — standard post */
  avatar?: string;
  /** Collaboration variant — Neha Jain style */
  isCollaboration?: boolean;
  collaborationText?: string;
  avatarPrimary?: string;
  avatarSecondary?: string;
}

interface PostEngagement {
  views: string;
  claps: number;
  comments: number;
  reposts: number;
  date: string;
  /** Shown only when the feed card had a reposter badge */
  reposterLabel?: string;
  reposterAvatar?: string;
  /** Shown only when the feed card had a clap badge */
  clapLabel?: string;
  clapAvatar?: string;
}

interface SimilarPost {
  src: string;
  date: string;
}

interface PostConfig {
  id: string;
  creator: CreatorInfo;
  caption: string;
  /** Resolved cover image src — set once in config, referenced in render */
  coverSrc: string;
  coverAspectRatio?: string;
  /** object-fit for the hero cover image. Default "cover". Use "contain" for editorial full-frame covers. */
  coverObjectFit?: "cover" | "contain";
  /** Background fill shown behind contain-mode cover. Default transparent. */
  coverBackground?: string;
  blocks: EditorialBlock[];
  dockets: [string, string][];
  engagement: PostEngagement;
  similarPosts: SimilarPost[];
  totalComments: number;
}

// ── Post configuration data ────────────────────────────────────────────────────

const POST_CONFIGS: Record<string, PostConfig> = {

  // ── Sanyam Kumar ──────────────────────────────────────────────────────────
  sanyam: {
    id: "sanyam",
    creator: {
      name: "Sanyam Kumar",
      role: "Fashion Designer and Stylist",
      status: "Seeking Internship",
      avatar: imgAvatarSanyam,
    },
    caption: "Maximal Baarat styling meets royal drama with layered jewels, bold turbans, and statement silhouettes.",
    coverSrc: imgCoverSanyam,
    coverAspectRatio: "1.12 / 1",
    coverObjectFit: "contain",
    coverBackground: "#FFFEFF",
    blocks: [
      { type: "image", src: imgSanyam01 },
      { type: "image", src: imgSanyam02 },
      { type: "image", src: imgSanyam03 },
      { type: "image", src: imgSanyam04 },
      { type: "image", src: imgSanyam05 },
      { type: "image", src: imgSanyam06 },
      { type: "image", src: imgSanyam07 },
      { type: "image", src: imgSanyam08 },
      { type: "image", src: imgSanyam09 },
      { type: "image", src: imgSanyam10 },
    ],
    dockets: [
      ["Collection", "Rajasthan Dome Series"],
      ["Technique", "Hand block printing, mineral dye"],
      ["Fabric", "Silk georgette, chanderi, raw tussar"],
      ["Repeat size", "12 cm × 12 cm"],
      ["Colourways", "3 seasonal palettes"],
    ],
    engagement: {
      views: "1.8k",
      claps: 142,
      comments: 31,
      reposts: 14,
      date: "26 July",
      reposterLabel: "Sr. Designer from Sabyasachi",
      reposterAvatar: imgEngagementSabyasachi,
    },
    totalComments: 31,
    similarPosts: [
      { src: imgSimSanyam01, date: "24 July" },
      { src: imgSimSanyam02, date: "22 July" },
      { src: imgSimSanyam03, date: "19 July" },
      { src: imgSimSanyam04, date: "17 July" },
      { src: imgSimSanyam05, date: "15 July" },
    ],
  },

  // ── Neha Jain ─────────────────────────────────────────────────────────────
  neha: {
    id: "neha",
    creator: {
      name: "Neha Jain",
      role: "Fashion Designer",
      status: "Seeking Full time",
      isCollaboration: true,
      collaborationText: "2 Others",
      avatarPrimary: imgAvatarNehaPrimary,
      avatarSecondary: imgAvatarNehaSecondary,
    },
    caption: "A Celebration of Resilience, Beauty, and Feminine Power.",
    coverSrc: imgCoverNeha,
    coverAspectRatio: "1 / 1",
    blocks: [
      { type: "image", src: imgNeha01 },
      { type: "image", src: imgNeha02 },
      { type: "image", src: imgNeha03 },
      { type: "image", src: imgNeha04 },
      { type: "image", src: imgNeha05 },
      { type: "image", src: imgNeha06 },
      { type: "image", src: imgNeha07 },
      { type: "image", src: imgNeha08 },
      { type: "image", src: imgNeha09 },
      { type: "image", src: imgNeha10 },
      { type: "image", src: imgNeha11 },
      { type: "image", src: imgNeha12 },
      { type: "image", src: imgNeha13 },
      { type: "image", src: imgNeha14 },
      { type: "image", src: imgNeha15 },
      { type: "image", src: imgNeha16 },
      { type: "image", src: imgNeha17 },
      { type: "image", src: imgNeha18 },
      { type: "image", src: imgNeha19 },
      { type: "image", src: imgNeha20 },
      { type: "image", src: imgNeha21 },
    ],
    dockets: [
      ["Collection", "She Endures — SS26"],
      ["Designers", "Neha Jain + 2 collaborators"],
      ["Fabric", "Chanderi, silk organza, cotton voile"],
      ["Craft", "Kutch chikankari, hand embroidery"],
      ["Presented at", "Lakme Fashion Week SS26"],
    ],
    engagement: {
      views: "2.4k",
      claps: 198,
      comments: 58,
      reposts: 22,
      date: "25 July",
    },
    totalComments: 58,
    similarPosts: [
      { src: imgSimNeha01, date: "23 July" },
    ],
  },

  // ── Arpita Sharma ──────────────────────────────────────────────────────────
  arpita: {
    id: "arpita",
    creator: {
      name: "Arpita Sharma",
      role: "Jewellery Designer @Rubas",
      avatar: imgAvatarArpita,
    },
    caption: "Temple artistry steeped in South Indian tradition.",
    coverSrc: imgCoverArpita,
    coverAspectRatio: "1.12 / 1",
    coverObjectFit: "contain",
    coverBackground: "#FFFEFF",
    blocks: [
      { type: "image", src: imgArpita01 },
      { type: "image", src: imgArpita02 },
      { type: "image", src: imgArpita03 },
      { type: "image", src: imgArpita04 },
      { type: "image", src: imgArpita05 },
      { type: "image", src: imgArpita06 },
      { type: "image", src: imgArpita07 },
      { type: "image", src: imgArpita08 },
      { type: "image", src: imgArpita09 },
      { type: "image", src: imgArpita10 },
    ],
    dockets: [
      ["Collection", "Shekhawati Heritage Series"],
      ["Technique", "Kundan, meenakari enamel"],
      ["Stones", "Polki diamond, emerald, ruby"],
      ["Pieces", "8 signature sets"],
      ["Atelier", "Johri Bazaar, Jaipur"],
    ],
    engagement: {
      views: "2.1k",
      claps: 167,
      comments: 47,
      reposts: 19,
      date: "25 July",
    },
    totalComments: 47,
    similarPosts: [
      { src: imgSimArpita01, date: "23 July" },
      { src: imgSimArpita02, date: "21 July" },
      { src: imgSimArpita03, date: "18 July" },
      { src: imgSimArpita04, date: "16 July" },
      { src: imgSimArpita05, date: "14 July" },
    ],
  },

  // ── Kamini Singh ──────────────────────────────────────────────────────────
  kamini: {
    id: "kamini",
    creator: {
      name: "Kamini Singh",
      role: "Fashion Designer",
      avatar: imgAvatarKamini,
    },
    caption: "Denim dreams stitched with confidence and runway elegance.",
    coverSrc: imgCoverKamini,
    coverAspectRatio: "1.12 / 1",
    blocks: [
      { type: "image", src: imgKamini01 },
      { type: "image", src: imgKamini02 },
      { type: "image", src: imgKamini03 },
      { type: "image", src: imgKamini04 },
      { type: "image", src: imgKamini05 },
      { type: "image", src: imgKamini06 },
      { type: "image", src: imgKamini07 },
      { type: "image", src: imgKamini08 },
      { type: "image", src: imgKamini09 },
      { type: "image", src: imgKamini10 },
      { type: "image", src: imgKamini11 },
      { type: "image", src: imgKamini12 },
      { type: "image", src: imgKamini13 },
      { type: "image", src: imgKamini14 },
      { type: "image", src: imgKamini15 },
    ],
    dockets: [
      ["Collection", "SS26 Denim Dreams"],
      ["Pieces", "12 looks"],
      ["Fabric", "100% selvedge denim, recycled cotton"],
      ["Technique", "Circular denim, zardozi embroidery"],
      ["Manufacturing", "Small-batch, Ahmedabad atelier"],
      ["Presented at", "Lakme Fashion Week SS26"],
    ],
    engagement: {
      views: "3.2k",
      claps: 256,
      comments: 42,
      reposts: 18,
      date: "20 July",
    },
    totalComments: 42,
    similarPosts: [
      { src: imgSimKamini01, date: "18 July" },
      { src: imgSimKamini02, date: "16 July" },
      { src: imgSimKamini03, date: "14 July" },
      { src: imgSimKamini04, date: "12 July" },
      { src: imgSimKamini05, date: "10 July" },
    ],
  },

  // ── Aayush Kumar ──────────────────────────────────────────────────────────
  aayush: {
    id: "aayush",
    creator: {
      name: "Aayush Kumar",
      role: "Textile Designer",
      avatar: imgAvatarAayush,
    },
    caption: "Modern swirl patterns in muted tones bring artistic movement and cozy elegance to the rug design.",
    coverSrc: imgCoverAayush,
    coverAspectRatio: "1.12 / 1",
    coverObjectFit: "contain",
    coverBackground: "#FFFEFF",
    blocks: [
      { type: "image", src: imgAayush01 },
      { type: "image", src: imgAayush02 },
      { type: "image", src: imgAayush03 },
      { type: "image", src: imgAayush04 },
      { type: "image", src: imgAayush05 },
      { type: "image", src: imgAayush06 },
      { type: "image", src: imgAayush07 },
      { type: "image", src: imgAayush08 },
      { type: "image", src: imgAayush09 },
    ],
    dockets: [
      ["Collection", "Lumière Structured Series"],
      ["Technique", "Hand-prong crystal setting, rigid shell"],
      ["Material", "Full-grain leather, Swarovski crystal"],
      ["Sizes", "Mini, medium, statement"],
      ["Workshop", "Dharavi Leather Cluster, Mumbai"],
    ],
    engagement: {
      views: "2.7k",
      claps: 214,
      comments: 64,
      reposts: 27,
      date: "20 July",
      clapLabel: "Sr. Designer from Papa Don't Preach",
      clapAvatar: imgEngagementPapaDP,
    },
    totalComments: 64,
    similarPosts: [
      { src: imgSimAayush01, date: "18 July" },
      { src: imgSimAayush02, date: "16 July" },
      { src: imgSimAayush03, date: "14 July" },
      { src: imgSimAayush04, date: "12 July" },
      { src: imgSimAayush05, date: "10 July" },
    ],
  },
};


// ── Shared sub-components ──────────────────────────────────────────────────────

/** Full-bleed edge-to-edge image — block kills inline line-gap.
 *  Cover images (aspectRatio set): fixed ratio, objectFit/background configurable.
 *  Body images (no aspectRatio): full natural height, no cropping. */
function FullBleedImage({
  src,
  alt,
  aspectRatio,
  height,
  objectFit = "cover",
  background,
}: {
  src: string;
  alt?: string;
  aspectRatio?: string;
  height?: number;
  objectFit?: "cover" | "contain";
  background?: string;
}) {
  if (aspectRatio) {
    // Cover image: fixed ratio, rendering mode from config
    return (
      <div
        className="w-full"
        style={background ? { background } : undefined}
      >
        <img
          src={src}
          alt={alt ?? ""}
          draggable={false}
          className="w-full block"
          style={{ aspectRatio, width: "100%", objectFit, objectPosition: "center" }}
        />
      </div>
    );
  }
  // Body image: full composition visible, no cropping
  return (
    <img
      src={src}
      alt={alt ?? ""}
      draggable={false}
      className="w-full block"
      style={height ? { height, objectFit: "contain" } : { height: "auto" }}
    />
  );
}

/** Padded editorial body-copy block */
function TextBlock({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-4 ${className}`}>
      <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[14px] leading-[22px]">
        {children}
      </p>
    </div>
  );
}

/** Horizontal rule with centre label */
function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-5">
      <div className="flex-1 h-px bg-[#e2d9ef]" />
      <span className="font-['Manrope',sans-serif] font-semibold text-[#9d90ad] text-[10px] leading-[14px] tracking-[1.2px] uppercase whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-[#e2d9ef]" />
    </div>
  );
}

/**
 * Clap FAB — two exact states per spec.
 *
 * DEFAULT  : white bg · rgba outline · 0px 0px shadow · regular icon 24×24 #1A1128
 * SELECTED : #FEFAE1 bg · #C9A531 outline · 0px 4px shadow · fill icon 24×24 #C9A531
 *
 * Layout is IDENTICAL between states — only bg / outline / shadow / icon variant change.
 */
function ClapFab({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);
  const [clapped, setClapped] = useState(false);

  return (
    <div className="fixed bottom-[62px] right-[16px] z-[55]">
      <button
        type="button"
        aria-label="Clap"
        onClick={() => {
          const next = !clapped;
          setClapped(next);
          setCount((c) => (next ? c + 1 : c - 1));
        }}
        style={{
          /* ── Shared dimensions ── */
          width: 70,
          height: 70,
          borderRadius: 4,
          border: "none",
          cursor: "pointer",

          /* ── Layout ── */
          display: "inline-flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,

          /* ── Padding — per state ── */
          paddingTop:    clapped ? 4  : 8,
          paddingBottom: clapped ? 4  : 8,
          paddingLeft:   clapped ? 8  : 0,
          paddingRight:  clapped ? 8  : 0,

          /* ── Surface — per state ── */
          background: clapped ? "#FEFAE1" : "#ffffff",

          /* ── Outline — per state (outline-offset: -1px keeps it inside the box) ── */
          outline: clapped
            ? "1px solid #C9A531"
            : "1px solid rgba(157, 148, 170, 0.40)",
          outlineOffset: "-1px",

          /* ── Shadow — per state ── */
          boxShadow: clapped
            ? "0px 4px 4px rgba(200, 192, 212, 0.60)"
            : "0px 0px 4px rgba(200, 192, 212, 0.60)",
        }}
      >
        {/* Icon — regular in default, fill in selected */}
        <HandsClapping
          size={24}
          weight={clapped ? "fill" : "regular"}
          color={clapped ? "#C9A531" : "#1A1128"}
        />

        {/* Count — body-2 in default (400), h4-weight in selected (500) */}
        <span
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: 14,
            fontWeight: clapped ? 500 : 400,
            lineHeight: "24px",
            color: "#1A1128",
            textAlign: "center",
          }}
        >
          {count}
        </span>
      </button>
    </div>
  );
}

/**
 * Creator header — two variants.
 *
 * STANDARD     : single 48×48 rounded-full avatar · name/role[/status] text block
 * COLLABORATION: 48×48 relative container with spec-exact overlapping 32×32 avatars
 *                (asymmetric corner radii per Figma spec) · name/role/status text block
 */
function CreatorHeader({
  creator,
  onPress,
}: {
  creator: CreatorInfo;
  onPress: () => void;
}) {
  return (
    <div className="flex items-center gap-3 px-4 pt-4 pb-3">

      {/* ── Avatar ── */}
      <button
        type="button"
        onClick={onPress}
        className="shrink-0 cursor-pointer"
        aria-label="View creator profile"
      >
        {creator.isCollaboration ? (

          /* ── Collaboration double-avatar ── */
          /* Outer 48×48 relative container holds both 32×32 avatars */
          <div style={{ width: 48, height: 48, position: "relative" }}>

            {/* Primary — top-left, round on TL / TR / BL only */}
            <div
              style={{
                width: 32, height: 32,
                left: 0, top: 0,
                position: "absolute",
                overflow: "hidden",
                borderTopLeftRadius: 200,
                borderTopRightRadius: 200,
                borderBottomLeftRadius: 200,
              }}
            >
              <img
                src={creator.avatarPrimary}
                alt=""
                style={{
                  width: 32, height: 32,
                  left: 0, top: 0,
                  position: "absolute",
                  objectFit: "cover",
                  borderTopLeftRadius: 200,
                  borderTopRightRadius: 200,
                  borderBottomLeftRadius: 200,
                  border: "1px solid #E2D9EF",
                }}
              />
            </div>

            {/* Secondary — offset left:16 top:16, round on TL / TR / BR only */}
            <div
              style={{
                width: 32, height: 32,
                left: 16, top: 16,
                position: "absolute",
                overflow: "hidden",
                borderTopLeftRadius: 200,
                borderTopRightRadius: 200,
                borderBottomRightRadius: 200,
              }}
            >
              <img
                src={creator.avatarSecondary}
                alt=""
                style={{
                  width: 32, height: 32,
                  left: 0, top: 0,
                  position: "absolute",
                  objectFit: "cover",
                  borderTopLeftRadius: 200,
                  borderTopRightRadius: 200,
                  borderBottomRightRadius: 200,
                  border: "1px solid #E2D9EF",
                  boxShadow: "-1px 0px 2px rgba(26, 26, 26, 0.15)",
                }}
              />
            </div>

          </div>

        ) : (

          /* ── Standard single avatar — 48×48 rounded-full ── */
          <img
            src={creator.avatar}
            alt={creator.name}
            style={{
              width: 48, height: 48,
              borderRadius: "50%",
              objectFit: "cover",
              border: "1.5px solid #E2D9EF",
              display: "block",
            }}
          />

        )}
      </button>

      {/* ── Text block ── */}
      <div className="flex-1 min-w-0">
        <button
          type="button"
          onClick={onPress}
          className="text-left w-full cursor-pointer flex flex-col"
        >
          {/* Creator name line */}
          {creator.isCollaboration ? (
            /* Collaboration name: "Neha Jain co-create with 2 Others" */
            <p
              className="truncate"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: 16,
                fontWeight: 500,
                lineHeight: "25px",
                letterSpacing: "0.16px",
                color: "#2D2040",
              }}
            >
              {creator.name}
              <span
                style={{
                  fontWeight: 400,
                  color: "#433059",
                  fontSize: 14,
                  letterSpacing: "0.14px",
                }}
              >
                {" "}co-create with{" "}
              </span>
              {creator.collaborationText}
            </p>
          ) : (
            /* Standard single-creator name — H4 token */
            <p
              className="truncate"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: 16,
                fontWeight: 500,
                lineHeight: "25px",
                letterSpacing: "0.16px",
                color: "#2D2040",
              }}
            >
              {creator.name}
            </p>
          )}

          {/* Role line */}
          <p
            className="truncate"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: 14,
              fontWeight: 400,
              lineHeight: "21px",
              color: "#433059",
            }}
          >
            {creator.role}
          </p>

          {/* Status — Caption Regular token · only when present */}
          {creator.status && (
            <p
              className="truncate"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: 12,
                fontWeight: 400,
                lineHeight: "18px",
                letterSpacing: "0.24px",
                color: "#6B5F7A",
              }}
            >
              {creator.status}
            </p>
          )}
        </button>
      </div>

      {/* ── Menu button — 40×40 wrapper, 4px padding, 28px icon ── */}
      <button
        type="button"
        className="shrink-0 flex items-center justify-center cursor-pointer"
        aria-label="More options"
        style={{ width: 40, height: 40, padding: 4 }}
      >
        <DotsThreeVertical size={28} color="#6B5F7A" />
      </button>

    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function PostProjectDetailPage() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const postId    = (location.state as { postId?: string } | null)?.postId ?? "kamini";
  const config    = POST_CONFIGS[postId] ?? POST_CONFIGS.kamini;
  const { creator, caption, blocks, dockets, engagement, totalComments, similarPosts } = config;

  // Always open from the top — reset scroll on every navigation into this screen
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  const goToDesignerProfile = () => navigate("/designer-profile");

  return (
    <div className="bg-[#fffeff] min-h-screen flex items-start justify-center">
      <div className="w-full max-w-[800px] min-w-0 bg-[#fffeff] flex flex-col min-h-screen relative">

        {/* ── 1. Fixed header ───────────────────────────────────────────────── */}
        <div
          className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] z-30 bg-[#fffeff]"
          style={{ boxShadow: "0px 1px 2px rgba(200,192,212,0.3)" }}
        >
          <StatusBar />
          <div className="flex items-center px-4 py-3 gap-2">
            <button
              type="button"
              onClick={() => navigate("/home/feed")}
              className="p-2 -ml-2 shrink-0 flex items-center justify-center cursor-pointer"
              aria-label="Go back"
            >
              <ArrowLeft size={24} color="#1A1128" />
            </button>
            <h1 className="font-['Roboto_Serif',serif] font-extrabold text-[#1a1128] text-[24px] leading-[31px] flex-1 min-w-0 truncate ml-3">
              Project
            </h1>
            <button
              type="button"
              className="p-2 shrink-0 flex items-center justify-center cursor-pointer"
              aria-label="Share"
            >
              <ShareFat size={22} color="#6B5F7A" />
            </button>
            <SaveButton />
          </div>
        </div>

        {/* ── Scrollable content (offset = 44 StatusBar + 58 header = 102px) ── */}
        <div className="pt-[102px] pb-[80px] flex flex-col">

          {/* ── 2. Creator info ───────────────────────────────────────────────── */}
          <CreatorHeader creator={creator} onPress={goToDesignerProfile} />

          {/* ── 3. Caption ───────────────────────────────────────────────────── */}
          <div className="px-4 pb-4">
            <p className="font-['Manrope',sans-serif] font-semibold text-[#2D2040] text-[18px] leading-[28px]">
              {caption}
            </p>
          </div>

          {/* ── 4. Project media — body images only (feed cover never repeated) ── */}

          {/* Editorial blocks */}
          {blocks.map((block, i) => {
            if (block.type === "image") {
              return (
                <FullBleedImage
                  key={i}
                  src={block.src}
                  alt=""
                  aspectRatio={block.aspectRatio}
                  height={block.height}
                />
              );
            }
            if (block.type === "label") {
              return <SectionLabel key={i} label={block.label} />;
            }
            return (
              <TextBlock key={i} className={block.className}>
                {block.content}
              </TextBlock>
            );
          })}

          {/* ── 5. Project Info CTA ───────────────────────────────────────────── */}
          <div className="px-4 pt-5 pb-4">
            <button
              type="button"
              className="cursor-pointer inline-flex items-center justify-center gap-[8px]"
              style={{
                alignSelf: "stretch",
                width: "100%",
                minHeight: 48,
                maxHeight: 48,
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 16,
                paddingRight: 16,
                borderRadius: 8,
                border: "1.5px solid #7d3aea",
                background: "transparent",
              }}
            >
              <span
                className="font-['Manrope',sans-serif] font-semibold text-[16px] leading-[20px]"
                style={{ letterSpacing: "0.48px", color: "#7D3AEA" }}
              >
                Project Info
              </span>
            </button>
          </div>

          {/* ── 6 + 7 + 8. Engagement content ────────────────────────────────── */}
          <div className="border-t border-[#e2d9ef] px-4 pt-4 pb-5 flex flex-col gap-[24px]">

            {/* ── Engagement credit row — editorial social-proof, only when on feed card ── */}
            {(engagement.reposterLabel || engagement.clapLabel) && (() => {
              const isRepost = !!engagement.reposterLabel;
              const label    = isRepost ? engagement.reposterLabel! : engagement.clapLabel!;
              const avatar   = isRepost ? engagement.reposterAvatar! : engagement.clapAvatar!;
              const copy     = isRepost
                ? `${label} shared this`
                : `${label} clapped this`;

              return (
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  {/* ── engagement-icon-wrap ──────────────────────────────────────
                       Outer div: flex alignment only (no position context)
                       Inner 32×32 div: position:relative — anchors the overlay
                       to the image edge so the badge stamps onto the logo corner  */}
                  <div style={{ flexShrink: 0 }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        position: "relative",   /* overlay anchors to image boundary */
                        overflow: "visible",    /* badge bleeds outside the 32px circle */
                      }}
                    >
                      {/* Base avatar — 32×32 */}
                      <img
                        src={avatar}
                        alt=""
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 200,
                          objectFit: "cover",
                          display: "block",
                        }}
                      />

                      {/* Interaction badge — bottom-right, partially outside image */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: -2,
                          right: -2,
                          zIndex: 2,
                          width: 20,
                          height: 20,
                          background: "#FFFEFF",
                          borderRadius: 200,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {isRepost
                          ? <Repeat        size={14} color="#1A1128" />
                          : <HandsClapping size={14} color="#1A1128" />}
                      </div>
                    </div>
                  </div>

                  {/* ── engagement-user text — editorial, refined ── */}
                  <span
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontSize: 12,
                      fontWeight: 400,
                      lineHeight: "18px",
                      letterSpacing: "0.24px",
                      color: "#2D2040",
                    }}
                  >
                    {copy}
                  </span>
                </div>
              );
            })()}

            {/* Metrics row */}
            <div className="flex items-center gap-[20px]">
              <div className="flex items-center gap-[6px]">
                <Eye size={16} color="#6b5f7a" weight="fill" />
                <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[16px] leading-[24px]">
                  {engagement.views}
                </span>
              </div>
              <div className="flex items-center gap-[6px]">
                <ChatCircle size={16} color="#6b5f7a" weight="fill" />
                <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[16px] leading-[24px]">
                  {engagement.comments}
                </span>
              </div>
              <div className="flex items-center gap-[6px]">
                <Repeat size={16} color="#6b5f7a" weight="fill" />
                <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[16px] leading-[24px]">
                  {engagement.reposts}
                </span>
              </div>
              <span className="ml-auto font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[12px] leading-[18px] tracking-[0.24px]">
                {engagement.date}
              </span>
            </div>

            {/* Comment field + View Comments — 8px gap between them */}
            <div className="flex flex-col gap-[8px]">

              {/* Comment field — no avatar, label only */}
              <div
                className="flex items-center justify-between"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2d9ef",
                  borderRadius: 4,
                  padding: "11px 16px",
                }}
              >
                <span
                  className="font-['Manrope',sans-serif] font-normal text-[12px] leading-[18px] tracking-[0.24px]"
                  style={{ color: "#9D90AD" }}
                >
                  Leave a Comment
                </span>
                <PaperPlaneTilt size={16} color="#9d90ad" />
              </div>

              {/* View Comments — borderless ghost, purple label + CaretDown */}
              <button
                type="button"
                className="w-full h-[40px] flex items-center justify-center gap-[6px] cursor-pointer"
                style={{ borderRadius: 4, background: "transparent", border: "none" }}
              >
                <span
                  className="font-['Manrope',sans-serif] font-semibold text-[14px] leading-[20px]"
                  style={{ letterSpacing: "0.14px", color: "#7d3aea" }}
                >
                  View Comments
                </span>
                <CaretDown size={14} color="#7d3aea" weight="bold" />
              </button>

            </div>
          </div>

          {/* ── 9a. More projects — collaboration posts only ─────────────────── */}
          {creator.isCollaboration && (
            <div className="pt-[24px] pb-[4px]">

              {/* Heading */}
              <div className="px-[16px] mb-[20px]">
                <p
                  style={{
                    fontFamily: "'Roboto Serif', serif",
                    fontSize: 20,
                    fontWeight: 600,
                    lineHeight: "28px",
                    color: "#1A1128",
                  }}
                >
                  {`More project by ${creator.name.toLowerCase()}`}
                </p>
              </div>

              {/* Single card — same card system as Similar post */}
              <div className="px-[16px]">
                <button
                  type="button"
                  className="cursor-pointer text-left"
                  style={{ width: 246 }}
                  onClick={() => {}}
                >
                  <div
                    className="flex flex-col bg-white overflow-hidden"
                    style={{ borderRadius: 8, border: "1px solid #e2d9ef" }}
                  >
                    <div style={{ width: 246, height: 140, flexShrink: 0 }}>
                      <img
                        src={imgSimNeha01}
                        alt=""
                        className="w-full h-full object-cover block"
                        draggable={false}
                      />
                    </div>
                    <div className="px-[10px] py-[8px]">
                      <p
                        className="font-['Manrope',sans-serif] font-normal text-[12px] leading-[18px] tracking-[0.24px]"
                        style={{ color: "#433059" }}
                      >
                        23 July
                      </p>
                    </div>
                  </div>
                </button>
              </div>

            </div>
          )}

          {/* ── 9. Similar post — only for non-collaboration posts ───────────── */}
          {!creator.isCollaboration && (
          <div className="pt-[24px] pb-[24px]">

            {/* Heading — standalone, no decorative line */}
            <div className="px-[16px] mb-[20px]">
              <p className="font-['Roboto_Serif',serif] font-semibold text-[#1A1128] text-[20px] leading-[28px]">
                Similar post
              </p>
            </div>

            {/* Horizontal scroll — 246×140 cards */}
            <div
              className="flex gap-3 px-[16px] overflow-x-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {similarPosts.map(({ src, date }, i) => (
                <button
                  key={i}
                  type="button"
                  className="shrink-0 cursor-pointer text-left"
                  style={{ width: 246 }}
                  onClick={() => {}}
                >
                  <div
                    className="flex flex-col bg-white overflow-hidden"
                    style={{ borderRadius: 8, border: "1px solid #e2d9ef" }}
                  >
                    {/* Thumbnail */}
                    <div style={{ width: 246, height: 140, flexShrink: 0 }}>
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover block"
                        draggable={false}
                      />
                    </div>
                    {/* Date only */}
                    <div className="px-[10px] py-[8px]">
                      <p
                        className="font-['Manrope',sans-serif] font-normal text-[12px] leading-[18px] tracking-[0.24px]"
                        style={{ color: "#433059" }}
                      >
                        {date}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

          </div>
          )}{/* end !creator.isCollaboration */}

        </div>{/* end scrollable content */}

        {/* ── Fixed bottom safe area ────────────────────────────────────────── */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] z-40">
          <BottomSafeArea />
        </div>

        {/* ── Clap FAB — dynamic initial count per post ────────────────────── */}
        <ClapFab initialCount={engagement.claps} />

      </div>
    </div>
  );
}
