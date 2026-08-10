import { Button } from "@/components/ui/Button";

export function CtaBand({
  title = "Have a complex technology problem?",
  text = "Let's solve it — with clear architecture, security discipline and accountable delivery.",
  primary = { label: "Talk to our team", href: "/contact" },
  secondary = { label: "Explore services", href: "/services" },
}: {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="glass relative overflow-hidden rounded-[1.75rem] px-8 py-12 md:px-14 md:py-16">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(700px 280px at 12% 20%, rgba(10,0,244,0.32), transparent 60%)",
            }}
            aria-hidden
          />
          <div className="relative max-w-3xl">
            <div className="eyebrow">Think with us</div>
            <h2 className="mt-4 max-w-[16ch] text-[clamp(1.75rem,3.4vw,2.6rem)] font-bold tracking-[-0.04em]">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-[var(--text-muted)]">{text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={primary.href} arrow>
                {primary.label}
              </Button>
              <Button href={secondary.href} variant="secondary">
                {secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
