"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const layers = [
  {
    name: "Applications",
    detail: "Business systems, portals and product interfaces used by teams and customers.",
  },
  {
    name: "APIs",
    detail: "Contracts that connect applications, partners and internal services securely.",
  },
  {
    name: "Cloud / Infrastructure",
    detail: "Hosting, networks and platforms that keep systems available and scalable.",
  },
  {
    name: "Security",
    detail: "Identity, monitoring, hardening and controls engineered across every layer.",
  },
  {
    name: "Business Operations",
    detail: "The workflows and outcomes technology must protect and improve every day.",
  },
];

export function ArchitectureStack() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative overflow-hidden border border-[var(--border)] bg-[var(--bg-elevated)] p-5 md:p-7">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(420px 180px at 80% 10%, rgba(37,99,235,0.12), transparent), linear-gradient(180deg, transparent, rgba(7,20,38,0.02))",
        }}
        aria-hidden
      />
      <div className="relative">
        <p className="text-xs font-bold tracking-[0.16em] text-[var(--blue)] uppercase">
          Digital infrastructure
        </p>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          Hover or focus a layer to explore how Syntrax thinks about connected systems.
        </p>
        <ul className="mt-6 space-y-3">
          {layers.map((layer, index) => {
            const isActive = active === index;
            return (
              <li key={layer.name}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={cn(
                    "flex w-full items-center justify-between border px-4 py-3 text-left transition",
                    isActive
                      ? "border-[var(--blue)] bg-[var(--accent-soft)]"
                      : "border-[var(--border)] bg-[var(--bg)] hover:border-[var(--border-strong)]",
                  )}
                >
                  <span className="font-semibold text-[var(--heading)]">{layer.name}</span>
                  <span className="text-xs font-bold tracking-[0.14em] text-[var(--slate)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
                {index < layers.length - 1 ? (
                  <div className="mx-auto h-3 w-px bg-[var(--border-strong)]" aria-hidden />
                ) : null}
              </li>
            );
          })}
        </ul>
        <div className="mt-5 border border-[var(--border)] bg-[var(--bg)] p-4">
          <p className="text-sm font-semibold text-[var(--heading)]">{layers[active].name}</p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">{layers[active].detail}</p>
        </div>
      </div>
    </div>
  );
}