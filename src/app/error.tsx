"use client";

import { Button } from "@/components/ui/Button";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section">
      <div className="container max-w-2xl py-16 text-center">
        <p className="eyebrow">500</p>
        <h1 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-[-0.04em]">
          Something interrupted this request.
        </h1>
        <p className="mt-4 text-[var(--text-muted)]">
          Please try again. No technical server details are exposed on this page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button onClick={reset}>Try again</Button>
          <Button href="/support" variant="secondary">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}