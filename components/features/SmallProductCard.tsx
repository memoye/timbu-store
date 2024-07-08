import { Product } from "@/lib/definitions";
import Image from "next/image";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

type SmallProductCardProps = {
  data: Pick<Product, "id" | "title" | "image">;
  className?: string;
};

export function SmallProductCard({ data, className }: SmallProductCardProps) {
  const { title, image } = data;

  return (
    <div
      className={cn(
        "flex max-w-[102px] flex-col items-center gap-2 bg-custom-white text-secondary shadow-black/20 drop-shadow-lg lg:max-w-[222px]",
        className,
      )}
    >
      <h3 className="min-w-max pt-1 text-center text-sm lg:p-1 lg:text-2xl lg:font-semibold">
        {title}
      </h3>
      <div className="rounded-t-lg bg-gradient-to-b from-[#BBD8EC] to-[#E1E6EC]">
        <Image
          className="h-[111px] max-w-full object-cover object-center lg:h-[231px]"
          src={image.src}
          width={image?.w}
          height={image?.h}
          alt={image?.alt ?? title}
        />
      </div>
      <Button className="mx-1 w-full" fill>
        Add to Cart
      </Button>
    </div>
  );
}
