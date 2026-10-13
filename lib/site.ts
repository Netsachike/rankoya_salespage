import type { LucideIcon } from "lucide-react";

import { AGENCIES_PAGE } from "@/content/agencies";
import { CONTACT_PAGE } from "@/content/contact";
import { FEATURE_PAGES, FEATURES_INDEX, featureHref } from "@/content/feature-pages";
import { PRICING_PAGE } from "@/content/pricing";

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

/**
 * One link. Internal hrefs are absolute (`/pricing`, `/#faq`) so they work
 * from every page, not just the home page.
 */
export type NavItem = { label: string; href: string; description?: string; icon?: LucideIcon };

export type NavMenu = {
  kind: "menu";
  /** Stable id for the trigger and panel elements. */
  id: string;
  label: string;
  items: NavItem[];
  /** The small row under the main items ("More in Rankoya" on RankYak). */
  more?: { title: string; items: NavItem[] };
};

export type NavEntry = NavMenu | ({ kind: "link" } & NavItem);

const FEATURE_ITEMS: NavItem[] = FEATURE_PAGES.map((page) => ({
  label: page.label,
  href: featureHref(page.slug),
  description: page.menuDescription,
  icon: page.icon,
}));

/**
 * The header, modelled on RankYak's (plan §8.2). A group only becomes a menu
 * once it has two or more live pages: Solutions is a plain "For agencies" link
 * until the other audience pages ship, and Resources waits for the blog, help
 * centre and tools.
 */
export const MAIN_NAV: NavEntry[] = [
  {
    kind: "menu",
    id: "features",
    label: "Features",
    items: FEATURE_ITEMS,
    more: {
      title: "More in Rankoya",
      items: [
        { label: "How it works", href: "/#how-it-works" },
        { label: "Integrations", href: "/#integrations" },
        { label: "White Label", href: "/for-agencies#white-label" },
        { label: "All features", href: "/features" },
      ],
    },
  },
  { kind: "link", label: "For agencies", href: "/for-agencies" },
  { kind: "link", label: "Pricing", href: "/pricing" },
  { kind: "link", label: "FAQ", href: "/#faq" },
];

export const LEGAL_LINKS: NavItem[] = [
  { label: "Privacy policy", href: `${APP_URL}/privacy-policy` },
  { label: "Terms of service", href: `${APP_URL}/terms-of-service` },
  { label: "Refund policy", href: `${APP_URL}/refund-policy` },
];

/** Footer columns, mirroring RankYak's. A column appears once it has two or more live links. */
export const FOOTER_COLUMNS: { title: string; links: NavItem[] }[] = [
  { title: "Product", links: [...FEATURE_ITEMS, { label: "Pricing", href: "/pricing" }] },
  {
    title: "Solutions",
    links: [
      { label: "For agencies", href: "/for-agencies" },
      { label: "White Label", href: "/for-agencies#white-label" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Integrations", href: "/#integrations" },
      { label: "FAQ", href: "/#faq" },
      { label: "llms.txt", href: "/llms.txt" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Log in", href: SIGN_IN_URL },
      { label: "Get started", href: SIGN_UP_URL },
    ],
  },
  { title: "Legal", links: LEGAL_LINKS },
];

/**
 * Every indexable page, for the sitemap and llms.txt. Add a page here when its
 * route ships.
 */
export const SITE_PAGES: { path: string; title: string; description: string; priority: number }[] = [
  { path: "/", title: SITE.title, description: SITE.description, priority: 1 },
  { path: "/pricing", title: "Pricing", description: PRICING_PAGE.metaDescription, priority: 0.9 },
  { path: "/features", title: FEATURES_INDEX.metaTitle, description: FEATURES_INDEX.metaDescription, priority: 0.8 },
  ...FEATURE_PAGES.map((page) => ({
    path: featureHref(page.slug),
    title: page.metaTitle,
    description: page.metaDescription,
    priority: 0.8,
  })),
  { path: "/for-agencies", title: AGENCIES_PAGE.metaTitle, description: AGENCIES_PAGE.metaDescription, priority: 0.8 },
  { path: "/contact", title: CONTACT_PAGE.metaTitle, description: CONTACT_PAGE.metaDescription, priority: 0.5 },
];
