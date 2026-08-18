import Link from "next/link";
import type { Adventure } from "../data/adventures";

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1">
      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span className="text-sm font-semibold text-gray-800">{rating}</span>
      <span className="text-sm text-gray-400">({count})</span>
    </div>
  );
}

function PhysicalRatingDots({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-xs text-gray-500 mr-1">Physical:</span>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${
              i <= level ? "bg-green-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const STYLE_COLORS: Record<string, string> = {
  Original: "bg-teal-100 text-teal-800",
  Premium: "bg-amber-100 text-amber-800",
  Comfort: "bg-blue-100 text-blue-800",
  Basic: "bg-gray-100 text-gray-700",
};

export default function AdventureCard({ adventure }: { adventure: Adventure }) {
  return (
    <Link
      href={`/adventures/${adventure.slug}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col sm:flex-row"
    >
      {/* Image */}
      <div className="relative sm:w-72 md:w-80 flex-shrink-0 h-56 sm:h-auto overflow-hidden">
        <img
          src={adventure.image}
          alt={adventure.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Style badge overlay */}
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${
            STYLE_COLORS[adventure.style] || "bg-gray-100 text-gray-700"
          }`}
        >
          {adventure.style}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          {/* Top row: rating + duration */}
          <div className="flex items-center justify-between mb-2">
            <StarRating rating={adventure.rating} count={adventure.reviewCount} />
            <span className="text-sm text-gray-500">{adventure.duration}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition mb-1">
            {adventure.title}
          </h3>

          {/* Location */}
          <p className="text-sm text-gray-500 mb-3">
            {adventure.location}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {adventure.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
            <PhysicalRatingDots level={adventure.physicalRating} />
          </div>
        </div>

        {/* Bottom row: price + group size + date */}
        <div className="flex items-end justify-between pt-3 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-400">From</p>
            <p className="text-xl font-bold text-green-700">
              ${adventure.price.toLocaleString()}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">{adventure.groupSize}</p>
            <p className="text-xs text-gray-500">
              Next: {adventure.nextAvailable}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
