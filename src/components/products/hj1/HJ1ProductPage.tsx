import ProductTemplate from "@/components/products/ProductTemplate";
import HJ1SpecLayout from "@/components/products/hj1/HJ1SpecLayout";
import type { Product } from "@/app/data/products";

export default function HJ1ProductPage({ product }: { product: Product }) {
  return (
    <>
    
      <ProductTemplate
        product={product}
        showHero={true}
        showIntro={false}
        showGallery={false}
        showSpecs={false} 
      />

    
      <HJ1SpecLayout />
    </>
  );
}