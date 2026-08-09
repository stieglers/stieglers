import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";

const layers = [
  "Identity",
  "Application",
  "API",
  "Data",
  "Infrastructure",
  "Monitoring",
];

export function CybersecuritySection() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--deep)]" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 360px at 70% 30%, rgba(10,0,244,0.28), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="container relative grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <div className="eyebrow">SyntraxSec</div>
          <h2 className="mt-4 text-[clamp(2.6rem,5.5vw,5rem)] font-semibold tracking-[-0.045em]">
            Security is engineered.
            <br />
            Not added later.
          </h2>
          <p className="lead">
            Security at every layer — from identity and applications to data, infrastructure and
            monitoring readiness.
          </p>
          <div className="mt-8">
            <Button href="/products/syntraxsec" arrow>
              Explore SyntraxSec
            </Button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="border border-[var(--border)] bg-[rgba(12,18,43,0.9)] p-6 md:p-8">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[var(--brand)] uppercase">
              Security at every layer
            </p>
            <ol className="mt-8 space-y-0">
              {layers.map((layer, index) => (
                <li key={layer}>
                  <div className="flex items-center justify-between border border-[var(--border)] bg-[rgba(10,0,244,0.08)] px-4 py-4">
                    <span className="text-lg font-semibold tracking-[-0.02em]">{layer}</span>
                    <span className="text-xs font-semibold tracking-[0.16em] text-[var(--brand)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {index < layers.length - 1 ? (
                    <div className="flex justify-center py-2 text-[var(--brand)]" aria-hidden>
                      ↓
                    </div>
                  ) : null}
                </li>
              ))}
            </ol>
            <Link
              href="/services/cybersecurity"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Explore cybersecurity services
              <ArrowRight className="size-4 text-[var(--brand)] transition group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}