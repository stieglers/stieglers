"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

const items = [
  {
    number: "01",
    title: "Security",
    text: "We engineer controls across identity, applications, APIs, data, infrastructure and monitoring — so security is part of how systems work, not a late checklist.",
    href: "/services/cybersecurity",
    visual: ["Identity", "Application", "API", "Data", "Infrastructure", "Monitoring"],
  },
  {
    number: "02",
    title: "Software",
    text: "We design and build enterprise applications around real organizational workflows — maintainable, secure and ready for long-term ownership.",
    href: "/services/software-engineering",
    visual: ["Workflows", "Interfaces", "Services", "APIs", "Data models", "Access control"],
  },
  {
    number: "03",
    title: "Infrastructure",
    text: "We design resilient foundations for hosting, networks and recovery so critical operations remain available as organizations grow.",
    href: "/services/cloud-infrastructure",
    visual: ["Networks", "Cloud", "Hosting", "Backup", "Monitoring", "Access"],
  },
  {
    number: "04",
    title: "Digital Transform",
    text: "We replace fragile manual processes with connected digital systems that improve control, visibility and operational speed.",
    href: "/services/digital-transformation",
    visual: ["Process", "Systems", "Integration", "Data", "Adoption", "Control"],
  },
];

export function WhatWeDo() {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="eyebrow">What we do</div>
          <h2 className="section-title mt-4">
            We build the technology behind modern operations.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {items.map((item, index) => {
              const open = active === index;
              return (
                <button
                  key={item.number}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={cn(
                    "group grid w-full gap-4 py-8 text-left transition md:grid-cols-[88px_1fr]",
                    open ? "opacity-100" : "opacity-55 hover:opacity-100",
                  )}
                >
                  <div className="text-sm font-semibold tracking-[0.16em] text-[var(--brand)]">
                    {item.number}
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em]">
                        {item.title}
                      </h3>
                      <ArrowUpRight
                        className={cn(
                          "mt-2 size-5 text-[var(--brand)] transition",
                          open ? "opacity-100" : "opacity-0",
                        )}
                      />
                    </div>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-400",
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="mt-4 max-w-xl text-[var(--text-muted)]">{item.text}</p>
                        <Link
                          href={item.href}
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]"
                        >
                          Explore {item.title.toLowerCase()}
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[var(--brand)] uppercase">
              Capability map
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">{current.title}</h3>
            <div className="mt-8 space-y-3">
              {current.visual.map((layer, index) => (
                <div key={layer} className="flex items-center gap-3">
                  <div className="w-full border border-[var(--border)] bg-[rgba(10,0,244,0.08)] px-4 py-3 text-sm font-semibold tracking-[0.04em]">
                    {layer}
                  </div>
                  {index < current.visual.length - 1 ? (
                    <div className="hidden text-[var(--brand)] md:block">↓</div>
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