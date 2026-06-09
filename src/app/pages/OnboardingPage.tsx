import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { StatusBar } from "../components/StatusBar";
import { BottomSafeArea } from "../components/BottomSafeArea";

import imgSplashLogo from "@/imports/OnboardingSplashScreen/4cc7ee0fe5188ecaeb60505d7ea8a035d0ee470b.png";
import imgLogo from "@/imports/OnboardingSlide1/53d3387f93d897cfb38b0811f091155ba5c9578f.png";
import imgBg1 from "@/imports/OnboardingSlide1/fd3d51451c03abf8faadf8fa09d7b4cbe4ccb6b8.png";
import imgBg2 from "@/imports/OnboardingSlide2/414b3d683e7bb921ca88997e1c85e5b41088d27e.png";
import imgBg3 from "@/imports/OnboardingSlide3/0fd2807364820135150774e50b9a2b3381225bfd.png";

// Status-bar icon paths (signal · wifi · battery) — white variants for slide overlay
const svgStatus = {
  // Signal bars
  p34f07b00:
    "M3.26916 9.60239C3.8002 9.60239 4.23107 10.0333 4.23107 10.5643V12.4872C4.23107 13.0182 3.8002 13.4491 3.26916 13.4491H2.30724C1.77641 13.4488 1.3463 13.018 1.3463 12.4872V10.5643C1.3463 10.0334 1.77641 9.60263 2.30724 9.60239H3.26916ZM7.75646 7.67954C8.28748 7.67956 8.71837 8.11043 8.71837 8.64145V12.4872C8.71837 13.0182 8.28748 13.449 7.75646 13.4491H6.79455C6.26365 13.4489 5.83361 13.0181 5.83361 12.4872V8.64145C5.83361 8.11052 6.26365 7.67971 6.79455 7.67954H7.75646ZM12.2438 5.43637C12.7747 5.43647 13.2046 5.86638 13.2047 6.39731V12.4872C13.2047 13.0181 12.7747 13.449 12.2438 13.4491H11.2819C10.7509 13.449 10.3209 13.0181 10.3209 12.4872V6.39731C10.321 5.86639 10.7509 5.43648 11.2819 5.43637H12.2438ZM16.7311 3.19223C17.262 3.1924 17.692 3.6232 17.692 4.15415V12.4872C17.692 13.0181 17.262 13.4489 16.7311 13.4491H15.7692C15.2381 13.449 14.8072 13.0182 14.8072 12.4872V4.15415C14.8072 3.62313 15.2381 3.19227 15.7692 3.19223H16.7311Z",
  // WiFi
  p19e22200:
    "M5.86291 11.2694C7.08941 10.2323 8.88553 10.2321 10.1119 11.2694C10.1736 11.3252 10.2098 11.404 10.2115 11.4872C10.2132 11.5703 10.1801 11.6506 10.1207 11.7088L8.19982 13.6473C8.14355 13.7041 8.06686 13.7362 7.98693 13.7362C7.90698 13.7361 7.83028 13.7041 7.77404 13.6473L5.85314 11.7088C5.79385 11.6505 5.76154 11.5703 5.7633 11.4872C5.76508 11.404 5.80118 11.3251 5.86291 11.2694ZM3.29943 8.68442C5.94193 6.22636 10.0349 6.22636 12.6774 8.68442C12.7367 8.74203 12.7703 8.82142 12.7711 8.90415C12.7718 8.98686 12.7395 9.06614 12.6813 9.12485L11.5709 10.2469C11.4566 10.3613 11.2723 10.364 11.1549 10.2528C10.2871 9.46701 9.15759 9.03201 7.98693 9.03208C6.81713 9.03263 5.68901 9.46758 4.82189 10.2528C4.70455 10.364 4.52022 10.3613 4.40587 10.2469L3.29552 9.12485C3.23716 9.06621 3.20403 8.98688 3.2047 8.90415C3.20548 8.82134 3.23996 8.74203 3.29943 8.68442ZM0.736929 6.10532C4.78991 2.22126 11.184 2.22118 15.2369 6.10532C15.2956 6.16301 15.3282 6.24181 15.3287 6.32407C15.3292 6.40622 15.2977 6.48544 15.2399 6.5438L14.1276 7.66587C14.0131 7.78071 13.8278 7.78193 13.7115 7.6688C12.1674 6.20072 10.1176 5.38178 7.98693 5.38169C5.85613 5.38174 3.80665 6.20067 2.26232 7.6688C2.14611 7.7823 1.95977 7.78115 1.84533 7.66587L0.733999 6.5438C0.676061 6.48537 0.643616 6.40635 0.644156 6.32407C0.644697 6.24178 0.678219 6.16298 0.736929 6.10532Z",
  // Battery outline
  p19d3a300:
    "M3.02599 2.71124H19.0514C20.2019 2.71129 21.1344 3.64466 21.1344 4.79522V10.5638C21.1344 11.7143 20.2019 12.6477 19.0514 12.6478H3.02599C1.8754 12.6478 0.942008 11.7144 0.942008 10.5638V4.79522C0.942008 3.64463 1.8754 2.71124 3.02599 2.71124Z",
  // Battery tip
  p2a856600:
    "M22.5769 5.75643V9.60258C23.3507 9.27684 23.8539 8.51906 23.8539 7.67951C23.8539 6.83996 23.3507 6.08218 22.5769 5.75643",
  // Battery fill
  p3ec88600:
    "M2.38462 5.4359C2.38462 4.72784 2.95861 4.15385 3.66667 4.15385H18.4103C19.1183 4.15385 19.6923 4.72784 19.6923 5.4359V9.92308C19.6923 10.6311 19.1183 11.2051 18.4103 11.2051H3.66667C2.95861 11.2051 2.38462 10.6311 2.38462 9.92308V5.4359Z",
};

