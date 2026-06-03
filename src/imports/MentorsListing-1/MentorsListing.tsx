import svgPaths from "./svg-d29qus47qt";
import imgImage from "./256d9888e94601d5c3ad0b35893b712ad1983479.png";
import imgImage1 from "./200308a276b1feba2bec4e28e27dda4b6aaab137.png";
import imgImage2 from "./9aecea038a5eba6222a77595fc22c0549d614720.png";
import imgImage3 from "./af1c850daadb743337a79569abbde7a01ce4354c.png";
import imgImage4 from "./9e04564b5d619027fe26e99798384a89ec7dbd7e.png";
import imgImage5 from "./a21445b6a5efdaefec15a6540ac50ce7fe9c4bf8.png";
import imgImage6 from "./4a29d0654aaab6716cd873400f7020bd2faded80.png";
import imgImage7 from "./44f0132e097541fab04aec7d33348dc2876131fb.png";
import imgImage8 from "./bb5b0e0896cc0396e3c8e2b6811f344da7f15455.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#fffeff] content-stretch flex flex-col gap-[12px] h-[40px] items-center justify-end max-h-[40px] pt-[12px] px-[16px] relative shrink-0" data-name="tab/chip">
        <div aria-hidden="true" className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#1a1128] text-[16px] text-center text-ellipsis tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[25px] overflow-hidden text-ellipsis">Discover</p>
        </div>
        <div className="bg-[#7d3aea] h-[2px] relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full" data-name="indicator" />
      </div>
      <div className="bg-[#fffeff] content-stretch flex h-[40px] items-center justify-center max-h-[40px] px-[16px] py-[12px] relative shrink-0" data-name="tab/chip">
        <div aria-hidden="true" className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#6b5f7a] text-[16px] text-center text-ellipsis whitespace-nowrap">
          <p className="leading-[24px] overflow-hidden text-ellipsis">Upcoming session</p>
        </div>
      </div>
    </div>
  );
}

function TabList() {
  return (
    <div className="content-stretch flex items-center pb-[8px] pt-[16px] px-[16px] relative shrink-0 w-[390px]" data-name="tab-list">
      <Frame />
    </div>
  );
}

function ProfileImage() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="profile-image">
      <div className="pointer-events-none relative rounded-[200px] shrink-0 size-[44px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img alt="" className="absolute h-[327.8%] left-[-52.67%] max-w-none top-[-49.22%] w-[218.31%]" src={imgImage} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]" />
      </div>
    </div>
  );
}

function TopMentorTag() {
  return (
    <div className="bg-gradient-to-l content-stretch flex from-[rgba(247,181,0,0.4)] items-center justify-center p-[8px] relative rounded-[2px] shrink-0 to-[rgba(254,250,225,0.4)]" data-name="top-mentor-tag">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">Top 1%</p>
      </div>
    </div>
  );
}

function MentorHeader() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="mentor-header">
      <ProfileImage />
      <TopMentorTag />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="container ">
          <path d={svgPaths.p38a0a900} fill="var(--fill-0, #1A1128)" id="full-star" />
        </g>
      </svg>
    </div>
  );
}

function RatingsCount() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.24px] whitespace-nowrap" data-name="ratings-count">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#433059]">
        <p className="leading-[18px]">4.9</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#9d90ad]">
        <p className="leading-[18px]">(120)</p>
      </div>
    </div>
  );
}

function MentorInfo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[0] relative shrink-0 w-full" data-name="mentor-info">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[16px] tracking-[0.16px] w-full">
        <p className="leading-[25px]">Shruti Jain</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#433059] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Sr. Fashion Designer @ MAX</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">7 yrs exp • EX - ZARA</p>
      </div>
    </div>
  );
}

function DiscountedPriceGroup() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="discounted-price-group">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[14px] tracking-[0.14px]">
        <p className="leading-[21px]">₹300</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px]">
        <p className="leading-[18px]">hr</p>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[2px] items-center leading-[0] min-w-px relative whitespace-nowrap" data-name="pricing">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[0px] tracking-[0.24px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] line-through text-[12px]">₹ 600</p>
      </div>
      <DiscountedPriceGroup />
    </div>
  );
}

