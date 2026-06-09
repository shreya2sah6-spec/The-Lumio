import { Fragment } from "react";

interface CreateProjectStepperProps {
  currentStep: 1 | 2 | 3;
}

const STEPS = [
  { number: 1, label: "About"   },
  { number: 2, label: "Process" },
  { number: 3, label: "Cover"   },
] as const;

export function CreateProjectStepper({ currentStep }: CreateProjectStepperProps) {
  return (
    <div className="flex items-start px-4 py-3">
      {STEPS.map((step, i) => {
        const state: "done" | "active" | "pending" =
          step.number < currentStep ? "done"
          : step.number === currentStep ? "active"
          : "pending";

        return (
          <Fragment key={step.number}>
            {/* ── Step node: circle + label, centered ── */}
            <div className="flex flex-col items-center gap-[4px]">

              {/* Circle */}
              <div
                className={`w-[30px] h-[30px] rounded-full flex items-center justify-center shrink-0 ${
                  state === "active"  ? "bg-[#9F99E6]"
                  : state === "done" ? "bg-[#7d3aea]"
                  : "bg-[#f5f0ff] border border-[#9f99e6]"
                }`}
              >
                <span
                  className={`font-['Manrope',sans-serif] font-medium text-[12px] tracking-[0.24px] ${
                    state === "active"  ? "text-[#1A1128]"
                    : state === "done" ? "text-white"
                    : "text-[#1a1128]"
                  }`}
                >
                  {step.number}
                </span>
              </div>

              {/* Label */}
              <span
                className={`font-['Manrope',sans-serif] text-[13px] whitespace-nowrap ${
                  state === "active"  ? "font-semibold text-[#1A1128] tracking-[0.14px]"
                  : state === "done" ? "font-medium text-[#7d3aea]"
                  : "font-normal text-[#9d90ad]"
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* ── Connector line between steps ──
                flex-1 fills evenly; self-start + mt-[15px] aligns to circle centre */}
            {i < STEPS.length - 1 && (
              <div className="flex-1 self-start mt-[15px] mx-[6px]">
                <div
                  className={`h-[2px] w-full rounded-full ${
                    step.number < currentStep ? "bg-[#7d3aea]" : "bg-[#e2d9ef]"
                  }`}
                />
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
