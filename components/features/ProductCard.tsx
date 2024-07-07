import { Product } from "@/lib/definitions";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  data: Product;
  className?: string;
};

export function ProductCard({ data, className }: ProductCardProps) {
  const { id } = data;

  return <div className={cn("", className)}></div>;
}
