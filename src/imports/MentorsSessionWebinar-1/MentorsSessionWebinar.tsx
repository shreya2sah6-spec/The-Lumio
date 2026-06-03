import svgPaths from "./svg-rpjer0si32";
import imgHostAvatar from "./8a0297188511b9e7d739e0bdb0fad1599992ea67.png";
import imgHostAvatar1 from "./a48c218009c1c155a805b916c3fd6110ae050ef3.png";
import imgImage from "./bb5b0e0896cc0396e3c8e2b6811f344da7f15455.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative">
      <div
        aria-hidden="true"
        className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none"
      />
      <div
        className="bg-[#fffeff] content-stretch flex h-[40px] items-center justify-center max-h-[40px] px-[16px] py-[12px] relative shrink-0"
        data-name="tab/chip"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none"
        />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#6b5f7a] text-[16px] text-center text-ellipsis whitespace-nowrap">
          <p className="leading-[24px] overflow-hidden text-ellipsis">
            Discover
          </p>
        </div>
      </div>
      <div
        className="bg-[#fffeff] content-stretch flex flex-col gap-[12px] h-[40px] items-center justify-end max-h-[40px] pt-[12px] px-[16px] relative shrink-0"
        data-name="tab/chip"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#e2d9ef] border-b border-solid inset-0 pointer-events-none"
        />
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#1a1128] text-[16px] text-center text-ellipsis tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[25px] overflow-hidden text-ellipsis">
            Upcoming session
          </p>
        </div>
        <div
          className="bg-[#7d3aea] h-[2px] relative rounded-tl-[2px] rounded-tr-[2px] shrink-0 w-full"
          data-name="indicator"
        />
      </div>
    </div>
  );
}

function TabList() {
  return (
    <div
      className="content-stretch flex items-center pb-[8px] pt-[12px] px-[16px] relative shrink-0 w-[390px]"
      data-name="tab-list"
    >
      <Frame />
    </div>
  );
}

function Tab() {
  return (
    <div
      className="bg-white content-stretch flex h-[40px] items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0"
      data-name="tab"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#7d3aea] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] overflow-hidden relative shrink-0 text-[#6b5f7a] text-[16px] text-center text-ellipsis whitespace-nowrap">
        <p className="leading-[24px] overflow-hidden text-ellipsis">
          1:1 Sessions
        </p>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div
      className="bg-[#f5f0ff] content-stretch flex h-[40px] items-center justify-center px-[16px] py-[12px] relative rounded-[4px] shrink-0"
      data-name="tab"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#7d3aea] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] overflow-hidden relative shrink-0 text-[#2d2040] text-[16px] text-center text-ellipsis tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[25px] overflow-hidden text-ellipsis">Webinars</p>
      </div>
    </div>
  );
}

function MentorsSessioTabGround() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="mentors/sessio/tab-ground"
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <Tab />
          <Tab1 />
        </div>
      </div>
    </div>
  );
}

function SessionTag() {
  return (
    <div
      className="bg-[#fef0d2] content-stretch flex items-center justify-center p-[8px] relative rounded-[2px] shrink-0"
      data-name="session-tag"
    >
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1a1128] text-[12px] text-center tracking-[0.24px] whitespace-nowrap">
        <p className="leading-[18px]">Attending</p>
      </div>
    </div>
  );
}

function HeaderContent() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-w-px relative"
      data-name="header-content"
    >
      <SessionTag />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-[#1a1128] text-[18px] text-left w-[min-content]">
        <p className="leading-[28px]">Session in 7 days</p>
      </div>
    </div>
  );
}

