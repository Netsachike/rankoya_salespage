import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/** Shared by every opengraph-image.tsx: 1200×630 PNG. */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

// Static artwork: read once at module scope, never per request.
const logo = await readFile(join(process.cwd(), "assets/brand/logo-dark.png"), "base64");
const logoSrc = `data:image/png;base64,${logo}`;
// Satori needs both dimensions: logo-dark.png is 465×104.
const LOGO_HEIGHT = 56;
const LOGO_WIDTH = Math.round((465 / 104) * LOGO_HEIGHT);

/**
 * The brand share card: navy panel, horizontal lockup, a heading and a line
 * under it. `eyebrow` names the page type on sub-pages ("Features", "Pricing").
 */
export function brandOgImage({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle: string }) {
  const long = title.length > 28;
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "linear-gradient(135deg, #16233F 0%, #0B1220 100%)",
        color: "#EEF2F8",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
      <img src={logoSrc} alt="" width={LOGO_WIDTH} height={LOGO_HEIGHT} />
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {eyebrow ? (
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: "0.06em",
              color: "#A9C1FF",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        <div
          style={{
            fontSize: long ? 64 : 88,
            fontWeight: 600,
            letterSpacing: "-0.035em",
            lineHeight: 1.05,
            maxWidth: 1040,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 30, color: "#A8B3C7", maxWidth: 960, lineHeight: 1.35 }}>{subtitle}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#8492A8" }}>
        <div style={{ width: 14, height: 14, borderRadius: 999, background: "#7C6CFF" }} />
        rankoya.uk
      </div>
    </div>,
    OG_SIZE,
  );
}
