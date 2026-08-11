import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/utils";

export function createMetadata({
  title,
  description,
  path = "/",
  }: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_TZ",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email.general,
    telephone: siteConfig.phone.e164,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressCountry: "TZ",
    },
    areaServed: siteConfig.region,
    description: siteConfig.description,
  };
}