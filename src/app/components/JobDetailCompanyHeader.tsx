/**
 * JobDetailCompanyHeader
 *
 * Permanent home for the company-logo → /brand/overview navigation.
 * Used by DetailView in JobsPage — sits above the Description/Reviews TabBar
 * so the interaction is active on BOTH tabs without any tab-switching logic.
 *
 * Navigation is owned here, not in JobsPage, so it cannot be accidentally
 * removed during future refactors of the parent component.
 *
 * Clicking the logo OR the company name navigates to /brand/overview.
 * Back navigation from brand/overview returns to the exact same tab
 * (Description or Reviews) via sessionStorage restoration in JobsPage.
 */

import { useNavigate } from "react-router-dom";
import { Star } from "@phosphor-icons/react";
import { LogoCell, type Job } from "./JobCard";

// Rating + review-count per brand — mirrors BRAND_DATA in BrandProfilePage.
// Both surfaces must show the same values; update both together if data changes.
const BRAND_RATING: Record<string, { rating: number; count: number }> = {
  sabyasachi:     { rating: 4.2, count: 60 },
  papaDontPreach: { rating: 4.0, count: 42 },
  jjValya:        { rating: 4.1, count: 35 },
  gauravGupta:    { rating: 4.3, count: 48 },
  anitaDongre:    { rating: 4.2, count: 72 },
  masaba:         { rating: 4.0, count: 55 },
  manishMalhotra: { rating: 4.5, count: 120 },
  rawMango:       { rating: 4.3, count: 38 },
  pero:           { rating: 4.1, count: 28 },
  anavila:        { rating: 4.2, count: 31 },
  amrapaliJewels: { rating: 4.4, count: 64 },
  ekayaBanaras:   { rating: 4.3, count: 29 },
  fabIndia:       { rating: 4.1, count: 215 },
};

interface JobDetailCompanyHeaderProps {
  job: Job;
}

export function JobDetailCompanyHeader({ job }: JobDetailCompanyHeaderProps) {
  const navigate = useNavigate();
  const ratingMeta = job.brandKey ? (BRAND_RATING[job.brandKey] ?? null) : null;

  // Navigation is gated on explicit brandKey only — never infer from company
  // name strings, which would silently route to the wrong brand page.
  function goToBrandProfile() {
    if (!job.brandKey) return;
    navigate("/brand/overview", {
      state: { brandKey: job.brandKey, fromJob: job },
    });
  }

  return (
    <div className="bg-[#fffeff] px-[16px] pb-[12px] pt-[16px] w-full">
      <div
        role={job.brandKey ? "button" : undefined}
        tabIndex={job.brandKey ? 0 : undefined}
        onClick={job.brandKey ? goToBrandProfile : undefined}
        onKeyDown={job.brandKey ? (e) => { if (e.key === "Enter" || e.key === " ") goToBrandProfile(); } : undefined}
        className={`flex gap-[12px] items-start w-full select-none transition-opacity${job.brandKey ? " cursor-pointer active:opacity-70" : ""}`}
        aria-label={job.brandKey ? `View ${job.company} company profile` : undefined}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        {/* ── Company logo — 84 px, above-fold in detail view ── */}
        <div className="shrink-0" style={{ pointerEvents: "none" }}>
          <LogoCell job={job} size={84} priority />
        </div>

        {/* ── Job title / rating / company name / meta ── */}
        <div className="flex flex-col flex-1 min-w-px" style={{ pointerEvents: "none" }}>

          {/* Title + rating */}
          <div className="flex gap-[4px] items-center w-full">
            <p className="flex-1 font-['Manrope',sans-serif] font-semibold text-[#1a1128] text-[18px] leading-[28px] truncate min-w-px">
              {job.title}
            </p>
            {ratingMeta && (
              <div className="flex gap-[4px] h-[18px] items-center shrink-0">
                <Star size={12} color="#1A1128" weight="fill" />
                <span className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[12px] leading-[18px] tracking-[0.24px]">
                  {ratingMeta.rating.toFixed(1)}
                </span>
                <span className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[12px] leading-[18px] tracking-[0.24px]">
                  ({ratingMeta.count})
                </span>
              </div>
            )}
          </div>

          {/* Company name */}
          <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[16px] leading-[25px] tracking-[0.16px] truncate">
            {job.company}
          </p>

          {/* Location · posted */}
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
    </div>
  );
}
