import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | WildTerra Travel",
  description:
    "Learn about WildTerra Travel — responsible small group adventures focused on culture, sustainability, and real connections.",
};

const stats = [
  { value: "12+", label: "Years of Adventures" },
  { value: "5,000+", label: "Happy Travelers" },
  { value: "30+", label: "Destinations" },
  { value: "98%", label: "Would Travel Again" },
];

const values = [
  {
    title: "Small Groups, Big Connections",
    description:
      "Our trips cap at 12–16 travelers, creating space for genuine connections — with each other and the places we visit. No crowds, no buses, just meaningful travel.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Local Guides, Real Stories",
    description:
      "Every trip is led by a passionate local leader who doesn't just show you the sights — they share the stories, culture, and hidden gems only insiders know.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Sustainable by Nature",
    description:
      "We offset all trip carbon emissions, invest in local communities, and partner with businesses that share our commitment to protecting the planet.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs, no surprises. Our trip prices include accommodation, transport, selected meals, and experiences — so you know exactly what you're paying for.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const timeline = [
  {
    year: "2013",
    title: "The Beginning",
    description:
      "Two friends with a shared love for Jordan's landscapes and culture founded WildTerra with a single trip and a big dream — to share the real Jordan with the world.",
  },
  {
    year: "2016",
    title: "Growing the Team",
    description:
      "Expanded to a team of local guides and travel specialists, adding new itineraries across Wadi Rum, the Dead Sea, and Dana Nature Reserve.",
  },
  {
    year: "2019",
    title: "Carbon Neutral",
    description:
      "Achieved carbon-neutral operations and partnered with local conservation projects to protect Jordan's fragile desert ecosystems.",
  },
  {
    year: "2022",
    title: "5,000 Travelers",
    description:
      "Reached the milestone of 5,000 happy travelers, with a 98% satisfaction rate and partnerships in over 30 communities across Jordan.",
  },
  {
    year: "Today",
    title: "Looking Ahead",
    description:
      "Continuing to grow while staying true to our roots — small groups, big experiences, and a deep commitment to the places and people we visit.",
  },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/wadi_rum.jpg"
          alt="Wadi Rum desert landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <p className="text-green-400 font-semibold tracking-widest uppercase text-sm mb-4">
            About WildTerra
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Who We Are
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            We&apos;ve been taking travelers around Jordan and connecting people from all
            walks of life since 2013.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-700 transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">About Us</span>
        </nav>
      </div>

      {/* Our Story */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-700 font-semibold text-sm tracking-widest uppercase mb-3">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              It all started with a love for Jordan
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                WildTerra was born from a simple belief: that the best way to experience
                a place is through the eyes of the people who call it home. Founded in 2013
                by two friends who fell in love with Jordan&apos;s landscapes and warm
                hospitality, we set out to create travel experiences that go beyond the
                postcard shots.
              </p>
              <p>
                Over the years, we&apos;ve grown from a single Petra itinerary into a
                comprehensive collection of adventures spanning the entirety of Jordan —
                from the rose-red canyons of Wadi Rum to the healing waters of the Dead
                Sea, from the ancient streets of Jerash to the vibrant markets of Amman.
              </p>
              <p>
                But our mission has never changed: to connect curious travelers with the
                real Jordan, through authentic experiences led by passionate local guides,
                while making a positive impact on the communities we visit.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/hero/petra.webp"
              alt="Petra ancient city"
              className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-green-700 text-white rounded-xl p-5 shadow-lg hidden md:block">
              <p className="text-2xl font-bold">12+</p>
              <p className="text-sm text-green-100">Years of Adventures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-green-700">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-green-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-green-700 font-semibold text-sm tracking-widest uppercase mb-3">
            Why WildTerra
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Sets Us Apart
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            It&apos;s simple. Immersive experiences, perfectly sized groups, and legendary
            local leaders — all delivered in a way that respects the places and people we visit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition"
            >
              <div className="w-14 h-14 bg-green-100 text-green-700 rounded-xl flex items-center justify-center mb-5">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
              <p className="text-gray-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-green-700 font-semibold text-sm tracking-widest uppercase mb-3">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              From a Dream to a Movement
            </h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-green-200 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-6 md:gap-12`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-green-700 rounded-full border-4 border-white shadow -translate-x-1/2 z-10" />

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <span className="text-green-700 font-bold text-sm">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Purpose / Commitment */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src="/images/ajloun.jpg"
              alt="Ajloun castle in Jordan"
              className="rounded-2xl shadow-xl w-full h-[380px] object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-green-700 font-semibold text-sm tracking-widest uppercase mb-3">
              Our Purpose
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Travel That Gives Back
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We believe travel should leave the world better than we found it.
                That&apos;s why every WildTerra trip is designed to create positive impact —
                for local communities, for the environment, and for our travelers.
              </p>
              <p>
                We partner with locally owned accommodations, restaurants, and
                experience providers to ensure tourism dollars stay in the communities
                that need them most. Our guides are all locally hired and fairly
                compensated.
              </p>
              <p>
                We offset 100% of trip-related carbon emissions and actively support
                conservation projects protecting Jordan&apos;s natural heritage, from
                desert reforestation to wildlife protection.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-2xl font-bold text-green-700">100%</p>
                <p className="text-xs text-gray-500 mt-1">Carbon Offset</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-2xl font-bold text-green-700">100%</p>
                <p className="text-xs text-gray-500 mt-1">Local Guides</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-2xl font-bold text-green-700">80%+</p>
                <p className="text-xs text-gray-500 mt-1">Local Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Adventure?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Join thousands of travelers who&apos;ve discovered Jordan with WildTerra.
          Browse our trips or get in touch to start planning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/adventures"
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3.5 rounded-lg font-semibold transition"
          >
            Browse Trips
          </Link>
          <Link
            href="/contact"
            className="border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg font-semibold transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
