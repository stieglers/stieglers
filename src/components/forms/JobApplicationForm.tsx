"use client";

import { useState } from "react";
import { Field, Input, TextArea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { FormStatus } from "@/components/ui/FormStatus";

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_BYTES = 5 * 1024 * 1024;

export function JobApplicationForm({ position }: { position: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const file = data.get("cv");

    if (file instanceof File && file.size > 0) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        setStatus("error");
        setMessage("CV must be a PDF or Word document.");
        return;
      }
      if (file.size > MAX_BYTES) {
        setStatus("error");
        setMessage("CV must be 5MB or smaller.");
        return;
      }
    }

    setStatus("loading");
    try {
      // Frontend validation ready; connect secure upload endpoint later.
      await new Promise((resolve) => setTimeout(resolve, 400));
      setStatus("success");
      setMessage("Thank you. Your application has been received for review.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Unable to submit the application right now.");
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <input type="hidden" name="position" value={position} />
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <Input id="name" name="name" required />
        </Field>
        <Field label="Email" htmlFor="email">
          <Input id="email" name="email" type="email" required />
        </Field>
      </div>
      <Field label="Phone" htmlFor="phone">
        <Input id="phone" name="phone" type="tel" />
      </Field>
      <Field
        label="CV upload"
        htmlFor="cv"
        hint="PDF or Word document, max 5MB. Secure upload handling should be connected server-side."
      >
        <Input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx,application/pdf" />
      </Field>
      <Field label="Cover letter" htmlFor="coverLetter">
        <TextArea id="coverLetter" name="coverLetter" />
      </Field>
      <Button type="submit" disabled={status === "loading"} arrow>
        {status === "loading" ? "Submitting..." : "Submit application"}
      </Button>
      <FormStatus status={status} message={message} />
    </form>
  );
}