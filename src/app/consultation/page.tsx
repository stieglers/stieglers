import { PageHero } from "@/components/shared/PageHero";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Book a Consultation",
  description:
    "Book a Syntrax consultation for cybersecurity, software, infrastructure, digital transformation or general technology advice.",
  path: "/consultation",
});

export default async function ConsultationPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  return (
    <>
      <PageHero
        eyebrow="Consultation"
        title="Book a consultation."
        lead="Structured for future calendar integration. Submit a request and our team will follow up."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Book a consultation" },
        ]}
      />
      <section className="section">
        <div className="container max-w-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-8">
          <ConsultationForm defaultType={type} />
        </div>
      </section>
    </>
  );
}