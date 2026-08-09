import type { Product } from "@/content/products";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProductPage({ product }: { product: Product }) {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title={product.name}
        lead={product.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
        actions={[
          { label: "Request a demo", href: `/demo?product=${product.slug}` },
          {
            label: product.liveUrl ? "Open live platform" : "Talk to sales",
            href: product.liveUrl || "/contact",
            variant: "secondary",
          },
        ]}
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeading eyebrow="Overview" title={product.summary} />
            <p className="mt-5 max-w-3xl text-[var(--text-muted)]">{product.overview}</p>
          </div>
          <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
            <h2 className="text-lg font-semibold">Who it is for</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              {product.audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {product.liveUrl ? (
              <Button href={product.liveUrl} external className="mt-6" variant="secondary" arrow>
                Visit live product
              </Button>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-muted)]/40">
        <div className="container">
          <SectionHeading eyebrow="Key features" title="Capabilities available today." />
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {product.capabilities.map((item) => (
              <div key={item} className="border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-5 text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Modules" title="Product structure." />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {product.modules.map((module) => (
              <article key={module.name} className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
                <h3 className="text-xl font-semibold">{module.name}</h3>
                <p className="mt-3 text-sm text-[var(--text-muted)]">{module.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-muted)]/40">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">Security</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              {product.security.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Integrations</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              {product.integrations.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Deployment</h2>
            <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
              {product.deployment.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              Pricing is scoped per organization. Request a demo or quote for details.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Screenshots & architecture"
            title="Visual assets ready for product media."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="flex min-h-56 items-center justify-center border border-dashed border-[var(--border-strong)] bg-[var(--bg-elevated)] p-6 text-center text-sm text-[var(--text-muted)]">
              Product screenshot placeholder — replace with approved UI imagery.
            </div>
            <div className="flex min-h-56 items-center justify-center border border-dashed border-[var(--border-strong)] bg-[var(--bg-elevated)] p-6 text-center text-sm text-[var(--text-muted)]">
              Architecture diagram placeholder — keep confidential details unpublished.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="FAQ" title={`${product.name} questions`} />
          <div className="mt-8">
            <Accordion items={product.faq} />
          </div>
        </div>
      </section>

      <CtaBand
        title={`See ${product.name} in action.`}
        text="Request a demo and our team will walk you through capabilities relevant to your organization."
        primary={{ label: "Request a demo", href: `/demo?product=${product.slug}` }}
        secondary={{ label: "Request a quote", href: `/quote?service=${product.slug}` }}
      />
    </>
  );
}