const svgArrow = {
  p269480:
    "M17.7806 8.03104L11.0306 14.781C10.9609 14.8507 10.8782 14.906 10.7872 14.9437C10.6961 14.9814 10.5985 15.0008 10.5 15.0008C10.4014 15.0008 10.3039 14.9814 10.2128 14.9437C10.1218 14.906 10.039 14.8507 9.96938 14.781C9.89969 14.7114 9.84443 14.6286 9.80671 14.5376C9.769 14.4465 9.74959 14.349 9.74959 14.2504C9.74959 14.1519 9.769 14.0543 9.80671 13.9632C9.84443 13.8722 9.89969 13.7895 9.96938 13.7198L15.4397 8.25042H0.750001C0.551088 8.25042 0.360399 8.1714 0.219687 8.03075C0.0789758 7.8901 0 7.69933 0 7.50042C0 7.3015 0.0789758 7.11074 0.219687 6.97009C0.360399 6.82943 0.551088 6.75042 0.750001 6.75042H15.4397L9.96938 1.28104C9.82865 1.14031 9.74959 0.94944 9.74959 0.750417C9.74959 0.551394 9.82865 0.360523 9.96938 0.219792C10.1101 0.0790615 10.301 -1.48284e-09 10.5 0C10.699 1.48284e-09 10.8899 0.0790615 11.0306 0.219792L17.7806 6.96979C17.8503 7.03945 17.9057 7.12216 17.9434 7.21321C17.9811 7.30426 18.0006 7.40186 18.0006 7.50042C18.0006 7.59898 17.9811 7.69657 17.9434 7.78762C17.9057 7.87867 17.8503 7.96139 17.7806 8.03104Z",
};

// ─── Shared primitives ────────────────────────────────────────────────────────

function PageIndicator({
  count,
  activeIndex,
}: {
  count: number;
  activeIndex: number;
}) {
  return (
    <div className="flex gap-2 items-center justify-center">
      {Array.from({ length: count }).map((_, i) => {
        const active = i === activeIndex;
        return (
          <div
            key={i}
            className="flex items-center justify-center"
            style={{
              width: active ? "16.97px" : "11.314px",
              height: active ? "16.97px" : "11.314px",
            }}
          >
            <div className="rotate-[-44.65deg]">
              <div
                style={{
                  width: active ? "12px" : "8px",
                  height: active ? "12px" : "8px",
                  backgroundColor: active ? "#5e28b5" : "white",
                  outline: active ? "1px solid white" : "1px solid #b090ef",
                }}
              />
            </div>
          </div>
        );
      })}
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
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-[#7d3aea] to-[#5e28b5] h-[48px] rounded-[8px] w-full flex items-center justify-center gap-[8px] px-4 cursor-pointer"
    >
      <span
        className="font-['Manrope',sans-serif] font-semibold text-white text-[16px] leading-[20px] tracking-[0.48px] whitespace-nowrap"
        style={{ verticalAlign: "middle" }}
      >
        {label}
      </span>
      <div className="size-[24px] relative shrink-0 flex items-center justify-center">
        <svg width="18" height="15" fill="none" viewBox="0 0 18.0006 15.0008">
          <path d={svgArrow.p269480} fill="white" />
        </svg>
      </div>
    </button>
  );
}

// ─── Screens ──────────────────────────────────────────────────────────────────

function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const t = setTimeout(onFinish, 2000);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div
      className="min-h-screen w-full max-w-[800px] mx-auto bg-[#fffeff] flex flex-col cursor-pointer"
      onClick={onFinish}
    >
      <StatusBar />
      <div className="flex-1 flex items-center justify-center">
        <img
          alt="Lumio"
          className="h-[140px] w-[107px] object-cover"
          src={imgSplashLogo}
        />
      </div>
      <BottomSafeArea />
    </div>
  );
}

interface SlideScreenProps {
  bgSrc: string;
  bgOpacity?: number;
  subtitle: string;
  activeIndex: number;
  totalSlides: number;
  buttonLabel: string;
  onNext: () => void;
  onSkip: () => void;
}

