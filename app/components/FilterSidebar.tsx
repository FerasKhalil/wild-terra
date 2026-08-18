"use client";

import { allStyles, allPhysicalRatings } from "../data/adventures";

export interface FilterState {
  styles: string[];
  physicalRatings: number[];
  maxDuration: number;
  minPrice: number;
  maxPrice: number;
}

interface FilterSidebarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  isOpen: boolean;
  onClose: () => void;
}

const DURATION_OPTIONS = [
  { label: "Any", value: 999 },
  { label: "1 – 7 days", value: 7 },
  { label: "8 – 10 days", value: 10 },
  { label: "11+ days", value: 999 },
];

const PRICE_PRESETS = [
  { label: "Any", min: 0, max: 99999 },
  { label: "Under $1,500", min: 0, max: 1500 },
  { label: "$1,500 – $2,500", min: 1500, max: 2500 },
  { label: "$2,500 – $4,000", min: 2500, max: 4000 },
  { label: "$4,000+", min: 4000, max: 99999 },
];

function PhysicalRatingDots({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${
            i <= level ? "bg-green-700" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function FilterSidebar({
  filters,
  onChange,
  isOpen,
  onClose,
}: FilterSidebarProps) {
  const toggleStyle = (style: string) => {
    const styles = filters.styles.includes(style)
      ? filters.styles.filter((s) => s !== style)
      : [...filters.styles, style];
    onChange({ ...filters, styles });
  };

  const togglePhysicalRating = (rating: number) => {
    const physicalRatings = filters.physicalRatings.includes(rating)
      ? filters.physicalRatings.filter((r) => r !== rating)
      : [...filters.physicalRatings, rating];
    onChange({ ...filters, physicalRatings });
  };

  const setDuration = (max: number) => {
    onChange({ ...filters, maxDuration: max });
  };

  const setPriceRange = (min: number, max: number) => {
    onChange({ ...filters, minPrice: min, maxPrice: max });
  };

  const clearAll = () => {
    onChange({
      styles: [],
      physicalRatings: [],
      maxDuration: 999,
      minPrice: 0,
      maxPrice: 99999,
    });
  };

  const sidebarContent = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">Refine Search</h3>
        <button
          onClick={clearAll}
          className="text-sm text-green-700 hover:underline"
        >
          Clear all
        </button>
      </div>

      {/* Trip Style */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Trip Style</h4>
        <div className="space-y-2">
          {allStyles.map((style) => (
            <label
              key={style}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={filters.styles.includes(style)}
                onChange={() => toggleStyle(style)}
                className="w-4 h-4 rounded border-gray-300 text-green-700 focus:ring-green-500"
              />
              <span className="text-gray-600 group-hover:text-gray-900 transition">
                {style}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Physical Rating */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Physical Rating</h4>
        <div className="space-y-2">
          {allPhysicalRatings.map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={filters.physicalRatings.includes(rating)}
                onChange={() => togglePhysicalRating(rating)}
                className="w-4 h-4 rounded border-gray-300 text-green-700 focus:ring-green-500"
              />
              <div className="flex items-center gap-2">
                <PhysicalRatingDots level={rating} />
                <span className="text-gray-600 group-hover:text-gray-900 transition text-sm">
                  {rating === 1 && "Easy"}
                  {rating === 2 && "Moderate"}
                  {rating === 3 && "Active"}
                  {rating === 4 && "Challenging"}
                  {rating === 5 && "Strenuous"}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Duration</h4>
        <div className="space-y-2">
          {DURATION_OPTIONS.map((opt) => (
            <label
              key={opt.label}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="duration"
                checked={filters.maxDuration === opt.value}
                onChange={() => setDuration(opt.value)}
                className="w-4 h-4 border-gray-300 text-green-700 focus:ring-green-500"
              />
              <span className="text-gray-600 group-hover:text-gray-900 transition">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Price Range</h4>
        <div className="space-y-2">
          {PRICE_PRESETS.map((preset) => {
            const isActive =
              filters.minPrice === preset.min && filters.maxPrice === preset.max;
            return (
              <label
                key={preset.label}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="price"
                  checked={isActive}
                  onChange={() => setPriceRange(preset.min, preset.max)}
                  className="w-4 h-4 border-gray-300 text-green-700 focus:ring-green-500"
                />
                <span className="text-gray-600 group-hover:text-gray-900 transition">
                  {preset.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 flex-shrink-0">
        <div className="sticky top-24 bg-white border border-gray-200 rounded-xl p-6">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {sidebarContent}
              <button
                onClick={onClose}
                className="w-full mt-6 bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
