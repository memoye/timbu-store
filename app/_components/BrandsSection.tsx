import { brands } from "@/lib/data";
import Image from "next/image";

export function BrandsSection() {
  return (
    <section className="my-12 flex flex-nowrap gap-4 overflow-x-hidden whitespace-nowrap py-4 lg:mt-28">
      <ul className="flex-center flex animate-infinite-scroll-lr flex-nowrap gap-4 whitespace-nowrap">
        {brands.map((b) => (
          <Image key={b.id} src={b.logo} width={305} height={80} alt={b.name} />
        ))}
      </ul>
      <ul className="flex-center flex animate-infinite-scroll-lr flex-nowrap gap-4 whitespace-nowrap">
        {brands.map((b) => (
          <Image key={b.id} src={b.logo} width={305} height={80} alt={b.name} />
        ))}
      </ul>
      <ul className="flex-center flex animate-infinite-scroll-lr flex-nowrap gap-4 whitespace-nowrap">
        {brands.map((b) => (
          <Image key={b.id} src={b.logo} width={305} height={80} alt={b.name} />
        ))}
      </ul>
      <ul className="flex-center flex animate-infinite-scroll-lr flex-nowrap gap-4 whitespace-nowrap">
        {brands.map((b) => (
          <Image key={b.id} src={b.logo} width={305} height={80} alt={b.name} />
        ))}
      </ul>
      <ul className="flex-center flex animate-infinite-scroll-lr flex-nowrap gap-4 whitespace-nowrap">
        {brands.map((b) => (
          <Image key={b.id} src={b.logo} width={305} height={80} alt={b.name} />
        ))}
      </ul>
    </section>
  );
}
