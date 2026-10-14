import { ArrowRight } from "lucide-react";

import { Mark } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { FINAL_CTA } from "@/content/faq";
import { GET_STARTED_URL } from "@/lib/site";

/** Closing call to action on the fixed-dark brand panel. */
export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="pb-20 sm:pb-24 lg:pb-28">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#16233f_0%,#0b1220_100%)] px-6 py-16 text-center ring-1 ring-white/5 sm:px-12 sm:py-20 lg:py-24">
            {/* Faint measuring grid, as in the hero, fading toward the edges */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 [background-image:linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black,transparent)] [background-size:56px_56px]"
            />
            <Mark tone="onDark" size={44} className="mx-auto" />
            <h2 id="final-cta-heading" className="mt-8 text-hero text-white">
              {FINAL_CTA.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lead text-nav-fg">{FINAL_CTA.lead}</p>
            <ButtonLink href={GET_STARTED_URL} variant="inverse" size="lg" className="mt-10 min-w-48">
              {FINAL_CTA.cta}
              <ArrowRight aria-hidden />
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
