import { TextSection } from "@/components/ui/TextSection";
import { NewProducts } from "./NewProducts";

export function NewCollectionsSection() {
  return (
    <section className="py-12">
      <TextSection
        title="New Collections"
        description="Save your money for future use by shopping with us for all your
        afordable wears, including classic and contemporary wears."
        ctaLabel="See all collections"
        ctaHref="/"
      />
      <NewProducts />
    </section>
  );
}
