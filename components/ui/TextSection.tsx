import Link from "next/link";
import { buttonVariants } from "./Button";

type TextSectionProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export function TextSection({
  title,
  description,
  ctaLabel,
  ctaHref,
}: TextSectionProps) {
  return (
    <div className="bindX my-12 text-center text-secondary">
      <div className="mx-auto">
        <h2 className="mb-2 text-2xl font-semibold leading-snug lg:text-[75px]">
          {title}
        </h2>
        <p className="mx-auto max-w-md text-base md:text-lg">{description}</p>
        <Link
          href={ctaHref}
          className={buttonVariants({
            color: "primary",
            fill: true,
            size: "sm",
            className: "mt-6 inline-block",
          })}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
