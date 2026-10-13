/**
 * Feature deep-dives. Claims stay inside what the app ships (see the feature
 * map in the brand guide); mock data reuses the app's fictional entities.
 */

export type FeatureId = "ai-visibility" | "rankings" | "agent" | "content" | "site-audit";

export type Feature = {
  id: FeatureId;
  overline: string;
  title: string;
  body: string;
  bullets: string[];
  /** Read by assistive tech in place of the decorative mockup. */
  summary: string;
};

export const FEATURES_INTRO = {
  overline: "Features",
  title: "Measure where you stand. Then fix it.",
  lead: "Five tools that share one plan. Everything Rankoya measures turns into a task, and every task says who does it.",
} as const;

export const FEATURES: Feature[] = [
  {
    id: "ai-visibility",
    overline: "AI visibility",
    title: "See where you show up in AI answers.",
    body: "Rankoya asks ChatGPT, Claude, Gemini and Perplexity the questions your customers ask, then records whether your brand is named, where it appears and how often.",
    bullets: [
      "Mentioned or not, per question and per engine",
      "Share of voice against the competitors you name",
      "Trends over time, so you can see what moved it",
    ],
    summary:
      "An AI answer to “Where can I buy specialty coffee beans online?” that names Northwind Roasters second. Northwind is mentioned by ChatGPT, Gemini and Perplexity, and not yet by Claude.",
  },
  {
    id: "rankings",
    overline: "Rankings and competitors",
    title: "Know who outranks you, and why.",
    body: "Google positions and AI share of voice side by side, every week, against the competitors you track. Every change shows its direction and size.",
    bullets: [
      "Keyword positions over time, with rank distribution",
      "Side-by-side share of voice per engine",
      "Wins and losses since last week, with numbers",
    ],
    summary:
      "A 12-week share of voice chart where Northwind Roasters climbs from 21% to 34%, passing Bluebird Coffee, Halfmoon Roastery and Ember & Oak. Three keywords moved up, one moved down.",
  },
  {
    id: "agent",
    overline: "Your SEO agent",
    title: "Approve the fix. Rankoya does the work.",
    body: "Ask Rankoya why a page dropped and it answers with a change you can approve. Nothing reaches your site until you say yes, in the app or on Telegram.",
    bullets: [
      "Approval cards for every change: approve, edit or reject",
      "Autopilot modes: Ask me first, Auto-publish content, Full autopilot",
      "The same conversation continues on Telegram",
    ],
    summary:
      "A chat with the Rankoya agent. It explains a drop for “decaf coffee beans” and proposes a new title and meta description, waiting for approval. Autopilot is set to Ask me first.",
  },
  {
    id: "content",
    overline: "Content",
    title: "Articles drafted from what's ranking now.",
    body: "Rankoya plans topics from your keywords and gaps, drafts each article in a rich editor and schedules it to your site. You edit as much or as little as you like.",
    bullets: [
      "Headings, internal links and meta tags in place",
      "Each task split into what Rankoya does and what you do",
      "Published to WordPress, Shopify, Webflow, Wix or Ghost",
    ],
    summary:
      "An article draft, “How to brew pour-over coffee at home”, with its heading outline. Rankoya has written the draft, links and meta tags; one task is left for you: add a photo of the roastery. Scheduled for Thursday on WordPress.",
  },
  {
    id: "site-audit",
    overline: "Site audit",
    title: "Find what's holding your rankings back.",
    body: "A crawl of your site lists technical and on-page issues by severity, explains each one in plain language and says who fixes it.",
    bullets: [
      "Every issue rated critical, warning or notice",
      "Fix guidance written for owners, not specialists",
      "Fixes Rankoya can make go straight to your approval queue",
    ],
    summary:
      "Site health 86 out of 100, up 9. Issues: 2 critical (broken links), 5 warnings (missing meta descriptions, slow images), 12 notices. Rankoya can fix the meta descriptions; the broken links need you.",
  },
];

/* ───────────── Mockup data (fictional: Northwind Roasters) ───────────── */

