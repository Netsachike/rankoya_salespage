import { FAQS } from "@/content/faq";
import { FEATURE_PAGES, featureHref } from "@/content/feature-pages";
import { INTEGRATION_PAGES, integrationHref } from "@/content/integration-pages";
import { COMPARISON, ENTERPRISE_PLAN, PLANS, RESELLER } from "@/content/pricing";
import { SOLUTION_PAGES, solutionHref } from "@/content/solution-pages";
import { GET_STARTED_URL, SITE, SITE_URL } from "@/lib/site";
import { SITE_PAGES } from "@/lib/site-pages";

/**
 * llms.txt (https://llmstxt.org): a plain Markdown map of the site for AI
 * engines, built from the same data as the pages so it can't drift.
 */

const url = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

function header() {
  return [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    `${SITE.name} is built by ${SITE.company}. Get started: ${GET_STARTED_URL}`,
  ];
}

export function llmsIndex() {
  return [
    ...header(),
    "",
    "## Pages",
    "",
    ...SITE_PAGES.map((page) => `- [${page.title}](${url(page.path)}): ${page.description}`),
    "",
    "## Optional",
    "",
    `- [Full text](${url("/llms-full.txt")}): every feature, plan and FAQ answer in one file`,
    "",
  ].join("\n");
}

export function llmsFull() {
  const plans = [...PLANS, ENTERPRISE_PLAN];
  const planName = Object.fromEntries(plans.map((plan) => [plan.id, plan.name]));
  return [
    ...header(),
    "",
    "## Features",
    ...FEATURE_PAGES.flatMap((page) => [
      "",
      `### ${page.label}`,
      "",
      `${url(featureHref(page.slug))}`,
      "",
      `${page.title} ${page.lead}`,
      "",
      ...page.capabilities.map((item) => `- ${item.title}: ${item.body}`),
      "",
      ...page.faqs.flatMap((faq) => [`Q: ${faq.question}`, `A: ${faq.answer}`, ""]),
    ]),
    "## Integrations",
    "",
    ...INTEGRATION_PAGES.map(
      (page) =>
        `- [${page.name}](${url(integrationHref(page.slug))}): ${page.summary} Access: ${page.facts.access}. Uses: ${page.facts.data}.`,
    ),
    "",
    "## Who it is for",
    "",
    ...SOLUTION_PAGES.map((page) => `- [${page.label}](${url(solutionHref(page.slug))}): ${page.title} ${page.lead}`),
    "",
    "## Plans",
    "",
    ...plans.map((plan) => `- ${plan.name}: ${plan.pitch} Includes: ${plan.included.join("; ")}.`),
    `- White Label: one-time licences, ${RESELLER.tiers.map((tier) => `${tier.name} (${tier.licences})`).join(", ")}.`,
    "- Prices: not published yet.",
    "",
    "### Plan comparison",
    "",
    ...COMPARISON.groups.flatMap((group) =>
      group.rows.map((row) => `- ${row.label}: ${(row.in as readonly string[]).map((id) => planName[id]).join(", ")}`),
    ),
    "",
    "## FAQ",
    "",
    ...FAQS.flatMap((faq) => [`Q: ${faq.question}`, `A: ${faq.answer}`, ""]),
  ].join("\n");
}
