"use client";

import { Button, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

/** Fallback for errors inside a page. The header and footer stay in place. */
export default function Error({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <Container className="py-20 sm:py-28">
      <p className="text-overline text-blue">Error</p>
      <h1 className="mt-4 max-w-2xl text-hero text-fg">Something went wrong.</h1>
      <p className="mt-6 max-w-xl text-lead text-fg-2">
        This page didn&apos;t load properly. Try again, or go back to the home page.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Button size="lg" onClick={() => retry()}>
          Try again
        </Button>
        <ButtonLink href="/" variant="secondary" size="lg">
          Go to the home page
        </ButtonLink>
      </div>
    </Container>
  );
}
