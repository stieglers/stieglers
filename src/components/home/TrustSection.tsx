import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const sections = [
  "Security",
  "Privacy",
  "Infrastructure",
  "Data protection",
  "Secure development",
  "Incident response",
  "Business continuity",
  "Vulnerability disclosure",
];

export function TrustSection() {
  return (
    <section className="section bg-[var(--bg-muted)]">
      <div className="container grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
        <Reveal>
          <div className="eyebrow">Trust Center</div>
          <h2 className="section-title mt-4">Syntrax Trust Center</h2>
          <p className="lead">
            Because cybersecurity is part of our identity, trust is published as a practice —
            not a slogan.
          </p>
          <Link
            href="/security"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]"
          >
            Enter Trust Center
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </Link>
        </Reveal>
        <Reveal delay={80}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {sections.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-5 text-sm font-semibold tracking-[0.02em] shadow-[var(--shadow-sm)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}