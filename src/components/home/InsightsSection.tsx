import Link from "next/link";
import { insights } from "@/content/insights";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function InsightsSection() {
  return (
    <section className="section bg-[var(--bg-muted)]/40">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Insights"
              title="Practical thinking for technology leaders."
              lead="CMS-ready articles across cybersecurity, infrastructure and digital transformation."
            />
          </Reveal>
          <Button href="/insights" variant="secondary" arrow>
            All insights
          </Button>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {insights.map((insight, index) => (
            <Reveal key={insight.slug} delay={index * 60}>
              <article className="h-full border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
                <div className="flex items-center justify-between gap-3 text-xs font-semibold tracking-[0.08em] text-[var(--text-muted)] uppercase">
                  <span>{insight.category}</span>
                  <span>{insight.readingTime}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">
                  <Link href={`/insights/${insight.slug}`} className="hover:text-[var(--blue)]">
                    {insight.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm text-[var(--text-muted)]">{insight.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}