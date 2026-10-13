import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { AgentMockup } from "@/components/mockups/agent-mockup";
import { AiVisibilityMockup } from "@/components/mockups/ai-visibility-mockup";
import { AuditMockup } from "@/components/mockups/audit-mockup";
import { ContentMockup } from "@/components/mockups/content-mockup";
import { RankingsMockup } from "@/components/mockups/rankings-mockup";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { FEATURE_PAGE_COPY, featureHref, type FeatureSlug } from "@/content/feature-pages";
import { FEATURES, FEATURES_INTRO, type Feature, type FeatureId } from "@/content/features";
import { cn } from "@/lib/cn";

const MOCKUPS: Record<FeatureId, () => React.ReactNode> = {
  "ai-visibility": AiVisibilityMockup,
  rankings: RankingsMockup,
  agent: AgentMockup,
  content: ContentMockup,
  "site-audit": AuditMockup,
};

/** Each home row links to its full page. */
const PAGE_FOR: Record<FeatureId, FeatureSlug> = {
  "ai-visibility": "ai-visibility",
  rankings: "rank-tracking",
  agent: "seo-agent",
  content: "content",
  "site-audit": "site-audit",
};

/** The five feature deep-dives, alternating sides from `lg` up. */
export function Features() {
  return (
    <Section id="features" aria-labelledby="features-heading" className="border-t border-border bg-surface">
      <Container>
        <Reveal>
          <SectionHeading
            id="features-heading"
            overline={FEATURES_INTRO.overline}
            title={FEATURES_INTRO.title}
            lead={FEATURES_INTRO.lead}
          />
        </Reveal>

        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-24 lg:space-y-32">
          {FEATURES.map((feature, i) => (
            <FeatureRow key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const Mockup = MOCKUPS[feature.id];
  const flip = index % 2 === 1;
  const headingId = `${feature.id}-heading`;

  return (
    <article
      id={feature.id}
      aria-labelledby={headingId}
      className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16"
    >
      <Reveal className={cn(flip && "lg:order-2")}>
        <p className="flex items-center gap-2 text-overline text-blue">
          <span className="num text-fg-3">{String(index + 1).padStart(2, "0")}</span>
          <span aria-hidden className="h-px w-5 bg-border-strong" />
          {feature.overline}
        </p>
        <h3 id={headingId} className="mt-4 text-section text-fg">
          {feature.title}
        </h3>
        <p className="mt-4 text-lead text-fg-2">{feature.body}</p>
        <ul className="mt-7 space-y-3">
          {feature.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-[15px] text-fg">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-blue-bg text-blue-ink">
                <Check aria-hidden className="size-3" strokeWidth={3} />
              </span>
              {bullet}
            </li>
          ))}
        </ul>
        <Link
          href={featureHref(PAGE_FOR[feature.id])}
          className="group mt-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-blue hover:underline"
        >
          {FEATURE_PAGE_COPY.learnMore}
          <span className="sr-only">: {feature.overline}</span>
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Reveal>

      <Reveal delay={0.1} className={cn(flip && "lg:order-1")}>
        <figure className="rounded-2xl border border-border bg-bg p-3 sm:p-6 lg:p-8">
          <Mockup />
          <figcaption className="sr-only">{feature.summary}</figcaption>
        </figure>
      </Reveal>
    </article>
  );
}
