/**
 * FAQ in brand voice. Answers only state what the app ships (brand guide,
 * PRODUCT.md, the app's integration and plan copy). No guarantees of results.
 * The same text feeds the FAQPage structured data, so it must stay visible.
 */

export type FaqItem = { question: string; answer: string };

export const FAQ_INTRO = {
  overline: "FAQ",
  title: "Questions, answered.",
  lead: "Can't find yours? Write to us and a person will reply.",
} as const;

export const FAQS: FaqItem[] = [
  {
    question: "How does Rankoya work?",
    answer:
      "You add your website and check the business details and core topics Rankoya drafts for you. Rankoya then audits your site, checks your Google positions and asks AI assistants the questions your customers ask. Every gap becomes a task in a ranked action plan, tagged Rankoya or You. Rankoya drafts the articles and fixes, and you approve each one before it goes live.",
  },
  {
    question: "Which AI engines does Rankoya track?",
    answer:
      "ChatGPT, Claude, Gemini and Perplexity, alongside Google Search and Google Maps. For each one you see whether your brand is mentioned, where it appears in the answer, how often, and your share of voice against the competitors you name.",
  },
  {
    question: "Are the articles optimised for search?",
    answer:
      "Each draft is planned from your keywords and what currently ranks, and arrives with its headings, internal links, meta title and meta description in place. You can edit anything in the article editor before it's published.",
  },
  {
    question: "Can I review content before it's published?",
    answer:
      "Yes. Every change Rankoya proposes arrives as an approval card you can approve, edit or reject, in the web app or on Telegram. The default autopilot mode is Ask me first. You can switch to Auto-publish content or Full autopilot later, and you can change it back at any time.",
  },
  {
    question: "Which platforms does Rankoya work with?",
    answer:
      "Rankoya publishes approved articles to WordPress, Shopify, Webflow, Wix and Ghost, and on WordPress it can also apply on-page fixes. It reads clicks and impressions from Google Search Console and traffic from Google Analytics with read-only access, and it sends updates and approvals through Telegram.",
  },
  {
    question: "Does Rankoya support other languages?",
    answer:
      "The app is available in English, Spanish, French, German, Portuguese, Arabic, Chinese and Japanese, including right-to-left layout for Arabic. The language Rankoya writes your content in is a separate setting for each brand.",
  },
  {
    question: "Can I add more than one website?",
    answer:
      "Yes. Each website is a brand in your workspace. The Agency plan adds several brands per workspace, team collaboration and client-ready reports. Enterprise adds unlimited workspaces and team members, and White Label lets you resell Rankoya under your own brand.",
  },
  {
    question: "Does AI-written content work for SEO?",
    answer:
      "Search engines judge content on whether it's useful, not on how it was written. Rankoya drafts from what ranks for your topics today, and nothing is published until you've read it, so you can add the experience and detail only you have. Rankoya measures what happens next, so you can see whether each article moved your rankings and AI visibility.",
  },
];

export const FINAL_CTA = {
  title: "Be the answer.",
  lead: "See where your brand stands on Google and in AI answers today. Start on the free plan.",
  cta: "Get started",
} as const;
