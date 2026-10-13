import { getIntegrationPage, INTEGRATION_SLUGS } from "@/content/integration-pages";
import { brandOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { SITE } from "@/lib/site";

export const alt = "A Rankoya integration";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/** Prerender one card per integration at build time. */
export function generateStaticParams() {
  return INTEGRATION_SLUGS.map((slug) => ({ slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const page = getIntegrationPage((await params).slug);
  return brandOgImage({
    eyebrow: "Integrations",
    title: page ? `Rankoya + ${page.name}` : SITE.tagline,
    subtitle: page?.summary ?? SITE.description,
  });
}
