"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const whatsapp = siteConfig.whatsappEnabled
    ? `https://wa.me/${siteConfig.phone.whatsapp}?text=${encodeURIComponent(
        "Hello Syntrax, I would like to discuss a project.",
      )}`
    : null;

  return (
    <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      <div
        className={cn(
          "mb-3 flex w-56 flex-col gap-2 border border-[var(--border)] bg-[var(--bg-elevated)] p-3 shadow-[var(--shadow)] transition",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        {whatsapp ? (
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-[var(--accent-soft)]"
          >
            <MessageCircle className="size-4 text-[var(--brand)]" />
            WhatsApp
          </a>
        ) : null}
        <a
          href={`tel:${siteConfig.phone.e164}`}
          className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-[var(--accent-soft)]"
        >
          <Phone className="size-4 text-[var(--brand)]" />
          Call
        </a>
        <a
          href={`mailto:${siteConfig.email.general}`}
          className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-[var(--accent-soft)]"
        >
          <Mail className="size-4 text-[var(--brand)]" />
          Email
        </a>
      </div>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--brand)] text-white shadow-[0_0_30px_rgba(10,0,244,0.45)]"
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
      </button>
    </div>
  );
}