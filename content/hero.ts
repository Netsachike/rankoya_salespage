/**
 * Hero copy. Brand voice: sentence case, no exclamation marks, numbers first.
 * The proof strip states product facts only: no ratings or customer counts
 * until real ones exist.
 */
export const HERO = {
  pill: {
    label: "AI visibility for ChatGPT, Claude, Gemini and Perplexity",
    /** Fits a 360px phone without truncating. */
    shortLabel: "Track ChatGPT, Claude, Gemini, Perplexity",
    href: "#product",
  },
  heading: {
    /** Rendered as: "See where you rank on [G] Google and in [engines] AI answers." */
    lead: "See where you rank on",
    google: "Google",
    middle: "and in",
    ai: "AI answers.",
    close: "Then close the gap.",
  },
  subheading:
    "Rankoya measures your visibility across Google, Google Maps, ChatGPT, Claude, Gemini and Perplexity. Then an AI agent drafts the fixes and publishes them only after you approve.",
  cta: "Get started",
  reassurance: "Start on the free plan.",
  proof: [
    { icon: "radar", text: "6 platforms tracked" },
    { icon: "shield", text: "Nothing goes live without your approval" },
    { icon: "message", text: "Approve from the app or Telegram" },
  ],
} as const;

export const WORKS_WITH_COPY = {
  label: "Works with",
  heading: "Publishes to your site. Measures the engines your customers ask.",
} as const;

export const SHOWCASE_COPY = {
  overline: "The product",
  title: "Google rankings and AI answers, in one view.",
  lead: "Your visibility score, every platform's trend, who outranks you and what Rankoya is ready to fix. All on one screen.",
  /** Read by assistive tech in place of the decorative mockup. */
  summary:
    "Rankoya overview for the example brand Northwind Roasters: AI visibility score 72, up 4 points. Visibility by platform with 30-day trends. Northwind Roasters moving from third to first against three competitors. An approval card for an article the agent drafted.",
} as const;
