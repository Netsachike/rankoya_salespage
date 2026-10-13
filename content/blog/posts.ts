import type { MDXContent } from "mdx/types";

/**
 * Blog registry. Metadata lives here, typed, so listings, the RSS feed, the
 * sitemap and llms.txt never parse MDX; the body is the matching .mdx file,
 * loaded on demand. Newest first. Posts follow /editorial-policy: no invented
 * statistics, and every claim about Rankoya matches what the app does.
 */

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, YYYY-MM-DD. */
  published: string;
  updated?: string;
  author: string;
  readingMinutes: number;
  load: () => Promise<{ default: MDXContent }>;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "choosing-questions-to-track-in-ai-answers",
    title: "How to choose the questions to track in AI answers",
    description:
      "AI visibility is only as useful as the questions you measure. A practical way to pick them: start from buying moments, write them the way customers talk, and keep the list small.",
    published: "2026-10-13",
    author: "Rankoya team",
    readingMinutes: 5,
    load: () => import("./choosing-questions-to-track-in-ai-answers.mdx"),
  },
  {
    slug: "what-is-ai-visibility",
    title: "What is AI visibility, and how do you measure it?",
    description:
      "People ask ChatGPT, Claude, Gemini and Perplexity for recommendations, and the answers name brands. AI visibility is whether yours is one of them. Here's what to measure and why.",
    published: "2026-10-13",
    author: "Rankoya team",
    readingMinutes: 6,
    load: () => import("./what-is-ai-visibility.mdx"),
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export const blogHref = (slug: string) => `/blog/${slug}`;

export const BLOG_PAGE = {
  metaTitle: "Blog",
  metaDescription:
    "Playbooks on SEO and AI search from the Rankoya team: how AI answers pick brands, and how to measure and close the gap.",
  overline: "Blog",
  title: "SEO and AI search, explained.",
  lead: "How AI answers choose which brands to name, what to measure, and what to do about the gaps.",
} as const;
