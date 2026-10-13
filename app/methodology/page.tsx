import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/ui/page-hero";
import { Prose } from "@/components/ui/prose";
import Methodology from "@/content/pages/methodology.mdx";
import { METHODOLOGY_PAGE as COPY } from "@/content/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: COPY.metaTitle,
  description: COPY.metaDescription,
  path: "/methodology",
});

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: COPY.metaTitle, href: "/methodology" },
        ]}
        overline={COPY.metaTitle}
        title={COPY.title}
        lead={COPY.lead}
      />
      <Prose>
        <Methodology />
      </Prose>
      <FinalCta />
    </>
  );
}
