import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Latest Updates", href: "/#latest-updates" },
  { label: "Login", href: "/login" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-border bg-surface/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="AdmitStrong">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
            A
          </span>

          <span className="text-xl font-semibold tracking-tight text-primary">
            AdmitStrong
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ButtonLink href="/login" variant="secondary">Log In</ButtonLink>
          <ButtonLink href="/contact">Get in Touch</ButtonLink>
        </div>
      </Container>
    </header>
  );
}