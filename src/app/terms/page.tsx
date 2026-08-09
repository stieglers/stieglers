import { PageHero } from "@/components/shared/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "Terms of Service for the Syntrax Technologies website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        lead="Terms governing use of the Syntrax Technologies website."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service" },
        ]}
      />
      <section className="section">
        <div className="container max-w-3xl space-y-6 text-[var(--text-muted)]">
          <p>
            By using this website, you agree to these terms. The site provides information about
            Syntrax Technologies products and services and may collect inquiry details through
            forms.
          </p>
          <div>
            <h2 className="text-xl font-semibold text-[var(--heading)]">Use of the website</h2>
            <p className="mt-3">
              You agree not to misuse the website, attempt unauthorized access, disrupt services
              or submit unlawful or harmful content through forms.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[var(--heading)]">No professional advice guarantee</h2>
            <p className="mt-3">
              Website content is informational. Formal engagements are governed by separate
              agreements, statements of work or product terms.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[var(--heading)]">Intellectual property</h2>
            <p className="mt-3">
              Site content, branding and product names are owned by Syntrax Technologies or their
              respective owners and may not be used without permission.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[var(--heading)]">Liability</h2>
            <p className="mt-3">
              The website is provided on an &quot;as available&quot; basis. Syntrax is not liable
              for indirect or consequential damages arising from site use to the extent permitted
              by law.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}