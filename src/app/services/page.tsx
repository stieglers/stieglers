import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/services";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Cybersecurity, software engineering, cloud infrastructure, digital transformation, consulting, networking and systems integration.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A complete technology practice for organizations that need to keep moving."
        lead="Explore Syntrax services across security, engineering, infrastructure and transformation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        actions={[
          { label: "Talk to an Expert", href: "/contact" },
          { label: "Book a consultation", href: "/consultation", variant: "secondary" },
        ]}
      />
      <section className="section">
        <div className="container grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--blue)]"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">{service.name}</h2>
              <p className="mt-3 flex-1 text-sm text-[var(--text-muted)]">{service.summary}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--blue)]">
                View service
                <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}