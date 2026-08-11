import { notFound } from "next/navigation";
import { industries, getIndustry } from "@/content/industries";
import { IndustryPage } from "@/components/templates/IndustryPage";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const industry = getIndustry(slug);
    if (!industry) return {};
    return createMetadata({
      title: industry.name,
      description: industry.summary,
      path: `/industries/${industry.slug}`,
    });
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  return <IndustryPage industry={industry} />;
}
