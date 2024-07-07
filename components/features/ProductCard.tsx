import { Product } from "@/lib/definitions";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  data: Product;
  className?: string;
};

export function ProductCard({ data, className }: ProductCardProps) {
  const {
    id,
    desc,
    discount_percentage,
    image,
    items_left,
    price,
    rating,
    reviews,
    title,
    features,
    subtitle,
  } = data;
  // &#8358;
  return (
    <div className={cn("bg-custom-white lg:rounded-r-2xl", className)}>
      <h3></h3>
    </div>
  );
}
