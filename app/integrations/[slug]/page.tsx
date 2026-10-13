import { Check } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PlatformIcon } from "@/components/brand/platform-tile";
import { FeatureCard } from "@/components/features/feature-sections";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { getFeaturePage } from "@/content/feature-pages";
import { getIntegrationPage, INTEGRATION_SLUGS, integrationHref, INTEGRATIONS_PAGE } from "@/content/integration-pages";
import { pageMetadata } from "@/lib/metadata";
import { SIGN_UP_URL } from "@/lib/site";

export function generateStaticParams() {
  return INTEGRATION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/integrations/[slug]">): Promise<Metadata> {
  const page = getIntegrationPage((await params).slug);
  if (!page) return {};
  return pageMetadata({
    title: `${page.name} integration`,
    description: page.metaDescription,
    path: integrationHref(page.slug),
  });
}

/** One integration: what Rankoya does with it, the access it needs, how to connect and what disconnecting does. */
export default async function IntegrationPage({ params }: PageProps<"/integrations/[slug]">) {
  const page = getIntegrationPage((await params).slug);
  if (!page) notFound();
  const features = page.features.map((slug) => getFeaturePage(slug)).filter((item) => item !== undefined);
  const labels = INTEGRATIONS_PAGE.factLabels;

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: INTEGRATIONS_PAGE.overline, href: "/integrations" },
          { label: page.name, href: integrationHref(page.slug) },
        ]}
        overline={`${page.category} integration`}
        title={
          <span className="flex flex-col items-start gap-6">
            <PlatformIcon id={page.platform} size={64} decorative eager />
            <span>Rankoya + {page.name}</span>
          </span>
        }
        lead={page.summary}
      >
        <ButtonLink href={SIGN_UP_URL} size="lg">
          Get started
        </ButtonLink>
      </PageHero>

      <Section aria-labelledby="uses-heading" className="border-t border-border bg-surface">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <Reveal>
            <SectionHeading id="uses-heading" align="start" title={INTEGRATIONS_PAGE.usesTitle} />
            <ul className="mt-8 space-y-3">
              {page.uses.map((use) => (
                <li key={use} className="flex items-start gap-3 text-[16px] text-fg">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-blue-bg text-blue-ink">
                    <Check aria-hidden className="size-3" strokeWidth={3} />
                  </span>
                  {use}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <section aria-labelledby="facts-heading" className="rounded-2xl border border-border bg-bg p-6">
              <h3 id="facts-heading" className="text-overline text-fg-3">
                {INTEGRATIONS_PAGE.factsTitle}
              </h3>
              <dl className="mt-4 divide-y divide-border">
                {(Object.keys(labels) as (keyof typeof labels)[]).map((key) => (
                  <div key={key} className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-4 py-3.5">
                    <dt className="text-[14px] text-fg-2">{labels[key]}</dt>
                    <dd className="text-[14px] font-medium text-fg">{page.facts[key]}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </Reveal>
        </Container>
      </Section>

      <Section aria-labelledby="connect-heading">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <Reveal>
            <SectionHeading id="connect-heading" align="start" title={INTEGRATIONS_PAGE.stepsTitle} />
            <ol className="mt-8 space-y-5">
              {page.steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink num text-[14px] font-medium text-ink-fg">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-[16px] leading-7 text-fg-2">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-border p-6">
              <h3 className="text-h3 text-fg">{INTEGRATIONS_PAGE.disconnectTitle}</h3>
              <p className="mt-2 text-[15px] leading-6 text-fg-2">{page.disconnect}</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Faq title="Common questions" items={page.faqs} className="border-t border-border bg-surface" />

      <Section aria-labelledby="used-by-heading">
        <Container>
          <Reveal>
            <SectionHeading id="used-by-heading" align="start" title={INTEGRATIONS_PAGE.featuresTitle} />
          </Reveal>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal as="li" key={feature.slug} delay={i * 0.06} className="flex">
                <FeatureCard page={feature} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
