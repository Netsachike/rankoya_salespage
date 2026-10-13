import { FEATURE_SLUGS, getFeaturePage } from "@/content/feature-pages";
import { brandOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { SITE } from "@/lib/site";

export const alt = "A Rankoya feature";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/** Prerender one card per feature at build time. */
export function generateStaticParams() {
  return FEATURE_SLUGS.map((slug) => ({ slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const page = getFeaturePage((await params).slug);
  return brandOgImage({
    eyebrow: page?.label ?? "Features",
    title: page?.title ?? SITE.tagline,
    subtitle: page?.menuDescription ?? SITE.description,
  });
}
