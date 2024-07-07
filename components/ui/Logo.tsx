import { cn } from "@/lib/utils";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href={"/"}
      className={cn(
        "px-1 py-1 text-2xl font-semibold text-secondary md:py-2 lg:px-6",
        className,
      )}
    >
      VirgoWears
    </Link>
  );
}
