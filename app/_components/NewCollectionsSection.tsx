import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

export function NewCollectionsSection() {
  return (
    <section className="bindX my-12 text-center text-secondary">
      <div className="mx-auto">
        <h2 className="text-2xl font-medium leading-snug md:font-semibold lg:text-[75px]">
          New Collections
        </h2>
        <p className="mx-auto max-w-md text-base md:text-lg">
          Save your money for future use by shopping with us for all your
          afordable wears, including classic and contemporary wears.
        </p>
        <Link
          href="/"
          className={buttonVariants({
            color: "primary",
            fill: true,
            size: "sm",
            className: "mt-6 inline-block",
          })}
        >
          See all collections
        </Link>
      </div>
    </section>
  );
}
