"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/brand/logo";
import { Button, ButtonLink } from "@/components/ui/button";
import { NAV_LINKS, SIGN_IN_URL, SIGN_UP_URL } from "@/lib/site";

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

          <nav aria-label="Main" className="mt-6">
            <ul className="divide-y divide-border border-y border-border">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={close} className="flex py-4 text-[20px] font-medium tracking-tight">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto flex flex-col gap-3 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
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
