import SmartGlassesHero from "./SmartGlassesHero";
import ProductSelector from "./ProductSelector";
import MetaSpaceBanner from "./MetaSpaceBanner";
import ModuleBaanner from "./ModuleBanner";
import { INNOVATION_ITEMS } from "./data";

export default function Innovations() {
  return (
    <section className="bg-white">
      <div>
        <section id="smartglasses" >
          <SmartGlassesHero />
        </section>
        <section id="module" >
            <ProductSelector items={INNOVATION_ITEMS} initialActiveId={INNOVATION_ITEMS[0]?.id} />
        </section>
        <ModuleBaanner/>
        <section id="metaspace" >
            <MetaSpaceBanner />
        </section>
      </div>
    </section>
  );
}
