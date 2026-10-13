import { ComparisonTable } from "@/components/pricing/comparison-table";
import { PricingPlans } from "@/components/pricing/pricing-plans";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import {
  BILLING_FAQS,
  COMPARISON,
  ENTERPRISE_PLAN,
  PLANS,
  PRICING_COPY,
  PRICING_INTRO,
  PRICING_PAGE,
} from "@/content/pricing";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: PRICING_PAGE.metaTitle,
  description: PRICING_PAGE.metaDescription,
  path: "/pricing",
});

/** All four plans, the reseller strip, the full comparison and billing questions. */
export default function PricingPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: PRICING_INTRO.overline, href: "/pricing" },
        ]}
        overline={PRICING_INTRO.overline}
        title={PRICING_INTRO.title}
        lead={PRICING_INTRO.lead}
      />

      <Container className="pb-20 sm:pb-24">
        <h2 className="sr-only">Plans</h2>
        <PricingPlans plans={[...PLANS, ENTERPRISE_PLAN]} />
        <p className="mt-8 text-center text-[13px] text-fg-3">{PRICING_COPY.footnote}</p>
      </Container>

      <Section aria-labelledby="compare-heading" className="border-t border-border">
        <Container>
          <Reveal>
            <SectionHeading id="compare-heading" align="start" title={COMPARISON.title} />
          </Reveal>
          <div className="mt-8">
            <ComparisonTable />
          </div>
        </Container>
      </Section>

      <Faq title={PRICING_PAGE.faqTitle} items={BILLING_FAQS} className="border-t border-border bg-surface" />
      <FinalCta />
    </>
  );
}
