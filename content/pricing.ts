/**
 * Pricing, mirroring the app. Names are the app's display labels
 * (`account.plans`: the `professional` key shows as Growth, `reseller` as
 * Enterprise). Feature lines are the app's own (`account.upgrade.features`,
 * `siteSetup.billing.plan`). Prices mirror the app's src/config/pricing.ts,
 * where every price is still `null`; fill them in here (USD) to turn the
 * amounts and the billing toggle on.
 */

export type BillingPeriod = "monthly" | "annually";

export type Plan = {
  id: "free" | "professional" | "agency";
  name: string;
  pitch: string;
  /** USD per month. `null` = not set yet; Free is always 0. */
  price: Record<BillingPeriod, number | null>;
  cta: string;
  highlighted?: boolean;
  included: string[];
  /** Shown struck-out on Free so the upgrade path is clear. */
  excluded?: string[];
};

export const PRICING_INTRO = {
  overline: "Pricing",
  title: "Start free. Upgrade when Rankoya starts doing the work.",
  lead: "Every plan measures your visibility. Paid plans add the agent that closes the gap.",
} as const;

export const PRICING_COPY = {
  pricePending: "Price coming soon",
  perMonth: "/month",
  billedAnnually: "billed annually",
  /** Not "Most popular": there are no customers to be popular with yet. */
  recommended: "Recommended",
  toggleLabel: "Billing period",
  periods: { monthly: "Monthly", annually: "Annually" } as Record<BillingPeriod, string>,
  togglePending: "Billing options arrive with pricing.",
  footnote: "Payments are handled securely by Paddle.",
} as const;

export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    pitch: "See where you stand on Google and in AI answers.",
    price: { monthly: 0, annually: 0 },
    cta: "Start free",
    included: ["AI visibility and Google rankings tracking"],
    excluded: ["Keyword research", "Content plan", "Article writing"],
  },
  {
    id: "professional",
    name: "Growth",
    pitch: "For one brand that wants the gap closed, not just measured.",
    price: { monthly: null, annually: null },
    cta: "Get started",
    highlighted: true,
    included: [
      "AI visibility in ChatGPT, Claude, Gemini, Perplexity and AI Overviews",
      "Google rankings by keyword and device",
      "Competitor share of voice",
      "Site audit with approved fixes",
      "Articles drafted by Rankoya, published after you approve",
      "Approvals on Telegram",
    ],
  },
  {
    id: "agency",
    name: "Agency",
    pitch: "For teams running several brands and reporting to clients.",
    price: { monthly: null, annually: null },
    cta: "Get started",
    included: [
      "Everything in Growth",
      "Team collaboration",
      "Several brands per workspace",
      "Client-ready reports",
      "Agency resource kit",
      "Autopilot modes",
    ],
  },
];

/** Resellers: the Enterprise plan plus one-time White Label licences (src/config/pricing.ts). */
export const RESELLER = {
  overline: "Enterprise and White Label",
  title: "Sell Rankoya under your own brand.",
  body: "Your domain, logo and colours, your own pricing, and support handled behind your brand. Enterprise adds a reseller console with unlimited workspaces and team members.",
  tiers: [
    { name: "Starter", licences: "100 client licences" },
    { name: "Pro", licences: "300 client licences" },
    { name: "Unlimited", licences: "Unlimited client licences" },
  ],
  licenceNote: "One-time licence",
  cta: "Talk to us",
} as const;
