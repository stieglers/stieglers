import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container max-w-2xl py-16 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-[-0.04em]">
          Looks like this system couldn&apos;t find that page.
        </h1>
        <p className="mt-4 text-[var(--text-muted)]">
          The page may have moved, or the link may be incorrect.
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