import { PageHero } from "@/components/shared/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description: "Cookie Policy for Syntrax Technologies.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        lead="How Syntrax uses necessary and optional cookies."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cookie Policy" },
        ]}
      />
      <section className="section">
        <div className="container max-w-3xl space-y-6 text-[var(--text-muted)]">
          <div>
            <h2 className="text-xl font-semibold text-[var(--heading)]">Necessary</h2>
            <p className="mt-3">
              Required for core site functionality such as security, preference storage and form
              protection.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[var(--heading)]">Analytics</h2>
            <p className="mt-3">
              Used only with consent to understand aggregated usage and improve the website.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[var(--heading)]">Marketing</h2>
            <p className="mt-3">
              Used only with consent for optional campaign measurement. Marketing cookies are not
              loaded before consent.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}