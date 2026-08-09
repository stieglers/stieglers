"use client";

import { useState } from "react";
import { Field, Input, Select, TextArea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { products } from "@/content/products";
import { trackEvent } from "@/lib/analytics";

export function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const options = [
    ...services.map((service) => ({ value: service.slug, label: `Service: ${service.name}` })),
    ...products.map((product) => ({ value: product.slug, label: `Product: ${product.name}` })),
  ];

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (String(form.get("website") || "")) return;
    setStatus("loading");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      setMessage("Thank you. Our team will contact you shortly with next steps.");
      event.currentTarget.reset();
      trackEvent("quote_request", { service: String(form.get("service") || "") });
    } catch {
      setStatus("error");
      setMessage("Unable to submit the quote request right now.");
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <Field label="Service / product" htmlFor="service">
        <Select id="service" name="service" defaultValue={defaultService || options[0].value}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Field>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Organization" htmlFor="organization">
          <Input id="organization" name="organization" required />
        </Field>
        <Field label="Work email" htmlFor="email">
          <Input id="email" name="email" type="email" required />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Estimated users" htmlFor="users">
          <Input id="users" name="users" />
        </Field>
        <Field label="Implementation location" htmlFor="location">
          <Input id="location" name="location" defaultValue="Tanzania" />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Timeline" htmlFor="timeline">
          <Input id="timeline" name="timeline" placeholder="e.g. 30–90 days" />
        </Field>
        <Field label="Budget range (optional)" htmlFor="budget">
          <Input id="budget" name="budget" />
        </Field>
      </div>
      <Field label="Requirements" htmlFor="requirements">
        <TextArea id="requirements" name="requirements" required />
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
        {status === "loading" ? "Submitting..." : "Request a quote"}
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