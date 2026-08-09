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
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>("Solutions");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
            ? "border-b border-[var(--border)] bg-[rgba(5,8,22,0.82)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container flex h-[var(--header-h)] items-center justify-between gap-4">
          <Logo className="[&_span]:text-white" />

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
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
                      "inline-flex h-11 items-center gap-1 px-3 text-[13px] font-semibold tracking-[0.02em] text-white/70 transition hover:text-white",
                      (active || open) && "text-white",
                    )}
                    onFocus={() => setOpenMega(item.children ? item.label : null)}
                  >
                    {item.label}
                    {item.children ? <ChevronDown className="size-3.5 opacity-70" /> : null}
                  </Link>
                  {active || open ? (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-[var(--brand)] shadow-[0_0_12px_var(--brand-glow)]" />
                  ) : null}

                  {item.children && open ? (
                    <div className="absolute left-1/2 top-full z-40 w-[min(92vw,720px)] -translate-x-1/2 pt-4">
                      <div className="border border-[var(--border)] bg-[rgba(8,13,36,0.96)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                        <div className="mb-4 flex items-end justify-between gap-4">
                          <div>
                            <p className="text-[11px] font-semibold tracking-[0.18em] text-[var(--brand)] uppercase">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm text-[var(--muted)]">
                              Explore Syntrax capabilities in this area.
                            </p>
                          </div>
                          <Link
                            href={item.href}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-[var(--brand)]"
                          >
                            View all <ArrowUpRight className="size-3.5" />
                          </Link>
                        </div>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href + child.label}
                              href={child.href}
                              className="group border border-transparent px-4 py-4 transition hover:border-[var(--border)] hover:bg-[rgba(10,0,244,0.12)]"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <div className="font-semibold text-white">{child.label}</div>
                                  {child.description ? (
                                    <p className="mt-1 text-sm text-[var(--muted)]">
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

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center text-white/70 hover:text-white"
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="size-4" />
            </button>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center text-white/70 hover:text-white"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <div className="hidden lg:block">
              <Button href="/contact" size="sm" arrow>
                Talk to an Expert
              </Button>
            </div>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center text-white xl:hidden"
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
          "fixed inset-0 z-40 bg-[var(--deep)] transition xl:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex h-full flex-col overflow-auto px-5 pb-10 pt-28">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--brand)] uppercase">
              Menu
            </p>
            <button
              type="button"
              className="text-sm text-white/70"
              onClick={() => setSearchOpen(true)}
            >
              Search
            </button>
          </div>
          <div className="space-y-2">
            {mobileNavSections.map((section) => {
              const open = openMobileSection === section.label;
              return (
                <div key={section.label} className="border border-[var(--border)]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-4 text-left font-semibold text-white"
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
                          className="block px-3 py-2.5 text-[var(--muted)] hover:text-[var(--brand)]"
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
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}