import { ProductCard } from "@/components/features/ProductCard";
import { featuredProducts } from "@/lib/dummyData";

export function ProductsSection() {
  return (
    <div>
      <ProductCard data={featuredProducts[0]} />
    </div>
  );
}
