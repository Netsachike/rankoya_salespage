import logoMask from "@/assets/brand/logo-mask.png";
import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { SmartLink } from "@/components/ui/smart-link";
import { FOOTER_COLUMNS, type NavItem, SITE } from "@/lib/site";

function FooterColumn({ title, links }: { title: string; links: readonly NavItem[] }) {
  return (
    <nav aria-label={title}>
      <p className="text-overline text-nav-muted">{title}</p>
      <ul className="mt-4 space-y-3 text-[14px]">
        {links.map((link) => (
          <li key={link.href}>
            <SmartLink href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * The lockup at container width, in one colour, fading out towards the bottom
 * edge where the footer crops it. logo-mask.png (a white, high-resolution cut of
 * the lockup) masks a white-to-transparent gradient, so it reads in one colour.
 * Decorative: it sits below the text, never behind it, so contrast is untouched.
 */
function Watermark() {
  return (
    <Container aria-hidden className="pointer-events-none select-none">
      <div
        className="-mb-[4%] w-full bg-linear-to-b from-white/15 via-white/6 to-white/0"
        style={{
          aspectRatio: `${logoMask.width} / ${logoMask.height}`,
          maskImage: `url(${logoMask.src})`,
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
        }}
      />
    </Container>
  );
}

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-nav-border bg-midnight text-nav-fg">
      <Container className="grid grid-cols-2 gap-x-8 gap-y-12 py-14 sm:grid-cols-3 lg:grid-cols-[minmax(0,1.6fr)_repeat(5,minmax(0,1fr))] lg:py-16">
        <div className="col-span-2 max-w-xs sm:col-span-3 lg:col-span-1">
          <Logo tone="onDark" height={26} />
          <p className="mt-4 text-[15px] text-nav-muted">{SITE.tagline}</p>
          <p className="mt-6 text-[14px] leading-6 text-nav-muted">
            Your rankings on Google and in AI answers, and an agent that closes the gap.
          </p>
        </div>
        {FOOTER_COLUMNS.map((column) => (
          <FooterColumn key={column.title} title={column.title} links={column.links} />
        ))}
      </Container>

      <Container className="border-t border-nav-border py-6 text-[13px] text-nav-muted">
        <p>
          © {SITE.copyrightYear} {SITE.company}. All rights reserved.
        </p>
      </Container>

      <Watermark />
    </footer>
  );
}
