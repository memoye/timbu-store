import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 text-secondary">
      <h1 className="text-5xl font-bold">Page Not Found</h1>
      <Link
        href={"/"}
        className={buttonVariants({
          color: "secondary",
          fill: false,
          size: "lg",
          className: "mx-auto inline-block",
        })}
      >
        Back to Home
      </Link>
    </main>
  );
}
