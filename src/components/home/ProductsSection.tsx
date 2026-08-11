import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/content/products";
import { Reveal } from "@/components/shared/Reveal";

export function ProductsSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="eyebrow">Products</div>
          <h2 className="section-title mt-4">Technology platforms for real operations.</h2>
        </Reveal>

        <div className="mt-14 space-y-0 border-y border-[var(--border)]">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 60}>
              <article className="grid gap-8 border-b border-[var(--border)] py-10 last:border-b-0 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-14">
                <div>
                  <div className="text-sm font-semibold tracking-[0.18em] text-[var(--brand)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.04em]">
                    {product.name}
                  </h3>
                  <p className="mt-4 max-w-md text-[var(--text-muted)]">{product.summary}</p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]"
                  >
                    Explore
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="relative min-h-56 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-sm)] md:min-h-72 md:p-8">
                  <div className="absolute inset-0 tech-grid opacity-40" aria-hidden />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(360px 180px at 80% 20%, rgba(10,0,244,0.12), transparent 70%)",
                    }}
                    aria-hidden
                  />
                  <div className="relative">
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--brand)] uppercase">
                      Product signal
                    </p>
                    <p className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                      {product.tagline}
                    </p>
                    <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                      {product.capabilities.slice(0, 4).map((capability) => (
                        <li
                          key={capability}
                          className="rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] px-3 py-3 text-sm"
                        >
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}