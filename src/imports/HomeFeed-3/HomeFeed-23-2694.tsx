import svgPaths from "./svg-807sgpkayr";
import imgPostImage01 from "./9b9825967a487a46eb220eafbeb9846153a9b187.png";
import imgImage from "./22a618f0acbc96cb390eccb456b612e531e62706.png";
import imgAvatarImage1 from "./733e8cf72a0fc5655efdb377f7a418e9263541e1.png";
import imgPostImage02 from "./2237e23c0b0a917e12372a61adebbe568838af3e.png";
import imgAvatarImage from "./5e72ee9d7d7c503b8d808c6f856192019f6d2e26.png";
import imgAvatarImage2 from "./302a8171bbddedbee08d110930e4a4d9860625ed.png";
import imgCreativeCard01 from "./2c2355387ac373692cffca7ca8c2506de23c4435.png";
import imgCreativeCard02 from "./05dd7c8d14a43160151764b990777fe1c7136131.png";
import imgCreativeCard03 from "./e6303e8f0e0306433072d30c7b018509d8b10041.png";
import imgCreativeCard04 from "./de0d3d2ddba7f7f644a7adb44db0021a0f01e36d.png";
import imgPostImage2 from "./fc872e61dc9faf56d7250cef8f2c4c41196d57da.png";
import imgAvatarImage3 from "./03a40532a3f775fa0602f3aa80f7e17e44cdc2cd.png";
import imgPromoImage from "./7d4d7f01fddb9b53ad927532e884890ec05dedee.png";
import imgPromoImage1 from "./cc4e7259abc400810d9f6971b03ec64ce45a0c06.png";
import imgPromoImage2 from "./6470fe0aa7b4e6b1e00d8e32bc429a4545125d0d.png";
import imgPromoImage3 from "./0ac8ae9d3d28473bf876c063463f1a287b18fce5.png";
import imgImage1 from "./28d13f96340cd4282fa71f71e505e234b4902350.png";
import imgPostImage3 from "./43396b0d46c184012a4997b17cf3f71f31a40883.png";
import imgAvatarImage4 from "./bb4ae9acbf1717477721a1ac665229d89c11f830.png";
import imgPostImage4 from "./65db2a88ad9aef51f6a8fa6095b21715e5c54a29.png";
import imgImage2 from "./0cbc38f58cc3a3bcd0b44baafde4ddc2b85b6aa5.png";
import imgAvatarImage5 from "./a95e6c88f73b1e84acd4af965b924859220e4a21.png";
import imgImage3 from "./bb5b0e0896cc0396e3c8e2b6811f344da7f15455.png";

function EngagementActionBadge() {
  return (
    <div className="bg-[rgba(26,26,26,0.6)] col-1 content-stretch flex items-center justify-center ml-[12px] mt-[9px] p-[4px] relative rounded-[200px] row-1" data-name="engagement-action-badge">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="repeat">
        <div className="absolute inset-[12.5%_9.37%]" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75059 9.00059">
            <path d={svgPaths.p34b7e900} fill="var(--fill-0, white)" id="svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function EngagementBadge() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="engagement-badge">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="brand-logo">
        <div className="-translate-y-1/2 absolute aspect-[20/20] left-0 right-0 rounded-[200px] top-1/2" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full" src={imgImage} />
        </div>
      </div>
      <EngagementActionBadge />
    </div>
  );
}

function EngagementOverlay() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[46px] items-center leading-[0] min-h-[46px] p-[8px] relative rounded-[8px] shrink-0" data-name="engagement-overlay">
      <EngagementBadge />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#2d2040] text-[12px] text-ellipsis tracking-[0.24px] w-[138px] whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Sr. Designer from Sabyasachi</p>
      </div>
    </div>
  );
}

function EngagementContainer() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-center left-0 p-[16px]" data-name="engagement-container">
      <EngagementOverlay />
    </div>
  );
}

function PostContent() {
  return (
    <div className="aspect-[390/348] relative shrink-0 w-full" data-name="post-content">
      <div className="-translate-y-1/2 absolute aspect-[390/348] left-0 right-0 top-1/2" data-name="post-image-01">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[112.28%] left-[-0.08%] max-w-none top-[-3.7%] w-full" src={imgPostImage01} />
          </div>
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(26,26,26,0.12)]" />
        </div>
      </div>
      <EngagementContainer />
    </div>
  );
}

