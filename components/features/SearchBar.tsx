"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type SearchBarProps = {
  className?: string;
};

export function SearchBar({ className }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <form
        className={cn(
          "fixed z-20 bg-custom-white py-2 transition-transform max-lg:inset-x-0 max-lg:flex max-lg:items-center max-lg:justify-center max-lg:bg-custom-white lg:relative",
          isOpen ? "max-lg:translate-y-0" : "max-lg:-translate-y-40",
          className,
        )}
      >
        <label htmlFor="search" className="sr-only">
          Search VirgoWears
        </label>

        <input
          type="search"
          className="rounded-lg bg-[#FEF9EF] py-2 text-lg font-semibold outline-secondary placeholder:text-secondary max-lg:w-1/2 max-lg:px-4 max-lg:text-center max-lg:placeholder:text-center max-md:rounded-r-none lg:max-w-44 lg:pl-10 lg:pr-4"
          inputMode="search"
          placeholder="Search"
        />

        {/* submit */}
        <button
          type="submit"
          className="max-lg:rounded-r-lg max-lg:bg-secondary max-lg:px-4 max-lg:py-2.5"
        >
          <Image
            className="size-6 lg:absolute lg:left-2 lg:top-1/2 lg:-translate-y-1/2"
            src="/search.svg"
            width={24}
            height={24}
            alt="search_icon"
          />
        </button>

        {/* close search bar */}
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          className="ml-2 inline-block px-2 max-md:px-4 max-md:py-2.5 lg:hidden"
        >
          Close
        </button>
      </form>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-md border border-transparent p-1 focus:border-secondary"
      >
        <Image
          className="inline-block lg:hidden"
          src="/search_mobile.svg"
          width={24}
          height={24}
          alt="search_icon"
        />
      </button>
    </>
  );
}
