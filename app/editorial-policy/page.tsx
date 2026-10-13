import { PageHero } from "@/components/ui/page-hero";
import { Prose } from "@/components/ui/prose";
import EditorialPolicy from "@/content/pages/editorial-policy.mdx";
import { EDITORIAL_PAGE as COPY } from "@/content/company";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: COPY.metaTitle,
  description: COPY.metaDescription,
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: COPY.metaTitle, href: "/editorial-policy" },
        ]}
        overline={COPY.metaTitle}
        title={COPY.title}
        lead={COPY.lead}
      />
      <Prose>
        <EditorialPolicy />
      </Prose>
    </>
  );
}
