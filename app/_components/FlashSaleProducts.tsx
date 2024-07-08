import { FlashSaleCard } from "@/components/features/FlashSaleCard";
import { flashSaleProducts } from "@/lib/dummyData";

export function FlashSaleProducts() {
  return (
    <div className="bindX flex items-center gap-4 max-lg:flex-col xl:gap-[53px]">
      {flashSaleProducts.map((prod) => (
        <FlashSaleCard key={prod.id} data={prod} />
      ))}
    </div>
  );
}
