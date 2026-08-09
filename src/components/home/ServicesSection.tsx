import Link from "next/link";
import {
  ArrowUpRight,
  Cloud,
  Cpu,
  Network,
  Shield,
  Sparkles,
  Workflow,
  Cable,
  Compass,
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    title: "Cybersecurity",
    text: "Assessments, hardening guidance and security readiness for critical systems.",
    href: "/services/cybersecurity",
    icon: Shield,
  },
  {
    title: "Software Engineering",
    text: "Secure business applications designed around real organizational workflows.",
    href: "/services/software-engineering",
    icon: Cpu,
  },
  {
    title: "Cloud & Infrastructure",
    text: "Resilient foundations for hosting, recovery and operational continuity.",
    href: "/services/cloud-infrastructure",
    icon: Cloud,
  },
  {
    title: "IT Consulting",
    text: "Clear technology advice for architecture, vendors and delivery decisions.",
    href: "/services/it-consulting",
    icon: Compass,
  },
  {
    title: "Systems Integration",
    text: "Connect platforms so information moves with control and trust.",
    href: "/services/systems-integration",
    icon: Cable,
  },
  {
    title: "Digital Transformation",
    text: "Modernize processes and replace fragile manual workarounds.",
    href: "/services/digital-transformation",
    icon: Sparkles,
  },
  {
    title: "Network Architecture",
    text: "Networks designed for performance, segmentation and secure access.",
    href: "/services/network-infrastructure",
    icon: Network,
  },
  {
    title: "Security Assessments",
    text: "Vulnerability assessment and penetration testing with actionable reporting.",
    href: "/services/cybersecurity",
    icon: Workflow,
  },
];

export function ServicesSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="A complete technology practice."
            lead="From cybersecurity and engineering to infrastructure, integration and transformation."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 40}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition hover:border-[var(--blue)]"
                >
                  <Icon className="size-5 text-[var(--blue)]" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em]">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-[var(--text-muted)]">{item.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--blue)]">
                    Learn more
                    <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}