import Image from "next/image";
import Link from "next/link";

export function CartBtn() {
  return (
    <Link
      href="/cart"
      title="Cart"
      className="relative flex items-center gap-2 text-secondary lg:mr-2"
      type="button"
    >
      <Image
        src={"/cart.svg"}
        className="hidden size-8 lg:inline-block"
        width={40}
        height={40}
        alt="shopping cart"
      />
      <Image
        src={"/cart_mobile.svg"}
        className="relative inline-block lg:hidden"
        width={24}
        height={24}
        alt="shopping cart"
      />
      <span className="sr-only text-lg font-semibold xl:not-sr-only">Cart</span>
      <span className="font-medium max-lg:absolute max-lg:-right-4 max-lg:-top-2 max-lg:scale-75 max-lg:rounded-full max-lg:bg-secondary max-lg:px-2 max-lg:py-1 max-lg:text-xs max-lg:text-custom-white">
        3
      </span>
    </Link>
  );
}
