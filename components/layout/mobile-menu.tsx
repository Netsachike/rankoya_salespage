"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/brand/logo";
import { Button, ButtonLink } from "@/components/ui/button";
import { SmartLink } from "@/components/ui/smart-link";
import { MAIN_NAV, SIGN_IN_URL, SIGN_UP_URL } from "@/lib/site";

const DIALOG_ID = "mobile-menu";

/**
 * Full-screen menu below `lg`. A native modal <dialog> gives us the focus trap,
 * Escape to close, an inert page behind it and focus returning to the trigger;
 * we only add the scroll lock.
 */
export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = open ? "hidden" : "";
    return () => {
      root.style.overflow = "";
    };
  }, [open]);

  // Leaving the breakpoint with the menu open would strand an invisible modal.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => desktop.matches && dialogRef.current?.close();
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  const show = () => {
    dialogRef.current?.showModal();
    setOpen(true);
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={DIALOG_ID}
        onClick={show}
      >
        <Menu aria-hidden className="size-5!" />
      </Button>

      <dialog
        ref={dialogRef}
        id={DIALOG_ID}
        aria-label="Menu"
        onClose={() => setOpen(false)}
        className="menu-dialog m-0 h-dvh max-h-none w-full max-w-none bg-bg p-0 text-fg backdrop:bg-transparent"
      >
        <div className="flex h-full flex-col px-4 sm:px-6">
          <div className="flex h-16 shrink-0 items-center justify-between">
            <Logo height={26} />
            <Button variant="ghost" size="icon" aria-label="Close menu" onClick={close} autoFocus>
              <X aria-hidden className="size-5!" />
            </Button>
          </div>

          <nav aria-label="Main" className="mt-4 min-h-0 flex-1 overflow-y-auto">
            <ul className="divide-y divide-border border-y border-border">
              {MAIN_NAV.map((entry) =>
                entry.kind === "menu" ? (
                  <li key={entry.id}>
                    {/* Native disclosure: keyboard and screen-reader support, no state */}
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[20px] font-medium tracking-tight [&::-webkit-details-marker]:hidden">
                        {entry.label}
                        <ChevronDown
                          aria-hidden
                          className="size-5 text-fg-3 transition-transform duration-200 group-open:rotate-180"
                        />
                      </summary>
                      <ul className="space-y-1 pb-4">
                        {[...entry.items, ...(entry.more?.items ?? [])].map((item) => (
                          <li key={item.href}>
                            <SmartLink
                              href={item.href}
                              onClick={close}
                              className="flex flex-col rounded-lg px-3 py-2 transition-colors hover:bg-surface-2"
                            >
                              <span className="text-[16px] font-medium">{item.label}</span>
                              {item.description ? (
                                <span className="text-[14px] text-fg-3">{item.description}</span>
                              ) : null}
                            </SmartLink>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={entry.href}>
                    <SmartLink
                      href={entry.href}
                      onClick={close}
                      className="flex py-4 text-[20px] font-medium tracking-tight"
                    >
                      {entry.label}
                    </SmartLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex shrink-0 flex-col gap-3 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <ButtonLink href={SIGN_UP_URL} size="lg">
              Get started
            </ButtonLink>
            <ButtonLink href={SIGN_IN_URL} variant="secondary" size="lg">
              Log in
            </ButtonLink>
          </div>
        </div>
      </dialog>
    </>
  );
}
