import { PlatformPill } from "@/components/brand/platform-tile";
import { Container } from "@/components/ui/container";
import { WORKS_WITH_COPY } from "@/content/hero";
import { WORKS_WITH } from "@/content/platforms";

/**
 * Logo marquee in the slot RankYak uses for press logos. Two copies of the
 * list make the loop unbroken (each ends in the same gap, so -50% lands exactly).
 * The copy is hidden from assistive tech and dropped under reduced motion,
 * where the row wraps instead.
 */
export function WorksWith() {
  return (
    <section id="works-with" aria-labelledby="works-with-heading" className="border-y border-border bg-surface py-12">
      <Container className="text-center">
        <p className="text-overline text-fg-3">{WORKS_WITH_COPY.label}</p>
        <h2 id="works-with-heading" className="mx-auto mt-2 max-w-xl text-[15px] font-medium text-fg-2">
          {WORKS_WITH_COPY.heading}
        </h2>
      </Container>

      <div className="marquee marquee-mask mt-8 overflow-hidden">
        <div className="marquee-track flex w-max">
          <ul className="flex shrink-0 gap-3 pe-3" aria-label="Platforms">
            {WORKS_WITH.map((id) => (
              <li key={id}>
                <PlatformPill id={id} />
              </li>
            ))}
          </ul>
          <ul aria-hidden className="marquee-copy flex shrink-0 gap-3 pe-3">
            {WORKS_WITH.map((id) => (
              <li key={id}>
                <PlatformPill id={id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
