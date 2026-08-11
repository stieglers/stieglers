"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";

/**
 * Capability highlights — not invented project/client counts.
 * Syntrax does not publish unverified metrics on this site.
 */
const focusItems = [
  {
    value: "Security",
    label: "Engineered into systems, identity, and operations",
  },
  {
    value: "Products",
    label: "SyntraxSec, ENMS, POS, and Pharmacy PMS in production",
  },
  {
    value: "Delivery",
    label: "Clear architecture, accountable engineering partnership",
  },
  {
    value: "Region",
    label: "Built for East African institutional realities",
  },
];

export function FocusBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg-muted)] py-10 md:py-14">
      <div className="container" ref={ref}>
        <Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {focusItems.map((item, index) => (
              <div
                key={item.value}
                className="border-l border-[var(--border)] pl-5 transition"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(12px)",
                  transition: `opacity 0.55s ease ${index * 90}ms, transform 0.55s ease ${index * 90}ms`,
                }}
              >
                <p className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-[-0.04em] text-[var(--brand-hover)] md:text-3xl">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
