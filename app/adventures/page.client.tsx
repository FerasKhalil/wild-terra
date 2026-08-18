"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { adventures, type Adventure } from "../data/adventures";
import AdventureCard from "../components/AdventureCard";
import FilterSidebar, { type FilterState } from "../components/FilterSidebar";
import SortDropdown, { type SortOption } from "../components/SortDropdown";
import Link from "next/link";

const INITIAL_FILTERS: FilterState = {
  styles: [],
  physicalRatings: [],
  maxDuration: 999,
  minPrice: 0,
  maxPrice: 99999,
};

function sortAdventures(list: Adventure[], sort: SortOption): Adventure[] {
  const sorted = [...list];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "duration-asc":
      return sorted.sort((a, b) => a.durationDays - b.durationDays);
    case "duration-desc":
      return sorted.sort((a, b) => b.durationDays - a.durationDays);
    case "rating-desc":
      return sorted.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
    case "relevance":
    default:
      return sorted;
  }
}

export default function AdventuresPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const keyword = searchParams.get("keyword") || "";

  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [sort, setSort] = useState<SortOption>("relevance");
  const [showCount, setShowCount] = useState(6);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredAdventures = useMemo(() => {
    let result = [...adventures];

    // Keyword filter
    if (keyword) {
      const lower = keyword.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(lower) ||
          a.location.toLowerCase().includes(lower) ||
          a.country.toLowerCase().includes(lower) ||
          a.description.toLowerCase().includes(lower) ||
          a.tags.some((t) => t.toLowerCase().includes(lower))
      );
    }

    // Style filter
    if (filters.styles.length > 0) {
      result = result.filter((a) => filters.styles.includes(a.style));
    }

    // Physical rating filter
    if (filters.physicalRatings.length > 0) {
      result = result.filter((a) =>
        filters.physicalRatings.includes(a.physicalRating)
      );
    }

    // Duration filter
    if (filters.maxDuration < 999) {
      if (filters.maxDuration === 7) {
        result = result.filter((a) => a.durationDays <= 7);
      } else if (filters.maxDuration === 10) {
        result = result.filter((a) => a.durationDays >= 8 && a.durationDays <= 10);
      }
    }

    // Price filter
    if (filters.minPrice > 0 || filters.maxPrice < 99999) {
      result = result.filter(
        (a) => a.price >= filters.minPrice && a.price <= filters.maxPrice
      );
    }

    // Sort
    result = sortAdventures(result, sort);

    return result;
  }, [keyword, filters, sort]);

  const visibleAdventures = filteredAdventures.slice(0, showCount);
  const hasMore = showCount < filteredAdventures.length;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-white-500 mb-6">
        <Link href="/" className="hover:text-green-700 transition">
          Home
        </Link>
        <span>/</span>
        <span className="text-white-800 font-medium">Adventures</span>
        {keyword && (
          <>
            <span>/</span>
            <span className="text-white-800 font-medium">
              Search: &ldquo;{keyword}&rdquo;
            </span>
          </>
        )}
      </nav>

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white-900 mb-2">
          {keyword ? `Results for "${keyword}"` : "Our Adventures"}
        </h1>
        <p className="text-gray-600">
          Discover handcrafted small group journeys to incredible destinations
        </p>
      </div>

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Refine Search
        </button>
      </div>

      <div className="flex gap-8">
        {/* Filter Sidebar */}
        <FilterSidebar
          filters={filters}
          onChange={setFilters}
          isOpen={mobileFiltersOpen}
          onClose={() => setMobileFiltersOpen(false)}
        />

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <SortDropdown
            value={sort}
            onChange={setSort}
            resultCount={filteredAdventures.length}
          />

          {/* Results */}
          {visibleAdventures.length > 0 ? (
            <div className="space-y-5">
              {visibleAdventures.map((adventure) => (
                <AdventureCard key={adventure.slug} adventure={adventure} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No trips found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() => {
                  setFilters(INITIAL_FILTERS);
                  router.push("/adventures");
                }}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-2.5 rounded-lg font-medium transition"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Show More */}
          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowCount((prev) => prev + 6)}
                className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Show more trips
              </button>
              <p className="text-sm text-gray-400 mt-2">
                Showing {visibleAdventures.length} of {filteredAdventures.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
