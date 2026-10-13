import { BLOG_POSTS, getBlogPost } from "@/content/blog/posts";
import { brandOgImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { SITE } from "@/lib/site";

export const alt = "A post on the Rankoya blog";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

/** Prerender one card per post at build time. */
export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getBlogPost((await params).slug);
  return brandOgImage({
    eyebrow: "Blog",
    title: post?.title ?? SITE.tagline,
    subtitle: post ? `${post.author} · ${post.readingMinutes} min read` : SITE.description,
  });
}
