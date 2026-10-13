import type { LucideIcon } from "lucide-react";
import { AppWindow, Building2, MapPin, ShoppingBag, Sprout } from "lucide-react";

import type { FaqItem } from "@/content/faq";
import type { FeatureSlug } from "@/content/feature-pages";
import type { IntegrationSlug } from "@/content/integration-pages";

/**
 * The /for-… audience pages other than agencies (which has its own richer
 * page). Same rule as the feature pages: only what the app does, framed for
 * one audience. The growth timeline quotes the app's own estimate copy
 * (siteSetup.billing.phases) with its caveat.
 */

export type SolutionSlug = "local-businesses" | "ecommerce" | "saas" | "startups";

export type SolutionPage = {
  slug: SolutionSlug;
  label: string;
  menuDescription: string;
  icon: LucideIcon;
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  challengesTitle: string;
  challenges: { title: string; body: string }[];
  helpsTitle: string;
  helps: { feature: FeatureSlug; title: string; body: string }[];
  integrations: IntegrationSlug[];
  faqs: FaqItem[];
};

export const SOLUTION_PAGES: SolutionPage[] = [
  {
    slug: "local-businesses",
    label: "For local businesses",
    menuDescription: "Show up when people nearby ask",
    icon: MapPin,
    metaTitle: "Rankoya for local businesses",
    metaDescription:
      "Track your visibility in Google Search, Google Maps and AI answers, and let Rankoya draft the pages and fixes that bring nearby customers in. You approve every change.",
    title: "Show up when people nearby ask.",
    lead: "Rankoya tracks where you appear in Google Search, Google Maps and AI answers, then drafts the articles and fixes that close the gap. You approve each one from your desk or your phone.",
    challengesTitle: "Where local customers look now",
    challenges: [
      {
        title: "They ask an assistant",
        body: "“Who's a good dentist near me?” now goes to ChatGPT and Gemini as well as Google. If the answer names someone else, you never hear about it.",
      },
      {
        title: "Rankings move weekly",
        body: "Search and Maps results shift as competitors update their pages. Checking by hand doesn't scale past a few searches.",
      },
      {
        title: "No time for content",
        body: "Running the business comes first. Writing articles and fixing page titles keeps sliding down the list.",
      },
    ],
    helpsTitle: "How Rankoya helps",
    helps: [
      {
        feature: "ai-visibility",
        title: "Know if AI answers name you",
        body: "Track the questions locals ask and see which engines mention you, and who they mention instead.",
      },
      {
        feature: "rank-tracking",
        title: "Search and Maps, every day",
        body: "Daily Google positions on desktop and mobile, with Google Maps measured alongside.",
      },
      {
        feature: "content",
        title: "Articles drafted for you",
        body: "A monthly plan from your core topics, drafted in your voice and published after you approve.",
      },
      {
        feature: "seo-agent",
        title: "Approve from your phone",
        body: "Approve, edit or reject each change on Telegram between appointments.",
      },
    ],
    integrations: ["wordpress", "wix", "google-search-console", "telegram"],
    faqs: [
      {
        question: "Do I need a marketing team to use Rankoya?",
        answer:
          "No. Rankoya drafts the articles and fixes; you read and approve them, in the app or on Telegram. Nothing goes live without your approval on the default mode.",
      },
      {
        question: "Does Rankoya track Google Maps?",
        answer:
          "Yes. Google Maps is one of the places Rankoya measures your visibility, alongside Google Search, ChatGPT, Claude, Gemini, Perplexity and Google AI Overviews.",
      },
      {
        question: "What if my website isn't on a supported platform?",
        answer:
          "You can skip connecting a platform and copy finished articles over by hand. Rankoya publishes directly to WordPress, Shopify, Webflow, Wix and Ghost.",
      },
    ],
  },
  {
    slug: "ecommerce",
    label: "For ecommerce",
    menuDescription: "Be the store AI answers recommend",
    icon: ShoppingBag,
    metaTitle: "Rankoya for ecommerce stores",
    metaDescription:
      "See whether AI assistants recommend your store, track your category searches in Google and publish articles that win them to your Shopify blog after you approve.",
    title: "Be the store AI answers recommend.",
    lead: "Shoppers ask ChatGPT and Perplexity where to buy. Rankoya shows whether your store is named, which competitors are named instead and which searches you're close to winning, then drafts the articles that close the gap.",
    challengesTitle: "Where stores lose the sale",
    challenges: [
      {
        title: "The answer names a competitor",
        body: "When an assistant recommends three stores and yours isn't one, the shopper never reaches your site.",
      },
      {
        title: "Category searches are crowded",
        body: "Competitors publish buying guides and comparisons for the searches you sell into.",
      },
      {
        title: "Thin titles and descriptions",
        body: "Missing or duplicate meta descriptions cost clicks you've already earned a ranking for.",
      },
    ],
    helpsTitle: "How Rankoya helps",
    helps: [
      {
        feature: "competitors",
        title: "See who gets recommended",
        body: "Share of voice against up to five competitor stores, and the questions they win that you don't.",
      },
      {
        feature: "content",
        title: "Guides that win category searches",
        body: "Topics planned from keywords near page one, drafted and published to your store's blog after you approve.",
      },
      {
        feature: "rank-tracking",
        title: "Track every category",
        body: "Daily positions for the searches you sell into, with real clicks once Search Console is connected.",
      },
      {
        feature: "site-audit",
        title: "Fix what costs clicks",
        body: "An audit of titles, meta descriptions and AI readiness, with the fixes Rankoya can make ready to approve.",
      },
    ],
    integrations: ["shopify", "wordpress", "google-search-console", "google-analytics"],
    faqs: [
      {
        question: "Does Rankoya publish to Shopify?",
        answer:
          "Yes. It publishes approved articles to your store's blog, using an Admin API access token you create in Shopify.",
      },
      {
        question: "Can Rankoya edit my product pages?",
        answer:
          "Not today. On Shopify, Rankoya publishes blog articles. On-page fixes such as titles and meta descriptions are applied on WordPress.",
      },
      {
        question: "Can I see which competitors AI assistants recommend?",
        answer:
          "Yes. Add up to five competitors and Rankoya compares your share of voice in each AI engine, and lists the questions where they're named and you aren't.",
      },
    ],
  },
  {
    slug: "saas",
    label: "For SaaS",
    menuDescription: "Be the tool AI answers recommend",
    icon: AppWindow,
    metaTitle: "Rankoya for SaaS companies",
    metaDescription:
      "Find out whether ChatGPT, Claude, Gemini and Perplexity recommend your product when buyers ask which tool to use, and close the gap with content you approve.",
    title: "Be the tool AI answers recommend.",
    lead: "Buyers ask AI assistants which tool to use before they ever search. Rankoya shows whether you're named, who is named instead and which sources the engines cite, then drafts the content that closes the gap.",
    challengesTitle: "Where software gets chosen now",
    challenges: [
      {
        title: "The shortlist happens in a chat",
        body: "“What's the best tool for…” is a question for ChatGPT and Perplexity now. The answer is the shortlist.",
      },
      {
        title: "Engines cite someone else's page",
        body: "AI answers lean on review sites, comparisons and guides. If none of them mention you, neither does the answer.",
      },
      {
        title: "Content competes with shipping",
        body: "Every week spent on articles is a week not spent on the product.",
      },
    ],
    helpsTitle: "How Rankoya helps",
    helps: [
      {
        feature: "ai-visibility",
        title: "Track the buying questions",
        body: "Add the questions buyers ask and see, per engine, whether you're named and in what position.",
      },
      {
        feature: "competitors",
        title: "Know who's on the shortlist",
        body: "The questions competitors win and you don't, and the sites that cite them.",
      },
      {
        feature: "content",
        title: "Content from the gaps",
        body: "Topics picked from the questions you miss, drafted with sources and internal links, published after you approve.",
      },
      {
        feature: "seo-agent",
        title: "Ask why, get a fix",
        body: "Ask the agent why a page dropped and approve the change it proposes.",
      },
    ],
    integrations: ["webflow", "wordpress", "ghost", "google-search-console", "google-analytics"],
    faqs: [
      {
        question: "Can I track comparison questions like “best tool for…”?",
        answer:
          "Yes. You choose the questions Rankoya tracks, so you can add the buying and comparison questions your customers ask.",
      },
      {
        question: "Which site builders does Rankoya publish to?",
        answer:
          "Webflow (one CMS collection), WordPress, Ghost, Shopify and Wix. Without a connected platform you can copy finished articles over by hand.",
      },
      {
        question: "Does Rankoya get us onto review sites?",
        answer:
          "No. It shows which sites cite your competitors and drafts the outreach pitch for each one. Earning the mention is up to you.",
      },
    ],
  },
  {
    slug: "startups",
    label: "For startups",
    menuDescription: "Grow search traffic before you hire for it",
    icon: Sprout,
    metaTitle: "Rankoya for startups",
    metaDescription:
      "Rankoya researches your keywords, plans a month of articles, drafts them and publishes after you approve, so search traffic grows before you hire a marketer.",
    title: "Grow search traffic before you hire for it.",
    lead: "Rankoya researches your keywords, plans a month of articles, drafts each one and publishes it after you approve. You review the work instead of doing it from scratch.",
    challengesTitle: "Why SEO waits at most startups",
    challenges: [
      {
        title: "No one owns it yet",
        body: "Search is everyone's second job until the first marketing hire, and that hire is months away.",
      },
      {
        title: "It compounds slowly",
        body: "Articles take months to rank, so starting late costs more than starting small.",
      },
      {
        title: "AI answers set first impressions",
        body: "Early customers ask assistants about your category. You want to be in those answers from the start.",
      },
    ],
    helpsTitle: "How Rankoya helps",
    helps: [
      {
        feature: "content",
        title: "A plan and the drafts",
        body: "Keyword research across your five core topics, a monthly content plan and the articles themselves.",
      },
      {
        feature: "seo-agent",
        title: "You approve, Rankoya publishes",
        body: "Choose Ask me first or Auto-publish content, and change it any time.",
      },
      {
        feature: "ai-visibility",
        title: "AI visibility from day one",
        body: "Track whether assistants name you for the questions that matter, from your first scan.",
      },
      {
        feature: "site-audit",
        title: "A clean technical base",
        body: "Find and fix the issues holding your pages back before you scale content.",
      },
    ],
    integrations: ["webflow", "wordpress", "ghost", "google-search-console", "telegram"],
    faqs: [
      {
        question: "How long until we see results?",
        answer:
          "Rankoya's own estimate: in months 1–3 your first articles publish and get indexed; in months 3–6 they start ranking for long-tail searches and AI answers begin to mention you; in months 6–12 harder keywords come within reach. Real results depend on your site, your competition and how often you publish.",
      },
      {
        question: "Is there a free plan?",
        answer:
          "Yes. The Free plan tracks your AI visibility and Google rankings. Keyword research, the content plan and article writing come with the paid plans.",
      },
      {
        question: "How much time does it take each week?",
        answer:
          "As much as you give it. On Ask me first you read and approve each draft; on Auto-publish content articles go live on schedule and you only review site changes.",
      },
    ],
  },
];

export const SOLUTION_SLUGS = SOLUTION_PAGES.map((page) => page.slug);

export const solutionHref = (slug: SolutionSlug) => `/for-${slug}` as const;

export function getSolutionPage(slug: SolutionSlug) {
  const page = SOLUTION_PAGES.find((item) => item.slug === slug);
  if (!page) throw new Error(`Unknown solution page: ${slug}`);
  return page;
}

/** The agencies entry for menus, so Solutions lists all five audiences. */
export const AGENCIES_NAV_ITEM = {
  label: "For agencies",
  href: "/for-agencies",
  description: "Every client site, one workspace",
  icon: Building2,
} as const;

export const SOLUTION_PAGE_COPY = {
  integrationsTitle: "Works with",
  faqTitle: "Common questions",
} as const;
