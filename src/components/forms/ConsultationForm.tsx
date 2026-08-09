"use client";

import { useState } from "react";
import { Field, Input, Select, TextArea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const types = [
  { value: "cybersecurity", label: "Cybersecurity consultation" },
  { value: "software", label: "Software consultation" },
  { value: "infrastructure", label: "Infrastructure consultation" },
  { value: "digital-transformation", label: "Digital transformation consultation" },
  { value: "general", label: "General technology consultation" },
];

export function ConsultationForm({ defaultType }: { defaultType?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (String(form.get("website") || "")) return;
    setStatus("loading");
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      setMessage("Thank you. Our team will contact you shortly to schedule the consultation.");
      event.currentTarget.reset();
      trackEvent("consultation_request", { type: String(form.get("type") || "") });
    } catch {
      setStatus("error");
      setMessage("Unable to submit the consultation request right now.");
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <Field label="Consultation type" htmlFor="type">
        <Select id="type" name="type" defaultValue={defaultType || "general"}>
          {types.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </Select>
      </Field>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <Input id="name" name="name" required />
        </Field>
        <Field label="Work email" htmlFor="email">
          <Input id="email" name="email" type="email" required />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Organization" htmlFor="organization">
          <Input id="organization" name="organization" />
        </Field>
        <Field label="Preferred timeframe" htmlFor="timeframe">
          <Input id="timeframe" name="timeframe" placeholder="e.g. This week / Next month" />
        </Field>
      </div>
      <Field
        label="Notes"
        htmlFor="notes"
        hint="Calendar/booking integration can be connected later. This form captures the request securely."
      >
        <TextArea id="notes" name="notes" />
      </Field>
      <label className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
        <input type="checkbox" name="privacy" required className="mt-1" />
        <span>
          I agree to the{" "}
          <a href="/privacy" className="text-[var(--blue)] underline">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      <Button type="submit" disabled={status === "loading"} arrow>
        {status === "loading" ? "Submitting..." : "Book a consultation"}
      </Button>
      {message ? (
        <p
          role="status"
          className={status === "error" ? "text-sm text-[var(--danger)]" : "text-sm text-[var(--success)]"}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}