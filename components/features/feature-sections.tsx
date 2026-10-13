import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container, Section, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { FEATURE_PAGE_COPY, type FeaturePage, featureHref, getFeaturePage } from "@/content/feature-pages";

/** Capability grid: what the feature gives you, in the app's own terms. */
export function Capabilities({ page }: { page: FeaturePage }) {
  return (
    <Section aria-labelledby="capabilities-heading" className="border-t border-border bg-surface">
      <Container>
        <Reveal>
          <SectionHeading id="capabilities-heading" align="start" title={FEATURE_PAGE_COPY.capabilitiesTitle} />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.capabilities.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={(i % 3) * 0.06}
              className="rounded-2xl border border-border bg-bg p-6"
            >
              <h3 className="text-h2 text-fg">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-6 text-fg-2">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/** Three numbered steps. */
export function Steps({ page }: { page: FeaturePage }) {
  return (
    <Section aria-labelledby="steps-heading">
      <Container>
        <Reveal>
          <SectionHeading id="steps-heading" align="start" title={FEATURE_PAGE_COPY.stepsTitle} />
        </Reveal>
        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {page.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.08} className="border-t-2 border-ink pt-5">
              <span className="num text-[13px] font-medium text-blue">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-h2 text-fg">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-6 text-fg-2">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/** Cards linking to the related feature pages. */
export function RelatedFeatures({ page }: { page: FeaturePage }) {
  const related = page.related.map((slug) => getFeaturePage(slug)).filter((item) => item !== undefined);
  return (
    <Section aria-labelledby="related-heading" className="border-t border-border">
      <Container>
        <Reveal>
          <SectionHeading id="related-heading" align="start" title={FEATURE_PAGE_COPY.relatedTitle} />
        </Reveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {related.map((item, i) => (
            <Reveal as="li" key={item.slug} delay={i * 0.06} className="flex">
              <FeatureCard page={item} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/** A linked card for one feature page: icon, label, one-liner. */
export function FeatureCard({ page, headingLevel = "h3" }: { page: FeaturePage; headingLevel?: "h2" | "h3" }) {
  const Icon = page.icon;
  const Heading = headingLevel;
  return (
    <Link
      href={featureHref(page.slug)}
      className="group flex flex-1 flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-surface-hover"
    >
      <span className="grid size-10 place-items-center rounded-xl bg-blue-bg text-blue-ink">
        <Icon aria-hidden className="size-5" />
      </span>
      <Heading className="mt-5 text-h2 text-fg">{page.label}</Heading>
      <p className="mt-1.5 text-[15px] leading-6 text-fg-2">{page.menuDescription}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[14px] font-medium text-blue">
        {FEATURE_PAGE_COPY.learnMore}
        <span className="sr-only">: {page.label}</span>
        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
