import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { SITE } from "@/lib/site";

export const alt = "Rankoya. Be the answer.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Static artwork: read once at module scope, never per request.
const logo = await readFile(join(process.cwd(), "assets/brand/logo-dark.png"), "base64");
const logoSrc = `data:image/png;base64,${logo}`;
// Satori needs both dimensions: logo-dark.png is 465×104.
const LOGO_HEIGHT = 56;
const LOGO_WIDTH = Math.round((465 / 104) * LOGO_HEIGHT);

/** Social share card, per the brand guide: navy panel, horizontal lockup, tagline. */
export default function OpengraphImage() {
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
        <div style={{ fontSize: 88, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1 }}>{SITE.tagline}</div>
        <div style={{ fontSize: 32, color: "#A8B3C7", maxWidth: 900, lineHeight: 1.35 }}>
          Your rankings on Google and in AI answers, and an agent that closes the gap.
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: "#8492A8" }}>
        <div style={{ width: 14, height: 14, borderRadius: 999, background: "#7C6CFF" }} />
        rankoya.uk
      </div>
    </div>,
    size,
  );
}
