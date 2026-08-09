import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { footerNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--navy)] text-slate-300">
      <div className="container section">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
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
            <p>
              Official social profiles will appear here once verified public accounts are
              available.
            </p>
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