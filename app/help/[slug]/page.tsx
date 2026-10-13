import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/ui/page-hero";
import { Prose } from "@/components/ui/prose";
import { getHelpArticle, HELP_ARTICLES, HELP_PAGE, helpHref } from "@/content/help/articles";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return HELP_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps<"/help/[slug]">): Promise<Metadata> {
  const article = getHelpArticle((await params).slug);
  if (!article) return {};
  return pageMetadata({ title: article.title, description: article.description, path: helpHref(article.slug) });
}

/** One help article, with the rest of its category alongside. */
export default async function HelpArticlePage({ params }: PageProps<"/help/[slug]">) {
  const article = getHelpArticle((await params).slug);
  if (!article) notFound();
  const { default: Body } = await article.load();
  const inCategory = HELP_ARTICLES.filter((item) => item.category === article.category);

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: HELP_PAGE.overline, href: "/help" },
          { label: article.title, href: helpHref(article.slug) },
        ]}
        overline={article.category}
        title={article.title}
        lead={article.description}
      />
      <Prose
        aside={
          <nav aria-label={article.category} className="rounded-2xl border border-border p-5">
            <p className="text-overline text-fg-3">{article.category}</p>
            <ul className="mt-3 space-y-2.5">
              {inCategory.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={helpHref(item.slug)}
                    aria-current={item.slug === article.slug ? "page" : undefined}
                    className="text-[15px] font-medium text-fg-2 hover:text-fg aria-[current=page]:text-blue"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-border pt-4 text-[14px] text-fg-2">
              {HELP_PAGE.contactPrompt}{" "}
              <Link href="/contact" className="font-medium text-blue underline">
                {HELP_PAGE.contactLink}
              </Link>
            </p>
          </nav>
        }
      >
        <Body />
      </Prose>
    </>
  );
}
