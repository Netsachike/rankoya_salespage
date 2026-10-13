/**
 * The real Rankoya workflow (brand guide: scan → insight → ranked action plan →
 * agent drafts → owner approves → publish). Step 1 mirrors the app's site setup,
 * where Rankoya drafts the business details and core topics for you to check.
 */

export type Step = {
  title: string;
  body: string;
  /** Who does the work, as the app labels every task. */
  owner: "Rankoya" | "You";
};

export const HOW_IT_WORKS_INTRO = {
  overline: "How it works",
  title: "From your domain to published fixes in six steps.",
  lead: "You set it up once and approve the work. Rankoya does everything in between.",
} as const;

export const STEPS: Step[] = [
  {
    title: "Add your site",
    body: "Enter your domain. Rankoya drafts your business details and core topics for you to check.",
    owner: "You",
  },
  {
    title: "Rankoya scans",
    body: "It audits your site, checks your Google positions and asks AI assistants the questions your customers ask.",
    owner: "Rankoya",
  },
  {
    title: "Get a ranked plan",
    body: "Every gap becomes a task, ranked by what to do next and tagged Rankoya or You.",
    owner: "Rankoya",
  },
  {
    title: "Rankoya drafts",
    body: "Articles and on-page fixes are written for you and wait in your approval queue.",
    owner: "Rankoya",
  },
  {
    title: "You approve",
    body: "Approve, edit or reject each change in the app or on Telegram. Nothing goes live without it.",
    owner: "You",
  },
  {
    title: "Publish and measure",
    body: "Approved work goes live on your site, and the next scan shows what moved.",
    owner: "Rankoya",
  },
];
