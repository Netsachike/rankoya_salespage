import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import type { Crumb } from "@/lib/json-ld";

/**
 * The opening block of every sub-page: breadcrumbs, overline, the page's only
 * `h1`, a lead and optional actions. Unanimated, like the home hero, so the
 * heading paints straight away.
 */
export function PageHero({
  crumbs,
  overline,
  title,
  lead,
  children,
}: {
  crumbs?: Crumb[];
  overline: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  /** Buttons under the lead. */
  children?: React.ReactNode;
}) {
  return (
    <section aria-labelledby="page-heading" className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_0%,black,transparent)] [background-size:56px_56px] opacity-70"
      />
      <Container className="pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pb-20">
        {crumbs ? <Breadcrumbs crumbs={crumbs} /> : null}
        <div className="mt-10 max-w-3xl sm:mt-14">
          <p className="text-overline text-blue">{overline}</p>
          <h1 id="page-heading" className="mt-4 text-hero text-fg">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lead text-fg-2">{lead}</p>
          {children ? <div className="mt-9 flex flex-wrap items-center gap-3">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
