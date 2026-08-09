import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Syntrax Technologies for sales, cybersecurity, support, partnerships and general inquiries.",
  path: "/contact",
});

const departments = ["Sales", "Cybersecurity", "Technical Support", "Partnerships"];

export default function ContactPage() {
  return (
    <section className="pt-[var(--header-h)]">
      <div className="grid min-h-[calc(100svh-var(--header-h))] lg:grid-cols-2">
        <div className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--bg-dark)] px-6 py-16 md:px-12 lg:border-r lg:border-b-0 lg:py-24">
          <div className="absolute inset-0 tech-grid opacity-30" aria-hidden />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(600px 320px at 20% 20%, rgba(10,0,244,0.35), transparent 65%)",
            }}
            aria-hidden
          />
          <div className="relative max-w-xl">
            <div className="eyebrow">Contact</div>
            <h1 className="mt-5 text-[clamp(2.6rem,5.5vw,4.75rem)] font-bold tracking-[-0.045em]">
              Let&apos;s build something secure.
            </h1>
            <p className="mt-6 text-lg text-[var(--text-muted)]">
              Tell us about your organization, systems and objectives. Our team will route your
              inquiry to the right practice.
            </p>
            <ul className="mt-10 space-y-3">
              {departments.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-[var(--border)] bg-[rgba(12,18,43,0.7)] px-4 py-3 text-sm font-semibold tracking-[0.04em]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 space-y-2 text-sm text-[var(--text-muted)]">
              <p>{siteConfig.address.display}</p>
              <p>
                <a
                  href={`mailto:${siteConfig.email.general}`}
                  className="hover:text-[var(--brand-hover)]"
                >
                  {siteConfig.email.general}
                </a>
              </p>
              <p>
                <a href={`tel:${siteConfig.phone.e164}`} className="hover:text-[var(--brand-hover)]">
                  {siteConfig.phone.display}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--bg-muted)] px-6 py-16 md:px-12 lg:py-24">
          <div className="mx-auto max-w-xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em]">Send an inquiry</h2>
            <p className="mt-3 text-sm text-[var(--text-muted)]">
              Select a department so your message reaches the right team.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
