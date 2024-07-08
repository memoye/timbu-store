import { cn, formatToNaira, getDiscountedPrice } from "@/lib/utils";

type PriceProps = {
  discount?: number;
  price: number;
  className?: string;
};

export function Price({ price, discount, className }: PriceProps) {
  const discountedPrice = getDiscountedPrice(price, discount);

  return (
    <div
      className={cn(
        "flex flex-col text-sm font-semibold leading-tight text-secondary md:text-base lg:text-xl",
        className,
      )}
    >
      {discountedPrice && (
        <span className="flex gap-2 lg:gap-4">
          <span>&#8358;{formatToNaira(discountedPrice)}</span>
          <span className="text-xs font-normal text-red-500 lg:text-sm">
            -{discount}%
          </span>
        </span>
      )}
      <span
        className={cn(
          discountedPrice
            ? "text-xs text-secondary/50 line-through md:text-sm"
            : "",
        )}
      >
        &#8358;{formatToNaira(price)}
      </span>
    </div>
  );
}
