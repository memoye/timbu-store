import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatToNaira(val: number) {
  const Currency = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  return Currency.format(val).slice(3).split(".")[0] ?? 0;
}
