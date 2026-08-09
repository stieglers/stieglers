import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { FloatingContact } from "@/components/layout/FloatingContact";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <TopBar />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <FloatingContact />
      <CookieBanner />
    </>
  );
}