"use client";

import { CartItem } from "@/components/ui/CartItem";
import { featuredProducts } from "@/lib/dummyData";
import { Fragment } from "react";

export function Cart() {
  const cartItems = featuredProducts
    .filter((item) => [2, 4, 6].includes(item.id))
    .map((item) => ({
      ...item,
      qty: Math.floor(Math.random() * 10 + 1) || 0,
    }));

  return (
    <section>
      {/* desktop */}
      <table className="w-full max-md:hidden">
        <thead className="border-b border-b-secondary/50">
          <tr>
            <th className="py-6 text-start text-2xl font-semibold">Items</th>
            <th className="py-6 text-start text-2xl font-semibold">Quantity</th>
            <th className="py-6 text-start text-2xl font-semibold">Total</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <CartItem item={item} quantity={item.qty} />
            </tr>
          ))}
        </tbody>
      </table>

      {/*  mobile */}
      <div className="flex w-full flex-col gap-4 md:!hidden">
        {cartItems.map((item) => (
          <Fragment key={item.id}>
            <CartItem item={item} quantity={item.qty} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
