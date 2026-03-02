import AdventureCard from "./components/AdventureCard";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import CTASection from "./components/CTASection";
import Newsletter from "./components/Newsletter";
import { adventures } from "./data/adventures";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          className="absolute w-full h-full object-cover"
        />
        <div className="relative bg-black/50 p-10 rounded-xl text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Adventure Without Limits
          </h1>
          <p className="text-lg mb-6">
            Small group journeys. Big life experiences.
          </p>
          <a
            href="/adventures"
            className="bg-green-700 px-6 py-3 rounded-lg hover:bg-green-800"
          >
            Explore Trips
          </a>
        </div>
      </section>

      {/* WHY US */}
      <WhyUs />

      {/* FEATURED */}
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

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <CTASection />

      {/* NEWSLETTER */}
      <Newsletter />

    </div>
  );
}