export const VISIBILITY_MOCK = {
  question: "Where can I buy specialty coffee beans online?",
  answerLead: "Popular options for freshly roasted specialty beans include",
  ranked: ["Bluebird Coffee", "Northwind Roasters", "Halfmoon Roastery"],
  answerTail: "Most offer subscriptions and ship within two days of roasting.",
  you: "Northwind Roasters",
  engines: [
    { id: "chatgpt", mentioned: true, position: 2 },
    { id: "claude", mentioned: false, position: null },
    { id: "gemini", mentioned: true, position: 1 },
    { id: "perplexity", mentioned: true, position: 3 },
  ],
} as const;

export const RANKINGS_MOCK = {
  /** Share of voice per week, 12 weeks. */
  series: [
    { name: "You", color: "text-chart-you", width: 2.5, data: [21, 22, 21, 24, 25, 24, 27, 29, 28, 31, 33, 34] },
    {
      name: "Bluebird Coffee",
      color: "text-chart-a",
      width: 1.5,
      data: [31, 30, 32, 31, 30, 31, 29, 30, 30, 29, 29, 29],
    },
    {
      name: "Halfmoon Roastery",
      color: "text-chart-b",
      width: 1.5,
      data: [26, 27, 25, 26, 26, 25, 24, 24, 23, 23, 22, 22],
    },
    { name: "Ember & Oak", color: "text-chart-c", width: 1.5, data: [22, 21, 22, 20, 19, 20, 18, 17, 17, 16, 16, 15] },
  ],
  keywords: [
    { keyword: "specialty coffee beans", position: 3, delta: 4 },
    { keyword: "pour over coffee guide", position: 5, delta: 7 },
    { keyword: "decaf coffee beans", position: 11, delta: -3 },
    { keyword: "coffee subscription uk", position: 8, delta: 2 },
  ],
} as const;

export const AGENT_MOCK = {
  user: "Why did we drop for “decaf coffee beans”?",
  reply:
    "You fell from #8 to #11 this week. Two competitors rewrote their decaf pages, and yours has no meta description. I drafted one and a sharper title.",
  card: {
    kicker: "On-page fix · /decaf",
    title: "Update title and meta description",
    before: "Decaf | Northwind",
    after: "Swiss Water decaf coffee beans, roasted weekly | Northwind Roasters",
    approve: "Approve",
    edit: "Edit",
    reject: "Reject",
  },
  modes: ["Ask me first", "Auto-publish content", "Full autopilot"],
  activeMode: 0,
  telegram: "Also in your Telegram chat",
} as const;

export const CONTENT_MOCK = {
  status: "Draft",
  title: "How to brew pour-over coffee at home",
  outline: ["What you need", "Choosing your beans", "Grind size and ratio", "The pour, step by step"],
  rankoya: ["Draft written, 1,480 words", "4 internal links added", "Meta title and description"],
  you: ["Add a photo of the roastery"],
  schedule: "Thu 09:00",
  platform: "wordpress",
} as const;

export const AUDIT_MOCK = {
  score: 86,
  delta: 9,
  counts: { critical: 2, warning: 5, notice: 12 },
  issues: [
    { severity: "critical", title: "Broken internal links", count: 2, owner: "You" },
    { severity: "warning", title: "Missing meta descriptions", count: 3, owner: "Rankoya" },
    { severity: "warning", title: "Images over 300 KB", count: 2, owner: "You" },
    { severity: "notice", title: "Headings skip a level", count: 12, owner: "Rankoya" },
  ],
} as const;

/** Rank tracking page mockup: same fictional brand and keywords as RANKINGS_MOCK. */
export const RANK_TRACKING_MOCK = {
  average: 7.4,
  averageDelta: 1.8,
  bands: [
    { label: "1–3", count: 4 },
    { label: "4–10", count: 11 },
    { label: "11–20", count: 9 },
    { label: "21–50", count: 6 },
  ],
  rows: [
    { keyword: "specialty coffee beans", device: "Desktop", position: 3, delta: 4 },
    { keyword: "pour over coffee guide", device: "Mobile", position: 5, delta: 7 },
    { keyword: "coffee subscription uk", device: "Desktop", position: 8, delta: 2 },
    { keyword: "decaf coffee beans", device: "Mobile", position: 11, delta: -3 },
  ],
} as const;
