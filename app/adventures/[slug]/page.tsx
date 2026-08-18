import { adventures } from "@/app/data/adventures";
import Link from "next/link";

export default function AdventureDetail({
    params,
}: {
    params: { slug: string };
}) {
    const adventure = adventures.find(
        (a) => a.slug === params.slug
    );

    if (!adventure) {
        return (
            <div className="max-w-5xl mx-auto px-6 py-20 text-center">
                <h1 className="text-3xl font-bold mb-4">Adventure not found</h1>
                <p className="text-gray-600 mb-6">
                    The trip you&apos;re looking for doesn&apos;t exist or has been removed.
                </p>
                <Link
                    href="/adventures"
                    className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                    Browse All Trips
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Link href="/" className="hover:text-green-700 transition">Home</Link>
                <span>/</span>
                <Link href="/adventures" className="hover:text-green-700 transition">Adventures</Link>
                <span>/</span>
                <span className="text-gray-800 font-medium">{adventure.title}</span>
            </nav>

            {/* Hero Image */}
            <div className="relative rounded-xl overflow-hidden mb-8">
                <img
                    src={adventure.image}
                    alt={adventure.title}
                    className="w-full h-[400px] md:h-[480px] object-cover"
                />
                <span className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {adventure.style}
                </span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        {adventure.title}
                    </h1>

                    <p className="text-gray-500 mb-4">
                        {adventure.location}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <svg
                                    key={i}
                                    className={`w-5 h-5 ${i <= Math.round(adventure.rating) ? "text-amber-400" : "text-gray-300"}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="font-semibold text-gray-800">{adventure.rating}</span>
                        <span className="text-gray-400">({adventure.reviewCount} reviews)</span>
                    </div>

                    {/* Description */}
                    <div className="prose max-w-none">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">About this trip</h2>
                        <p className="text-gray-600 leading-relaxed">{adventure.description}</p>
                    </div>

                    {/* Trip Details */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-400 mb-1">Duration</p>
                            <p className="font-semibold text-gray-800">{adventure.duration}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-400 mb-1">Group Size</p>
                            <p className="font-semibold text-gray-800">{adventure.groupSize}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-400 mb-1">Physical Rating</p>
                            <div className="flex gap-1 mt-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <span
                                        key={i}
                                        className={`w-3 h-3 rounded-full ${
                                            i <= adventure.physicalRating ? "bg-green-700" : "bg-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-400 mb-1">Style</p>
                            <p className="font-semibold text-gray-800">{adventure.style}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-400 mb-1">Next Available</p>
                            <p className="font-semibold text-gray-800">{adventure.nextAvailable}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-sm text-gray-400 mb-1">Country</p>
                            <p className="font-semibold text-gray-800">{adventure.country}</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="md:col-span-1">
                    <div className="sticky top-24 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <p className="text-sm text-gray-400 mb-1">From</p>
                        <p className="text-3xl font-bold text-green-700 mb-1">
                            ${adventure.price.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500 mb-6">per person</p>

                        <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition mb-3">
                            Book Now
                        </button>
                        <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-semibold transition">
                            Enquire
                        </button>

                        <div className="mt-6 pt-6 border-t border-gray-100 space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Duration</span>
                                <span className="font-medium text-gray-800">{adventure.duration}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Group size</span>
                                <span className="font-medium text-gray-800">{adventure.groupSize}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Next available</span>
                                <span className="font-medium text-gray-800">{adventure.nextAvailable}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
