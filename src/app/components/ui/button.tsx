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

    // FOCUS — Lumio purple ring, consistent with keyboard.css :focus-visible rule
    "focus-visible:ring-2",
    "focus-visible:ring-[#7d3aea]/40",
  ].join(" "),
  {
    variants: {
      variant: {
        // PRIMARY CTA
        gradient: [
          "text-white",
          "bg-gradient-to-r from-[#7D3AEA] to-[#5E28B5]",
          "hover:opacity-90",
        ].join(" "),

        // SECONDARY CTA
        outline: [
          "border border-[#7d3aea]",
          "bg-white",
          "text-[#7d3aea]",
          "hover:bg-[#efe9fc]",
        ].join(" "),

        // TERTIARY CTA
        ghost: [
          "bg-[#fffeff]",
          "text-[#7d3aea]",
          "hover:bg-[#efe9fc]",
        ].join(" "),

        // SUCCESS CTA
        success: [
          "border border-[#208436]",
          "bg-[#d6f5dd]",
          "text-[#208436]",
          "hover:opacity-90",
        ].join(" "),

        // SOFT CTA
        subtle: [
          "bg-[#efe9fc]",
          "text-[#7d3aea]",
          "hover:opacity-90",
        ].join(" "),
      },

      size: {
        // LARGE BUTTON
        lg: [
          // SIZE
          "min-h-[48px]",
          "max-h-[48px]",
          "px-[16px]",
          "py-[12px]",
          "gap-[8px]",

          // RADIUS
          "rounded-[8px]",

          // TYPOGRAPHY
          "font-manrope",
          "text-[16px]",
          "font-semibold",
          "leading-[20px]",
          "tracking-[0.48px]",
        ].join(" "),

        // SMALL BUTTON
        sm: [
          // SIZE
          "min-h-[40px]",
          "max-h-[40px]",
          "px-[12px]",
          "py-[8px]",
          "gap-[8px]",

          // RADIUS
          "rounded-[4px]",

          // TYPOGRAPHY
          "font-manrope",
          "text-[14px]",
          "font-semibold",
          "leading-[20px]",
          "tracking-[0.14px]",
        ].join(" "),

        // ICON BUTTON
        icon: ["size-9", "rounded-[4px]"].join(" "),
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
