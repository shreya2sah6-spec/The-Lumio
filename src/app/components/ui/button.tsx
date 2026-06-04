import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  [
    // LAYOUT
    "inline-flex items-center justify-center whitespace-nowrap",
    "shrink-0 text-center",

    // TYPOGRAPHY
    "font-manrope not-italic",

    // STATES
    "cursor-pointer",
    "transition-colors duration-200",
    "outline-none",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",

    // ICONS
    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
    "[&_svg]:text-current",
    "[&_svg]:stroke-current",

    // FOCUS
    "focus-visible:ring-2",
    "focus-visible:ring-ring/50",
  ].join(" "),
  {
    variants: {
      variant: {
        // PRIMARY CTA
        gradient: [
          "text-white",
          "bg-[linear-gradient(90deg,var(--action-primary-bg,#7D3AEA)_0%,var(--action-secondary-bg,#5E28B5)_100%)]",
          "hover:opacity-90",
        ].join(" "),

        // SECONDARY CTA
        outline: [
          "border",
          "border-[var(--action-primary-bg,#7D3AEA)]",
          "bg-[var(--surface-bg-card,#FFF)]",
          "text-[var(--action-primary-bg,#7D3AEA)]",
          "hover:bg-[var(--surface-bg-primary-soft,#EFE9FC)]",
        ].join(" "),

        // TERTIARY CTA
        ghost: [
          "bg-[var(--surface-bg-default,#FFFEFF)]",
          "text-[var(--action-primary-bg,#7D3AEA)]",
          "hover:bg-[var(--surface-bg-primary-soft,#EFE9FC)]",
        ].join(" "),

        // SUCCESS CTA
        success: [
          "border",
          "border-[var(--text-success,#208436)]",
          "bg-[var(--surface-bg-success,#D6F5DD)]",
          "text-[var(--text-success,#208436)]",
          "hover:opacity-90",
        ].join(" "),

        // SOFT CTA
        subtle: [
          "bg-[var(--surface-bg-primary-soft,#EFE9FC)]",
          "text-[var(--action-primary-bg,#7D3AEA)]",
          "hover:opacity-90",
        ].join(" "),
      },

      size: {
        // LARGE BUTTON
        lg: [
          // SIZE
          "min-h-[48px]",
          "max-h-[48px]",
          "px-[var(--m,16px)]",
          "py-[var(--s,12px)]",
          "gap-[var(--xs,8px)]",

          // RADIUS
          "rounded-[var(--primary-button-large,8px)]",

          // TYPOGRAPHY
          "font-[var(--font-family-body,Manrope)]",
          "text-[var(--size-m,16px)]",
          "font-semibold",
          "leading-[var(--line-height-xs,20px)]",
          "tracking-[var(--letter-spacing-relaxed,0.48px)]",
        ].join(" "),

        // SMALL BUTTON
        sm: [
          // SIZE
          "min-h-[40px]",
          "max-h-[40px]",
          "px-[var(--s,12px)]",
          "py-[var(--xs,8px)]",
          "gap-[var(--xs,8px)]",

          // RADIUS
          "rounded-[var(--primary-button-small,4px)]",

          // TYPOGRAPHY
          "font-[var(--font-family-body,Manrope)]",
          "text-[var(--size-s,14px)]",
          "font-semibold",
          "leading-[var(--line-height-xs,20px)]",
          "tracking-[var(--letter-spacing-tight,0.14px)]",
        ].join(" "),

        // ICON BUTTON
        icon: ["size-9", "rounded-[var(--primary-button-small,4px)]"].join(" "),
      },
    },

    defaultVariants: {
      variant: "gradient",
      size: "lg",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
