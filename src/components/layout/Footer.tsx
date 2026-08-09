import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/layout/SocialIcons";
import { footerNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

function CircleIcon({
  href,
  label,
  children,
  external = false,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex size-9 items-center justify-center rounded-full border border-white/65 text-white transition hover:border-white hover:bg-white/10"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const whatsapp = siteConfig.whatsappEnabled
    ? `https://wa.me/${siteConfig.phone.whatsapp}`
    : null;
  const socialLinks = [
    siteConfig.social.linkedin
      ? { href: siteConfig.social.linkedin, label: "LinkedIn", icon: LinkedInIcon }
      : null,
    siteConfig.social.facebook
      ? { href: siteConfig.social.facebook, label: "Facebook", icon: FacebookIcon }
      : null,
    siteConfig.social.instagram
      ? { href: siteConfig.social.instagram, label: "Instagram", icon: InstagramIcon }
      : null,
  ].filter(Boolean) as {
    href: string;
    label: string;
    icon: typeof LinkedInIcon;
  }[];

  return (
    <footer className="bg-[var(--navy)] text-slate-300">
      <div className="bg-[var(--blue)]">
        <div className="container flex flex-wrap items-center justify-between gap-3 py-3 text-sm text-white">
          <a href={siteConfig.url} className="font-medium tracking-[0.01em]">
            www.syntrax.co.tz
          </a>
          <div className="flex items-center gap-3">
            <span className="hidden h-4 w-px bg-white/40 sm:block" aria-hidden />
            <div className="flex items-center gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <CircleIcon key={item.label} href={item.href} label={item.label} external>
                    <Icon className="size-3.5" />
                  </CircleIcon>
                );
              })}
              {whatsapp ? (
                <CircleIcon href={whatsapp} label="WhatsApp" external>
                  <WhatsAppIcon className="size-3.5" />
                </CircleIcon>
              ) : null}
              <CircleIcon href={`tel:${siteConfig.phone.e164}`} label="Call Syntrax">
                <Phone className="size-3.5" strokeWidth={1.75} />
              </CircleIcon>
              <CircleIcon href={`mailto:${siteConfig.email.general}`} label="Email Syntrax">
                <Mail className="size-3.5" strokeWidth={1.75} />
              </CircleIcon>
            </div>
          </div>
        </div>
      </div>

      <div className="container section">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <Logo className="[&_span]:text-white [&_span:last-child]:text-slate-400" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p>{siteConfig.address.display}</p>
              <p>
                <a className="hover:text-white" href={`mailto:${siteConfig.email.general}`}>
                  {siteConfig.email.general}
                </a>
              </p>
              <p>
                <a className="hover:text-white" href={`tel:${siteConfig.phone.e164}`}>
                  {siteConfig.phone.display}
                </a>
              </p>
              <p>{siteConfig.hours}</p>
            </div>
            <div className="mt-6">
              <Link
                href="/client-portal"
                className="text-sm font-semibold text-white underline-offset-4 hover:underline"
              >
                Client Portal
              </Link>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            <FooterColumn title="Company" items={footerNav.company} />
            <FooterColumn title="Solutions" items={footerNav.solutions} />
            <FooterColumn title="Products" items={footerNav.products} />
            <FooterColumn title="Industries" items={footerNav.industries} />
            <FooterColumn title="Resources" items={footerNav.resources} />
            <FooterColumn title="Legal" items={footerNav.legal} />
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[1.2fr_1fr]">
          <NewsletterForm />
          <div className="flex flex-col justify-between gap-4 text-sm text-slate-400 lg:items-end lg:text-right">
            <p>Secure systems. Confident digital operations across East Africa.</p>
            <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
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
      <h3 className="text-xs font-bold tracking-[0.16em] text-white uppercase">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <Link href={item.href} className="text-sm text-slate-400 transition hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}