function SaveButton() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="save-button">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="save">
        <div className="-translate-y-1/2 absolute aspect-[13.5/18.74962615966797] left-1/4 right-[20.83%] top-1/2" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 18">
            <path d={svgPaths.pbfd46c0} fill="var(--fill-0, #6B5F7A)" id="svg" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function MentorFooter() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="mentor-footer">
      <Pricing />
      <SaveButton />
    </div>
  );
}

function ProfileImage1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="profile-image">
      <div className="pointer-events-none relative rounded-[200px] shrink-0 size-[44px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img alt="" className="absolute h-[148.76%] left-[-0.4%] max-w-none top-[-23.81%] w-[99.07%]" src={imgImage1} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]" />
      </div>
    </div>
  );
}

function TopMentorTag1() {
  return (
    <div className="bg-gradient-to-l content-stretch flex from-[rgba(247,181,0,0.4)] items-center justify-center p-[8px] relative rounded-[2px] shrink-0 to-[rgba(254,250,225,0.4)]" data-name="top-mentor-tag">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">Top 1%</p>
      </div>
    </div>
  );
}

function MentorHeader1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="mentor-header">
      <ProfileImage1 />
      <TopMentorTag1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="container ">
          <path d={svgPaths.p38a0a900} fill="var(--fill-0, #1A1128)" id="full-star" />
        </g>
      </svg>
    </div>
  );
}

function RatingsCount1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.24px] whitespace-nowrap" data-name="ratings-count">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#433059]">
        <p className="leading-[18px]">4.7</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#9d90ad]">
        <p className="leading-[18px]">(120)</p>
      </div>
    </div>
  );
}

function MentorInfo1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[0] relative shrink-0 w-full" data-name="mentor-info">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[16px] tracking-[0.16px] w-full">
        <p className="leading-[25px]">Priya Mehta</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#433059] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Sr. Fashion Designer @ MAX</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">7 yrs exp • EX - Fab India</p>
      </div>
    </div>
  );
}

function DiscountedPriceGroup1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="discounted-price-group">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[14px] tracking-[0.14px]">
        <p className="leading-[21px]">₹400</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px]">
        <p className="leading-[18px]">hr</p>
      </div>
    </div>
  );
}

function Pricing1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[2px] items-center leading-[0] min-w-px relative whitespace-nowrap" data-name="pricing">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[0px] tracking-[0.24px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] line-through text-[12px]">₹ 600</p>
      </div>
      <DiscountedPriceGroup1 />
    </div>
  );
}

function SaveButton1() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="save-button">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="save">
        <div className="-translate-y-1/2 absolute aspect-[13.5/18.74962615966797] left-1/4 right-[20.83%] top-1/2" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 18">
            <path d={svgPaths.pbfd46c0} fill="var(--fill-0, #6B5F7A)" id="svg" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function MentorFooter1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="mentor-footer">
      <Pricing1 />
      <SaveButton1 />
    </div>
  );
}

function ProfileImage2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="profile-image">
      <div className="pointer-events-none relative rounded-[200px] shrink-0 size-[44px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img alt="" className="absolute h-[272.88%] left-[-51.35%] max-w-none top-[-69.35%] w-[181.73%]" src={imgImage2} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]" />
      </div>
    </div>
  );
}

function TopMentorTag2() {
  return (
    <div className="bg-gradient-to-l content-stretch flex from-[rgba(247,181,0,0.4)] items-center justify-center p-[8px] relative rounded-[2px] shrink-0 to-[rgba(254,250,225,0.4)]" data-name="top-mentor-tag">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">Top 1%</p>
      </div>
    </div>
  );
}

function MentorHeader2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="mentor-header">
      <ProfileImage2 />
      <TopMentorTag2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="container ">
          <path d={svgPaths.p38a0a900} fill="var(--fill-0, #1A1128)" id="full-star" />
        </g>
      </svg>
    </div>
  );
}

