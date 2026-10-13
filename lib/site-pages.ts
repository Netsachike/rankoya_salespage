import { AGENCIES_PAGE } from "@/content/agencies";
import { BLOG_PAGE, BLOG_POSTS, blogHref } from "@/content/blog/posts";
import { CHANGELOG_PAGE, HAS_CHANGELOG } from "@/content/changelog";
import { ABOUT_PAGE, BRAND_PAGE, EDITORIAL_PAGE, METHODOLOGY_PAGE } from "@/content/company";
import { CONTACT_PAGE } from "@/content/contact";
import { FEATURE_PAGES, FEATURES_INDEX, featureHref } from "@/content/feature-pages";
import { HELP_ARTICLES, HELP_PAGE, helpHref } from "@/content/help/articles";
import { INTEGRATION_PAGES, integrationHref, INTEGRATIONS_PAGE } from "@/content/integration-pages";
import { PRICING_PAGE } from "@/content/pricing";
import { SOLUTION_PAGES, solutionHref } from "@/content/solution-pages";
import { SITE } from "@/lib/site";

/*
 * Server-only (sitemap, llms.txt): kept out of lib/site.ts, which the header
 * and menus import on the client, so the content registries and their MDX
 * loaders stay out of the client bundle.
 */

type SitePage = { path: string; title: string; description: string; priority: number };

/**
 * Every indexable page, for the sitemap and llms.txt, generated from the
 * content registries so a new post, help article or integration is listed
 * as soon as it's added.
 */
export const SITE_PAGES: SitePage[] = [
  { path: "/", title: SITE.title, description: SITE.description, priority: 1 },
  { path: "/pricing", title: "Pricing", description: PRICING_PAGE.metaDescription, priority: 0.9 },
  { path: "/features", title: FEATURES_INDEX.metaTitle, description: FEATURES_INDEX.metaDescription, priority: 0.8 },
  ...FEATURE_PAGES.map((page) => ({
    path: featureHref(page.slug),
    title: page.metaTitle,
    description: page.metaDescription,
    priority: 0.8,
  })),
  { path: "/for-agencies", title: AGENCIES_PAGE.metaTitle, description: AGENCIES_PAGE.metaDescription, priority: 0.8 },
  ...SOLUTION_PAGES.map((page) => ({
    path: solutionHref(page.slug),
    title: page.metaTitle,
    description: page.metaDescription,
    priority: 0.8,
  })),
  {
    path: "/integrations",
    title: INTEGRATIONS_PAGE.metaTitle,
    description: INTEGRATIONS_PAGE.metaDescription,
    priority: 0.7,
  },
  ...INTEGRATION_PAGES.map((page) => ({
    path: integrationHref(page.slug),
    title: `${page.name} integration`,
    description: page.metaDescription,
    priority: 0.6,
  })),
  { path: "/blog", title: BLOG_PAGE.metaTitle, description: BLOG_PAGE.metaDescription, priority: 0.7 },
  ...BLOG_POSTS.map((post) => ({
    path: blogHref(post.slug),
    title: post.title,
    description: post.description,
    priority: 0.6,
  })),
  { path: "/help", title: HELP_PAGE.metaTitle, description: HELP_PAGE.metaDescription, priority: 0.6 },
  ...HELP_ARTICLES.map((article) => ({
    path: helpHref(article.slug),
    title: article.title,
    description: article.description,
    priority: 0.5,
  })),
  ...(HAS_CHANGELOG
    ? [
        {
          path: "/changelog",
          title: CHANGELOG_PAGE.metaTitle,
          description: CHANGELOG_PAGE.metaDescription,
          priority: 0.5,
        },
      ]
    : []),
  {
    path: "/methodology",
    title: METHODOLOGY_PAGE.metaTitle,
    description: METHODOLOGY_PAGE.metaDescription,
    priority: 0.5,
  },
  { path: "/about", title: ABOUT_PAGE.metaTitle, description: ABOUT_PAGE.metaDescription, priority: 0.5 },
  { path: "/contact", title: CONTACT_PAGE.metaTitle, description: CONTACT_PAGE.metaDescription, priority: 0.5 },
  {
    path: "/editorial-policy",
    title: EDITORIAL_PAGE.metaTitle,
    description: EDITORIAL_PAGE.metaDescription,
    priority: 0.3,
  },
  { path: "/brand", title: BRAND_PAGE.metaTitle, description: BRAND_PAGE.metaDescription, priority: 0.3 },
];
