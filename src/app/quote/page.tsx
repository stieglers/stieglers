import { PageHero } from "@/components/shared/PageHero";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Request a Quote",
  description: "Request a quote for Syntrax services and products. No invented pricing.",
  path: "/quote",
});

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Request a quote."
        lead="We scope engagements based on requirements, users, environment and timeline — we do not publish generic prices."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Request a quote" },
        ]}
      />
      <section className="section">
        <div className="container max-w-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-8">
          <QuoteForm defaultService={service} />
        </div>
      </section>
    </>
  );
}