import { Button } from "@/components/ui/Button";
import { HeroArchitecture } from "@/components/visuals/HeroArchitecture";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[var(--header-h)]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 520px at 78% 18%, rgba(10,0,244,0.10), transparent 58%), radial-gradient(700px 380px at 8% 90%, rgba(10,0,244,0.05), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="relative grid lg:min-h-[calc(100svh-var(--header-h))] lg:grid-cols-2">
        <div className="container relative flex items-center py-14 lg:max-w-none lg:px-8 xl:pl-[max(2rem,calc((100vw-1180px)/2+2rem))] xl:pr-10">
          <Reveal>
            <h1 className="motion-rise display max-w-[12ch] text-[var(--heading)]">
              <span className="text-[var(--brand)]">{siteConfig.shortName}</span>
              <span className="mt-2 block text-[0.42em] font-semibold tracking-[-0.03em] text-[var(--heading)]">
                Technologies
              </span>
            </h1>
            <p className="motion-rise motion-delay-1 mt-6 max-w-[22ch] font-[family-name:var(--font-heading)] text-[clamp(1.35rem,2.4vw,1.85rem)] font-semibold tracking-[-0.035em] text-[var(--heading)]">
              Secure systems. Confident digital operations.
            </p>
            <p className="motion-rise motion-delay-2 lead">
              We design, build and secure the technology systems East African organizations depend
              on to operate, grow and stay resilient.
            </p>
            <div className="motion-rise motion-delay-3 mt-8 flex flex-wrap gap-3">
              <Button href="/solutions" arrow>
                Explore Syntrax
              </Button>
              <Button href="/contact" variant="secondary" arrow>
                Talk to an expert
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[420px] border-t border-[var(--border)] lg:min-h-full lg:border-t-0 lg:border-l">
          <div
            className="pointer-events-none absolute -right-10 top-10 h-64 w-64 rounded-full bg-[rgba(10,0,244,0.12)] blur-3xl brand-pulse"
            aria-hidden
          />
          <Reveal delay={80} className="h-full">
            <div className="h-full [&_>div]:h-full [&_>div]:rounded-none [&_>div]:border-0 [&_>div]:aspect-auto">
              <HeroArchitecture />
            </div>
          </Reveal>
        </div>
      </div>
      <div className="glow-line" aria-hidden />
    </section>
  );
}