function SessionHeader() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
      data-name="session-header"
    >
      <HeaderContent />
      <div
        className="overflow-clip relative shrink-0 size-[24px]"
        data-name="chevron-icon"
      >
        <div
          className="absolute inset-[28.12%_15.62%_34.37%_15.62%]"
          data-name="Svg"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16.501 9.00118"
          >
            <path
              d={svgPaths.p3d97f870}
              fill="var(--fill-0, #6B5F7A)"
              id="Svg"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch drop-shadow-[-2px_0px_2px_rgba(200,192,212,0.6)] flex items-center pointer-events-none relative shrink-0">
      <div
        className="mr-[-12px] relative rounded-[24px] shrink-0 size-[48px]"
        data-name="host-avatar"
      >
        <div className="absolute inset-0 overflow-hidden rounded-[24px]">
          <img
            alt=""
            className="absolute h-[311.69%] left-[-48.84%] max-w-none top-[-48.31%] w-[207.79%]"
            src={imgHostAvatar}
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[24px]"
        />
      </div>
      <div
        className="mr-[-12px] relative rounded-[200px] shrink-0 size-[48px]"
        data-name="host-avatar"
      >
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img
            alt=""
            className="absolute h-[549.84%] left-[-190.48%] max-w-none top-[-186.01%] w-[731.97%]"
            src={imgHostAvatar1}
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]"
        />
      </div>
      <div
        className="relative rounded-[200px] shrink-0 size-[48px]"
        data-name="host-avatar"
      >
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img
            alt=""
            className="absolute h-[560.42%] left-[-459.68%] max-w-none top-[-194.68%] w-[747.22%]"
            src={imgHostAvatar1}
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#e2d9ef] border-solid inset-0 rounded-[200px]"
        />
      </div>
    </div>
  );
}

function ScheduleRow() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
      data-name="schedule-row"
    >
      <Frame1 />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#1a1128] text-[16px] text-left tracking-[0.16px]">
        <p className="leading-[25px]">Sat · 20 July, 9:00 AM – 2:00 PM</p>
      </div>
    </div>
  );
}

function HostDetails() {
  return (
    <div
      className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center leading-[0] relative shrink-0 text-[14px] text-left w-full whitespace-nowrap"
      data-name="host-details"
    >
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center overflow-hidden relative shrink-0 text-[#1a1128] text-ellipsis tracking-[0.14px] w-full">
        <p className="leading-[21px] overflow-hidden text-ellipsis">
          Shruti Jain, Riya Raj, Ankita K
        </p>
      </div>
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center overflow-hidden relative shrink-0 text-[#6b5f7a] text-ellipsis w-full">
        <p className="leading-[21px] overflow-hidden text-ellipsis">
          (Sr. Fashion Designer @Max Fashion)
        </p>
      </div>
    </div>
  );
}

function SessionMeta() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="session-meta"
    >
      <div
        className="overflow-clip relative shrink-0 size-[24px]"
        data-name="video-camera"
      >
        <div
          className="-translate-y-1/2 absolute aspect-[22.5/13.5] left-[8.33%] right-[8.33%] top-1/2"
          data-name="svg"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 20 12"
          >
            <path
              d={svgPaths.p2d857100}
              fill="var(--fill-0, #6B5F7A)"
              id="svg"
            />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[14px] text-left whitespace-nowrap">
        <p className="leading-[21px]">5 hrs</p>
      </div>
    </div>
  );
}

function MentorDetailsWithSessionData() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
      data-name="mentor-details-with-session-data"
    >
      <HostDetails />
      <SessionMeta />
    </div>
  );
}

function SessionDetails() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full"
      data-name="session-details"
    >
      <ScheduleRow />
      <MentorDetailsWithSessionData />
    </div>
  );
}

