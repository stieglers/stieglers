import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/content/products";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Syntrax products including SyntraxSec, ENMS, POS and Pharmacy Management System.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Technology platforms for security, education, retail and pharmacy operations."
        lead="Explore live Syntrax products designed for real organizational workflows."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
        actions={[
          { label: "Request a demo", href: "/demo" },
          { label: "Request a quote", href: "/quote", variant: "secondary" },
        ]}
      />
      <section className="section">
        <div className="container grid gap-4 lg:grid-cols-2">
          {products.map((product) => (
            <article key={product.slug} className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-8">
              <p className="text-xs font-bold tracking-[0.16em] text-[var(--blue)] uppercase">
                {product.name}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{product.tagline}</h2>
              <p className="mt-3 text-[var(--text-muted)]">{product.summary}</p>
              <Link
                href={`/products/${product.slug}`}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)]"
              >
                Explore {product.name}
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CtaBand
        title="See the right product for your organization."
        primary={{ label: "Request a demo", href: "/demo" }}
        secondary={{ label: "Talk to sales", href: "/contact" }}
      />
    </>
  );
}