export type InsightCategory =
  | "Cybersecurity"
  | "Technology"
  | "Digital Transformation"
  | "Infrastructure"
  | "Business Systems";

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  date: string;
  readingTime: string;
};

/**
 * CMS-ready insight placeholders.
 * These are educational topic frames, not claims about Syntrax client results.
 */
export const insights: Insight[] = [
  {
    slug: "security-is-not-an-add-on",
    title: "Security is not an add-on",
    excerpt:
      "Why institutions should engineer security into applications, identity, data and infrastructure from the start.",
    category: "Cybersecurity",
    date: "2026-03-12",
    readingTime: "6 min",
  },
  {
    slug: "modernizing-school-operations",
    title: "Modernizing school operations without disrupting the term",
    excerpt:
      "A practical approach to digitizing student records, fees and parent communication in education environments.",
    category: "Digital Transformation",
    date: "2026-02-18",
    readingTime: "5 min",
  },
  {
    slug: "infrastructure-foundations-for-growth",
    title: "Infrastructure foundations for organizations that need to keep moving",
    excerpt:
      "How resilient hosting, segmentation and monitoring readiness support business continuity.",
    category: "Infrastructure",
    date: "2026-01-27",
    readingTime: "7 min",
  },
];

export const insightCategories: InsightCategory[] = [
  "Cybersecurity",
  "Technology",
  "Digital Transformation",
  "Infrastructure",
  "Business Systems",
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}