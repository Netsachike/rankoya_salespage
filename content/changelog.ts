/**
 * Product updates for /changelog, newest first. Only add an entry once the
 * change is live for customers: no development milestones, nothing planned.
 * While the list is empty the page is unlisted (no nav link, not in the
 * sitemap or llms.txt) and noindex, and it says entries arrive at launch.
 */

export type ChangelogEntry = {
  /** ISO date the change went live, YYYY-MM-DD. */
  date: string;
  title: string;
  body: string;
  /** Optional link to the feature or help article. */
  href?: string;
};

export const CHANGELOG: ChangelogEntry[] = [];

export const HAS_CHANGELOG = CHANGELOG.length > 0;

export const CHANGELOG_PAGE = {
  metaTitle: "What's new",
  metaDescription: "Every Rankoya update, dated and explained.",
  overline: "Changelog",
  title: "What's new in Rankoya.",
  lead: "Every update, dated and explained.",
  emptyTitle: "The first entries arrive at launch.",
  emptyBody:
    "We only list changes once they're live for customers. Until then, the features pages describe what Rankoya does today.",
} as const;
