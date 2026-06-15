import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, ArrowLeft, ArrowRight, Check } from "@phosphor-icons/react";
import { Button } from "../components/ui/button";
import { FieldError } from "../components/FieldError";
import { OtpInput } from "../components/OtpInput";
import { HeaderBackButton } from "../components/HeaderBackButton";
import { signInWithSocial, isInAppBrowser, classifyAuthError, type SocialProvider } from "../services/authService";
import {
  validatePhone,
  validateOtp,
  validateName,
  isPhoneDigit,
  isNameChar,
  type ValidationResult,
} from "../utils/validation";
import imgLogo from "@/imports/AuthPhoneEntry/4cc7ee0fe5188ecaeb60505d7ea8a035d0ee470b.png";
import imgGoogle from "@/imports/AuthPhoneEntry/c821627267af44f079059837a664f4fe169b9fb6.png";
import imgLinkedin from "@/imports/AuthPhoneEntry/fbbd2871c82071c66cadf90243ea1b3ae31ffda5.png";
import imgApple from "@/imports/AuthPhoneEntry/c8008663eda301daaf444ff0f8fc6e191d46cac2.png";

// ─── Shared primitives ────────────────────────────────────────────────────────

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
  validationState?: "default" | "focused" | "error";
  error?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  charFilter?: (char: string) => boolean;
}

function TextInput({
  value,
  onChange,
  placeholder,
  icon,
  inputMode,
  validationState = "default",
  error,
  onFocus,
  onBlur,
  charFilter,
}: TextInputProps) {
  const borderColor =
    validationState === "error"
      ? "#de3226"
      : validationState === "focused"
        ? "#1a1128"
        : "#e2d9ef";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (charFilter) {
      newValue = Array.from(newValue).filter(charFilter).join("");
    }
    onChange(newValue);
  };

  return (
    <div className="flex flex-col gap-[8px] w-full">
      <div className="bg-white rounded-[4px] w-full relative shadow-[0px_1px_0.5px_rgba(200,192,212,0.6)]">
        <div
          className="absolute border inset-[-0.5px] pointer-events-none rounded-[4.5px] transition-colors"
          style={{ borderColor }}
        />
        <div className="flex items-center justify-between px-4 py-3">
          <input
            className="flex-1 type-h5 text-[#1a1128] bg-transparent outline-none placeholder:font-normal placeholder:text-[#6b5f7a] placeholder:tracking-normal"
            inputMode={inputMode}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {icon === "phone" && (
            <div className="ml-2 shrink-0">
              <Phone size={24} color="#6B5F7A" />
            </div>
          )}
        </div>
      </div>
      {error && <FieldError message={error} />}
    </div>
  );
}

function PrimaryButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <Button onClick={onClick} variant="gradient" size="lg" className="w-full">
      {label}
      <ArrowRight className="size-6" />
    </Button>
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

// ─── Chip ─────────────────────────────────────────────────────────────────────

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
      className={`flex items-center gap-2 px-4 py-3 rounded-[8px] border bg-white cursor-pointer transition-colors h-[44px] ${
        selected ? "border-[#7d3aea] text-[#1a1128]" : "border-[#e2d9ef] text-[#6b5f7a]"
      }`}
    >
      {showTick && selected && <Check size={20} color="#7D3AEA" weight="bold" />}
      <span className={`font-['Manrope',sans-serif] font-${selected ? "medium" : "normal"} text-[16px] leading-[25px] whitespace-nowrap`}>
        {label}
      </span>
    </button>
  );
}

// ─── PhoneEntryScreen ─────────────────────────────────────────────────────────

