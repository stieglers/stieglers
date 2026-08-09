import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/shared/Reveal";

const points = [
  "East African expertise",
  "Technology-driven",
  "Security-focused",
  "Business-oriented",
];

export function AboutTeaser() {
  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <div>
            <div className="eyebrow">About Syntrax</div>
            <h2 className="mt-3 max-w-3xl text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.04em]">
              Building the digital systems that keep business moving.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-[var(--text-muted)]">
              Syntrax Technologies designs, builds, secures and supports digital systems for
              institutions and businesses across East Africa — with security discipline and
              practical delivery at the center.
            </p>
            <div className="mt-8">
              <Button href="/about" arrow>
                Learn about us
              </Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <div
                key={point}
                className="border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-8 text-lg font-semibold tracking-[-0.02em]"
              >
                {point}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}