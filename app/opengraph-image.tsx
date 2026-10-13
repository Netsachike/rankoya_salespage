import { brandOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { SITE } from "@/lib/site";

export const alt = "Rankoya. Be the answer.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/** Social share card, per the brand guide: navy panel, horizontal lockup, tagline. */
export default function OpengraphImage() {
  return brandOgImage({
    title: SITE.tagline,
    subtitle: "Your rankings on Google and in AI answers, and an agent that closes the gap.",
  });
}
