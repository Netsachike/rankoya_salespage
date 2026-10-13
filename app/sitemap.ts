import type { MetadataRoute } from "next";

import { SITE_PAGES, SITE_URL } from "@/lib/site";

/** Generated from SITE_PAGES, so a new route is listed as soon as it's registered there. */
export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.priority,
  }));
}
