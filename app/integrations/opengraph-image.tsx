import { INTEGRATIONS_PAGE } from "@/content/integration-pages";
import { brandOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const alt = "Rankoya integrations";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return brandOgImage({
    eyebrow: INTEGRATIONS_PAGE.overline,
    title: INTEGRATIONS_PAGE.title,
    subtitle: INTEGRATIONS_PAGE.lead,
  });
}
