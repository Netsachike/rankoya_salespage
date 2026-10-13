"use client";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import { ThemeProvider } from "next-themes";

/**
 * Theme (class on <html>, system by default) and motion. `reducedMotion="user"`
 * turns every transform animation off for visitors who ask for less motion;
 * LazyMotion keeps the motion bundle to the DOM features we use.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation} strict>
          {children}
        </LazyMotion>
      </MotionConfig>
    </ThemeProvider>
  );
}
