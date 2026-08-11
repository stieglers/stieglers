import Link from "next/link";
import { industries } from "@/content/industries";
import { Reveal } from "@/components/shared/Reveal";

export function IndustriesSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Industries</div>
          <h2 className="section-title mt-4 max-w-[18ch]">
            Technology that understands the business behind the system.
          </h2>
        </Reveal>
        <div className="mt-14 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {industries.map((industry, index) => (
            <Reveal key={industry.slug} delay={index * 40}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group grid gap-4 py-8 transition md:grid-cols-[120px_1fr_auto] md:items-center"
              >
                <span className="text-sm font-semibold tracking-[0.16em] text-[var(--brand)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[clamp(1.6rem,3vw,2.5rem)] font-semibold tracking-[-0.03em] group-hover:text-[var(--brand)]">
                    {industry.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[var(--text-muted)]">{industry.summary}</p>
                </div>
                <span className="text-sm font-semibold text-[var(--brand)] opacity-0 transition group-hover:opacity-100">
                  Explore →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}