import Link from "next/link";
import { industries } from "@/content/industries";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IndustriesSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Industries we serve"
            title="Sector-aware technology for institutions and businesses."
            lead="We go deep where reliability, trust and operational continuity matter."
          />
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.slug} delay={index * 40}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group flex min-h-28 items-end border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition hover:border-[var(--blue)] hover:bg-[var(--accent-soft)]"
              >
                <span className="text-lg font-semibold tracking-[-0.02em] group-hover:text-[var(--blue)]">
                  {industry.name}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}