import { ProductCard } from "@/components/features/ProductCard";
import { featuredProducts } from "@/lib/dummyData";

export function ProductsSection() {
  return (
    <section className="bindX grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
      {featuredProducts.map((p) => (
        <ProductCard key={p.id} data={p} className="" />
      ))}
    </section>
  );
}
