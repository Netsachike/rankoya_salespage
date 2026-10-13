import { Container, Section, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { HOW_IT_WORKS_INTRO, STEPS, type Step } from "@/content/how-it-works";
import { cn } from "@/lib/cn";

/**
 * The six-step workflow. A vertical timeline on phones and tablets, one row
 * with a connecting rule from `lg` up. Steps reveal in order.
 */
export function HowItWorks() {
  return (
    <Section id="how-it-works" aria-labelledby="how-it-works-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="how-it-works-heading"
            overline={HOW_IT_WORKS_INTRO.overline}
            title={HOW_IT_WORKS_INTRO.title}
            lead={HOW_IT_WORKS_INTRO.lead}
          />
        </Reveal>

        <ol className="relative mx-auto mt-14 max-w-xl sm:mt-16 lg:grid lg:max-w-none lg:grid-cols-6 lg:gap-6">
          {/* One horizontal rule through the step numbers from lg up; below lg each step draws its own segment */}
          <span
            aria-hidden
            className="absolute start-[calc(100%/12)] end-[calc(100%/12)] top-5 hidden h-px bg-border-strong lg:block"
          />
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.08} className="relative lg:flex">
              <StepItem step={step} index={i} last={i === STEPS.length - 1} />
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

function StepItem({ step, index, last }: { step: Step; index: number; last: boolean }) {
  return (
    <div
      className={cn(
        "relative flex gap-5 lg:flex-1 lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center",
        !last && "pb-10",
      )}
    >
      {last ? null : (
        <span aria-hidden className="absolute start-[19px] top-10 bottom-0 w-px bg-border-strong lg:hidden" />
      )}
      <span className="relative grid size-10 shrink-0 place-items-center rounded-full border border-border-strong bg-surface num text-[14px] font-semibold text-fg shadow-card">
        {index + 1}
      </span>
      <div className="pt-1.5 lg:flex lg:flex-1 lg:flex-col lg:items-center lg:pt-5">
        <h3 className="text-[17px] leading-6 font-semibold tracking-tight text-fg">{step.title}</h3>
        <p className="mt-1.5 text-[15px] leading-6 text-fg-2 lg:mb-4 lg:text-[14px] lg:leading-[22px]">{step.body}</p>
        <OwnerChip owner={step.owner} className="mt-3 lg:mt-auto" />
      </div>
    </div>
  );
}

/** The app's "who does it" label: Signal tint for Rankoya, neutral for You. */
export function OwnerChip({ owner, className }: { owner: Step["owner"]; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[12px] font-medium",
        owner === "Rankoya" ? "bg-signal/12 text-signal" : "bg-surface-2 text-fg-2",
        className,
      )}
    >
      {owner === "Rankoya" ? "Rankoya does this" : "You do this"}
    </span>
  );
}
