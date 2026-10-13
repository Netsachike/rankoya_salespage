import { cn } from "@/lib/cn";

/**
 * Fades and lifts its children into place the first time they scroll into
 * view. A plain element: RevealObserver (mounted once in the layout) and CSS
 * do the work, so it adds no client code. Content stays visible with
 * JavaScript off or under reduced motion.
 * Don't wrap the hero heading: it must paint immediately for LCP.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li";
}) {
  const Component = as;
  const style = {
    "--reveal-delay": `${Math.round(delay * 1000)}ms`,
    "--reveal-y": `${y}px`,
  } as React.CSSProperties;
  return (
    <Component className={cn("reveal", className)} style={style}>
      {children}
    </Component>
  );
}