function CreatorMeta() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="creator-meta">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#1a1128] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px]">Sanyam Kumar</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[14px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[21px] overflow-hidden text-ellipsis">Textile Designer</p>
      </div>
    </div>
  );
}

function AuthorDetails() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-w-px relative" data-name="author-details">
      <CreatorMeta />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#9d90ad] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Seeking Internship</p>
      </div>
    </div>
  );
}

function AuthorProfile() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="author-profile">
      <div className="relative shrink-0 size-[48px]" data-name="avatar">
        <div className="absolute inset-0 rounded-[200px]" data-name="avatar-image-1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[200px]">
            <img alt="" className="absolute h-[305.94%] left-[-60.12%] max-w-none top-[-64.1%] w-[204.03%]" src={imgAvatarImage1} />
          </div>
        </div>
      </div>
      <AuthorDetails />
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

function AuthorInfo() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="author-info">
      <AuthorProfile />
      <SaveButton />
    </div>
  );
}

function PostHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="post-header">
      <AuthorInfo />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#1a1128] text-[14px] text-ellipsis w-full">
        <p className="leading-[21px]">{`A Rajasthan-inspired dome brought to life through the richness of Indian art. `}</p>
      </div>
    </div>
  );
}

function PostDetails() {
  return (
    <div className="relative shrink-0 w-full" data-name="post-details">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[20px] pt-[12px] px-[16px] relative size-full">
        <PostHeader />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] text-right tracking-[0.24px] w-full">
          <p className="leading-[18px]">26 July</p>
        </div>
      </div>
    </div>
  );
}

function EngagementContainer1() {
  return <div className="absolute bottom-0 content-stretch flex flex-col h-[78px] items-center justify-center left-0 p-[16px] w-[226px]" data-name="engagement-container" />;
}

function PostContent1() {
  return (
    <div className="aspect-[390/348] relative shrink-0 w-full" data-name="post-content">
      <div className="-translate-y-1/2 absolute aspect-[390/348] left-0 right-0 top-1/2" data-name="post-image-02">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPostImage02} />
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(26,26,26,0.12)]" />
        </div>
      </div>
      <EngagementContainer1 />
    </div>
  );
}

function AvatarPrimary() {
  return (
    <div className="absolute left-0 overflow-clip size-[32px] top-0" data-name="avatar-primary">
      <div className="absolute aspect-[800/800] left-0 pointer-events-none right-0 rounded-bl-[200px] rounded-tl-[200px] rounded-tr-[200px] top-0" data-name="avatar-image">
        <div className="absolute inset-0 overflow-hidden rounded-bl-[200px] rounded-tl-[200px] rounded-tr-[200px]">
          <img alt="" className="absolute h-[119.57%] left-[-22.1%] max-w-none top-[-2.9%] w-[179.36%]" src={imgAvatarImage} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-bl-[200px] rounded-tl-[200px] rounded-tr-[200px]" />
      </div>
    </div>
  );
}

function AvatarSecondary() {
  return (
    <div className="absolute left-[16px] overflow-clip size-[32px] top-[16px]" data-name="avatar-secondary">
      <div className="absolute aspect-[800/800] bottom-0 left-0 pointer-events-none right-0 rounded-br-[200px] rounded-tl-[200px] rounded-tr-[200px]" data-name="avatar-image">
        <div className="absolute inset-0 overflow-hidden rounded-br-[200px] rounded-tl-[200px] rounded-tr-[200px]">
          <img alt="" className="absolute h-[368%] left-[-47.39%] max-w-none top-[-140.08%] w-[245.33%]" src={imgAvatarImage2} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-br-[200px] rounded-tl-[200px] rounded-tr-[200px] shadow-[-1px_0px_2px_0px_rgba(26,26,26,0.15)]" />
      </div>
    </div>
  );
}

function CreatorMeta1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="creator-meta">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#2d2040] text-[0px] text-ellipsis tracking-[0.16px] w-full">
        <p className="text-[16px]">
          <span className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px]">Neha Jain</span>
          <span className="font-['Manrope:Regular',sans-serif] font-normal leading-[18px] text-[#433059] text-[12px] tracking-[0.24px]">{` `}</span>
          <span className="font-['Manrope:Regular',sans-serif] font-normal leading-[18px] text-[#433059] text-[12px] tracking-[0.24px]">co-create with</span>
          <span className="font-['Manrope:Medium',sans-serif] font-medium leading-[25px]">{` 2 Others`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[14px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[21px] overflow-hidden text-ellipsis">Fashion Designer</p>
      </div>
    </div>
  );
}

