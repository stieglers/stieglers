import { Button } from "@/components/ui/Button";

export function CtaBand({
  title = "Have a complex technology problem?",
  text = "Let's solve it — with clear architecture, security discipline and accountable delivery.",
  primary = { label: "Start a Conversation", href: "/contact" },
  secondary = { label: "Explore Services", href: "/services" },
}: {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--deep)]" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 360px at 20% 40%, rgba(10,0,244,0.35), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="container relative">
        <div className="max-w-3xl border border-[var(--border)] bg-[rgba(12,18,43,0.7)] p-8 md:p-12">
          <div className="eyebrow">Think with us</div>
          <h2 className="mt-4 text-[clamp(2.4rem,5vw,4.5rem)] font-semibold tracking-[-0.045em]">
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
    </section>
  );
}