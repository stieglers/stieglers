import { Reveal } from "@/components/shared/Reveal";

const layers = [
  "Users",
  "Identity",
  "Applications",
  "API Gateway",
  "Services",
  "Data",
  "Infrastructure",
];

const controls = ["Access control", "Encryption", "Logging", "Segmentation", "Monitoring"];

export function EngineeringSection() {
  return (
    <section className="section bg-[var(--deep-2)]">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Technology architecture</div>
          <h2 className="section-title mt-4">Engineered for complexity.</h2>
          <p className="lead">
            A clear architecture model for how Syntrax designs systems that remain secure,
            supportable and scalable under real operational pressure.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <div className="border border-[var(--border)] bg-[var(--deep)] p-6 md:p-8">
              <ol className="space-y-0">
                {layers.map((layer, index) => (
                  <li key={layer}>
                    <div className="flex items-center justify-between border border-[var(--border)] px-4 py-4">
                      <span className="text-lg font-semibold">{layer}</span>
                      <span className="text-xs tracking-[0.16em] text-[var(--brand)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {index < layers.length - 1 ? (
                      <div className="py-2 text-center text-[var(--brand)]" aria-hidden>
                        ↓
                      </div>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="border border-[var(--brand)] bg-[rgba(10,0,244,0.1)] p-6 md:p-8">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-[var(--brand)] uppercase">
                Security envelope
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                Controls surrounding the stack.
              </h3>
              <p className="mt-4 text-[var(--text-muted)]">
                Security is not a separate box at the end. It wraps identity, services, data and
                infrastructure as a continuous operating discipline.
              </p>
              <ul className="mt-8 space-y-3">
                {controls.map((item) => (
                  <li key={item} className="border border-[var(--border)] bg-[var(--deep)] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}