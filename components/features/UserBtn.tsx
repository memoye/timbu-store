"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function UserBtn() {
  const [it, setIt] = useState(false);
  const itRef = useRef<HTMLDivElement>(null);

  function toggleIt() {
    setIt((prev) => !prev);
  }

  useEffect(() => {
    if (it) itRef.current?.focus();
  }, [it]);

  return (
    <div className="relative">
      <button
        onClick={toggleIt}
        type="button"
        className="inline-block rounded-full max-lg:ml-4 max-lg:size-8"
      >
        <Image
          src={"/user.svg"}
          width={39.42}
          height={39.42}
          alt="user profile"
        />
      </button>

      {it && (
        <div
          tabIndex={-1}
          ref={itRef}
          onBlur={() => setIt(false)}
          className="absolute right-0 top-full w-max bg-custom-white p-2 text-[#707678] drop-shadow-lg"
        >
          <p className="text-xl">Welcome, Miss Jenny</p>
          <p className="text-base">misssjenny234@gmail.com</p>
          <p className="mt-2 text-secondary">
            Virgostore credit bal: <span className="">N20,000</span>
          </p>
        </div>
      )}
    </div>
  );
}
