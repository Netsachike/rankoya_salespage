import { PRICING_INTRO } from "@/content/pricing";
import { brandOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const alt = "Rankoya pricing";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return brandOgImage({ eyebrow: PRICING_INTRO.overline, title: PRICING_INTRO.title, subtitle: PRICING_INTRO.lead });
}
