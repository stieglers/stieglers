"use client";

import { useState } from "react";
import { Field, Input, Select, TextArea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { FormStatus } from "@/components/ui/FormStatus";
import { trackEvent } from "@/lib/analytics";

const departments = [
  "Sales",
  "Cybersecurity",
  "Technical Support",
  "Partnerships",
  "Careers",
  "General Inquiry",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (String(form.get("website") || "")) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      setMessage("Thank you. Our team will contact you shortly.");
      event.currentTarget.reset();
      trackEvent("contact_submission", {
        department: String(form.get("department") || ""),
      });
    } catch {
      setStatus("error");
      setMessage("Unable to send your message right now. Please try again later.");
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit} noValidate>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <Input id="name" name="name" required autoComplete="name" />
        </Field>
        <Field label="Organization" htmlFor="organization">
          <Input id="organization" name="organization" autoComplete="organization" />
        </Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Work email" htmlFor="email">
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </Field>
      </div>
      <Field label="Department" htmlFor="department">
        <Select id="department" name="department" required defaultValue="Sales">
          {departments.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="Message" htmlFor="message">
        <TextArea id="message" name="message" required />
      </Field>
      <label className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
        <input type="checkbox" name="privacy" required className="mt-1" />
        <span>
          I agree to the processing of my information according to the{" "}
          <a href="/privacy" className="text-[var(--blue)] underline">
            Privacy Policy
          </a>
          .
        </span>
      </label>
      <Button type="submit" disabled={status === "loading"} arrow>
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>
      <FormStatus status={status} message={message} />
    </form>
  );
}