import { notFound } from "next/navigation";
import { insights, getInsight } from "@/content/insights";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const insight = getInsight(slug);
    if (!insight) return {};
    return createMetadata({
      title: insight.title,
      description: insight.excerpt,
      path: `/insights/${insight.slug}`,
    });
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  return (
    <>
      <PageHero
        eyebrow={insight.category}
        title={insight.title}
        lead={insight.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: insight.title },
        ]}
      />
      <section className="section">
        <div className="container max-w-3xl space-y-5 text-[var(--text-muted)]">
          <p>
            This article is part of Syntrax&apos;s CMS-ready insights library. Expand this page
            with approved editorial content when ready for publication.
          </p>
          <p>
            Categories such as cybersecurity, infrastructure and digital transformation help
            technology leaders explore practical themes without inventing client claims.
          </p>
          <p className="text-sm">Published framework date: {insight.date} · {insight.readingTime}</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
