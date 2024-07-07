"use client";

import { Button } from "@/components/ui/Button";
import { Product } from "@/lib/definitions";
import { topProducts } from "@/lib/dummyData";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { title } from "process";
import { useState } from "react";

const MAX = 6;
export function HeroSection() {
  const data: Partial<Product>[] = topProducts;

  const [currIndex, setCurrIndex] = useState(0);

  const product = data?.[currIndex];

  return (
    <section className="bindX my-12 text-secondary">
      {/* card */}
      <div className="relative mx-auto max-w-[1331px] justify-stretch max-lg:flex-col md:flex md:gap-4 lg:aspect-video lg:gap-6 lg:rounded-2xl lg:shadow-md xl:aspect-auto xl:h-[38rem]">
        {/* imageSide */}
        <div className="relative h-full overflow-hidden rounded-2xl text-lg md:flex-[2] xl:min-w-[827px]">
          <div className="px-4 py-8 lg:absolute lg:inset-0 lg:flex lg:items-end lg:text-custom-white">
            <div className="z-[10] max-lg:text-center">
              <h1 className="text-4xl font-semibold leading-none md:text-[55px]">
                VirgoWears Digital Collection
              </h1>
              <p className="mt-4 max-w-md text-xl font-medium max-lg:mx-auto">
                Do more for yourself by shopping with a world class fashion
                design company.
              </p>
            </div>
          </div>

          <Image
            src={product.image!.src}
            key={currIndex}
            className="gra z-0 h-full w-full max-w-[51.7rem] animate-color-in rounded-2xl object-cover brightness-50 saturate-200"
            width={product.image?.w ?? 500}
            height={product.image?.w ?? 500}
            alt={product.image?.alt ?? title}
          />
        </div>

        {/* textSide */}
        <div className="flex-1 overflow-hidden p-4 lg:max-w-max xl:pr-6">
          <div className="mb-4 w-full text-start md:text-center lg:text-start">
            <h2
              className="mb-2 max-w-md truncate text-3xl font-semibold leading-snug md:mx-auto lg:mx-0 lg:mb-4 lg:text-[55px]"
              title={product.title}
            >
              {product.title}
            </h2>
            {product.subtitle && (
              <p className="text-2xl font-medium lg:text-3xl lg:font-normal">
                {product.subtitle}
              </p>
            )}
            <p>⭐⭐⭐⭐</p>
          </div>
          <ul className="my-4 block list-inside list-disc text-xl md:hidden lg:block">
            {product.features?.map((feat, i) => (
              <li key={feat + i} className="">
                {feat}
              </li>
            ))}
          </ul>
          <Button
            className="block w-fit font-semibold max-lg:mx-auto max-md:w-full"
            fill
          >
            Buy Now
          </Button>
        </div>

        <ul className="absolute -bottom-14 hidden gap-4 lg:flex">
          {topProducts.slice(0, MAX - 1).map((prod, i) => (
            <li key={prod.id}>
              <button
                type="button"
                className={cn(
                  "inline-block size-6 rounded-full drop-shadow-lg",
                  prod.id === product.id ? "bg-primary" : "bg-[#D9D9D9]",
                )}
                onClick={() => setCurrIndex(i)}
              >
                <span className="sr-only">View {prod.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
