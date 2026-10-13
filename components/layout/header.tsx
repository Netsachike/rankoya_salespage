"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Logo } from "@/components/brand/logo";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import { SIGN_IN_URL, SIGN_UP_URL } from "@/lib/site";

/** Scroll distance after which the header gets its background and border. */
const SCROLLED_AT = 8;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > SCROLLED_AT);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-200",
        scrolled ? "border-border bg-bg/85 backdrop-blur-md" : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center gap-6">
        <Link href="/" className="-m-1 rounded-md p-1" aria-label="Rankoya home">
          <Logo height={26} priority />
        </Link>

        <DesktopNav />

        <div className="ms-auto hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <ButtonLink href={SIGN_IN_URL} variant="ghost" size="sm">
            Log in
          </ButtonLink>
          <ButtonLink href={SIGN_UP_URL} size="sm">
            Get started
          </ButtonLink>
        </div>

        <div className="ms-auto flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
