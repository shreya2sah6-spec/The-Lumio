import svgPaths from "./svg-1trwdxhov2";
import imgImage from "./5d686febbf6bd99db27d32ec61024adf89b31b4f.png";
import imgAvatarImage from "./5dde8865bca1503c9d643f24bd440d5c48868565.png";
import imgAvatarImage1 from "./be6eb4acfee35fa9fb482f3e84f93a1f10551bbf.png";
import imgAvatarImage2 from "./f801d802405de74f12a3ae2fc96210f8d94e06db.png";
import imgImage1 from "./19ed454ce73b7e33b4572f2ee25e284782237496.png";
import imgImage2 from "./54b30bea255f570e17b130b3c2290f9b1216dc8b.png";
import imgImage3 from "./3d2408c4872e6284bda670b322969ddcea11be73.png";

function CompanyLogo() {
  return (
    <div className="relative shrink-0 size-[84px]" data-name="company-logo">
      <div className="absolute left-0 pointer-events-none rounded-[8px] size-[84px] top-0" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={imgImage} />
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[8px]" />
      </div>
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
        <p className="leading-[18px]">4.2</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#9d90ad]">
        <p className="leading-[18px]">(60)</p>
      </div>
    </div>
  );
}

function TitleRatingRow() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="title-rating-row">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px overflow-hidden relative text-[#1a1128] text-[18px] text-ellipsis whitespace-nowrap">
        <p className="leading-[28px] overflow-hidden text-ellipsis">Jr. Fashion Designer</p>
      </div>
      <div className="content-stretch flex gap-[4px] h-[18px] items-center justify-center relative shrink-0" data-name="rating-group">
        <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative shrink-0 size-[16px]" data-name="star">
          <Container />
        </div>
        <RatingsCount />
      </div>
    </div>
  );
}

function CompanyDetails() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px relative w-full" data-name="company-details">
      <TitleRatingRow />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[25px] justify-center leading-[0] overflow-hidden relative shrink-0 text-[#433059] text-[16px] text-ellipsis tracking-[0.16px] w-full whitespace-nowrap">
        <p className="leading-[25px] overflow-hidden text-ellipsis">Sabyasachi</p>
      </div>
    </div>
  );
}

function JobDetails1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="job-details">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#1a1128] text-[14px]">
        <p className="leading-[21px]">{`Kolkata `}</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#433059] text-[14px]">
        <p className="leading-[21px]">· Posted 2 days ago</p>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px]">
        <p className="leading-[18px]">· Promoted</p>
      </div>
    </div>
  );
}

function JobContent() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="job-content">
      <CompanyDetails />
      <JobDetails1 />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#f7f4fa] content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="tag">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433059] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">0-3 Years</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#f4f7ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="tag">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433059] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">Full Time</p>
      </div>
    </div>
  );
}

function TagList() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="tag-List">
      <Tag />
      <Tag1 />
    </div>
  );
}

function JobMeta() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="job-meta">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[16px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[25px]">10-12 LPA</p>
      </div>
      <TagList />
    </div>
  );
}

function JobHeader() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative" data-name="job-header">
      <JobContent />
      <JobMeta />
    </div>
  );
}

function JobDetails() {
  return (
    <div className="bg-[#fffeff] max-w-[800px] min-w-[320px] relative shrink-0 w-full" data-name="job-details">
      <div className="content-stretch flex gap-[12px] items-start max-w-[inherit] min-w-[inherit] pb-[12px] pt-[16px] px-[16px] relative size-full">
        <CompanyLogo />
        <JobHeader />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#fffeff] content-stretch flex h-[40px] items-center justify-center max-h-[40px] px-[16px] py-[12px] relative shrink-0" data-name="tab/chip">
        <div aria-hidden="true" className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#6b5f7a] text-[16px] text-center text-ellipsis whitespace-nowrap">
          <p className="leading-[24px] overflow-hidden text-ellipsis">Description</p>
        </div>
      </div>
      <div className="bg-[#fffeff] content-stretch flex flex-col gap-[12px] h-[40px] items-center justify-end max-h-[40px] pt-[12px] px-[16px] relative shrink-0" data-name="tab/chip">
        <div aria-hidden="true" className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#1a1128] text-[16px] text-center text-ellipsis tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[25px] overflow-hidden text-ellipsis">Reviews</p>
        </div>
        <div className="bg-[#7d3aea] h-[2px] relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full" data-name="indicator" />
      </div>
    </div>
  );
}

