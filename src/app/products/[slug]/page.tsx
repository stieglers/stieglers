import { notFound } from "next/navigation";
import { products, getProduct } from "@/content/products";
import { ProductPage } from "@/components/templates/ProductPage";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const product = getProduct(slug);
    if (!product) return {};
    return createMetadata({
      title: product.name,
      description: product.summary,
      path: `/products/${product.slug}`,
    });
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
