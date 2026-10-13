import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PlatformIcon } from "@/components/brand/platform-tile";
import { FinalCta } from "@/components/sections/final-cta";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import {
  type IntegrationCategory,
  integrationHref,
  INTEGRATION_PAGES,
  INTEGRATIONS_PAGE,
} from "@/content/integration-pages";
import { PLATFORMS, TRACKED_ENGINES } from "@/content/platforms";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: INTEGRATIONS_PAGE.metaTitle,
  description: INTEGRATIONS_PAGE.metaDescription,
  path: "/integrations",
});

const CATEGORIES = Object.keys(INTEGRATIONS_PAGE.categories) as IntegrationCategory[];

/** The integration directory, grouped as the app's catalog groups it. */
export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: INTEGRATIONS_PAGE.overline, href: "/integrations" },
        ]}
        overline={INTEGRATIONS_PAGE.overline}
        title={INTEGRATIONS_PAGE.title}
        lead={INTEGRATIONS_PAGE.lead}
      />

      {CATEGORIES.map((category, index) => {
        const items = INTEGRATION_PAGES.filter((page) => page.category === category);
        const headingId = `category-${category.toLowerCase()}`;
        return (
          <Section
            key={category}
            aria-labelledby={headingId}
            className={index === 0 ? "pt-0 sm:pt-0 lg:pt-0" : "border-t border-border"}
          >
            <Container>
              <Reveal>
                <SectionHeading
                  id={headingId}
                  align="start"
                  title={category}
                  lead={INTEGRATIONS_PAGE.categories[category]}
                />
              </Reveal>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item, i) => (
                  <Reveal as="li" key={item.slug} delay={(i % 3) * 0.06} className="flex">
                    <Link
                      href={integrationHref(item.slug)}
                      className="group flex flex-1 flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-surface-hover"
                    >
                      <PlatformIcon id={item.platform} size={44} decorative />
                      <h3 className="mt-5 text-h2 text-fg">{item.name}</h3>
                      <p className="mt-1.5 text-[15px] leading-6 text-fg-2">{item.summary}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[14px] font-medium text-blue">
                        How it works
                        <span className="sr-only">: {item.name}</span>
                        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </Container>
          </Section>
        );
      })}

      <Section aria-labelledby="engines-heading" className="border-t border-border bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              id="engines-heading"
              align="start"
              title={INTEGRATIONS_PAGE.enginesTitle}
              lead={INTEGRATIONS_PAGE.enginesBody}
            />
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {TRACKED_ENGINES.map((id) => (
              <li
                key={id}
                className="flex items-center gap-3 rounded-xl border border-border bg-bg px-4 py-3 text-[15px] font-medium text-fg"
              >
                <PlatformIcon id={id} size={28} decorative />
                <span className="truncate">{PLATFORMS[id].name}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
