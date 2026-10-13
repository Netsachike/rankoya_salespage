import { SolutionPage, solutionMetadata } from "@/components/solutions/solution-page";
import { getSolutionPage } from "@/content/solution-pages";

const page = getSolutionPage("startups");

export const metadata = solutionMetadata(page);

export default function ForStartupsPage() {
  return <SolutionPage page={page} />;
}
