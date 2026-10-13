"use client";

import { AlertTriangle, Info, XCircle } from "lucide-react";
import * as m from "motion/react-m";

import { Delta, ease, MockCard, MockupFrame, useCountUp, useMockupPlay } from "@/components/mockups/parts";
import { AUDIT_MOCK } from "@/content/features";
import { cn } from "@/lib/cn";

type Severity = keyof typeof AUDIT_MOCK.counts;

/** Severity is always icon + word, never colour alone. */
const SEVERITY: Record<Severity, { label: string; icon: typeof XCircle; tone: string }> = {
  critical: { label: "Critical", icon: XCircle, tone: "bg-danger-bg text-danger" },
  warning: { label: "Warning", icon: AlertTriangle, tone: "bg-warning-bg text-warning" },
  notice: { label: "Notice", icon: Info, tone: "bg-blue-bg text-blue-ink" },
};

function SeverityBadge({ severity }: { severity: Severity }) {
  const { label, icon: Icon, tone } = SEVERITY[severity];
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium", tone)}>
      <Icon className="size-3" strokeWidth={2.5} />
      {label}
    </span>
  );
}

/** Site health score, issue counts by severity and the top issues with their owner. */
export function AuditMockup() {
  const { ref, play, reduce } = useMockupPlay<HTMLDivElement>();
  const score = useCountUp(AUDIT_MOCK.score, play, reduce);
  const radius = 42;
  const circumference = 2 * Math.PI * radius;

  return (
    <MockupFrame ref={ref} className="space-y-3">
      <MockCard className="flex flex-wrap items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-4">
          <div className="relative size-20 shrink-0">
            <svg viewBox="0 0 100 100" className="size-full -rotate-90">
              <circle cx="50" cy="50" r={radius} fill="none" strokeWidth="9" className="stroke-surface-2" />
              <m.circle
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                strokeWidth="9"
                strokeLinecap="round"
                className="stroke-success"
                strokeDasharray={circumference}
                initial={{
                  strokeDashoffset: reduce ? circumference * (1 - AUDIT_MOCK.score / 100) : circumference,
                }}
                animate={play ? { strokeDashoffset: circumference * (1 - AUDIT_MOCK.score / 100) } : undefined}
                transition={ease(reduce, 1.2)}
              />
            </svg>
            <span className="absolute inset-0 grid place-items-center text-metric">{score}</span>
          </div>
          <div>
            <p className="text-[12px] font-medium text-fg-2">Site health</p>
            <Delta value={AUDIT_MOCK.delta} suffix=" pts" className="mt-1" />
            <p className="mt-0.5 text-[11px] text-fg-3">since last crawl</p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-2 sm:ms-auto">
          {(Object.keys(AUDIT_MOCK.counts) as Severity[]).map((severity) => (
            <li key={severity} className="flex items-center gap-1.5">
              <SeverityBadge severity={severity} />
              <span className="num text-[12px] font-medium">{AUDIT_MOCK.counts[severity]}</span>
            </li>
          ))}
        </ul>
      </MockCard>

      <MockCard className="p-0 sm:p-0">
        <ul>
          {AUDIT_MOCK.issues.map((issue, i) => (
            <m.li
              key={issue.title}
              className="flex flex-wrap items-center gap-x-3 gap-y-1.5 border-b border-border px-3 py-2.5 last:border-0 sm:px-4"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={play ? { opacity: 1, y: 0 } : undefined}
              transition={ease(reduce, 0.45, 0.4 + i * 0.12)}
            >
              <SeverityBadge severity={issue.severity} />
              <span className="min-w-0 flex-1 truncate text-[13px] font-medium">{issue.title}</span>
              <span className="num text-[12px] text-fg-3">{issue.count} pages</span>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[11px] font-medium",
                  issue.owner === "Rankoya" ? "bg-signal/12 text-signal" : "bg-surface-2 text-fg-2",
                )}
              >
                {issue.owner}
              </span>
            </m.li>
          ))}
        </ul>
      </MockCard>
    </MockupFrame>
  );
}
