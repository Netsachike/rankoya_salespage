import { getSolutionPage } from "@/content/solution-pages";
import { brandOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

const page = getSolutionPage("ecommerce");

export const alt = page.metaTitle;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return brandOgImage({ eyebrow: page.label, title: page.title, subtitle: page.menuDescription });
}
