import Link from "next/link";
import { ArrowUpRight, Briefcase, FolderKanban, Shield, Wrench } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

const areas = [
  {
    title: "About",
    text: "Mission, values, and how we engage as a long-term technology partner.",
    href: "/about",
    linkLabel: "Learn about us",
    icon: Briefcase,
    className: "md:col-span-2",
  },
  {
    title: "Services",
    text: "End-to-end delivery across software, infrastructure, integration, and digital transformation.",
    href: "/services",
    linkLabel: "Explore services",
    icon: Wrench,
    className: "",
  },
  {
    title: "Security",
    text: "Assessments, hardening, monitoring readiness, and security culture for your organization.",
    href: "/security",
    linkLabel: "Security practice",
    icon: Shield,
    className: "",
  },
  {
    title: "Portfolio",
    text: "Representative engagement frameworks across finance, education, retail, and infrastructure.",
    href: "/case-studies",
    linkLabel: "View case studies",
    icon: FolderKanban,
    className: "md:col-span-2",
  },
];

export function PracticeAreas() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Explore Syntrax</div>
          <h2 className="section-title mt-4 max-w-[20ch]">
            One partner across your technology stack
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {areas.map((area, index) => (
            <Reveal key={area.title} delay={index * 60} className={area.className}>
              <Link
                href={area.href}
                className={cn(
                  "group glass relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition hover:border-[var(--brand)]/45 hover:bg-[rgba(10,0,244,0.12)]",
                  area.className,
                )}
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[rgba(10,0,244,0.16)] blur-2xl transition group-hover:bg-[rgba(10,0,244,0.28)]"
                  aria-hidden
                />
                <area.icon className="relative size-6 text-[var(--brand-hover)]" />
                <h3 className="relative mt-5 text-xl font-semibold tracking-[-0.03em]">
                  {area.title}
                </h3>
                <p className="relative mt-3 flex-1 text-[var(--text-muted)]">{area.text}</p>
                <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  {area.linkLabel}
                  <ArrowUpRight className="size-4 text-[var(--brand-hover)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
