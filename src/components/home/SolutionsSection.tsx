import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const solutions = [
  {
    number: "01",
    title: "Cybersecurity",
    text: "Protect systems, applications, infrastructure and digital operations against modern security threats.",
    href: "/services/cybersecurity",
  },
  {
    number: "02",
    title: "Enterprise Systems",
    text: "Design and develop reliable business applications tailored to organizational workflows.",
    href: "/services/software-engineering",
  },
  {
    number: "03",
    title: "Digital Transformation",
    text: "Modernize manual processes and connect disconnected systems.",
    href: "/services/digital-transformation",
  },
  {
    number: "04",
    title: "IT Infrastructure",
    text: "Design secure, scalable and resilient technology infrastructure.",
    href: "/services/cloud-infrastructure",
  },
];

export function SolutionsSection() {
  return (
    <section className="section bg-[var(--bg-muted)]/60">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="What we solve"
            title="Outcomes across security, systems and infrastructure."
            lead="One technology partner for organizations that need secure systems, confident operations and clear delivery."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <Reveal key={solution.number} delay={index * 70}>
              <Link
                href={solution.href}
                className="group flex h-full flex-col justify-between border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--blue)] md:p-8"
              >
                <div>
                  <div className="text-4xl font-semibold tracking-[-0.06em] text-[var(--blue)]/80">
                    {solution.number}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                    {solution.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[var(--text-muted)]">{solution.text}</p>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)]">
                  Learn more
                  <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}