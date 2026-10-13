import type { FaqItem } from "@/content/faq";
import type { FeatureSlug } from "@/content/feature-pages";
import type { PlatformId } from "@/content/platforms";

/**
 * /integrations/[slug]. Every line comes from the app's integration catalog
 * and its connect flows (src/messages/en.json → integrations): the access each
 * one needs, the data Rankoya uses, the control you keep, the fields to fill
 * in and what happens on disconnect. Don't add a provider the app lacks.
 */

export type IntegrationSlug =
  "wordpress" | "shopify" | "webflow" | "wix" | "ghost" | "google-search-console" | "google-analytics" | "telegram";

export type IntegrationCategory = "Publishing" | "Data" | "Approvals";

export type IntegrationPage = {
  slug: IntegrationSlug;
  platform: PlatformId;
  name: string;
  category: IntegrationCategory;
  /** The app's one-line description. */
  summary: string;
  metaDescription: string;
  /** What Rankoya does with the connection. */
  uses: string[];
  facts: { access: string; data: string; control: string };
  steps: string[];
  disconnect: string;
  faqs: FaqItem[];
  features: FeatureSlug[];
};

const APPROVAL_FAQ: FaqItem = {
  question: "Can Rankoya publish without my approval?",
  answer:
    "Not on the default mode, Ask me first: every article and change waits for your approval. You can switch to Auto-publish content, where articles go live on schedule, in Rankoya's settings.",
};

