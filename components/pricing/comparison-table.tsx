import { Check, Minus } from "lucide-react";

import { COMPARISON, ENTERPRISE_PLAN, PLANS } from "@/content/pricing";
import { cn } from "@/lib/cn";

const PLAN_NAMES = Object.fromEntries([...PLANS, ENTERPRISE_PLAN].map((plan) => [plan.id, plan.name]));
const HIGHLIGHTED = PLANS.find((plan) => plan.highlighted)?.id;

/**
 * Every feature row per plan, as a real table: row groups with header cells,
 * and an icon plus hidden text in each cell so it never relies on the icon.
 * Scrolls sideways on small screens with the feature column pinned.
 */
export function ComparisonTable() {
  return (
    <div
      // Focusable so keyboard users can scroll it; named apart from its section.
      tabIndex={0}
      role="region"
      aria-label="Plan comparison table"
      className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0"
    >
      <table className="w-full min-w-[720px] border-separate border-spacing-0 text-[15px]">
        <caption className="sr-only">{COMPARISON.caption}</caption>
        <thead>
          <tr>
            <td className="sticky left-0 z-10 w-[38%] bg-bg" />
            {COMPARISON.columns.map((id) => (
              <th
                key={id}
                scope="col"
                className={cn(
                  "border-b border-border px-3 pb-4 text-center text-h2 font-semibold text-fg",
                  id === HIGHLIGHTED && "text-blue",
                )}
              >
                {PLAN_NAMES[id]}
              </th>
            ))}
          </tr>
        </thead>
        {COMPARISON.groups.map((group) => (
          <tbody key={group.title}>
            <tr>
              <th
                scope="colgroup"
                colSpan={COMPARISON.columns.length + 1}
                className="sticky left-0 bg-bg pt-8 pb-3 text-start text-overline text-fg-3"
              >
                {group.title}
              </th>
            </tr>
            {group.rows.map((row) => (
              <tr key={row.label}>
                <th
                  scope="row"
                  className="sticky left-0 z-10 border-b border-border bg-bg py-3.5 pe-4 text-start font-normal text-fg"
                >
                  {row.label}
                </th>
                {COMPARISON.columns.map((id) => {
                  const included = (row.in as readonly string[]).includes(id);
                  return (
                    <td key={id} className="border-b border-border px-3 py-3.5 text-center">
                      {included ? (
                        <Check aria-hidden className="mx-auto size-5 text-blue" strokeWidth={2.5} />
                      ) : (
                        <Minus aria-hidden className="mx-auto size-4 text-fg-3" strokeWidth={2.5} />
                      )}
                      <span className="sr-only">{included ? "Included" : "Not included"}</span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}
