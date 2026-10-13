import { cn } from "@/lib/cn";

/** The page's content width and side gutters. */
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8", className)} {...props} />;
}

/** A page section: vertical rhythm plus an anchor id for the nav. */
export function Section({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("py-20 sm:py-24 lg:py-28", className)} {...props} />;
}

/** Overline, heading and lead for a section intro. */
export function SectionHeading({
  overline,
  title,
  lead,
  id,
  align = "center",
  className,
}: {
  overline?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Id for the heading, so the section can be `aria-labelledby` it. */
  id?: string;
  align?: "center" | "start";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {overline ? <p className="text-overline text-blue">{overline}</p> : null}
      <h2 id={id} className={cn("text-section text-fg", overline && "mt-3")}>
        {title}
      </h2>
      {lead ? <p className="mt-4 text-lead text-fg-2">{lead}</p> : null}
    </div>
  );
}