function RatingsCount2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.24px] whitespace-nowrap" data-name="ratings-count">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#433059]">
        <p className="leading-[18px]">4.7</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#9d90ad]">
        <p className="leading-[18px]">(120)</p>
      </div>
    </div>
  );
}

function MentorInfo2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[0] relative shrink-0 w-full" data-name="mentor-info">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[16px] tracking-[0.16px] w-full">
        <p className="leading-[25px]">Ravi Kumar</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#433059] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Sr. Fashion Designer @Myntra</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">{`8 yrs exp • EX - H&M`}</p>
      </div>
    </div>
  );
}

function DiscountedPriceGroup2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="discounted-price-group">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[14px] tracking-[0.14px]">
        <p className="leading-[21px]">₹300</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px]">
        <p className="leading-[18px]">hr</p>
      </div>
    </div>
  );
}

function Pricing2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[2px] items-center leading-[0] min-w-px relative whitespace-nowrap" data-name="pricing">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[0px] tracking-[0.24px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] line-through text-[12px]">₹ 550</p>
      </div>
      <DiscountedPriceGroup2 />
    </div>
  );
}

function SaveButton2() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="save-button">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="save">
        <div className="-translate-y-1/2 absolute aspect-[13.5/18.74962615966797] left-1/4 right-[20.83%] top-1/2" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 18">
            <path d={svgPaths.pbfd46c0} fill="var(--fill-0, #6B5F7A)" id="svg" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function MentorFooter2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="mentor-footer">
      <Pricing2 />
      <SaveButton2 />
    </div>
  );
}

function ProfileImage3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="profile-image">
      <div className="pointer-events-none relative rounded-[200px] shrink-0 size-[44px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img alt="" className="absolute h-[327.8%] left-[-52.67%] max-w-none top-[-49.22%] w-[218.31%]" src={imgImage3} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]" />
      </div>
    </div>
  );
}

function TopMentorTag3() {
  return (
    <div className="bg-gradient-to-l content-stretch flex from-[rgba(247,181,0,0.4)] items-center justify-center p-[8px] relative rounded-[2px] shrink-0 to-[rgba(254,250,225,0.4)]" data-name="top-mentor-tag">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">Top 1%</p>
      </div>
    </div>
  );
}

function MentorHeader3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="mentor-header">
      <ProfileImage3 />
      <TopMentorTag3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="container ">
          <path d={svgPaths.p38a0a900} fill="var(--fill-0, #1A1128)" id="full-star" />
        </g>
      </svg>
    </div>
  );
}

function RatingsCount3() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.24px] whitespace-nowrap" data-name="ratings-count">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#433059]">
        <p className="leading-[18px]">4.5</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#9d90ad]">
        <p className="leading-[18px]">(110)</p>
      </div>
    </div>
  );
}

function MentorInfo3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[0] relative shrink-0 w-full" data-name="mentor-info">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[16px] tracking-[0.16px] w-full">
        <p className="leading-[25px]">Sneha Patel</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#433059] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Fashion Designer @ W</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">{`5 yrs exp • EX - Levi's`}</p>
      </div>
    </div>
  );
}

function DiscountedPriceGroup3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="discounted-price-group">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[14px] tracking-[0.14px]">
        <p className="leading-[21px]">₹375</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px]">
        <p className="leading-[18px]">hr</p>
      </div>
    </div>
  );
}

function Pricing3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[2px] items-center leading-[0] min-w-px relative whitespace-nowrap" data-name="pricing">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[0px] tracking-[0.24px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] line-through text-[12px]">₹ 550</p>
      </div>
      <DiscountedPriceGroup3 />
    </div>
  );
}

function SaveButton3() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="save-button">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="save">
        <div className="-translate-y-1/2 absolute aspect-[13.5/18.74962615966797] left-1/4 right-[20.83%] top-1/2" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 18">
            <path d={svgPaths.pbfd46c0} fill="var(--fill-0, #6B5F7A)" id="svg" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function MentorFooter3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="mentor-footer">
      <Pricing3 />
      <SaveButton3 />
    </div>
  );
}

