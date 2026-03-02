import SmartGlassesHero from "./SmartGlassesHero";
import ProductSelector from "./ProductSelector";
import MetaSpaceBanner from "./MetaSpaceBanner";
import ModuleBanner from "./ModuleBanner";
import type { HomeLocale } from "@/lib/homeLocale";


type InnovationsProps = {
    variant: "smartglasses" | "module" | "metaspace";
    locale?: HomeLocale;
  };
  
  export default function Innovations({ variant, locale = "en" }: InnovationsProps) {
    if (variant === "smartglasses") {
      return (
      <>
        <SmartGlassesHero locale={locale} />
        <ProductSelector locale={locale} />
      </>

      );
    }
  
    if (variant === "module") {
      return  <ModuleBanner locale={locale} />;
    }
  
    if (variant === "metaspace") {
      return <MetaSpaceBanner locale={locale} />;
    }
  
    return null;
  }
  
