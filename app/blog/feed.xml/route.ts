import { BLOG_PAGE, BLOG_POSTS, blogHref } from "@/content/blog/posts";
import { SITE, SITE_URL } from "@/lib/site";

const escape = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const rfc822 = (iso: string) => new Date(`${iso}T00:00:00Z`).toUTCString();

/** RSS 2.0 feed of the blog. Built from the registry only, so it is prerendered. */
export function GET() {
  const items = BLOG_POSTS.map((post) => {
    const url = `${SITE_URL}${blogHref(post.slug)}`;
    return [
      "<item>",
      `<title>${escape(post.title)}</title>`,
      `<link>${url}</link>`,
      `<guid isPermaLink="true">${url}</guid>`,
      `<description>${escape(post.description)}</description>`,
      `<pubDate>${rfc822(post.published)}</pubDate>`,
      "</item>",
    ].join("");
  });

  const latest = BLOG_POSTS[0]?.published;
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "<channel>",
    `<title>${escape(`${SITE.name} ${BLOG_PAGE.overline}`)}</title>`,
    `<link>${SITE_URL}/blog</link>`,
    `<atom:link href="${SITE_URL}/blog/feed.xml" rel="self" type="application/rss+xml"/>`,
    `<description>${escape(BLOG_PAGE.metaDescription)}</description>`,
    "<language>en-gb</language>",
    latest ? `<lastBuildDate>${rfc822(latest)}</lastBuildDate>` : "",
    ...items,
    "</channel>",
    "</rss>",
  ].join("");

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
