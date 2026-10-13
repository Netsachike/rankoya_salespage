import { ChevronRight } from "lucide-react";

import { SmartLink } from "@/components/ui/smart-link";
import { breadcrumbJsonLd, type Crumb, serializeJsonLd } from "@/lib/json-ld";

/** Visible trail plus BreadcrumbList JSON-LD. The last crumb is the current page. */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd(crumbs)) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-[14px] text-fg-3">
        {crumbs.map((crumb, i) => {
          const current = i === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {current ? (
                <span aria-current="page" className="font-medium text-fg-2">
                  {crumb.label}
                </span>
              ) : (
                <>
                  <SmartLink href={crumb.href} className="transition-colors hover:text-fg">
                    {crumb.label}
                  </SmartLink>
                  <ChevronRight aria-hidden className="size-3.5" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
