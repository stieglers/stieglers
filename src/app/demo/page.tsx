import { PageHero } from "@/components/shared/PageHero";
import { DemoForm } from "@/components/forms/DemoForm";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Request a Demo",
  description: "Request a Syntrax product demo for SyntraxSec, ENMS, POS or Pharmacy PMS.",
  path: "/demo",
});

export default async function DemoPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  return (
    <>
      <PageHero
        eyebrow="Demo"
        title="Request a product demo."
        lead="Tell us about your organization and the product you want to explore."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Request a demo" },
        ]}
      />
      <section className="section">
        <div className="container max-w-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-8">
          <DemoForm defaultProduct={product} />
        </div>
      </section>
    </>
  );
}