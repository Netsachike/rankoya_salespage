import type { LucideIcon } from "lucide-react";
import { History, LifeBuoy, Newspaper, Plug, Ruler } from "lucide-react";

import { HAS_CHANGELOG } from "@/content/changelog";
import { FEATURE_PAGES, featureHref } from "@/content/feature-pages";
import { INTEGRATION_PAGES, integrationHref } from "@/content/integration-pages";
import { AGENCIES_NAV_ITEM, SOLUTION_PAGES, solutionHref } from "@/content/solution-pages";

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

const SOLUTION_ITEMS: NavItem[] = [
  AGENCIES_NAV_ITEM,
  ...SOLUTION_PAGES.map((page) => ({
    label: page.label,
    href: solutionHref(page.slug),
    description: page.menuDescription,
    icon: page.icon,
  })),
];

const INTEGRATION_ITEMS: NavItem[] = INTEGRATION_PAGES.map((page) => ({
  label: page.name,
  href: integrationHref(page.slug),
}));

/** The changelog joins menus, the sitemap and llms.txt once it has a live entry. */
const CHANGELOG_ITEM: NavItem[] = HAS_CHANGELOG
  ? [{ label: "What's new", href: "/changelog", description: "Every update, dated and explained", icon: History }]
  : [];

/**
 * The header, modelled on RankYak's (plan §8.2): Features, Solutions and
 * Resources menus, then Pricing. A group is only a menu once it has two or
 * more live pages, so nothing here points at a page that doesn't exist.
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
        { label: "Integrations", href: "/integrations" },
        { label: "White Label", href: "/for-agencies#white-label" },
        { label: "All features", href: "/features" },
      ],
    },
  },
  {
    kind: "menu",
    id: "solutions",
    label: "Solutions",
    items: SOLUTION_ITEMS,
    more: {
      title: "Resellers",
      items: [
        { label: "White Label", href: "/for-agencies#white-label" },
        { label: "Enterprise", href: "/pricing" },
      ],
    },
  },
  {
    kind: "menu",
    id: "resources",
    label: "Resources",
    items: [
      { label: "Help centre", href: "/help", description: "How every feature works", icon: LifeBuoy },
      { label: "Blog", href: "/blog", description: "SEO and AI search, explained", icon: Newspaper },
      { label: "Integrations", href: "/integrations", description: "Where Rankoya publishes and measures", icon: Plug },
      { label: "Methodology", href: "/methodology", description: "How every number is measured", icon: Ruler },
      ...CHANGELOG_ITEM,
    ],
    more: {
      title: "Company",
      items: [
        { label: "About", href: "/about" },
        { label: "Brand assets", href: "/brand" },
        { label: "Contact", href: "/contact" },
      ],
    },
  },
  { kind: "link", label: "Pricing", href: "/pricing" },
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
    links: [...SOLUTION_ITEMS, { label: "White Label", href: "/for-agencies#white-label" }],
  },
  {
    title: "Integrations",
    links: [...INTEGRATION_ITEMS, { label: "All integrations", href: "/integrations" }],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Help centre", href: "/help" },
      { label: "Methodology", href: "/methodology" },
      ...CHANGELOG_ITEM,
      { label: "FAQ", href: "/#faq" },
      { label: "llms.txt", href: "/llms.txt" },
      { label: "llms-full.txt", href: "/llms-full.txt" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Editorial policy", href: "/editorial-policy" },
      { label: "Brand assets", href: "/brand" },
      { label: "Contact", href: "/contact" },
      { label: "Log in", href: SIGN_IN_URL },
      { label: "Get started", href: SIGN_UP_URL },
    ],
  },
  { title: "Legal", links: LEGAL_LINKS },
];
