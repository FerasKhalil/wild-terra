import Link from "next/link";

export default function AdventureCard({ adventure }: any) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img
                src={adventure.image}
                alt={adventure.title}
                className="h-60 w-full object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl text-gray-500 font-semibold mb-2">
                    {adventure.title}
                </h3>
                <p className="text-gray-500 mb-2">
                    {adventure.location} • {adventure.duration}
                </p>
                <p className="text-green-700 font-bold mb-4">
                    From ${adventure.price}
                </p>
                <Link
                    href={`/adventures/${adventure.slug}`}
                    className="inline-block bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}