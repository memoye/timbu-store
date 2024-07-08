import Image from "next/image";
import Link from "next/link";

export function CartBtn() {
  return (
    <Link
      href="/cart"
      title="Cart"
      className="flex items-center gap-2 text-secondary lg:mr-2"
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
        className="inline-block lg:hidden"
        width={24}
        height={24}
        alt="shopping cart"
      />
      <span className="sr-only text-lg font-semibold xl:not-sr-only">Cart</span>
      <span className="font-medium">3</span>
    </Link>
  );
}
