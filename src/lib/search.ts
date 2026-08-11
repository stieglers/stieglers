import { services } from "@/content/services";
import { products } from "@/content/products";
import { industries } from "@/content/industries";
import { insights } from "@/content/insights";
import { faqs } from "@/content/faqs";

export type SearchResult = {
  category: string;
  title: string;
  description: string;
  href: string;
};

const staticPages: SearchResult[] = [
  {
    category: "Page",
    title: "About Syntrax",
    description: "Mission, approach and regional focus.",
    href: "/about",
  },
  {
    category: "Page",
    title: "Contact",
    description: "Talk to sales, security, support or partnerships.",
    href: "/contact",
  },
  {
    category: "Page",
    title: "Support Center",
    description: "Submit tickets, FAQs and documentation pathways.",
    href: "/support",
  },
  {
    category: "Page",
    title: "Security & Trust Center",
    description: "Security philosophy, disclosure and trust practices.",
    href: "/security",
  },
  {
    category: "Page",
    title: "Careers",
    description: "Open roles and life at Syntrax.",
    href: "/careers",
  },
  {
    category: "Documentation",
    title: "Resources",
    description: "Guides, documentation and knowledge base.",
    href: "/resources",
  },
  {
    category: "Page",
    title: "Case Studies",
    description: "Case study framework for Syntrax engagements.",
    href: "/case-studies",
  },
];

export function getSearchIndex(): SearchResult[] {
  return [
    ...services.map((service) => ({
      category: "Service",
      title: service.name,
      description: service.summary,
      href: `/services/${service.slug}`,
    })),
    ...products.map((product) => ({
      category: "Product",
      title: product.name,
      description: product.summary,
      href: `/products/${product.slug}`,
    })),
    ...industries.map((industry) => ({
      category: "Industry",
      title: industry.name,
      description: industry.summary,
      href: `/industries/${industry.slug}`,
    })),
    ...insights.map((insight) => ({
      category: "Article",
      title: insight.title,
      description: insight.excerpt,
      href: `/insights/${insight.slug}`,
    })),
    ...faqs.map((faq) => ({
      category: "FAQ",
      title: faq.question,
      description: faq.answer,
      href: "/support#faq",
    })),
    ...staticPages,
  ];
}

export function searchSite(query: string, limit = 8): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getSearchIndex()
    .filter((item) =>
      [item.title, item.description, item.category].join(" ").toLowerCase().includes(q),
    )
    .slice(0, limit);
}