function PhoneEntryScreen({ onNext, onSocialSuccess }: { onNext: () => void; onSocialSuccess: () => void }) {
  const [phone, setPhone] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [socialLoading, setSocialLoading] = useState<SocialProvider | null>(null);
  const [socialError, setSocialError] = useState<string | null>(null);
  const inAppBrowser = isInAppBrowser();

  // If the user just returned from a failed OAuth callback, show a friendly message.
  useEffect(() => {
    const errorKey = sessionStorage.getItem("lumio:social_auth_error");
    if (errorKey) {
      sessionStorage.removeItem("lumio:social_auth_error");
      if (errorKey === "cancelled") {
        // User pressed Cancel on Google's consent screen — no need to alarm them.
        setSocialError(null);
      } else {
        setSocialError("Sign-in didn't complete. Please try again.");
      }
    }
  }, []);

  const phoneValidation = validatePhone(phone);

  // Input border: error only after submitted + not currently focused
  const validationState: "default" | "focused" | "error" =
    isFocused ? "focused" : submitted && !phoneValidation.valid ? "error" : "default";

  // Error message: only after submission attempt
  const errorMessage = submitted && !phoneValidation.valid ? phoneValidation.error : undefined;

  function handleSendOtp() {
    setSubmitted(true);
    if (phoneValidation.valid) onNext();
  }

  async function handleSocialLogin(provider: SocialProvider) {
    setSocialError(null);
    setSocialLoading(provider);
    try {
      // Apple and LinkedIn providers are not yet configured in Supabase — route
      // both through Google OAuth until native credentials are added.
      const resolvedProvider: SocialProvider =
        provider === "apple" || provider === "linkedin_oidc" ? "google" : provider;
      await signInWithSocial(resolvedProvider);
      // signInWithSocial triggers a full-page redirect — code below won't run
      // unless the Supabase URL is missing (dev/unconfigured mode).
      onSocialSuccess();
    } catch (err) {
      setSocialError(classifyAuthError(err));
      setSocialLoading(null);
    }
  }

  return (
    <div className="flex flex-col gap-7 w-full flex-1">
      <div className="flex flex-col gap-8 w-full">
        <BrandLogo />
        <div className="flex flex-col gap-4 w-full">
          <ScreenTitle>Your Work should Open Doors.</ScreenTitle>
          <ScreenSubtitle>{"India's fashion community starts here."}</ScreenSubtitle>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <FieldLabel>Enter mobile number</FieldLabel>
          <TextInput
            value={phone}
            onChange={(v) => { setPhone(v); /* clear error on re-type */ }}
            placeholder="99999 99999"
            icon="phone"
            inputMode="tel"
            validationState={validationState}
            error={errorMessage}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            charFilter={isPhoneDigit}
          />
        </div>
        {/* CTA — always enabled; validation fires on press */}
        <Button variant="gradient" size="lg" className="w-full" onClick={handleSendOtp}>
          Send OTP
          <ArrowRight className="size-6" />
        </Button>
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

      {/* Flexible spacer before social login */}
      <div className="flex-1" />

      <div className="flex flex-col gap-5 items-center w-full">
        <Divider label="Or continue with" />
        <div className="flex gap-4 items-center">
          {(
            [
              { src: imgGoogle,   alt: "Google",   provider: "google"         as SocialProvider },
              { src: imgLinkedin, alt: "LinkedIn",  provider: "linkedin_oidc"  as SocialProvider },
              { src: imgApple,    alt: "Apple",     provider: "apple"          as SocialProvider },
            ] as const
          ).map(({ src, alt, provider }) => {
            const isLoading = socialLoading === provider;
            return (
              <button
                key={alt}
                onClick={() => handleSocialLogin(provider)}
                disabled={socialLoading !== null || inAppBrowser}
                aria-label={`Sign in with ${alt}`}
                className="bg-white rounded-full size-12 flex items-center justify-center p-2 shadow-[0px_1px_4px_0px_rgba(200,192,212,0.6)] border border-[#e2d9ef] cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-opacity active:scale-95"
              >
                {isLoading ? (
                  <div className="w-4 h-4 rounded-full border-2 border-[#7d3aea] border-t-transparent animate-spin" />
                ) : (
                  <img src={src} alt={alt} className="size-[14px] object-contain" />
                )}
              </button>
            );
          })}
        </div>
        {inAppBrowser && (
          <div className="flex flex-col gap-[8px] items-center w-full rounded-[8px] bg-[#fef6e4] border border-[rgba(162,104,7,0.35)] px-[12px] py-[12px]">
            <p className="font-['Manrope',sans-serif] font-medium text-[#7a4f05] text-[13px] leading-[20px] text-center">
              Please open Lumio in Chrome or Safari to continue signing in.
            </p>
            <button
              onClick={() => {
                try {
                  navigator.clipboard.writeText(window.location.href);
                } catch {
                  // Clipboard API may be blocked in some in-app browsers
                }
              }}
              className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[12px] leading-[18px] underline cursor-pointer"
            >
              Copy link to open in browser
            </button>
          </div>
        )}
        {!inAppBrowser && socialError && (
          <p className="font-['Manrope',sans-serif] font-normal text-[#c30105] text-[13px] leading-[19px] text-center px-4">
            {socialError}
          </p>
        )}
      </div>

      <div className="flex gap-2 items-center justify-center w-full">
        <p className="font-['Manrope',sans-serif] font-normal text-[#2d2040] text-[14px] leading-[21px] whitespace-nowrap">
          New to Lumio?
        </p>
        <button className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[14px] leading-[20px] tracking-[0.14px] px-3 py-2 rounded-[4px] cursor-pointer">
          Sign up
        </button>
      </div>
    </div>
  );
}

// ─── OtpVerifyScreen ──────────────────────────────────────────────────────────

const OTP_LENGTH = 4;
const OTP_INITIAL_SECONDS = 58;

function OtpVerifyScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [seconds, setSeconds] = useState(OTP_INITIAL_SECONDS);
  const [submitted, setSubmitted] = useState(false);
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
    if (e.key === "Backspace") {
      if (!digits[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else if (digits[index]) {
        const next = [...digits];
        next[index] = "";
        setDigits(next);
        e.preventDefault();
      }
    }
  };

  const isOtpComplete = digits.every((d) => d !== "");
  const timerLabel = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  function handleVerify() {
    setSubmitted(true);
    if (isOtpComplete) onNext();
  }

  const incompleteError = submitted && !isOtpComplete ? "Please enter all 4 digits" : undefined;

  return (
    <div className="flex flex-col gap-8 w-full flex-1">
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
            <button
              onClick={onBack}
              className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[14px] leading-[20px] px-3 py-2 rounded-[24px] cursor-pointer"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full">
        <FieldLabel>4 digit OTP</FieldLabel>
        <OtpInput
          digits={digits}
          focusedIndex={focusedIndex}
          inputRefs={inputRefs}
          onDigitChange={handleDigit}
          onKeyDown={handleKeyDown}
          onFocus={setFocusedIndex}
          onBlur={() => setFocusedIndex(null)}
        />
        {/* Error — only after submit attempt */}
        {incompleteError && <FieldError message={incompleteError} />}
      </div>

      {/* Spacer pushes CTA to bottom */}
      <div className="flex-1" />

      {/* CTA — always enabled; validates on press */}
      <Button variant="gradient" size="lg" className="w-full" onClick={handleVerify}>
        Verify & continue
        <ArrowRight className="size-6" />
      </Button>

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

// ─── OnboardingNameScreen ─────────────────────────────────────────────────────

function OnboardingNameScreen({
  name,
  onNameChange,
  onNext,
  onBack,
}: {
  name: string;
  onNameChange: (n: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const nameValidation = validateName(name);

  // Input border: error only after submitted + not currently focused
  const validationState: "default" | "focused" | "error" =
    isFocused ? "focused" : submitted && !nameValidation.valid ? "error" : "default";

  // Error text: only after submission attempt
  const errorMessage = submitted && !nameValidation.valid ? nameValidation.error : undefined;

  function handleContinue() {
    setSubmitted(true);
    if (nameValidation.valid) onNext();
  }

  return (
    <div className="flex flex-col gap-8 w-full flex-1">
      <div className="flex flex-col gap-6 w-full">
        <HeaderBackButton onClick={onBack} />
        <ProgressBar total={3} filled={1} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <ScreenTitle>What should we call you?</ScreenTitle>
        <ScreenSubtitle>Your profile name helps people recognize you.</ScreenSubtitle>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <FieldLabel>Enter your full name</FieldLabel>
        <TextInput
          value={name}
          onChange={onNameChange}
          placeholder="amit kumar"
          validationState={validationState}
          error={errorMessage}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          charFilter={isNameChar}
        />
      </div>

      {/* Spacer — expands to fill available space, pushing CTA to bottom */}
      <div className="flex-1" />

      {/* CTA — always enabled */}
      <Button variant="gradient" size="lg" className="w-full" onClick={handleContinue}>
        Continue
        <ArrowRight className="size-6" />
      </Button>
    </div>
  );
}

// ─── Domain screen ────────────────────────────────────────────────────────────

const DOMAIN_OPTIONS = [
  "Fashion",
  "Textile",
  "Jewelry",
  "Accessory",
  "Footwear",
  "Leather",
  "Illustrator",
  "Stylist",
  "Merchandising",
];

function DomainScreen({
  onDomainChange,
  onNext,
  onBack,
}: {
  onDomainChange: (domain: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const toggle = (d: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(d) ? next.delete(d) : next.add(d);
      onDomainChange([...next][0] ?? "");
      return next;
    });

  function handleContinue() {
    setSubmitted(true);
    if (selected.size > 0) onNext();
  }

  const showError = submitted && selected.size === 0;

  return (
    <div className="flex flex-col gap-8 w-full flex-1">
      <div className="flex flex-col gap-6 w-full">
        <HeaderBackButton onClick={onBack} />
        <ProgressBar total={3} filled={2} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <ScreenTitle>{"What Domain do you Work in?"}</ScreenTitle>
        <ScreenSubtitle>{"Choose the field you're most active in."}</ScreenSubtitle>
      </div>

      {/* Chip group + error */}
      <div className="flex flex-col w-full">
        <div className="flex flex-wrap gap-4 w-full">
          {DOMAIN_OPTIONS.map((d) => (
            <Chip key={d} label={d} selected={selected.has(d)} onClick={() => toggle(d)} showTick />
          ))}
        </div>
        {/* 16px gap between chip group and error — space-y handles it */}
        {showError && (
          <div className="mt-4">
            <FieldError message="Please select at least one option to continue." />
          </div>
        )}
      </div>

      {/* Flexible spacer — CTA adjusts when error appears */}
      <div className="flex-1" />

      {/* CTA — always enabled */}
      <Button variant="gradient" size="lg" className="w-full" onClick={handleContinue}>
        Continue
        <ArrowRight className="size-6" />
      </Button>
    </div>
  );
}

// ─── Experience screen ────────────────────────────────────────────────────────

const EXPERIENCE_OPTIONS = [
  "Student",
  "Fresher",
  "1-2 Yrs",
  "3-5 Yrs",
  "6-9 Yrs",
  "9-15 yrs",
  "16+ yrs",
];

function ExperienceScreen({
  onExperienceChange,
  onNext,
  onBack,
}: {
  onExperienceChange: (exp: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSelect(e: string) {
    setSelected(e);
    onExperienceChange(e);
  }

  function handleContinue() {
    setSubmitted(true);
    if (selected !== null) onNext();
  }

  const showError = submitted && selected === null;

  return (
    <div className="flex flex-col gap-8 w-full flex-1">
      <div className="flex flex-col gap-6 w-full">
        <HeaderBackButton onClick={onBack} />
        <ProgressBar total={3} filled={3} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <ScreenTitle>How much Experience do you have?</ScreenTitle>
        <ScreenSubtitle>This helps us personalize mentors and opportunities.</ScreenSubtitle>
      </div>

      {/* Chip group + error */}
      <div className="flex flex-col w-full">
        <div className="flex flex-wrap gap-4 w-full">
          {EXPERIENCE_OPTIONS.map((e) => (
            <Chip key={e} label={e} selected={selected === e} onClick={() => handleSelect(e)} />
          ))}
        </div>
        {showError && (
          <div className="mt-4">
            <FieldError message="Please select your experience level to continue." />
          </div>
        )}
      </div>

      {/* Flexible spacer */}
      <div className="flex-1" />

      {/* CTA — always enabled */}
      <Button variant="gradient" size="lg" className="w-full" onClick={handleContinue}>
        Start the journey
        <ArrowRight className="size-6" />
      </Button>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

type AuthStep = "phone" | "otp" | "name" | "domain" | "experience";

export function AuthPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<AuthStep>("phone");
  const [userName, setUserName] = useState("");
  const [userDomain, setUserDomain] = useState("");
  const [userExperience, setUserExperience] = useState("");

  // After OAuth redirect back from provider, AuthCallbackPage flags this key.
  // On mount we detect it and jump straight to the name-entry step.
  useEffect(() => {
    const socialDone = sessionStorage.getItem("lumio:social_auth_complete");
    if (socialDone) {
      sessionStorage.removeItem("lumio:social_auth_complete");
      // Prefill name from provider profile if available
      const providerName = sessionStorage.getItem("lumio:social_display_name") ?? "";
      sessionStorage.removeItem("lumio:social_display_name");
      if (providerName) setUserName(providerName);
      setStep("name");
    }
  }, []);

  function handleComplete() {
    localStorage.setItem("lumio_name", userName);
    localStorage.setItem("lumio_domain", userDomain);
    localStorage.setItem("lumio_experience", userExperience);
    navigate("/home/feed");
  }

  const screens: Record<AuthStep, React.ReactNode> = {
    phone: (
      <PhoneEntryScreen
        onNext={() => setStep("otp")}
        onSocialSuccess={() => setStep("name")}
      />
    ),
    otp: <OtpVerifyScreen onNext={() => setStep("name")} onBack={() => setStep("phone")} />,
    name: (
      <OnboardingNameScreen
        name={userName}
        onNameChange={setUserName}
        onNext={() => setStep("domain")}
        onBack={() => setStep("otp")}
      />
    ),
    domain: (
      <DomainScreen
        onDomainChange={setUserDomain}
        onNext={() => setStep("experience")}
        onBack={() => setStep("name")}
      />
    ),
    experience: (
      <ExperienceScreen
        onExperienceChange={setUserExperience}
        onNext={handleComplete}
        onBack={() => setStep("domain")}
      />
    ),
  };

  return (
    <div className="h-[100dvh] bg-[#f0ecf7] flex items-start justify-center overflow-hidden">
      <div className="w-full max-w-[430px] min-w-0 bg-[#fffeff] flex flex-col h-full overflow-hidden">

        {/* ── Scrollable content area ── */}
        <div className="flex-1 px-4 pt-8 pb-4 overflow-y-auto min-h-0">
          <div className="w-full max-w-[430px] mx-auto min-h-full flex flex-col">
            {screens[step]}
          </div>
        </div>

      </div>
    </div>
  );
}
