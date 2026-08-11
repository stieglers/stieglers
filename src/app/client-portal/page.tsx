import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Client Portal",
  description: "Secure access for Syntrax clients. Authentication will be connected later.",
  path: "/client-portal",
});

export default function ClientPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Portal"
        title="Secure access for Syntrax clients."
        lead="This portal entry point is ready for future authentication. No fake login system is exposed."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Client Portal" },
        ]}
      />
      <section className="section">
        <div className="container max-w-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8 text-center">
          <h2 className="text-2xl font-semibold">Sign in</h2>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            Authentication will be connected to Syntrax&apos;s client access system later.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Button disabled>Sign in</Button>
            <Button href="/support" variant="secondary">
              Need help? Visit Support
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}