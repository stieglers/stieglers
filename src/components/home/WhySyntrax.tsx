import { Reveal } from "@/components/shared/Reveal";

const principles = [
  "Security-first engineering",
  "Business-focused technology",
  "Scalable architecture",
  "Local understanding",
  "Enterprise discipline",
  "Long-term partnership",
];

export function WhySyntrax() {
  return (
    <section className="section border-y border-[var(--border)] bg-[var(--bg-muted)]/50">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <div>
            <div className="eyebrow">Why organizations choose Syntrax</div>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.04em]">
              Built for trust, delivery and lasting operational confidence.
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle} delay={index * 50}>
              <div className="border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-6">
                <div className="text-xs font-bold tracking-[0.16em] text-[var(--blue)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-3 text-xl font-semibold tracking-[-0.03em]">{principle}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}