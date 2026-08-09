import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { products } from "@/content/products";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/products",
    "/industries",
    "/solutions",
    "/case-studies",
    "/insights",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
    "/security",
    "/security/disclosure",
    "/security/advisories",
    "/accessibility",
    "/cookies",
    "/client-portal",
    "/support",
    "/resources",
    "/status",
    "/demo",
    "/consultation",
    "/quote",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...products.map((product) => ({
      url: `${base}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...industries.map((industry) => ({
      url: `${base}/industries/${industry.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...insights.map((insight) => ({
      url: `${base}/insights/${insight.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}