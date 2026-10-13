import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FeatureMockup } from "@/components/features/feature-mockup";
import { Capabilities, RelatedFeatures, Steps } from "@/components/features/feature-sections";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { ButtonLink } from "@/components/ui/button";
import { PageHero } from "@/components/ui/page-hero";
import { FEATURE_PAGE_COPY, FEATURE_SLUGS, featureHref, FEATURES_INDEX, getFeaturePage } from "@/content/feature-pages";
import { pageMetadata } from "@/lib/metadata";
import { SIGN_UP_URL } from "@/lib/site";

export function generateStaticParams() {
  return FEATURE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/features/[slug]">): Promise<Metadata> {
  const page = getFeaturePage((await params).slug);
  if (!page) return {};
  return pageMetadata({ title: page.metaTitle, description: page.metaDescription, path: featureHref(page.slug) });
}

/** One feature in depth: hero, mockup, capabilities, steps, FAQ, related features. */
export default async function FeaturePage({ params }: PageProps<"/features/[slug]">) {
  const page = getFeaturePage((await params).slug);
  // Cache Components rules out `dynamicParams = false`, so unknown slugs 404 here.
  if (!page) notFound();

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: FEATURES_INDEX.overline, href: "/features" },
          { label: page.label, href: featureHref(page.slug) },
        ]}
        overline={page.label}
        title={page.title}
        lead={page.lead}
      >
        <ButtonLink href={SIGN_UP_URL} size="lg">
          Get started
        </ButtonLink>
        <ButtonLink href="/pricing" variant="secondary" size="lg">
          {FEATURE_PAGE_COPY.secondaryCta}
        </ButtonLink>
      </PageHero>
      <FeatureMockup id={page.mockup} summary={page.mockupSummary} />
      <Capabilities page={page} />
      <Steps page={page} />
      <Faq title={FEATURE_PAGE_COPY.faqTitle} items={page.faqs} className="border-t border-border bg-surface" />
      <RelatedFeatures page={page} />
      <FinalCta />
    </>
  );
}
