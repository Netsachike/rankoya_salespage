import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/ui/page-hero";
import { Prose } from "@/components/ui/prose";
import { BLOG_PAGE, BLOG_POSTS, blogHref, getBlogPost } from "@/content/blog/posts";
import { serializeJsonLd } from "@/lib/json-ld";
import { formatDate } from "@/lib/date";
import { pageMetadata } from "@/lib/metadata";
import { SITE, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return {};
  const base = pageMetadata({ title: post.title, description: post.description, path: blogHref(post.slug) });
  return {
    ...base,
    authors: [{ name: post.author }],
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.published,
      modifiedTime: post.updated ?? post.published,
      authors: [post.author],
    },
  };
}

/** One post: header with date and reading time, the MDX body, links to the other posts. */
export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();
  const { default: Body } = await post.load();
  const others = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.updated ?? post.published,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@id": `${SITE_URL}/#organization`, name: SITE.company },
    mainEntityOfPage: `${SITE_URL}${blogHref(post.slug)}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: BLOG_PAGE.overline, href: "/blog" },
          { label: post.title, href: blogHref(post.slug) },
        ]}
        overline={BLOG_PAGE.overline}
        title={post.title}
        lead={
          <span className="block text-[15px] text-fg-3">
            {post.author}
            <span aria-hidden> · </span>
            <time dateTime={post.published}>{formatDate(post.published)}</time>
            <span aria-hidden> · </span>
            {post.readingMinutes} min read
          </span>
        }
      />
      <Prose
        aside={
          others.length > 0 ? (
            <nav aria-label="More posts" className="rounded-2xl border border-border p-5">
              <p className="text-overline text-fg-3">More from the blog</p>
              <ul className="mt-3 space-y-3">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link href={blogHref(item.slug)} className="text-[15px] font-medium text-fg hover:text-blue">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : undefined
        }
      >
        <Body />
      </Prose>
      <FinalCta />
    </>
  );
}
