import AdventureCard from "./components/AdventureCard";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";
import CTASection from "./components/CTASection";
import Newsletter from "./components/Newsletter";
import { adventures } from "./data/adventures";
import Hero from "./components/Hero";
import Link from "next/link";

const TRUST_BADGES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "Free Cancellation",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Small Groups",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Local Experts",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "24/7 Support",
  },
];

const DESTINATIONS = [
  { name: "Petra", image: "/images/hero/petra.webp", keyword: "petra" },
  { name: "Wadi Rum", image: "/images/wadi_rum.jpg", keyword: "wadi+rum" },
  { name: "Dead Sea", image: "/images/hero/discover_jordan.webp", keyword: "dead+sea" },
  { name: "Amman", image: "/images/jerash.webp", keyword: "amman" },
];

export default function Home() {
  const featuredAdventures = adventures.slice(0, 4);

  return (
    <div>
      <Hero />

      {/* Trust Badges */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="flex items-center justify-center gap-3 text-gray-700">
                <span className="text-green-700">{badge.icon}</span>
                <span className="font-medium text-sm">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <WhyUs />

      {/* Featured Adventures */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-green-700 font-semibold text-sm tracking-widest uppercase mb-3">
            Popular Trips
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Adventures
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Handpicked journeys through Jordan&apos;s most extraordinary landscapes
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredAdventures.map((adventure) => (
            <AdventureCard key={adventure.slug} adventure={adventure} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/adventures"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-3.5 rounded-lg font-semibold transition"
          >
            View All Adventures
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Destination Highlights */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-green-700 font-semibold text-sm tracking-widest uppercase mb-3">
              Explore Jordan
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From ancient wonders to breathtaking desert landscapes
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {DESTINATIONS.map((dest) => (
              <Link
                key={dest.name}
                href={`/adventures?keyword=${dest.keyword}`}
                className="group relative rounded-2xl overflow-hidden h-64 md:h-72"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-xl font-bold text-white mb-1">{dest.name}</h3>
                  <span className="text-white/70 text-sm flex items-center gap-1 group-hover:text-green-400 transition">
                    Explore trips
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTASection />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
