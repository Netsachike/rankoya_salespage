import { Hero } from "@/components/sections/hero";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { WorksWith } from "@/components/sections/works-with";

/** Section order follows docs/IMPLEMENTATION_PLAN.md §2. Later phases slot in below. */
export default function Home() {
  return (
    <>
      <Hero />
      <WorksWith />
      <ProductShowcase />
    </>
  );
}