function MentorsList() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__fit-content(100%)_215px] max-w-[768px] min-w-[320px] relative shrink-0 w-full" data-name="mentors-list">
      <div className="bg-white justify-self-stretch max-w-[340px] min-w-[158px] relative rounded-[8px] self-start shrink-0" data-name="mentor-card">
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <MentorHeader />
          <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0 w-full" data-name="rating-group">
            <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative shrink-0 size-[16px]" data-name="star">
              <Container />
            </div>
            <RatingsCount />
          </div>
          <MentorInfo />
          <MentorFooter />
        </div>
      </div>
      <div className="bg-white justify-self-stretch max-w-[340px] min-w-[158px] relative rounded-[8px] self-start shrink-0" data-name="mentor-card">
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <MentorHeader1 />
          <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0 w-full" data-name="rating-group">
            <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative shrink-0 size-[16px]" data-name="star">
              <Container1 />
            </div>
            <RatingsCount1 />
          </div>
          <MentorInfo1 />
          <MentorFooter1 />
        </div>
      </div>
      <div className="bg-white justify-self-stretch max-w-[340px] min-w-[158px] relative rounded-[8px] self-start shrink-0" data-name="mentor-card">
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <MentorHeader2 />
          <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0 w-full" data-name="rating-group">
            <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative shrink-0 size-[16px]" data-name="star">
              <Container2 />
            </div>
            <RatingsCount2 />
          </div>
          <MentorInfo2 />
          <MentorFooter2 />
        </div>
      </div>
      <div className="bg-white justify-self-stretch max-w-[340px] min-w-[158px] relative rounded-[8px] self-start shrink-0" data-name="mentor-card">
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <MentorHeader3 />
          <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0 w-full" data-name="rating-group">
            <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative shrink-0 size-[16px]" data-name="star">
              <Container3 />
            </div>
            <RatingsCount3 />
          </div>
          <MentorInfo3 />
          <MentorFooter3 />
        </div>
      </div>
    </div>
  );
}

function TopRatedGeneralMentors() {
  return (
    <div className="relative shrink-0 w-full" data-name="top-rated-general-mentors">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center pb-[12px] pt-[20px] px-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[20px] w-full">
            <p className="leading-[28px]">Top rated mentors</p>
          </div>
          <MentorsList />
        </div>
      </div>
    </div>
  );
}

function ProfileImage4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="profile-image">
      <div className="pointer-events-none relative rounded-[200px] shrink-0 size-[44px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img alt="" className="absolute h-[336.09%] left-[-44.81%] max-w-none top-[-47.87%] w-[189.05%]" src={imgImage4} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]" />
      </div>
    </div>
  );
}

function MentorHeader4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="mentor-header">
      <ProfileImage4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="container ">
          <path d={svgPaths.p38a0a900} fill="var(--fill-0, #1A1128)" id="full-star" />
        </g>
      </svg>
    </div>
  );
}

function RatingsCount4() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.24px] whitespace-nowrap" data-name="ratings-count">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#433059]">
        <p className="leading-[18px]">4.6</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#9d90ad]">
        <p className="leading-[18px]">(75)</p>
      </div>
    </div>
  );
}

function MentorInfo4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[0] relative shrink-0 w-full" data-name="mentor-info">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[16px] tracking-[0.16px] w-full">
        <p className="leading-[25px]">Amit Sharma</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#433059] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Lead Fashion Designer @ Anita Dongre</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">10 yrs exp • EX - Mango</p>
      </div>
    </div>
  );
}

function DiscountedPriceGroup4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="discounted-price-group">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[14px] tracking-[0.14px]">
        <p className="leading-[21px]">₹250</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px]">
        <p className="leading-[18px]">hr</p>
      </div>
    </div>
  );
}

function Pricing4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[2px] items-center leading-[0] min-w-px relative whitespace-nowrap" data-name="pricing">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[0px] tracking-[0.24px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] line-through text-[12px]">₹ 580</p>
      </div>
      <DiscountedPriceGroup4 />
    </div>
  );
}

