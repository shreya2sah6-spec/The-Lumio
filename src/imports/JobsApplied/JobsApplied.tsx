import svgPaths from "./svg-m3ahn3dap3";
import imgImage from "./5d686febbf6bd99db27d32ec61024adf89b31b4f.png";
import imgImage1 from "./bb5b0e0896cc0396e3c8e2b6811f344da7f15455.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#fffeff] content-stretch flex h-[40px] items-center justify-center max-h-[40px] px-[16px] py-[12px] relative shrink-0" data-name="tab/chip">
        <div aria-hidden="true" className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#6b5f7a] text-[16px] text-center text-ellipsis whitespace-nowrap">
          <p className="leading-[24px] overflow-hidden text-ellipsis">Discover</p>
        </div>
      </div>
      <div className="bg-[#fffeff] content-stretch flex flex-col gap-[12px] h-[40px] items-center justify-end max-h-[40px] pt-[12px] px-[16px] relative shrink-0" data-name="tab/chip">
        <div aria-hidden="true" className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#1a1128] text-[16px] text-center text-ellipsis tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[25px] overflow-hidden text-ellipsis">Applied</p>
        </div>
        <div className="bg-[#7d3aea] h-[2px] relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full" data-name="indicator" />
      </div>
    </div>
  );
}

function TabList() {
  return (
    <div className="relative shrink-0 w-full" data-name="tab-list">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[8px] pt-[16px] px-[16px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function CompanyLogo() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[54px]" data-name="company-logo">
      <div className="absolute inset-0 pointer-events-none rounded-[8px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[8px] size-full" src={imgImage} />
        <div aria-hidden="true" className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function CompanyDetails() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[0] min-w-px relative whitespace-nowrap" data-name="company-details">
      <div className="flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#1a1128] text-[18px] text-ellipsis w-full">
        <p className="leading-[28px] overflow-hidden text-ellipsis">Jr. Fashion Designer</p>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-[16px] text-ellipsis tracking-[0.16px] w-full">
        <p className="leading-[25px] overflow-hidden text-ellipsis">Sabyasachi</p>
      </div>
    </div>
  );
}

function JobSummary() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="job-summary">
      <CompanyLogo />
      <CompanyDetails />
    </div>
  );
}

function JobHeader() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="job-header">
      <JobSummary />
    </div>
  );
}

function JobTag() {
  return (
    <div className="bg-[#f7f4fa] content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0" data-name="job-tag">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">0-3 Years</p>
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

function JobMeta() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="job-meta">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[16px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[25px]">10-12 LPA</p>
      </div>
      <TagLabel />
    </div>
  );
}

function JobInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="job-info">
      <JobHeader />
      <JobMeta />
    </div>
  );
}

function Jobdetails() {
  return (
    <div className="[word-break:break-word] content-center flex flex-wrap gap-[0px_8px] items-center leading-[0] relative shrink-0 text-[12px] tracking-[0.24px] w-full whitespace-nowrap" data-name="jobdetails">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#1a1128]">
        <p className="leading-[18px]">Kolkata</p>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#6b5f7a] text-center">
        <p className="leading-[18px]">· Posted 1 days ago</p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6b5f7a] text-center">
        <p className="leading-[18px]">· Promoted</p>
      </div>
    </div>
  );
}

function JobContent() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="job-content">
      <JobInfo />
      <Jobdetails />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[20px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[20px] whitespace-nowrap">
          <p className="leading-[28px]">Under review</p>
        </div>
        <div className="bg-[#fffeff] content-stretch flex flex-col gap-[8px] items-end max-w-[768px] min-w-[328px] py-[12px] relative shrink-0 w-full" data-name="job-list-item">
          <div aria-hidden="true" className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none" />
          <JobContent />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 max-w-[800px] min-w-[360px] top-[108px] w-[390px]" data-name="Container">
      <TabList />
      <Container1 />
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
            <p className="leading-[21px] overflow-hidden text-ellipsis">Search job, brand</p>
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
    <div className="content-stretch flex flex-col gap-px h-[50px] items-center px-[4px] relative shrink-0 w-[58px]" data-name="nav-item">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="job">
        <div className="absolute inset-[9.38%_9.38%_15.63%_9.38%]" data-name="Svg">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 18">
            <path d={svgPaths.p3486700} fill="var(--fill-0, #1A1128)" id="Svg" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[14px] text-center tracking-[0.14px] whitespace-nowrap">
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
            <img alt="" className="absolute h-[353.74%] left-[-79.64%] max-w-none top-[-54.26%] w-[235.82%]" src={imgImage1} />
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

export default function JobsApplied() {
  return (
    <div className="bg-[#fffeff] relative size-full" data-name="jobs/applied">
      <Container />
      <TopBar />
      <BottomNav />
    </div>
  );
}