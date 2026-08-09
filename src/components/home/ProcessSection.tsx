import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { number: "01", title: "Discover", text: "Understand goals, constraints, systems and risk." },
  { number: "02", title: "Design", text: "Define architecture, workflows and success criteria." },
  { number: "03", title: "Build", text: "Deliver iteratively with review and quality discipline." },
  { number: "04", title: "Secure", text: "Engineer controls, access and validation into delivery." },
  { number: "05", title: "Deploy", text: "Launch with operational readiness and clear ownership." },
  { number: "06", title: "Support", text: "Sustain systems through partnership and continuous improvement." },
];

export function ProcessSection() {
  return (
    <section className="section bg-[var(--bg-muted)]/40">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="A delivery model built for clarity."
            lead="Every engagement is sequenced so security, usability and operational ownership stay visible."
          />
        </Reveal>
        <div className="mt-10 overflow-x-auto pb-2">
          <ol className="grid min-w-[720px] grid-cols-6 gap-0 border border-[var(--border)] bg-[var(--bg-elevated)] md:min-w-0">
            {steps.map((step, index) => (
              <li
                key={step.number}
                className={`relative p-4 md:p-5 ${
                  index < steps.length - 1 ? "border-r border-[var(--border)]" : ""
                }`}
              >
                <div className="text-xs font-bold tracking-[0.16em] text-[var(--blue)]">
                  {step.number}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}