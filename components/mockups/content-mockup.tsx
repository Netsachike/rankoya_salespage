"use client";

import { Bold, CalendarClock, Check, Heading2, Italic, Link2, List } from "lucide-react";
import * as m from "motion/react-m";

import { PlatformIcon } from "@/components/brand/platform-tile";
import { ease, MockCard, MockupFrame, TextLine, useMockupPlay } from "@/components/mockups/parts";
import { CONTENT_MOCK } from "@/content/features";

const TOOLBAR = [Bold, Italic, Heading2, List, Link2];

/** The article editor with its outline, and the Rankoya / You task split beside it. */
export function ContentMockup() {
  const { ref, play, reduce } = useMockupPlay<HTMLDivElement>();
  const tick = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, scale: 0.6 },
    animate: play ? { opacity: 1, scale: 1 } : undefined,
    transition: ease(reduce, 0.35, delay),
  });

  return (
    <MockupFrame ref={ref} className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,220px)]">
      <MockCard className="p-0 sm:p-0">
        <div className="flex items-center gap-1 border-b border-border px-3 py-2 text-fg-3">
          {TOOLBAR.map((Icon, i) => (
            <span key={i} className="grid size-7 place-items-center rounded-md">
              <Icon className="size-3.5" />
            </span>
          ))}
          <span className="ms-auto rounded-full bg-warning-bg px-2 py-0.5 text-[11px] font-medium text-warning">
            {CONTENT_MOCK.status}
          </span>
        </div>
        <div className="space-y-3 p-4">
          <p className="text-[17px] leading-6 font-semibold tracking-tight">{CONTENT_MOCK.title}</p>
          <div className="space-y-1.5">
            <TextLine className="w-full" />
            <TextLine className="w-5/6" />
          </div>
          {CONTENT_MOCK.outline.map((heading, i) => (
            <m.div
              key={heading}
              className="space-y-1.5"
              initial={reduce ? false : { opacity: 0 }}
              animate={play ? { opacity: 1 } : undefined}
              transition={ease(reduce, 0.4, 0.2 + i * 0.15)}
            >
              <p className="text-[13px] font-semibold">{heading}</p>
              <TextLine className="w-full" />
              <TextLine className={i % 2 ? "w-2/3" : "w-4/5"} />
            </m.div>
          ))}
        </div>
      </MockCard>

      <div className="flex flex-col gap-3">
        <MockCard>
          <p className="text-overline text-blue">Rankoya does this</p>
          <ul className="mt-2.5 space-y-2 text-[12px]">
            {CONTENT_MOCK.rankoya.map((task, i) => (
              <li key={task} className="flex items-start gap-2">
                <m.span
                  {...tick(0.6 + i * 0.2)}
                  className="mt-px grid size-4 shrink-0 place-items-center rounded-full bg-blue text-white"
                >
                  <Check className="size-2.5" strokeWidth={3} />
                </m.span>
                <span className="text-fg-2">{task}</span>
              </li>
            ))}
          </ul>
        </MockCard>
        <MockCard>
          <p className="text-overline text-fg-3">You do this</p>
          <ul className="mt-2.5 space-y-2 text-[12px]">
            {CONTENT_MOCK.you.map((task) => (
              <li key={task} className="flex items-start gap-2">
                <span className="mt-px size-4 shrink-0 rounded-full border-[1.5px] border-border-strong" />
                <span className="font-medium">{task}</span>
              </li>
            ))}
          </ul>
        </MockCard>
        <MockCard className="flex items-center gap-2 py-2.5 sm:py-2.5">
          <CalendarClock className="size-4 shrink-0 text-fg-3" />
          <span className="truncate text-[12px] font-medium">{CONTENT_MOCK.schedule}</span>
          <PlatformIcon id={CONTENT_MOCK.platform} size={20} decorative className="ms-auto size-5" />
        </MockCard>
      </div>
    </MockupFrame>
  );
}
