"use client";

import { useState } from "react";

export function QuantityInput({
  value = 1,
  max,
  onChange,
}: {
  value?: number;
  max: number;
  onChange?: (val: number) => void;
}) {
  const [val, setVal] = useState(value);

  const handleChange = (newVal: number) => {
    if (isNaN(newVal)) return;
    if (newVal > max) return;
    if (newVal < 0) return;
    setVal(newVal);
    onChange?.(newVal);
  };

  return (
    <div className="text-xl">
      <button
        className="size-6 border border-[#707678] text-center text-xl font-semibold leading-none text-[#707678] outline-secondary"
        onClick={() => handleChange(val - 1)}
        type="button"
      >
        <span className="inline-block -translate-y-0.5">-</span>
      </button>
      <input
        className="size-6 border border-[#707678] p-0 text-center font-semibold outline-secondary"
        inputMode="text"
        onChange={(e) => handleChange(Number(e.target.value))}
        value={val}
        type="text"
        min={0}
        max={max}
        placeholder="1"
      />

      <button
        className="size-6 border border-[#707678] text-center text-xl leading-none text-[#707678] outline-secondary"
        onClick={() => handleChange(val + 1)}
        type="button"
      >
        <span className="inline-block -translate-y-0.5">+</span>
      </button>
    </div>
  );
}
