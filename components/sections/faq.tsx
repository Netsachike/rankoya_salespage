import { Plus } from "lucide-react";

import { Container, Section, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { FAQ_INTRO, FAQS } from "@/content/faq";
import { serializeJsonLd } from "@/lib/json-ld";
import { SITE } from "@/lib/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

/**
 * Native <details> accordion: keyboard and screen-reader support for free, and
 * it works without JavaScript. The open/close animation is CSS-only
 * (see `.faq-item` in globals.css) where the browser supports it.
 */
export function Faq() {
  return (
    <Section id="faq" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }} />
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal>
          <SectionHeading
            id="faq-heading"
            align="start"
            overline={FAQ_INTRO.overline}
            title={FAQ_INTRO.title}
            lead={
              <>
                {FAQ_INTRO.lead}{" "}
                <a href={`mailto:${SITE.email}`} className="font-medium text-blue underline">
                  {SITE.email}
                </a>
              </>
            }
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="divide-y divide-border border-y border-border">
            {FAQS.map((item) => (
              <details key={item.question} className="faq-item group">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[17px] leading-6 font-semibold text-fg [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <Plus
                    aria-hidden
                    className="mt-0.5 size-5 shrink-0 text-fg-3 transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <p className="pe-11 pb-6 text-[16px] leading-7 text-fg-2">{item.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
