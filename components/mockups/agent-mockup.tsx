"use client";

import { Check, Pencil, Send, X } from "lucide-react";
import * as m from "motion/react-m";

import { AgentAvatar } from "@/components/brand/logo";
import { ease, MockCard, MockupFrame, useMockupPlay } from "@/components/mockups/parts";
import { AGENT_MOCK } from "@/content/features";
import { cn } from "@/lib/cn";

/** A short Ask Rankoya thread ending in an approval card. */
export function AgentMockup() {
  const { ref, play, reduce } = useMockupPlay<HTMLDivElement>();
  const show = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 10 },
    animate: play ? { opacity: 1, y: 0 } : undefined,
    transition: ease(reduce, 0.5, delay),
  });
  const { card } = AGENT_MOCK;

  return (
    <MockupFrame ref={ref}>
      <MockCard className="space-y-4">
        <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <AgentAvatar size={24} />
            <span className="text-[13px] font-semibold">Ask Rankoya</span>
          </div>
          <div className="hidden rounded-full bg-surface-2 p-0.5 text-[11px] sm:flex">
            {AGENT_MOCK.modes.map((mode, i) => (
              <span
                key={mode}
                className={cn(
                  "rounded-full px-2.5 py-1 font-medium whitespace-nowrap",
                  i === AGENT_MOCK.activeMode ? "bg-surface text-fg shadow-raised" : "text-fg-3",
                )}
              >
                {mode}
              </span>
            ))}
          </div>
        </div>

        <m.div {...show(0)} className="flex justify-end">
          <p className="max-w-[80%] rounded-2xl rounded-ee-md bg-ink px-3.5 py-2 text-[13px] text-ink-fg">
            {AGENT_MOCK.user}
          </p>
        </m.div>

        <m.div {...show(0.35)} className="flex gap-2.5">
          <AgentAvatar size={24} className="mt-0.5" />
          <p className="max-w-[88%] rounded-2xl rounded-ss-md bg-surface-2 px-3.5 py-2 text-[13px] leading-5 text-fg">
            {AGENT_MOCK.reply}
          </p>
        </m.div>

        <m.div {...show(0.7)} className="ms-[34px] rounded-xl border border-border-strong bg-surface p-3">
          <p className="text-[11px] text-fg-3">{card.kicker}</p>
          <p className="mt-0.5 text-[13px] font-semibold">{card.title}</p>
          <dl className="mt-3 space-y-2 text-[12px]">
            <div>
              <dt className="text-[11px] text-fg-3">Before</dt>
              <dd className="text-fg-3 line-through decoration-danger/60">{card.before}</dd>
            </div>
            <div>
              <dt className="text-[11px] text-fg-3">After</dt>
              <dd className="rounded-md bg-success-bg px-2 py-1 text-fg">{card.after}</dd>
            </div>
          </dl>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-signal px-3.5 text-[12px] font-medium text-signal-ink">
              <Check className="size-3.5" strokeWidth={2.5} />
              {card.approve}
            </span>
            <span className="inline-flex h-8 items-center gap-1.5 rounded-full border border-border-strong px-3.5 text-[12px] font-medium">
              <Pencil className="size-3.5" />
              {card.edit}
            </span>
            <span className="inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-[12px] font-medium text-fg-2">
              <X className="size-3.5" />
              {card.reject}
            </span>
          </div>
        </m.div>

        <m.p {...show(1)} className="flex items-center gap-1.5 text-[11px] text-fg-3">
          <Send className="size-3" />
          {AGENT_MOCK.telegram}
        </m.p>
      </MockCard>
    </MockupFrame>
  );
}
