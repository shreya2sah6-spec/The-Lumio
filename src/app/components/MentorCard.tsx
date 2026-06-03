import { useState } from "react";
import { useNavigate } from "react-router";
import { BookmarkSimple } from "@phosphor-icons/react";

const starPath = "M6.42322 0.289277L7.76265 3.61306C7.79507 3.69373 7.84802 3.76364 7.9158 3.81528C7.98357 3.86691 8.0636 3.8983 8.14724 3.90605L11.5757 4.21466C11.6666 4.22227 11.7534 4.25781 11.825 4.31678C11.8965 4.37575 11.9497 4.4555 11.9777 4.54593C12.0057 4.63637 12.0074 4.73343 11.9824 4.82483C11.9574 4.91623 11.907 4.99787 11.8375 5.05941L9.23643 7.42197C9.17321 7.47979 9.12621 7.55437 9.10042 7.63778C9.07464 7.72118 9.07103 7.81031 9.08998 7.89568L9.86953 11.4104C9.89013 11.5022 9.88434 11.5983 9.85287 11.6867C9.82139 11.775 9.76564 11.8518 9.69254 11.9075C9.61945 11.9631 9.53225 11.9951 9.44182 11.9995C9.35138 12.0039 9.2617 11.9804 9.18396 11.9321L6.23756 10.0709C6.16596 10.0256 6.08379 10.0016 6 10.0016C5.91621 10.0016 5.83403 10.0256 5.76244 10.0709L2.81604 11.9321C2.7383 11.9804 2.64862 12.0039 2.55818 11.9995C2.46775 11.9951 2.38055 11.9631 2.30746 11.9075C2.23436 11.8518 2.17861 11.775 2.14713 11.6867C2.11566 11.5983 2.10986 11.5022 2.13047 11.4104L2.91002 7.89568C2.92897 7.81031 2.92536 7.72118 2.89958 7.63778C2.87379 7.55437 2.82679 7.47979 2.76357 7.42197L0.162545 5.05941C0.0930077 4.99787 0.0425641 4.91623 0.0175974 4.82483C-0.00736932 4.73343 -0.00573708 4.63637 0.0222875 4.54593C0.050312 4.4555 0.10347 4.37575 0.175034 4.31678C0.246598 4.25781 0.333352 4.22227 0.42432 4.21466L3.85276 3.90605C3.9364 3.8983 4.01643 3.86691 4.0842 3.81528C4.15198 3.76364 4.20493 3.69373 4.23735 3.61306L5.57678 0.289277C5.61255 0.203344 5.67168 0.130176 5.74687 0.0787798C5.82207 0.0273832 5.91005 0 6 0C6.08995 0 6.17793 0.0273832 6.25313 0.0787798C6.32832 0.130176 6.38745 0.203344 6.42322 0.289277Z";

export interface Mentor {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  experience: string;
  rating: number;
  reviews: number;
  originalPrice: number;
  discountedPrice: number | "Free";
  isTopMentor?: boolean;
}

export function MentorCard({ mentor }: { mentor: Mentor }) {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);

  return (
    <div
      onClick={() => navigate("/mentor-profile")}
      className="bg-white border border-[#e2d9ef] rounded-[8px] max-w-[340px] min-w-[158px] justify-self-stretch self-start cursor-pointer"
    >
      <div className="flex flex-col gap-2 items-start px-4 py-3">
        <div className="flex gap-3 items-start w-full">
          <div className="flex flex-1 items-center min-w-0">
            <div className="pointer-events-none relative rounded-[200px] shrink-0 size-[44px]">
              <div className="absolute inset-0 overflow-hidden rounded-[200px]">
                <img alt={mentor.name} className="absolute inset-0 size-full object-cover" src={mentor.avatar} />
              </div>
              <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]" />
            </div>
          </div>
          {mentor.isTopMentor && (
            <div className="bg-gradient-to-l from-[rgba(247,181,0,0.4)] to-[rgba(254,250,225,0.4)] flex items-center justify-center p-2 rounded-[2px] shrink-0">
              <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[12px] leading-[18px] tracking-[0.24px] whitespace-nowrap">
                Top 1%
              </span>
            </div>
          )}
        </div>
        <div className="flex gap-1 h-[18px] items-center w-full">
          <div className="flex flex-col items-center justify-center p-[2px] shrink-0 size-4">
            <div className="relative shrink-0 size-3">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d={starPath} fill="#1A1128" />
              </svg>
            </div>
          </div>
          <div className="flex gap-[2px] items-center shrink-0">
            <span className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[12px] leading-[18px] tracking-[0.24px]">
              {mentor.rating}
            </span>
            <span className="font-['Manrope',sans-serif] font-normal text-[#9d90ad] text-[12px] leading-[18px] tracking-[0.24px]">
              ({mentor.reviews})
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-[2px] items-start w-full">
          <p className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[16px] leading-[25px] tracking-[0.16px]">
            {mentor.name}
          </p>
          <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[12px] leading-[18px] tracking-[0.24px] overflow-hidden text-ellipsis whitespace-nowrap w-full">
            {mentor.title} @{mentor.company}
          </p>
          <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px] overflow-hidden text-ellipsis whitespace-nowrap w-full">
            {mentor.experience}
          </p>
        </div>
        <div className="flex gap-2 items-center w-full">
          <div className="flex flex-1 gap-[2px] items-center min-w-0 whitespace-nowrap">
            <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px] line-through">
              ₹ {mentor.originalPrice}
            </span>
            <div className="flex items-center">
              <span className="font-['Manrope',sans-serif] font-medium text-[#1a1128] text-[14px] leading-[21px] tracking-[0.14px]">
                {mentor.discountedPrice === "Free" ? "Free" : `₹${mentor.discountedPrice}`}
              </span>
              {mentor.discountedPrice !== "Free" && (
                <span className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px]">
                  hr
                </span>
              )}
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSaved(!saved);
            }}
            className="flex items-center p-2 shrink-0 cursor-pointer"
          >
            <BookmarkSimple
              size={24}
              weight={saved ? "fill" : "regular"}
              color={saved ? "#7D3AEA" : "#6B5F7A"}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
