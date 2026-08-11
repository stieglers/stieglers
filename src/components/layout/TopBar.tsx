import { Mail, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/layout/SocialIcons";
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
      className="inline-flex size-8 items-center justify-center rounded-full border border-white/70 text-white transition hover:border-white hover:bg-white/10"
    >
      {children}
    </a>
  );
}

export function TopBar() {
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
    <div className="bg-[var(--blue)] text-white">
      <div className="container flex h-11 items-center justify-between gap-4 text-sm">
        <a
          href={siteConfig.url}
          className="font-medium tracking-[0.01em] text-white/95 transition hover:text-white"
        >
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
  );
}