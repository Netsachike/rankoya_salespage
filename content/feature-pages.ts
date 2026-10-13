import type { LucideIcon } from "lucide-react";
import { ChartLine, Crosshair, FileText, MessagesSquare, ScanSearch, View } from "lucide-react";

import type { FaqItem } from "@/content/faq";

/**
 * The six /features/[slug] pages. Every claim comes from what the app ships:
 * its messages (src/messages/en.json → visibility, rankings, competitors,
 * audit, content, editor, agentPage, actions, autopilot) and plan cards. Mock
 * visuals reuse the home page mockups and their fictional Northwind data.
 */

export type FeatureSlug = "ai-visibility" | "rank-tracking" | "competitors" | "seo-agent" | "content" | "site-audit";

/** Which coded mockup illustrates the page. */
export type FeatureMockup = "ai-visibility" | "rank-tracking" | "competitors" | "agent" | "content" | "site-audit";

export type FeaturePage = {
  slug: FeatureSlug;
  /** Menu label and breadcrumb. */
  label: string;
  /** One line under the label in the Features menu. */
  menuDescription: string;
  icon: LucideIcon;
  /** <title> (the layout appends "| Rankoya") and meta description. */
  metaTitle: string;
  metaDescription: string;
  title: string;
  lead: string;
  mockup: FeatureMockup;
  /** Read by assistive tech in place of the decorative mockup. */
  mockupSummary: string;
  capabilities: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  faqs: FaqItem[];
  related: FeatureSlug[];
};

