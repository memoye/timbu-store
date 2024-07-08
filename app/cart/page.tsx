import { formatToNaira } from "@/lib/utils";
import { Cart } from "../_components/Cart";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function CartPage() {
  return (
    <main className="bindX my-12 text-secondary">
      <section className="max-md:mb-4 lg:space-y-4">
        <h1 className="text-lg font-semibold lg:text-5xl">Shoping Cart</h1>
        <p className="flex items-center justify-between text-lg font-semibold lg:pr-12 lg:text-2xl">
          <span>Subtotal {"(3 items)"}</span>
          <span>&#8358;{formatToNaira(400000)}</span>
        </p>
      </section>

      <Cart />

      <section className="bindX my-12 flex flex-col items-center justify-between gap-6 lg:flex-row">
        <p className="flex items-start gap-6">
          <span className="text-2xl font-semibold text-secondary">
            Pay with
          </span>
          <span className="inline-flex items-center gap-4">
            <Image
              className=""
              src={"/visa.svg"}
              width={112}
              height={52}
              alt="visa"
            />
            <Image
              className=""
              src={"/mastercard.svg"}
              width={75.01}
              height={46.32}
              alt="mastercard"
            />
          </span>
        </p>

        <Button className="max-md:w-full" size="lg" fill>
          Continue to Dashboard
        </Button>
      </section>
    </main>
  );
}
