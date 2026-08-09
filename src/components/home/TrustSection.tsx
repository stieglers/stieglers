import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    title: "Secure by Design",
    text: "Security is engineered into systems, access models and delivery practices from the start.",
  },
  {
    title: "Enterprise Ready",
    text: "Built for institutions and businesses that need clarity, accountability and operational discipline.",
  },
  {
    title: "Scalable Architecture",
    text: "Platforms and infrastructure designed to grow with demand without losing control.",
  },
  {
    title: "Local Expertise",
    text: "East African context with delivery standards suited to serious organizational partners.",
  },
];

export function TrustSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Credibility"
            title="Technology built for organizations that cannot afford to stop."
            lead="Syntrax combines cybersecurity discipline, software craftsmanship and practical delivery for institutions and businesses across East Africa."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="h-full border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition hovering:border-[var(--border-strong)] hover:border-[var(--border-strong)]">
                <div className="text-xs font-bold tracking-[0.16em] text-[var(--blue)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 text-sm text-[var(--text-muted)]">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}