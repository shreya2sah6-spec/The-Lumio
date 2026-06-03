import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Phone, ArrowLeft, ArrowRight, Check } from "@phosphor-icons/react";
import imgLogo from "@/imports/AuthPhoneEntry/4cc7ee0fe5188ecaeb60505d7ea8a035d0ee470b.png";
import imgGoogle from "@/imports/AuthPhoneEntry/c821627267af44f079059837a664f4fe169b9fb6.png";
import imgLinkedin from "@/imports/AuthPhoneEntry/fbbd2871c82071c66cadf90243ea1b3ae31ffda5.png";
import imgApple from "@/imports/AuthPhoneEntry/c8008663eda301daaf444ff0f8fc6e191d46cac2.png";

// Status bar SVG paths kept as Figma-exact UI chrome
const STATUS_BAR_PATHS = {
  mobileSignal: "M3.26916 9.60239C3.8002 9.60239 4.23107 10.0333 4.23107 10.5643V12.4872C4.23107 13.0182 3.8002 13.4491 3.26916 13.4491H2.30724C1.77641 13.4488 1.3463 13.018 1.3463 12.4872V10.5643C1.3463 10.0334 1.77641 9.60263 2.30724 9.60239H3.26916ZM7.75646 7.67954C8.28748 7.67956 8.71837 8.11043 8.71837 8.64145V12.4872C8.71837 13.0182 8.28748 13.449 7.75646 13.4491H6.79455C6.26365 13.4489 5.83361 13.0181 5.83361 12.4872V8.64145C5.83361 8.11052 6.26365 7.67971 6.79455 7.67954H7.75646ZM12.2438 5.43637C12.7747 5.43647 13.2046 5.86638 13.2047 6.39731V12.4872C13.2047 13.0181 12.7747 13.449 12.2438 13.4491H11.2819C10.7509 13.449 10.3209 13.0181 10.3209 12.4872V6.39731C10.321 5.86639 10.7509 5.43648 11.2819 5.43637H12.2438ZM16.7311 3.19223C17.262 3.1924 17.692 3.6232 17.692 4.15415V12.4872C17.692 13.0181 17.262 13.4489 16.7311 13.4491H15.7692C15.2381 13.449 14.8072 13.0182 14.8072 12.4872V4.15415C14.8072 3.62313 15.2381 3.19227 15.7692 3.19223H16.7311Z",
  wifi: "M5.86291 11.2694C7.08941 10.2323 8.88553 10.2321 10.1119 11.2694C10.1736 11.3252 10.2098 11.404 10.2115 11.4872C10.2132 11.5703 10.1801 11.6506 10.1207 11.7088L8.19982 13.6473C8.14355 13.7041 8.06686 13.7362 7.98693 13.7362C7.90698 13.7361 7.83028 13.7041 7.77404 13.6473L5.85314 11.7088C5.79385 11.6505 5.76154 11.5703 5.7633 11.4872C5.76508 11.404 5.80118 11.3251 5.86291 11.2694ZM3.29943 8.68442C5.94193 6.22636 10.0349 6.22636 12.6774 8.68442C12.7367 8.74203 12.7703 8.82142 12.7711 8.90415C12.7718 8.98686 12.7395 9.06614 12.6813 9.12485L11.5709 10.2469C11.4566 10.3613 11.2723 10.364 11.1549 10.2528C10.2871 9.46701 9.15759 9.03201 7.98693 9.03208C6.81713 9.03263 5.68901 9.46758 4.82189 10.2528C4.70455 10.364 4.52022 10.3613 4.40587 10.2469L3.29552 9.12485C3.23716 9.06621 3.20403 8.98688 3.2047 8.90415C3.20548 8.82134 3.23996 8.74203 3.29943 8.68442ZM0.736929 6.10532C4.78991 2.22126 11.184 2.22118 15.2369 6.10532C15.2956 6.16301 15.3282 6.24181 15.3287 6.32407C15.3292 6.40622 15.2977 6.48544 15.2399 6.5438L14.1276 7.66587C14.0131 7.78071 13.8278 7.78193 13.7115 7.6688C12.1674 6.20072 10.1176 5.38178 7.98693 5.38169C5.85613 5.38174 3.80665 6.20067 2.26232 7.6688C2.14611 7.7823 1.95977 7.78115 1.84533 7.66587L0.733999 6.5438C0.676061 6.48537 0.643616 6.40635 0.644156 6.32407C0.644697 6.24178 0.678219 6.16298 0.736929 6.10532Z",
  batteryOutline: "M3.02599 2.71124H19.0514C20.2019 2.71129 21.1344 3.64466 21.1344 4.79522V10.5638C21.1344 11.7143 20.2019 12.6477 19.0514 12.6478H3.02599C1.8754 12.6478 0.942008 11.7144 0.942008 10.5638V4.79522C0.942008 3.64463 1.8754 2.71124 3.02599 2.71124Z",
  batteryNode: "M22.5769 5.75643V9.60258C23.3507 9.27684 23.8539 8.51906 23.8539 7.67951C23.8539 6.83996 23.3507 6.08218 22.5769 5.75643",
  batteryCharge: "M2.38462 5.4359C2.38462 4.72784 2.95861 4.15385 3.66667 4.15385H18.4103C19.1183 4.15385 19.6923 4.72784 19.6923 5.4359V9.92308C19.6923 10.6311 19.1183 11.2051 18.4103 11.2051H3.66667C2.95861 11.2051 2.38462 10.6311 2.38462 9.92308V5.4359Z",
};