function AuthorDetails1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-w-px relative" data-name="author-details">
      <CreatorMeta1 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#9d90ad] text-[12px] text-ellipsis tracking-[0.24px] w-full whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Seeking Full time</p>
      </div>
    </div>
  );
}

function AuthorProfile1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="author-profile">
      <div className="relative shrink-0 size-[48px]" data-name="avatar">
        <AvatarPrimary />
        <AvatarSecondary />
      </div>
      <AuthorDetails1 />
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

function AuthorInfo1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="author-info">
      <AuthorProfile1 />
      <SaveButton1 />
    </div>
  );
}

function PostHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="post-header">
      <AuthorInfo1 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#1a1128] text-[14px] text-ellipsis w-full">
        <p className="leading-[21px]">A Celebration of Resilience, Beauty, and Feminine Power.</p>
      </div>
    </div>
  );
}

function PostDetails1() {
  return (
    <div className="relative shrink-0 w-full" data-name="post-details">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[20px] pt-[12px] px-[16px] relative size-full">
        <PostHeader1 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] text-right tracking-[0.24px] w-full">
          <p className="leading-[18px]">25 July</p>
        </div>
      </div>
    </div>
  );
}

function Heding() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="heding">
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[20px] whitespace-nowrap">
        <p className="leading-[28px]">Creative momentum</p>
      </div>
      <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="decoration">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146 1">
            <path d="M0 0.5H146" id="decoration" stroke="var(--stroke-0, #E2D9EF)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Caption() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex items-center justify-center left-1/2 px-[12px] py-[16px] w-[240px]" data-name="caption">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[16px] text-center text-ellipsis text-white w-[210px]">
        <p className="leading-[24px]">Floral fashion makes its bold comeback.</p>
      </div>
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="eye">
          <path d={svgPaths.p1e1a2a80} fill="var(--fill-0, white)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function Views() {
  return (
    <div className="absolute bg-[rgba(26,26,26,0.6)] content-stretch flex gap-[8px] items-center left-[148px] px-[8px] py-[4px] rounded-[4px] top-[16px]" data-name="views">
      <Eye />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">2.5k</p>
      </div>
    </div>
  );
}

function Caption1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex items-center justify-center left-1/2 px-[12px] py-[16px] w-[240px]" data-name="caption">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[16px] text-center text-ellipsis text-white w-[210px]">
        <p className="leading-[24px]">Maximalist glamour is everywhere this season.</p>
      </div>
    </div>
  );
}

function Eye1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="eye">
          <path d={svgPaths.p1e1a2a80} fill="var(--fill-0, white)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function Views1() {
  return (
    <div className="absolute bg-[rgba(26,26,26,0.6)] content-stretch flex gap-[8px] items-center left-[148px] px-[8px] py-[4px] rounded-[4px] top-[16px]" data-name="views">
      <Eye1 />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">2.1k</p>
      </div>
    </div>
  );
}

function Caption2() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex items-center justify-center left-1/2 px-[12px] py-[16px] w-[240px]" data-name="caption">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[16px] text-center text-ellipsis text-white w-[210px]">
        <p className="leading-[24px]">Men’s Footwear Trends Unveiled at Pitti Uomo’s Fall 2026 Edition.</p>
      </div>
    </div>
  );
}

function Eye2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="eye">
          <path d={svgPaths.p1e1a2a80} fill="var(--fill-0, white)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function Views2() {
  return (
    <div className="absolute bg-[rgba(26,26,26,0.6)] content-stretch flex gap-[8px] items-center left-[148px] px-[8px] py-[4px] rounded-[4px] top-[16px]" data-name="views">
      <Eye2 />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">1.4k</p>
      </div>
    </div>
  );
}

function Caption3() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex items-center justify-center left-1/2 px-[12px] py-[16px] w-[240px]" data-name="caption">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[16px] text-center text-ellipsis text-white w-[210px]">
        <p className="leading-[24px]">Jackets redefine fashion now.</p>
      </div>
    </div>
  );
}

function Eye3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="eye">
          <path d={svgPaths.p1e1a2a80} fill="var(--fill-0, white)" id="svg" />
        </g>
      </svg>
    </div>
  );
}