function ActionGroup() {
  return (
    <div
      className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full"
      data-name="action-group"
    >
      <div
        className="bg-[#7d3aea] flex-[1_0_0] h-[40px] max-h-[40px] min-h-[40px] min-w-px relative rounded-[4px]"
        data-name="primary-button"
      >
        <div className="flex flex-row items-center justify-center max-h-[inherit] min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center max-h-[inherit] min-h-[inherit] px-[12px] py-[8px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.14px] whitespace-nowrap">
              <p className="leading-[20px]">Join session</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SessionContent() {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full"
      data-name="session-content"
    >
      <SessionDetails />
      <ActionGroup />
    </div>
  );
}

function Sessions() {
  return (
    <div className="relative shrink-0 w-full" data-name="sessions">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[24px] relative size-full">
        <button
          className="bg-white cursor-pointer max-w-[768px] min-w-[320px] relative rounded-[4px] shrink-0 w-full"
          data-name="session-card"
        >
          <div className="flex flex-col justify-center max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col gap-[12px] items-start justify-center max-w-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
              <SessionHeader />
              <SessionContent />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute border border-[#e2d9ef] border-solid inset-0 pointer-events-none rounded-[4px]"
          />
        </button>
      </div>
    </div>
  );
}

function SessionsScreenContent() {
  return (
    <div
      className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 max-w-[724px] min-w-[360px] top-[108px] w-[390px]"
      data-name="sessions-screen-content"
    >
      <TabList />
      <MentorsSessioTabGround />
      <Sessions />
    </div>
  );
}

function NavItem() {
  return (
    <div
      className="content-stretch flex flex-col gap-px h-[50px] items-center px-[4px] py-[2px] relative shrink-0 w-[58px]"
      data-name="nav-item"
    >
      <div
        className="overflow-clip relative shrink-0 size-[24px]"
        data-name="home"
      >
        <div
          className="absolute inset-[9.37%_12.5%_12.5%_12.5%]"
          data-name="Svg"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 18 18.7502"
          >
            <path
              d={svgPaths.p3cb33200}
              fill="var(--fill-0, #6B5F7A)"
              id="Svg"
            />
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
    <div
      className="content-stretch flex flex-col gap-px h-[50px] items-center justify-center px-[4px] relative shrink-0 w-[58px]"
      data-name="nav-item"
    >
      <div
        className="overflow-clip relative shrink-0 size-[24px]"
        data-name="job"
      >
        <div
          className="absolute inset-[9.38%_9.38%_15.63%_9.38%]"
          data-name="Svg"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 19.5 18"
          >
            <path
              d={svgPaths.p37245000}
              fill="var(--fill-0, #6B5F7A)"
              id="Svg"
            />
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
    <div
      className="content-stretch flex flex-col gap-px h-[50px] items-center justify-center px-[4px] relative shrink-0 w-[58px]"
      data-name="nav-item"
    >
      <div
        className="overflow-clip relative shrink-0 size-[24px]"
        data-name="plus"
      >
        <div className="absolute inset-[12.5%]" data-name="Svg">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 18 18"
          >
            <path
              d={svgPaths.pc4f6100}
              fill="var(--fill-0, #6B5F7A)"
              id="Svg"
            />
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
    <div
      className="content-stretch flex flex-col gap-px h-[50px] items-center px-[4px] relative shrink-0 w-[58px]"
      data-name="nav-item"
    >
      <div
        className="overflow-clip relative shrink-0 size-[24px]"
        data-name="mentors"
      >
        <div
          className="-translate-y-1/2 absolute aspect-[23.583908081054688/15.002283096313477] left-[8.33%] right-[8.33%] top-[calc(50%-0.5px)]"
          data-name="Svg"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 20 13"
          >
            <path
              d={svgPaths.p1bea1d70}
              fill="var(--fill-0, #1A1128)"
              id="Svg"
            />
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
    <div
      className="content-stretch flex flex-col gap-px h-[50px] items-center justify-center px-[4px] relative shrink-0 w-[58px]"
      data-name="nav-item"
    >
      <div
        className="bg-[#fffeff] content-stretch flex items-center justify-center p-[2px] relative shrink-0 size-[24px]"
        data-name="profile"
      >
        <div
          className="relative rounded-[24px] shrink-0 size-[18px]"
          data-name="image"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
            <img
              alt=""
              className="absolute h-[353.74%] left-[-79.64%] max-w-none top-[-54.26%] w-[235.82%]"
              src={imgImage}
            />
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
    <div
      className="bg-white h-[46px] relative shrink-0 w-[390px]"
      data-name="bottom-safe-area"
    >
      <div
        className="-translate-x-1/2 absolute bg-[#1a1128] bottom-[7.69px] h-[4.808px] left-1/2 rounded-[200px] w-[128.846px]"
        data-name="home-indicator"
      />
    </div>
  );
}

function BottomNav() {
  return (
    <div
      className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch drop-shadow-[0px_1px_2px_rgba(200,192,212,0.6)] flex flex-col items-center left-1/2 max-w-[800px] min-w-[360px] w-[390px]"
      data-name="bottom-nav"
    >
      <div
        className="bg-white content-stretch drop-shadow-[0px_-1px_2px_rgba(200,192,212,0.6)] flex gap-[12px] h-[68px] items-center justify-center px-[16px] py-[8px] relative shrink-0 w-[390px]"
        data-name="bottom-nav"
      >
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
    <div
      className="h-[15.385px] relative shrink-0 w-[19.231px]"
      data-name="iOS / icon / small / Mobile Signal"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 19.2308 15.3846"
      >
        <g id="iOS / icon / small / Mobile Signal">
          <path
            d={svgPaths.p34f07b00}
            fill="var(--fill-0, #1A1128)"
            id="Time"
          />
        </g>
      </svg>
    </div>
  );
}

function NetworkIcons() {
  return (
    <div className="relative shrink-0 size-[15.385px]" data-name="NetworkIcons">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15.3846 15.3846"
      >
        <g id="NetworkIcons">
          <path
            d={svgPaths.p19e22200}
            fill="var(--fill-0, #1A1128)"
            id="icon"
          />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div
      className="h-[15.385px] relative shrink-0 w-[24.038px]"
      data-name="Battery"
    >
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24.0385 15.3846"
      >
        <g id="Battery">
          <path
            d={svgPaths.p19d3a300}
            id="outline border"
            opacity="0.35"
            stroke="var(--stroke-0, #9D94AA)"
            strokeOpacity="0.4"
            strokeWidth="0.961538"
          />
          <path
            d={svgPaths.p2a856600}
            fill="var(--fill-0, #1A1128)"
            id="node"
            opacity="0.4"
          />
          <path
            d={svgPaths.p3ec88600}
            fill="var(--fill-0, #1A1128)"
            id="charge"
          />
        </g>
      </svg>
    </div>
  );
}

function Indicators() {
  return (
    <div
      className="content-stretch flex gap-[2px] items-center relative shrink-0"
      data-name="indicators"
    >
      <IOsIconSmallMobileSignal />
      <NetworkIcons />
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div
      className="bg-[#fffeff] content-stretch flex h-[44px] items-center justify-between overflow-clip px-[16px] py-[8px] relative shrink-0 w-[390px]"
      data-name="status-bar"
    >
      <p
        className="[word-break:break-word] flex-[1_0_0] font-['Roboto:Regular',sans-serif] font-normal leading-[20.192px] min-w-px relative text-[#1a1128] text-[14.423px] tracking-[-0.3077px]"
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        9:41
      </p>
      <Indicators />
    </div>
  );
}

function SearchInput() {
  return (
    <div
      className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[4px]"
      data-name="search-input"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[rgba(157,148,170,0.4)] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[4px] relative size-full">
          <div
            className="overflow-clip relative shrink-0 size-[16px]"
            data-name="search"
          >
            <div
              className="absolute inset-[9.29%_9.37%_9.37%_9.29%]"
              data-name="Svg"
            >
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 13.0141 13.0141"
              >
                <path
                  d={svgPaths.p2bb90e00}
                  fill="var(--fill-0, #6B5F7A)"
                  id="Svg"
                />
              </svg>
            </div>
          </div>
          <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px overflow-hidden relative text-[#6b5f7a] text-[14px] text-ellipsis whitespace-nowrap">
            <p className="leading-[21px] overflow-hidden text-ellipsis">
              Search Sessions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchContent() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] gap-[12px] h-[40px] items-center min-w-px relative"
      data-name="search-content"
    >
      <SearchInput />
    </div>
  );
}

function FilterAction() {
  return (
    <div
      className="content-stretch flex items-center p-[8px] relative shrink-0"
      data-name="filter-action"
    >
      <div
        className="overflow-clip relative shrink-0 size-[24px]"
        data-name="funnel"
      >
        <div
          className="-translate-y-1/2 absolute aspect-[19.49766731262207/18.00037384033203] left-[12.5%] right-[12.5%] top-1/2"
          data-name="Svg"
        >
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 18 16"
          >
            <path
              d={svgPaths.p30a01380}
              fill="var(--fill-0, #6B5F7A)"
              id="Svg"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeaderActions() {
  return (
    <div
      className="content-stretch flex gap-[8px] items-center relative shrink-0"
      data-name="header-actions"
    >
      <FilterAction />
    </div>
  );
}

function TopBar() {
  return (
    <div
      className="-translate-x-1/2 absolute bg-[#fffeff] content-stretch flex flex-col items-start left-1/2 top-0 w-[390px]"
      data-name="top-bar"
    >
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

export default function MentorsSessionWebinar() {
  return (
    <div
      className="bg-[#fffeff] relative size-full"
      data-name="mentors/session-webinar"
    >
      <SessionsScreenContent />
      <BottomNav />
      <TopBar />
    </div>
  );
}
