"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/brand/logo";
import { BRAND_ASSETS } from "@/lib/brand-assets";

/**
 * The header logo. A normal link home; a right-click (or the context-menu key)
 * opens a small menu of logo downloads, as on RankYak.
 */
export function LogoMenu() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!position) return;
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();
    const close = () => setPosition(null);
    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) close();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      close();
      triggerRef.current?.focus();
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("resize", close);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", close);
      window.removeEventListener("resize", close);
    };
  }, [position]);

  return (
    <>
      <Link
        ref={triggerRef}
        href="/"
        className="-m-1 rounded-md p-1"
        aria-label="Rankoya home"
        onContextMenu={(event) => {
          event.preventDefault();
          // Keyboard-opened context menus report 0,0: anchor under the logo instead.
          const rect = event.currentTarget.getBoundingClientRect();
          const fromKeyboard = event.clientX === 0 && event.clientY === 0;
          setPosition(fromKeyboard ? { x: rect.left, y: rect.bottom + 8 } : { x: event.clientX, y: event.clientY });
        }}
      >
        <Logo height={26} priority />
      </Link>

      {position ? (
        <div
          ref={menuRef}
          role="dialog"
          aria-label="Logo downloads"
          className="fixed z-50 w-72 rounded-xl border border-border bg-surface p-1.5 shadow-pop"
          style={{ left: Math.min(position.x, window.innerWidth - 304), top: position.y }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPosition(null);
          }}
        >
          <ul>
            {BRAND_ASSETS.map((asset) => (
              <li key={asset.id}>
                <a
                  href={asset.file.src}
                  download={asset.downloadName}
                  onClick={() => setPosition(null)}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[14px] text-fg transition-colors hover:bg-surface-2"
                >
                  <Download aria-hidden className="size-4 text-fg-3" />
                  Download {asset.label.toLowerCase()} (PNG)
                </a>
              </li>
            ))}
            {/* Hidden for now: little use before launch. The /brand page stays live.
            <li className="mt-1 border-t border-border pt-1">
              <Link href="/brand" onClick={() => setPosition(null)} className="...">
                <Palette aria-hidden className="size-4 text-fg-3" />
                All brand assets
              </Link>
            </li> */}
          </ul>
        </div>
      ) : null}
    </>
  );
}
