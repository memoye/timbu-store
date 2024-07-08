import { SmallProductCard } from "@/components/features/SmallProductCard";
import { trendingProducts } from "@/lib/dummyData";

export function TrendingProducts() {
  return (
    <div className="bindX mx-auto my-12 max-w-[100dvw] overflow-x-auto">
      <ul className="mx-auto grid w-full grid-cols-5 place-items-center gap-4 max-lg:w-max lg:gap-8">
        {trendingProducts.map((prod) => (
          <SmallProductCard key={prod.id} data={prod} className="" />
        ))}
      </ul>
    </div>
  );
}
