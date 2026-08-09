import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { SiteShell } from "@/components/layout/SiteShell";
import { createMetadata, organizationJsonLd } from "@/lib/seo";
import { siteConfig } from "@/content/site";
import "./globals.css";

const heading = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('syntrax-theme');var dark=t!=='light';document.documentElement.classList.toggle('dark',dark);document.documentElement.classList.toggle('light',!dark);document.documentElement.style.colorScheme=dark?'dark':'light';}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <ThemeProvider>
          <LocaleProvider>
            <SiteShell>{children}</SiteShell>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}