function SaveButton4() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="save-button">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="save">
        <div className="-translate-y-1/2 absolute aspect-[13.5/18.74962615966797] left-1/4 right-[20.83%] top-1/2" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 18">
            <path d={svgPaths.pbfd46c0} fill="var(--fill-0, #6B5F7A)" id="svg" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function MentorFooter4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="mentor-footer">
      <Pricing4 />
      <SaveButton4 />
    </div>
  );
}

function ProfileImage5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="profile-image">
      <div className="pointer-events-none relative rounded-[200px] shrink-0 size-[44px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img alt="" className="absolute h-[327.8%] left-[-96.44%] max-w-none top-[-43.27%] w-[218.31%]" src={imgImage5} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]" />
      </div>
    </div>
  );
}

function MentorHeader5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="mentor-header">
      <ProfileImage5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="container ">
          <path d={svgPaths.p38a0a900} fill="var(--fill-0, #1A1128)" id="full-star" />
        </g>
      </svg>
    </div>
  );
}

function RatingsCount5() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.24px] whitespace-nowrap" data-name="ratings-count">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#433059]">
        <p className="leading-[18px]">4.4</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#9d90ad]">
        <p className="leading-[18px]">(95)</p>
      </div>
    </div>
  );
}

function MentorInfo5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[0] relative shrink-0 w-full" data-name="mentor-info">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[16px] tracking-[0.16px] w-full">
        <p className="leading-[25px]">Neha Verma</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#433059] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Mid-Level Designer @ Biba</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">5 yrs exp • EX - Forever 21</p>
      </div>
    </div>
  );
}

function DiscountedPriceGroup5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="discounted-price-group">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[14px] tracking-[0.14px]">
        <p className="leading-[21px]">₹350</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px]">
        <p className="leading-[18px]">hr</p>
      </div>
    </div>
  );
}

function Pricing5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[2px] items-center leading-[0] min-w-px relative whitespace-nowrap" data-name="pricing">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[0px] tracking-[0.24px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] line-through text-[12px]">₹ 520</p>
      </div>
      <DiscountedPriceGroup5 />
    </div>
  );
}

function SaveButton5() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="save-button">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="save">
        <div className="-translate-y-1/2 absolute aspect-[13.5/18.74962615966797] left-1/4 right-[20.83%] top-1/2" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 18">
            <path d={svgPaths.pbfd46c0} fill="var(--fill-0, #6B5F7A)" id="svg" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function MentorFooter5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="mentor-footer">
      <Pricing5 />
      <SaveButton5 />
    </div>
  );
}

function ProfileImage6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="profile-image">
      <div className="pointer-events-none relative rounded-[200px] shrink-0 size-[44px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img alt="" className="absolute h-[209.19%] left-[-28.69%] max-w-none top-[0.8%] w-[167.26%]" src={imgImage6} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]" />
      </div>
    </div>
  );
}

function MentorHeader6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="mentor-header">
      <ProfileImage6 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="container ">
          <path d={svgPaths.p38a0a900} fill="var(--fill-0, #1A1128)" id="full-star" />
        </g>
      </svg>
    </div>
  );
}

function RatingsCount6() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.24px] whitespace-nowrap" data-name="ratings-count">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#433059]">
        <p className="leading-[18px]">4.3</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#9d90ad]">
        <p className="leading-[18px]">(90)</p>
      </div>
    </div>
  );
}

function MentorInfo6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[0] relative shrink-0 w-full" data-name="mentor-info">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[16px] tracking-[0.16px] w-full">
        <p className="leading-[25px]">Vikram Singh</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#433059] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Sr. Fashion Designer @ Manyavar</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">9 yrs exp • EX - Tommy Hilfiger</p>
      </div>
    </div>
  );
}

function DiscountedPriceGroup6() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center leading-[0] relative shrink-0 whitespace-nowrap" data-name="discounted-price-group">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[14px] tracking-[0.14px]">
        <p className="leading-[21px]">₹250</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px]">
        <p className="leading-[18px]">hr</p>
      </div>
    </div>
  );
}

function Pricing6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="pricing">
      <DiscountedPriceGroup6 />
    </div>
  );
}

