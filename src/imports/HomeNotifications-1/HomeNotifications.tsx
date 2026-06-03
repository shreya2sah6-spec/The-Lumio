import svgPaths from "./svg-nb0h4m9qy5";
import imgNotificationTime from "./8a0297188511b9e7d739e0bdb0fad1599992ea67.png";
import imgNotificationTime1 from "./5d686febbf6bd99db27d32ec61024adf89b31b4f.png";

function SectionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="section-header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#2d2040] text-[20px]">
            <p className="leading-[28px]">Today</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationContent() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="notification-content">
      <div className="pointer-events-none relative rounded-[200px] shrink-0 size-[48px]" data-name="notification-time">
        <div className="absolute inset-0 overflow-hidden rounded-[200px]">
          <img alt="" className="absolute h-[514.44%] left-[-108.64%] max-w-none top-[-86.62%] w-[342.96%]" src={imgNotificationTime} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#c8bbda] border-solid inset-[-0.5px] rounded-[200.5px]" />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#433059] text-[16px]">
        <p className="leading-[24px]">Mentorship Booking confirmed by shruti jain.</p>
      </div>
    </div>
  );
}

function NotificationItem() {
  return (
    <div className="bg-[#f7f4fa] relative shrink-0 w-full" data-name="notification-item">
      <div aria-hidden="true" className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center px-[16px] py-[12px] relative size-full">
          <NotificationContent />
          <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] text-right tracking-[0.24px] w-full">
            <p className="leading-[18px]">10 min ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationContent1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="notification-content">
      <div className="pointer-events-none relative rounded-[8px] shrink-0 size-[48px]" data-name="notification-time">
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-full left-[-37.05%] max-w-none top-[-0.14%] w-[178.57%]" src={imgNotificationTime1} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#c8bbda] border-solid inset-0 rounded-[8px]" />
      </div>
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#433059] text-[16px]">
        <p className="leading-[24px]">Your job application for sabyasachi got views.</p>
      </div>
    </div>
  );
}

function NotificationItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="notification-item">
      <div aria-hidden="true" className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center px-[16px] py-[12px] relative size-full">
          <NotificationContent1 />
          <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b5f7a] text-[12px] text-right tracking-[0.24px] w-full">
            <p className="leading-[18px]">15 min ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationsList() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="notifications-list">
      <NotificationItem />
      <NotificationItem1 />
    </div>
  );
}

function NotificationsScreen() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] items-start left-1/2 max-w-[800px] min-w-[360px] py-[20px] top-[108px] w-[390px]" data-name="notifications-screen">
      <SectionHeader />
      <NotificationsList />
    </div>
  );
}

function BottomSafeArea() {
  return (
    <div className="absolute bg-white bottom-0 h-[46px] left-0 right-0" data-name="bottom-safe-area">
      <div className="-translate-x-1/2 absolute bg-[#1a1128] bottom-[7.69px] h-[4.808px] left-1/2 rounded-[200px] w-[128.846px]" data-name="home-indicator" />
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
      <p className="[word-break:break-word] font-['Roboto_Serif:600',sans-serif] leading-[31px] not-italic relative shrink-0 text-[#1a1128] text-[24px] whitespace-nowrap">{`Notifications `}</p>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute bg-[#fffeff] content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="top-bar">
      <StatusBar />
      <div className="bg-[#fffeff] relative shrink-0 w-full" data-name="header">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
            <NavActions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeNotifications() {
  return (
    <div className="bg-[#fffeff] relative size-full" data-name="home/notifications">
      <NotificationsScreen />
      <BottomSafeArea />
      <TopBar />
    </div>
  );
}