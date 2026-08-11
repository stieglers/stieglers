import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Maintenance",
  description: "Syntrax Technologies is performing scheduled maintenance.",
  path: "/maintenance",
});

export default function MaintenancePage() {
  return (
    <section className="section">
      <div className="container max-w-2xl py-16 text-center">
        <p className="eyebrow">Maintenance</p>
        <h1 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-[-0.04em]">
          We&apos;re improving systems for a moment.
        </h1>
        <p className="mt-4 text-[var(--text-muted)]">
          Please check back shortly. For urgent needs, contact support.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/support" variant="secondary">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}