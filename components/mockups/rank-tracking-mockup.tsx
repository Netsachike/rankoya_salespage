"use client";

import { Monitor, Smartphone } from "lucide-react";
import * as m from "motion/react-m";

import { Delta, ease, MockCard, MockupFrame, useMockupPlay } from "@/components/mockups/parts";
import { RANK_TRACKING_MOCK } from "@/content/features";

const MAX_BAND = Math.max(...RANK_TRACKING_MOCK.bands.map((band) => band.count));

/** Average position, keywords per position band and a per-keyword table with device and change. */
export function RankTrackingMockup() {
  const { ref, play, reduce } = useMockupPlay<HTMLDivElement>();

  return (
    <MockupFrame ref={ref} className="space-y-3">
      <MockCard className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-end sm:gap-8">
        <div>
          <p className="text-[12px] font-medium text-fg-2">Average position</p>
          <p className="mt-1 flex items-baseline gap-2">
            <span className="text-metric">{RANK_TRACKING_MOCK.average}</span>
            <Delta value={RANK_TRACKING_MOCK.averageDelta} />
          </p>
          <p className="mt-0.5 text-[11px] text-fg-3">Lower is better · last 30 days</p>
        </div>
        <div className="flex h-20 items-end gap-2">
          {RANK_TRACKING_MOCK.bands.map((band, i) => (
            <div key={band.label} className="flex flex-1 flex-col items-center gap-1">
              <span className="num text-[11px] text-fg-2">{band.count}</span>
              <m.span
                className="block w-full origin-bottom rounded-t-sm bg-chart-you"
                style={{ height: `${(band.count / MAX_BAND) * 44}px` }}
                initial={reduce ? false : { scaleY: 0 }}
                animate={play ? { scaleY: 1 } : undefined}
                transition={ease(reduce, 0.6, 0.1 + i * 0.08)}
              />
              <span className="num text-[10px] text-fg-3">{band.label}</span>
            </div>
          ))}
        </div>
      </MockCard>

      <MockCard className="p-0 sm:p-0">
        <div className="grid grid-cols-[minmax(0,1fr)_auto_auto_auto] gap-x-3 border-b border-border px-3 py-2 text-[11px] font-medium text-fg-3 sm:px-4">
          <span>Keyword</span>
          <span>Device</span>
          <span className="text-end">Position</span>
          <span className="w-12 text-end">30 days</span>
        </div>
        <ul>
          {RANK_TRACKING_MOCK.rows.map((row, i) => {
            const DeviceIcon = row.device === "Mobile" ? Smartphone : Monitor;
            return (
              <m.li
                key={row.keyword}
                className="grid grid-cols-[minmax(0,1fr)_auto_auto_auto] items-center gap-x-3 border-b border-border px-3 py-2.5 last:border-0 sm:px-4"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={play ? { opacity: 1, y: 0 } : undefined}
                transition={ease(reduce, 0.45, 0.3 + i * 0.1)}
              >
                <span className="truncate text-[13px] font-medium">{row.keyword}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-surface-2 px-2 py-0.5 text-[11px] text-fg-2">
                  <DeviceIcon className="size-3" />
                  {row.device}
                </span>
                <span className="text-end num text-[13px] font-medium">#{row.position}</span>
                <Delta value={row.delta} className="w-12 justify-end" />
              </m.li>
            );
          })}
        </ul>
      </MockCard>
    </MockupFrame>
  );
}
