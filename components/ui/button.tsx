import { cva, type VariantProps } from "class-variance-authority";

import { SmartLink } from "@/components/ui/smart-link";
import { cn } from "@/lib/cn";

export const buttonVariants = cva(
  "press inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-ink text-ink-fg hover:bg-ink-hover",
        secondary: "border border-border-strong bg-surface text-fg hover:bg-surface-hover",
        ghost: "text-fg-2 hover:bg-surface-2 hover:text-fg",
        /** For the fixed-dark panels (showcase, final CTA): reads the same in both themes. */
        inverse: "bg-white text-[#0e1a33] hover:bg-white/90",
      },
      size: {
        sm: "h-9 px-4 text-[14px]",
        md: "h-11 px-5 text-[15px]",
        lg: "h-12 px-6 text-[16px]",
        icon: "size-9",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

/**
 * A link styled as a button. Every CTA navigates, so this is the common case.
 * Internal pages go through next/link; the app, mailto and anchors stay plain.
 */
export function ButtonLink({
  className,
  variant,
  size,
  href,
  ...props
}: Omit<React.ComponentProps<"a">, "href"> & { href: string } & ButtonVariantProps) {
  return <SmartLink href={href} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: React.ComponentProps<"button"> & ButtonVariantProps) {
  return <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
