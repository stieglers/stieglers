import { Hero } from "@/components/home/Hero";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { Ecosystem } from "@/components/home/Ecosystem";
import { CybersecuritySection } from "@/components/home/CybersecuritySection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { EngineeringSection } from "@/components/home/EngineeringSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { WhySyntrax } from "@/components/home/WhySyntrax";
import { TrustSection } from "@/components/home/TrustSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { CtaBand } from "@/components/shared/CtaBand";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata = createMetadata({
  title: `${siteConfig.name} | Secure Digital Operations`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Ecosystem />
      <CybersecuritySection />
      <ProductsSection />
      <EngineeringSection />
      <ServicesSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <WhySyntrax />
      <TrustSection />
      <InsightsSection />
      <CtaBand />
    </>
  );
}