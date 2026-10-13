"use client";

import { ArrowUp, Check, Lock, Pencil } from "lucide-react";
import { animate, useInView, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useRef, useState } from "react";

import { AgentAvatar, Mark } from "@/components/brand/logo";
import { PlatformIcon } from "@/components/brand/platform-tile";
import {
  ENGINE_STROKE,
  MOCK_APPROVAL,
  MOCK_BRAND,
  MOCK_COMPETITORS,
  MOCK_NAV,
  MOCK_PLATFORMS,
  MOCK_SCORE,
  type MockPlatform,
} from "@/content/dashboard-mock";
import { PLATFORMS } from "@/content/platforms";
import { cn } from "@/lib/cn";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/**
 * A coded stand-in for the Rankoya overview screen. Everything inside is
 * decorative (the caller supplies the text alternative). It plays once, the
 * first time it scrolls into view; with reduced motion it renders the end state.
 */
export function DashboardMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduce = useReducedMotion() ?? false;
  const play = inView || reduce;

  return (
    <div
      ref={ref}
      aria-hidden
      inert
      className="overflow-hidden rounded-xl border border-border bg-bg text-start text-fg shadow-showcase sm:rounded-2xl"
    >
      <BrowserChrome />
      <div className="flex">
        <Sidebar />
        <div className="min-w-0 flex-1 space-y-3 p-3 sm:space-y-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[15px] font-semibold tracking-tight sm:text-[17px]">Overview</p>
              <p className="truncate text-[12px] text-fg-3">{MOCK_BRAND.domain}</p>
            </div>
            <span className="shrink-0 rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-fg-2">
              Last 30 days
            </span>
          </div>

          <div className="grid gap-3 sm:gap-4 lg:grid-cols-[200px_minmax(0,1fr)]">
            <ScoreCard play={play} reduce={reduce} />
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
              {MOCK_PLATFORMS.map((platform, i) => (
                <PlatformCard key={platform.id} platform={platform} play={play} reduce={reduce} index={i} />
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            <CompetitorCard play={play} reduce={reduce} />
            <ApprovalCard play={play} reduce={reduce} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserChrome() {
  return (
    <div className="flex items-center gap-3 border-b border-border bg-surface px-3 py-2.5 sm:px-4">
      <div className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
      </div>
      <div className="mx-auto flex max-w-sm min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md bg-surface-2 px-3 py-1 text-[11px] text-fg-3">
        <Lock className="size-3 shrink-0" />
        <span className="truncate">app.rankoya.uk/northwind-roasters/overview</span>
      </div>
      <div className="w-[42px]" />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="hidden w-48 shrink-0 flex-col gap-1 bg-nav p-3 text-[13px] text-nav-fg lg:flex">
      <div className="mb-3 flex items-center gap-2 px-2 pt-1">
        <Mark tone="onDark" size={18} />
        <span className="font-semibold tracking-tight text-white">Rankoya</span>
      </div>
      <div className="mb-3 rounded-md border border-nav-border bg-nav-card px-2.5 py-2">
        <p className="text-[10px] text-nav-muted">Brand</p>
        <p className="truncate font-medium text-white">{MOCK_BRAND.name}</p>
      </div>
      {MOCK_NAV.map((item, i) => (
        <span
          key={item}
          className={cn(
            "flex items-center justify-between rounded-md px-2.5 py-1.5",
            i === 0 ? "bg-[#2563eb] text-white" : "text-nav-fg",
          )}
        >
          {item}
          {item === "Ask Rankoya" ? <span className="size-1.5 rounded-full bg-[#7c6cff]" /> : null}
        </span>
      ))}
    </div>
  );
}

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-lg border border-border bg-surface p-3 shadow-card sm:p-4", className)}>{children}</div>
  );
}

function Delta({ value, className }: { value: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5 num text-[11px] font-medium text-success", className)}>
      <ArrowUp className="size-3" strokeWidth={2.5} />
      {value}
    </span>
  );
}

/** Counts from 0 to `to` once `play` turns true. */
function useCountUp(to: number, play: boolean, reduce: boolean, delay = 0) {
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

function ScoreCard({ play, reduce }: { play: boolean; reduce: boolean }) {
  const value = useCountUp(MOCK_SCORE.value, play, reduce);
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  return (
    <Card className="flex items-center gap-4 lg:flex-col lg:items-start lg:justify-between">
      <div className="lg:order-2">
        <p className="text-[12px] font-medium text-fg-2">AI visibility score</p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-metric">{value}</span>
          <Delta value={MOCK_SCORE.delta} />
        </div>
        <p className="mt-0.5 text-[11px] text-fg-3">vs. previous 30 days</p>
      </div>
      <svg viewBox="0 0 100 100" className="order-first size-16 shrink-0 -rotate-90 sm:size-20 lg:order-1 lg:size-24">
        <circle cx="50" cy="50" r={radius} fill="none" strokeWidth="9" className="stroke-surface-2" />
        <m.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth="9"
          strokeLinecap="round"
          className="stroke-chart-you"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: reduce ? circumference * (1 - MOCK_SCORE.value / 100) : circumference }}
          animate={play ? { strokeDashoffset: circumference * (1 - MOCK_SCORE.value / 100) } : undefined}
          transition={reduce ? { duration: 0 } : { duration: 1.2, ease: EASE_OUT }}
        />
      </svg>
    </Card>
  );
}

/** Turns a series into a smooth-enough polyline path inside a 100×32 box. */
function sparkPath(trend: number[]) {
  const min = Math.min(...trend);
  const max = Math.max(...trend);
  const span = max - min || 1;
  return trend
    .map((v, i) => {
      const x = (i / (trend.length - 1)) * 100;
      const y = 28 - ((v - min) / span) * 24;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function PlatformCard({
  platform,
  play,
  reduce,
  index,
}: {
  platform: MockPlatform;
  play: boolean;
  reduce: boolean;
  index: number;
}) {
  const delay = 0.15 + index * 0.08;
  const share = useCountUp(platform.share, play, reduce, delay);
  const path = sparkPath(platform.trend);
  return (
    <Card className="p-2.5 sm:p-3">
      <div className="flex items-center gap-2">
        <PlatformIcon id={platform.id} size={20} decorative className="size-5" />
        <span className="truncate text-[12px] font-medium">{PLATFORMS[platform.id].name}</span>
      </div>
      <div className="mt-2 flex items-baseline gap-1.5">
        <span className="num text-[18px] font-medium tracking-tight sm:text-[20px]">{share}%</span>
        <Delta value={platform.delta} />
      </div>
      {/* Revealed left to right with a clip, not pathLength: pathLength breaks under non-scaling-stroke */}
      <m.div
        className="mt-1"
        initial={{ clipPath: reduce ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
        animate={play ? { clipPath: "inset(0 0% 0 0)" } : undefined}
        transition={reduce ? { duration: 0 } : { duration: 1, delay, ease: EASE_OUT }}
      >
        <svg
          viewBox="0 0 100 32"
          preserveAspectRatio="none"
          className={cn("block h-7 w-full", ENGINE_STROKE[platform.id])}
        >
          <path
            d={path}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </m.div>
    </Card>
  );
}

const ROW_HEIGHT = 40;

/** Share of voice per competitor. "You" climbs from third to first once in view. */
function CompetitorCard({ play, reduce }: { play: boolean; reduce: boolean }) {
  const [climbed, setClimbed] = useState(false);
  const settled = reduce || climbed;

  useEffect(() => {
    if (!play || reduce) return;
    const id = window.setTimeout(() => setClimbed(true), 900);
    return () => window.clearTimeout(id);
  }, [play, reduce]);

  const value = (c: (typeof MOCK_COMPETITORS)[number]) => (settled ? c.to : c.from);
  const ranked = [...MOCK_COMPETITORS].sort((a, b) => value(b) - value(a));
  const max = Math.max(...MOCK_COMPETITORS.map((c) => Math.max(c.from, c.to)));

  return (
    <Card>
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-semibold">Share of voice</p>
        <p className="text-[11px] text-fg-3">AI answers</p>
      </div>
      <ol className="relative mt-3" style={{ height: ROW_HEIGHT * MOCK_COMPETITORS.length }}>
        {MOCK_COMPETITORS.map((c) => {
          const rank = ranked.indexOf(c);
          return (
            <m.li
              key={c.name}
              className="absolute inset-x-0 flex items-center gap-2.5"
              style={{ height: ROW_HEIGHT }}
              initial={false}
              animate={{ y: rank * ROW_HEIGHT }}
              transition={reduce ? { duration: 0 } : { duration: 0.7, ease: EASE_OUT }}
            >
              <span
                className={cn(
                  "grid size-6 shrink-0 place-items-center rounded-md num text-[11px] font-semibold",
                  c.you ? "bg-blue-bg text-blue-ink" : "bg-surface-2 text-fg-2",
                )}
              >
                {rank + 1}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2 text-[12px]">
                  <span className={cn("truncate", c.you ? "font-semibold" : "text-fg-2")}>
                    {c.name}
                    {c.you ? <span className="ms-1.5 text-[10px] font-medium text-blue">You</span> : null}
                  </span>
                  <span className="shrink-0 num text-fg-2">{value(c)}%</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface-2">
                  <m.div
                    className={cn("h-full rounded-full", c.color)}
                    initial={false}
                    animate={{ width: `${(value(c) / max) * 100}%` }}
                    transition={reduce ? { duration: 0 } : { duration: 0.7, ease: EASE_OUT }}
                  />
                </div>
              </div>
            </m.li>
          );
        })}
      </ol>
    </Card>
  );
}

function ApprovalCard({ play, reduce }: { play: boolean; reduce: boolean }) {
  return (
    <m.div
      initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
      animate={play ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 1.3, ease: EASE_OUT }}
    >
      <Card className="flex h-full flex-col">
        <div className="flex items-center gap-2.5">
          <AgentAvatar size={26} />
          <div className="min-w-0">
            <p className="text-[11px] text-fg-3">{MOCK_APPROVAL.kicker}</p>
            <p className="truncate text-[13px] font-semibold">{MOCK_APPROVAL.title}</p>
          </div>
        </div>
        <div className="mt-3 space-y-1.5">
          <span className="block h-1.5 w-full rounded-full bg-surface-2" />
          <span className="block h-1.5 w-11/12 rounded-full bg-surface-2" />
          <span className="block h-1.5 w-4/6 rounded-full bg-surface-2" />
        </div>
        <p className="mt-3 truncate text-[11px] text-fg-3">{MOCK_APPROVAL.meta}</p>
        <div className="mt-auto flex gap-2 pt-3">
          <span className="inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-full bg-signal text-[12px] font-medium text-signal-ink">
            <Check className="size-3.5" strokeWidth={2.5} />
            {MOCK_APPROVAL.approve}
          </span>
          <span className="inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-full border border-border-strong text-[12px] font-medium text-fg">
            <Pencil className="size-3.5" />
            {MOCK_APPROVAL.edit}
          </span>
        </div>
      </Card>
    </m.div>
  );
}
