import type { StaticImageData } from "next/image";

import logoDark from "@/assets/brand/logo-dark.png";
import logoLight from "@/assets/brand/logo-light.png";
import markDark from "@/assets/brand/mark-dark.png";
import markLight from "@/assets/brand/mark-light.png";

/**
 * Downloadable logo files, shared by /brand and the header logo's right-click
 * menu. PNG only for now; SVG versions are an open item (plan §7).
 */
export type BrandAsset = {
  id: string;
  label: string;
  /** Background the artwork is drawn for. */
  on: "light" | "dark";
  file: StaticImageData;
  downloadName: string;
};

export const BRAND_ASSETS: BrandAsset[] = [
  { id: "logo-light", label: "Logo", on: "light", file: logoLight, downloadName: "rankoya-logo.png" },
  { id: "logo-dark", label: "Logo, white", on: "dark", file: logoDark, downloadName: "rankoya-logo-white.png" },
  { id: "mark-light", label: "Symbol", on: "light", file: markLight, downloadName: "rankoya-symbol.png" },
  { id: "mark-dark", label: "Symbol, white", on: "dark", file: markDark, downloadName: "rankoya-symbol-white.png" },
];