export const INTEGRATION_PAGES: IntegrationPage[] = [
  {
    slug: "wordpress",
    platform: "wordpress",
    name: "WordPress",
    category: "Publishing",
    summary: "Rankoya publishes approved articles and on-page fixes to your site.",
    metaDescription:
      "Connect WordPress with an application password and Rankoya publishes the articles and on-page fixes you approve, including titles and meta descriptions.",
    uses: [
      "Publishes the articles you approve, on the date you schedule",
      "Applies approved on-page fixes, such as titles and meta descriptions",
      "Tells you when each article or fix is live",
    ],
    facts: {
      access: "An application password",
      data: "Posts, pages and SEO fields",
      control: "Every change needs approval",
    },
    steps: [
      "In WordPress, go to Users → Profile → Application passwords and create a new one for Rankoya.",
      "In Rankoya, open Integrations, choose WordPress and enter your site address, your WordPress username and the application password.",
      "Use Test connection to check that Rankoya can reach your site.",
    ],
    disconnect: "Rankoya can no longer publish to your site. Scheduled articles stay as drafts.",
    faqs: [
      APPROVAL_FAQ,
      {
        question: "Why an application password and not my login?",
        answer:
          "Application passwords are WordPress's own way to give a tool access without sharing your account password. You can revoke Rankoya's at any time from your WordPress profile, or update it from Rankoya.",
      },
    ],
    features: ["content", "site-audit", "seo-agent"],
  },
  {
    slug: "shopify",
    platform: "shopify",
    name: "Shopify",
    category: "Publishing",
    summary: "Rankoya publishes approved articles to your store's blog.",
    metaDescription:
      "Connect Shopify with an Admin API access token and Rankoya publishes the articles you approve to your store's blog.",
    uses: ["Publishes the articles you approve to your store's blog", "Tells you when each article is live"],
    facts: {
      access: "An Admin API access token",
      data: "Blog articles",
      control: "Every change needs approval",
    },
    steps: [
      "In your Shopify admin, create an Admin API access token for Rankoya.",
      "In Rankoya, open Integrations, choose Shopify and enter your store domain and the access token.",
      "Approve an article and schedule it. Rankoya publishes it to your blog on that date.",
    ],
    disconnect: "Rankoya can no longer publish to your store.",
    faqs: [
      APPROVAL_FAQ,
      {
        question: "Can Rankoya edit my product pages?",
        answer:
          "Not today. On Shopify, Rankoya publishes blog articles. On-page fixes such as titles and meta descriptions are applied on WordPress.",
      },
    ],
    features: ["content", "competitors", "rank-tracking"],
  },
  {
    slug: "webflow",
    platform: "webflow",
    name: "Webflow",
    category: "Publishing",
    summary: "Rankoya publishes approved articles to a Webflow CMS collection.",
    metaDescription:
      "Connect Webflow with a site API token and Rankoya publishes the articles you approve to the CMS collection you choose.",
    uses: ["Publishes the articles you approve to one CMS collection", "Tells you when each article is live"],
    facts: {
      access: "A site API token",
      data: "One CMS collection",
      control: "Every change needs approval",
    },
    steps: [
      "In Webflow, create a site API token for Rankoya.",
      "Find the ID of the CMS collection your articles belong in, such as your blog posts collection.",
      "In Rankoya, open Integrations, choose Webflow and enter the token and the collection ID.",
    ],
    disconnect: "Rankoya can no longer publish to your Webflow site.",
    faqs: [
      APPROVAL_FAQ,
      {
        question: "Does Rankoya change anything else on my Webflow site?",
        answer: "No. It only works with the one CMS collection you give it.",
      },
    ],
    features: ["content", "ai-visibility", "seo-agent"],
  },
  {
    slug: "wix",
    platform: "wix",
    name: "Wix",
    category: "Publishing",
    summary: "Rankoya publishes approved articles to your Wix blog.",
    metaDescription: "Connect Wix with an API key and Rankoya publishes the articles you approve to your Wix blog.",
    uses: ["Publishes the articles you approve to your Wix blog", "Tells you when each article is live"],
    facts: {
      access: "A Wix API key",
      data: "Blog posts",
      control: "Every change needs approval",
    },
    steps: [
      "In Wix, create an API key for Rankoya and note your Wix site ID.",
      "In Rankoya, open Integrations, choose Wix and enter the API key and site ID.",
      "Approve an article and schedule it. Rankoya publishes it to your blog on that date.",
    ],
    disconnect: "Rankoya can no longer publish to your Wix site.",
    faqs: [
      APPROVAL_FAQ,
      {
        question: "Do I need the Wix Blog app?",
        answer: "Yes. Rankoya publishes blog posts, so your site needs a Wix blog for them to go into.",
      },
    ],
    features: ["content", "rank-tracking", "ai-visibility"],
  },
  {
    slug: "ghost",
    platform: "ghost",
    name: "Ghost",
    category: "Publishing",
    summary: "Rankoya publishes approved articles to your Ghost site.",
    metaDescription:
      "Connect Ghost with an Admin API key and Rankoya publishes the articles you approve to your Ghost site.",
    uses: ["Publishes the articles you approve as Ghost posts", "Tells you when each article is live"],
    facts: {
      access: "An Admin API key",
      data: "Posts",
      control: "Every change needs approval",
    },
    steps: [
      "In Ghost Admin, add a custom integration for Rankoya and copy its Admin API key.",
      "In Rankoya, open Integrations, choose Ghost and enter your site URL and the Admin API key.",
      "Approve an article and schedule it. Rankoya publishes it on that date.",
    ],
    disconnect: "Rankoya can no longer publish to your Ghost site.",
    faqs: [
      APPROVAL_FAQ,
      {
        question: "Can I remove Rankoya's access later?",
        answer: "Yes. Delete the custom integration in Ghost Admin, or disconnect Ghost in Rankoya.",
      },
    ],
    features: ["content", "ai-visibility", "seo-agent"],
  },
  {
    slug: "google-search-console",
    platform: "searchConsole",
    name: "Google Search Console",
    category: "Data",
    summary: "Real clicks and impressions, so rankings come from Google's own data.",
    metaDescription:
      "Connect Google Search Console with read-only access so Rankoya's rankings and keyword research use your real queries, clicks and impressions.",
    uses: [
      "Shows real clicks and impressions next to your rankings",
      "Sharpens keyword research with the searches you already appear for",
      "Lets you pull fresh data at any time with Sync now",
    ],
    facts: {
      access: "Read-only Google sign-in",
      data: "Queries, clicks, impressions",
      control: "Revoke in your Google account",
    },
    steps: [
      "In Rankoya, open Integrations and choose Google Search Console, or connect it while setting up your site.",
      "Sign in with Google in the window that opens. Rankoya asks for read-only access and never posts on your behalf.",
      "Pick the Search Console property that belongs to this brand.",
    ],
    disconnect: "Rankings go back to Rankoya's own checks until you reconnect.",
    faqs: [
      {
        question: "Can Rankoya change anything in Search Console?",
        answer:
          "No. Access is read-only, and you can revoke it at any time from your Google account or by disconnecting in Rankoya.",
      },
      {
        question: "Do I need Search Console to use Rankoya?",
        answer:
          "No. Rankoya checks your Google positions itself every day. Search Console adds real clicks and impressions and makes keyword research sharper.",
      },
    ],
    features: ["rank-tracking", "content", "competitors"],
  },
  {
    slug: "google-analytics",
    platform: "analytics",
    name: "Google Analytics",
    category: "Data",
    summary: "Traffic and conversions from AI answers and search, by page.",
    metaDescription:
      "Connect Google Analytics with read-only access to see the traffic and conversions your pages get from search and AI answers.",
    uses: ["Shows sessions and conversions from search and AI answers, by page", "Keeps traffic reports up to date"],
    facts: {
      access: "Read-only Google sign-in",
      data: "Sessions and conversions",
      control: "Revoke in your Google account",
    },
    steps: [
      "In Rankoya, open Integrations and choose Google Analytics.",
      "Sign in with Google in the window that opens. Rankoya asks for read-only access.",
      "Pick the Analytics property that belongs to this brand.",
    ],
    disconnect: "Traffic reports stop updating until you reconnect.",
    faqs: [
      {
        question: "Can Rankoya change my Analytics setup?",
        answer: "No. Access is read-only. Rankoya reads sessions and conversions and nothing else.",
      },
      {
        question: "Can I connect more than one property?",
        answer: "Each brand connects the property that belongs to it, so an agency can connect one per client brand.",
      },
    ],
    features: ["ai-visibility", "rank-tracking", "content"],
  },
  {
    slug: "telegram",
    platform: "telegram",
    name: "Telegram",
    category: "Approvals",
    summary: "Get updates, approve changes and ask questions from your phone.",
    metaDescription:
      "Connect Telegram to approve Rankoya's changes, get updates and ask the agent questions from your phone, in the same conversation as the app.",
    uses: [
      "Sends updates when work is ready or live",
      "Lets you approve, edit or reject changes from your phone",
      "Continues the same conversation you have with the agent in the app",
    ],
    facts: {
      access: "A chat with the Rankoya bot",
      data: "Messages you send Rankoya",
      control: "Stop the bot any time",
    },
    steps: [
      "In Rankoya, open Integrations and choose Telegram.",
      "Scan the QR code with your phone, or open the chat directly.",
      "Press Start in the chat with Rankoya, then go back to Rankoya and confirm.",
    ],
    disconnect: "Rankoya stops messaging you. Approvals are only possible in the web app.",
    faqs: [
      {
        question: "Is it the same agent as in the app?",
        answer: "Yes. Telegram continues the same conversation, with the same approval cards.",
      },
      {
        question: "How do I stop the messages?",
        answer:
          "Stop the bot in Telegram, or disconnect Telegram in Rankoya. You can still approve everything in the app.",
      },
    ],
    features: ["seo-agent", "content", "site-audit"],
  },
];

