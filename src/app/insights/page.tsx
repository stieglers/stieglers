import Link from "next/link";
import { insights, insightCategories } from "@/content/insights";
import { PageHero } from "@/components/shared/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Insights",
  description:
    "Syntrax insights on cybersecurity, technology, digital transformation, infrastructure and business systems.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical guidance for technology and security leaders."
        lead="CMS-ready articles across cybersecurity, infrastructure and digital transformation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights" },
        ]}
      />
      <section className="section">
        <div className="container">
          <div className="mb-8 flex flex-wrap gap-2">
            {insightCategories.map((category) => (
              <span
                key={category}
                className="rounded-[4px] border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)]"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {insights.map((insight) => (
              <article key={insight.slug} className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
                <div className="text-xs font-semibold tracking-[0.08em] text-[var(--text-muted)] uppercase">
                  {insight.category}
                </div>
                <h2 className="mt-3 text-xl font-semibold">
                  <Link href={`/insights/${insight.slug}`} className="hover:text-[var(--blue)]">
                    {insight.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-[var(--text-muted)]">{insight.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}