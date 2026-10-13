import { Rss } from "lucide-react";
import Link from "next/link";

import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { BLOG_PAGE, BLOG_POSTS, blogHref } from "@/content/blog/posts";
import { formatDate } from "@/lib/date";
import { pageMetadata } from "@/lib/metadata";

export const metadata = {
  ...pageMetadata({ title: BLOG_PAGE.metaTitle, description: BLOG_PAGE.metaDescription, path: "/blog" }),
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/blog/feed.xml" } },
};

/** Post list, newest first. */
export default function BlogPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: BLOG_PAGE.overline, href: "/blog" },
        ]}
        overline={BLOG_PAGE.overline}
        title={BLOG_PAGE.title}
        lead={BLOG_PAGE.lead}
      >
        <a
          href="/blog/feed.xml"
          className="inline-flex items-center gap-2 text-[15px] font-medium text-fg-2 transition-colors hover:text-fg"
        >
          <Rss aria-hidden className="size-4" />
          RSS feed
        </a>
      </PageHero>

      <Container className="pb-20 sm:pb-24 lg:pb-28">
        <ul className="divide-y divide-border border-y border-border">
          {BLOG_POSTS.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 0.05}>
              <article className="grid gap-3 py-8 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10">
                <p className="text-[14px] text-fg-3">
                  <time dateTime={post.published}>{formatDate(post.published)}</time>
                  <span aria-hidden> · </span>
                  {post.readingMinutes} min read
                </p>
                <div className="max-w-2xl">
                  <h2 className="text-h1 text-fg">
                    <Link href={blogHref(post.slug)} className="hover:text-blue hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-[16px] leading-7 text-fg-2">{post.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>

      <FinalCta />
    </>
  );
}
