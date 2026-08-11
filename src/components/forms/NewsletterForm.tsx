"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormStatus } from "@/components/ui/FormStatus";
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
          website: "",
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
      <form className="space-y-4" onSubmit={onSubmit} noValidate>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
          onChange={() => undefined}
        />
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Work email"
            className="h-12 w-full rounded-xl border border-[var(--border-strong)] bg-[rgba(255,255,255,0.04)] px-4 text-[var(--heading)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--brand)]"
          />
          <Button type="submit" disabled={status === "loading"} className="sm:min-w-36">
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const active = selected.includes(category);
            return (
              <button
                key={category}
                type="button"
                className={`rounded-lg border px-2.5 py-1 text-xs font-semibold transition ${
                  active
                    ? "border-[var(--brand)] bg-[var(--brand-soft)] text-[var(--brand-hover)]"
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
            <a href="/privacy" className="underline hover:text-white">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        <FormStatus status={status} message={message} />
      </form>
    </div>
  );
}
