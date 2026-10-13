import Image, { type StaticImageData } from "next/image";

import logoDark from "@/assets/brand/logo-dark.png";
import logoLight from "@/assets/brand/logo-light.png";
import markDark from "@/assets/brand/mark-dark.png";
import markLight from "@/assets/brand/mark-light.png";
import markMask from "@/assets/brand/mark-mask.png";
import { cn } from "@/lib/cn";

/** Product wordmark. A brand name, not UI copy, so it is never translated. */
export const WORDMARK = "Rankoya";

/**
 * `auto` follows the theme (navy artwork in light, white in dark). `onDark` is
 * for surfaces that stay dark in both themes. Mirrors the app's brand/logo.tsx.
 */
type Tone = "auto" | "onDark";

function ThemedArtwork({
  light,
  dark,
  height,
  tone,
  alt,
  priority,
  className,
}: {
  light: StaticImageData;
  dark: StaticImageData;
  height: number;
  tone: Tone;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  const width = (src: StaticImageData) => Math.round((src.width / src.height) * height);
  const shared = cn("shrink-0 select-none", className);
  if (tone === "onDark") {
    return <Image src={dark} alt={alt} width={width(dark)} height={height} className={shared} priority={priority} />;
  }
  return (
    <>
      <Image
        src={light}
        alt={alt}
        width={width(light)}
        height={height}
        className={cn(shared, "dark:hidden")}
        priority={priority}
      />
      <Image
        src={dark}
        alt={alt}
        width={width(dark)}
        height={height}
        className={cn(shared, "hidden dark:block")}
        priority={priority}
      />
    </>
  );
}

/** Horizontal lockup: mark and wordmark. `height` is the artwork height. */
export function Logo({
  className,
  height = 26,
  tone = "auto",
  priority,
}: {
  className?: string;
  height?: number;
  tone?: Tone;
  priority?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center", className)} translate="no">
      <ThemedArtwork light={logoLight} dark={logoDark} height={height} tone={tone} alt={WORDMARK} priority={priority} />
    </span>
  );
}

/** The R-and-arrow symbol alone. Decorative, so it has no alt text. */
export function Mark({ className, size = 22, tone = "auto" }: { className?: string; size?: number; tone?: Tone }) {
  return <ThemedArtwork light={markLight} dark={markDark} height={size} tone={tone} alt="" className={className} />;
}

/**
 * The agent's avatar: the mark in one colour on a Signal disc. The glyph is a
 * CSS mask filled with `currentColor`, as in the app.
 */
export function AgentAvatar({ className, size = 28 }: { className?: string; size?: number }) {
  const glyph = Math.round(size * 0.52);
  return (
    <span
      aria-hidden
      className={cn("grid shrink-0 place-items-center rounded-full bg-signal text-signal-ink", className)}
      style={{ width: size, height: size }}
    >
      <span
        className="bg-current"
        style={{
          width: Math.round(glyph * (markMask.width / markMask.height)),
          height: glyph,
          maskImage: `url(${markMask.src})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      />
    </span>
  );
}
