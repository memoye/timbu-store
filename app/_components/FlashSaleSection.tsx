import { TextSection } from "@/components/ui/TextSection";
import { FlashSaleProducts } from "./FlashSaleProducts";

export function FlashSaleSection() {
  return (
    <section className="">
      <TextSection
        title="Flash Sales"
        description="Join the moving trend! it’s the last flash sale for the year. Enjoy massive discount for some beautiful wears"
        ctaLabel="See more collections"
        ctaHref="/"
      />
      <FlashSaleProducts />
    </section>
  );
}
