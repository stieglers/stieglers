import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { WhatsAppIcon } from "@/components/layout/SocialIcons";
import { siteConfig } from "@/content/site";

const serviceLinks = [
  { label: "Cybersecurity", href: "/services/cybersecurity" },
  { label: "Software Engineering", href: "/services/software-engineering" },
  { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
  { label: "Network Architecture", href: "/services/network-infrastructure" },
  { label: "Systems Integration", href: "/services/systems-integration" },
  { label: "Digital Transformation", href: "/services/digital-transformation" },
  { label: "IT Consulting", href: "/services/it-consulting" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Careers", href: "/careers" },
];

export function Footer() {
  const whatsapp = siteConfig.whatsappEnabled
    ? `https://wa.me/${siteConfig.phone.whatsapp}`
    : null;

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg-dark)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(720px 280px at 10% 0%, rgba(10,0,244,0.22), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="container relative section !pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Logo compact />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
              Enterprise technology services for East Africa — cybersecurity, cloud, software
              engineering, and digital operations delivered with clarity and accountability.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.16em] text-white uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-muted)] transition hover:text-[var(--brand-hover)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.16em] text-white uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-muted)] transition hover:text-[var(--brand-hover)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.16em] text-white uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-muted)]">
              <li>
                <a
                  href={`mailto:${siteConfig.email.general}`}
                  className="hover:text-[var(--brand-hover)]"
                >
                  {siteConfig.email.general}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.e164}`} className="hover:text-[var(--brand-hover)]">
                  {siteConfig.phone.display}
                </a>
              </li>
              {whatsapp ? (
                <li>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--brand-hover)]"
                  >
                    WhatsApp ({siteConfig.phone.display})
                  </a>
                </li>
              ) : null}
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
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[var(--brand)] hover:text-[var(--brand-hover)]"
                >
                  <WhatsAppIcon className="size-3.5" />
                </a>
              ) : null}
              <a
                href={`tel:${siteConfig.phone.e164}`}
                aria-label="Call"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                <Phone className="size-3.5" />
              </a>
              <a
                href={`mailto:${siteConfig.email.general}`}
                aria-label="Email"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[var(--brand)] hover:text-[var(--brand-hover)]"
              >
                <Mail className="size-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border)] pt-8 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <p>Cybersecurity · Cloud · Software</p>
        </div>
      </div>
    </footer>
  );
}