function TabList() {
  return (
    <div className="content-stretch flex items-center pb-[8px] pt-[12px] px-[16px] relative shrink-0 w-[390px]" data-name="tab-list">
      <Frame1 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="header">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="summary-pen">
        <div className="absolute inset-[12.5%_3.13%_12.5%_12.5%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2507 18">
            <path d={svgPaths.p13ae27d8} fill="var(--fill-0, #1A1128)" id="Svg" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-px relative text-[#2d2040] text-[18px]">
        <p className="leading-[28px]">Workplace insights</p>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="mb-[-16px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(264.845deg, rgb(254, 240, 210) 5.872%, rgb(254, 250, 225) 88.229%)" }} data-name="section-header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[32px] pt-[16px] px-[16px] relative size-full">
          <Header />
        </div>
      </div>
    </div>
  );
}

function SectionContent() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="section-content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#433059] text-[0px] w-full">
            <ul className="list-disc">
              <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                <span className="[word-break:break-word] font-['Manrope:Medium',sans-serif] font-medium leading-[21px] text-[14px] tracking-[0.14px]">Strong mentorship:</span>
                <span className="leading-[24px] text-[16px]">{` `}</span>
                <span className="[word-break:break-word] font-['Manrope:Regular',sans-serif] font-normal leading-[21px] text-[#6b5f7a] text-[14px]">The culture with opportunities to learn and grow.</span>
              </li>
              <li className="[word-break:break-word] leading-[21px] mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px]">
                <span className="font-['Manrope:Medium',sans-serif] font-medium tracking-[0.14px]">Fast-paced work:</span>
                <span className="font-['Manrope:Regular',sans-serif] font-normal">{` `}</span>
                <span className="font-['Manrope:Regular',sans-serif] font-normal text-[#6b5f7a]">The environment that can be demanding at times.</span>
              </li>
              <li className="[word-break:break-word] leading-[21px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px]">
                <span className="font-['Manrope:Medium',sans-serif] font-medium tracking-[0.14px]">{`Supportive workplace: `}</span>
                <span className="font-['Manrope:Regular',sans-serif] font-normal text-[#6b5f7a]">They focused on innovation, work–life balance, and employee empowerment.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function AiReviewsSummary() {
  return (
    <div className="content-stretch drop-shadow-[0px_1px_2px_rgba(132,111,132,0.12)] flex flex-col items-start max-w-[768px] min-w-[320px] relative shrink-0 w-full" data-name="ai-reviews-summary">
      <SectionHeader />
      <SectionContent />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-[54px]" data-name="avatar">
      <div className="absolute inset-0 pointer-events-none rounded-[200px]" data-name="avatar-image">
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img alt="" className="absolute h-[204.79%] left-[-108.98%] max-w-none top-[-7.41%] w-[307.19%]" src={imgAvatarImage} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]" />
      </div>
    </div>
  );
}

function ReviewerDetails() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[54px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap" data-name="reviewer-details">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#2d2040] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px] overflow-hidden text-ellipsis">Anaya</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#433059] text-[14px] text-ellipsis w-full">
        <p className="leading-[21px] overflow-hidden text-ellipsis">Fashion Designer</p>
      </div>
    </div>
  );
}

function ReviewerProfile() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="reviewer-profile">
      <Avatar />
      <ReviewerDetails />
    </div>
  );
}

function ReviewerInfo() {
  return (
    <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-[343px]" data-name="reviewer-info">
      <ReviewerProfile />
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
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="ratings-count">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433059] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">5</p>
      </div>
    </div>
  );
}

function ReviewTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="review-title">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[#2d2040] text-[16px] text-ellipsis tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[25px] overflow-hidden text-ellipsis">Supportive learning environment</p>
      </div>
      <div className="content-stretch flex gap-[4px] h-[18px] items-center justify-center relative shrink-0" data-name="rating-group">
        <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative shrink-0 size-[16px]" data-name="star">
          <Container1 />
        </div>
        <RatingsCount1 />
      </div>
    </div>
  );
}

function ReadMore() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="read-more">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">Read more</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-icon">
        <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0006 6.00067">
            <path d={svgPaths.p10c93a80} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Reviews2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[343px]" data-name="reviews">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#433059] text-[16px] text-ellipsis w-[min-content]">
        <p className="leading-[24px]">I had a great experience working at this company, as the team was professional and supportive. The work environment encouraged learning, growth, and collaboration. Overall, it is a reliable and well-managed company with strong values and culture.</p>
      </div>
      <ReadMore />
    </div>
  );
}

function ReviewHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start py-[4px] relative shrink-0 w-full" data-name="review-header">
      <ReviewTitle />
      <Reviews2 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative shrink-0 size-[54px]" data-name="avatar">
      <div className="absolute inset-0 pointer-events-none rounded-[200px]" data-name="avatar-image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[200px] size-full" src={imgAvatarImage1} />
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]" />
      </div>
    </div>
  );
}

function ReviewerDetails1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[54px] items-start justify-center min-w-px relative" data-name="reviewer-details">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#2d2040] text-[16px] text-ellipsis tracking-[0.16px] w-full whitespace-nowrap">
        <p className="leading-[25px] overflow-hidden text-ellipsis">{`Anonymous `}</p>
      </div>
    </div>
  );
}

function ReviewerProfile1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="reviewer-profile">
      <Avatar1 />
      <ReviewerDetails1 />
    </div>
  );
}

function ReviewerInfo1() {
  return (
    <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-[343px]" data-name="reviewer-info">
      <ReviewerProfile1 />
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
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="ratings-count">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433059] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">4</p>
      </div>
    </div>
  );
}

function ReviewTitle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="review-title">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[#2d2040] text-[16px] text-ellipsis tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[25px] overflow-hidden text-ellipsis">Fast-paced creative culture</p>
      </div>
      <div className="content-stretch flex gap-[4px] h-[18px] items-center justify-center relative shrink-0" data-name="rating-group">
        <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative shrink-0 size-[16px]" data-name="star">
          <Container2 />
        </div>
        <RatingsCount2 />
      </div>
    </div>
  );
}

function ReadMore1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="read-more">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">Read more</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-icon">
        <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0006 6.00067">
            <path d={svgPaths.p10c93a80} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Reviews3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[343px]" data-name="reviews">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#433059] text-[16px] text-ellipsis w-[min-content]">
        <p className="leading-[24px]">This company is deeply committed to the community. The work we do not only promotes business growth but also positively impacts society. I love being part of a team that shares values of social responsibility and collaboration.</p>
      </div>
      <ReadMore1 />
    </div>
  );
}

function ReviewHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start py-[4px] relative shrink-0 w-full" data-name="review-header">
      <ReviewTitle1 />
      <Reviews3 />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative shrink-0 size-[54px]" data-name="avatar">
      <div className="absolute inset-0 pointer-events-none rounded-[200px]" data-name="avatar-image">
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img alt="" className="absolute h-[255.56%] left-[-181.92%] max-w-none top-[-10.84%] w-[383.33%]" src={imgAvatarImage2} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]" />
      </div>
    </div>
  );
}

function ReviewerDetails2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[54px] items-start justify-center leading-[0] min-w-px relative whitespace-nowrap" data-name="reviewer-details">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#2d2040] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px] overflow-hidden text-ellipsis">Nia Patel</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#433059] text-[14px] text-ellipsis w-full">
        <p className="leading-[21px] overflow-hidden text-ellipsis">Sr. Textile Designer</p>
      </div>
    </div>
  );
}

function ReviewerProfile2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="reviewer-profile">
      <Avatar2 />
      <ReviewerDetails2 />
    </div>
  );
}

function ReviewerInfo2() {
  return (
    <div className="content-stretch flex items-center py-[2px] relative shrink-0 w-[343px]" data-name="reviewer-info">
      <ReviewerProfile2 />
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
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="ratings-count">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433059] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">4</p>
      </div>
    </div>
  );
}

function ReviewTitle2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="review-title">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px overflow-hidden relative text-[#2d2040] text-[16px] text-ellipsis tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[25px] overflow-hidden text-ellipsis">Strong mentorship experience</p>
      </div>
      <div className="content-stretch flex gap-[4px] h-[18px] items-center justify-center relative shrink-0" data-name="rating-group">
        <div className="content-stretch flex flex-col items-center justify-center p-[2px] relative shrink-0 size-[16px]" data-name="star">
          <Container3 />
        </div>
        <RatingsCount3 />
      </div>
    </div>
  );
}

function ReadMore2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="read-more">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">Read more</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-icon">
        <div className="absolute inset-[34.37%_15.62%_28.12%_15.62%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0006 6.00067">
            <path d={svgPaths.p10c93a80} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Reviews4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[343px]" data-name="reviews">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#433059] text-[16px] text-ellipsis w-[min-content]">
        <p className="leading-[24px]">{`This company has a vibrant and inclusive culture. I enjoyed collaborating across departments and appreciated that everyone's voice was heard. The creative freedom I had to explore new ideas was unparalleled, making it a truly inspiring workplace.`}</p>
      </div>
      <ReadMore2 />
    </div>
  );
}

