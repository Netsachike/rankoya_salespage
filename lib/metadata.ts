import type { Metadata } from "next";

import { SITE } from "@/lib/site";

/**
 * Metadata for a sub-page. Nested fields like `openGraph` replace the
 * layout's rather than merging, so each page sets all of them. The share image
 * comes from the route's own opengraph-image.tsx.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, siteName: SITE.name, title: fullTitle, description, locale: "en_GB" },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
