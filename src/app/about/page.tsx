import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description:
    "Syntrax Technologies combines security discipline, software craftsmanship and honest partnership for East African institutions and businesses.",
  path: "/about",
});

const values = [
  {
    title: "Security First",
    text: "Every solution is engineered with security at its core — never bolted on after delivery.",
  },
  {
    title: "Operational rigor",
    text: "Documented processes, clear ownership and reliable delivery without sacrificing clarity.",
  },
  {
    title: "Partnership",
    text: "We work alongside clients as long-term technology partners, not one-off vendors.",
  },
  {
    title: "Excellence",
    text: "Uncompromising standards in architecture, code quality and client communication.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Foundation",
    text: "Syntrax formed to bring enterprise-grade security and software to regional SMEs and institutions.",
  },
  {
    year: "2020",
    title: "Security practice",
    text: "Formalized penetration testing, VA/PT and audit offerings with dedicated reporting playbooks.",
  },
  {
    year: "2021",
    title: "Cloud & automation",
    text: "Expanded into cloud migrations, CI/CD and workflow automation for operations-heavy clients.",
  },
  {
    year: "2022",
    title: "AI & ML",
    text: "Built ML pipelines and LLM integrations with governance, guardrails and on-prem options.",
  },
  {
    year: "2023",
    title: "Regional scale",
    text: "Ongoing engagements across East Africa in finance, education, healthcare and public sector.",
  },
  {
    year: "2024+",
    title: "Platform depth",
    text: "Deeper product platforms, security monitoring options and long-term managed delivery.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Syntrax"
        title="Building the digital systems that keep business moving."
        lead="Syntrax Technologies is an East African technology company that designs, builds, secures and supports digital systems for institutions and businesses."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        actions={[
          { label: "Talk to an Expert", href: "/contact" },
          { label: "Explore services", href: "/services", variant: "secondary" },
        ]}
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="Built on expertise. Driven by outcomes."
            />
            <p className="mt-5 text-[var(--text-muted)]">
              Syntrax was founded to make enterprise-grade technology accessible to growing
              organizations. We combine deep technical expertise with disciplined delivery
              practices across cybersecurity, software, infrastructure and digital operations.
            </p>
            <p className="mt-4 text-[var(--text-muted)]">
              Our engineers, designers and security specialists partner with clients across
              finance, education, healthcare and the public sector to strengthen digital
              capabilities with clarity and accountability.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "East African expertise",
              "Technology-driven",
              "Security-focused",
              "Business-oriented",
            ].map((item) => (
              <div
                key={item}
                className="border border-[var(--border)] bg-[var(--bg-elevated)] px-5 py-8 text-lg font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-muted)]/40">
        <div className="container">
          <SectionHeading
            eyebrow="Mission, vision & values"
            title="We exist to help organizations operate securely and efficiently."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="mt-3 text-[var(--text-muted)]">
                Deliver secure, innovative and scalable technology solutions that drive
                measurable business outcomes.
              </p>
            </article>
            <article className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
              <h3 className="text-xl font-semibold">Our Vision</h3>
              <p className="mt-3 text-[var(--text-muted)]">
                To be East Africa&apos;s most trusted technology partner for organizations that
                take security and operations seriously.
              </p>
            </article>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
                <h3 className="font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Timeline"
            title="Growth in capability, not just headcount."
          />
          <ol className="mt-8 space-y-4">
            {timeline.map((item) => (
              <li
                key={item.year}
                className="grid gap-3 border border-[var(--border)] bg-[var(--bg-elevated)] p-5 md:grid-cols-[120px_1fr]"
              >
                <div className="text-sm font-bold tracking-[0.14em] text-[var(--blue)]">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-[var(--bg-muted)]/40">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Engagement models" title="How we work with organizations." />
          <div className="mt-8 space-y-4 text-[var(--text-muted)]">
            <p>
              <strong className="text-[var(--heading)]">Project delivery:</strong> Fixed or
              phased scope with milestones, demos and documentation.
            </p>
            <p>
              <strong className="text-[var(--heading)]">Retainer & managed services:</strong>{" "}
              Ongoing roadmap, incident response windows and proactive improvements.
            </p>
            <p>
              <strong className="text-[var(--heading)]">Advisory & audits:</strong> Short,
              intensive assessments with executive-ready reports and prioritized remediation
              guidance.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}