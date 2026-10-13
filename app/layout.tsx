import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SkipLink } from "@/components/layout/skip-link";
import { Providers } from "@/components/providers";
import { RevealObserver } from "@/components/reveal-observer";
import { homeJsonLd, serializeJsonLd } from "@/lib/json-ld";
import { IS_INDEXABLE, SITE, SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  // Only figures below the fold use it; skipping the preload leaves the
  // bandwidth to Geist, which paints the hero heading (the LCP element).
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "AI SEO",
    "AI search visibility",
    "generative engine optimisation",
    "ChatGPT visibility",
    "rank tracking",
    "SEO agent",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: IS_INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f8fd" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeJsonLd) }} />
        {/* Without JavaScript, mockup parts that animate in from opacity 0 would stay hidden */}
        <noscript>
          <style>{`[inert] [style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Providers>
          <SkipLink />
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <RevealObserver />
        </Providers>
      </body>
    </html>
  );
}
