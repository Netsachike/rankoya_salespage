"use client";

import * as m from "motion/react-m";

import { cn } from "@/lib/cn";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/**
 * Fades and lifts its children into place the first time they scroll into view.
 * Under reduced motion MotionConfig drops the transform, so content only fades.
 * Don't wrap the hero heading: it must paint immediately for LCP.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li";
}) {
  const Component = as === "li" ? m.li : m.div;
  return (
    <Component
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: EASE_OUT, delay }}
    >
      {children}
    </Component>
  );
}
