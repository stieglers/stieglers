import { Reveal } from "@/components/shared/Reveal";

const principles = [
  "Security-first engineering",
  "Business understanding",
  "Scalable architecture",
  "Local expertise",
  "Enterprise discipline",
  "Long-term partnership",
];

export function WhySyntrax() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Why Syntrax</div>
          <h2 className="mt-4 max-w-[16ch] text-[clamp(2.6rem,6vw,5.5rem)] font-semibold tracking-[-0.045em]">
            Built for organizations that cannot afford to get technology wrong.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item} delay={index * 50}>
              <div className="h-full bg-[var(--bg)] px-6 py-10">
                <div className="text-xs font-semibold tracking-[0.18em] text-[var(--brand)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-5 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}