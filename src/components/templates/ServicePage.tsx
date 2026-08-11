import Link from "next/link";
import type { Service } from "@/content/services";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.name}
        lead={service.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
        actions={[
          { label: service.cta.label, href: service.cta.href },
          { label: "Request a quote", href: `/quote?service=${service.slug}`, variant: "secondary" },
        ]}
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow="Overview" title={service.summary} />
            <p className="mt-5 max-w-3xl text-[var(--text-muted)]">{service.overview}</p>
          </div>
          <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
            <h2 className="text-lg font-semibold">Industries</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              {service.industries.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-muted)]/40">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Problems we solve" title="Operational and security friction we address." />
            <ul className="mt-6 space-y-3">
              {service.problems.map((item) => (
                <li key={item} className="border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Capabilities" title="What this practice delivers." />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.capabilities.map((item) => (
                <li key={item} className="border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="How we work" title="A clear engagement path." />
          <ol className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {service.approach.map((step, index) => (
              <li key={step} className="border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
                <div className="text-xs font-bold tracking-[0.16em] text-[var(--blue)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-3 text-sm text-[var(--text-muted)]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-[var(--bg-muted)]/40">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Architecture" title="Technical building blocks." />
            <div className="mt-6 space-y-3">
              {service.architecture.map((item) => (
                <div key={item} className="border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-4 font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Benefits" title="Why teams engage Syntrax." />
            <ul className="mt-6 space-y-3">
              {service.benefits.map((item) => (
                <li key={item} className="text-[var(--text-muted)]">
                  {item}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-lg font-semibold">Deliverables</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              {service.deliverables.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="FAQ" title={`Questions about ${service.name}`} />
          <div className="mt-8">
            <Accordion items={service.faq} />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={service.cta.href} arrow>
              {service.cta.label}
            </Button>
            <Button href="/services" variant="secondary">
              All services
            </Button>
          </div>
          <p className="mt-6 text-sm text-[var(--text-muted)]">
            Looking for products instead? Explore{" "}
            <Link href="/products" className="text-[var(--blue)] underline">
              Syntrax products
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBand
        title={`Ready to discuss ${service.name.toLowerCase()}?`}
        primary={{ label: service.cta.label, href: service.cta.href }}
        secondary={{ label: "Contact Syntrax", href: "/contact" }}
      />
    </>
  );
}