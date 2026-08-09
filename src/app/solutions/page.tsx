import { PageHero } from "@/components/shared/PageHero";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { SolutionsFinder } from "@/components/home/SolutionsFinder";
import { CtaBand } from "@/components/shared/CtaBand";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Solutions",
  description:
    "Explore Syntrax solutions across cybersecurity, enterprise systems, digital transformation and infrastructure.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="What we solve for organizations that need secure digital operations."
        lead="From cybersecurity and enterprise systems to transformation and infrastructure."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Solutions" },
        ]}
        actions={[
          { label: "Talk to an Expert", href: "/contact" },
          { label: "Find your solution", href: "#finder", variant: "secondary" },
        ]}
      />
      <SolutionsSection />
      <SolutionsFinder />
      <CtaBand />
    </>
  );
}