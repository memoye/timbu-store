import { TextSection } from "@/components/ui/TextSection";
import { TrendingProducts } from "./TrendingProducts";

export function TrendingCollectionsSection() {
  return (
    <section className="py-12" id="trending">
      <TextSection
        title="Trending Collections"
        description="Save your money for future use by shopping with us for all your
        afordable wears, including classic and contemporary wears."
        ctaLabel="See all collections"
        ctaHref="/"
      />
      <TrendingProducts />
    </section>
  );
}
