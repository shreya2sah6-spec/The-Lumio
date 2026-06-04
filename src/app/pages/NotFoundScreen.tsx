import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "../components/ui/button";

interface NotFoundScreenProps {
  title?: string;
  message: string;
  buttonText: string;
  onButtonClick: () => void;
  imageSrc?: string;
}

export function NotFoundScreen({
  title = "Not Found",
  message,
  buttonText,
  onButtonClick,
  imageSrc,
}: NotFoundScreenProps) {
  return (
    <div className="min-h-screen bg-[#fffeff] flex flex-col">
      {/* Status bar */}
      <div className="w-full bg-[#fffeff] h-[44px] flex items-center justify-between px-4 py-2 shrink-0">
        <p className="font-['Roboto',sans-serif] font-normal text-[14px] leading-[20px] text-[#1a1128] tracking-[-0.3077px]">
          9:41
        </p>
        <div className="flex gap-[2px] items-center">
          {/* Status icons would go here */}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 gap-8">
        {/* Illustration */}
        {imageSrc && (
          <div className="h-[343px] w-full max-w-[358px]">
            <img
              src={imageSrc}
              alt="Not found illustration"
              className="w-full h-full object-contain"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col items-center gap-9 w-full">
          <div className="font-['Manrope',sans-serif] font-semibold text-[18px] leading-[28px] text-[#1a1128] text-center">
            <p>{message}</p>
          </div>

          <Button
            variant="gradient"
            size="lg"
            className="w-full"
            onClick={onButtonClick}
          >
            {buttonText}
            <ArrowRight className="size-6" />
          </Button>
        </div>
      </div>

      {/* Home indicator */}
      <div className="w-full bg-white h-[46px] flex items-end justify-center pb-[8px] shrink-0">
        <div className="bg-[#1a1128] h-[4.808px] rounded-[200px] w-[128.846px]" />
      </div>
    </div>
  );
}

/**
 * Jobs not-found screen
 * Shows when no jobs match the search/filter criteria
 */
export function JobsNotFoundScreen({
  onNavigateBack,
}: {
  onNavigateBack: () => void;
}) {
  return (
    <NotFoundScreen
      message="No jobs found"
      buttonText="Back to jobs"
      onButtonClick={onNavigateBack}
    />
  );
}

/**
 * Generic not-found screen
 * Shows "No matches this time" message
 */
export function GenericNotFoundScreen({
  onNavigateBack,
}: {
  onNavigateBack: () => void;
}) {
  return (
    <NotFoundScreen
      message="No matches this time"
      buttonText="Back to home"
      onButtonClick={onNavigateBack}
    />
  );
}
