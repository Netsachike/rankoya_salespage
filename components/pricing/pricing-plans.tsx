"use client";

import { ArrowRight, Check, Minus } from "lucide-react";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { type BillingPeriod, type Plan, PLANS, PRICING_COPY, RESELLER } from "@/content/pricing";
import { cn } from "@/lib/cn";
import { GET_STARTED_URL, SITE } from "@/lib/site";

/** The billing toggle only means something once a paid plan has a price. */
const HAS_PAID_PRICES = PLANS.some((plan) => plan.id !== "free" && plan.price.monthly !== null);

/**
 * Billing toggle, plan cards and (optionally) the reseller strip. Shared by
 * the home pricing section, /pricing and /for-agencies.
 */
export function PricingPlans({ plans = PLANS, reseller = true }: { plans?: Plan[]; reseller?: boolean }) {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");

  return (
    <>
      <Reveal delay={0.05} className="flex flex-col items-center gap-2">
        <PeriodToggle period={period} onChange={setPeriod} disabled={!HAS_PAID_PRICES} />
        {HAS_PAID_PRICES ? null : (
          <p id="period-pending" className="text-[13px] text-fg-3">
            {PRICING_COPY.togglePending}
          </p>
        )}
      </Reveal>

      <ul
        className={cn(
          "mt-10 grid gap-4",
          plans.length === 2 && "mx-auto max-w-4xl md:grid-cols-2",
          plans.length === 3 && "lg:grid-cols-3",
          plans.length >= 4 && "md:grid-cols-2 xl:grid-cols-4",
        )}
      >
        {plans.map((plan, i) => (
          <Reveal as="li" key={plan.id} delay={i * 0.08} className="flex">
            <PlanCard plan={plan} period={period} />
          </Reveal>
        ))}
      </ul>

      {reseller ? (
        <Reveal className="mt-4">
          <ResellerStrip />
        </Reveal>
      ) : null}
    </>
  );
}

function PeriodToggle({
  period,
  onChange,
  disabled,
}: {
  period: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
  disabled: boolean;
}) {
  const periods: BillingPeriod[] = ["monthly", "annually"];
  return (
    <div
      role="group"
      aria-label={PRICING_COPY.toggleLabel}
      aria-describedby={disabled ? "period-pending" : undefined}
      className={cn("inline-flex rounded-full border border-border bg-bg p-1", disabled && "opacity-60")}
    >
      {periods.map((value) => {
        const checked = period === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={checked}
            disabled={disabled}
            onClick={() => onChange(value)}
            className={cn(
              "rounded-full px-4 py-1.5 text-[14px] font-medium transition-colors disabled:cursor-not-allowed",
              checked ? "bg-surface text-fg shadow-raised" : "text-fg-2 enabled:hover:text-fg",
            )}
          >
            {PRICING_COPY.periods[value]}
          </button>
        );
      })}
    </div>
  );
}

function PriceLine({ plan, period }: { plan: Plan; period: BillingPeriod }) {
  const amount = plan.price[period];
  if (amount === null) {
    return <span className="text-h2 text-fg-2">{PRICING_COPY.pricePending}</span>;
  }
  return (
    <span className="flex flex-wrap items-baseline gap-x-1.5">
      <span className="text-metric-xl text-fg">${amount}</span>
      <span className="text-[15px] text-fg-2">{PRICING_COPY.perMonth}</span>
      {period === "annually" ? (
        <span className="w-full text-[13px] text-fg-3">{PRICING_COPY.billedAnnually}</span>
      ) : null}
    </span>
  );
}

function PlanCard({ plan, period }: { plan: Plan; period: BillingPeriod }) {
  const headingId = `plan-${plan.id}`;
  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative flex flex-1 flex-col rounded-2xl border bg-bg p-6 sm:p-7",
        plan.highlighted ? "border-ink shadow-pop ring-1 ring-ink" : "border-border",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 id={headingId} className="text-h2 text-fg">
          {plan.name}
        </h3>
        {plan.highlighted ? (
          <span className="rounded-full bg-ink px-2.5 py-0.5 text-[12px] font-medium text-ink-fg">
            {PRICING_COPY.recommended}
          </span>
        ) : null}
      </div>
      <p className="mt-2 text-[15px] text-fg-2">{plan.pitch}</p>

      <div className="mt-6 flex min-h-11 items-end">
        <PriceLine plan={plan} period={period} />
      </div>

      <ButtonLink
        href={GET_STARTED_URL}
        variant={plan.highlighted ? "primary" : "secondary"}
        className="mt-6 w-full"
        aria-label={`${plan.cta}: ${plan.name} plan`}
      >
        {plan.cta}
      </ButtonLink>

      <ul className="mt-7 space-y-3 border-t border-border pt-6 text-[15px]">
        {plan.included.map((item) => (
          <li key={item} className="flex items-start gap-3 text-fg">
            <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-blue" strokeWidth={2.5} />
            {item}
          </li>
        ))}
        {plan.excluded?.map((item) => (
          <li key={item} className="flex items-start gap-3 text-fg-3">
            <Minus aria-hidden className="mt-0.5 size-4 shrink-0" strokeWidth={2.5} />
            <span>
              {item}
              <span className="sr-only"> (not included)</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Resellers: Enterprise plus one-time White Label licences, on the fixed-dark panel. */
function ResellerStrip() {
  return (
    <section
      aria-labelledby="reseller-heading"
      className="grid gap-8 rounded-2xl bg-[linear-gradient(135deg,#16233f_0%,#0b1220_100%)] p-6 text-frost ring-1 ring-white/5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center"
    >
      <div>
        <p className="text-overline text-[#a9c1ff]">{RESELLER.overline}</p>
        <h3 id="reseller-heading" className="mt-2 text-h1 text-white">
          {RESELLER.title}
        </h3>
        <p className="mt-3 max-w-2xl text-[15px] leading-6 text-nav-fg">{RESELLER.body}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {RESELLER.tiers.map((tier) => (
            <li
              key={tier.name}
              className="rounded-full border border-nav-border bg-nav-card px-3 py-1.5 text-[13px] text-nav-fg"
            >
              <span className="font-semibold text-white">{tier.name}</span> · {tier.licences}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-[13px] text-nav-muted">{RESELLER.licenceNote}</p>
      </div>
      <ButtonLink
        href={`mailto:${SITE.email}?subject=${encodeURIComponent("Rankoya White Label")}`}
        variant="inverse"
        size="lg"
        className="justify-self-start lg:justify-self-end"
      >
        {RESELLER.cta}
        <ArrowRight aria-hidden />
      </ButtonLink>
    </section>
  );
}
