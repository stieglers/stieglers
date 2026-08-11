import { Reveal } from "@/components/shared/Reveal";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function NewsletterBand() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[1.75rem] px-7 py-10 md:px-12 md:py-14">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(700px 280px at 10% 20%, rgba(10,0,244,0.28), transparent 60%)",
              }}
              aria-hidden
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="eyebrow">Newsletter</div>
                <h2 className="mt-4 max-w-[16ch] text-[clamp(1.7rem,3.2vw,2.45rem)] font-bold tracking-[-0.04em]">
                  Technology insights, delivered monthly
                </h2>
                <p className="mt-4 max-w-xl text-[var(--text-muted)]">
                  Practical guidance on security, infrastructure, and digital operations for
                  business leaders.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
