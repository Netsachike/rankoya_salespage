import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PlatformIcon } from "@/components/brand/platform-tile";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { featureHref, getFeaturePage } from "@/content/feature-pages";
import { getIntegrationPage, integrationHref } from "@/content/integration-pages";
import { SOLUTION_PAGE_COPY, type SolutionPage as Solution, solutionHref } from "@/content/solution-pages";
import { pageMetadata } from "@/lib/metadata";
import { GET_STARTED_URL } from "@/lib/site";

export function solutionMetadata(page: Solution) {
  return pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: solutionHref(page.slug) });
}

/** One audience page: hero, the problem, how Rankoya helps (linked to features), integrations, FAQ. */
export function SolutionPage({ page }: { page: Solution }) {
  const integrations = page.integrations.map((slug) => getIntegrationPage(slug)).filter((item) => item !== undefined);

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: page.label, href: solutionHref(page.slug) },
        ]}
        overline={page.label}
        title={page.title}
        lead={page.lead}
      >
        <ButtonLink href={GET_STARTED_URL} size="lg">
          Get started
        </ButtonLink>
        <ButtonLink href="/pricing" variant="secondary" size="lg">
          See pricing
        </ButtonLink>
      </PageHero>

      <Section aria-labelledby="challenges-heading" className="border-t border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading id="challenges-heading" align="start" title={page.challengesTitle} />
          </Reveal>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {page.challenges.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.06} className="rounded-2xl border border-border bg-bg p-6">
                <h3 className="text-h2 text-fg">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-fg-2">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="helps-heading">
        <Container>
          <Reveal>
            <SectionHeading id="helps-heading" align="start" title={page.helpsTitle} />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {page.helps.map((item, i) => {
              const feature = getFeaturePage(item.feature);
              const Icon = feature?.icon;
              return (
                <Reveal as="li" key={item.title} delay={(i % 2) * 0.06} className="flex">
                  <Link
                    href={featureHref(item.feature)}
                    className="group flex flex-1 gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-surface-hover"
                  >
                    {Icon ? (
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-bg text-blue-ink">
                        <Icon aria-hidden className="size-5" />
                      </span>
                    ) : null}
                    <span className="min-w-0">
                      <span className="block text-h2 text-fg">{item.title}</span>
                      <span className="mt-1.5 block text-[15px] leading-6 text-fg-2">{item.body}</span>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-blue">
                        {feature?.label}
                        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="works-with-heading" className="border-t border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading id="works-with-heading" align="start" title={SOLUTION_PAGE_COPY.integrationsTitle} />
          </Reveal>
          <ul className="mt-10 flex flex-wrap gap-3">
            {integrations.map((item) => (
              <li key={item.slug}>
                <Link
                  href={integrationHref(item.slug)}
                  className="flex items-center gap-3 rounded-full border border-border bg-bg py-2 ps-2 pe-4 text-[15px] font-medium text-fg transition-colors hover:border-border-strong"
                >
                  <PlatformIcon id={item.platform} size={28} decorative />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Faq title={SOLUTION_PAGE_COPY.faqTitle} items={page.faqs} />
      <FinalCta />
    </>
  );
}