function ReviewHeader2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start py-[4px] relative shrink-0 w-full" data-name="review-header">
      <ReviewTitle2 />
      <Reviews4 />
    </div>
  );
}

function Reviews1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="reviews">
      <div className="bg-[#fffeff] content-stretch flex flex-col items-start max-w-[768px] min-w-[320px] py-[12px] relative shrink-0 w-full" data-name="review-card">
        <ReviewerInfo />
        <ReviewHeader />
      </div>
      <div className="bg-[#fffeff] content-stretch flex flex-col items-start max-w-[768px] min-w-[320px] py-[12px] relative shrink-0 w-full" data-name="review-card">
        <ReviewerInfo1 />
        <ReviewHeader1 />
      </div>
      <div className="bg-[#fffeff] content-stretch flex flex-col items-start max-w-[768px] min-w-[320px] py-[12px] relative shrink-0 w-full" data-name="review-card">
        <ReviewerInfo2 />
        <ReviewHeader2 />
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="reviews">
      <AiReviewsSummary />
      <Reviews1 />
    </div>
  );
}

function DetailedSections() {
  return (
    <div className="relative shrink-0 w-full" data-name="detailed-sections">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center pb-[20px] pt-[16px] px-[16px] relative size-full">
          <Reviews />
          <div className="content-stretch flex gap-[8px] h-[48px] items-center justify-center max-h-[48px] min-h-[48px] px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[358px]" data-name="primary-button">
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

function CompanyLogo1() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[54px]" data-name="company-logo">
      <div className="absolute inset-0 pointer-events-none rounded-[8px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={imgImage1} />
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function CompanyDetails1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="company-details">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#1a1128] text-[18px] text-ellipsis w-full">
        <p className="leading-[28px] overflow-hidden text-ellipsis">Associate Fashion Designer</p>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px] overflow-hidden text-ellipsis">Rohit Bal</p>
      </div>
    </div>
  );
}

function JobSummary() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px pt-[4px] relative" data-name="job-summary">
      <CompanyLogo1 />
      <CompanyDetails1 />
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

function JobHeader1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="job-header">
      <JobSummary />
      <SaveButton />
    </div>
  );
}

function JobTag() {
  return (
    <div className="bg-[#f7f4fa] content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="job-tag">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">0-2 Years</p>
      </div>
    </div>
  );
}

function JobTag1() {
  return (
    <div className="bg-[#f4f7ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="job-tag">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">Full Time</p>
      </div>
    </div>
  );
}

function TagLabel() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="tag-label">
      <JobTag />
      <JobTag1 />
    </div>
  );
}

function JobMeta1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="job-meta">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[16px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[25px]">7-8 LPA</p>
      </div>
      <TagLabel />
    </div>
  );
}

function JobInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="job-info">
      <JobHeader1 />
      <JobMeta1 />
    </div>
  );
}

function Jobdetails() {
  return (
    <div className="[word-break:break-word] content-center flex flex-wrap font-['Manrope:Medium',sans-serif] font-medium gap-[0px_8px] items-center leading-[0] relative shrink-0 text-[12px] tracking-[0.24px] w-full whitespace-nowrap" data-name="jobdetails">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1128]">
        <p className="leading-[18px]">New Delhi</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b5f7a] text-center">
        <p className="leading-[18px]">· Posted 1 days ago</p>
      </div>
    </div>
  );
}

function JobContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="job-content">
      <JobInfo />
      <Jobdetails />
    </div>
  );
}

function JobActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full" data-name="job-actions">
      <div className="bg-[#fffeff] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="primary-button">
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7d3aea] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[20px]">View Details</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-[110px]" data-name="primary-button">
        <div aria-hidden="true" className="absolute border border-[#7d3aea] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7d3aea] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[20px]">Apply</p>
        </div>
      </div>
    </div>
  );
}

function CompanyLogo2() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[54px]" data-name="company-logo">
      <div className="absolute inset-0 pointer-events-none rounded-[8px]" data-name="image">
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute left-[-23.1%] max-w-none size-[146.3%] top-[-21.73%]" src={imgImage2} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function CompanyDetails2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="company-details">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#1a1128] text-[18px] text-ellipsis w-full">
        <p className="leading-[28px] overflow-hidden text-ellipsis">Jr. Fashion Designer</p>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px] overflow-hidden text-ellipsis">Abu Jani Sandeep Khosla</p>
      </div>
    </div>
  );
}

