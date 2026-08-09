import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { CtaBand } from "@/components/shared/CtaBand";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Explore careers at Syntrax Technologies across engineering, cybersecurity, sales, consulting and operations.",
  path: "/careers",
});

const areas = ["Engineering", "Cybersecurity", "Sales", "Consulting", "Operations"];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build serious technology with a security-minded team."
        lead="Life at Syntrax centers on craftsmanship, accountability and long-term partnership with organizations that depend on digital systems."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
        actions={[
          { label: "Contact careers", href: "/contact" },
          { label: "View open roles", href: "#open-positions", variant: "secondary" },
        ]}
      />

      <section className="section">
        <div className="container grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {areas.map((area) => (
            <div key={area} className="border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-6 font-semibold">
              {area}
            </div>
          ))}
        </div>
      </section>

      <section id="open-positions" className="section bg-[var(--bg-muted)]/40">
        <div className="container">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">Open positions</h2>
          <div className="mt-8 border border-dashed border-[var(--border-strong)] bg-[var(--bg-elevated)] p-8 text-center">
            <p className="text-[var(--text-muted)]">No open positions published right now.</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Send a general application through contact and our team will keep your profile for future roles.
            </p>
            <Link href="/contact" className="mt-6 inline-block text-sm font-semibold text-[var(--blue)]">
              Contact Careers →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to join Syntrax?"
        text="Tell us about your experience in engineering, cybersecurity, consulting or operations."
        primary={{ label: "Contact Careers", href: "/contact" }}
        secondary={{ label: "About Syntrax", href: "/about" }}
      />
    </>
  );
}