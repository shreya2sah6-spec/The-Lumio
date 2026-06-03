import { Check } from "@phosphor-icons/react";
import { SaveButton } from "./SaveButton";

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

export function LogoCell({ job, size }: { job: Job; size: number }) {
  const cls =
    size === 84
      ? "relative rounded-[8px] shrink-0 size-[84px] border border-[#e2d9ef] overflow-hidden"
      : "overflow-clip relative rounded-[8px] shrink-0 size-[54px] border border-[#e2d9ef]";
  return (
    <div className={cls}>
      {job.logo ? (
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
          src={job.logo}
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
}

export function JobCard({
  job,
  applied = false,
  onApply,
  onViewDetails,
  statusLabel,
}: JobCardProps) {
  const showActions = Boolean(onApply);
  const showBookmark = showActions;

  return (
    <div className="bg-[#fffeff] flex flex-col gap-[8px] items-end py-[12px] relative w-full border-b border-[#e2d9ef]">

      {/* ── Header row: logo · title/company · bookmark ── */}
      <div className="flex flex-col gap-[4px] items-start w-full">
        <div className="flex gap-[8px] items-start w-full">
          <div className="flex flex-[1_0_0] gap-[12px] items-center pt-[4px] min-w-px">
            <LogoCell job={job} size={54} />
            <div className="flex flex-col gap-[2px] flex-1 min-w-px">
              {/* H3 — primary emphasis */}
              <p className="type-h3 text-[#1a1128] truncate">{job.title}</p>
              {/* H4 — secondary metadata */}
              <p className="type-h4 text-[#6b5f7a] truncate">{job.company}</p>
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
          <button
            onClick={onViewDetails}
            className="bg-[#fffeff] flex gap-[8px] h-[40px] items-center justify-center px-[12px] py-[8px] rounded-[4px] cursor-pointer"
          >
            {/* Button Small */}
            <span className="type-btn-sm text-[#7d3aea] whitespace-nowrap">
              View Details
            </span>
          </button>
          <button
            onClick={onApply}
            disabled={applied}
            className={`flex gap-[8px] h-[40px] items-center justify-center px-[12px] py-[8px] rounded-[4px] w-[110px] cursor-pointer transition-colors ${
              applied
                ? "bg-[#D6F5DD] border border-[#208436]"
                : "bg-white border border-[#7d3aea]"
            }`}
          >
            {applied && <Check size={14} color="#208436" weight="bold" />}
            {/* Button Small */}
            <span
              className={`type-btn-sm whitespace-nowrap ${
                applied ? "text-[#208436]" : "text-[#7d3aea]"
              }`}
            >
              {applied ? "Applied" : "Apply"}
            </span>
          </button>
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
