import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PricingPlans } from "@/components/pricing/pricing-plans";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { PRICING_COPY, PRICING_INTRO } from "@/content/pricing";

/** Home page pricing: the three app plans and the reseller strip, with a link to the full comparison. */
export function Pricing() {
  return (
    <Section id="pricing" aria-labelledby="pricing-heading" className="border-t border-border bg-surface">
      <Container>
        <Reveal>
          <SectionHeading
            id="pricing-heading"
            overline={PRICING_INTRO.overline}
            title={PRICING_INTRO.title}
            lead={PRICING_INTRO.lead}
          />
        </Reveal>

        <div className="mt-10">
          <PricingPlans />
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-blue hover:underline"
          >
            {PRICING_COPY.compareAll}
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <p className="text-[13px] text-fg-3">{PRICING_COPY.footnote}</p>
        </div>
      </Container>
    </Section>
  );
}
