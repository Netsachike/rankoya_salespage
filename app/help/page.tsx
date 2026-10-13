import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { HELP_ARTICLES, HELP_CATEGORIES, HELP_PAGE, helpHref } from "@/content/help/articles";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: HELP_PAGE.metaTitle,
  description: HELP_PAGE.metaDescription,
  path: "/help",
});

/** Help centre index: articles grouped by category. */
export default function HelpPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: HELP_PAGE.overline, href: "/help" },
        ]}
        overline={HELP_PAGE.overline}
        title={HELP_PAGE.title}
        lead={HELP_PAGE.lead}
      />

      <Container className="space-y-16 pb-20 sm:pb-24 lg:pb-28">
        {HELP_CATEGORIES.map((category) => {
          const articles = HELP_ARTICLES.filter((article) => article.category === category);
          if (articles.length === 0) return null;
          const headingId = `help-${category.toLowerCase().replace(/\W+/g, "-")}`;
          return (
            <section key={category} aria-labelledby={headingId}>
              <h2 id={headingId} className="text-overline text-fg-3">
                {category}
              </h2>
              <ul className="mt-5 grid gap-4 md:grid-cols-2">
                {articles.map((article, i) => (
                  <Reveal as="li" key={article.slug} delay={(i % 2) * 0.05} className="flex">
                    <Link
                      href={helpHref(article.slug)}
                      className="group flex flex-1 flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong hover:bg-surface-hover"
                    >
                      <span className="text-h2 text-fg">{article.title}</span>
                      <span className="mt-1.5 text-[15px] leading-6 text-fg-2">{article.description}</span>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-medium text-blue">
                        Read the guide
                        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </section>
          );
        })}

        <p className="text-[15px] text-fg-2">
          {HELP_PAGE.contactPrompt}{" "}
          <Link href="/contact" className="font-medium text-blue underline">
            {HELP_PAGE.contactLink}
          </Link>
        </p>
      </Container>
    </>
  );
}
