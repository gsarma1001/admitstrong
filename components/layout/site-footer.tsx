import Link from "next/link";
import { Container } from "@/components/ui/container";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Admissions Brief", href: "/#admissions-brief" },
  { label: "Contact", href: "/contact" },
  { label: "Pricing", href: "/pricing" },
  { label: "Login", href: "/login" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-bold text-primary-foreground">
              A
            </span>

            <span className="font-semibold text-primary">AdmitStrong</span>
          </div>

          <p className="mt-3 text-sm text-muted-foreground">
            Every student deserves a clear path forward.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} AdmitStrong
        </p>
      </Container>
    </footer>
  );
}