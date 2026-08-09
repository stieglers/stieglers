import { PageHero } from "@/components/shared/PageHero";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for Syntrax Technologies.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="How Syntrax Technologies collects, uses and protects personal information."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <section className="section">
        <div className="container max-w-3xl space-y-6 text-[var(--text-muted)]">
          <p>
            Syntrax Technologies (&quot;Syntrax&quot;) respects your privacy. This policy explains
            what information we collect through our website and forms, why we collect it and how
            you can contact us about your data.
          </p>
          <div>
            <h2 className="text-xl font-semibold text-[var(--heading)]">Information we collect</h2>
            <p className="mt-3">
              We may collect contact details and inquiry information you submit through forms
              such as name, organization, email, phone number and message content. We do not ask
              for more information than needed to respond to your request.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[var(--heading)]">How we use information</h2>
            <p className="mt-3">
              We use submitted information to respond to inquiries, provide demos or quotes,
              deliver support and improve our services. Optional analytics or marketing cookies
              are used only with consent.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[var(--heading)]">Sharing</h2>
            <p className="mt-3">
              We do not sell personal information. We may share information with service providers
              who help us operate communications or hosting, or when required by law.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[var(--heading)]">Security</h2>
            <p className="mt-3">
              We apply reasonable technical and organizational measures to protect information.
              No method of transmission or storage is perfectly secure.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[var(--heading)]">Contact</h2>
            <p className="mt-3">
              Privacy questions:{" "}
              <a className="text-[var(--blue)]" href={`mailto:${siteConfig.email.general}`}>
                {siteConfig.email.general}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}