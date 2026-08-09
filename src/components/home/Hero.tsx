import { Button } from "@/components/ui/Button";
import { HeroArchitecture } from "@/components/visuals/HeroArchitecture";
import { Reveal } from "@/components/shared/Reveal";

const pillars = ["Security", "Engineering", "Infrastructure", "Digital Transform"];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[var(--header-h)]">
      <div className="absolute inset-0 bg-[var(--deep)]" aria-hidden />
      <div className="absolute inset-0 tech-grid opacity-30" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 15% 20%, rgba(10,0,244,0.22), transparent 55%), radial-gradient(700px 420px at 85% 10%, rgba(10,0,244,0.12), transparent 50%)",
        }}
        aria-hidden
      />

      <div className="container relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20 lg:min-h-[calc(100svh-var(--header-h))]">
        <Reveal>
          <div className="eyebrow">Syntrax Technologies</div>
          <h1 className="display mt-5 max-w-[11ch] text-white">
            We engineer
            <br />
            secure digital
            <br />
            operations.
          </h1>
          <p className="lead">
            Syntrax designs, builds and secures the technology systems that organizations depend
            on to operate, grow and stay resilient.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/solutions" arrow>
              Explore Syntrax
            </Button>
            <Button href="/contact" variant="secondary" arrow>
              Talk to an Expert
            </Button>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[var(--border)] pt-6 sm:grid-cols-4">
            {pillars.map((item) => (
              <li key={item}>
                <div className="text-[11px] font-semibold tracking-[0.16em] text-[var(--brand)] uppercase">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <HeroArchitecture />
        </Reveal>
      </div>
      <div className="glow-line" aria-hidden />
    </section>
  );
}