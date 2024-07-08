import { SmallProductCard } from "@/components/features/SmallProductCard";
import { trendingProducts } from "@/lib/dummyData";

export function TrendingProducts() {
  return (
    <section className="bindX my-12 max-w-[100dvw] overflow-x-auto">
      <ul className="grid grid-cols-5 justify-between gap-4 max-lg:w-max lg:gap-8">
        {trendingProducts.map((prod) => (
          <SmallProductCard key={prod.id} data={prod} className="" />
        ))}
      </ul>
    </section>
  );
}
