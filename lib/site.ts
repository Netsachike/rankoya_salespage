/**
 * Every URL and nav entry the landing page uses. Components read from here,
 * never from string literals, so a domain or route change is one edit.
 */

const trimSlash = (url: string) => url.replace(/\/+$/, "");

export const SITE_URL = trimSlash(process.env.NEXT_PUBLIC_SITE_URL || "https://rankoya.uk");
export const APP_URL = trimSlash(process.env.NEXT_PUBLIC_APP_URL || "https://app.rankoya.uk");

/** Only production is indexed; Vercel previews and local builds are noindex. */
export const IS_INDEXABLE = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true;

export const SITE = {
  name: "Rankoya",
  tagline: "Be the answer.",
  title: "Rankoya: AI SEO for Google and AI answers",
  description:
    "Rankoya measures where your brand ranks on Google and inside ChatGPT, Claude, Gemini and Perplexity answers, then an AI agent drafts the fixes and publishes them after you approve.",
  company: "NETSACH TECH LTD",
  /** Placeholder until the product owner confirms a public inbox. */
  email: "hello@rankoya.uk",
  /** Fixed rather than `new Date()`: the page is prerendered under cacheComponents. */
  copyrightYear: 2026,
} as const;

/** The app's auth routes. The app has no `/login`. */
export const SIGN_UP_URL = `${APP_URL}/sign-up`;
export const SIGN_IN_URL = `${APP_URL}/sign-in`;

export type NavLink = { label: string; href: `#${string}` };

/**
 * Header nav. Add an entry in the same phase that ships its section, so the
 * nav never points at a section that isn't on the page.
 */
export const NAV_LINKS: NavLink[] = [
  { label: "Product", href: "#product" },
  { label: "Works with", href: "#works-with" },
];

/** The app hosts Rankoya's legal documents. */
export const LEGAL_LINKS = [
  { label: "Privacy policy", href: `${APP_URL}/privacy-policy` },
  { label: "Terms of service", href: `${APP_URL}/terms-of-service` },
  { label: "Refund policy", href: `${APP_URL}/refund-policy` },
] as const;
