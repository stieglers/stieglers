import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { CybersecuritySection } from "@/components/home/CybersecuritySection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhySyntrax } from "@/components/home/WhySyntrax";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SolutionsFinder } from "@/components/home/SolutionsFinder";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { EngineeringSection } from "@/components/home/EngineeringSection";
import { CtaBand } from "@/components/shared/CtaBand";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = createMetadata({
  title: `${siteConfig.name} | Cybersecurity & Digital Solutions`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <SolutionsSection />
      <SolutionsFinder />
      <ProductsSection />
      <CybersecuritySection />
      <ServicesSection />
      <WhySyntrax />
      <IndustriesSection />
      <ProcessSection />
      <EngineeringSection />
      <CaseStudiesSection />
      <InsightsSection />
      <AboutTeaser />
      <CtaBand />
    </>
  );
}