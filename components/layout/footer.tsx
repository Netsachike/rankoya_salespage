import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { LEGAL_LINKS, SITE } from "@/lib/site";

/** Footer shell. Phase 6 adds the product and company columns. */
export function Footer() {
  return (
    <footer className="border-t border-nav-border bg-midnight text-nav-fg">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Logo tone="onDark" height={26} />
          <p className="mt-4 text-[15px] text-nav-muted">{SITE.tagline}</p>
        </div>

        <nav aria-label="Legal">
          <p className="text-overline text-nav-muted">Legal</p>
          <ul className="mt-4 space-y-3 text-[15px]">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container className="border-t border-nav-border py-6 text-[13px] text-nav-muted">
        <p>
          © {SITE.copyrightYear} {SITE.company}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
