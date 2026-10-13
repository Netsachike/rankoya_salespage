import { Check, Download, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container, Section, SectionHeading } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { BRAND_COLORS, BRAND_PAGE, BRAND_RULES } from "@/content/company";
import { BRAND_ASSETS } from "@/lib/brand-assets";
import { cn } from "@/lib/cn";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: BRAND_PAGE.metaTitle,
  description: BRAND_PAGE.metaDescription,
  path: "/brand",
});

/** Logo downloads, colours and usage rules, from the brand guide. */
export default function BrandPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: BRAND_PAGE.overline, href: "/brand" },
        ]}
        overline={BRAND_PAGE.overline}
        title={BRAND_PAGE.title}
        lead={BRAND_PAGE.lead}
      />

      <Section aria-labelledby="logos-heading" className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <SectionHeading id="logos-heading" align="start" title={BRAND_PAGE.logosTitle} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {BRAND_ASSETS.map((asset, i) => (
              <Reveal as="li" key={asset.id} delay={(i % 2) * 0.05}>
                <figure className="overflow-hidden rounded-2xl border border-border">
                  <div
                    className={cn("grid h-48 place-items-center p-8", asset.on === "dark" ? "bg-midnight" : "bg-white")}
                  >
                    <Image
                      src={asset.file}
                      alt={`Rankoya ${asset.label.toLowerCase()}`}
                      className="h-14 w-auto max-w-full"
                      sizes="320px"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between gap-4 border-t border-border bg-surface px-5 py-4">
                    <span className="text-[15px] font-medium text-fg">
                      {asset.label}
                      <span className="block text-[13px] font-normal text-fg-3">PNG · for {asset.on} backgrounds</span>
                    </span>
                    <a
                      href={asset.file.src}
                      download={asset.downloadName}
                      className="inline-flex h-9 items-center gap-2 rounded-full border border-border-strong px-4 text-[14px] font-medium text-fg transition-colors hover:bg-surface-hover"
                    >
                      <Download aria-hidden className="size-4" />
                      Download<span className="sr-only"> {asset.label} PNG</span>
                    </a>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="colors-heading" className="border-t border-border bg-surface">
        <Container>
          <SectionHeading id="colors-heading" align="start" title={BRAND_PAGE.colorsTitle} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BRAND_COLORS.map((color) => (
              <li key={color.hex} className="overflow-hidden rounded-2xl border border-border bg-bg">
                <div aria-hidden className="h-24 border-b border-border" style={{ backgroundColor: color.hex }} />
                <div className="p-5">
                  <p className="text-[15px] font-semibold text-fg">{color.name}</p>
                  <p className="mt-0.5 num text-[14px] text-fg-2">{color.hex}</p>
                  <p className="mt-2 text-[14px] leading-5 text-fg-2">{color.use}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[15px] text-fg-2">
            <span className="font-semibold text-fg">{BRAND_PAGE.typeTitle}.</span> {BRAND_PAGE.typeBody}
          </p>
        </Container>
      </Section>

      <Section aria-labelledby="rules-heading">
        <Container>
          <SectionHeading id="rules-heading" align="start" title={BRAND_PAGE.rulesTitle} />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <RuleList title="Do" items={BRAND_RULES.do} positive />
            <RuleList title="Don't" items={BRAND_RULES.dont} />
          </div>
          <p className="mt-10 text-[15px] text-fg-2">
            {BRAND_PAGE.contactPrompt}{" "}
            <Link href="/contact" className="font-medium text-blue underline">
              Contact us
            </Link>
          </p>
        </Container>
      </Section>
    </>
  );
}

function RuleList({ title, items, positive = false }: { title: string; items: readonly string[]; positive?: boolean }) {
  const Icon = positive ? Check : X;
  return (
    <section aria-label={title} className="rounded-2xl border border-border bg-surface p-6">
      <h3 className="text-h2 text-fg">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[15px] leading-6 text-fg-2">
            <Icon
              aria-hidden
              className={cn("mt-1 size-4 shrink-0", positive ? "text-success" : "text-danger")}
              strokeWidth={2.5}
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
