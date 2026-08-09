import { Hero } from "@/components/home/Hero";
import { DeliverablesSection } from "@/components/home/DeliverablesSection";
import { FocusBar } from "@/components/home/FocusBar";
import { PracticeAreas } from "@/components/home/PracticeAreas";
import { TrustPartners } from "@/components/home/TrustPartners";
import { NewsletterBand } from "@/components/home/NewsletterBand";
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
      <DeliverablesSection />
      <FocusBar />
      <PracticeAreas />
      <TrustPartners />
      <NewsletterBand />
    </>
  );
}