function SlideScreen({
  bgSrc,
  bgOpacity = 1,
  subtitle,
  activeIndex,
  totalSlides,
  buttonLabel,
  onNext,
  onSkip,
}: SlideScreenProps) {
  return (
    <div className="min-h-screen w-full relative flex flex-col">
      {/* Full-bleed background */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ opacity: bgOpacity }}
        >
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={bgSrc}
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(26,26,26,0.6)]" />
      </div>

      {/* Foreground layout */}
      <div className="relative z-10 flex flex-col min-h-screen w-full max-w-[800px] mx-auto">
        {/* Status bar */}
        <div className="w-full bg-transparent">
          <div className="w-full flex h-11 items-center justify-between px-4 py-2">
            <p className="font-['Roboto',sans-serif] font-normal text-[14.423px] leading-[20.192px] text-white tracking-[-0.3077px]">
              9:41
            </p>
            <div className="flex gap-[2px] items-center shrink-0">
              <div className="h-[15.385px] relative w-[19.231px]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 19.2308 15.3846"
                >
                  <path d={svgStatus.p34f07b00} fill="white" />
                </svg>
              </div>
              <div className="relative size-[15.385px]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 15.3846 15.3846"
                >
                  <path d={svgStatus.p19e22200} fill="white" />
                </svg>
              </div>
              <div className="h-[15.385px] relative w-[24.038px]">
                <svg
                  className="absolute block inset-0 size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24.0385 15.3846"
                >
                  <path
                    d={svgStatus.p19d3a300}
                    opacity="0.35"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeWidth="0.961538"
                    fill="none"
                  />
                  <path d={svgStatus.p2a856600} fill="white" opacity="0.4" />
                  <path d={svgStatus.p3ec88600} fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Skip button — pt-[36px] matches Figma header-area py-xxxxl */}
        <div className="flex justify-end px-4 pt-[36px]">
          <button
            onClick={onSkip}
            className="bg-[#fffeff] flex h-10 items-center justify-center px-3 py-2 rounded-[4px] cursor-pointer"
          >
            <span className="font-['Manrope',sans-serif] font-semibold text-[#7d3aea] text-[14px] leading-5 tracking-[0.14px]">
              Skip
            </span>
          </button>
        </div>

        {/* Bottom content — brand + actions */}
        <div className="flex-1 flex flex-col justify-end px-4 pb-10 gap-[clamp(48px,10vh,120px)]">
          {/* Brand block */}
          <div className="flex flex-col gap-2 items-center w-full">
            <div className="flex flex-col gap-2 items-center">
              <img
                alt="Lumio"
                className="h-[60px] w-[46px] object-cover"
                src={imgLogo}
              />
              <p className="font-['Manrope',sans-serif] font-semibold text-white text-[18px] leading-7">
                Lumio
              </p>
            </div>
            <p className="font-['Manrope',sans-serif] font-medium text-white text-[16px] leading-[25px] tracking-[0.16px] text-center max-w-[480px]">
              {subtitle}
            </p>
          </div>

          {/* Pagination + CTA */}
          <div className="flex flex-col gap-9 items-center w-full">
            <PageIndicator count={totalSlides} activeIndex={activeIndex} />
            <PrimaryButton label={buttonLabel} onClick={onNext} />
          </div>
        </div>

        {/* Home indicator — semi-transparent white, overlaid on background image */}
        <div className="flex items-end justify-center h-[46px] pb-[7.69px]">
          <div className="bg-white/60 h-[4.808px] rounded-[200px] w-[128.846px]" />
        </div>
      </div>
    </div>
  );
}

// ─── Slide data ───────────────────────────────────────────────────────────────

const SLIDES = [
  {
    bgSrc: imgBg1,
    bgOpacity: 1,
    subtitle: "Your portfolio is your entry ticket. Let your work speak",
    buttonLabel: "Next",
  },
  {
    bgSrc: imgBg2,
    bgOpacity: 0.8,
    subtitle: "Learn directly from the designers who shaped the industry.",
    buttonLabel: "Next",
  },
  {
    bgSrc: imgBg3,
    bgOpacity: 0.8,
    subtitle:
      "Find roles at brands that actually vet their openings. Only verified companies.",
    buttonLabel: "Get Started",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export function OnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"splash" | number>("splash");

  const handleNext = () => {
    if (step === "splash") {
      setStep(0);
      return;
    }
    const i = step as number;
    if (i < SLIDES.length - 1) setStep(i + 1);
    else navigate("/auth");
  };

  const handleSkip = () => navigate("/auth");

  if (step === "splash") {
    return <SplashScreen onFinish={() => setStep(0)} />;
  }

  return (
    <SlideScreen
      {...SLIDES[step as number]}
      activeIndex={step as number}
      totalSlides={SLIDES.length}
      onNext={handleNext}
      onSkip={handleSkip}
    />
  );
}