export const FEATURE_PAGES: FeaturePage[] = [
  {
    slug: "ai-visibility",
    label: "AI visibility",
    menuDescription: "See where AI answers mention you",
    icon: View,
    metaTitle: "AI visibility tracking for ChatGPT, Claude, Gemini and Perplexity",
    metaDescription:
      "Track whether ChatGPT, Claude, Gemini, Perplexity and Google AI Overviews name your brand, where you appear in each answer and which sources they cite.",
    title: "See where you show up in AI answers.",
    lead: "Rankoya asks ChatGPT, Claude, Gemini, Perplexity and Google AI Overviews the questions your customers ask, every day. It records whether your brand is named, where it sits in the answer and which sources each engine cites.",
    mockup: "ai-visibility",
    mockupSummary:
      "An AI answer to “Where can I buy specialty coffee beans online?” that names Northwind Roasters second. Northwind is mentioned by ChatGPT, Gemini and Perplexity, and not yet by Claude.",
    capabilities: [
      {
        title: "Mentions per question and engine",
        body: "For every question you track, see which engines name you and which leave you out.",
      },
      {
        title: "Your place in the answer",
        body: "Named first and named fifth are not the same result. Rankoya records where you appear in each answer.",
      },
      {
        title: "The sources engines cite",
        body: "See the pages each engine cites, which of them mention you and which don't, then turn the gaps into outreach tasks.",
      },
      {
        title: "Sentiment",
        body: "Of the answers that mention you, see how many are positive, neutral or negative.",
      },
      {
        title: "Share of voice",
        body: "Compare your visibility with up to five competitors, engine by engine.",
      },
      {
        title: "Rechecked daily",
        body: "Every question is asked again each day, so a trend line shows when something moved.",
      },
    ],
    steps: [
      {
        title: "Add your questions",
        body: "List the questions your customers ask. Rankoya puts each one to five AI engines in every scan.",
      },
      {
        title: "See where you stand",
        body: "Your first scan finishes in about three minutes: mentions, position, citations and sentiment per engine.",
      },
      {
        title: "Close the gaps",
        body: "A question you miss becomes a plan: what closes the gap, and whether Rankoya or you does each part.",
      },
    ],
    faqs: [
      {
        question: "Which AI engines does Rankoya check?",
        answer:
          "ChatGPT, Claude, Gemini, Perplexity and Google AI Overviews. Your Google Search and Google Maps positions are tracked too, in rank tracking.",
      },
      {
        question: "How often are the answers checked?",
        answer:
          "Every tracked question is asked again each day. After you add your site, the first scan finishes in about three minutes.",
      },
      {
        question: "Can Rankoya make AI engines mention my brand?",
        answer:
          "No tool can promise that. Rankoya shows the questions you miss and the sources the engines trust, then drafts the content and fixes most likely to close the gap. You approve each one before it goes live.",
      },
    ],
    related: ["competitors", "content", "seo-agent"],
  },
  {
    slug: "rank-tracking",
    label: "Rank tracking",
    menuDescription: "Your Google positions, every day",
    icon: ChartLine,
    metaTitle: "Daily Google rank tracking on desktop and mobile",
    metaDescription:
      "Rankoya checks your Google position for every tracked keyword each day, on desktop and mobile, with 30-day trends, position bands and Search Console data.",
    title: "Know where you rank on Google, every day.",
    lead: "Add the keywords your customers search for. Rankoya checks your Google position for each one daily, on desktop and mobile, and shows every move with its direction and size.",
    mockup: "rank-tracking",
    mockupSummary:
      "A keyword table for Northwind Roasters. Average position 7.4, up 1.8 in 30 days. “specialty coffee beans” is third on desktop, up 4; “decaf coffee beans” is eleventh, down 3.",
    capabilities: [
      {
        title: "Daily positions",
        body: "Every tracked keyword is checked in Google each day, so a drop shows up before it costs a month of traffic.",
      },
      {
        title: "Desktop and mobile",
        body: "Positions are recorded per device, because the same search can rank differently on a phone.",
      },
      {
        title: "Position bands",
        body: "See how many keywords sit in the top three, on page one and just behind it, and how that spread changes.",
      },
      {
        title: "30-day trends",
        body: "Each keyword carries its trend line and change, with an arrow and a sign rather than colour alone.",
      },
      {
        title: "Search Console data",
        body: "Connect Search Console with read-only access to see real clicks and impressions beside each position.",
      },
      {
        title: "Close to page one",
        body: "Keywords near page one feed the content plan, where a new or updated article can tip them over.",
      },
    ],
    steps: [
      {
        title: "Add your keywords",
        body: "Add the searches that matter to your business. Rankoya checks them in Google every day.",
      },
      {
        title: "Watch the moves",
        body: "Average position, position bands and per-keyword trends update daily.",
      },
      {
        title: "Ask why",
        body: "Ask the agent why a keyword moved. It explains the change and proposes a fix you can approve.",
      },
    ],
    faqs: [
      {
        question: "How often are rankings updated?",
        answer: "Every day. Each tracked keyword is checked in Google daily, and the trend covers the last 30 days.",
      },
      {
        question: "Are desktop and mobile tracked separately?",
        answer: "Yes. Each position is recorded per device, desktop and mobile.",
      },
      {
        question: "Where does the ranking data come from?",
        answer:
          "Rankoya checks positions in Google itself. If you connect Search Console, clicks and impressions come from Google's own data, with read-only access you can revoke at any time.",
      },
    ],
    related: ["competitors", "site-audit", "content"],
  },
  {
    slug: "competitors",
    label: "Competitor tracking",
    menuDescription: "Who outranks you, and what changed",
    icon: Crosshair,
    metaTitle: "Competitor tracking in Google and AI answers",
    metaDescription:
      "Compare your share of voice with up to five competitors in Google and AI answers, and see the questions and keywords they win that you don't.",
    title: "Know who outranks you, and why.",
    lead: "Track up to five competitors in Google and in AI answers. Rankoya shows the questions they win and you don't, the keywords they rank for and you don't, and the sites that cite them.",
    mockup: "competitors",
    mockupSummary:
      "A 12-week share of voice chart where Northwind Roasters climbs from 21% to 34%, passing Bluebird Coffee, Halfmoon Roastery and Ember & Oak. Three keywords moved up, one moved down.",
    capabilities: [
      {
        title: "Share of voice per engine",
        body: "Your visibility next to each competitor's, in Google and in every AI engine Rankoya checks.",
      },
      {
        title: "Questions they win, you don't",
        body: "Questions where competitors are named and you're absent, in two or more engines.",
      },
      {
        title: "Keywords they rank for, you don't",
        body: "Searches where a competitor is in Google's top 10 and you're outside the top 50.",
      },
      {
        title: "Where they get cited and linked",
        body: "The sites that cite and link to your competitors. Rankoya can't earn those links for you, but it drafts the pitch for each one.",
      },
      {
        title: "A draft for each gap",
        body: "A question you're missing can go straight to Content as a draft article.",
      },
      {
        title: "Wins and losses, with numbers",
        body: "Every change since last week shows its direction and size, so you know what moved.",
      },
    ],
    steps: [
      {
        title: "Name your competitors",
        body: "Add up to five. Rankoya includes them in every scan and comparison.",
      },
      {
        title: "Find the gaps",
        body: "See the questions, keywords and citing sites where they're ahead.",
      },
      {
        title: "Close them",
        body: "Turn gaps into drafts and tasks. Rankoya does its part after you approve; the rest is marked as yours.",
      },
    ],
    faqs: [
      {
        question: "How many competitors can I track?",
        answer:
          "Up to five per brand. Each one is added to every scan, so you see them in Google rankings and in AI answers.",
      },
      {
        question: "Does Rankoya build backlinks?",
        answer:
          "No. It shows where competitors get cited and linked and drafts the outreach pitch for each site. Sending it, and earning the link, is up to you.",
      },
      {
        question: "What counts as a keyword gap?",
        answer:
          "A search where a competitor ranks in Google's top 10 and you rank outside the top 50. Those are the clearest openings for new content.",
      },
    ],
    related: ["ai-visibility", "rank-tracking", "seo-agent"],
  },
  {
    slug: "seo-agent",
    label: "SEO agent",
    menuDescription: "Drafts the fix, publishes after you approve",
    icon: MessagesSquare,
    metaTitle: "An SEO agent that works after you approve",
    metaDescription:
      "Ask Rankoya about rankings, competitors or content and get a change you can approve. Choose how much it does on its own, in the app or on Telegram.",
    title: "Approve the fix. Rankoya does the work.",
    lead: "Ask about rankings, competitors or content and get an answer with a change you can approve. Nothing reaches your site until you say yes, and the same conversation continues on Telegram.",
    mockup: "agent",
    mockupSummary:
      "A chat with the Rankoya agent. It explains a drop for “decaf coffee beans” and proposes a new title and meta description, waiting for approval. Autopilot is set to Ask me first.",
    capabilities: [
      {
        title: "Answers that come with a fix",
        body: "Ask why a page dropped and get the reason plus a change to approve, not a report to interpret.",
      },
      {
        title: "Approve, edit or reject",
        body: "Every proposed change arrives as an approval card. Edit it first if you want it worded your way.",
      },
      {
        title: "A ranked action plan",
        body: "What to do next, ranked by impact. Rankoya handles its part; the rest is marked as yours.",
      },
      {
        title: "Autopilot modes",
        body: "Ask me first, Auto-publish content or Full autopilot. Change the mode at any time.",
      },
      {
        title: "On Telegram",
        body: "Updates, approvals and questions from your phone, in the same conversation as the app.",
      },
      {
        title: "Told when it's live",
        body: "After you approve, Rankoya starts right away and tells you when each change is live.",
      },
    ],
    steps: [
      {
        title: "Ask, or open the plan",
        body: "Start from a question, or from the action plan Rankoya keeps ranked by impact.",
      },
      {
        title: "Approve the change",
        body: "Approve, edit or reject each card, in the app or on Telegram.",
      },
      {
        title: "Rankoya publishes",
        body: "It applies the change to your site and reports back when it's live.",
      },
    ],
    faqs: [
      {
        question: "Will the agent change my site without asking?",
        answer:
          "Not on the default mode, Ask me first: nothing goes live until you approve it. Auto-publish content publishes articles on schedule while site changes still need approval. Full autopilot publishes and fixes on its own and sends you a summary after each change.",
      },
      {
        question: "Where can I approve changes?",
        answer: "In the Rankoya app or in Telegram. Both show the same conversation and the same approval cards.",
      },
      {
        question: "What can I ask the agent?",
        answer:
          "Anything about your rankings, competitors or content: why a keyword dropped, which questions a competitor wins, what to publish next.",
      },
    ],
    related: ["content", "site-audit", "ai-visibility"],
  },
  {
    slug: "content",
    label: "Content",
    menuDescription: "Articles planned from what ranks now",
    icon: FileText,
    metaTitle: "SEO content planned and drafted from what ranks today",
    metaDescription:
      "A monthly content plan built from the questions you miss and keywords near page one, with articles researched and drafted in your voice and published after you approve.",
    title: "Articles drafted from what's ranking now.",
    lead: "Rankoya plans a monthly calendar from the questions you miss and the keywords close to page one, researches each article against what ranks today and drafts it in your voice. You approve it, and Rankoya publishes it.",
    mockup: "content",
    mockupSummary:
      "An article draft, “How to brew pour-over coffee at home”, with its heading outline. Rankoya has written the draft, links and meta tags; one task is left for you: add a photo of the roastery. Scheduled for Thursday on WordPress.",
    capabilities: [
      {
        title: "Keyword research",
        body: "Rankoya researches and clusters keywords across your five core topics and maps them into a topical map.",
      },
      {
        title: "A monthly content plan",
        body: "Topics are picked from questions you miss and keywords near page one, and the plan is refreshed as you rank.",
      },
      {
        title: "Drafts in your brand voice",
        body: "Each article is researched against what ranks today and arrives with headings, meta title and description in place.",
      },
      {
        title: "Images and internal links",
        body: "A header image for every article, and links between related articles on your site.",
      },
      {
        title: "A checklist on every draft",
        body: "Drafts are checked to cite at least two outside sources and link to three related pages.",
      },
      {
        title: "Published to your site",
        body: "Approve and schedule. Rankoya publishes to WordPress, Shopify, Webflow, Wix or Ghost and tells you when it's live.",
      },
    ],
    steps: [
      {
        title: "Rankoya plans the month",
        body: "It picks topics from your gaps and sets them on a calendar at your pace.",
      },
      {
        title: "You review the draft",
        body: "Edit as much or as little as you like in the article editor.",
      },
      {
        title: "Approve and schedule",
        body: "Rankoya publishes on the date you set and tells you when the article is live.",
      },
    ],
    faqs: [
      {
        question: "Can I edit an article before it's published?",
        answer:
          "Yes. Every draft opens in the article editor, and nothing is published until you approve it, unless you turn on Auto-publish content.",
      },
      {
        question: "Where can Rankoya publish?",
        answer: "WordPress, Shopify, Webflow, Wix and Ghost, once you connect one.",
      },
      {
        question: "Which plans include article writing?",
        answer:
          "Keyword research, the content plan and article writing come with the paid plans. The Free plan tracks your AI visibility and Google rankings.",
      },
    ],
    related: ["seo-agent", "ai-visibility", "rank-tracking"],
  },
  {
    slug: "site-audit",
    label: "Site audit",
    menuDescription: "Finds what's holding your rankings back",
    icon: ScanSearch,
    metaTitle: "Site audit for SEO health and AI readiness",
    metaDescription:
      "Rankoya audits your site for SEO health and AI readiness across six categories, explains every issue in plain language and prepares the fixes it can make.",
    title: "Find what's holding your rankings back.",
    lead: "Rankoya checks your pages for SEO health and AI readiness, scores each category, explains every issue in plain language and prepares the fixes it can make for you to approve.",
    mockup: "site-audit",
    mockupSummary:
      "Site health 86 out of 100, up 9. Issues: 2 critical (broken links), 5 warnings (missing meta descriptions, slow images), 12 notices. Rankoya can fix the meta descriptions; the broken links need you.",
    capabilities: [
      {
        title: "SEO health and AI readiness",
        body: "Two scores: how well search engines can crawl and rank your pages, and how easily AI engines can read and cite them.",
      },
      {
        title: "Six categories",
        body: "Technical, Core Web Vitals, answer-first content, citation signals, freshness and structured data, each scored.",
      },
      {
        title: "Severity on every issue",
        body: "Critical, warning or notice, shown with an icon and a label, never colour alone.",
      },
      {
        title: "Guidance for owners",
        body: "Each issue is explained in plain language, written for the person who runs the site rather than a specialist.",
      },
      {
        title: "Fixes ready to deploy",
        body: "Fixes Rankoya can make go to your approval queue. They change your live site only after you approve.",
      },
      {
        title: "Who fixes what",
        body: "Every issue says whether Rankoya or you does the work, so nothing sits unowned.",
      },
    ],
    steps: [
      {
        title: "Run the audit",
        body: "Your first audit takes about a minute.",
      },
      {
        title: "Read the scores",
        body: "See SEO health, AI readiness and the score for each category, with issues ranked by severity.",
      },
      {
        title: "Approve the fixes",
        body: "Approve here or on Telegram. Rankoya applies them and you verify the live page.",
      },
    ],
    faqs: [
      {
        question: "How long does an audit take?",
        answer: "About a minute for your first audit.",
      },
      {
        question: "Will Rankoya change my site?",
        answer:
          "Only after you approve. Fixes that change your live site wait in your approval queue, in the app or on Telegram.",
      },
      {
        question: "What does AI readiness measure?",
        answer:
          "How easily AI engines can read, trust and cite your pages: whether content answers the question first, carries citation signals, stays fresh and uses structured data.",
      },
    ],
    related: ["seo-agent", "rank-tracking", "content"],
  },
];

export const FEATURE_SLUGS = FEATURE_PAGES.map((page) => page.slug);

export function getFeaturePage(slug: string) {
  return FEATURE_PAGES.find((page) => page.slug === slug);
}

export const featureHref = (slug: FeatureSlug) => `/features/${slug}` as const;

/** Copy for the /features index and the shared page sections. */
export const FEATURES_INDEX = {
  metaTitle: "Features",
  metaDescription:
    "AI visibility, rank tracking, competitor tracking, an SEO agent, content and a site audit: everything Rankoya measures and the work it does after you approve.",
  overline: "Features",
  title: "Everything Rankoya measures, and the work it does next.",
  lead: "Six tools that share one plan. Every gap they find becomes a task, and every task says whether Rankoya or you does it.",
} as const;

export const FEATURE_PAGE_COPY = {
  capabilitiesTitle: "What you get",
  stepsTitle: "How it works",
  faqTitle: "Common questions",
  relatedTitle: "Works with the rest of Rankoya",
  secondaryCta: "See pricing",
  learnMore: "Learn more",
} as const;
