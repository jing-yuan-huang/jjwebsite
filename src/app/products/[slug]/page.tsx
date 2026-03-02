// src/app/products/[slug]/page.tsx
import { PRODUCTS } from "@/app/data/products";
import { notFound } from "next/navigation";
import ProductTemplate from "@/components/products/ProductTemplate";
import HJ1ProductPage from "@/components/products/hj1/HJ1ProductPage";
import type { Product } from "@/app/data/products";

type Params = { slug: Product["slug"] };

function isProductSlug(slug: string): slug is Product["slug"] {
  return slug in PRODUCTS;
}


function hasDetailPage(product: Product): boolean {
  const flag = product.hasDetailPage;
  return flag !== false;
}

export function generateStaticParams(): Params[] {
  return Object.keys(PRODUCTS)
    .filter((slug) => hasDetailPage(PRODUCTS[slug as Product["slug"]]))
    .map((slug) => ({
      slug: slug as Product["slug"],
    }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isProductSlug(slug)) return notFound();

  const product = PRODUCTS[slug];

  
  if (!hasDetailPage(product)) return notFound();

  if (slug === "hj1") {
    return <HJ1ProductPage product={product} />;
  }

  return <ProductTemplate product={product} />;
}