function Views3() {
  return (
    <div className="absolute bg-[rgba(26,26,26,0.6)] content-stretch flex gap-[8px] items-center left-[148px] px-[8px] py-[4px] rounded-[4px] top-[16px]" data-name="views">
      <Eye3 />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
        <p className="leading-[24px]">952</p>
      </div>
    </div>
  );
}

function MomentumCarousel() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[358px]" data-name="momentum-carousel">
      <div className="h-[300px] overflow-clip relative rounded-[8px] shrink-0 w-[240px]" data-name="creative-momentum-card">
        <div className="-translate-y-1/2 absolute aspect-[240/300] left-0 right-0 top-1/2" data-name="creative-card-01">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCreativeCard01} />
        </div>
        <Caption />
        <Views />
      </div>
      <div className="h-[300px] overflow-clip relative rounded-[8px] shrink-0 w-[240px]" data-name="creative-momentum-card">
        <div className="-translate-y-1/2 absolute aspect-[240/300] left-0 right-0 top-1/2" data-name="creative-card-02">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgCreativeCard02} />
            <div className="absolute bg-gradient-to-b from-[53.333%] from-[rgba(106,81,82,0)] inset-0 to-[84.667%] to-[rgba(26,17,40,0.8)]" />
          </div>
        </div>
        <Caption1 />
        <Views1 />
      </div>
      <div className="h-[300px] overflow-clip relative rounded-[8px] shrink-0 w-[240px]" data-name="creative-momentum-card">
        <div className="-translate-y-1/2 absolute aspect-[240/300] left-0 right-0 top-1/2" data-name="creative-card-03">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCreativeCard03} />
        </div>
        <Caption2 />
        <Views2 />
      </div>
      <div className="h-[300px] overflow-clip relative rounded-[8px] shrink-0 w-[240px]" data-name="creative-momentum-card">
        <div className="-translate-y-1/2 absolute aspect-[240/300] left-0 right-0 top-1/2" data-name="creative-card-04">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCreativeCard04} />
        </div>
        <Caption3 />
        <Views3 />
      </div>
    </div>
  );
}

function CreativeMomentumSection() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="creative-momentum-section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pb-[24px] pt-[16px] px-[16px] relative size-full">
          <Heding />
          <MomentumCarousel />
        </div>
      </div>
    </div>
  );
}

function EngagementContainer2() {
  return <div className="absolute bottom-0 content-stretch flex flex-col h-[78px] items-center justify-center left-0 p-[16px] w-[226px]" data-name="engagement-container" />;
}

function PostContent2() {
  return (
    <div className="aspect-[390/348] relative shrink-0 w-full" data-name="post-content">
      <div className="-translate-y-1/2 absolute aspect-[390/348] left-0 right-0 top-1/2" data-name="post-image-01">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPostImage2} />
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(26,26,26,0.12)]" />
        </div>
      </div>
      <EngagementContainer2 />
    </div>
  );
}

function CreatorMeta2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] relative shrink-0 w-full" data-name="creator-meta">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#1a1128] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px]">Arpita Sharma</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[14px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[21px] overflow-hidden text-ellipsis">Jewellery Designer @Rubas</p>
      </div>
    </div>
  );
}

function AuthorDetails2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="author-details">
      <CreatorMeta2 />
    </div>
  );
}

function AuthorProfile2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="author-profile">
      <div className="relative shrink-0 size-[48px]" data-name="avatar">
        <div className="absolute inset-0 rounded-[200px]" data-name="avatar-image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[200px]">
            <img alt="" className="absolute h-[147.19%] left-0 max-w-none top-[-1.41%] w-full" src={imgAvatarImage3} />
          </div>
        </div>
      </div>
      <AuthorDetails2 />
    </div>
  );
}

function SaveButton2() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="save-button">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="save">
        <div className="-translate-y-1/2 absolute aspect-[13.5/18.74962615966797] left-1/4 right-[20.83%] top-1/2" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 18">
            <path d={svgPaths.pbfd46c0} fill="var(--fill-0, white)" id="svg" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function AuthorInfo2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="author-info">
      <AuthorProfile2 />
      <SaveButton2 />
    </div>
  );
}

function PostHeader2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="post-header">
      <AuthorInfo2 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#1a1128] text-[14px] text-ellipsis w-full">
        <p className="leading-[21px]">A Rajasthani jewelry showcases vibrant colors, intricate craftsmanship, and royal heritage.</p>
      </div>
    </div>
  );
}

