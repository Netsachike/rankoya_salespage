"use client";

import "./globals.css";

/**
 * Replaces the root layout when it fails, so it brings its own document and
 * styles. Stays plain: no theme script, fonts or providers to fail again.
 */
export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <html lang="en">
      <body className="grid min-h-dvh place-items-center bg-bg px-4 text-fg">
        <title>Something went wrong | Rankoya</title>
        <main className="max-w-md text-center">
          <h1 className="text-h1">Something went wrong.</h1>
          <p className="mt-3 text-fg-2">Rankoya couldn&apos;t load this page. Try again in a moment.</p>
          <div className="mt-8 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => retry()}
              className="h-11 rounded-full bg-ink px-5 text-[15px] font-medium text-ink-fg"
            >
              Try again
            </button>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- a full reload is the point here */}
            <a
              href="/"
              className="inline-flex h-11 items-center rounded-full border border-border-strong px-5 text-[15px] font-medium"
            >
              Home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
