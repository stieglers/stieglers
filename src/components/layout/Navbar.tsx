"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { SearchDialog } from "@/components/layout/SearchDialog";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

const landingNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Security", href: "/security" },
  { label: "Portfolio", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
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
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-[var(--border)] bg-[rgba(5,8,22,0.82)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container flex h-[var(--header-h)] items-center justify-between gap-4">
          <Link
            href="/"
            className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-[0.14em] text-[var(--heading)] transition hover:text-white"
            aria-label="Syntrax Technologies home"
          >
            SYNTRAX<span className="text-[var(--brand)]">.</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {landingNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-semibold tracking-[-0.01em] transition",
                    active
                      ? "bg-[var(--brand-soft)] text-white"
                      : "text-[var(--text-muted)] hover:bg-white/5 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-[var(--text-muted)] transition hover:bg-white/5 hover:text-white"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              <span className="hidden sm:inline">Appearance</span>
            </button>
            <div className="hidden md:block">
              <Button href="/contact" size="sm" arrow>
                Talk to our team
              </Button>
            </div>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg text-[var(--heading)] transition hover:bg-white/5 lg:hidden"
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
          "fixed inset-0 z-40 bg-[var(--bg)] transition lg:hidden",
          mobileOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col px-5 pb-10 pt-28">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {landingNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-lg font-semibold text-[var(--heading)] transition hover:bg-[var(--brand-soft)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-3 pt-8">
            <Button href="/contact" className="w-full" arrow>
              Talk to our team
            </Button>
            <button
              type="button"
              className="w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-semibold text-[var(--text-muted)]"
              onClick={() => setSearchOpen(true)}
            >
              Search the site
            </button>
          </div>
        </div>
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
