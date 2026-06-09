/**
 * PostPublishingPage — skeleton loading screen shown while a post is being
 * "published". Mirrors the Home/Feed layout exactly (StatusBar + TopBar +
 * BottomNav) so there is no jarring layout shift when the redirect fires.
 *
 * Flow: shown for 2 seconds, then redirects to /home/feed.
 */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BellSimple, ChatCenteredDots } from "@phosphor-icons/react";
import { BottomNav } from "../components/BottomNav";
import { SearchBar } from "../components/SearchBar";
import { StatusBar } from "../components/StatusBar";

// ── Skeleton primitives ───────────────────────────────────────────────────────

/** A single skeleton shimmer block. All pieces use the same soft-lavender tone. */
function Bone({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`bg-[#EDE9F5] rounded-full animate-pulse ${className}`}
      style={style}
    />
  );
}

/** Large card placeholder — full-width, tall rounded rectangle. */
function BoneCard() {
  return (
    <div
      className="w-full rounded-[20px] bg-[#EDE9F5] animate-pulse"
      style={{ height: 160 }}
    />
  );
}

/** Avatar circle + two text lines — one short name, one longer caption. */
function BoneAvatarRow() {
  return (
    <div className="flex items-center gap-3">
      {/* Avatar circle */}
      <div
        className="shrink-0 rounded-full bg-[#EDE9F5] animate-pulse"
        style={{ width: 36, height: 36 }}
      />
      {/* Text lines */}
      <div className="flex flex-col gap-[6px] flex-1">
        <Bone style={{ width: "28%", height: 11 }} />
        <Bone style={{ width: "72%", height: 11 }} />
      </div>
    </div>
  );
}

/** One complete feed-card skeleton: title lines → card image → two avatar rows. */
function BoneFeedCard() {
  return (
    <div className="flex flex-col gap-[12px]">
      {/* Two heading skeleton lines */}
      <div className="flex flex-col gap-[8px]">
        <Bone style={{ width: "42%", height: 13 }} />
        <Bone style={{ width: "62%", height: 13 }} />
      </div>

      {/* Image placeholder */}
      <BoneCard />

      {/* Author rows */}
      <BoneAvatarRow />
      <BoneAvatarRow />
    </div>
  );
}

// ── Top bar — identical structure to HomePage's TopBar ────────────────────────

function TopBar() {
  return (
    <div className="sticky top-0 z-10 bg-[#fffeff] shadow-[0px_1px_2px_rgba(200,192,212,0.4)]">
      <StatusBar />
      <div className="flex gap-3 items-center px-4 py-3">
        <SearchBar placeholder="Search" className="flex-1" />
        <button className="p-2 cursor-pointer" aria-label="Notifications">
          <BellSimple size={24} color="#6B5F7A" />
        </button>
        <button className="p-2 cursor-pointer" aria-label="Messages">
          <ChatCenteredDots size={24} color="#6B5F7A" />
        </button>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function PostPublishingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/home/feed", { replace: true }), 2000);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="bg-[#fffeff] min-h-screen flex flex-col">
      {/* Identical top bar to Home/Feed */}
      <TopBar />

      {/* Skeleton feed content */}
      <div className="flex-1 px-4 pt-8 pb-6 flex flex-col gap-[40px]">
        <BoneFeedCard />
        <BoneFeedCard />
      </div>

      {/* Identical bottom nav to Home/Feed — Home tab naturally active */}
      <BottomNav />
    </div>
  );
}