// ─── Shared primitives ────────────────────────────────────────────────────────

function StatusBar() {
  return (
    <div className="w-full bg-[#fffeff] flex h-[44px] items-center justify-between px-4 py-2 shrink-0">
      <p className="font-['Roboto',sans-serif] font-normal text-[14.423px] leading-[20.192px] text-[#1a1128] tracking-[-0.3077px]">
        9:41
      </p>
      <div className="flex gap-[2px] items-center shrink-0">
        <div className="h-[15.385px] relative w-[19.231px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2308 15.3846">
            <path d={STATUS_BAR_PATHS.mobileSignal} fill="#1A1128" />
          </svg>
        </div>
        <div className="relative size-[15.385px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3846 15.3846">
            <path d={STATUS_BAR_PATHS.wifi} fill="#1A1128" />
          </svg>
        </div>
        <div className="h-[15.385px] relative w-[24.038px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0385 15.3846">
            <path d={STATUS_BAR_PATHS.batteryOutline} opacity="0.35" stroke="#9D94AA" strokeOpacity="0.4" strokeWidth="0.961538" fill="none" />
            <path d={STATUS_BAR_PATHS.batteryNode} fill="#1A1128" opacity="0.4" />
            <path d={STATUS_BAR_PATHS.batteryCharge} fill="#1A1128" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="w-full bg-white flex items-end justify-center h-[46px] pb-[7.69px] shrink-0">
      <div className="bg-[#1a1128] h-[4.808px] rounded-[200px] w-[128.846px]" />
    </div>
  );
}

function BrandLogo() {
  return (
    <div className="h-[42px] w-[32px] shrink-0">
      <img alt="Lumio" className="size-full object-cover" src={imgLogo} />
    </div>
  );
}

function ScreenTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Roboto_Serif',serif] font-semibold not-italic text-[#2d2040] text-[24px] leading-[31px] w-full">
      {children}
    </p>
  );
}

function ScreenSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[16px] leading-[25px] tracking-[0.16px] w-full">
      {children}
    </p>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['Manrope',sans-serif] font-medium text-[#2d2040] text-[16px] leading-[25px] tracking-[0.16px] w-full">
      {children}
    </p>
  );
}

interface TextInputProps {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  icon?: "phone";
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}

function TextInput({ value, onChange, placeholder, icon, inputMode }: TextInputProps) {
  return (
    <div className="bg-white rounded-[4px] w-full relative shadow-[0px_1px_0.5px_rgba(200,192,212,0.6)]">
      <div className="absolute border border-[#e2d9ef] inset-[-0.5px] pointer-events-none rounded-[4.5px]" />
      <div className="flex items-center justify-between px-4 py-3">
        <input
          className="flex-1 font-['Manrope',sans-serif] font-normal text-[#2d2040] text-[14px] leading-[21px] bg-transparent outline-none placeholder:text-[#6b5f7a]"
          inputMode={inputMode}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {icon === "phone" && (
          <div className="ml-2 shrink-0">
            <Phone size={24} color="#6B5F7A" />
          </div>
        )}
      </div>
    </div>
  );
}

function PrimaryButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-[#7d3aea] to-[#5e28b5] h-12 rounded-[8px] w-full flex items-center justify-center gap-2 px-4 py-3 cursor-pointer"
    >
      <span className="font-['Manrope',sans-serif] font-semibold text-white text-[16px] leading-[20px] tracking-[0.48px] whitespace-nowrap">
        {label}
      </span>
      <ArrowRight size={24} color="white" />
    </button>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex gap-4 items-center w-full">
      <div className="flex-1 h-px bg-[#9D94AA]/40" />
      <span className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[12px] leading-[18px] tracking-[0.24px] whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-[#9D94AA]/40" />
    </div>
  );
}

