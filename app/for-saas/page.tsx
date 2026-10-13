import { SolutionPage, solutionMetadata } from "@/components/solutions/solution-page";
import { getSolutionPage } from "@/content/solution-pages";

const page = getSolutionPage("saas");

export const metadata = solutionMetadata(page);

export default function ForSaasPage() {
  return <SolutionPage page={page} />;
}
