import { BLOG_PAGE } from "@/content/blog/posts";
import { brandOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const alt = "The Rankoya blog";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return brandOgImage({ eyebrow: BLOG_PAGE.overline, title: BLOG_PAGE.title, subtitle: BLOG_PAGE.lead });
}
