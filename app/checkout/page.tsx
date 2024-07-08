import { buttonVariants } from "@/components/ui/Button";
import { featuredProducts } from "@/lib/dummyData";
import { formatToNaira } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main className="mt-12 text-secondary">
      <div className="bindX">
        <Link
          href="/"
          className={buttonVariants({
            color: "secondary",
            size: "md",
            className: "px-4 text-base font-medium",
          })}
        >
          &#x2190; Continue Shopping
        </Link>
      </div>

      <section className="bindX">
        <h1 className="my-4 text-lg font-semibold lg:my-6 lg:text-5xl">
          Checkout
        </h1>
      </section>
      <hr className="border-b border-b-secondary/50" />
      <section className="bindX flex items-start justify-between py-6">
        <div className="my-4 flex items-start gap-4">
          <input
            type="checkbox"
            className="mt-2 inline-block size-8 !rounded-full border-none accent-primary"
            defaultChecked
            id="del"
          />
          <div className="">
            <h2 className="mb-2 text-lg font-semibold lg:text-5xl">
              Choose Delivery option
            </h2>
            <div className="text-[#707678]">
              <div className="text-base font-semibold md:text-lg lg:text-xl">
                John Debenson
              </div>
              <div className="max-w-xs">
                35 Babatunde Street, <br /> Lagos Island
                <a className="block" href="tel:2347030665565">
                  07030665565
                </a>
              </div>
            </div>
          </div>
        </div>
        <label
          htmlFor="del"
          className="mt-4 border border-primary px-2.5 py-1 font-semibold text-primary"
        >
          Cancel
        </label>
      </section>
      <hr className="border-b border-b-secondary/50" />
      <section className="bindX flex items-start justify-between py-6">
        <div className="my-4 flex items-start gap-4">
          <input
            type="checkbox"
            className="mt-2 inline-block size-8 !rounded-full border-none accent-primary"
            defaultChecked
            id="pt"
          />
          <div className="">
            <h2 className="mb-2 text-lg font-semibold lg:text-5xl">
              Payment Options
            </h2>
            <ul className="mt-6 space-y-4">
              {["Pay Now", "Buy Now, Pay Later", "Pay on Delivery"].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 font-semibold text-[#707678] lg:text-2xl"
                  >
                    <input
                      type="radio"
                      className="size-[26.67px] accent-primary"
                      name="options"
                      id={item}
                    />
                    <label htmlFor={item}>{item}</label>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <label
          htmlFor="pt"
          className="mt-4 border border-primary px-2.5 py-1 font-semibold text-primary"
        >
          Cancel
        </label>
      </section>
      <hr className="border-b border-b-secondary/50" />
      <section className="bindX py-6">
        <h2 className="mt-4 text-center text-lg font-semibold lg:mb-10 lg:text-5xl">
          Payment Options
        </h2>

        <div className="flex items-center gap-4 lg:gap-10">
          {featuredProducts
            .filter((item) => [2, 4, 6].includes(item.id))
            .map((item) => ({
              ...item,
              qty: Math.floor(Math.random() * 10 + 1) || 0,
            }))
            .map((item) => (
              <div className="flex items-center gap-2 lg:gap-4" key={item.id}>
                <Image
                  className="max-h-[130px] max-w-[135px] rounded-lg object-cover"
                  src={item.image.src}
                  width={item.image?.w ?? 135}
                  height={item.image.h ?? 124}
                  alt={item.image?.alt ?? item.title}
                />
                <div className="text-[#707678]">
                  <h3 className="text-2xl font-semibold text-secondary">
                    {item.title}
                  </h3>
                  <p className="font-semibold">Produced by {item.producer}</p>
                  <p className="inline-block text-sm">
                    &#8358;{formatToNaira(item.price)}
                  </p>
                  <p>Qty: {item.qty}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="">
        <div className="max-w-md font-semibold">
          <p className="flex items-center justify-between text-secondary">
            <span>Sub total</span>
            <span>&#8358;{formatToNaira(410000)}</span>
          </p>
          <p className="flex items-center justify-between">
            <span className="text-[#707678]">Delivery fee</span>
            <span className="text-secondary">
              &#8358;{formatToNaira(50000)}
            </span>
          </p>
        </div>
        <Link
          href="/checkout"
          className={buttonVariants({
            className: "max-md:w-full",
            fill: true,
            size: "lg",
          })}
        >
          Continue to checkout
        </Link>
      </section>
    </main>
  );
}
