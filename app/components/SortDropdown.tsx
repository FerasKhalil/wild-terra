"use client";

export type SortOption = "relevance" | "price-asc" | "price-desc" | "duration-asc" | "duration-desc" | "rating-desc";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  resultCount: number;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "relevance", label: "Relevance" },
  { value: "price-asc", label: "Price (low to high)" },
  { value: "price-desc", label: "Price (high to low)" },
  { value: "duration-asc", label: "Duration (short to long)" },
  { value: "duration-desc", label: "Duration (long to short)" },
  { value: "rating-desc", label: "Top rated" },
];

export default function SortDropdown({ value, onChange, resultCount }: SortDropdownProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <p className="text-gray-600 font-medium">
        <span className="text-gray-900 font-bold">{resultCount}</span> trip{resultCount !== 1 ? "s" : ""} found
      </p>

      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm text-gray-500 whitespace-nowrap">
          Sort by:
        </label>
        <select
          id="sort"
          value={value}
          onChange={(e) => onChange(e.target.value as SortOption)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 cursor-pointer"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
