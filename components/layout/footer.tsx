import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { FOOTER_PRODUCT_LINKS, LEGAL_LINKS, SIGN_IN_URL, SIGN_UP_URL, SITE } from "@/lib/site";

type FooterLink = { label: string; href: string };

const COMPANY_LINKS: FooterLink[] = [
  { label: "Contact", href: `mailto:${SITE.email}` },
  { label: "Log in", href: SIGN_IN_URL },
  { label: "Get started", href: SIGN_UP_URL },
];

function FooterColumn({ title, links }: { title: string; links: readonly FooterLink[] }) {
  return (
    <nav aria-label={title}>
      <p className="text-overline text-nav-muted">{title}</p>
      <ul className="mt-4 space-y-3 text-[15px]">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-nav-border bg-midnight text-nav-fg">
      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))] lg:py-16">
        <div className="max-w-xs sm:col-span-2 lg:col-span-1">
          <Logo tone="onDark" height={26} />
          <p className="mt-4 text-[15px] text-nav-muted">{SITE.tagline}</p>
          <p className="mt-6 text-[14px] leading-6 text-nav-muted">
            Your rankings on Google and in AI answers, and an agent that closes the gap.
          </p>
        </div>
        <FooterColumn title="Product" links={FOOTER_PRODUCT_LINKS} />
        <FooterColumn title="Company" links={COMPANY_LINKS} />
        <FooterColumn title="Legal" links={LEGAL_LINKS} />
      </Container>

      <Container className="border-t border-nav-border py-6 text-[13px] text-nav-muted">
        <p>
          © {SITE.copyrightYear} {SITE.company}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
