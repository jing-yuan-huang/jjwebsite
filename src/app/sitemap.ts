import type { MetadataRoute } from "next";
import { PRODUCTS } from "./data/products"; 

const BASE_URL = "https://www.jorjin.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 靜態頁面（你已知存在的路由）
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/hj1-spec`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  
  const productRoutes: MetadataRoute.Sitemap =
  Object.values(PRODUCTS)
    .filter((p) => Boolean(p?.slug))
    .map((p) => ({
      url: `${BASE_URL}/products/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticRoutes, ...productRoutes];
}