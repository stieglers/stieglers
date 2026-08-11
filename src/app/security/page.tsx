import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = createMetadata({
  title: "Security & Trust Center",
  description:
    "Syntrax Security & Trust Center covering security philosophy, secure development, data protection and vulnerability disclosure.",
  path: "/security",
});

const sections = [
  {
    title: "Security philosophy",
    text: "Security is engineered into systems, delivery and operations — not treated as a late-stage checklist.",
  },
  {
    title: "Secure development",
    text: "We emphasize secure design, access control, validation, logging and review discipline in software delivery.",
  },
  {
    title: "Data protection",
    text: "We minimize unnecessary data collection and handle information according to purpose, access need and policy.",
  },
  {
    title: "Infrastructure security",
    text: "Hosting, network and platform decisions prioritize resilience, segmentation and operational ownership.",
  },
  {
    title: "Access control",
    text: "Role-based access and least-privilege principles guide how systems and internal tooling are designed.",
  },
  {
    title: "Monitoring",
    text: "We help organizations build visibility and alerting readiness appropriate to their risk and environment.",
  },
  {
    title: "Incident response",
    text: "Preparedness matters. We support planning and practical response pathways without publishing sensitive playbooks.",
  },
  {
    title: "Vulnerability disclosure",
    text: "Researchers can report issues responsibly through our disclosure process.",
  },
  {
    title: "Business continuity",
    text: "Continuity planning focuses on keeping critical digital operations recoverable and supportable.",
  },
  {
    title: "Backup & recovery",
    text: "Backup and recovery considerations are part of infrastructure and platform conversations.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security & Trust Center"
        title="Trust is earned through engineering discipline."
        lead="Learn how Syntrax approaches security across products, services and operations. Sensitive infrastructure details are intentionally not published."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Security" },
        ]}
        actions={[
          { label: "Report a security issue", href: "/security/disclosure" },
          { label: "Security consultation", href: "/consultation?type=cybersecurity", variant: "secondary" },
        ]}
      />

      <section className="section">
        <div className="container grid gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 text-sm text-[var(--text-muted)]">{section.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-[var(--bg-muted)]/40">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Report a security issue"
              title="Responsible disclosure is welcome."
            />
            <p className="mt-4 text-[var(--text-muted)]">
              If you believe you have found a vulnerability in a Syntrax system or product,
              please report it privately so we can investigate.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/security/disclosure" className="text-sm font-semibold text-[var(--blue)]">
                Start disclosure process →
              </Link>
              <a
                href={`mailto:${siteConfig.email.security}`}
                className="text-sm font-semibold text-[var(--blue)]"
              >
                {siteConfig.email.security}
              </a>
            </div>
          </div>
          <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
            <h2 className="text-lg font-semibold">Related pages</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/security/advisories" className="text-[var(--blue)]">
                  Security advisories
                </Link>
              </li>
              <li>
                <Link href="/security/disclosure" className="text-[var(--blue)]">
                  Vulnerability disclosure
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[var(--blue)]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-[var(--blue)]">
                  System status
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        primary={{ label: "Talk to a Security Specialist", href: "/consultation?type=cybersecurity" }}
        secondary={{ label: "Explore SyntraxSec", href: "/products/syntraxsec" }}
      />
    </>
  );
}