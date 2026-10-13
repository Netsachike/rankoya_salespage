import type { MDXComponents } from "mdx/types";

import { SmartLink } from "@/components/ui/smart-link";
import { cn } from "@/lib/cn";

/**
 * Brand styles for every MDX document (blog, help, policies). Required by
 * @next/mdx in the App Router. Headings start at h2: the page's PageHero owns
 * the h1.
 */
const components: MDXComponents = {
  h2: ({ className, ...props }) => (
    <h2 className={cn("mt-14 scroll-mt-24 text-h1 text-fg first:mt-0", className)} {...props} />
  ),
  h3: ({ className, ...props }) => <h3 className={cn("mt-10 text-h2 text-fg", className)} {...props} />,
  p: ({ className, ...props }) => <p className={cn("mt-5 text-[17px] leading-8 text-fg-2", className)} {...props} />,
  ul: ({ className, ...props }) => (
    <ul
      className={cn("mt-5 list-disc space-y-2.5 ps-6 text-[17px] leading-8 text-fg-2 marker:text-fg-3", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={cn("mt-5 list-decimal space-y-2.5 ps-6 text-[17px] leading-8 text-fg-2 marker:text-fg-3", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }) => <li className={cn("ps-1.5", className)} {...props} />,
  a: ({ href = "", className, ...props }) => (
    <SmartLink href={href} className={cn("font-medium text-blue underline", className)} {...props} />
  ),
  strong: ({ className, ...props }) => <strong className={cn("font-semibold text-fg", className)} {...props} />,
  blockquote: ({ className, ...props }) => (
    <blockquote className={cn("mt-6 border-s-2 border-ink ps-5 [&>p]:mt-0 [&>p]:text-fg", className)} {...props} />
  ),
  hr: ({ className, ...props }) => <hr className={cn("my-12 border-border", className)} {...props} />,
  code: ({ className, ...props }) => (
    <code
      className={cn("rounded-md bg-surface-2 px-1.5 py-0.5 font-mono text-[0.9em] text-fg", className)}
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
