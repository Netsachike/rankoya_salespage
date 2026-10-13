import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

/**
 * The reading column for MDX and other long-form text: a comfortable measure,
 * with an optional aside (table of contents, related links) from `lg` up.
 */
export function Prose({
  children,
  aside,
  className,
}: {
  children: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <Container className={cn("pb-20 sm:pb-24 lg:pb-28", className)}>
      <div className={cn("grid gap-12", aside && "lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16")}>
        <div className="max-w-[68ch]">{children}</div>
        {aside ? <aside className="lg:sticky lg:top-24 lg:self-start">{aside}</aside> : null}
      </div>
    </Container>
  );
}
