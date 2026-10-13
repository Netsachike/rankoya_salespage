import { Container, Section, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ILLUSTRATIVE_LABEL, TESTIMONIALS, TESTIMONIALS_INTRO, type Testimonial } from "@/content/testimonials";

/**
 * Customer stories. Every card carries a visible "Illustrative example" label
 * while the people and companies are fictional.
 */
export function Testimonials() {
  return (
    <Section id="stories" aria-labelledby="stories-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="stories-heading"
            overline={TESTIMONIALS_INTRO.overline}
            title={TESTIMONIALS_INTRO.title}
            lead={TESTIMONIALS_INTRO.lead}
          />
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal as="li" key={testimonial.name} delay={i * 0.08} className="flex">
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex flex-1 flex-col rounded-2xl border border-border bg-surface p-6 shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-overline text-fg-3">{testimonial.audience}</span>
        {testimonial.illustrative ? (
          <span className="rounded-full border border-border-strong px-2.5 py-0.5 text-[12px] font-medium text-fg-2">
            {ILLUSTRATIVE_LABEL}
          </span>
        ) : null}
      </div>

      <blockquote className="mt-5 flex-1 text-[17px] leading-7 text-fg">
        <p>“{testimonial.quote}”</p>
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span
          aria-hidden
          className="grid size-10 shrink-0 place-items-center rounded-full bg-blue-bg text-[14px] font-semibold text-blue-ink"
        >
          {initials(testimonial.name)}
        </span>
        <span className="min-w-0">
          <span className="block text-[15px] font-semibold text-fg">{testimonial.name}</span>
          <span className="block truncate text-[14px] text-fg-2">
            {testimonial.role}, {testimonial.company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