function JobSummary1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px pt-[4px] relative" data-name="job-summary">
      <CompanyLogo2 />
      <CompanyDetails2 />
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

function JobHeader2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="job-header">
      <JobSummary1 />
      <SaveButton1 />
    </div>
  );
}

function JobTag2() {
  return (
    <div className="bg-[#f7f4fa] content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="job-tag">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">1-2 Years</p>
      </div>
    </div>
  );
}

function JobTag3() {
  return (
    <div className="bg-[#f4f7ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="job-tag">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">Full Time</p>
      </div>
    </div>
  );
}

function TagLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="tag-label">
      <JobTag2 />
      <JobTag3 />
    </div>
  );
}

function JobMeta2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="job-meta">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[16px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[25px]">7-8 LPA</p>
      </div>
      <TagLabel1 />
    </div>
  );
}

function JobInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="job-info">
      <JobHeader2 />
      <JobMeta2 />
    </div>
  );
}

function Jobdetails1() {
  return (
    <div className="[word-break:break-word] content-center flex flex-wrap font-['Manrope:Medium',sans-serif] font-medium gap-[0px_8px] items-center leading-[0] relative shrink-0 text-[12px] tracking-[0.24px] w-full whitespace-nowrap" data-name="jobdetails">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1128]">
        <p className="leading-[18px]">Mumbai</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b5f7a] text-center">
        <p className="leading-[18px]">· Posted 3 days ago</p>
      </div>
    </div>
  );
}

function JobContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="job-content">
      <JobInfo1 />
      <Jobdetails1 />
    </div>
  );
}

function JobActions1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full" data-name="job-actions">
      <div className="bg-[#fffeff] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="primary-button">
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7d3aea] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[20px]">View Details</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-[110px]" data-name="primary-button">
        <div aria-hidden="true" className="absolute border border-[#7d3aea] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7d3aea] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[20px]">Apply</p>
        </div>
      </div>
    </div>
  );
}

function CompanyLogo3() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[54px]" data-name="company-logo">
      <div className="absolute inset-0 pointer-events-none rounded-[8px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-contain rounded-[8px] size-full" src={imgImage3} />
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function CompanyDetails3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="company-details">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#1a1128] text-[18px] text-ellipsis w-full">
        <p className="leading-[28px] overflow-hidden text-ellipsis">Jr. Accessories Designer</p>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px] overflow-hidden text-ellipsis">Masaba</p>
      </div>
    </div>
  );
}

function JobSummary2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px pt-[4px] relative" data-name="job-summary">
      <CompanyLogo3 />
      <CompanyDetails3 />
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

function JobHeader3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="job-header">
      <JobSummary2 />
      <SaveButton2 />
    </div>
  );
}

function JobTag4() {
  return (
    <div className="bg-[#f7f4fa] content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="job-tag">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">1-3 Years</p>
      </div>
    </div>
  );
}

function JobTag5() {
  return (
    <div className="bg-[#f4f7ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="job-tag">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">Full Time</p>
      </div>
    </div>
  );
}

function TagLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="tag-label">
      <JobTag4 />
      <JobTag5 />
    </div>
  );
}

function JobMeta3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="job-meta">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[16px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[25px]">5-8 LPA</p>
      </div>
      <TagLabel2 />
    </div>
  );
}

function JobInfo2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="job-info">
      <JobHeader3 />
      <JobMeta3 />
    </div>
  );
}

function Jobdetails2() {
  return (
    <div className="[word-break:break-word] content-center flex flex-wrap font-['Manrope:Medium',sans-serif] font-medium gap-[0px_8px] items-center leading-[0] relative shrink-0 text-[12px] tracking-[0.24px] w-full whitespace-nowrap" data-name="jobdetails">
      <div className="flex flex-col justify-center relative shrink-0 text-[#1a1128]">
        <p className="leading-[18px]">Mumbai</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6b5f7a] text-center">
        <p className="leading-[18px]">· Posted 4hr ago</p>
      </div>
    </div>
  );
}

function JobContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="job-content">
      <JobInfo2 />
      <Jobdetails2 />
    </div>
  );
}

function JobActions2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full" data-name="job-actions">
      <div className="bg-[#fffeff] content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="primary-button">
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7d3aea] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[20px]">View Details</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] h-[40px] items-center justify-center max-h-[40px] min-h-[40px] px-[12px] py-[8px] relative rounded-[4px] shrink-0 w-[110px]" data-name="primary-button">
        <div aria-hidden="true" className="absolute border border-[#7d3aea] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7d3aea] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
          <p className="leading-[20px]">Apply</p>
        </div>
      </div>
    </div>
  );
}

function JobsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="jobs-container">
      <div className="bg-[#fffeff] content-stretch flex flex-col gap-[8px] items-end max-w-[768px] min-w-[328px] py-[12px] relative shrink-0 w-full" data-name="job-list-item">
        <div aria-hidden="true" className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
        <JobContent1 />
        <JobActions />
      </div>
      <div className="bg-[#fffeff] content-stretch flex flex-col gap-[8px] items-end max-w-[768px] min-w-[328px] py-[12px] relative shrink-0 w-full" data-name="job-list-item">
        <div aria-hidden="true" className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
        <JobContent2 />
        <JobActions1 />
      </div>
      <div className="bg-[#fffeff] content-stretch flex flex-col gap-[8px] items-end max-w-[768px] min-w-[328px] py-[12px] relative shrink-0 w-full" data-name="job-list-item">
        <div aria-hidden="true" className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
        <JobContent3 />
        <JobActions2 />
      </div>
    </div>
  );
}

function SimilarJobs() {
  return (
    <div className="relative shrink-0 w-full" data-name="similar-jobs">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[20px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d2040] text-[20px] w-full">
          <p className="leading-[28px]">Similar jobs</p>
        </div>
        <JobsContainer />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="main-content">
      <DetailedSections />
      <SimilarJobs />
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

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <TabList />
      <MainContent />
    </div>
  );
}

function JobDetailsPage() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fffeff] content-stretch flex flex-col items-start left-1/2 max-w-[724px] min-w-[360px] top-[108px] w-[390px]" data-name="job-details-page">
      <JobDetails />
      <Frame />
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

function BackButton() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="back-button">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="back-button">
        <div className="absolute inset-[18.75%_12.5%]" data-name="svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0006 15.0008">
            <path d={svgPaths.p33185f40} fill="var(--fill-0, #1A1128)" id="svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="nav-actions">
      <BackButton />
      <p className="[word-break:break-word] font-['Roboto_Serif:600',sans-serif] leading-[31px] not-italic relative shrink-0 text-[#1a1128] text-[24px] whitespace-nowrap">Job Details</p>
    </div>
  );
}

function ShareAction() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="share-action">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="share-button">
        <div className="absolute inset-[9.38%_6.25%_18.75%_6.25%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9996 17.2504">
            <path d={svgPaths.p1adc0700} fill="var(--fill-0, #6B5F7A)" id="Svg" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavLeading() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="nav-leading">
      <ShareAction />
    </div>
  );
}

function TopBar() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fffeff] content-stretch flex flex-col items-start left-1/2 top-0 w-[390px]" data-name="top-bar">
      <StatusBar />
      <div className="bg-[#fffeff] relative shrink-0 w-full" data-name="header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
            <NavActions />
            <NavLeading />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionGroup() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[24px] pt-[12px] relative shrink-0 w-full" data-name="action-group">
      <div className="bg-white content-stretch flex gap-[8px] h-[48px] items-center justify-center max-h-[48px] min-h-[48px] px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[140px]" data-name="primary-button">
        <div aria-hidden="true" className="absolute border border-[#7d3aea] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7d3aea] text-[16px] text-center tracking-[0.48px] whitespace-nowrap">
          <p className="leading-[20px]">Save</p>
        </div>
      </div>
      <div className="bg-gradient-to-r flex-[1_0_0] from-[#7d3aea] h-[48px] max-h-[48px] min-h-[48px] min-w-px relative rounded-[8px] to-[#5e28b5]" data-name="primary-button">
        <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center max-h-[inherit] min-h-[inherit] px-[16px] py-[12px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.48px] whitespace-nowrap">
              <p className="leading-[20px]">Quick Apply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="footer">
      <div className="content-stretch flex flex-col items-start px-[16px] relative size-full">
        <ActionGroup />
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

function FooterSection() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch drop-shadow-[0px_1px_2px_rgba(200,192,212,0.6)] flex flex-col items-center left-1/2 max-w-[800px] min-w-[360px] w-[390px]" data-name="footer-section">
      <Footer />
      <BottomSafeArea />
    </div>
  );
}

export default function JobsDetailReviews() {
  return (
    <div className="bg-[#fffeff] relative size-full" data-name="jobs/detail-reviews">
      <JobDetailsPage />
      <TopBar />
      <FooterSection />
    </div>
  );
}