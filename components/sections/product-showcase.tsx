import { DashboardMockup } from "@/components/mockups/dashboard-mockup";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SHOWCASE_COPY } from "@/content/hero";

/**
 * The product, shown as a coded mockup on the brand's navy-to-midnight panel.
 * The mockup is decorative; the figcaption carries its content for screen readers.
 */
export function ProductShowcase() {
  return (
    <Section id="product" aria-labelledby="product-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="product-heading"
            overline={SHOWCASE_COPY.overline}
            title={SHOWCASE_COPY.title}
            lead={SHOWCASE_COPY.lead}
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12 sm:mt-14">
          <figure className="rounded-2xl bg-[linear-gradient(135deg,#16233f_0%,#0b1220_100%)] p-2 ring-1 ring-white/5 sm:rounded-[28px] sm:p-6 lg:p-10">
            <DashboardMockup />
            <figcaption className="sr-only">{SHOWCASE_COPY.summary}</figcaption>
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}
