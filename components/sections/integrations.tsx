import { PlatformIcon } from "@/components/brand/platform-tile";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { INTEGRATION_GROUPS, INTEGRATIONS_INTRO, type IntegrationGroup } from "@/content/integrations";
import { PLATFORMS } from "@/content/platforms";
import { cn } from "@/lib/cn";

/** Integrations grouped as the app's catalog groups them. */
export function Integrations() {
  return (
    <Section id="integrations" aria-labelledby="integrations-heading" className="border-t border-border bg-surface">
      <Container>
        <Reveal>
          <SectionHeading
            id="integrations-heading"
            overline={INTEGRATIONS_INTRO.overline}
            title={INTEGRATIONS_INTRO.title}
            lead={INTEGRATIONS_INTRO.lead}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-2">
          {INTEGRATION_GROUPS.map((group, i) => (
            <Reveal
              key={group.title}
              delay={(i % 2) * 0.08}
              className={cn(group.compact ? "lg:col-span-2" : group.items.length > 3 && "lg:row-span-2")}
            >
              <GroupCard group={group} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function GroupCard({ group }: { group: IntegrationGroup }) {
  const headingId = `integrations-${group.title.toLowerCase().replace(/\W+/g, "-")}`;
  return (
    <section aria-labelledby={headingId} className="h-full rounded-2xl border border-border bg-bg p-5 sm:p-6">
      <h3 id={headingId} className="text-h2 text-fg">
        {group.title}
      </h3>
      <p className="mt-1 text-[15px] text-fg-2">{group.body}</p>

      {group.compact ? (
        <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {group.items.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3 py-2.5 text-[14px] font-medium text-fg"
            >
              <PlatformIcon id={item.id} size={24} decorative />
              <span className="truncate">{PLATFORMS[item.id].name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-5 divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
          {group.items.map((item) => (
            <li key={item.id} className="flex items-start gap-3.5 px-4 py-3.5">
              <PlatformIcon id={item.id} size={36} decorative className="mt-0.5" />
              <div className="min-w-0">
                <p className="text-[15px] font-semibold text-fg">{PLATFORMS[item.id].name}</p>
                <p className="mt-0.5 text-[14px] leading-5 text-fg-2">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
