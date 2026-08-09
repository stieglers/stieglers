import { notFound } from "next/navigation";
import { services, getService } from "@/content/services";
import { ServicePage } from "@/components/templates/ServicePage";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const service = getService(slug);
    if (!service) return {};
    return createMetadata({
      title: service.name,
      description: service.summary,
      path: `/services/${service.slug}`,
    });
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
