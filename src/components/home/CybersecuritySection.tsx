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
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 360px at 70% 30%, rgba(10,0,244,0.08), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="container relative grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <div className="eyebrow">SyntraxSec</div>
          <h2 className="mt-4 text-[clamp(1.8rem,3.6vw,2.75rem)] font-bold tracking-[-0.04em]">
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
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-sm)] md:p-8">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--brand)] uppercase">
              Security at every layer
            </p>
            <ol className="mt-8 space-y-0">
              {layers.map((layer, index) => (
                <li key={layer}>
                  <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--brand-soft)] px-4 py-4">
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
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--heading)]"
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
