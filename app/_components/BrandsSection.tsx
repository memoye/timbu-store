import { brands } from "@/lib/data";
import Image from "next/image";

export function BrandsSection() {
  return (
    <section className="my-12 flex flex-nowrap overflow-x-hidden whitespace-nowrap py-4 lg:mt-28">
      <ul className="flex-center flex animate-infinite-scroll-lr flex-nowrap gap-8 whitespace-nowrap">
        {brands.map((b) => (
          <li className="flex-1" key={b.id}>
            <Image
              src={b.logo}
              width={305}
              height={80}
              alt={b.name}
              className="wfull max-w-fit"
            />
          </li>
        ))}
      </ul>
      <ul className="flex-center flex animate-infinite-scroll-lr flex-nowrap gap-8 whitespace-nowrap">
        {brands.map((b) => (
          <li className="flex-1" key={b.id}>
            <Image
              src={b.logo}
              width={305}
              height={80}
              alt={b.name}
              className="wfull max-w-fit"
            />
          </li>
        ))}
      </ul>
      <ul className="flex-center flex animate-infinite-scroll-lr flex-nowrap gap-8 whitespace-nowrap">
        {brands.map((b) => (
          <li className="flex-1" key={b.id}>
            <Image
              src={b.logo}
              width={305}
              height={80}
              alt={b.name}
              className="wfull max-w-fit"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
