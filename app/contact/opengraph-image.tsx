import { CONTACT_PAGE } from "@/content/contact";
import { brandOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const alt = "Contact Rankoya";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return brandOgImage({ eyebrow: CONTACT_PAGE.overline, title: CONTACT_PAGE.title, subtitle: CONTACT_PAGE.lead });
}
