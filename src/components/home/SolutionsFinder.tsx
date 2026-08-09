"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { needOptions } from "@/content/solutions-finder";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function SolutionsFinder() {
  const [selectedId, setSelectedId] = useState(needOptions[0].id);
  const selected = needOptions.find((item) => item.id === selectedId) ?? needOptions[0];

  return (
    <section id="finder" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What do you need?"
          title="Find the right Syntrax path in seconds."
          lead="Select your need and we’ll recommend relevant products and services."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-2 sm:grid-cols-2">
            {needOptions.map((option) => {
              const active = option.id === selectedId;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(option.id);
                    trackEvent("solutions_finder_select", { need: option.id });
                  }}
                  className={cn(
                    "border px-4 py-4 text-left text-sm font-semibold transition",
                    active
                      ? "border-[var(--blue)] bg-[var(--accent-soft)] text-[var(--heading)]"
                      : "border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:border-[var(--border-strong)]",
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-8">
            <p className="text-xs font-bold tracking-[0.16em] text-[var(--blue)] uppercase">
              Recommendation
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
              {selected.recommendationTitle}
            </h3>
            <p className="mt-3 text-[var(--text-muted)]">{selected.summary}</p>
            <ul className="mt-6 space-y-3">
              {selected.recommended.map((item) => (
                <li key={item.href + item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between border border-[var(--border)] px-4 py-3 hover:border-[var(--blue)]"
                  >
                    <span>
                      <span className="block text-[11px] font-bold tracking-[0.12em] text-[var(--slate)] uppercase">
                        {item.type}
                      </span>
                      <span className="font-semibold text-[var(--heading)]">{item.name}</span>
                    </span>
                    <ArrowRight className="size-4 text-[var(--blue)] transition group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href={selected.cta.href} arrow>
                {selected.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}