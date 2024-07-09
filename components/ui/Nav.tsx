"use client";

import { categories } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type NavProps = {
  className?: string;
};

export const Nav = ({ className }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const pathname = usePathname();

  function togglNav() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    if (isOpen) navRef?.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setIsOpen(false);
    //eslint-disable-next-line
  }, [pathname]);

  return (
    <>
      <nav className={cn("hidden text-secondary lg:block", className)}>
        <ul className="flex-center gap-2">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                className="border border-transparent px-2 py-2 transition-colors hover:border-muted xl:px-3 xl:text-xl"
                href={cat.href}
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative inline-flex items-center">
        <button
          onClick={togglNav}
          type="button"
          className="inline-block flex-shrink-0 lg:hidden"
        >
          {!isOpen ? (
            <Image src={"/menu.svg"} width={24} height={24} alt="open menu" />
          ) : (
            <Image src={"/_x.svg"} width={24} height={24} alt="close menu" />
          )}
        </button>
        <Logo />

        <nav
          ref={navRef}
          tabIndex={-1}
          className={`absolute inset-x-0 top-full overflow-hidden bg-custom-white text-secondary transition-[height] duration-200 lg:hidden ${isOpen ? "h-[200px]" : "h-0"}`}
          onBlur={() => setIsOpen(false)}
        >
          <div className="mt-2.5 px-2 py-2 text-[#707678] transition-colors">
            Our Categories
          </div>
          <ul className="flex flex-col gap-2.5 pt-4">
            {categories.map((cat) => (
              <li key={cat.id}>
                <a
                  className="border border-transparent px-2 py-2 transition-colors hover:border-muted xl:px-3 xl:text-xl"
                  href={cat.href}
                >
                  {cat.name}
                </a>
              </li>
            ))}
            <li>
              <Link
                className="border border-transparent px-2 py-2 transition-colors hover:border-muted xl:px-3 xl:text-xl"
                href={"/"}
              >
                Wishlist
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
