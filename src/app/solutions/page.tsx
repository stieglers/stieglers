import { PageHero } from "@/components/shared/PageHero";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { Ecosystem } from "@/components/home/Ecosystem";
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
        title="We engineer secure digital operations."
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
      <WhatWeDo />
      <Ecosystem />
      <SolutionsFinder />
      <CtaBand />
    </>
  );
}