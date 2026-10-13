import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FinalCta } from "@/components/sections/final-cta";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CONTACT_PAGE, CONTACT_TOPICS } from "@/content/contact";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: CONTACT_PAGE.metaTitle,
  description: CONTACT_PAGE.metaDescription,
  path: "/contact",
});

/** One inbox, three topics. Each card opens an email with the subject filled in. */
export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: CONTACT_PAGE.overline, href: "/contact" },
        ]}
        overline={CONTACT_PAGE.overline}
        title={CONTACT_PAGE.title}
        lead={CONTACT_PAGE.lead}
      />

      <Container className="pb-20 sm:pb-24 lg:pb-28">
        <ul className="grid gap-4 md:grid-cols-3">
          {CONTACT_TOPICS.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <Reveal
                as="li"
                key={topic.title}
                delay={i * 0.06}
                className="flex flex-col rounded-2xl border border-border bg-surface p-6"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-blue-bg text-blue-ink">
                  <Icon aria-hidden className="size-5" />
                </span>
                <h2 className="mt-5 text-h2 text-fg">{topic.title}</h2>
                <p className="mt-2 text-[15px] leading-6 text-fg-2">{topic.body}</p>
                <div className="mt-auto pt-6">
                  <ButtonLink
                    href={`mailto:${SITE.email}?subject=${encodeURIComponent(topic.subject)}`}
                    variant="secondary"
                    aria-label={`${topic.cta}: ${topic.title}`}
                  >
                    {topic.cta}
                  </ButtonLink>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-10 grid gap-6 rounded-2xl border border-border p-6 sm:grid-cols-2 sm:p-8">
          <div>
            <h2 className="text-overline text-fg-3">{CONTACT_PAGE.companyTitle}</h2>
            <p className="mt-3 text-[15px] font-medium text-fg">{SITE.company}</p>
            <a href={`mailto:${SITE.email}`} className="mt-1 inline-block text-[15px] text-blue hover:underline">
              {SITE.email}
            </a>
          </div>
          <div className="sm:text-end">
            <p className="text-[15px] text-fg-2">{CONTACT_PAGE.faqPrompt}</p>
            <Link
              href="/#faq"
              className="group mt-1 inline-flex items-center gap-1.5 text-[15px] font-medium text-blue hover:underline"
            >
              {CONTACT_PAGE.faqLink}
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>

      <FinalCta />
    </>
  );
}
