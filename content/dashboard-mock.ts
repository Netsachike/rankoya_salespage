import type { PlatformId } from "@/content/platforms";

/**
 * Mock data for the product showcase. Uses the app's fictional entities
 * (PRODUCT.md): Northwind Roasters and its competitors. Not real customer data.
 */
export const MOCK_BRAND = { name: "Northwind Roasters", domain: "northwindroasters.com" };

export const MOCK_SCORE = { value: 72, delta: 4 };

export type MockPlatform = { id: PlatformId; share: number; delta: number; trend: number[] };

/** Share of visibility per platform, 30-day delta in points, and a 10-point trend for the sparkline. */
export const MOCK_PLATFORMS: MockPlatform[] = [
  { id: "google", share: 42, delta: 12, trend: [22, 24, 23, 27, 29, 28, 33, 36, 38, 42] },
  { id: "maps", share: 28, delta: 8, trend: [18, 19, 21, 20, 22, 24, 23, 25, 27, 28] },
  { id: "chatgpt", share: 18, delta: 6, trend: [9, 10, 12, 11, 13, 12, 14, 16, 17, 18] },
  { id: "claude", share: 12, delta: 5, trend: [6, 7, 6, 8, 9, 8, 10, 11, 11, 12] },
  { id: "gemini", share: 15, delta: 7, trend: [7, 8, 8, 9, 10, 12, 11, 13, 14, 15] },
  { id: "perplexity", share: 10, delta: 4, trend: [5, 6, 6, 7, 6, 8, 8, 9, 9, 10] },
];

/** Engine accent per platform: Tailwind classes resolve the token in both themes. */
export const ENGINE_STROKE: Partial<Record<PlatformId, string>> = {
  google: "text-engine-google",
  maps: "text-engine-maps",
  chatgpt: "text-engine-chatgpt",
  claude: "text-engine-claude",
  gemini: "text-engine-gemini",
  perplexity: "text-engine-perplexity",
};

export type MockCompetitor = {
  name: string;
  /** Share of voice before and after the showcase animation. */
  from: number;
  to: number;
  you?: boolean;
  color: string;
};

export const MOCK_COMPETITORS: MockCompetitor[] = [
  { name: "Northwind Roasters", from: 21, to: 34, you: true, color: "bg-chart-you" },
  { name: "Bluebird Coffee", from: 31, to: 29, color: "bg-chart-a" },
  { name: "Halfmoon Roastery", from: 26, to: 22, color: "bg-chart-b" },
  { name: "Ember & Oak", from: 22, to: 15, color: "bg-chart-c" },
];

export const MOCK_APPROVAL = {
  kicker: "Rankoya drafted an article",
  title: "How to brew pour-over coffee at home",
  meta: "1,480 words · Targets “pour over coffee guide” · WordPress",
  approve: "Approve",
  edit: "Edit",
};

export const MOCK_NAV = [
  "Overview",
  "AI visibility",
  "Rankings",
  "Competitors",
  "Site audit",
  "Action plan",
  "Content",
  "Ask Rankoya",
];
