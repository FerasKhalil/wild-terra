import { adventures } from "./data/adventures";
import AdventureCard from "./components/AdventureCard";

export default function Home() {
  return (
    <div>
      <section className="bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')] bg-cover bg-center h-[70vh] flex items-center justify-center text-white text-center">
        <div className="bg-black/50 p-10 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore The World Differently
          </h1>
          <p className="mb-6 text-lg">
            Small group adventures with real local impact.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Adventures
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {adventures.map((adventure) => (
            <AdventureCard
              key={adventure.slug}
              adventure={adventure}
            />
          ))}
        </div>
      </section>
    </div>
  );
}