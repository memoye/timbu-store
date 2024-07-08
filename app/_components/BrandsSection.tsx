import { brands } from "@/lib/data";
import Image from "next/image";

export function BrandsSection() {
  return (
    <section className="my-12 flex flex-nowrap overflow-x-hidden whitespace-nowrap py-4 lg:mt-28">
      <ul className="flex-center flex animate-[infinite-scroll_120s_linear_infinite] flex-nowrap gap-4 whitespace-nowrap lg:gap-8">
        {brands.map((b) => (
          <li className="flex-1" key={b.id}>
            <Image
              src={b.logo}
              width={305}
              height={80}
              alt={b.name}
              className="max-w-fit max-md:w-36"
            />
          </li>
        ))}
      </ul>
      <ul className="flex-center flex animate-[infinite-scroll_120s_linear_infinite] flex-nowrap gap-2 whitespace-nowrap md:gap-8 lg:gap-12">
        {brands.map((b) => (
          <li className="flex-1" key={b.id}>
            <Image
              src={b.logo}
              width={305}
              height={80}
              alt={b.name}
              className="max-w-fit max-md:w-36"
            />
          </li>
        ))}
      </ul>
      <ul className="flex-center flex animate-[infinite-scroll_120s_linear_infinite] flex-nowrap gap-8 whitespace-nowrap">
        {brands.map((b) => (
          <li className="flex-1" key={b.id}>
            <Image
              src={b.logo}
              width={305}
              height={80}
              alt={b.name}
              className="max-w-fit max-md:w-36"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
