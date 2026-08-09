import Link from "next/link";
import { insights } from "@/content/insights";
import { Reveal } from "@/components/shared/Reveal";

export function InsightsSection() {
  const [featured, ...rest] = insights;

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="eyebrow">Insights</div>
              <h2 className="section-title mt-4">Think with Syntrax.</h2>
            </div>
            <Link href="/insights" className="text-sm font-semibold text-[var(--brand)]">
              All insights →
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <article className="border border-[var(--border)] bg-[var(--surface)] p-8 md:min-h-[420px] md:p-10">
              <div className="text-[11px] font-semibold tracking-[0.16em] text-[var(--brand)] uppercase">
                {featured.category}
              </div>
              <h3 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em]">
                <Link href={`/insights/${featured.slug}`} className="hover:text-[var(--brand)]">
                  {featured.title}
                </Link>
              </h3>
              <p className="mt-5 max-w-2xl text-lg text-[var(--text-muted)]">{featured.excerpt}</p>
              <p className="mt-8 text-sm text-[var(--muted)]">
                {featured.date} · {featured.readingTime}
              </p>
            </article>
          </Reveal>
          <div className="space-y-4">
            {rest.map((insight, index) => (
              <Reveal key={insight.slug} delay={index * 60}>
                <article className="border border-[var(--border)] p-6">
                  <div className="text-[11px] font-semibold tracking-[0.16em] text-[var(--brand)] uppercase">
                    {insight.category}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">
                    <Link href={`/insights/${insight.slug}`} className="hover:text-[var(--brand)]">
                      {insight.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-[var(--text-muted)]">{insight.excerpt}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}