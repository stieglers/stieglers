import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Syntrax Technologies in Dar es Salaam for sales, cybersecurity, support, partnerships and general inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the Syntrax team."
        lead="Reach sales, cybersecurity, technical support, partnerships or general inquiry channels."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-6">
            <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
              <h2 className="text-lg font-semibold">Office</h2>
              <p className="mt-3 text-sm text-[var(--text-muted)]">{siteConfig.address.display}</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">{siteConfig.hours}</p>
            </div>
            <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
              <h2 className="text-lg font-semibold">Direct contact</h2>
              <ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
                <li>
                  Email:{" "}
                  <a className="text-[var(--blue)]" href={`mailto:${siteConfig.email.general}`}>
                    {siteConfig.email.general}
                  </a>
                </li>
                <li>
                  Security:{" "}
                  <a className="text-[var(--blue)]" href={`mailto:${siteConfig.email.security}`}>
                    {siteConfig.email.security}
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a className="text-[var(--blue)]" href={`tel:${siteConfig.phone.e164}`}>
                    {siteConfig.phone.display}
                  </a>
                </li>
                <li>
                  WhatsApp:{" "}
                  <a
                    className="text-[var(--blue)]"
                    href={`https://wa.me/${siteConfig.phone.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteConfig.phone.display}
                  </a>
                </li>
              </ul>
            </div>
            <div className="border border-dashed border-[var(--border-strong)] bg-[var(--bg-elevated)] p-6 text-sm text-[var(--text-muted)]">
              Interactive map can be added when a precise public office pin is approved for
              publication. Currently we list city and country only.
            </div>
          </aside>
          <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.03em]">Send a message</h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Select a department so your inquiry reaches the right team.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}