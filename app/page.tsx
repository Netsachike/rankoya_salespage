import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Integrations } from "@/components/sections/integrations";
import { Pricing } from "@/components/sections/pricing";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { WorksWith } from "@/components/sections/works-with";

/** Section order follows docs/IMPLEMENTATION_PLAN.md §2. Later phases slot in below. */
export default function Home() {
  return (
    <>
      <Hero />
      <WorksWith />
      <ProductShowcase />
      <Features />
      <HowItWorks />
      <Integrations />
      <Testimonials />
      <Pricing />
    </>
  );
}
