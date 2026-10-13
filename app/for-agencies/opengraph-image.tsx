import { AGENCIES_PAGE } from "@/content/agencies";
import { brandOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const alt = "Rankoya for agencies";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return brandOgImage({
    eyebrow: AGENCIES_PAGE.overline,
    title: AGENCIES_PAGE.title,
    subtitle: "Every client's rankings and AI visibility in one workspace, or Rankoya under your own brand.",
  });
}
