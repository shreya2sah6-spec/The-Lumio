import { useState } from "react";
import { Check } from "@phosphor-icons/react";
import { SaveButton } from "./SaveButton";
import { Button } from "./ui/button";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Job {
  id: string;
  title: string;
  company: string;
  logo?: string;
  logoColor?: string;
  salary?: string;
  expTag: string;
  typeTag: string;
  location: string;
  posted: string;
  promoted?: boolean;
  domain?: string;
  /** Key matching a brand in BrandProfilePage's BRAND_DATA. Enables logo/company click to deep-link to the correct brand page. */
  brandKey?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function logoInitials(company: string): string {
  return company
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

// ─── LogoCell ─────────────────────────────────────────────────────────────────
// Exported so JobDetailView (in JobsPage) can use the 84px variant.

export function LogoCell({ job, size, priority = false }: { job: Job; size: number; priority?: boolean }) {
  const [imgFailed, setImgFailed] = useState(false);

  const cls =
    size === 84
      ? "relative rounded-[8px] shrink-0 size-[84px] border border-[#e2d9ef] overflow-hidden bg-white"
      : "overflow-clip relative rounded-[8px] shrink-0 size-[54px] border border-[#e2d9ef] bg-white";

  const showImg = !!job.logo && !imgFailed;

  return (
    <div className={cls}>
      {showImg ? (
        <img
          alt={job.company}
          className="absolute inset-0 w-full h-full rounded-[8px] object-contain object-center"
          src={job.logo}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          {...(priority ? { fetchpriority: "high" } as Record<string, string> : {})}
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center rounded-[8px] text-white font-bold"
          style={{
            backgroundColor: job.logoColor ?? "#7D3AEA",
            fontSize: size === 84 ? 20 : 14,
          }}
        >
          {logoInitials(job.company)}
        </div>
      )}
    </div>
  );
}

// ─── JobCard ──────────────────────────────────────────────────────────────────

interface JobCardProps {
  job: Job;
  /** Whether the job has already been applied to (controls Apply button state) */
  applied?: boolean;
  /** When provided, the action row (View Details + Apply) is shown */
  onApply?: () => void;
  onViewDetails?: () => void;
  /**
   * When provided, replaces the action row with a status badge.
   * Bookmark button is also hidden in this mode.
   */
  statusLabel?: string;
  /**
   * When true, the company logo cell is hidden.
   * Use inside Brand Profile Jobs tab where company context is already established.
   */
  hideLogo?: boolean;
  /**
   * When provided, the logo + company name row becomes a tappable link to the
   * company/brand profile. Used in the listing view (JobsPage).
   */
  onCompanyClick?: () => void;
}

export function JobCard({
  job,
  applied = false,
  onApply,
  onViewDetails,
  statusLabel,
  hideLogo = false,
  onCompanyClick,
}: JobCardProps) {
  const showActions = Boolean(onApply);
  const showBookmark = showActions;

  return (
 <div data-card="interactive" className="bg-[#fffeff] flex flex-col gap-[8px] items-end py-[12px] relative w-full border-b border-[#e2d9ef]">

  {/* ── Header row: logo · title/company · bookmark ── */}
  <div className="flex flex-col gap-[4px] items-start w-full">

    <div className="flex gap-[8px] items-start w-full">

      {/* pt-[4px] aligns text with the top of the logo; drop it when the logo is hidden */}
      <div className={`flex flex-[1_0_0] gap-[12px] items-center ${hideLogo ? "" : "pt-[4px]"}`}>

        {!hideLogo && (
          onCompanyClick ? (
            <button
              onClick={(e) => { e.stopPropagation(); onCompanyClick(); }}
              className="shrink-0 cursor-pointer active:opacity-70 transition-opacity"
              aria-label={`View ${job.company} company profile`}
            >
              <LogoCell job={job} size={54} />
            </button>
          ) : (
            <LogoCell job={job} size={54} />
          )
        )}

        <div className="flex flex-col gap-[2px] flex-1">

          <p className="type-h3 text-[#1a1128] truncate">
            {job.title}
          </p>

          <p className="type-h4 text-[#6b5f7a] truncate">
            {job.company}
          </p>

        </div>

      </div>

      {showBookmark && <SaveButton />}

    </div>


        {/* ── Salary + tag chips ── */}
        <div className="flex gap-[16px] items-center w-full">
          {job.salary && (
            /* H4 — compensation emphasis matches company weight */
            <span className="type-h4 text-[#6b5f7a] whitespace-nowrap">
              {job.salary}
            </span>
          )}
          <div className="flex gap-[8px] items-center">
            {/* Caption 1 Trim — 12px medium with vertical trim */}
            <span className="type-caption-1-trim bg-[#f7f4fa] text-[#1a1128] rounded-[2px] whitespace-nowrap px-[8px] py-[4px]">
              {job.expTag}
            </span>
            <span className="type-caption-1-trim bg-[#f4f7ff] text-[#1a1128] rounded-[2px] whitespace-nowrap px-[8px] py-[4px]">
              {job.typeTag}
            </span>
          </div>
        </div>

        {/* ── Location · posted · promoted ── */}
        <div className="flex flex-wrap gap-x-[8px] items-center">
          {/* Caption 1 — 12px medium, no trim */}
          <span className="type-caption-1 text-[#1a1128]">{job.location}</span>
          <span className="type-caption-1 text-[#6b5f7a]">
            · Posted {job.posted}
          </span>
          {job.promoted && (
            /* Caption Regular — 12px regular, subdued */
            <span className="type-caption text-[#6b5f7a]">· Promoted</span>
          )}
        </div>
      </div>

      {/* ── Bottom row: action buttons OR status badge ── */}
      {showActions ? (
        <div className="flex gap-[12px] items-center justify-end w-full">
          {/* ghost sm — no border, brand-purple text */}
          <Button variant="ghost" size="sm" onClick={onViewDetails}>
            <span className="text-[#7d3aea]">View Details</span>
          </Button>
          {/* outline sm → success sm once applied; disabled:opacity-100 keeps the
              applied state fully visible while still blocking pointer events */}
          <Button
            variant={applied ? "success" : "outline"}
            size="sm"
            onClick={onApply}
            disabled={applied}
            className="w-[110px] disabled:opacity-100"
          >
            {applied && <Check className="size-[14px]" color="#208436" weight="bold" />}
            <span className={applied ? "text-[#208436]" : "text-[#7d3aea]"}>
              {applied ? "Applied" : "Apply"}
            </span>
          </Button>
        </div>
      ) : statusLabel ? (
        /* Caption 1 status badge */
        <span className="type-caption-1 text-[#6b5f7a] bg-[#f7f4fa] px-[10px] py-[4px] rounded-[4px]">
          {statusLabel}
        </span>
      ) : null}
    </div>
  );
}
