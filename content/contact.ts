import type { LucideIcon } from "lucide-react";
import { Handshake, LifeBuoy, MessageSquare } from "lucide-react";

/**
 * /contact. One inbox for now (SITE.email); each topic pre-fills the subject
 * so mail can be sorted. A form replaces the mailto links once a form handler
 * and email provider are chosen (plan §8.4, Phase 9).
 */

export const CONTACT_PAGE = {
  metaTitle: "Contact",
  metaDescription: "Questions about Rankoya, plans, support or White Label? Write to us and a person will reply.",
  overline: "Contact",
  title: "Talk to a person.",
  lead: "Write to us about plans, support or reselling Rankoya. Pick a topic so your message reaches the right person.",
  faqPrompt: "Looking for a quick answer?",
  faqLink: "Read the FAQ",
  companyTitle: "Company",
} as const;

export const CONTACT_TOPICS: { icon: LucideIcon; title: string; body: string; subject: string; cta: string }[] = [
  {
    icon: MessageSquare,
    title: "Plans and sales",
    body: "Which plan fits, how Rankoya works with your site, or a walkthrough for your team.",
    subject: "Rankoya plans",
    cta: "Email sales",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    body: "Already using Rankoya? Tell us your site's domain and what you were trying to do.",
    subject: "Rankoya support",
    cta: "Email support",
  },
  {
    icon: Handshake,
    title: "Agencies and White Label",
    body: "Reselling Rankoya to your clients, Enterprise, or a White Label licence.",
    subject: "Rankoya White Label",
    cta: "Email partnerships",
  },
];
