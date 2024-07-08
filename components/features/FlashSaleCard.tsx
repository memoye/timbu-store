import { Product } from "@/lib/definitions";
import Image from "next/image";
import { title } from "process";
import { Price } from "../ui/Price";
import { Button } from "../ui/Button";

type FlashSaleCardProps = {
  data: Pick<
    Product,
    "id" | "price" | "title" | "discount_percentage" | "items_left" | "image"
  >;
};

export function FlashSaleCard({ data }: FlashSaleCardProps) {
  const { id, title, price, discount_percentage, items_left, image } = data;

  return (
    <div className="flex max-w-full rounded-2xl bg-custom-white text-secondary drop-shadow-lg">
      <div className="p-2">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-xs text-[#707678]">{items_left} items left</p>

        <Price price={price} discount={discount_percentage} className="my-3" />

        <Button className="mb-2 w-full max-xl:text-base" fill>
          Buy Now
        </Button>
        <Button className="w-full max-xl:text-base">Add to cart</Button>
      </div>
      <Image
        className="max-h-[231px] max-w-[154px] rounded-r-2xl object-cover"
        src={image.src}
        width={image?.w ?? 154}
        height={image?.h ?? 231}
        alt={image?.alt ?? title}
      />
    </div>
  );
}
