"use client";

import { Product } from "@/lib/definitions";
import Image from "next/image";
import { QuantityInput } from "./QuantityInput";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { formatToNaira, getDiscountedPrice } from "@/lib/utils";

type CartItemProps = {
  item: Product;
  quantity: number;
  onChange?: Dispatch<SetStateAction<number>>;
};

export function CartItem({ item, quantity }: CartItemProps) {
  const [qty, setQty] = useState(quantity);
  const discountedPrice =
    getDiscountedPrice(item.price, item.discount_percentage) ?? item.price;
  const total = discountedPrice * qty;

  function handleQtyChange(val: number) {
    setQty(val);
  }

  return (
    <>
      <td className="box-content flex items-center gap-6 py-8 max-md:hidden">
        <Image
          className="max-h-[124px] max-w-[135px] rounded-lg object-cover"
          src={item.image.src}
          width={item.image?.w ?? 135}
          height={item.image.h ?? 124}
          alt={item.image?.alt ?? item.title}
        />
        <div className="text-xl font-semibold">
          <h3 className="">{item.title}</h3>
          {item.producer && (
            <p className="text-[#707678]">Produced by {item.producer}</p>
          )}
        </div>
      </td>
      <td className="max-md:hidden">
        <QuantityInput
          value={qty}
          max={item.items_left}
          // sue me 😑
          onChange={handleQtyChange}
        />
      </td>
      <td className="max-md:hidden">
        <div className="flex flex-col text-xl font-semibold">
          <span className="">&#8358;{formatToNaira(total)}</span>
          {item.producer && (
            <span className="text-[#707678]">
              &#8358;{formatToNaira(discountedPrice)} &times; {qty}
            </span>
          )}
        </div>
      </td>

      <div className="flex gap-2 md:hidden">
        <Image
          className="max-h-[130px] max-w-[135px] rounded-lg object-cover"
          src={item.image.src}
          width={item.image?.w ?? 135}
          height={item.image.h ?? 124}
          alt={item.image?.alt ?? item.title}
        />

        <div className="space-y-1">
          <div className="-space-y-1 font-semibold leading-none max-lg:text-lg">
            <h3 className="">{item.title}</h3>
            {item.producer && (
              <p className="text-[#707678] max-lg:text-base">
                Produced by {item.producer}
              </p>
            )}
          </div>
          <QuantityInput
            value={qty}
            max={item.items_left}
            onChange={handleQtyChange}
          />
          <div className="flex flex-col -space-y-1 text-lg font-semibold">
            <span className="inline-block">&#8358;{formatToNaira(total)}</span>
            {item.producer && (
              <span className="inline-block text-sm text-[#707678]">
                &#8358;{formatToNaira(discountedPrice)} &times; {qty}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