function ProgressBar({ total, filled }: { total: number; filled: number }) {
  return (
    <div className="flex gap-3 items-center w-full">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex-1 h-1 min-w-0 overflow-clip rounded-full relative">
          <div
            className={`absolute inset-0 rounded-full ${
              i < filled ? "bg-[#7d3aea]" : "bg-[#c9b4f6] border border-[#e2d9ef]"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

// ─── Auth step screens ────────────────────────────────────────────────────────

function PhoneEntryScreen({ onNext }: { onNext: () => void }) {
  const [phone, setPhone] = useState("");

  return (
    <div className="flex flex-col gap-7 w-full">
      <div className="flex flex-col gap-8 w-full">
        <BrandLogo />
        <div className="flex flex-col gap-4 w-full">
          <ScreenTitle>Your Work should open Doors.</ScreenTitle>
          <ScreenSubtitle>{"India's fashion community starts here."}</ScreenSubtitle>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <FieldLabel>Enter mobile number</FieldLabel>
          <TextInput value={phone} onChange={setPhone} placeholder="99999 99999" icon="phone" inputMode="tel" />
        </div>
        <PrimaryButton label="Send OTP" onClick={onNext} />
        <div className="flex flex-col gap-1 items-center w-full">
          <p className="font-['Manrope',sans-serif] font-normal text-[#433059] text-[12px] leading-[18px] tracking-[0.24px] text-center">
            By continuing you agree to our
          </p>
          <div className="flex gap-2 items-center justify-center">
            <button className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[14px] leading-[21px] underline whitespace-nowrap">
              Terms of Services
            </button>
            <button className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[14px] leading-[21px] underline whitespace-nowrap">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-9 items-center w-full">
        <Divider label="Or continue with" />
        <div className="flex gap-4 items-center">
          {[
            { src: imgGoogle, alt: "Google" },
            { src: imgLinkedin, alt: "LinkedIn" },
            { src: imgApple, alt: "Apple" },
          ].map(({ src, alt }) => (
            <button
              key={alt}
              className="bg-white rounded-full size-12 flex items-center justify-center p-2 shadow-[0px_1px_4px_0px_rgba(200,192,212,0.6)] border border-[#e2d9ef] cursor-pointer"
            >
              <img src={src} alt={alt} className="size-[14px] object-contain" />
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-1 items-center justify-center w-full">
        <p className="font-['Manrope',sans-serif] font-normal text-[#2d2040] text-[14px] leading-[21px] whitespace-nowrap">
          New to Lumio?
        </p>
        <button className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[14px] leading-[20px] tracking-[0.14px] px-3 py-2 rounded-[24px] cursor-pointer">
          Sign up
        </button>
      </div>
    </div>
  );
}

const OTP_LENGTH = 4;
const OTP_INITIAL_SECONDS = 58;

function OtpVerifyScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [seconds, setSeconds] = useState(OTP_INITIAL_SECONDS);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [seconds]);

  const handleDigit = (index: number, val: string) => {
    const digit = val.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[index] = digit;
    setDigits(next);
    if (digit && index < OTP_LENGTH - 1) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const timerLabel = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-3 w-full">
        <BrandLogo />
        <div className="flex flex-col gap-4 w-full">
          <ScreenTitle>Verify your Number</ScreenTitle>
          <ScreenSubtitle>In a few moments you will be ready to share</ScreenSubtitle>
        </div>
        <div className="flex gap-3 items-center w-full">
          <p className="font-['Manrope',sans-serif] font-medium text-[#2d2040] text-[16px] leading-[25px] tracking-[0.16px] whitespace-nowrap">
            8292XXXXXX
          </p>
          <div className="flex gap-5 items-center">
            <p className="font-['Manrope',sans-serif] font-medium text-[#6b5f7a] text-[16px] leading-[25px] tracking-[0.16px] whitespace-nowrap">
              {timerLabel}
            </p>
            <button onClick={onBack} className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[14px] leading-[20px] px-3 py-2 rounded-[24px] cursor-pointer">
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <FieldLabel>4 digit OTP</FieldLabel>
        <div className="flex gap-2 items-center">
          {digits.map((digit, i) => (
            <div key={i} className="relative w-[42px]">
              <div className="absolute border border-[rgba(157,148,170,0.4)] inset-0 pointer-events-none rounded-[4px]" />
              <input
                ref={(el) => { inputRefs.current[i] = el; }}
                className="bg-white w-full rounded-[4px] px-1 py-2 font-['Manrope',sans-serif] font-semibold text-[#9d90ad] text-[18px] leading-[28px] text-center outline-none"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleDigit(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
              />
            </div>
          ))}
        </div>
      </div>

      <PrimaryButton label="Verify & continue" onClick={onNext} />

      <div className="flex gap-1 items-center justify-center w-full">
        <p className="font-['Manrope',sans-serif] font-normal text-[#6b5f7a] text-[14px] leading-[21px] whitespace-nowrap">
          Didn&apos;t get a code
        </p>
        <button
          onClick={() => setSeconds(OTP_INITIAL_SECONDS)}
          className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[14px] leading-[20px] tracking-[0.14px] px-3 py-2 rounded-[24px] cursor-pointer"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
}

function OnboardingNameScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-6 w-full">
        <button onClick={onBack} className="flex items-center p-2 -ml-2 cursor-pointer" aria-label="Go back">
          <ArrowLeft size={24} color="#1A1128" />
        </button>
        <ProgressBar total={3} filled={1} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <ScreenTitle>What should we call you?</ScreenTitle>
        <ScreenSubtitle>Your profile name helps people recognize you.</ScreenSubtitle>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <FieldLabel>Enter your full name</FieldLabel>
        <TextInput value={name} onChange={setName} placeholder="amit kumar" />
      </div>
      <div className="pt-8 w-full">
        <PrimaryButton label="Continue" onClick={onNext} />
      </div>
    </div>
  );
}

// ─── Chip selector ────────────────────────────────────────────────────────────


interface ChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  showTick?: boolean;
}

function Chip({ label, selected, onClick, showTick = false }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-[8px] border bg-white cursor-pointer transition-colors ${
        selected ? "border-[#7d3aea]" : "border-[#e2d9ef]"
      }`}
    >
      {showTick && selected && (
        <Check size={12} color="#7D3AEA" weight="bold" />
      )}
      <span className="font-['Manrope',sans-serif] font-medium text-[#433059] text-[14px] leading-[21px] whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}

// ─── Domain screen ────────────────────────────────────────────────────────────

const DOMAIN_OPTIONS = [
  "Fashion", "Textile", "Jewelry", "Accessory",
  "Footwear", "Leather", "Illustrator", "Stylist", "Merchandising",
];

function DomainScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (d: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(d) ? next.delete(d) : next.add(d);
      return next;
    });

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-6 w-full">
        <button onClick={onBack} className="flex items-center p-2 -ml-2 cursor-pointer" aria-label="Go back">
          <ArrowLeft size={24} color="#1A1128" />
        </button>
        <ProgressBar total={3} filled={2} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <ScreenTitle>{"What's your domain?"}</ScreenTitle>
        <ScreenSubtitle>Pick the areas that best define your fashion expertise.</ScreenSubtitle>
      </div>
      <div className="flex flex-wrap gap-3 w-full">
        {DOMAIN_OPTIONS.map((d) => (
          <Chip key={d} label={d} selected={selected.has(d)} onClick={() => toggle(d)} showTick />
        ))}
      </div>
      <div className="pt-4 w-full">
        <PrimaryButton label="Continue" onClick={onNext} />
      </div>
    </div>
  );
}

