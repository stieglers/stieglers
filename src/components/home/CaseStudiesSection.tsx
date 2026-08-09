import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

const frames = [
  {
    industry: "Enterprise Systems",
    challenge: "Fragmented operational tools and unclear system ownership.",
    focus: "Architecture · Solution · Security",
  },
  {
    industry: "Cybersecurity",
    challenge: "Limited visibility into exposure and remediation priorities.",
    focus: "Assessment · Hardening · Monitoring readiness",
  },
  {
    industry: "Digital Transformation",
    challenge: "Manual processes slowing critical institutional workflows.",
    focus: "Process · Systems · Adoption",
  },
];

export function CaseStudiesSection() {
  return (
    <section className="section bg-[var(--deep-2)]">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Case studies</div>
          <h2 className="section-title mt-4">Selected work, published with discipline.</h2>
          <p className="lead">
            We do not invent clients or outcomes. This framework is ready for verified engagements.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {frames.map((item, index) => (
            <Reveal key={item.industry} delay={index * 60}>
              <article className="flex h-full flex-col border border-dashed border-[var(--border-strong)] p-6 md:p-8">
                <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--brand)] uppercase">
                  {item.industry}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">Challenge</h3>
                <p className="mt-3 flex-1 text-[var(--text-muted)]">{item.challenge}</p>
                <p className="mt-6 text-sm text-[var(--muted)]">{item.focus}</p>
                <Link
                  href="/case-studies"
                  className="mt-6 text-sm font-semibold text-[var(--brand)]"
                >
                  View framework →
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}