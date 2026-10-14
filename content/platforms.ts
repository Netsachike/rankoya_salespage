import type { StaticImageData } from "next/image";

import chatgpt from "@/assets/platforms/chatgpt.png";
import claude from "@/assets/platforms/claude.png";
import gemini from "@/assets/platforms/gemini.png";
import ghost from "@/assets/platforms/ghost.png";
import googleAnalytics from "@/assets/platforms/google-analytics.png";
import googleMaps from "@/assets/platforms/google-maps.png";
import google from "@/assets/platforms/google.png";
import perplexity from "@/assets/platforms/perplexity.png";
import searchConsole from "@/assets/platforms/search-console.png";
import shopify from "@/assets/platforms/shopify.png";
import telegram from "@/assets/platforms/telegram.png";
import webflow from "@/assets/platforms/webflow.png";
import wix from "@/assets/platforms/wix.png";
import wordpress from "@/assets/platforms/wordpress.png";

/**
 * The platforms Rankoya really works with, from the app's integration catalog
 * (src/features/integrations/catalog.ts) and tracked engines. Don't add a
 * provider here until the app supports it.
 */
export type PlatformId =
  | "google"
  | "maps"
  | "chatgpt"
  | "claude"
  | "gemini"
  | "perplexity"
  | "wordpress"
  | "shopify"
  | "webflow"
  | "wix"
  | "ghost"
  | "searchConsole"
  | "analytics"
  | "telegram";

export type Platform = {
  name: string;
  /** Official artwork from the app. Missing ones render as a monogram tile. */
  icon: StaticImageData | null;
  monogram: string;
  kind: "engine" | "publishing" | "data" | "messaging";
};

export const PLATFORMS: Record<PlatformId, Platform> = {
  google: { name: "Google", icon: google, monogram: "G", kind: "engine" },
  maps: { name: "Google Maps", icon: googleMaps, monogram: "GM", kind: "engine" },
  chatgpt: { name: "ChatGPT", icon: chatgpt, monogram: "C", kind: "engine" },
  claude: { name: "Claude", icon: claude, monogram: "C", kind: "engine" },
  gemini: { name: "Gemini", icon: gemini, monogram: "G", kind: "engine" },
  perplexity: { name: "Perplexity", icon: perplexity, monogram: "P", kind: "engine" },
  wordpress: { name: "WordPress", icon: wordpress, monogram: "WP", kind: "publishing" },
  shopify: { name: "Shopify", icon: shopify, monogram: "SH", kind: "publishing" },
  webflow: { name: "Webflow", icon: webflow, monogram: "WF", kind: "publishing" },
  wix: { name: "Wix", icon: wix, monogram: "WX", kind: "publishing" },
  ghost: { name: "Ghost", icon: ghost, monogram: "GH", kind: "publishing" },
  searchConsole: { name: "Search Console", icon: searchConsole, monogram: "GSC", kind: "data" },
  analytics: { name: "Google Analytics", icon: googleAnalytics, monogram: "GA", kind: "data" },
  telegram: { name: "Telegram", icon: telegram, monogram: "TG", kind: "messaging" },
};

/** The six platforms the app measures visibility on, in the app's order. */
export const TRACKED_ENGINES: PlatformId[] = ["google", "maps", "chatgpt", "claude", "gemini", "perplexity"];

/** Marquee order: where Rankoya publishes, then where it measures. Only ones with artwork. */
export const WORKS_WITH: PlatformId[] = [
  "wordpress",
  "shopify",
  "webflow",
  "wix",
  "ghost",
  "google",
  "maps",
  "chatgpt",
  "claude",
  "gemini",
  "perplexity",
];
