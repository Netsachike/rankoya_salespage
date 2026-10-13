import { SolutionPage, solutionMetadata } from "@/components/solutions/solution-page";
import { getSolutionPage } from "@/content/solution-pages";

const page = getSolutionPage("local-businesses");

export const metadata = solutionMetadata(page);

export default function ForLocalBusinessesPage() {
  return <SolutionPage page={page} />;
}
