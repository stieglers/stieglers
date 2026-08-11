import Link from "next/link";
import { ArrowRight, GraduationCap, Pill, ShieldCheck, Store } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const deliverables = [
  {
    title: "Cybersecurity & SyntraxSec",
    text: "Assessments, hardening, training, and security readiness for critical operations.",
    href: "/services/cybersecurity",
    icon: ShieldCheck,
  },
  {
    title: "POS & retail SaaS",
    text: "Point of sale and multi-branch operations built for real retail workflows.",
    href: "/products/pos",
    icon: Store,
  },
  {
    title: "School management (ENMS)",
    text: "Academics, fees, attendance, and institutional records in one platform.",
    href: "/products/enms",
    icon: GraduationCap,
  },
  {
    title: "Pharmacy & custom software",
    text: "Pharmacy PMS and tailored enterprise systems engineered around your process.",
    href: "/products/pharmacy",
    icon: Pill,
  },
];

const marqueeItems = [
  "Cybersecurity",
  "SyntraxSec",
  "POS & Retail SaaS",
  "ENMS",
  "Pharmacy PMS",
  "Cloud & Infrastructure",
  "Software Engineering",
  "Digital Transformation",
];

export function DeliverablesSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="eyebrow">What we deliver</div>
              <h2 className="section-title mt-4">Core delivery areas for modern institutions.</h2>
            </div>
            <Link
              href="/security"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-hover)] transition hover:text-white"
            >
              View security practice
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="marquee mt-10">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-2 text-sm font-semibold tracking-[-0.01em] text-[var(--heading)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {deliverables.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <Link
                href={item.href}
                className="group glass flex h-full flex-col rounded-2xl p-6 transition hover:border-[var(--brand)]/50 hover:bg-[rgba(10,0,244,0.12)]"
              >
                <item.icon className="size-6 text-[var(--brand-hover)] transition group-hover:scale-110" />
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[var(--heading)]">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-[var(--text-muted)]">{item.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-hover)]">
                  Explore
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
