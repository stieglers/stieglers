"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

const nodes = [
  {
    id: "syntraxsec",
    label: "SyntraxSec",
    href: "/products/syntraxsec",
    description: "Cybersecurity training and operations readiness.",
    capabilities: ["Training", "Labs", "Assessments", "Team readiness"],
  },
  {
    id: "enterprise",
    label: "Enterprise Systems",
    href: "/services/software-engineering",
    description: "Custom business applications engineered for real workflows.",
    capabilities: ["Applications", "APIs", "Access control", "Documentation"],
  },
  {
    id: "enms",
    label: "ENMS",
    href: "/products/enms",
    description: "Education management for schools and institutions.",
    capabilities: ["Students", "Academics", "Fees", "Attendance"],
  },
  {
    id: "pos",
    label: "POS",
    href: "/products/pos",
    description: "Point of sale and multi-branch business operations.",
    capabilities: ["Sales", "Inventory", "Branches", "Reporting"],
  },
  {
    id: "cyber",
    label: "Cybersecurity",
    href: "/services/cybersecurity",
    description: "Assessments, hardening and security architecture.",
    capabilities: ["VA/PT", "Architecture", "Monitoring readiness", "Remediation"],
  },
  {
    id: "infra",
    label: "Infrastructure",
    href: "/services/cloud-infrastructure",
    description: "Secure, resilient technology foundations.",
    capabilities: ["Hosting", "Networks", "Backup", "Observability"],
  },
  {
    id: "cloud",
    label: "Cloud",
    href: "/services/cloud-infrastructure",
    description: "Cloud readiness and scalable platform design.",
    capabilities: ["Migration", "Architecture", "Security", "Operations"],
  },
  {
    id: "transform",
    label: "Digital Transformation",
    href: "/services/digital-transformation",
    description: "Practical modernization of critical business processes.",
    capabilities: ["Process design", "Systems", "Integration", "Adoption"],
  },
];

export function Ecosystem() {
  const [activeId, setActiveId] = useState(nodes[0].id);
  const active = nodes.find((node) => node.id === activeId) ?? nodes[0];

  return (
    <section className="section bg-[var(--deep-2)]">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Syntrax ecosystem</div>
          <h2 className="section-title mt-4">One technology practice. Multiple connected capabilities.</h2>
          <p className="lead">
            Syntrax is an integrated technology company — products, services and security
            engineered to work as one system.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[420px] border border-[var(--border)] bg-[var(--deep)] p-6 md:p-10">
            <div className="absolute inset-0 tech-grid opacity-25" aria-hidden />
            <div className="relative grid h-full place-items-center">
              <div className="absolute inset-[12%] rounded-full border border-[rgba(10,0,244,0.35)]" aria-hidden />
              <div className="absolute inset-[26%] rounded-full border border-[rgba(10,0,244,0.22)]" aria-hidden />
              <div className="z-10 border border-[var(--brand)] bg-[rgba(10,0,244,0.18)] px-6 py-5 text-center shadow-[0_0_40px_rgba(10,0,244,0.35)]">
                <div className="text-[11px] font-semibold tracking-[0.18em] text-[var(--brand)] uppercase">
                  Center
                </div>
                <div className="mt-2 text-xl font-semibold tracking-[-0.03em]">
                  Syntrax Technologies
                </div>
              </div>
              <div className="absolute inset-0">
                {nodes.map((node, index) => {
                  const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2;
                  const radius = 42;
                  const x = 50 + Math.cos(angle) * radius;
                  const y = 50 + Math.sin(angle) * radius;
                  const isActive = activeId === node.id;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setActiveId(node.id)}
                      onMouseEnter={() => setActiveId(node.id)}
                      className={cn(
                        "absolute -translate-x-1/2 -translate-y-1/2 border px-3 py-2 text-xs font-semibold tracking-[0.04em] transition",
                        isActive
                          ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                          : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--brand)]",
                      )}
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      {node.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[var(--brand)] uppercase">
              Selected capability
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">{active.label}</h3>
            <p className="mt-4 text-[var(--text-muted)]">{active.description}</p>
            <ul className="mt-6 space-y-2">
              {active.capabilities.map((item) => (
                <li key={item} className="border border-[var(--border)] px-4 py-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={active.href}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]"
            >
              Explore {active.label}
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}