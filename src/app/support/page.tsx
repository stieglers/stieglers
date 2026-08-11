"use client";

import { useMemo, useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, TextArea } from "@/components/ui/Input";
import { faqs } from "@/content/faqs";
import { siteConfig } from "@/content/site";

export default function SupportPage() {
  const [ticketId, setTicketId] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const faqItems = useMemo(
    () => faqs.map((item) => ({ question: item.question, answer: item.answer })),
    [],
  );

  return (
    <>
      <PageHero
        eyebrow="Support Center"
        title="Get help with Syntrax products and services."
        lead="Submit a ticket, check status, browse FAQs and access documentation pathways."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Support" },
        ]}
      />

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Submit a ticket</h2>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Frontend ready for a future ticketing backend.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setStatusMessage(
                  "Ticket captured locally for now. Connect this form to your support backend to issue IDs.",
                );
              }}
            >
              <Field label="Email" htmlFor="email">
                <Input id="email" name="email" type="email" required />
              </Field>
              <Field label="Product / service" htmlFor="topic">
                <Select id="topic" name="topic" defaultValue="General">
                  <option>General</option>
                  <option>SyntraxSec</option>
                  <option>ENMS</option>
                  <option>POS</option>
                  <option>Pharmacy PMS</option>
                  <option>Cybersecurity services</option>
                </Select>
              </Field>
              <Field label="Issue" htmlFor="issue">
                <TextArea id="issue" name="issue" required />
              </Field>
              <Button type="submit" arrow>
                Submit ticket
              </Button>
              {statusMessage ? (
                <p className="text-sm text-[var(--text-muted)]" role="status">
                  {statusMessage}
                </p>
              ) : null}
            </form>
          </div>

          <div className="space-y-6">
            <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
              <h2 className="text-xl font-semibold">Check ticket status</h2>
              <div className="mt-4 flex gap-2">
                <Input
                  value={ticketId}
                  onChange={(event) => setTicketId(event.target.value)}
                  placeholder="Ticket ID"
                  aria-label="Ticket ID"
                />
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() =>
                    setStatusMessage(
                      ticketId
                        ? "Status lookup will connect to the ticketing backend later."
                        : "Enter a ticket ID to continue.",
                    )
                  }
                >
                  Check
                </Button>
              </div>
            </div>
            <div className="border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
              <h2 className="text-xl font-semibold">Technical support contact</h2>
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                Email{" "}
                <a className="text-[var(--blue)]" href={`mailto:${siteConfig.email.general}`}>
                  {siteConfig.email.general}
                </a>{" "}
                or call{" "}
                <a className="text-[var(--blue)]" href={`tel:${siteConfig.phone.e164}`}>
                  {siteConfig.phone.display}
                </a>
                .
              </p>
              <Button href="/resources" className="mt-4" variant="secondary" arrow>
                Product documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section bg-[var(--bg-muted)]/40">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-[-0.03em]">FAQs</h2>
          <div className="mt-8">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}