export const INTEGRATION_SLUGS = INTEGRATION_PAGES.map((page) => page.slug);

export function getIntegrationPage(slug: string) {
  return INTEGRATION_PAGES.find((page) => page.slug === slug);
}

export const integrationHref = (slug: IntegrationSlug) => `/integrations/${slug}` as const;

export const INTEGRATIONS_PAGE = {
  metaTitle: "Integrations",
  metaDescription:
    "Rankoya publishes to WordPress, Shopify, Webflow, Wix and Ghost, reads Google Search Console and Analytics with read-only access, and takes approvals on Telegram.",
  overline: "Integrations",
  title: "Connects to the tools you already use.",
  lead: "Publishing only after you approve, read-only access to your Google data, and approvals from your phone.",
  categories: {
    Publishing: "Where Rankoya publishes the work you approve.",
    Data: "Google's own data, with read-only access.",
    Approvals: "Approve work and talk to Rankoya away from your desk.",
  } satisfies Record<IntegrationCategory, string>,
  enginesTitle: "Search and AI engines tracked",
  enginesBody: "Where Rankoya measures your visibility. Nothing to connect: add your questions and keywords.",
  factsTitle: "At a glance",
  factLabels: { access: "Access", data: "What Rankoya uses", control: "Control" },
  usesTitle: "What Rankoya does with it",
  stepsTitle: "How to connect",
  disconnectTitle: "If you disconnect",
  featuresTitle: "Used by",
} as const;
