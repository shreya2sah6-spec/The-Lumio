/**
 * JobReviewCard — shared review card used in both Job Details (Reviews tab)
 * and Brand Profile (Reviews tab). Exact same component, single source of truth.
 */

import React, { useState } from "react";
import { Star, CaretDown, CaretUp } from "@phosphor-icons/react";

export interface ReviewEntry {
  avatar: string;
  name: string;
  role: string;
  rating: number;
  title: string;
  text: string;
}

export const JobReviewCard = React.memo(function JobReviewCard({ avatar, name, role, rating, title, text }: ReviewEntry) {
  const [expanded, setExpanded] = useState(false);
  const preview = text.slice(0, 110);
  const hasMore = text.length > 110;

  return (
    <div className="flex flex-col gap-[8px] items-start w-full border-b border-[#e2d9ef] pb-[16px]">
      {/* Avatar + name + role */}
      <div className="flex gap-[12px] items-center w-full">
        <div className="relative shrink-0 size-[54px] rounded-full overflow-hidden border border-[#e2d9ef]">
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={avatar} loading="lazy" decoding="async" />
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

      {/* Title + star */}
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

      {/* Body */}
      <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[16px] leading-[24px]">
        {expanded ? text : hasMore ? `${preview}…` : text}
      </p>

      {/* Read more / less */}
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
});
