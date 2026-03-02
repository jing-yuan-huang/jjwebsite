import SmartGlassesHero from "./SmartGlassesHero";
import ProductSelector from "./ProductSelector";
import MetaSpaceBanner from "./MetaSpaceBanner";
import ModuleBanner from "./ModuleBanner";


type InnovationsProps = {
    variant: "smartglasses" | "module" | "metaspace";
  };
  
  export default function Innovations({ variant }: InnovationsProps) {
    if (variant === "smartglasses") {
      return (
      <>
        <SmartGlassesHero />
        <ProductSelector
        />
      </>

      );
    }
  
    if (variant === "module") {
      return  <ModuleBanner />;
    }
  
    if (variant === "metaspace") {
      return <MetaSpaceBanner />;
    }
  
    return null;
  }
  