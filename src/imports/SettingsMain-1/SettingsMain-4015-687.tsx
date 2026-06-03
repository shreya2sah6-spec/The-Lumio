import {
  Lock,
  UsersThree,
  Presentation,
  CreditCard,
  Eye,
  Suitcase,
  BellSimple,
  BookmarkSimple,
  Sun,
  Info,
  FileTxt,
  SignOut,
  CaretRight,
  ArrowLeft,
} from "@phosphor-icons/react";
import svgPaths from "./svg-b5ac84l9yn";

function ItemAction() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="item-action">
      <CaretRight size={24} weight="regular" color="#6B5F7A" />
    </div>
  );
}

function SettingsListItem() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[12px] relative shrink-0 w-full" data-name="settings-list-item">
      <Lock size={24} weight="regular" color="#1A1128" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#1a1128] text-[16px] tracking-[0.16px]">
        <p className="leading-[25px]">{`Login & security`}</p>
      </div>
      <ItemAction />
    </div>
  );
}

function AccountSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="account-section">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[20px] w-full">
        <p className="leading-[28px]">Your account</p>
      </div>
      <SettingsListItem />
    </div>
  );
}

function ItemAction1() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="item-action">
      <CaretRight size={24} weight="regular" color="#6B5F7A" />
    </div>
  );
}

function SettingsListItem1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[12px] relative shrink-0 w-full" data-name="settings-list-item">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <UsersThree size={24} weight="regular" color="#1A1128" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#1a1128] text-[16px] tracking-[0.16px]">
        <p className="leading-[25px]">{`Mentorship `}</p>
      </div>
      <ItemAction1 />
    </div>
  );
}

function ItemAction2() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="item-action">
      <CaretRight size={24} weight="regular" color="#6B5F7A" />
    </div>
  );
}

function SettingsListItem2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[12px] relative shrink-0 w-full" data-name="settings-list-item">
      <Presentation size={24} weight="regular" color="#1A1128" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#1a1128] text-[16px] tracking-[0.16px]">
        <p className="leading-[25px]">Webinar</p>
      </div>
      <ItemAction2 />
    </div>
  );
}

function SettingsGroup() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="settings-group">
      <SettingsListItem1 />
      <SettingsListItem2 />
    </div>
  );
}

function BookingSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="booking-section">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[20px] w-full">
        <p className="leading-[28px]">Booking</p>
      </div>
      <SettingsGroup />
    </div>
  );
}

function ItemAction3() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="item-action">
      <CaretRight size={24} weight="regular" color="#6B5F7A" />
    </div>
  );
}

function SettingsListItem3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[12px] relative shrink-0 w-full" data-name="settings-list-item">
      <CreditCard size={24} weight="regular" color="#1A1128" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#1a1128] text-[16px] tracking-[0.16px]">
        <p className="leading-[25px]">{`Methods & history`}</p>
      </div>
      <ItemAction3 />
    </div>
  );
}

function PaymentSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="payment-section">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[20px] w-full">
        <p className="leading-[28px]">Payments</p>
      </div>
      <SettingsListItem3 />
    </div>
  );
}

function ItemAction4() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="item-action">
      <CaretRight size={24} weight="regular" color="#6B5F7A" />
    </div>
  );
}

function SettingsListItem4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[12px] relative shrink-0 w-full" data-name="settings-list-item">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <Eye size={24} weight="regular" color="#1A1128" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#1a1128] text-[16px] tracking-[0.16px]">
        <p className="leading-[25px]">Profile visibility</p>
      </div>
      <ItemAction4 />
    </div>
  );
}

function ItemAction5() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="item-action">
      <CaretRight size={24} weight="regular" color="#6B5F7A" />
    </div>
  );
}

function SettingsListItem5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[12px] relative shrink-0 w-full" data-name="settings-list-item">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <Suitcase size={24} weight="regular" color="#1A1128" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#1a1128] text-[16px] tracking-[0.16px]">
        <p className="leading-[25px]">Open for Work</p>
      </div>
      <ItemAction5 />
    </div>
  );
}

function SettingsGroup1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="settings-group">
      <SettingsListItem4 />
      <SettingsListItem5 />
    </div>
  );
}

function ProfileAndVisibilitySection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="profile-and-visibility-section">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[20px] w-full">
        <p className="leading-[28px]">{`Profile & visibility`}</p>
      </div>
      <SettingsGroup1 />
    </div>
  );
}

function ItemAction6() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="item-action">
      <CaretRight size={24} weight="regular" color="#6B5F7A" />
    </div>
  );
}

function SettingsListItem6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[12px] relative shrink-0 w-full" data-name="settings-list-item">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <BellSimple size={24} weight="regular" color="#1A1128" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#1a1128] text-[16px] tracking-[0.16px]">
        <p className="leading-[25px]">Notification</p>
      </div>
      <ItemAction6 />
    </div>
  );
}

function ItemAction7() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="item-action">
      <CaretRight size={24} weight="regular" color="#6B5F7A" />
    </div>
  );
}

function SettingsListItem7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[12px] relative shrink-0 w-full" data-name="settings-list-item">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <BookmarkSimple size={24} weight="regular" color="#1A1128" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#1a1128] text-[16px] tracking-[0.16px]">
        <p className="leading-[25px]">Saved</p>
      </div>
      <ItemAction7 />
    </div>
  );
}

