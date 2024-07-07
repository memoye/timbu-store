import Image from "next/image";

type RatingProps = {
  className?: string;
  value: number;
};

export function Rating({ className, value }: RatingProps) {
  const ratings = Array.from({ length: value }, (_v, i) => i);

  return (
    <ul className="Rating">
      {ratings.map((r) => (
        <button key={r}>
          <Image
            src={"/star.svg"}
            className="size-4 md:size-8 xl:size-6"
            width={24}
            height={24}
            alt="star icon"
          />
        </button>
      ))}
    </ul>
  );
}
