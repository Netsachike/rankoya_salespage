"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Drives every `.reveal` on the page with a single IntersectionObserver.
 * Elements already on screen are marked shown before hiding is switched on, so
 * nothing in view flickers; the rest fade in the first time they scroll in.
 * Far cheaper than one animation component per element. Runs again on every
 * client-side navigation, because the new page brings new elements.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not([data-shown])"));
    const fold = window.innerHeight;
    for (const el of items) {
      if (el.getBoundingClientRect().top < fold) el.dataset.shown = "";
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.shown = "";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    for (const el of items) if (!("shown" in el.dataset)) observer.observe(el);
    root.classList.add("reveal-ready");

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, [pathname]);

  return null;
}
