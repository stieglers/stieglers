"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const layers = [
  {
    name: "Identity",
    detail: "Access control, authentication and privileged account discipline.",
  },
  {
    name: "Application",
    detail: "Secure software design, validation and application risk reduction.",
  },
  {
    name: "API",
    detail: "Protected interfaces, contracts and service-to-service trust boundaries.",
  },
  {
    name: "Data",
    detail: "Confidentiality, integrity and controlled handling of sensitive information.",
  },
  {
    name: "Infrastructure",
    detail: "Hardened hosting, networks and resilient platform foundations.",
  },
  {
    name: "Monitoring",
    detail: "Visibility, alerting readiness and pathways for incident response.",
  },
];

export function SecurityLayers() {
  const [active, setActive] = useState("Identity");

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="grid gap-3 sm:grid-cols-2">
        {layers.map((layer, index) => {
          const isActive = active === layer.name;
          return (
            <button
              key={layer.name}
              type="button"
              onMouseEnter={() => setActive(layer.name)}
              onFocus={() => setActive(layer.name)}
              onClick={() => setActive(layer.name)}
              className={cn(
                "border p-5 text-left transition",
                isActive
                  ? "border-[var(--blue)] bg-[var(--navy)] text-white"
                  : "border-[var(--border)] bg-[var(--bg-elevated)] hover:border-[var(--border-strong)]",
              )}
            >
              <div
                className={cn(
                  "text-xs font-bold tracking-[0.16em]",
                  isActive ? "text-[var(--cyan)]" : "text-[var(--blue)]",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className={cn("mt-3 text-xl font-semibold", isActive ? "text-white" : "")}>
                {layer.name}
              </div>
            </button>
          );
        })}
      </div>
      <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-8">
        <p className="eyebrow">Security architecture</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
          {active}
        </h3>
        <p className="mt-4 text-[var(--text-muted)]">
          {layers.find((layer) => layer.name === active)?.detail}
        </p>
        <p className="mt-6 text-sm text-[var(--text-muted)]">
          Syntrax treats security as an engineering discipline across identity, applications,
          APIs, data, infrastructure and monitoring — not a sticker applied after delivery.
        </p>
      </div>
    </div>
  );
}