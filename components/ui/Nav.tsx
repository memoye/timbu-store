import { categories } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";

type NavProps = {
  className?: string;
};

export const Nav = ({ className }: NavProps) => {
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

      <div className="inline-flex items-center">
        <button type="button" className="inline-block flex-shrink-0 lg:hidden">
          <Image
            src={"/menu.svg"}
            // className="size-5"
            width={24}
            height={24}
            alt="menu icon"
          />
        </button>
        <Logo />
      </div>
    </>
  );
};
