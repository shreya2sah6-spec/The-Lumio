import { useNavigate } from "react-router-dom";
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
} from "@phosphor-icons/react";
import { PageHeader } from "../components/PageHeader";
import { AppLayout } from "../components/AppLayout";
import type { Icon } from "@phosphor-icons/react";

function SettingsItem({
  icon: IconComponent,
  label,
  onClick,
  isDestructive,
}: {
  icon: Icon;
  label: string;
  onClick?: () => void;
  isDestructive?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="flex gap-[12px] items-center py-[12px] w-full border-b border-[rgba(157,148,170,0.4)] cursor-pointer"
    >
      <IconComponent
        size={24}
        weight="regular"
        color={isDestructive ? "#DE3226" : "#1A1128"}
      />
      <div className="flex-1 font-['Manrope',sans-serif] font-medium text-[16px] leading-[25px] tracking-[0.16px] text-left">
        <p className={isDestructive ? "text-[#de3226]" : "text-[#1a1128]"}>
          {label}
        </p>
      </div>
      {!isDestructive && (
        <div className="p-[8px] shrink-0">
          <CaretRight size={24} weight="regular" color="#6B5F7A" />
        </div>
      )}
    </button>
  );
}

export function SettingsPage() {
  const navigate = useNavigate();

  return (
    <AppLayout
      hideNav
      header={<PageHeader title="Settings" onBack={() => navigate("/profile")} />}
    >
        {/* Content */}
        <div className="px-[16px] py-[20px]">
          {/* Your account */}
          <div className="flex flex-col gap-0 mb-[20px] pb-[20px]">
            <h2 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] mb-[12px]">
              Your account
            </h2>
            <SettingsItem icon={Lock} label="Login & security" />
          </div>

          {/* Booking */}
          <div className="flex flex-col gap-0 mb-[20px] pb-[20px]">
            <h2 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] mb-[12px]">
              Booking
            </h2>
            <SettingsItem icon={UsersThree} label="Mentorship" />
            <SettingsItem icon={Presentation} label="Webinar" />
          </div>

          {/* Payments */}
          <div className="flex flex-col gap-0 mb-[20px] pb-[20px]">
            <h2 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] mb-[12px]">
              Payments
            </h2>
            <SettingsItem icon={CreditCard} label="Methods & history" />
          </div>

          {/* Profile & visibility */}
          <div className="flex flex-col gap-0 mb-[20px] pb-[20px]">
            <h2 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] mb-[12px]">
              Profile & visibility
            </h2>
            <SettingsItem icon={Eye} label="Profile visibility" />
            <SettingsItem icon={Suitcase} label="Open for Work" />
          </div>

          {/* App */}
          <div className="flex flex-col gap-0 mb-[20px] pb-[20px]">
            <h2 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] mb-[12px]">
              App
            </h2>
            <SettingsItem icon={BellSimple} label="Notification" />
            <SettingsItem icon={BookmarkSimple} label="Saved" />
            <SettingsItem icon={Sun} label="Appearance" />
          </div>

          {/* Support */}
          <div className="flex flex-col gap-0 mb-[20px] pb-[20px]">
            <h2 className="font-['Roboto_Serif',serif] font-semibold text-[#1a1128] text-[20px] leading-[28px] mb-[12px]">
              Support
            </h2>
            <SettingsItem icon={Info} label="Help & feedback" />
            <SettingsItem icon={FileTxt} label="Terms & privacy" />
            <SettingsItem icon={SignOut} label="Log Out" isDestructive />
          </div>
        </div>

    </AppLayout>
  );
}
