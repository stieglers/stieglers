"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { Field, Input, TextArea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export default function DisclosurePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (String(form.get("website") || "")) return;
    setStatus("loading");
    try {
      const response = await fetch("/api/disclosure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      setMessage("Thank you. Our security team will review your report.");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Unable to submit right now. Email security@syntrax.co.tz instead.");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Vulnerability disclosure"
        title="Report a security vulnerability responsibly."
        lead="Help us protect Syntrax systems and customers through private, good-faith reporting."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Security", href: "/security" },
          { label: "Disclosure" },
        ]}
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6 text-[var(--text-muted)]">
            <div>
              <h2 className="text-xl font-semibold text-[var(--heading)]">Scope</h2>
              <p className="mt-3 text-sm">
                Syntrax-operated websites, applications and products where you have lawful access.
                Do not access private data, disrupt services or pivot into unrelated systems.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[var(--heading)]">Process</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
                <li>Submit a private report with enough detail to reproduce the issue.</li>
                <li>Allow Syntrax a reasonable time to investigate and remediate.</li>
                <li>Avoid public disclosure until coordinated communication is agreed.</li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[var(--heading)]">Required information</h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Affected product or URL</li>
                <li>• Vulnerability type and impact summary</li>
                <li>• Steps to reproduce</li>
                <li>• Any proof-of-concept details that do not include sensitive customer data</li>
              </ul>
            </div>
            <p className="text-sm">
              Direct security email:{" "}
              <a className="text-[var(--blue)]" href={`mailto:${siteConfig.email.security}`}>
                {siteConfig.email.security}
              </a>
            </p>
          </div>

          <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-8">
            <form className="space-y-4" onSubmit={onSubmit}>
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
              <Field label="Name" htmlFor="name">
                <Input id="name" name="name" required />
              </Field>
              <Field label="Email" htmlFor="email">
                <Input id="email" name="email" type="email" required />
              </Field>
              <Field label="Affected product / system" htmlFor="product">
                <Input id="product" name="product" />
              </Field>
              <Field label="Report summary" htmlFor="summary">
                <TextArea id="summary" name="summary" required />
              </Field>
              <label className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                <input type="checkbox" name="privacy" required className="mt-1" />
                <span>
                  I agree to responsible disclosure practices and the{" "}
                  <a href="/privacy" className="text-[var(--blue)] underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
              <Button type="submit" disabled={status === "loading"} arrow>
                {status === "loading" ? "Submitting..." : "Submit report"}
              </Button>
              {message ? (
                <p
                  role="status"
                  className={
                    status === "error"
                      ? "text-sm text-[var(--danger)]"
                      : "text-sm text-[var(--success)]"
                  }
                >
                  {message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}