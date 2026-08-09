import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Placeholder framework only — no invented clients or results.
 */
const placeholders = [
  {
    category: "Enterprise Systems",
    title: "Business platform modernization",
    text: "Case study content will appear here once approved project narratives are available.",
  },
  {
    category: "Cybersecurity",
    title: "Security assessment engagement",
    text: "Placeholder for a future security engagement write-up with verified outcomes.",
  },
  {
    category: "Digital Transformation",
    title: "Operational digitization program",
    text: "Placeholder for a transformation story covering challenge, approach and solution.",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Case studies"
            title="Selected work, when approved for publication."
            lead="We do not invent clients or results. This section is structured for verified case studies."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {placeholders.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article className="flex h-full flex-col border border-dashed border-[var(--border-strong)] bg-[var(--bg-elevated)] p-6">
                <p className="text-xs font-bold tracking-[0.14em] text-[var(--blue)] uppercase">
                  {item.category}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm text-[var(--text-muted)]">{item.text}</p>
                <Link
                  href="/case-studies"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)]"
                >
                  View case study framework
                  <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}