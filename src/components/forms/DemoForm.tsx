"use client";

import { useState } from "react";
import { Field, Input, Select, TextArea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { products } from "@/content/products";
import { trackEvent } from "@/lib/analytics";

export function DemoForm({ defaultProduct }: { defaultProduct?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (String(form.get("website") || "")) return;
    setStatus("loading");
    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      setMessage("Thank you. Our team will contact you shortly.");
      event.currentTarget.reset();
      trackEvent("demo_request", { product: String(form.get("product") || "") });
    } catch {
      setStatus("error");
      setMessage("Unable to submit the demo request right now.");
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" htmlFor="fullName">
          <Input id="fullName" name="fullName" required />
        </Field>
        <Field label="Organization" htmlFor="organization">
          <Input id="organization" name="organization" required />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Work email" htmlFor="email">
          <Input id="email" name="email" type="email" required />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <Input id="phone" name="phone" type="tel" />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Country" htmlFor="country">
          <Input id="country" name="country" defaultValue="Tanzania" />
        </Field>
        <Field label="Industry" htmlFor="industry">
          <Input id="industry" name="industry" />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Product" htmlFor="product">
          <Select id="product" name="product" defaultValue={defaultProduct || products[0].slug}>
            {products.map((product) => (
              <option key={product.slug} value={product.slug}>
                {product.name}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Number of users" htmlFor="users">
          <Input id="users" name="users" type="number" min={1} />
        </Field>
      </div>
      <Field label="Message" htmlFor="message">
        <TextArea id="message" name="message" />
      </Field>
      <label className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
        <input type="checkbox" name="privacy" required className="mt-1" />
        <span>
          I consent to Syntrax contacting me about this demo request under the{" "}
          <a href="/privacy" className="text-[var(--blue)] underline">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      <Button type="submit" disabled={status === "loading"} arrow>
        {status === "loading" ? "Submitting..." : "Request a demo"}
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