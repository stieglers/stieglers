import { Button } from "@/components/ui/Button";
import { ArchitectureStack } from "@/components/visuals/ArchitectureStack";
import { Reveal } from "@/components/shared/Reveal";

const trust = ["Cybersecurity", "Enterprise Systems", "Digital Transformation", "East Africa"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, rgba(13,59,130,0.96) 0%, rgba(18,73,156,0.92) 48%, rgba(29,95,208,0.88) 100%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 grid-lines opacity-20 mix-blend-soft-light" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 340px at 18% 20%, rgba(61,183,245,0.22), transparent 60%), radial-gradient(560px 280px at 88% 10%, rgba(255,255,255,0.12), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="container relative grid items-center gap-10 py-16 lg:min-h-[calc(100svh-8.5rem)] lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 lg:py-20">
        <Reveal>
          <div className="eyebrow text-white/90">Syntrax Technologies</div>
          <h1 className="mt-4 max-w-3xl text-[clamp(2.35rem,5.8vw,4.75rem)] font-semibold tracking-[-0.05em] text-white">
            Secure technology.
            <br />
            Built for business.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            We design, build and secure digital systems that help organizations operate with
            confidence, efficiency and resilience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/solutions" variant="inverse" arrow>
              Explore Solutions
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="border-white/35 text-white hover:border-white hover:bg-white/10 hover:text-white"
            >
              Talk to an Expert
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/20 pt-6 text-xs font-semibold tracking-[0.08em] text-white/75 uppercase">
            {trust.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[var(--cyan)]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-[var(--radius-lg)] border border-white/15 bg-white/95 p-1 shadow-[var(--shadow)] backdrop-blur-sm dark:bg-[var(--bg-elevated)]">
            <ArchitectureStack />
          </div>
        </Reveal>
      </div>
    </section>
  );
}