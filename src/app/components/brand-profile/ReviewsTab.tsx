/**
 * Brand Profile — Reviews tab
 *
 * Single source of truth: derives all review content from getRoleContent(job),
 * the exact same function used by the Job Details → Reviews tab in JobsPage.
 * No separate review arrays — reviews, ratings, and workplace insights always
 * match what is shown in the corresponding Job Details page.
 */

import { useState } from "react";
import { MagicWand } from "@phosphor-icons/react";
import { truncateAiBulletItem } from "@/app/utils/aiSummary";
import { JobReviewCard } from "../JobReviewCard";
import { ViewMoreButton } from "../ViewMoreButton";
import { getRoleContent } from "@/app/pages/JobsPage";
import type { Job } from "../JobCard";

interface ReviewsTabProps {
  job: Job;
}

export function ReviewsTab({ job }: ReviewsTabProps) {
  const { reviews, workplaceInsights } = getRoleContent(job);
  const [visible, setVisible] = useState(3);
  const shown = reviews.slice(0, visible);

  if (reviews.length === 0) {
    return (
      <div className="px-4 py-16 flex flex-col items-center gap-2">
        <p className="font-['Manrope',sans-serif] font-semibold text-[#6b5f7a] text-[16px] leading-[24px] text-center">
          No reviews available yet.
        </p>
        <p className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[14px] leading-[21px] text-center">
          Reviews will appear here once employees share their experience.
        </p>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col gap-[24px] items-center pb-[20px] pt-[16px] px-[16px]"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 500px" }}
    >

      {/* ── Workplace insights — exact same structure as Job Details ── */}
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
              {workplaceInsights.map((insight, i) => (
                <li key={i}>
                  <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">
                    {insight.label}:{" "}
                  </span>
                  <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px]">
                    {truncateAiBulletItem(insight.text, workplaceInsights.length)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Review cards — same component as Job Details ── */}
      {shown.map((review, i) => (
        <JobReviewCard key={i} {...review} />
      ))}

      {/* ── View More — same ViewMoreButton used in Job Details ── */}
      <ViewMoreButton
        onClick={() => setVisible((v) => Math.min(v + 3, reviews.length))}
        className={visible >= reviews.length ? "pointer-events-none cursor-default" : ""}
      />
    </div>
  );
}
