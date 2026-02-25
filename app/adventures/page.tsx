import AdventureCard from "../components/AdventureCard";
import { adventures } from "../data/adventures";
export default function AdventuresPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-10">
                All Adventures
            </h1>

            <div className="grid md:grid-cols-2 gap-10">
                {adventures.map((adventure) => (
                    <AdventureCard
                        key={adventure.slug}
                        adventure={adventure}
                    />
                ))}
            </div>
        </div>
    );
}