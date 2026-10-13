import { APP_URL, SITE, SITE_URL } from "@/lib/site";

/**
 * Structured data for the home page. No ratings or offers: Rankoya has no
 * public reviews or prices yet, and structured data must match visible content.
 */
export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE.company,
      brand: { "@type": "Brand", name: SITE.name, slogan: SITE.tagline },
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      email: SITE.email,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE.name,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: SITE.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: APP_URL,
      description: SITE.description,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

/** Serialises JSON-LD for a <script> tag, escaping `<` so the payload can't close the tag. */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