function ItemAction8() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="item-action">
      <CaretRight size={24} weight="regular" color="#6B5F7A" />
    </div>
  );
}

function SettingsListItem8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[12px] relative shrink-0 w-full" data-name="settings-list-item">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <Sun size={24} weight="regular" color="#1A1128" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#1a1128] text-[16px] tracking-[0.16px]">
        <p className="leading-[25px]">Appearance</p>
      </div>
      <ItemAction8 />
    </div>
  );
}

function SettingsGroup2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="settings-group">
      <SettingsListItem6 />
      <SettingsListItem7 />
      <SettingsListItem8 />
    </div>
  );
}

function AppSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="app-section">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[20px] w-full">
        <p className="leading-[28px]">App</p>
      </div>
      <SettingsGroup2 />
    </div>
  );
}

function ItemAction9() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="item-action">
      <CaretRight size={24} weight="regular" color="#6B5F7A" />
    </div>
  );
}

function SettingsListItem9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[12px] relative shrink-0 w-full" data-name="settings-list-item">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <Info size={24} weight="regular" color="#1A1128" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#1a1128] text-[16px] tracking-[0.16px]">
        <p className="leading-[25px]">{`Help & feedback`}</p>
      </div>
      <ItemAction9 />
    </div>
  );
}

function ItemAction10() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="item-action">
      <CaretRight size={24} weight="regular" color="#6B5F7A" />
    </div>
  );
}

function SettingsListItem10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[12px] relative shrink-0 w-full" data-name="settings-list-item">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <FileTxt size={24} weight="regular" color="#1A1128" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#1a1128] text-[16px] tracking-[0.16px]">
        <p className="leading-[25px]">{`Terms & privacy`}</p>
      </div>
      <ItemAction10 />
    </div>
  );
}

function SettingsListItem11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[12px] relative shrink-0 w-[358px]" data-name="settings-list-item">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <SignOut size={24} weight="regular" color="#DE3226" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px relative text-[#de3226] text-[16px] tracking-[0.16px]">
        <p className="leading-[25px]">Log Out</p>
      </div>
    </div>
  );
}

function SettingsGroup3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="settings-group">
      <SettingsListItem9 />
      <SettingsListItem10 />
      <SettingsListItem11 />
    </div>
  );
}

function SupportSection() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="support-section">
      <div aria-hidden className="absolute border-[rgba(157,148,170,0.4)] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[20px] w-full">
        <p className="leading-[28px]">Support</p>
      </div>
      <SettingsGroup3 />
    </div>
  );
}

function SettingsSection() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[20px] items-start left-1/2 max-w-[800px] min-w-[360px] px-[16px] py-[20px] top-[108px] w-[390px]" data-name="settings-section">
      <AccountSection />
      <BookingSection />
      <PaymentSection />
      <ProfileAndVisibilitySection />
      <AppSection />
      <SupportSection />
    </div>
  );
}

function Time() {
  return (
    <div className="h-[20px] relative shrink-0 w-[24px]" data-name="time">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 20">
        <g id="time">
          <path d={svgPaths.p27eb4960} fill="var(--fill-0, #1A1128)" id="time_2" />
        </g>
      </svg>
    </div>
  );
}

function NetworkIcons() {
  return (
    <div className="h-[20px] relative shrink-0 w-[24px]" data-name="network-icons">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 20">
        <g id="network-icons">
          <path d={svgPaths.pca88280} fill="var(--fill-0, #1A1128)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[20px] relative shrink-0 w-[24px]" data-name="battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 20">
        <g id="battery">
          <path d={svgPaths.p27942200} id="outline-border" opacity="0.35" stroke="var(--stroke-0, #C8BBDA)" strokeWidth="0.8" />
          <path d={svgPaths.p3909c300} fill="var(--fill-0, #1A1128)" id="node" opacity="0.4" />
          <path d={svgPaths.p2d66c280} fill="var(--fill-0, #1A1128)" id="charge" />
        </g>
      </svg>
    </div>
  );
}

function Indicators() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="indicators">
      <Time />
      <NetworkIcons />
      <Battery />
    </div>
  );
}

function BackButton() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="back-button">
      <ArrowLeft size={24} weight="regular" color="#1A1128" />
    </div>
  );
}

function NavActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="nav-actions">
      <BackButton />
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Serif:600',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a1128] text-[24px] whitespace-nowrap">
        <p className="leading-[31px]">Settings</p>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fffeff] content-stretch flex flex-col items-start left-1/2 top-0 w-[390px]" data-name="top-bar">
      <div className="bg-[#fffeff] content-stretch flex gap-[8px] h-[44px] items-center overflow-clip px-[16px] py-[8px] relative shrink-0 w-[390px]" data-name="system-status-bar">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px relative text-[#1a1128] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[20px]">9:41</p>
        </div>
        <Indicators />
      </div>
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

export default function SettingsMain() {
  return (
    <div className="bg-[#fffeff] relative size-full" data-name="settings/main">
      <SettingsSection />
      <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col h-[46px] items-center justify-end left-1/2 pb-[8px] pt-[20px] px-[16px] w-[390px]" data-name="bottom-safe-area">
        <div className="bg-[#1a1128] h-[4px] relative rounded-[200px] shrink-0 w-[130px]" data-name="home-indicator" />
      </div>
      <TopBar />
    </div>
  );
}