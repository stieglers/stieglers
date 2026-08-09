"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/ui/Button";

/**
 * Honest trust messaging — Syntrax does not publish invented client testimonials.
 */
const slides = [
  {
    title: "Security practice you can inspect",
    text: "Our Trust Center publishes how Syntrax thinks about security, privacy, disclosure, and operational discipline — without invented client quotes.",
    href: "/security",
    label: "Enter Trust Center",
  },
  {
    title: "Products in production",
    text: "SyntraxSec, ENMS, POS, and Pharmacy PMS are live platforms organizations can evaluate directly — not placeholder case studies.",
    href: "/products",
    label: "Explore products",
  },
  {
    title: "Accountable partnership",
    text: "We engage as a long-term technology partner across cybersecurity, software, infrastructure, and digital transformation.",
    href: "/contact",
    label: "Talk to our team",
  },
];

export function TrustPartners() {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  return (
    <section className="section bg-[var(--bg-muted)]">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Trust</div>
          <h2 className="section-title mt-4 max-w-[18ch]">
            Built for organizations across East Africa
          </h2>
          <p className="lead">
            We do not invent clients, ratings, or testimonials. Trust is earned through delivery,
            security discipline, and transparent engagement.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="glass mt-12 rounded-2xl p-7 md:p-10">
            <div className="flex items-start justify-between gap-4">
              <ShieldCheck className="size-8 text-[var(--brand-hover)]" />
              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--heading)] transition hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]"
                  aria-label="Previous"
                  onClick={() => setIndex((value) => (value === 0 ? slides.length - 1 : value - 1))}
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--heading)] transition hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]"
                  aria-label="Next"
                  onClick={() => setIndex((value) => (value + 1) % slides.length)}
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
            <h3 className="mt-6 max-w-3xl text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
              {current.title}
            </h3>
            <p className="mt-4 max-w-3xl text-[var(--text-muted)]">{current.text}</p>
            <div className="mt-8">
              <Button href={current.href} arrow>
                {current.label}
              </Button>
            </div>
            <div className="mt-8 flex gap-2">
              {slides.map((slide, slideIndex) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Show slide ${slideIndex + 1}`}
                  className={`h-1.5 w-8 rounded-full transition ${
                    slideIndex === index ? "bg-[var(--brand)]" : "bg-white/15 hover:bg-white/30"
                  }`}
                  onClick={() => setIndex(slideIndex)}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-sm text-[var(--text-muted)]">
          Verified client stories will be published here with permission.{" "}
          <Link href="/case-studies" className="font-semibold text-[var(--brand-hover)] hover:text-white">
            View case study framework →
          </Link>
        </p>
      </div>
    </section>
  );
}
