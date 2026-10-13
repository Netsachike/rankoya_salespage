import Image from "next/image";

import { PLATFORMS, type PlatformId } from "@/content/platforms";
import { cn } from "@/lib/cn";

/**
 * A platform's official mark on a white rounded tile (some marks are dark on
 * transparent and would vanish in dark mode). Falls
 * back to a monogram for providers we have no artwork for.
 */
export function PlatformIcon({
  id,
  size = 28,
  className,
  decorative = false,
  eager = false,
}: {
  id: PlatformId;
  size?: number;
  className?: string;
  /** True when a visible label sits next to the icon. */
  decorative?: boolean;
  /** Above the fold: load straight away instead of lazily. */
  eager?: boolean;
}) {
  const platform = PLATFORMS[id];
  const radius = Math.round(size * 0.24);
  if (!platform.icon) {
    return (
      <span
        aria-hidden={decorative || undefined}
        aria-label={decorative ? undefined : platform.name}
        role={decorative ? undefined : "img"}
        className={cn(
          "grid shrink-0 place-items-center bg-surface-2 num font-semibold text-fg-2 ring-1 ring-border-strong ring-inset",
          className,
        )}
        style={{ width: size, height: size, borderRadius: radius, fontSize: Math.round(size * 0.34) }}
      >
        {platform.monogram}
      </span>
    );
  }
  return (
    <Image
      src={platform.icon}
      alt={decorative ? "" : platform.name}
      width={size}
      height={size}
      loading={eager ? "eager" : "lazy"}
      className={cn("shrink-0 bg-white", className)}
      style={{ borderRadius: radius }}
    />
  );
}

/** Icon plus name in a pill, used in the works-with marquee. */
export function PlatformPill({ id, className }: { id: PlatformId; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-12 shrink-0 items-center gap-3 rounded-full border border-border bg-surface ps-2 pe-5 shadow-card",
        className,
      )}
    >
      <PlatformIcon id={id} size={32} decorative />
      <span className="text-[15px] font-medium whitespace-nowrap text-fg">{PLATFORMS[id].name}</span>
    </span>
  );
}
