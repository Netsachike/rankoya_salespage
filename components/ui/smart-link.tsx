import Link from "next/link";

/**
 * Client-side navigation for internal pages, a plain anchor for everything
 * else: other origins (the app), `mailto:` and files served by route handlers
 * such as /llms.txt.
 */
export function SmartLink({ href, ...props }: Omit<React.ComponentProps<"a">, "href"> & { href: string }) {
  const lastSegment = href.split(/[?#]/)[0].split("/").pop() ?? "";
  const isPage = href.startsWith("/") && !href.startsWith("//") && !lastSegment.includes(".");
  if (isPage) return <Link href={href} {...props} />;
  return <a href={href} {...props} />;
}
