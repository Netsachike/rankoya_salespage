import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CHANGELOG, CHANGELOG_PAGE, HAS_CHANGELOG } from "@/content/changelog";
import { formatDate } from "@/lib/date";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata({ title: CHANGELOG_PAGE.metaTitle, description: CHANGELOG_PAGE.metaDescription, path: "/changelog" }),
  // Unlisted and unindexed until there is a real, live update to show.
  ...(HAS_CHANGELOG ? {} : { robots: { index: false, follow: true } }),
};

/** Dated product updates. Empty until launch; see content/changelog.ts. */
export default function ChangelogPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: CHANGELOG_PAGE.metaTitle, href: "/changelog" },
        ]}
        overline={CHANGELOG_PAGE.overline}
        title={CHANGELOG_PAGE.title}
        lead={CHANGELOG_PAGE.lead}
      />
      <Container className="pb-20 sm:pb-24 lg:pb-28">
        {HAS_CHANGELOG ? (
          <ol className="max-w-3xl border-s border-border">
            {CHANGELOG.map((entry) => (
              <li key={`${entry.date}-${entry.title}`} className="relative ps-8 pb-12 last:pb-0">
                <span aria-hidden className="absolute -start-[5px] top-1.5 size-2.5 rounded-full bg-ink" />
                <time dateTime={entry.date} className="text-[14px] text-fg-3">
                  {formatDate(entry.date)}
                </time>
                <h2 className="mt-1 text-h1 text-fg">{entry.title}</h2>
                <p className="mt-3 text-[16px] leading-7 text-fg-2">{entry.body}</p>
                {entry.href ? (
                  <Link href={entry.href} className="mt-3 inline-block text-[15px] font-medium text-blue underline">
                    Learn more
                  </Link>
                ) : null}
              </li>
            ))}
          </ol>
        ) : (
          <div className="max-w-2xl rounded-2xl border border-dashed border-border-strong p-8">
            <h2 className="text-h1 text-fg">{CHANGELOG_PAGE.emptyTitle}</h2>
            <p className="mt-3 text-[16px] leading-7 text-fg-2">{CHANGELOG_PAGE.emptyBody}</p>
            <ButtonLink href="/features" variant="secondary" className="mt-6">
              See the features
            </ButtonLink>
          </div>
        )}
      </Container>
    </>
  );
}
