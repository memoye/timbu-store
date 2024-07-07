import { Product } from "@/lib/definitions";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Price } from "../ui/Price";
import { Rating } from "../ui/Rating";
import { Button } from "../ui/Button";

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
    title,
  } = data;

  const liked = false;

  return (
    <div
      className={cn(
        "relative max-w-[397px] space-y-2 rounded-r-2xl bg-custom-white p-2 text-secondary drop-shadow-lg max-xl:rounded-l-2xl xl:box-content xl:max-h-[356px]",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <h3
          title={title}
          className="mb-2 line-clamp-1 flex-1 cursor-default text-xl font-semibold max-xl:hidden"
        >
          {title}
        </h3>
        <Button
          color="ghost_primary"
          className="p-2 max-xl:absolute max-xl:right-4 max-xl:top-4 max-xl:bg-custom-white max-lg:top-6"
        >
          <Image
            src={"/wish.png"}
            className={cn(
              "max-md:size-4",
              liked ? "opacity-100" : "opacity-50",
            )}
            width={24}
            height={24}
            alt="heart icon"
          />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
      <div className="flex flex-col gap-4 xl:flex-row">
        {/* left side */}
        <div className="flex-[3] space-y-2">
          <Image
            className="max-h-[231px] rounded-lg object-cover max-md:aspect-square"
            src={image.src}
            width={image.w ?? 200}
            height={image.h ?? 300}
            alt={image.alt || title}
          />
          <h3
            title={title}
            className="mb-2 line-clamp-1 flex-1 cursor-default text-xl font-semibold xl:hidden"
          >
            {title}
          </h3>
          <Button
            className="hidden w-full rounded-lg max-lg:text-sm lg:block"
            size="lg"
            fill
          >
            Buy Now
          </Button>
        </div>

        {/* right side */}
        <div className="flex flex-1 flex-col justify-between gap-2">
          <p className="text-xs italic md:text-sm">
            {items_left ? (
              <span>{items_left} items left</span>
            ) : (
              <span>Out of stock!</span>
            )}
          </p>
          <div className="flex-wrap max-lg:flex max-lg:items-start max-lg:justify-between">
            <Price
              discount={discount_percentage}
              price={price}
              className="mb-2"
            />
            <Rating value={rating} />

            <p className="line-clamp-4 max-lg:hidden">
              {desc} Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facilis, sint. Error, fugiat. Voluptate nihil, consequuntur ad
              itaque distinctio autem beatae.
            </p>
          </div>

          <AddToCart data={data} className="" />
          <Button
            className="w-full rounded-lg max-lg:text-sm xl:hidden"
            size="lg"
            fill
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export function AddToCart({
  className,
  data,
}: {
  className?: string;
  data: Product;
}) {
  return (
    <Button
      className={cn(
        "w-full rounded-lg px-4 font-medium max-lg:text-sm xl:py-3.5 xl:text-sm",
        className,
      )}
      size="lg"
      color="primary"
    >
      <span className="">Add to cart</span>
    </Button>
  );
}