function PostDetails2() {
  return (
    <div className="relative shrink-0 w-full" data-name="post-details">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[20px] pt-[12px] px-[16px] relative size-full">
        <PostHeader2 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] text-right tracking-[0.24px] w-full">
          <p className="leading-[18px]">25 July</p>
        </div>
      </div>
    </div>
  );
}

function PromoCard() {
  return (
    <div className="h-[291px] overflow-clip relative rounded-[4px] shrink-0 w-[292px]" data-name="promo-card-1">
      <div className="-translate-y-1/2 absolute h-[291px] left-0 right-0 top-1/2" data-name="promo-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPromoImage} />
      </div>
    </div>
  );
}

function PromoCard1() {
  return (
    <div className="h-[291px] overflow-clip relative rounded-[4px] shrink-0 w-[292px]" data-name="promo-card-2">
      <div className="-translate-y-1/2 absolute h-[291px] left-0 right-0 top-1/2" data-name="promo-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPromoImage1} />
      </div>
    </div>
  );
}

function PromoCard2() {
  return (
    <div className="h-[291px] overflow-clip relative rounded-[4px] shrink-0 w-[292px]" data-name="promo-card-3">
      <div className="-translate-y-1/2 absolute h-[291px] left-0 right-0 top-1/2" data-name="promo-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPromoImage2} />
      </div>
    </div>
  );
}

function PromoCard3() {
  return (
    <div className="h-[291px] overflow-clip relative rounded-[4px] shrink-0 w-[292px]" data-name="promo-card-4">
      <div className="-translate-y-1/2 absolute h-[291px] left-0 right-0 top-1/2" data-name="promo-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPromoImage3} />
      </div>
    </div>
  );
}

function PromoImagesCarousel() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] relative shrink-0 w-[390px]" data-name="promo-images-carousel">
      <PromoCard />
      <PromoCard1 />
      <PromoCard2 />
      <PromoCard3 />
      <div className="bg-white h-[291px] relative shrink-0 w-[8px]" data-name="carousel-spacer" />
    </div>
  );
}

function BrandLogo() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="brand-logo">
      <div className="absolute inset-0 rounded-[200px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function BrandDeatils() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col h-full items-start leading-[0] relative shrink-0 w-[254px]" data-name="brand-deatils">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#1a1128] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px]">Manish Malhotra</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[14px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[21px] overflow-hidden text-ellipsis">{`Job Opportunity `}</p>
      </div>
    </div>
  );
}

function BrandInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="brand-info">
      <BrandLogo />
      <div className="flex flex-row items-center self-stretch">
        <BrandDeatils />
      </div>
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

function BrandHeaderRow() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="brand-header-row">
      <BrandInfo />
      <SaveButton3 />
    </div>
  );
}

function BrandJobPostingDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="brand-job-posting-details">
      <BrandHeaderRow />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#1a1128] text-[14px] text-ellipsis w-full">
        <p className="leading-[21px]">An exciting chance to join one of India’s fashion houses apply now and step into the world of high fashion.</p>
      </div>
    </div>
  );
}

function PostActions() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="post-actions">
      <div className="bg-gradient-to-r from-[#7d3aea] h-[48px] max-h-[48px] min-h-[48px] relative rounded-[8px] shrink-0 to-[#5e28b5] w-full" data-name="primary-button">
        <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center max-h-[inherit] min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">
              <p className="leading-[20px]">Quick Apply</p>
            </div>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] text-right tracking-[0.24px] w-[358px]">
        <p className="leading-[18px]">21 July</p>
      </div>
    </div>
  );
}

function PostDetails3() {
  return (
    <div className="bg-[#fffeff] content-stretch flex flex-col gap-[12px] items-start pb-[24px] pt-[12px] px-[16px] relative shrink-0 w-[390px]" data-name="post-details">
      <BrandJobPostingDetails />
      <PostActions />
    </div>
  );
}

function BrandJobCard() {
  return (
    <div className="bg-[#fffeff] content-stretch flex flex-col items-center relative shrink-0" data-name="brand-job-card">
      <PromoImagesCarousel />
      <PostDetails3 />
    </div>
  );
}

function BrandJobPost() {
  return (
    <div className="bg-white content-stretch flex items-center overflow-clip pt-[8px] relative shrink-0 w-full" data-name="brand-job-post">
      <BrandJobCard />
    </div>
  );
}

