import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/content/products";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ProductsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Our technology"
              title="Products built for real operational work."
              lead="Live Syntrax platforms spanning cybersecurity readiness, education, retail and pharmacy operations."
            />
          </Reveal>
          <Reveal>
            <Button href="/products" variant="secondary" arrow>
              View all products
            </Button>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 60}>
              <article className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-8">
                <p className="text-xs font-bold tracking-[0.16em] text-[var(--blue)] uppercase">
                  {product.name}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  {product.tagline}
                </h3>
                <p className="mt-3 text-[var(--text-muted)]">{product.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--text-muted)]">
                  {product.capabilities.slice(0, 4).map((capability) => (
                    <li key={capability} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--blue)]" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-[var(--text-muted)]">
                  <span className="font-semibold text-[var(--heading)]">For:</span>{" "}
                  {product.audience.slice(0, 2).join(" · ")}
                </p>
                <Link
                  href={`/products/${product.slug}`}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)]"
                >
                  Explore {product.name}
                  <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}