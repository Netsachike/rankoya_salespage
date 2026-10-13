import { SolutionPage, solutionMetadata } from "@/components/solutions/solution-page";
import { getSolutionPage } from "@/content/solution-pages";

const page = getSolutionPage("ecommerce");

export const metadata = solutionMetadata(page);

export default function ForEcommercePage() {
  return <SolutionPage page={page} />;
}