function SaveButton6() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="save-button">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="save">
        <div className="-translate-y-1/2 absolute aspect-[13.5/18.74962615966797] left-1/4 right-[20.83%] top-1/2" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 18">
            <path d={svgPaths.pbfd46c0} fill="var(--fill-0, #6B5F7A)" id="svg" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function MentorFooter6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="mentor-footer">
      <Pricing6 />
      <SaveButton6 />
    </div>
  );
}

function ProfileImage7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="profile-image">
      <div className="pointer-events-none relative rounded-[200px] shrink-0 size-[44px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img alt="" className="absolute h-[235.55%] left-[-35.19%] max-w-none top-[-0.48%] w-[168.18%]" src={imgImage7} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]" />
      </div>
    </div>
  );
}

function MentorHeader7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="mentor-header">
      <ProfileImage7 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="container ">
          <path d={svgPaths.p38a0a900} fill="var(--fill-0, #1A1128)" id="full-star" />
        </g>
      </svg>
    </div>
  );
}

function RatingsCount7() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[0.24px] whitespace-nowrap" data-name="ratings-count">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#433059]">
        <p className="leading-[18px]">4.2</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#9d90ad]">
        <p className="leading-[18px]">(80)</p>
      </div>
    </div>
  );
}

function MentorInfo7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[0] relative shrink-0 w-full" data-name="mentor-info">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[16px] tracking-[0.16px] w-full">
        <p className="leading-[25px]">Priya Desai</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#433059] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Mid-Level Designer @ Biba</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">3 yrs exp • EX - Shein</p>
      </div>
    </div>
  );
}

function DiscountedPriceGroup7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="discounted-price-group">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128] text-[14px] tracking-[0.14px]">
        <p className="leading-[21px]">Free</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px]">
        <p className="leading-[18px]">​</p>
      </div>
    </div>
  );
}

function Pricing7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] gap-[2px] items-center leading-[0] min-w-px relative whitespace-nowrap" data-name="pricing">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-[0px] tracking-[0.24px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[18px] line-through text-[12px]">₹ 100</p>
      </div>
      <DiscountedPriceGroup7 />
    </div>
  );
}

function SaveButton7() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="save-button">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="save">
        <div className="-translate-y-1/2 absolute aspect-[13.5/18.74962615966797] left-1/4 right-[20.83%] top-1/2" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 18">
            <path d={svgPaths.pbfd46c0} fill="var(--fill-0, #6B5F7A)" id="svg" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function MentorFooter7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="mentor-footer">
      <Pricing7 />
      <SaveButton7 />
    </div>
  );
}

function MentorsList1() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__fit-content(100%)_215px] relative shrink-0 w-full" data-name="mentors-list">
      <div className="bg-white justify-self-stretch max-w-[340px] min-w-[158px] relative rounded-[8px] self-start shrink-0" data-name="mentor-card">
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <MentorHeader4 />
          <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0 w-full" data-name="rating-group">
            <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative shrink-0 size-[16px]" data-name="star">
              <Container4 />
            </div>
            <RatingsCount4 />
          </div>
          <MentorInfo4 />
          <MentorFooter4 />
        </div>
      </div>
      <div className="bg-white justify-self-stretch max-w-[340px] min-w-[158px] relative rounded-[8px] self-start shrink-0" data-name="mentor-card">
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <MentorHeader5 />
          <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0 w-full" data-name="rating-group">
            <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative shrink-0 size-[16px]" data-name="star">
              <Container5 />
            </div>
            <RatingsCount5 />
          </div>
          <MentorInfo5 />
          <MentorFooter5 />
        </div>
      </div>
      <div className="bg-white justify-self-stretch max-w-[340px] min-w-[158px] relative rounded-[8px] self-start shrink-0" data-name="mentor-card">
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <MentorHeader6 />
          <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0 w-full" data-name="rating-group">
            <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative shrink-0 size-[16px]" data-name="star">
              <Container6 />
            </div>
            <RatingsCount6 />
          </div>
          <MentorInfo6 />
          <MentorFooter6 />
        </div>
      </div>
      <div className="bg-white justify-self-stretch max-w-[340px] min-w-[158px] relative rounded-[8px] self-start shrink-0" data-name="mentor-card">
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <MentorHeader7 />
          <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0 w-full" data-name="rating-group">
            <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative shrink-0 size-[16px]" data-name="star">
              <Container7 />
            </div>
            <RatingsCount7 />
          </div>
          <MentorInfo7 />
          <MentorFooter7 />
        </div>
      </div>
    </div>
  );
}

function MentorsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[768px] min-w-[320px] relative shrink-0 w-full" data-name="mentors-container">
      <MentorsList1 />
      <div className="h-[48px] max-h-[48px] min-h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="primary-button">
        <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center max-h-[inherit] min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7d3aea] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
              <p className="leading-[20px]">View More</p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-icon">
              <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Svg">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5008 9.00101">
                  <path d={svgPaths.p13567b00} fill="var(--fill-0, #7D3AEA)" id="Svg" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PickedForYouMentors() {
  return (
    <div className="max-w-[768px] min-w-[320px] relative shrink-0 w-full" data-name="picked-for-you-mentors">
      <div className="flex flex-col items-center max-w-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[inherit] min-w-[inherit] pb-[12px] pt-[20px] px-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[20px] w-full">
            <p className="leading-[28px]">Picked for you</p>
          </div>
          <MentorsContainer />
        </div>
      </div>
    </div>
  );
}

function MentorsContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="mentors-content">
      <TopRatedGeneralMentors />
      <PickedForYouMentors />
    </div>
  );
}

function MentorsScreenContent() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[768px] min-w-[360px] top-[108px] w-[390px]" data-name="mentors-screen-content">
      <TabList />
      <MentorsContent />
    </div>
  );
}

function IOsIconSmallMobileSignal() {
  return (
    <div className="h-[15.385px] relative shrink-0 w-[19.231px]" data-name="iOS / icon / small / Mobile Signal">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2308 15.3846">
        <g id="iOS / icon / small / Mobile Signal">
          <path d={svgPaths.p34f07b00} fill="var(--fill-0, #1A1128)" id="Time" />
        </g>
      </svg>
    </div>
  );
}

function NetworkIcons() {
  return (
    <div className="relative shrink-0 size-[15.385px]" data-name="NetworkIcons">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3846 15.3846">
        <g id="NetworkIcons">
          <path d={svgPaths.p19e22200} fill="var(--fill-0, #1A1128)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[15.385px] relative shrink-0 w-[24.038px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0385 15.3846">
        <g id="Battery">
          <path d={svgPaths.p19d3a300} id="outline border" opacity="0.35" stroke="var(--stroke-0, #9D94AA)" strokeOpacity="0.4" strokeWidth="0.961538" />
          <path d={svgPaths.p2a856600} fill="var(--fill-0, #1A1128)" id="node" opacity="0.4" />
          <path d={svgPaths.p3ec88600} fill="var(--fill-0, #1A1128)" id="charge" />
        </g>
      </svg>
    </div>
  );
}

function Indicators() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="indicators">
      <IOsIconSmallMobileSignal />
      <NetworkIcons />
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="bg-[#fffeff] content-stretch flex h-[44px] items-center justify-between overflow-clip px-[16px] py-[8px] relative shrink-0 w-[390px]" data-name="status-bar">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[20.192px] min-w-px relative text-[#1a1128] text-[14.423px] tracking-[-0.3077px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
      <Indicators />
    </div>
  );
}

function SearchInput() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[4px]" data-name="search-input">
      <div aria-hidden="true" className="absolute border border-[rgba(157,148,170,0.4)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[4px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="search">
            <div className="absolute inset-[9.29%_9.37%_9.37%_9.29%]" data-name="Svg">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0141 13.0141">
                <path d={svgPaths.p2bb90e00} fill="var(--fill-0, #6B5F7A)" id="Svg" />
              </svg>
            </div>
          </div>
          <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#6b5f7a] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[21px] overflow-hidden text-ellipsis">Search mentors, skills, domain</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] h-[40px] items-center min-w-px relative" data-name="search-content">
      <SearchInput />
    </div>
  );
}

