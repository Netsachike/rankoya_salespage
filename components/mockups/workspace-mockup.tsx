"use client";

import * as m from "motion/react-m";

import { Mark } from "@/components/brand/logo";
import { Delta, ease, MockCard, MockupFrame, useMockupPlay } from "@/components/mockups/parts";
import { WORKSPACE_MOCK } from "@/content/agencies";

/** An agency workspace: one row per client brand with AI visibility, average position and approvals waiting. */
export function WorkspaceMockup() {
  const { ref, play, reduce } = useMockupPlay<HTMLDivElement>();

  return (
    <MockupFrame ref={ref}>
      <MockCard className="p-0 sm:p-0">
        <div className="flex items-center gap-2 border-b border-border px-3 py-3 sm:px-4">
          <Mark size={18} />
          <span className="text-[13px] font-semibold">{WORKSPACE_MOCK.workspace}</span>
          <span className="ms-auto rounded-full bg-surface-2 px-2 py-0.5 text-[11px] text-fg-2">
            {WORKSPACE_MOCK.clients.length} brands
          </span>
        </div>
        <div className="grid grid-cols-[minmax(0,1fr)_auto_auto_auto] gap-x-4 border-b border-border px-3 py-2 text-[11px] font-medium text-fg-3 sm:px-4">
          <span>Brand</span>
          <span className="text-end">AI visibility</span>
          <span className="text-end">Avg. position</span>
          <span className="text-end">Waiting</span>
        </div>
        <ul>
          {WORKSPACE_MOCK.clients.map((client, i) => (
            <m.li
              key={client.name}
              className="grid grid-cols-[minmax(0,1fr)_auto_auto_auto] items-center gap-x-4 border-b border-border px-3 py-3 last:border-0 sm:px-4"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={play ? { opacity: 1, y: 0 } : undefined}
              transition={ease(reduce, 0.45, 0.2 + i * 0.1)}
            >
              <span className="flex min-w-0 items-center gap-2">
                <span className="grid size-6 shrink-0 place-items-center rounded-md bg-blue-bg text-[11px] font-semibold text-blue-ink">
                  {client.name[0]}
                </span>
                <span className="truncate text-[13px] font-medium">{client.name}</span>
              </span>
              <span className="flex items-center justify-end gap-1.5">
                <span className="num text-[13px]">{client.visibility}%</span>
                <Delta value={client.visibilityDelta} />
              </span>
              <span className="text-end num text-[13px]">{client.position}</span>
              <span className="text-end">
                {client.waiting > 0 ? (
                  <span className="rounded-full bg-signal/12 px-2 py-0.5 num text-[11px] font-medium text-signal-text">
                    {client.waiting} to approve
                  </span>
                ) : (
                  <span className="text-[11px] text-fg-3">None</span>
                )}
              </span>
            </m.li>
          ))}
        </ul>
      </MockCard>
    </MockupFrame>
  );
}
