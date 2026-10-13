"use client";

import { Check, Minus } from "lucide-react";
import * as m from "motion/react-m";

import { PlatformIcon } from "@/components/brand/platform-tile";
import { ease, MockCard, MockupFrame, useMockupPlay } from "@/components/mockups/parts";
import { VISIBILITY_MOCK } from "@/content/features";
import { PLATFORMS, type PlatformId } from "@/content/platforms";
import { cn } from "@/lib/cn";

/** An AI answer that names the brand, plus which engines mention it. */
export function AiVisibilityMockup() {
  const { ref, play, reduce } = useMockupPlay<HTMLDivElement>();
  const show = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 8 },
    animate: play ? { opacity: 1, y: 0 } : undefined,
    transition: ease(reduce, 0.5, delay),
  });

  return (
    <MockupFrame ref={ref} className="space-y-3">
      <m.div {...show(0)} className="flex justify-end">
        <p className="max-w-[85%] rounded-2xl rounded-ee-md bg-ink px-4 py-2.5 text-[13px] text-ink-fg">
          {VISIBILITY_MOCK.question}
        </p>
      </m.div>

      <m.div {...show(0.25)}>
        <MockCard>
          <div className="flex items-center gap-2">
            <PlatformIcon id="chatgpt" size={20} decorative className="size-5" />
            <span className="text-[12px] font-medium text-fg-2">ChatGPT answer</span>
            <span className="ms-auto inline-flex items-center gap-1 rounded-full bg-success-bg px-2 py-0.5 text-[11px] font-medium text-success">
              <Check className="size-3" strokeWidth={2.5} />
              Mentioned · <span className="num">#2</span>
            </span>
          </div>
          <p className="mt-3 text-[13px] leading-5 text-fg-2">{VISIBILITY_MOCK.answerLead}</p>
          <ol className="mt-2 space-y-1.5 text-[13px]">
            {VISIBILITY_MOCK.ranked.map((name, i) => {
              const you = name === VISIBILITY_MOCK.you;
              return (
                <m.li
                  key={name}
                  {...show(0.5 + i * 0.12)}
                  className={cn(
                    "relative flex items-center gap-2 overflow-hidden rounded-md px-2.5 py-1.5",
                    you ? "font-semibold text-fg" : "text-fg-2",
                  )}
                >
                  {you ? (
                    <m.span
                      aria-hidden
                      className="absolute inset-0 origin-left rounded-md bg-signal/12"
                      initial={reduce ? false : { scaleX: 0 }}
                      animate={play ? { scaleX: 1 } : undefined}
                      transition={ease(reduce, 0.6, 1)}
                    />
                  ) : null}
                  {you ? (
                    <span aria-hidden className="absolute inset-y-1 start-0 w-0.5 rounded-full bg-signal" />
                  ) : null}
                  <span className="relative num text-fg-3">{i + 1}.</span>
                  <span className="relative">{name}</span>
                </m.li>
              );
            })}
          </ol>
          <p className="mt-2 text-[13px] leading-5 text-fg-3">{VISIBILITY_MOCK.answerTail}</p>
        </MockCard>
      </m.div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {VISIBILITY_MOCK.engines.map((engine, i) => (
          <m.div
            key={engine.id}
            {...show(1.1 + i * 0.08)}
            className="flex items-center gap-2 rounded-lg border border-border bg-surface px-2.5 py-2"
          >
            <PlatformIcon id={engine.id as PlatformId} size={20} decorative className="size-5" />
            <div className="min-w-0">
              <p className="truncate text-[12px] font-medium">{PLATFORMS[engine.id as PlatformId].name}</p>
              {engine.mentioned ? (
                <p className="flex items-center gap-1 text-[11px] text-success">
                  <Check className="size-3" strokeWidth={2.5} />
                  Mentioned <span className="num">#{engine.position}</span>
                </p>
              ) : (
                <p className="flex items-center gap-1 text-[11px] text-fg-3">
                  <Minus className="size-3" strokeWidth={2.5} />
                  Not yet
                </p>
              )}
            </div>
          </m.div>
        ))}
      </div>
    </MockupFrame>
  );
}
