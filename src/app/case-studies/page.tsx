import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Case Studies",
  description:
    "Syntrax case study framework covering challenge, approach, solution, architecture and results — published only with approved content.",
  path: "/case-studies",
});

const framework = [
  "Client industry",
  "Challenge",
  "Approach",
  "Solution",
  "Architecture",
  "Implementation",
  "Results",
  "Technologies",
  "Security considerations",
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="A professional case-study system — without invented clients."
        lead="Verified case studies can be published here. Until then, this page documents the structure we use."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case studies" },
        ]}
      />
      <section className="section">
        <div className="container grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {["Enterprise Systems", "Cybersecurity", "Digital Transformation"].map((item) => (
            <article
              key={item}
              className="border border-dashed border-[var(--border-strong)] bg-[var(--bg-elevated)] p-6"
            >
              <p className="text-xs font-bold tracking-[0.14em] text-[var(--blue)] uppercase">
                Placeholder
              </p>
              <h2 className="mt-3 text-xl font-semibold">{item}</h2>
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                Content placeholder for an approved case study in this category.
              </p>
            </article>
          ))}
        </div>
        <div className="container mt-10">
          <h2 className="text-2xl font-semibold">Case study framework</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {framework.map((item) => (
              <li key={item} className="border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}