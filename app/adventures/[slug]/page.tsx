import { adventures } from "@/app/data/adventures";
export default function AdventureDetail({
    params,
}: {
    params: { slug: string };
}) {
    const adventure = adventures.find(
        (a) => a.slug === params.slug
    );

    if (!adventure) {
        return <div className="p-10">Adventure not found.</div>;
    }

    return (
        <div className="max-w-5xl mx-auto px-6 py-20">
            <img
                src={adventure.image}
                alt={adventure.title}
                className="w-full h-96 object-cover rounded-xl mb-10"
            />
            <h1 className="text-4xl font-bold mb-4">
                {adventure.title}
            </h1>
            <p className="text-gray-600 mb-4">
                {adventure.location} • {adventure.duration}
            </p>
            <p className="text-green-700 text-2xl font-bold mb-6">
                ${adventure.price}
            </p>
            <p className="text-lg">{adventure.description}</p>
        </div>
    );
}