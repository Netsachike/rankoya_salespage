import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { WorkspaceMockup } from "@/components/mockups/workspace-mockup";
import { PricingPlans } from "@/components/pricing/pricing-plans";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import {
  AGENCIES_PAGE,
  AGENCY_CAPABILITIES,
  AGENCY_CAPABILITIES_INTRO,
  AGENCY_FAQS,
  AGENCY_PRICING_INTRO,
  WHITE_LABEL_SECTION,
} from "@/content/agencies";
import { ENTERPRISE_PLAN, PLANS, PRICING_COPY, RESELLER, WHITE_LABEL_FEATURES } from "@/content/pricing";
import { pageMetadata } from "@/lib/metadata";
import { SIGN_UP_URL, SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: AGENCIES_PAGE.metaTitle,
  description: AGENCIES_PAGE.metaDescription,
  path: "/for-agencies",
});

const AGENCY_PLANS = [...PLANS.filter((plan) => plan.id === "agency"), ENTERPRISE_PLAN];

/** RankYak's "For agencies" page, in Rankoya terms: Agency plan, Enterprise and White Label. */
export default function ForAgenciesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: AGENCIES_PAGE.overline, href: "/for-agencies" },
        ]}
        overline={AGENCIES_PAGE.overline}
        title={AGENCIES_PAGE.title}
        lead={AGENCIES_PAGE.lead}
      >
        <ButtonLink href={SIGN_UP_URL} size="lg">
          {AGENCIES_PAGE.primaryCta}
        </ButtonLink>
        <ButtonLink href="#pricing" variant="secondary" size="lg">
          {AGENCIES_PAGE.secondaryCta}
        </ButtonLink>
      </PageHero>

      <Container className="pb-20 sm:pb-24">
        <Reveal>
          <figure className="mx-auto max-w-4xl rounded-[24px] border border-border bg-surface p-3 shadow-card sm:p-6 lg:p-10">
            <WorkspaceMockup />
            <figcaption className="sr-only">{AGENCIES_PAGE.mockupSummary}</figcaption>
          </figure>
        </Reveal>
      </Container>

      <Section aria-labelledby="agency-capabilities-heading" className="border-t border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              id="agency-capabilities-heading"
              align="start"
              overline={AGENCY_CAPABILITIES_INTRO.overline}
              title={AGENCY_CAPABILITIES_INTRO.title}
              lead={AGENCY_CAPABILITIES_INTRO.lead}
            />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AGENCY_CAPABILITIES.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={(i % 3) * 0.06}
                  className="rounded-2xl border border-border bg-bg p-6"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-blue-bg text-blue-ink">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="mt-5 text-h2 text-fg">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-6 text-fg-2">{item.body}</p>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section id="white-label" aria-labelledby="white-label-heading">
        <Container>
          <Reveal>
            <div className="grid gap-10 rounded-[28px] bg-[linear-gradient(135deg,#16233f_0%,#0b1220_100%)] p-6 text-frost ring-1 ring-white/5 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
              <div>
                <p className="text-overline text-[#a9c1ff]">{WHITE_LABEL_SECTION.overline}</p>
                <h2 id="white-label-heading" className="mt-3 text-section text-white">
                  {WHITE_LABEL_SECTION.title}
                </h2>
                <p className="mt-4 text-lead text-nav-fg">{WHITE_LABEL_SECTION.lead}</p>
                <ButtonLink
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent(WHITE_LABEL_SECTION.mailSubject)}`}
                  variant="inverse"
                  size="lg"
                  className="mt-8"
                >
                  {WHITE_LABEL_SECTION.cta}
                  <ArrowRight aria-hidden />
                </ButtonLink>
              </div>
              <div>
                <ul className="space-y-3">
                  {WHITE_LABEL_FEATURES.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[15px] text-nav-fg">
                      <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-[#a9c1ff]" strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                  {RESELLER.tiers.map((tier) => (
                    <li key={tier.name} className="rounded-xl border border-nav-border bg-nav-card p-4">
                      <p className="text-h2 text-white">{tier.name}</p>
                      <p className="mt-1 text-[13px] text-nav-fg">{tier.licences}</p>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[13px] text-nav-muted">
                  {RESELLER.licenceNote} · {PRICING_COPY.pricePending}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section id="pricing" aria-labelledby="agency-pricing-heading" className="border-t border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              id="agency-pricing-heading"
              overline={AGENCY_PRICING_INTRO.overline}
              title={AGENCY_PRICING_INTRO.title}
              lead={AGENCY_PRICING_INTRO.lead}
            />
          </Reveal>
          <div className="mt-10">
            <PricingPlans plans={AGENCY_PLANS} reseller={false} />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-blue hover:underline"
            >
              {PRICING_COPY.compareAll}
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Container>
      </Section>

      <Faq title="Agency questions" items={AGENCY_FAQS} />
      <FinalCta />
    </>
  );
}
