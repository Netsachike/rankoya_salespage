import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FEATURE_PAGES, featureHref } from "@/content/feature-pages";
import { SIGN_UP_URL } from "@/lib/site";

export const metadata: Metadata = { title: "Page not found" };

/** Branded 404 inside the normal header and footer. Next adds `noindex` itself. */
export default function NotFound() {
  return (
    <Container className="py-20 sm:py-28">
      <p className="text-overline text-blue">404</p>
      <h1 className="mt-4 max-w-2xl text-hero text-fg">This page isn&apos;t here.</h1>
      <p className="mt-6 max-w-xl text-lead text-fg-2">
        The link may be out of date, or the address mistyped. Start from the home page, or jump to a feature.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <ButtonLink href="/" size="lg">
          Go to the home page
        </ButtonLink>
        <ButtonLink href={SIGN_UP_URL} variant="secondary" size="lg">
          Get started
        </ButtonLink>
      </div>
      <nav aria-label="Features" className="mt-16 border-t border-border pt-8">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[15px]">
          {FEATURE_PAGES.map((page) => (
            <li key={page.slug}>
              <Link href={featureHref(page.slug)} className="font-medium text-fg-2 hover:text-fg hover:underline">
                {page.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/pricing" className="font-medium text-fg-2 hover:text-fg hover:underline">
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
