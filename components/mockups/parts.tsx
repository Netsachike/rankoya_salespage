"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

/** Shared building blocks for the coded product mockups. All of it is decorative. */

export const EASE_OUT = [0.23, 1, 0.32, 1] as const;

type Margin = NonNullable<Parameters<typeof useInView>[1]>["margin"];

/**
 * `play` turns true the first time the mockup scrolls into view, or straight
 * away under reduced motion, where `reduce` also tells animations to jump to
 * their end state.
 */
export function useMockupPlay<T extends Element>(margin: Margin = "0px 0px -20% 0px") {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, margin });
  const reduce = useReducedMotion() ?? false;
  return { ref, play: inView || reduce, reduce };
}

/** Transition helper: instant under reduced motion, eased otherwise. */
export function ease(reduce: boolean, duration = 0.6, delay = 0) {
  return reduce ? { duration: 0 } : { duration, delay, ease: EASE_OUT };
}

/** Counts from 0 to `to` once `play` turns true. */
export function useCountUp(to: number, play: boolean, reduce: boolean, delay = 0) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!play || reduce) return;
    const controls = animate(0, to, {
      duration: 1.2,
      delay,
      ease: EASE_OUT,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [to, play, reduce, delay]);
  return reduce ? to : value;
}

/** The outer frame every feature mockup sits in: decorative and inert. */
export function MockupFrame({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div aria-hidden inert className={cn("text-start text-[13px] leading-5 text-fg select-none", className)} {...props}>
      {children}
    </div>
  );
}

export function MockCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-lg border border-border bg-surface p-3 shadow-card sm:p-4", className)}>{children}</div>
  );
}

/** A change in points. Direction is carried by arrow and sign, never by colour alone. */
export function Delta({ value, suffix = "", className }: { value: number; suffix?: string; className?: string }) {
  const up = value >= 0;
  const Icon = up ? ArrowUp : ArrowDown;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 num text-[11px] font-medium",
        up ? "text-success" : "text-danger",
        className,
      )}
    >
      <Icon className="size-3" strokeWidth={2.5} />
      {up ? "+" : "−"}
      {Math.abs(value)}
      {suffix}
    </span>
  );
}

/** A grey bar standing in for a line of text. */
export function TextLine({ className }: { className?: string }) {
  return <span className={cn("block h-1.5 rounded-full bg-surface-2", className)} />;
}
