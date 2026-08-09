"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const categories = [
  "Cybersecurity",
  "Technology",
  "Business",
  "Digital Transformation",
] as const;

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string[]>(["Cybersecurity"]);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!consent) {
      setStatus("error");
      setMessage("Please confirm consent to receive communications.");
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          categories: selected,
          consent,
          website: "", // honeypot
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("Thank you. You are subscribed for approved updates.");
      setEmail("");
      trackEvent("newsletter_subscribe");
    } catch {
      setStatus("error");
      setMessage("Unable to subscribe right now. Please try again later.");
    }
  }

  return (
    <div>
      <h3 className="text-lg font-semibold text-[var(--heading)]">Stay ahead of technology.</h3>
      <p className="mt-2 max-w-md text-sm text-[var(--text-muted)]">
        Practical updates on cybersecurity, infrastructure and digital operations.
      </p>
      <form className="mt-5 space-y-4" onSubmit={onSubmit} noValidate>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
          onChange={() => undefined}
        />
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Work email"
          className="h-12 w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg)] px-3 text-[var(--heading)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--brand)]"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const active = selected.includes(category);
            return (
              <button
                key={category}
                type="button"
                className={`rounded-lg border px-2.5 py-1 text-xs font-semibold transition ${
                  active
                    ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand)]"
                    : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--brand)]/40"
                }`}
                onClick={() =>
                  setSelected((current) =>
                    active
                      ? current.filter((item) => item !== category)
                      : [...current, category],
                  )
                }
              >
                {category}
              </button>
            );
          })}
        </div>
        <label className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-0.5"
          />
          <span>
            I agree to receive Syntrax updates and understand I can unsubscribe at any time. See
            our{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
        {message ? (
          <p
            className={`text-sm ${status === "error" ? "text-[var(--danger)]" : "text-[var(--success)]"}`}
            role="status"
          >
            {message}
          </p>
        ) : null}
      </form>
    </div>
  );
}
