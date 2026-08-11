import type { Industry } from "@/content/industries";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IndustryPage({ industry }: { industry: Industry }) {
  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={industry.name}
        lead={industry.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
        actions={[
          { label: "Talk to an Expert", href: "/contact" },
          { label: "Explore solutions", href: "/solutions", variant: "secondary" },
        ]}
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Challenges" title="What organizations in this sector typically face." />
            <ul className="mt-6 space-y-3">
              {industry.challenges.map((item) => (
                <li key={item} className="border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Syntrax solutions" title="How we help." />
            <ul className="mt-6 space-y-3">
              {industry.solutions.map((item) => (
                <li key={item} className="border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-muted)]/40">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">Relevant products</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              {industry.products.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Security considerations</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              {industry.security.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Digital transformation opportunities</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              {industry.opportunities.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Discuss ${industry.name.toLowerCase()} technology needs.`}
        primary={{ label: "Book a consultation", href: "/consultation" }}
        secondary={{ label: "View products", href: "/products" }}
      />
    </>
  );
}