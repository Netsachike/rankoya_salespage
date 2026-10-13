import { FEATURES_INDEX } from "@/content/feature-pages";
import { brandOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const alt = "Rankoya features";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return brandOgImage({ eyebrow: FEATURES_INDEX.overline, title: FEATURES_INDEX.title, subtitle: FEATURES_INDEX.lead });
}
