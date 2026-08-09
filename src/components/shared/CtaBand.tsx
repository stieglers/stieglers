import { Button } from "@/components/ui/Button";

export function CtaBand({
  title = "Let's build something secure and scalable.",
  text = "Whether you're modernizing an existing system, building something new, or strengthening your security posture, our team can help.",
  primary = { label: "Talk to an Expert", href: "/contact" },
  secondary = { label: "Explore Services", href: "/services" },
}: {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden border border-[var(--border)] bg-[var(--navy)] px-6 py-12 text-white md:px-12 md:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(600px 240px at 20% 20%, rgba(37,99,235,0.45), transparent), radial-gradient(500px 220px at 90% 80%, rgba(56,189,248,0.2), transparent)",
            }}
            aria-hidden
          />
          <div className="relative max-w-3xl">
            <div className="eyebrow text-[var(--cyan)]">Next step</div>
            <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-[-0.04em] text-white">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base text-slate-300 md:text-lg">{text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={primary.href} variant="inverse" arrow>
                {primary.label}
              </Button>
              <Button
                href={secondary.href}
                variant="secondary"
                className="border-white/25 text-white hover:border-white hover:text-white"
              >
                {secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}