function EngagementContainer3() {
  return <div className="absolute bottom-0 content-stretch flex flex-col h-[78px] items-center justify-center left-0 p-[16px] w-[226px]" data-name="engagement-container" />;
}

function PostContent3() {
  return (
    <div className="aspect-[390/348] relative shrink-0 w-full" data-name="post-content">
      <div className="-translate-y-1/2 absolute aspect-[390/348] left-0 right-0 top-1/2" data-name="post-image-01">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgPostImage3} />
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(26,26,26,0.12)]" />
        </div>
      </div>
      <EngagementContainer3 />
    </div>
  );
}

function CreatorMeta3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] relative shrink-0 w-full" data-name="creator-meta">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#1a1128] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px]">Kamini Singh</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[14px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[21px] overflow-hidden text-ellipsis">Fashion Designer</p>
      </div>
    </div>
  );
}

function AuthorDetails3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="author-details">
      <CreatorMeta3 />
    </div>
  );
}

function AuthorProfile3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="author-profile">
      <div className="relative shrink-0 size-[48px]" data-name="avatar">
        <div className="absolute inset-0 rounded-[200px]" data-name="avatar-image">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[200px]">
            <img alt="" className="absolute h-[150.1%] left-0 max-w-none top-[-3.26%] w-full" src={imgAvatarImage4} />
          </div>
        </div>
      </div>
      <AuthorDetails3 />
    </div>
  );
}

function SaveButton4() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="save-button">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="save">
        <div className="-translate-y-1/2 absolute aspect-[13.5/18.74962615966797] left-1/4 right-[20.83%] top-1/2" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 18">
            <path d={svgPaths.pbfd46c0} fill="var(--fill-0, white)" id="svg" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function AuthorInfo3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="author-info">
      <AuthorProfile3 />
      <SaveButton4 />
    </div>
  );
}

function PostHeader3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="post-header">
      <AuthorInfo3 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#1a1128] text-[14px] text-ellipsis w-full">
        <p className="leading-[21px]">Denim dreams stitched with confidence and runway elegance.</p>
      </div>
    </div>
  );
}

function PostDetails4() {
  return (
    <div className="relative shrink-0 w-full" data-name="post-details">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[20px] pt-[12px] px-[16px] relative size-full">
        <PostHeader3 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] text-right tracking-[0.24px] w-full">
          <p className="leading-[18px]">20 July</p>
        </div>
      </div>
    </div>
  );
}

function EngagementActionBadge1() {
  return (
    <div className="bg-[rgba(26,26,26,0.6)] col-1 content-stretch flex items-center justify-center ml-[12px] mt-[9px] p-[4px] relative rounded-[200px] row-1" data-name="engagement-action-badge">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="hands-clapping">
        <div className="-translate-y-1/2 absolute aspect-[20.99896240234375/24.00555419921875] left-[16.67%] right-[12.5%] top-1/2" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.5 9.71701">
            <path d={svgPaths.p358bfa00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function EngagementBadge1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="engagement-badge">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="brand-logo">
        <div className="-translate-y-1/2 absolute aspect-[20/20] left-0 right-0 rounded-[200px] top-1/2" data-name="image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full" src={imgImage2} />
        </div>
      </div>
      <EngagementActionBadge1 />
    </div>
  );
}

function EngagementOverlay1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[46px] items-center leading-[0] min-h-[46px] p-[8px] relative rounded-[8px] shrink-0" data-name="engagement-overlay">
      <EngagementBadge1 />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#2d2040] text-[12px] text-ellipsis tracking-[0.24px] w-[138px] whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden text-ellipsis">Sr. Designer from Papa Dont’ Preach</p>
      </div>
    </div>
  );
}

function EngagementContainer4() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-center left-0 p-[16px]" data-name="engagement-container">
      <EngagementOverlay1 />
    </div>
  );
}

function PostContent4() {
  return (
    <div className="aspect-[390/348] relative shrink-0 w-full" data-name="post-content">
      <div className="-translate-y-1/2 absolute aspect-[390/348] left-0 right-0 top-1/2" data-name="post-image-01">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[112.07%] left-0 max-w-none top-[-4.23%] w-full" src={imgPostImage4} />
        </div>
      </div>
      <EngagementContainer4 />
    </div>
  );
}

