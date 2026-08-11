"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Cybersecurity",
    href: "/services/cybersecurity",
    text: "Assess exposure, harden systems and strengthen operational readiness.",
  },
  {
    title: "Security Assessments",
    href: "/services/cybersecurity",
    text: "Vulnerability assessment and penetration testing with actionable reporting.",
  },
  {
    title: "Software Engineering",
    href: "/services/software-engineering",
    text: "Secure applications designed around organizational workflows.",
  },
  {
    title: "Enterprise Systems",
    href: "/services/software-engineering",
    text: "Platforms that replace fragmented tools and manual process debt.",
  },
  {
    title: "Cloud Infrastructure",
    href: "/services/cloud-infrastructure",
    text: "Resilient foundations for availability, recovery and growth.",
  },
  {
    title: "Network Architecture",
    href: "/services/network-infrastructure",
    text: "Segmentation, access and dependable connectivity design.",
  },
  {
    title: "Systems Integration",
    href: "/services/systems-integration",
    text: "Trusted data movement across the platforms your teams use.",
  },
  {
    title: "Digital Transformation",
    href: "/services/digital-transformation",
    text: "Practical modernization with clear ownership and outcomes.",
  },
  {
    title: "IT Consulting",
    href: "/services/it-consulting",
    text: "Decisions leaders can defend — architecture, vendors and delivery.",
  },
  {
    title: "Managed Technology Services",
    href: "/consultation",
    text: "Ongoing partnership for systems that must keep moving.",
  },
];

export function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section">
      <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="eyebrow">Services</div>
          <h2 className="section-title mt-4">A complete technology practice.</h2>
          <p className="lead">
            From cybersecurity and engineering to infrastructure, integration and transformation —
            delivered with enterprise discipline.
          </p>
          <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-sm)]">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--brand)] uppercase">
              Selected
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
              {services[active].title}
            </h3>
            <p className="mt-4 text-[var(--text-muted)]">{services[active].text}</p>
            <Link
              href={services[active].href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]"
            >
              Learn more <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ul className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {services.map((service, index) => (
              <li key={service.title}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={cn(
                    "flex w-full items-center justify-between gap-4 py-5 text-left transition",
                    active === index
                      ? "text-[var(--heading)]"
                      : "text-[var(--text-muted)] hover:text-[var(--heading)]",
                  )}
                >
                  <span className="text-xl font-semibold tracking-[-0.02em] md:text-2xl">
                    {service.title}
                  </span>
                  <span
                    className={cn(
                      "text-xs font-semibold tracking-[0.16em]",
                      active === index ? "text-[var(--brand)]" : "text-transparent",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}