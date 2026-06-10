import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import imgSplashLogo from "@/imports/OnboardingSplashScreen/4cc7ee0fe5188ecaeb60505d7ea8a035d0ee470b.png";
import imgLogo from "@/imports/OnboardingSlide1/53d3387f93d897cfb38b0811f091155ba5c9578f.png";
import imgBg1 from "@/imports/OnboardingSlide1/fd3d51451c03abf8faadf8fa09d7b4cbe4ccb6b8.png";
import imgBg2 from "@/imports/OnboardingSlide2/414b3d683e7bb921ca88997e1c85e5b41088d27e.png";
import imgBg3 from "@/imports/OnboardingSlide3/0fd2807364820135150774e50b9a2b3381225bfd.png";


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
      className="h-[100dvh] overflow-hidden w-full max-w-[430px] mx-auto bg-[#fffeff] flex flex-col cursor-pointer"
      onClick={onFinish}
    >
      <div className="flex-1 flex items-center justify-center">
        <img
          alt="Lumio"
          className="h-[140px] w-[107px] object-cover"
          src={imgSplashLogo}
        />
      </div>
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
    <div className="h-[100dvh] overflow-hidden w-full relative flex flex-col">
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
      <div className="relative z-10 flex flex-col h-full w-full max-w-[430px] mx-auto">
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
