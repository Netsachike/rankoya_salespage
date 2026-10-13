import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    // This repo sits inside the app repo's folder; pin the root so the app's lockfile is never picked up.
    root: import.meta.dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

/** MDX for long-form content (blog, help, policies), imported by the pages that render it. */
const withMDX = createMDX();

export default withMDX(nextConfig);
