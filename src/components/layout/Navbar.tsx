"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, Moon, Search, Sun, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { SearchDialog } from "@/components/layout/SearchDialog";
import { Button } from "@/components/ui/Button";
import { mobileNavSections, primaryNav } from "@/content/navigation";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>("Solutions");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMega(null);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobileOpen);
    return () => document.body.classList.remove("menu-open");
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || openMega
            ? "border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-xl"
            : "border-b border-transparent bg-[color-mix(in_srgb,var(--bg)_55%,transparent)] backdrop-blur-md",
        )}
      >
        <div className="container flex h-[var(--header-h)] items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              const open = openMega === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMega(item.children ? item.label : null)}
                  onMouseLeave={() => setOpenMega(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex h-11 items-center gap-1 rounded-lg px-3 text-[0.9rem] font-semibold tracking-[-0.01em] transition",
                      active || open
                        ? "bg-[var(--brand-soft)] text-[var(--brand)]"
                        : "text-[var(--text-muted)] hover:bg-[var(--bg-muted)] hover:text-[var(--heading)]",
                    )}
                    onFocus={() => setOpenMega(item.children ? item.label : null)}
                  >
                    {item.label}
                    {item.children ? <ChevronDown className="size-3.5 opacity-70" /> : null}
                  </Link>

                  {item.children && open ? (
                    <div className="absolute left-1/2 top-full z-40 w-[min(92vw,720px)] -translate-x-1/2 pt-3">
                      <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow)]">
                        <div className="mb-4 flex items-end justify-between gap-4">
                          <div>
                            <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--brand)] uppercase">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm text-[var(--text-muted)]">
                              Explore Syntrax capabilities in this area.
                            </p>
                          </div>
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--heading)] hover:text-[var(--brand)]"
                          >
                            View all <ArrowUpRight className="size-3.5" />
                          </Link>
                        </div>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href + child.label}
                              href={child.href}
                              className="group rounded-xl border border-transparent px-4 py-4 transition hover:border-[var(--border)] hover:bg-[var(--brand-soft)]"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <div className="font-semibold text-[var(--heading)]">
                                    {child.label}
                                  </div>
                                  {child.description ? (
                                    <p className="mt-1 text-sm text-[var(--text-muted)]">
                                      {child.description}
                                    </p>
                                  ) : null}
                                </div>
                                <ArrowUpRight className="mt-0.5 size-4 text-[var(--brand)] opacity-0 transition group-hover:opacity-100" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 sm:gap-1.5">
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg text-[var(--text-muted)] transition hover:bg-[var(--bg-muted)] hover:text-[var(--heading)]"
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => setLocale(locale === "en" ? "sw" : "en")}
              className="hidden h-10 items-center rounded-lg px-2.5 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)] transition hover:bg-[var(--bg-muted)] hover:text-[var(--heading)] sm:inline-flex"
              aria-label="Toggle language"
            >
              {locale}
            </button>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg text-[var(--text-muted)] transition hover:bg-[var(--bg-muted)] hover:text-[var(--heading)]"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <div className="ml-1 hidden lg:block">
              <Button href="/contact" size="sm" arrow>
                Talk to us
              </Button>
            </div>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg text-[var(--heading)] transition hover:bg-[var(--bg-muted)] xl:hidden"
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
          mobileOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none",
        )}
      >
        <div className="flex h-full flex-col overflow-auto px-5 pb-10 pt-28">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--brand)] uppercase">
              Menu
            </p>
            <button
              type="button"
              className="text-sm font-medium text-[var(--text-muted)]"
              onClick={() => setSearchOpen(true)}
            >
              Search
            </button>
          </div>
          <div className="space-y-2">
            {mobileNavSections.map((section) => {
              const open = openMobileSection === section.label;
              return (
                <div
                  key={section.label}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)]"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-4 text-left font-semibold text-[var(--heading)]"
                    aria-expanded={open}
                    onClick={() => setOpenMobileSection(open ? null : section.label)}
                  >
                    {section.label}
                    <ChevronDown className={cn("size-4 transition", open && "rotate-180")} />
                  </button>
                  {open ? (
                    <div className="space-y-1 px-2 pb-3">
                      {section.items.map((item) => (
                        <Link
                          key={item.href + item.label}
                          href={item.href}
                          className="block rounded-lg px-3 py-2.5 text-[var(--text-muted)] hover:bg-[var(--brand-soft)] hover:text-[var(--brand)]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="mt-auto pt-8">
            <Button href="/contact" className="w-full" arrow>
              Talk to us
            </Button>
          </div>
        </div>
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
