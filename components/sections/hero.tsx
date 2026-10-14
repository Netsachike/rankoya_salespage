import { ArrowRight, MessageCircle, Radar, ShieldCheck } from "lucide-react";

import { PlatformIcon } from "@/components/brand/platform-tile";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HERO } from "@/content/hero";
import type { PlatformId } from "@/content/platforms";
import { SIGN_UP_URL } from "@/lib/site";

const PROOF_ICONS = { radar: Radar, shield: ShieldCheck, message: MessageCircle } as const;

const AI_ENGINES: PlatformId[] = ["chatgpt", "claude", "gemini", "perplexity"];

/**
 * Server-rendered and unanimated on purpose: the heading is the page's LCP
 * element and must paint without waiting for JavaScript.
 */
export function Hero() {
  const { heading } = HERO;
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      {/* Faint measuring grid, fading out toward the edges */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] [background-size:56px_56px] opacity-70"
      />

      <Container className="flex flex-col items-center pt-14 pb-16 text-center sm:pt-20 lg:pt-24">
        <a
          href={HERO.pill.href}
          className="group inline-flex max-w-full items-center gap-2.5 rounded-full border border-border bg-surface py-1.5 ps-2 pe-3.5 text-[13px] font-medium text-fg-2 shadow-card transition-colors hover:text-fg sm:text-[14px]"
        >
          <span aria-hidden className="size-2 shrink-0 rounded-full bg-signal" />
          <span className="truncate sm:hidden">{HERO.pill.shortLabel}</span>
          <span className="hidden truncate sm:inline">{HERO.pill.label}</span>
          <ArrowRight
            aria-hidden
            className="size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </a>

        <h1 id="hero-heading" className="mt-8 max-w-[18ch] text-hero-home text-fg sm:max-w-6xl">
          {heading.lead}{" "}
          <span className="whitespace-nowrap">
            <InlineIcons ids={["google"]} />
            {heading.google}
          </span>{" "}
          {heading.middle}{" "}
          <span className="whitespace-nowrap">
            <InlineIcons ids={AI_ENGINES} />
            {heading.ai}
          </span>{" "}
          <span className="text-fg-3">{heading.close}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lead text-fg-2">{HERO.subheading}</p>

        <div className="mt-9 flex flex-col items-center gap-3">
          <ButtonLink href={SIGN_UP_URL} size="lg" className="min-w-48">
            {HERO.cta}
            <ArrowRight aria-hidden />
          </ButtonLink>
          <p className="text-[14px] text-fg-3">{HERO.reassurance}</p>
        </div>

        <ul className="mt-12 flex flex-col items-center gap-x-8 gap-y-3 text-[14px] text-fg-2 sm:flex-row sm:flex-wrap sm:justify-center">
          {HERO.proof.map((item) => {
            const Icon = PROOF_ICONS[item.icon];
            return (
              <li key={item.text} className="flex items-center gap-2">
                <Icon aria-hidden className="size-4 text-blue" />
                {item.text}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

/** Overlapping engine marks set inline in the heading, sized to the cap height. */
function InlineIcons({ ids }: { ids: PlatformId[] }) {
  return (
    <span aria-hidden className="me-[0.18em] inline-flex -translate-y-[0.06em] align-middle">
      {ids.map((id, i) => (
        <span
          key={id}
          className="inline-flex rounded-[0.24em] ring-[0.06em] ring-bg"
          style={{ marginInlineStart: i === 0 ? 0 : "-0.22em", zIndex: ids.length - i }}
        >
          <PlatformIcon id={id} size={64} decorative eager className="size-[0.82em]" />
        </span>
      ))}
    </span>
  );
}
