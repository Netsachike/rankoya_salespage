import type { LucideIcon } from "lucide-react";
import { Building2, FileBarChart, FolderKanban, MessageCircle, SlidersHorizontal, Users } from "lucide-react";

import type { FaqItem } from "@/content/faq";

/**
 * /for-agencies. Built from the Agency and Enterprise plan cards, the White
 * Label tab and the agency kit copy in the app (account.upgrade). Client names
 * in the mockup are fictional.
 */

export const AGENCIES_PAGE = {
  metaTitle: "Rankoya for agencies",
  metaDescription:
    "Track every client's Google rankings and AI visibility in one workspace, send client-ready reports, or resell Rankoya under your own brand with White Label.",
  overline: "For agencies",
  title: "Every client site, one workspace.",
  lead: "Track each client's rankings and AI visibility, let Rankoya do the work you approve, and send reports clients can read. Or resell Rankoya under your own brand.",
  primaryCta: "Get started",
  secondaryCta: "See agency pricing",
  mockupSummary:
    "A workspace listing four client brands with their AI visibility, average Google position and approvals waiting: Northwind Roasters, Harbour Dental, Fern & Field Florists and Atlas Bike Repair.",
} as const;

export const AGENCY_CAPABILITIES_INTRO = {
  overline: "Built for client work",
  title: "Run more clients without more busywork.",
  lead: "The Agency plan adds everything a team needs to run SEO and AI visibility for several brands at once.",
} as const;

export const AGENCY_CAPABILITIES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: FolderKanban,
    title: "Several brands per workspace",
    body: "Each client site is its own brand, with its own rankings, AI visibility, plan and content.",
  },
  {
    icon: Users,
    title: "Team collaboration",
    body: "Invite your team to work on client brands together.",
  },
  {
    icon: FileBarChart,
    title: "Client-ready reports",
    body: "Reports on rankings, AI visibility and the work done, ready to share with clients.",
  },
  {
    icon: Building2,
    title: "Agency resource kit",
    body: "Proposal and report templates, sales scripts and brand assets, ready to send to clients.",
  },
  {
    icon: SlidersHorizontal,
    title: "Autopilot modes",
    body: "Ask me first, Auto-publish content or Full autopilot: choose how much Rankoya does on its own.",
  },
  {
    icon: MessageCircle,
    title: "Approvals on Telegram",
    body: "Approve changes from your phone, in the same conversation as the app.",
  },
];

export const WHITE_LABEL_SECTION = {
  overline: "White Label",
  title: "Sell Rankoya under your own brand.",
  lead: "A one-time licence to offer Rankoya to your own customers: your domain, logo and colours, at the price you set.",
  cta: "Talk to us",
  mailSubject: "Rankoya White Label",
} as const;

export const AGENCY_PRICING_INTRO = {
  overline: "Agency pricing",
  title: "Plans for teams and resellers.",
  lead: "Agency covers several brands and a team. Enterprise adds the reseller console and unlimited workspaces.",
} as const;

export const AGENCY_FAQS: FaqItem[] = [
  {
    question: "Can I manage every client from one account?",
    answer:
      "Yes. On the Agency plan each client site is a brand in your workspace, with team collaboration and client-ready reports. Enterprise adds unlimited workspaces and team members.",
  },
  {
    question: "Will my clients see the Rankoya name?",
    answer:
      "With a White Label licence, your clients see your domain, logo and colours, and support is handled behind your brand.",
  },
  {
    question: "What's the difference between Enterprise and White Label?",
    answer:
      "Enterprise is a plan: everything in Agency plus the reseller console, reseller accounts, unlimited workspaces and team members, and dedicated partner support. White Label is a one-time licence for 100, 300 or unlimited client licences that you sell under your own brand and pricing.",
  },
  {
    question: "What's in the agency resource kit?",
    answer: "Proposal and report templates, sales scripts and brand assets, ready to send to clients.",
  },
];

/** Fictional clients for the workspace mockup. */
export const WORKSPACE_MOCK = {
  workspace: "Brightline Studio",
  clients: [
    { name: "Northwind Roasters", visibility: 34, visibilityDelta: 6, position: 7.4, waiting: 2 },
    { name: "Harbour Dental", visibility: 21, visibilityDelta: 4, position: 9.1, waiting: 0 },
    { name: "Fern & Field Florists", visibility: 17, visibilityDelta: -2, position: 12.6, waiting: 3 },
    { name: "Atlas Bike Repair", visibility: 26, visibilityDelta: 3, position: 5.8, waiting: 1 },
  ],
} as const;
