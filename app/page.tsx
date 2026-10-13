import { Suspense } from "react";

import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Integrations } from "@/components/sections/integrations";
import { Pricing } from "@/components/sections/pricing";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { WorksWith } from "@/components/sections/works-with";

/**
 * Section order follows docs/IMPLEMENTATION_PLAN.md §2. Nothing here suspends:
 * the boundaries only let React hydrate the below-the-fold sections that carry
 * client code as separate, smaller tasks instead of one long one.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <WorksWith />
      <Suspense>
        <ProductShowcase />
      </Suspense>
      <Suspense>
        <Features />
      </Suspense>
      <HowItWorks />
      <Integrations />
      <Testimonials />
      <Suspense>
        <Pricing />
      </Suspense>
      <Faq />
      <FinalCta />
    </>
  );
}
