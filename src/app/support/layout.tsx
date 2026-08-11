import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Support Center",
  description:
    "Syntrax Support Center for tickets, FAQs, documentation and technical support.",
  path: "/support",
});

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}