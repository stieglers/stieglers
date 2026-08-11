import { PageHero } from "@/components/shared/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "System Status",
  description: "Syntrax system status page for website, APIs, products, client portal and support.",
  path: "/status",
});

const systems = [
  "Website",
  "APIs",
  "Products",
  "Client Portal",
  "Support",
];

export default function StatusPage() {
  return (
    <>
      <PageHero
        eyebrow="Status"
        title="Syntrax system status."
        lead="Frontend ready for a future monitoring backend. No fake uptime percentages are displayed."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Status" },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="mb-6 text-sm text-[var(--text-muted)]">
            Status states supported by this architecture: Operational · Degraded · Partial outage ·
            Major outage
          </div>
          <div className="divide-y divide-[var(--border)] border border-[var(--border)] bg-[var(--bg-elevated)]">
            {systems.map((system) => (
              <div key={system} className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="font-semibold">{system}</span>
                <span className="status-message status-message--success !inline-flex !px-3 !py-1 text-xs font-semibold">
                  Operational
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-[var(--text-muted)]">
            Current statuses are default placeholders until connected to a live status source.
          </p>
        </div>
      </section>
    </>
  );
}