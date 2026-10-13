import { FeatureCard } from "@/components/features/feature-sections";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { FEATURE_PAGES, FEATURES_INDEX } from "@/content/feature-pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: FEATURES_INDEX.metaTitle,
  description: FEATURES_INDEX.metaDescription,
  path: "/features",
});

/** Index of the six feature pages. */
export default function FeaturesPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: FEATURES_INDEX.overline, href: "/features" },
        ]}
        overline={FEATURES_INDEX.overline}
        title={FEATURES_INDEX.title}
        lead={FEATURES_INDEX.lead}
      />
      <Container className="pb-20 sm:pb-24 lg:pb-28">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_PAGES.map((page, i) => (
            <Reveal as="li" key={page.slug} delay={(i % 3) * 0.06} className="flex">
              <FeatureCard page={page} headingLevel="h2" />
            </Reveal>
          ))}
        </ul>
      </Container>
      <FinalCta />
    </>
  );
}
