// src/app/products/[slug]/page.tsx
import { PRODUCTS } from "../../data/products";
import ProductTemplate from "../../../components/products/ProductTemplate";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS[slug];
  

  if (!product) return notFound();

  return <ProductTemplate product={product} />;
}