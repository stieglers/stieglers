import { Button } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "403 Forbidden",
  description: "You do not have permission to access this resource.",
  path: "/forbidden",
});

export default function ForbiddenPage() {
  return (
    <section className="section">
      <div className="container max-w-2xl py-16 text-center">
        <p className="eyebrow">403</p>
        <h1 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-[-0.04em]">
          Access to this resource is restricted.
        </h1>
        <p className="mt-4 text-[var(--text-muted)]">
          If you believe this is an error, contact support.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" arrow>
            Back Home
          </Button>
          <Button href="/support" variant="secondary">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}