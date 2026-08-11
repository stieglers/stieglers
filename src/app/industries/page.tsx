import Link from "next/link";
import { industries } from "@/content/industries";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Industries",
  description:
    "Syntrax industry solutions for financial services, education, government, retail, healthcare and manufacturing.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector-aware technology for institutions and businesses."
        lead="Explore how Syntrax approaches challenges, security and digital opportunities in each sector."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
        ]}
      />
      <section className="section">
        <div className="container grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--blue)]"
            >
              <h2 className="text-xl font-semibold">{industry.name}</h2>
              <p className="mt-3 text-sm text-[var(--text-muted)]">{industry.summary}</p>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}