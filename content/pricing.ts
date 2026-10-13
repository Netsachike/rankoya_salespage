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
  id: "free" | "professional" | "agency" | "reseller";
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
  compareAll: "Compare all plans",
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

/** Enterprise (`reseller` key): on /pricing and /for-agencies, not in the home page's three cards. */
export const ENTERPRISE_PLAN: Plan = {
  id: "reseller",
  name: "Enterprise",
  pitch: "For partners who resell Rankoya under their own brand.",
  price: { monthly: null, annually: null },
  cta: "Get started",
  included: [
    "Everything in Agency",
    "Reseller console",
    "Create and manage reseller accounts",
    "Unlimited workspaces",
    "Unlimited team members",
    "Dedicated partner support",
  ],
};

/** White Label licence features, from the app's White Label tab (`account.upgrade.features.wl*`). */
export const WHITE_LABEL_FEATURES = [
  "Sell to your own customers under your brand",
  "Set your own monthly, yearly or one-time pricing",
  "Your domain, logo and colours",
  "Partner dashboard",
  "Sales kit included",
  "Support handled behind your brand",
] as const;

type PlanColumn = Plan["id"];

/**
 * Full plan comparison for /pricing. Rows follow the app's plan cards
 * (upgrade-view.tsx) and the site-setup billing list: Free tracks visibility
 * and rankings; keyword research, the content plan and writing are paid.
 */
export const COMPARISON = {
  title: "Compare every plan",
  caption: "What each plan includes",
  columns: ["free", "professional", "agency", "reseller"] as PlanColumn[],
  groups: [
    {
      title: "Measure",
      rows: [
        {
          label: "AI visibility in ChatGPT, Claude, Gemini, Perplexity and AI Overviews",
          in: ["free", "professional", "agency", "reseller"],
        },
        { label: "Google rankings by keyword and device", in: ["free", "professional", "agency", "reseller"] },
        { label: "Competitor share of voice", in: ["professional", "agency", "reseller"] },
        { label: "Site audit with approved fixes", in: ["professional", "agency", "reseller"] },
      ],
    },
    {
      title: "Grow",
      rows: [
        { label: "Keyword research across your core topics", in: ["professional", "agency", "reseller"] },
        { label: "Monthly content plan", in: ["professional", "agency", "reseller"] },
        {
          label: "Articles drafted by Rankoya, published after you approve",
          in: ["professional", "agency", "reseller"],
        },
        { label: "Approvals on Telegram", in: ["professional", "agency", "reseller"] },
      ],
    },
    {
      title: "Teams and clients",
      rows: [
        { label: "Team collaboration", in: ["agency", "reseller"] },
        { label: "Several brands per workspace", in: ["agency", "reseller"] },
        { label: "Client-ready reports", in: ["agency", "reseller"] },
        { label: "Agency resource kit", in: ["agency", "reseller"] },
        { label: "Autopilot modes", in: ["agency", "reseller"] },
      ],
    },
    {
      title: "Resellers",
      rows: [
        { label: "Reseller console", in: ["reseller"] },
        { label: "Create and manage reseller accounts", in: ["reseller"] },
        { label: "Unlimited workspaces", in: ["reseller"] },
        { label: "Unlimited team members", in: ["reseller"] },
        { label: "Dedicated partner support", in: ["reseller"] },
      ],
    },
  ] satisfies { title: string; rows: { label: string; in: PlanColumn[] }[] }[],
} as const;

export const PRICING_PAGE = {
  metaTitle: "Pricing",
  metaDescription:
    "Rankoya plans: Free for tracking, Growth and Agency for the work, Enterprise and White Label for resellers. Compare everything each plan includes.",
  faqTitle: "Billing questions",
} as const;

/** Only states what the app and its legal pages already say. */
export const BILLING_FAQS = [
  {
    question: "Is there a free plan?",
    answer:
      "Yes. The Free plan tracks your AI visibility and Google rankings. Keyword research, the content plan and article writing come with the paid plans.",
  },
  {
    question: "How are payments handled?",
    answer: "Payments are handled securely by Paddle.",
  },
  {
    question: "Can I change or cancel my plan?",
    answer:
      "Yes, from the Plans page in the app. If you cancel, your plan won't renew and you keep access until the end of the current billing period.",
  },
  {
    question: "What is a White Label licence?",
    answer:
      "A one-time licence to sell Rankoya to your own customers under your brand, with your domain, logo and colours. Starter covers 100 client licences, Pro 300 and Unlimited has no cap.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Refunds follow our refund policy, which sets out when and how you can ask for one.",
  },
];
