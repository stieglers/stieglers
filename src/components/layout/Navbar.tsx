"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { SearchDialog } from "@/components/layout/SearchDialog";
import { Button } from "@/components/ui/Button";
import { mobileNavSections, primaryNav } from "@/content/navigation";
import { useLocale } from "@/components/providers/LocaleProvider";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>("Services");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-elevated)_90%,transparent)] backdrop-blur-xl shadow-[var(--shadow-sm)]"
            : "border-[var(--border)] bg-[color-mix(in_srgb,var(--bg-elevated)_88%,transparent)] backdrop-blur-md",
        )}
      >
        <div className="container flex h-[var(--header-h)] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex h-10 items-center gap-1 px-3 text-[13px] font-semibold tracking-[0.01em] text-[var(--text-muted)] transition hover:text-[var(--royal)]",
                      active && "text-[var(--royal)]",
                    )}
                  >
                    {item.label}
                    {item.children ? <ChevronDown className="size-3.5 opacity-70" /> : null}
                  </Link>
                  {item.children ? (
                    <div className="invisible absolute left-0 top-full z-40 min-w-64 translate-y-2 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="mt-2 border border-[var(--border)] bg-[var(--bg-elevated)] p-2 shadow-[var(--shadow)]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-[var(--radius-sm)] px-3 py-2.5 hover:bg-[var(--accent-soft)]"
                          >
                            <div className="text-sm font-semibold text-[var(--heading)]">
                              {child.label}
                            </div>
                            {child.description ? (
                              <p className="mt-1 text-xs text-[var(--text-muted)]">
                                {child.description}
                              </p>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--heading)]"
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="size-4" />
            </button>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--heading)]"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <div
              className="hidden items-center rounded-[var(--radius-sm)] border border-[var(--border)] p-0.5 text-xs font-semibold md:inline-flex"
              role="group"
              aria-label="Language selector"
            >
              {(["en", "sw"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  className={cn(
                    "rounded-[4px] px-2 py-1 uppercase",
                    locale === code
                      ? "bg-[var(--accent-soft)] text-[var(--blue)]"
                      : "text-[var(--text-muted)]",
                  )}
                  onClick={() => setLocale(code)}
                  aria-pressed={locale === code}
                >
                  {code}
                </button>
              ))}
            </div>
            <div className="hidden lg:block">
              <Button href="/contact" size="sm" arrow>
                Talk to an Expert
              </Button>
            </div>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] text-[var(--heading)] hover:bg-[var(--accent-soft)] xl:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((value) => !value)}
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[var(--bg)] transition xl:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-full flex-col overflow-auto px-5 pb-10 pt-24">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm font-semibold tracking-[0.12em] text-[var(--text-muted)] uppercase">
              Menu
            </p>
            <button
              type="button"
              className="text-sm text-[var(--blue)]"
              onClick={() => setSearchOpen(true)}
            >
              Search
            </button>
          </div>

          <div className="space-y-2">
            {mobileNavSections.map((section) => {
              const open = openMobileSection === section.label;
              return (
                <div key={section.label} className="border border-[var(--border)] bg-[var(--bg-elevated)]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold"
                    aria-expanded={open}
                    onClick={() =>
                      setOpenMobileSection(open ? null : section.label)
                    }
                  >
                    {section.label}
                    <ChevronDown
                      className={cn("size-4 transition", open && "rotate-180")}
                    />
                  </button>
                  <div className={cn(open ? "block" : "hidden")}>
                    <div className="space-y-1 px-2 pb-3">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-[var(--radius-sm)] px-3 py-2.5 text-[var(--text-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--heading)]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
            <Link
              href="/about"
              className="block border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 font-semibold"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 font-semibold"
            >
              Contact
            </Link>
            <Link
              href="/client-portal"
              className="block border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3 font-semibold"
            >
              Client Portal
            </Link>
          </div>

          <div className="mt-8">
            <Button href="/contact" className="w-full" arrow>
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}