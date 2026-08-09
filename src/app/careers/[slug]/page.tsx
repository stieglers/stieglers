import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";

/**
 * Job detail route is ready for CMS-driven roles.
 * Currently no public openings are published.
 */
export function generateStaticParams() {
  return [] as { slug: string }[];
}

export const metadata = createMetadata({
  title: "Role details",
  description: "Syntrax Technologies job detail page.",
  path: "/careers",
});

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;
  notFound();
}