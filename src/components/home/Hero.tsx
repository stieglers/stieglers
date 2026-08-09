import { Button } from "@/components/ui/Button";
import { ArchitectureStack } from "@/components/visuals/ArchitectureStack";
import { Reveal } from "@/components/shared/Reveal";

const trust = ["Cybersecurity", "Enterprise Systems", "Digital Transformation", "East Africa"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 320px at 15% 10%, rgba(37,99,235,0.12), transparent), radial-gradient(600px 280px at 85% 0%, rgba(56,189,248,0.08), transparent)",
        }}
        aria-hidden
      />
      <div className="container relative grid items-center gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <Reveal>
          <div className="eyebrow">Syntrax Technologies</div>
          <h1 className="mt-4 max-w-3xl text-[clamp(2.4rem,6vw,5rem)] font-semibold tracking-[-0.05em]">
            Secure technology.
            <br />
            Built for business.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[var(--text-muted)]">
            We design, build and secure digital systems that help organizations operate with
            confidence, efficiency and resilience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/solutions" arrow>
              Explore Solutions
            </Button>
            <Button href="/contact" variant="secondary">
              Talk to an Expert
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-[var(--border)] pt-6 text-sm font-semibold tracking-[0.04em] text-[var(--text-muted)] uppercase">
            {trust.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <ArchitectureStack />
        </Reveal>
      </div>
    </section>
  );
}