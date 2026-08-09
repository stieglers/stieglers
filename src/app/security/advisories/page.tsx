import { PageHero } from "@/components/shared/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Security Advisories",
  description:
    "Future-ready Syntrax security advisories. Only real advisories will be published here.",
  path: "/security/advisories",
});

export default function AdvisoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Security advisories"
        title="Advisory publications."
        lead="This page is ready for real advisories in the format SYNTRAX-SA-YYYY-NNN. No placeholder advisories are published."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Security", href: "/security" },
          { label: "Advisories" },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="border border-dashed border-[var(--border-strong)] bg-[var(--bg-elevated)] p-8 text-center">
            <p className="font-semibold">No advisories published.</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              When an advisory is issued, it will include Advisory ID, severity, affected product,
              published date, status, summary and resolution.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}