// ─── Experience screen ────────────────────────────────────────────────────────

const EXPERIENCE_OPTIONS = ["Student", "Fresher", "1-2 Yrs", "3-5 Yrs", "6-9 Yrs", "9-15 yrs", "16+ yrs"];

function ExperienceScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-6 w-full">
        <button onClick={onBack} className="flex items-center p-2 -ml-2 cursor-pointer" aria-label="Go back">
          <ArrowLeft size={24} color="#1A1128" />
        </button>
        <ProgressBar total={3} filled={3} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <ScreenTitle>Years of experience?</ScreenTitle>
        <ScreenSubtitle>Help us personalize your Lumio feed and opportunities.</ScreenSubtitle>
      </div>
      <div className="flex flex-wrap gap-3 w-full">
        {EXPERIENCE_OPTIONS.map((e) => (
          <Chip key={e} label={e} selected={selected === e} onClick={() => setSelected(e)} />
        ))}
      </div>
      <div className="pt-4 w-full">
        <PrimaryButton label="Start the journey" onClick={onNext} />
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

type AuthStep = "phone" | "otp" | "name" | "domain" | "experience";

export function AuthPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<AuthStep>("phone");

  const screens: Record<AuthStep, React.ReactNode> = {
    phone:      <PhoneEntryScreen onNext={() => setStep("otp")} />,
    otp:        <OtpVerifyScreen onNext={() => setStep("name")} onBack={() => setStep("phone")} />,
    name:       <OnboardingNameScreen onNext={() => setStep("domain")} onBack={() => setStep("otp")} />,
    domain:     <DomainScreen onNext={() => setStep("experience")} onBack={() => setStep("name")} />,
    experience: <ExperienceScreen onNext={() => navigate("/home")} onBack={() => setStep("domain")} />,
  };

  return (
    <div className="min-h-screen bg-[#f0ecf7] flex items-start justify-center">
      <div className="w-full max-w-[800px] min-w-0 bg-[#fffeff] flex flex-col min-h-screen">
        <StatusBar />
        <div className="flex-1 px-4 pt-8 pb-4 overflow-y-auto">
          <div className="w-full max-w-[800px] mx-auto">
            {screens[step]}
          </div>
        </div>
        <HomeIndicator />
      </div>
    </div>
  );
}
