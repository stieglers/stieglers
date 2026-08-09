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
      <h3 className="text-lg font-semibold text-white">Stay ahead of technology.</h3>
      <p className="mt-2 max-w-md text-sm text-slate-400">
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
          className="h-12 w-full rounded-[var(--radius-sm)] border border-white/15 bg-white/5 px-3 text-white outline-none placeholder:text-slate-500 focus:border-[var(--cyan)]"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const active = selected.includes(category);
            return (
              <button
                key={category}
                type="button"
                className={`rounded-[4px] border px-2.5 py-1 text-xs font-semibold ${
                  active
                    ? "border-[var(--cyan)] text-[var(--cyan)]"
                    : "border-white/15 text-slate-400"
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
        <label className="flex items-start gap-2 text-xs text-slate-400">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-0.5"
          />
          <span>
            I agree to receive Syntrax updates and understand I can unsubscribe at any time.
            See our <a href="/privacy" className="underline">Privacy Policy</a>.
          </span>
        </label>
        <Button type="submit" variant="inverse" disabled={status === "loading"}>
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
        {message ? (
          <p
            className={`text-sm ${status === "error" ? "text-red-300" : "text-emerald-300"}`}
            role="status"
          >
            {message}
          </p>
        ) : null}
      </form>
    </div>
  );
}