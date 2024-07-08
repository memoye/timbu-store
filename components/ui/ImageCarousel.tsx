"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function ImageCarousel({
  images,
  className,
}: {
  images: {
    id: number;
    src: string;
    alt: string;
    w: number;
    h: number;
  }[];
  className?: string;
}) {
  const [currIndex, setCurrIndex] = useState(0);

  const { id, src, alt, h, w } = images?.[currIndex];

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrIndex((prev) => {
        if (prev < images.length - 1) return prev + 1;
        return 0;
      });
    }, 10000);

    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [images.length]);

  return (
    <div className={cn("relative h-full w-full", className)}>
      <Image
        className="animate-fade-in rounded-l-2xl object-cover max-lg:aspect-square max-lg:rounded-r-2xl max-md:max-h-[213px] md:h-[500px] lg:h-[538px] lg:w-full"
        key={id}
        src={src}
        alt={alt}
        height={h}
        width={w}
        priority={true}
      />
      <ul className="mt-6 flex gap-2 max-lg:absolute max-lg:bottom-2 max-lg:left-4 lg:gap-4">
        {images.map((img, i) => (
          <li key={img.id}>
            <button
              type="button"
              className={cn(
                "inline-block size-4 rounded-full drop-shadow-lg lg:size-6",
                img.id === id ? "bg-primary" : "bg-[#D9D9D9]",
              )}
              onClick={() => setCurrIndex(i)}
            >
              <span className="sr-only">
                Select image {img.id + 1} of {images.length}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
