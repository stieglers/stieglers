import { PageHero } from "@/components/shared/PageHero";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = createMetadata({
  title: "Accessibility",
  description: "Accessibility commitment for the Syntrax Technologies website.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Accessibility"
        title="Building a more accessible digital experience."
        lead="Syntrax aims for WCAG 2.2 AA practices where practical across navigation, forms and content."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Accessibility" },
        ]}
      />
      <section className="section">
        <div className="container max-w-3xl space-y-5 text-[var(--text-muted)]">
          <p>
            We implement semantic HTML, keyboard navigation, visible focus states, ARIA where
            needed, reduced-motion support and sufficient contrast targets.
          </p>
          <p>
            If you encounter an accessibility barrier, contact{" "}
            <a className="text-[var(--blue)]" href={`mailto:${siteConfig.email.general}`}>
              {siteConfig.email.general}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}