import { AgentMockup } from "@/components/mockups/agent-mockup";
import { AiVisibilityMockup } from "@/components/mockups/ai-visibility-mockup";
import { AuditMockup } from "@/components/mockups/audit-mockup";
import { ContentMockup } from "@/components/mockups/content-mockup";
import { RankTrackingMockup } from "@/components/mockups/rank-tracking-mockup";
import { RankingsMockup } from "@/components/mockups/rankings-mockup";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import type { FeatureMockup as MockupId } from "@/content/feature-pages";

const MOCKUPS: Record<MockupId, () => React.ReactNode> = {
  "ai-visibility": AiVisibilityMockup,
  "rank-tracking": RankTrackingMockup,
  competitors: RankingsMockup,
  agent: AgentMockup,
  content: ContentMockup,
  "site-audit": AuditMockup,
};

/** The page's coded mockup in a framed panel, with a text summary for assistive tech. */
export function FeatureMockup({ id, summary }: { id: MockupId; summary: string }) {
  const Mockup = MOCKUPS[id];
  return (
    <Container className="pb-20 sm:pb-24">
      <Reveal>
        <figure className="mx-auto max-w-4xl rounded-[24px] border border-border bg-surface p-3 shadow-card sm:p-6 lg:p-10">
          <Mockup />
          <figcaption className="sr-only">{summary}</figcaption>
        </figure>
      </Reveal>
    </Container>
  );
}
