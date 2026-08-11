import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Vulnerability Disclosure",
  description:
    "Responsible vulnerability disclosure process for Syntrax Technologies systems and products.",
  path: "/security/disclosure",
});

export default function DisclosureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}