"use client";

import { useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const diagrams = [
  {
    name: "Application architecture",
    nodes: ["Interfaces", "Services", "APIs", "Data", "Identity"],
    detail:
      "Role-aware interfaces over service layers, with secure APIs, auditability and clear domain boundaries.",
  },
  {
    name: "Cloud architecture",
    nodes: ["Edge", "Apps", "Data", "Backup", "Observability"],
    detail:
      "Hosting patterns designed for availability, recovery readiness and operational ownership.",
  },
  {
    name: "Cybersecurity architecture",
    nodes: ["Identity", "Apps", "Data", "Infra", "Monitoring"],
    detail:
      "Controls layered across identity, applications, data, infrastructure and monitoring pathways.",
  },
  {
    name: "Network architecture",
    nodes: ["Core", "Access", "Segments", "Remote", "Edge"],
    detail:
      "Segmentation, secure access and resilient connectivity for environments that must stay online.",
  },
  {
    name: "Integration architecture",
    nodes: ["Sources", "Contracts", "Events", "Validation", "Ops"],
    detail:
      "Trusted data exchange with explicit contracts, failure handling and supportable ownership.",
  },
];

export function EngineeringSection() {
  const [active, setActive] = useState(diagrams[0].name);
  const current = diagrams.find((item) => item.name === active) ?? diagrams[0];

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="How we engineer"
            title="Architecture that communicates technical seriousness."
            lead="Clean diagrams for the systems Syntrax designs and delivers — without exposing confidential infrastructure details."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-2">
            {diagrams.map((diagram) => (
              <button
                key={diagram.name}
                type="button"
                onClick={() => setActive(diagram.name)}
                className={cn(
                  "w-full border px-4 py-3 text-left text-sm font-semibold transition",
                  active === diagram.name
                    ? "border-[var(--blue)] bg-[var(--accent-soft)]"
                    : "border-[var(--border)] bg-[var(--bg-elevated)]",
                )}
              >
                {diagram.name}
              </button>
            ))}
          </div>
          <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-8">
            <h3 className="text-2xl font-semibold tracking-[-0.03em]">{current.name}</h3>
            <p className="mt-3 text-[var(--text-muted)]">{current.detail}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {current.nodes.map((node, index) => (
                <div key={node} className="flex items-center gap-3">
                  <div className="border border-[var(--border-strong)] bg-[var(--bg)] px-4 py-3 text-sm font-semibold">
                    {node}
                  </div>
                  {index < current.nodes.length - 1 ? (
                    <div className="hidden h-px w-6 bg-[var(--border-strong)] sm:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}