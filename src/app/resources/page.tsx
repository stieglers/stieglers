"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { insights } from "@/content/insights";
import { faqs } from "@/content/faqs";
import { cn } from "@/lib/utils";

const filters = [
  "All",
  "Cybersecurity",
  "Infrastructure",
  "Software",
  "Business",
  "Education",
  "Technology",
  "Digital Transformation",
] as const;

const resources = [
  ...insights.map((insight) => ({
    type: "Article",
    title: insight.title,
    description: insight.excerpt,
    href: `/insights/${insight.slug}`,
    category: insight.category,
  })),
  {
    type: "Guide",
    title: "Getting started with Syntrax products",
    description: "CMS-ready guide placeholder for onboarding documentation.",
    href: "/products",
    category: "Software",
  },
  {
    type: "Documentation",
    title: "Product documentation hub",
    description: "Entry point for future product docs across SyntraxSec, ENMS, POS and Pharmacy.",
    href: "/support",
    category: "Technology",
  },
  {
    type: "Security advisory",
    title: "Security advisories",
    description: "Published advisories will appear in the trust center when available.",
    href: "/security/advisories",
    category: "Cybersecurity",
  },
  {
    type: "FAQ",
    title: "Support FAQs",
    description: `${faqs.length} frequently asked questions across products, services and security.`,
    href: "/support#faq",
    category: "Business",
  },
];

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(() => {
    return resources.filter((item) => {
      const matchesFilter =
        filter === "All" ||
        item.category.toLowerCase().includes(filter.toLowerCase()) ||
        filter.toLowerCase().includes(item.category.toLowerCase());
      const haystack = `${item.title} ${item.description} ${item.type}`.toLowerCase();
      return matchesFilter && haystack.includes(query.toLowerCase());
    });
  }, [filter, query]);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Knowledge base for teams evaluating and running Syntrax technology."
        lead="Search articles, guides, documentation, advisories and FAQs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
      />

      <section id="documentation" className="section">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search resources..."
              aria-label="Search resources"
              className="md:max-w-md"
            />
            <div className="flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={cn(
                    "rounded-[4px] border px-3 py-1.5 text-xs font-semibold",
                    filter === item
                      ? "border-[var(--blue)] bg-[var(--accent-soft)] text-[var(--blue)]"
                      : "border-[var(--border)] text-[var(--text-muted)]",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-10 border border-dashed border-[var(--border-strong)] bg-[var(--bg-elevated)] p-8 text-center">
              <p className="font-semibold">No articles found.</p>
              <Button className="mt-4" variant="secondary" onClick={() => { setQuery(""); setFilter("All"); }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((item) => (
                <Link
                  key={item.href + item.title}
                  href={item.href}
                  className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--blue)]"
                >
                  <div className="text-[11px] font-bold tracking-[0.12em] text-[var(--blue)] uppercase">
                    {item.type}
                  </div>
                  <h2 className="mt-3 text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm text-[var(--text-muted)]">{item.description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}