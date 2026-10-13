import Link from "next/link";

import { FinalCta } from "@/components/sections/final-cta";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ABOUT_PAGE, PRINCIPLES } from "@/content/company";
import { pageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: ABOUT_PAGE.metaTitle,
  description: ABOUT_PAGE.metaDescription,
  path: "/about",
});

/** What Rankoya is, how it works and who runs it. Verified facts only. */
export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: ABOUT_PAGE.overline, href: "/about" },
        ]}
        overline={ABOUT_PAGE.overline}
        title={ABOUT_PAGE.title}
        lead={ABOUT_PAGE.lead}
      />

      <Section aria-labelledby="what-heading" className="border-t border-border bg-surface">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
          <Reveal>
            <SectionHeading id="what-heading" align="start" title={ABOUT_PAGE.whatTitle} />
          </Reveal>
          <Reveal delay={0.06}>
            <ol className="space-y-6">
              {ABOUT_PAGE.what.map((line, i) => (
                <li key={line} className="flex gap-4">
                  <span className="pt-1 num text-[13px] font-medium text-blue">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-lead text-fg">{line}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </Section>

      <Section aria-labelledby="principles-heading">
        <Container>
          <Reveal>
            <SectionHeading id="principles-heading" align="start" title={ABOUT_PAGE.principlesTitle} />
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {PRINCIPLES.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={(i % 2) * 0.06}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-blue-bg text-blue-ink">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="mt-5 text-h2 text-fg">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-6 text-fg-2">
                    {item.body}
                    {item.link ? (
                      <>
                        {" "}
                        <Link href={item.link.href} className="font-medium text-blue underline">
                          {item.link.label}
                        </Link>
                      </>
                    ) : null}
                  </p>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="company-heading" className="border-t border-border bg-surface">
        <Container>
          <Reveal className="max-w-2xl">
            <h2 id="company-heading" className="text-section text-fg">
              {ABOUT_PAGE.companyTitle}
            </h2>
            <p className="mt-4 text-lead text-fg-2">{ABOUT_PAGE.companyBody}</p>
            <p className="mt-4 text-[16px] text-fg-2">
              <a href={`mailto:${SITE.email}`} className="font-medium text-blue underline">
                {SITE.email}
              </a>
              <span aria-hidden> · </span>
              <Link href="/contact" className="font-medium text-blue underline">
                Contact
              </Link>
              <span aria-hidden> · </span>
              <Link href="/brand" className="font-medium text-blue underline">
                Brand assets
              </Link>
            </p>
          </Reveal>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
