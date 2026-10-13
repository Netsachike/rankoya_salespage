import type { MDXContent } from "mdx/types";

/**
 * Help centre registry ("How every feature works"). Articles describe the
 * app's real flows, from its own copy (site setup, integrations, autopilot,
 * audit, content). Body text is the matching .mdx file.
 */

export type HelpCategory = "Getting started" | "Measuring" | "Doing the work" | "Account";

export type HelpArticle = {
  slug: string;
  title: string;
  description: string;
  category: HelpCategory;
  load: () => Promise<{ default: MDXContent }>;
};

export const HELP_CATEGORIES: HelpCategory[] = ["Getting started", "Measuring", "Doing the work", "Account"];

export const HELP_ARTICLES: HelpArticle[] = [
  {
    slug: "set-up-your-site",
    title: "Set up your first site",
    description:
      "Add your website, check what Rankoya learned about it, pick your core topics and choose how Rankoya works.",
    category: "Getting started",
    load: () => import("./set-up-your-site.mdx"),
  },
  {
    slug: "connect-your-tools",
    title: "Connect your website and Google data",
    description: "Where Rankoya publishes, what Search Console and Analytics add, and approvals on Telegram.",
    category: "Getting started",
    load: () => import("./connect-your-tools.mdx"),
  },
  {
    slug: "track-ai-visibility",
    title: "Track your AI visibility",
    description: "Add the questions customers ask, choose the engines Rankoya checks and read the results.",
    category: "Measuring",
    load: () => import("./track-ai-visibility.mdx"),
  },
  {
    slug: "track-keywords-and-competitors",
    title: "Track keywords and competitors",
    description: "Daily Google positions for your keywords, and how you compare with up to five competitors.",
    category: "Measuring",
    load: () => import("./track-keywords-and-competitors.mdx"),
  },
  {
    slug: "run-a-site-audit",
    title: "Run a site audit and approve fixes",
    description: "Read your SEO health and AI readiness scores, and let Rankoya apply the fixes it can make.",
    category: "Measuring",
    load: () => import("./run-a-site-audit.mdx"),
  },
  {
    slug: "approvals-and-autopilot",
    title: "Approvals and autopilot modes",
    description: "How approval cards work, and what Ask me first, Auto-publish content and Full autopilot each do.",
    category: "Doing the work",
    load: () => import("./approvals-and-autopilot.mdx"),
  },
  {
    slug: "content-plan-and-articles",
    title: "Your content plan and articles",
    description: "How Rankoya plans the month, what each draft includes and how articles get published.",
    category: "Doing the work",
    load: () => import("./content-plan-and-articles.mdx"),
  },
  {
    slug: "plans-and-billing",
    title: "Plans, billing and cancelling",
    description: "What each plan includes, how payment works and what happens when you cancel.",
    category: "Account",
    load: () => import("./plans-and-billing.mdx"),
  },
];

export function getHelpArticle(slug: string) {
  return HELP_ARTICLES.find((article) => article.slug === slug);
}

export const helpHref = (slug: string) => `/help/${slug}`;

export const HELP_PAGE = {
  metaTitle: "Help centre",
  metaDescription:
    "How every Rankoya feature works: setting up a site, tracking AI visibility and rankings, approvals, content and billing.",
  overline: "Help centre",
  title: "How every feature works.",
  lead: "Short guides to setting up Rankoya, reading what it measures and approving the work it does.",
  contactPrompt: "Can't find what you need?",
  contactLink: "Contact us",
} as const;
