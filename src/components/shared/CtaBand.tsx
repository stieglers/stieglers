import { Button } from "@/components/ui/Button";

export function CtaBand({
  title = "Have a complex technology problem?",
  text = "Let's solve it — with clear architecture, security discipline and accountable delivery.",
  primary = { label: "Start a conversation", href: "/contact" },
  secondary = { label: "Explore services", href: "/services" },
}: {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section relative overflow-hidden">
      <div className="container relative">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--bg-elevated)] px-8 py-12 shadow-[var(--shadow-sm)] md:px-14 md:py-16">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(700px 280px at 12% 20%, rgba(10,0,244,0.10), transparent 60%), radial-gradient(520px 240px at 90% 80%, rgba(10,0,244,0.06), transparent 55%)",
            }}
            aria-hidden
          />
          <div className="relative max-w-3xl">
            <div className="eyebrow">Think with us</div>
            <h2 className="mt-4 max-w-[14ch] text-[clamp(2.2rem,4.5vw,3.75rem)] font-bold tracking-[-0.045em]">
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
