import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { WhatsAppIcon } from "@/components/layout/SocialIcons";
import { footerNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function Footer() {
  const whatsapp = siteConfig.whatsappEnabled
    ? `https://wa.me/${siteConfig.phone.whatsapp}`
    : null;

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(720px 280px at 8% 0%, rgba(10,0,244,0.07), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="container relative section !pb-12">
        <div className="max-w-3xl">
          <Logo />
          <p className="mt-8 font-[family-name:var(--font-heading)] text-[clamp(2rem,4.5vw,3.75rem)] font-bold tracking-[-0.045em] text-[var(--heading)]">
            Secure systems.
            <br />
            Confident digital operations.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
          <FooterColumn title="Solutions" items={footerNav.solutions} />
          <FooterColumn title="Services" items={footerNav.services} />
          <FooterColumn title="Products" items={footerNav.products} />
          <FooterColumn title="Industries" items={footerNav.industries} />
          <FooterColumn title="Resources" items={footerNav.resources} />
          <FooterColumn title="Company" items={footerNav.company} />
          <FooterColumn title="Security" items={footerNav.security} />
          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.16em] text-[var(--heading)] uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-muted)]">
              <li>
                <a
                  href={`mailto:${siteConfig.email.general}`}
                  className="hover:text-[var(--brand)]"
                >
                  {siteConfig.email.general}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.e164}`} className="hover:text-[var(--brand)]">
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>{siteConfig.address.display}</li>
              <li>{siteConfig.hours}</li>
            </ul>
            <div className="mt-5 flex gap-2">
              {whatsapp ? (
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--heading)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  <WhatsAppIcon className="size-3.5" />
                </a>
              ) : null}
              <a
                href={`tel:${siteConfig.phone.e164}`}
                aria-label="Call"
                className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--heading)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                <Phone className="size-3.5" />
              </a>
              <a
                href={`mailto:${siteConfig.email.general}`}
                aria-label="Email"
                className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--heading)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                <Mail className="size-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 border-t border-[var(--border)] pt-10 lg:grid-cols-[1.2fr_1fr]">
          <NewsletterForm />
          <div className="flex flex-col justify-between gap-4 text-sm text-[var(--text-muted)] lg:items-end lg:text-right">
            <div className="flex flex-wrap gap-4 lg:justify-end">
              {footerNav.legal.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-[var(--heading)]">
                  {item.label}
                </Link>
              ))}
            </div>
            <p>
              © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[11px] font-semibold tracking-[0.16em] text-[var(--heading)] uppercase">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <Link
              href={item.href}
              className="text-sm text-[var(--text-muted)] transition hover:text-[var(--brand)]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
