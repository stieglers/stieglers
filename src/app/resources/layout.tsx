import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Resources",
  description:
    "Syntrax knowledge base with articles, guides, documentation, advisories and FAQs.",
  path: "/resources",
});

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}