function FilterAction() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="filter-action">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="funnel">
        <div className="-translate-y-1/2 absolute aspect-[19.49766731262207/18.00037384033203] left-[12.5%] right-[12.5%] top-1/2" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
            <path d={svgPaths.p30a01380} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeaderActions() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center relative shrink-0" data-name="header-actions">
      <FilterAction />
    </div>
  );
}

function TopBar() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fffeff] content-stretch flex flex-col items-start left-1/2 top-0 w-[390px]" data-name="top-bar">
      <StatusBar />
      <div className="bg-[#fffeff] relative shrink-0 w-full" data-name="header">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center px-[16px] py-[12px] relative size-full">
            <SearchContent />
            <HeaderActions />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[50px] items-center px-[4px] py-[2px] relative shrink-0 w-[58px]" data-name="nav-item">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="home">
        <div className="absolute inset-[9.37%_12.5%_12.5%_12.5%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.7502">
            <path d={svgPaths.p3cb33200} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[21px]">Home</p>
      </div>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[50px] items-center justify-center px-[4px] relative shrink-0 w-[58px]" data-name="nav-item">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="job">
        <div className="absolute inset-[9.38%_9.38%_15.63%_9.38%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 18">
            <path d={svgPaths.p37245000} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#6b5f7a] text-[14px] text-center w-[min-content]">
        <p className="leading-[21px]">Jobs</p>
      </div>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[50px] items-center justify-center px-[4px] relative shrink-0 w-[58px]" data-name="nav-item">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="plus">
        <div className="absolute inset-[12.5%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.pc4f6100} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#6b5f7a] text-[14px] text-center w-[min-content]">
        <p className="leading-[21px]">Post</p>
      </div>
    </div>
  );
}

function NavItem3() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[50px] items-center px-[4px] relative shrink-0 w-[58px]" data-name="nav-item">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mentors">
        <div className="-translate-y-1/2 absolute aspect-[23.583908081054688/15.002283096313477] left-[8.33%] right-[8.33%] top-[calc(50%-0.5px)]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
            <path d={svgPaths.p1bea1d70} fill="var(--fill-0, #1A1128)" id="Svg" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[21px]">Mentors</p>
      </div>
    </div>
  );
}

function NavItem4() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[50px] items-center justify-center px-[4px] relative shrink-0 w-[58px]" data-name="nav-item">
      <div className="bg-[#fffeff] content-stretch flex items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="profile">
        <div className="relative rounded-[24px] shrink-0 size-[18px]" data-name="image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
            <img alt="" className="absolute h-[353.74%] left-[-79.64%] max-w-none top-[-54.26%] w-[235.82%]" src={imgImage8} />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[21px]">Profile</p>
      </div>
    </div>
  );
}

function BottomSafeArea() {
  return (
    <div className="bg-white h-[46px] relative shrink-0 w-[390px]" data-name="bottom-safe-area">
      <div className="-translate-x-1/2 absolute bg-[#1a1128] bottom-[7.69px] h-[4.808px] left-1/2 rounded-[200px] w-[128.846px]" data-name="home-indicator" />
    </div>
  );
}

function BottomNav() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch drop-shadow-[0px_1px_2px_rgba(200,192,212,0.6)] flex flex-col items-center left-1/2 max-w-[800px] min-w-[360px] w-[390px]" data-name="bottom-nav">
      <div className="bg-white content-stretch drop-shadow-[0px_-1px_2px_rgba(200,192,212,0.6)] flex gap-[12px] h-[68px] items-center justify-center px-[16px] py-[8px] relative shrink-0 w-[390px]" data-name="bottom-nav">
        <NavItem />
        <NavItem1 />
        <NavItem2 />
        <NavItem3 />
        <NavItem4 />
      </div>
      <BottomSafeArea />
    </div>
  );
}

export default function MentorsListing() {
  return (
    <div className="bg-[#fffeff] relative size-full" data-name="mentors/listing">
      <MentorsScreenContent />
      <TopBar />
      <BottomNav />
    </div>
  );
}