"use client";

import * as m from "motion/react-m";

import { Delta, ease, MockCard, MockupFrame, useMockupPlay } from "@/components/mockups/parts";
import { RANKINGS_MOCK } from "@/content/features";
import { cn } from "@/lib/cn";

const W = 320;
const H = 140;
const MIN = 13;
const MAX = 36;

const x = (i: number, n: number) => (i / (n - 1)) * W;
const y = (v: number) => H - ((v - MIN) / (MAX - MIN)) * H;

function linePath(data: readonly number[]) {
  return data.map((v, i) => `${i === 0 ? "M" : "L"}${x(i, data.length).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
}

/** Share of voice over 12 weeks ("You" climbing past three competitors) and keyword moves. */
export function RankingsMockup() {
  const { ref, play, reduce } = useMockupPlay<HTMLDivElement>();
  const you = RANKINGS_MOCK.series[0];
  const last = you.data[you.data.length - 1];

  return (
    <MockupFrame ref={ref} className="space-y-3">
      <MockCard>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-[13px] font-semibold">Share of voice · AI answers</p>
          <p className="text-[11px] text-fg-3">Last 12 weeks</p>
        </div>

        <div className="relative mt-4">
          {/* Clip reveal rather than pathLength: the strokes use non-scaling-stroke */}
          <m.svg
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="none"
            className="block h-36 w-full overflow-visible"
            initial={{ clipPath: reduce ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
            animate={play ? { clipPath: "inset(0 0% 0 0)" } : undefined}
            transition={ease(reduce, 1.4, 0.1)}
          >
            {[15, 25, 35].map((v) => (
              <line
                key={v}
                x1={0}
                x2={W}
                y1={y(v)}
                y2={y(v)}
                className="stroke-border"
                strokeDasharray="3 4"
                vectorEffect="non-scaling-stroke"
              />
            ))}
            {[...RANKINGS_MOCK.series].reverse().map((s) => (
              <path
                key={s.name}
                d={linePath(s.data)}
                fill="none"
                stroke="currentColor"
                strokeWidth={s.width}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                className={s.color}
              />
            ))}
          </m.svg>
          <m.span
            className="absolute -translate-x-full -translate-y-1/2 rounded-md bg-chart-you px-1.5 py-0.5 num text-[11px] font-semibold text-white"
            style={{ left: "100%", top: `${(y(last) / H) * 100}%`, marginTop: -14 }}
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={play ? { opacity: 1, scale: 1 } : undefined}
            transition={ease(reduce, 0.4, 1.4)}
          >
            {last}%
          </m.span>
        </div>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-fg-2">
          {RANKINGS_MOCK.series.map((s) => (
            <li key={s.name} className="flex items-center gap-1.5">
              <span className={cn("h-0.5 w-3 rounded-full bg-current", s.color)} />
              <span className={s.name === "You" ? "font-semibold text-fg" : undefined}>{s.name}</span>
            </li>
          ))}
        </ul>
      </MockCard>

      <MockCard className="p-0 sm:p-0">
        <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 border-b border-border px-3 py-2 text-[11px] font-medium text-fg-3 sm:px-4">
          <span>Keyword</span>
          <span className="text-end">Position</span>
          <span className="w-12 text-end">Week</span>
        </div>
        <ul>
          {RANKINGS_MOCK.keywords.map((k, i) => (
            <m.li
              key={k.keyword}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 border-b border-border px-3 py-2 text-[12px] last:border-0 sm:px-4"
              initial={reduce ? false : { opacity: 0, x: -8 }}
              animate={play ? { opacity: 1, x: 0 } : undefined}
              transition={ease(reduce, 0.45, 0.6 + i * 0.1)}
            >
              <span className="truncate">{k.keyword}</span>
              <span className="text-end num font-medium">#{k.position}</span>
              <Delta value={k.delta} className="w-12 justify-end" />
            </m.li>
          ))}
        </ul>
      </MockCard>
    </MockupFrame>
  );
}