function CreatorMeta4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] relative shrink-0 w-full" data-name="creator-meta">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#1a1128] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px]">Aayush Kumar</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[14px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[21px] overflow-hidden text-ellipsis">Accessory Designer</p>
      </div>
    </div>
  );
}

function AuthorDetails4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="author-details">
      <CreatorMeta4 />
    </div>
  );
}

function AuthorProfile4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="author-profile">
      <div className="relative shrink-0 size-[48px]" data-name="avatar">
        <div className="absolute inset-0 rounded-[200px]" data-name="avatar-image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[200px] size-full" src={imgAvatarImage5} />
        </div>
      </div>
      <AuthorDetails4 />
    </div>
  );
}

function SaveButton5() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="save-button">
      <button className="block cursor-pointer overflow-clip relative shrink-0 size-[24px]" data-name="save">
        <div className="-translate-y-1/2 absolute aspect-[13.5/18.74962615966797] left-1/4 right-[20.83%] top-1/2" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 18">
            <path d={svgPaths.pbfd46c0} fill="var(--fill-0, white)" id="svg" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function AuthorInfo4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="author-info">
      <AuthorProfile4 />
      <SaveButton5 />
    </div>
  );
}

function PostHeader4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="post-header">
      <AuthorInfo4 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#1a1128] text-[14px] text-ellipsis w-full">
        <p className="leading-[21px]">A luxe crystal-embellished 3D handbag blending glamour with modern elegance.</p>
      </div>
    </div>
  );
}

function PostDetails5() {
  return (
    <div className="relative shrink-0 w-full" data-name="post-details">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[20px] pt-[12px] px-[16px] relative size-full">
        <PostHeader4 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] text-right tracking-[0.24px] w-full">
          <p className="leading-[18px]">20 July</p>
        </div>
      </div>
    </div>
  );
}

function FeedContent() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[800px] min-w-[360px] relative shrink-0 w-full" data-name="feed-content">
      <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="post-card">
        <PostContent />
        <PostDetails />
      </div>
      <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="post-card">
        <PostContent1 />
        <PostDetails1 />
      </div>
      <CreativeMomentumSection />
      <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="post-card">
        <PostContent2 />
        <PostDetails2 />
      </div>
      <BrandJobPost />
      <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="post-card">
        <PostContent3 />
        <PostDetails4 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="post-card">
        <PostContent4 />
        <PostDetails5 />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[108px] w-[390px]">
      <FeedContent />
    </div>
  );
}

function NavItem() {
  return (
    <div className="content-stretch flex flex-col gap-px h-[50px] items-center px-[4px] py-[2px] relative shrink-0 w-[58px]" data-name="nav-item">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="home">
        <div className="absolute inset-[9.38%_12.5%_12.5%_12.5%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18.7493">
            <path d={svgPaths.p34ca7200} fill="var(--fill-0, #1A1128)" id="Svg" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
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
    <div className="content-stretch flex flex-col gap-px h-[50px] items-center justify-center px-[4px] relative shrink-0 w-[58px]" data-name="nav-item">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="mentors">
        <div className="-translate-y-1/2 absolute aspect-[23.58763313293457/15.011270523071289] left-[8.33%] right-[8.33%] top-[calc(50%-0.5px)]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
            <path d={svgPaths.p2af865f0} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[14px] text-center whitespace-nowrap">
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
            <img alt="" className="absolute h-[353.74%] left-[-79.64%] max-w-none top-[-54.26%] w-[235.82%]" src={imgImage3} />
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
            <p className="leading-[21px] overflow-hidden text-ellipsis">Search</p>
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

function NotificationAction() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="notification-action">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="bell-simple">
        <div className="absolute inset-[9.38%_12.5%_9.38%_12.51%]" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9983 19.5">
            <path d={svgPaths.pbc57780} fill="var(--fill-0, #6B5F7A)" id="svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MessagingAction() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="messaging-action">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chat-centered-dots">
        <div className="absolute inset-[15.63%_9.38%_9.38%_9.38%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 17.9999">
            <path d={svgPaths.p42de200} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeaderActions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="header-actions">
      <NotificationAction />
      <MessagingAction />
    </div>
  );
}

function TopBar() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col items-start left-1/2 max-w-[724px] top-0 w-[390px]" data-name="top-bar">
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

export default function HomeFeed() {
  return (
    <div className="bg-[#fffeff] relative size-full" data-name="home/feed">
      <Frame />
      <BottomNav />
      <TopBar />
    </div>
  );
}