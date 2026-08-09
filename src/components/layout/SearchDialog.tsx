"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { searchSite } from "@/lib/search";
import { trackEvent } from "@/lib/analytics";

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchSite(query), [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-label="Site search">
      <button
        type="button"
        className="absolute inset-0 bg-[rgba(7,20,38,0.55)] backdrop-blur-sm"
        aria-label="Close search"
        onClick={onClose}
      />
      <div className="relative mx-auto mt-[12vh] w-[min(100%-1.5rem,640px)] overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-elevated)] shadow-[var(--shadow)]">
        <div className="flex items-center gap-3 border-b border-[var(--border)] px-4">
          <Search className="size-4 text-[var(--slate)]" aria-hidden />
          <input
            autoFocus
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              if (event.target.value.length > 2) {
                trackEvent("search", { query: event.target.value });
              }
            }}
            placeholder="Search services, products, industries, articles..."
            className="h-14 w-full bg-transparent outline-none"
          />
          <button type="button" onClick={onClose} aria-label="Close search" className="p-2">
            <X className="size-4" />
          </button>
        </div>
        <div className="max-h-[50vh] overflow-auto p-2">
          {!query ? (
            <p className="px-3 py-6 text-sm text-[var(--text-muted)]">
              Search across services, products, industries, FAQs and resources.
            </p>
          ) : results.length === 0 ? (
            <div className="px-3 py-6 text-sm text-[var(--text-muted)]">
              No results found.
              <button
                type="button"
                className="ml-2 text-[var(--blue)] underline"
                onClick={() => setQuery("")}
              >
                Clear
              </button>
            </div>
          ) : (
            <ul className="space-y-1">
              {results.map((result) => (
                <li key={result.href + result.title}>
                  <Link
                    href={result.href}
                    onClick={onClose}
                    className="block rounded-[var(--radius-sm)] px-3 py-3 hover:bg-[var(--accent-soft)]"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--blue)]">
                      {result.category}
                    </div>
                    <div className="mt-1 font-semibold text-[var(--heading)]">{result.title}</div>
                    <p className="mt-1 line-clamp-2 text-sm text-[var(--text-muted)]">
                      {result.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}