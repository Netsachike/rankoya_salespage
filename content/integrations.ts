import type { PlatformId } from "@/content/platforms";

/**
 * Integrations grouped as the app's catalog groups them. Descriptions are the
 * app's own (src/messages/en.json → integrations.providers), so the page never
 * promises more than the product does.
 */

export type IntegrationItem = { id: PlatformId; description: string };

export type IntegrationGroup = {
  title: string;
  body: string;
  items: IntegrationItem[];
  /** Compact groups render as a row of tiles without per-item descriptions. */
  compact?: boolean;
};

export const INTEGRATIONS_INTRO = {
  overline: "Integrations",
  title: "Connects to the tools you already use.",
  lead: "Read-only access to your data, publishing only after approval, and approvals from your phone.",
} as const;

export const INTEGRATION_GROUPS: IntegrationGroup[] = [
  {
    title: "Publishing",
    body: "Where Rankoya publishes the work you approve.",
    items: [
      { id: "wordpress", description: "Approved articles and on-page fixes." },
      { id: "shopify", description: "Approved articles to your store's blog." },
      { id: "webflow", description: "Approved articles to a CMS collection." },
      { id: "wix", description: "Approved articles to your Wix blog." },
      { id: "ghost", description: "Approved articles to your Ghost site." },
    ],
  },
  {
    title: "Data",
    body: "Read-only Google sign-in. Revoke it any time in your Google account.",
    items: [
      { id: "searchConsole", description: "Real clicks and impressions, so rankings come from Google's own data." },
      { id: "analytics", description: "Traffic and conversions from AI answers and search, by page." },
    ],
  },
  {
    title: "Approvals",
    body: "Your agent, on your phone.",
    items: [{ id: "telegram", description: "Get updates, approve changes and ask questions from your phone." }],
  },
  {
    title: "Search and AI engines tracked",
    body: "Where Rankoya measures your visibility, every week.",
    compact: true,
    items: [
      { id: "google", description: "" },
      { id: "maps", description: "" },
      { id: "chatgpt", description: "" },
      { id: "claude", description: "" },
      { id: "gemini", description: "" },
      { id: "perplexity", description: "" },
    ],
  },
];
