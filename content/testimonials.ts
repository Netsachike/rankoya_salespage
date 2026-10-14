import type { StaticImageData } from "next/image";

import adaOkafor from "@/assets/avatars/ada-okafor.png";
import priyaNair from "@/assets/avatars/priya-nair.png";
import tomasReyes from "@/assets/avatars/tomas-reyes.png";

/**
 * Illustrative customer stories. Rankoya has no public customers yet
 * (PRODUCT.md: "do not fabricate them"), so every card is labelled as an
 * example and every person and company is fictional. Swap in real, approved
 * quotes here and set `illustrative: false` on each. Avatars are flat,
 * faceless illustrations, never photos, so no one mistakes them for real
 * people; replace them with real photos only alongside real, approved quotes.
 */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Who the story represents, matching the brand guide's audiences. */
  audience: "Owner" | "In-house marketer" | "Agency";
  avatar: StaticImageData;
  illustrative: boolean;
};

export const TESTIMONIALS_INTRO = {
  overline: "Stories",
  title: "Built for owners, marketers and the agencies that serve them.",
  lead: "Rankoya is new, so these are illustrative examples of how each kind of customer uses it, not reviews.",
} as const;

export const ILLUSTRATIVE_LABEL = "Illustrative example";

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I check in twice a week and approve drafts from Telegram between roasts. I finally know whether ChatGPT recommends us, and what happens next when it doesn't.",
    name: "Ada Okafor",
    role: "Owner",
    company: "Northwind Roasters",
    audience: "Owner",
    avatar: adaOkafor,
    illustrative: true,
  },
  {
    quote:
      "Rankings, AI answers and the audit used to live in three tools. Now it's one score, and every task says whether it's mine or Rankoya's.",
    name: "Tomás Reyes",
    role: "Marketing lead",
    company: "Halden Outdoor",
    audience: "In-house marketer",
    avatar: tomasReyes,
    illustrative: true,
  },
  {
    quote:
      "Each client gets its own workspace and a report they can read without us in the room. With White Label it all goes out under our name.",
    name: "Priya Nair",
    role: "Founder",
    company: "Lumen & Pine Studio",
    audience: "Agency",
    avatar: priyaNair,
    illustrative: true,
  },
];
