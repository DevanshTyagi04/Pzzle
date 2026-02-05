"use client";

const SIZES = ["S", "M", "L", "XL"] as const;
export type Size = (typeof SIZES)[number];

export interface SizePickerProps {
  value: Size | null;
  onChange: (size: Size | null) => void;
  className?: string;
}

export default function SizePicker({
  value,
  onChange,
  className = "",
}: SizePickerProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div className="flex items-center justify-between">
        <p className="text-body-medium text-dark-900">Select Size</p>
        <button
          type="button"
          className="text-caption text-dark-700 underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-500"
        >
          Size Guide
        </button>
      </div>

      <div className="flex gap-2">
        {SIZES.map((size) => {
          const isActive = value === size;

          return (
            <button
              key={size}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(isActive ? null : size)}
              className={`min-w-[56px] rounded-full border px-4 py-2 text-sm font-medium transition
                focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-500
                ${
                  isActive
                    ? "border-dark-900 bg-dark-900 text-light-100"
                    : "border-light-300 text-dark-900 hover:border-dark-500"
                }
              `}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
