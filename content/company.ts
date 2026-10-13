import type { LucideIcon } from "lucide-react";
import { CircleCheck, Eye, MessageSquareText, Ruler } from "lucide-react";

/**
 * /about and /brand. Verified facts only (plan §5): the company name, what
 * the product does and how it works. No founding story, team size, funding or
 * customer counts until the product owner supplies them. Colours and logo
 * rules come from docs/rankoya_brand_identity.md.
 */

export const ABOUT_PAGE = {
  metaTitle: "About",
  metaDescription:
    "Rankoya measures where brands rank on Google and in AI answers, then does the SEO work its customers approve. Built by NETSACH TECH LTD.",
  overline: "About",
  title: "Search now happens in two places.",
  lead: "People still search Google. More and more of them also ask ChatGPT, Claude, Gemini and Perplexity, and get an answer that names a few brands. Rankoya exists so businesses can see both, and close the gap.",
  whatTitle: "What Rankoya does",
  what: [
    "Rankoya measures where your brand appears in Google Search, Google Maps and the answers of five AI engines, every day.",
    "It turns every gap it finds into a ranked plan, with each task marked as Rankoya's or yours.",
    "Its agent drafts the articles and fixes, and publishes them to your site after you approve.",
  ],
  principlesTitle: "How we work",
  companyTitle: "The company",
  companyBody: "Rankoya is built and operated by NETSACH TECH LTD.",
} as const;

export const PRINCIPLES: { icon: LucideIcon; title: string; body: string; link?: { label: string; href: string } }[] = [
  {
    icon: CircleCheck,
    title: "You approve, Rankoya acts",
    body: "Nothing reaches your site without your say-so on the default mode. Autopilot is a choice you make, and can undo.",
  },
  {
    icon: Ruler,
    title: "Measured, not promised",
    body: "We show what changed and by how much. We don't promise rankings or mentions no one can guarantee.",
  },
  {
    icon: MessageSquareText,
    title: "Plain language",
    body: "Every issue and task is written for the person who runs the business, not for an SEO specialist.",
  },
  {
    icon: Eye,
    title: "Open about our numbers",
    body: "Our methodology page says what we check, how often and where each number comes from.",
    link: { label: "Read the methodology", href: "/methodology" },
  },
];

export const BRAND_PAGE = {
  metaTitle: "Brand assets",
  metaDescription:
    "Download the Rankoya logo and symbol, and find the brand colours and usage rules for press and partners.",
  overline: "Brand assets",
  title: "The Rankoya brand.",
  lead: "Logos, colours and a few rules for using them. For press, partners and anyone writing about Rankoya.",
  logosTitle: "Logos",
  colorsTitle: "Colours",
  rulesTitle: "Using the logo",
  typeTitle: "Typography",
  typeBody: "Rankoya uses Geist for text and Geist Mono for numbers.",
  contactPrompt: "Need another format, or permission for something not covered here?",
} as const;

export const BRAND_COLORS = [
  { name: "Rankoya Blue", hex: "#2563EB", use: "Buttons, links and the “You” data series" },
  { name: "Deep Navy", hex: "#0F1B33", use: "The brand's ink backdrop" },
  { name: "Signal Violet", hex: "#5B47F5", use: "The agent and wins only, always a flat fill" },
  { name: "Midnight", hex: "#0B1220", use: "Dark backgrounds" },
  { name: "Frost", hex: "#EEF2F8", use: "Text on navy and midnight" },
  { name: "Mist", hex: "#F5F8FD", use: "Light backgrounds" },
] as const;

export const BRAND_RULES = {
  do: [
    "Use the dark-text logo on light backgrounds and the white logo on dark ones.",
    "Leave clear space around the logo, and keep the full lockup at least 96px wide (the symbol at least 16px).",
    "Write the name as Rankoya, with a capital R. It's a brand name and is never translated.",
  ],
  dont: [
    "Stretch, rotate, recolour or add effects such as shadows or glows.",
    "Put Signal Violet in a gradient.",
    "Imply that Rankoya endorses your product or service.",
  ],
} as const;

export const METHODOLOGY_PAGE = {
  metaTitle: "Methodology",
  metaDescription:
    "How Rankoya measures AI visibility, Google rankings, competitors and site health: what is checked, how often, and where the numbers come from.",
  title: "How Rankoya measures.",
  lead: "What we check, how often, and where every number comes from.",
} as const;

export const EDITORIAL_PAGE = {
  metaTitle: "Editorial policy",
  metaDescription:
    "How we write and check what we publish on rankoya.uk: accuracy, sources, AI assistance, corrections and independence.",
  title: "How we write what we publish.",
  lead: "The standards behind our blog, help centre and product pages.",
} as const;
