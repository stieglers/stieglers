"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "syntrax-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [manage, setManage] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = window.localStorage.getItem(STORAGE_KEY);
    if (!existing) setVisible(true);
  }, []);

  function save(consent: Consent) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] p-4">
      <div className="mx-auto w-[min(100%,720px)] border border-[var(--border)] bg-[var(--bg-elevated)] p-5 shadow-[var(--shadow)]">
        <p className="text-sm font-semibold text-[var(--heading)]">Privacy preferences</p>
        <p className="mt-2 text-sm text-[var(--text-muted)]">
          We use necessary cookies to run the site. Optional analytics and marketing cookies
          load only with your consent. Read the{" "}
          <Link href="/cookies" className="text-[var(--blue)] underline">
            Cookie Policy
          </Link>
          .
        </p>

        {manage ? (
          <div className="mt-4 space-y-3 text-sm">
            <label className="flex items-center justify-between gap-3">
              <span>Necessary</span>
              <input type="checkbox" checked disabled />
            </label>
            <label className="flex items-center justify-between gap-3">
              <span>Analytics</span>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
              />
            </label>
            <label className="flex items-center justify-between gap-3">
              <span>Marketing</span>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(event) => setMarketing(event.target.checked)}
              />
            </label>
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          <Button
            size="sm"
            onClick={() => save({ necessary: true, analytics: true, marketing: true })}
          >
            Accept
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => save({ necessary: true, analytics: false, marketing: false })}
          >
            Reject non-essential
          </Button>
          {manage ? (
            <Button
              size="sm"
              variant="ghost"
              onClick={() =>
                save({ necessary: true, analytics, marketing })
              }
            >
              Save preferences
            </Button>
          ) : (
            <Button size="sm" variant="ghost" onClick={() => setManage(true)}>
              Manage preferences
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}