"use client";

import { useState } from "react";
import Link from "next/link";
import type { Adventure } from "@/app/data/adventures";

const STYLE_COLORS: Record<string, string> = {
  Original: "bg-teal-100 text-teal-800",
  Premium: "bg-amber-100 text-amber-800",
  Comfort: "bg-blue-100 text-blue-800",
  Basic: "bg-gray-100 text-gray-700",
};

const DIFFICULTY_LABELS: Record<number, string> = {
  1: "Easy",
  2: "Moderate",
  3: "Active",
  4: "Challenging",
  5: "Strenuous",
};

import { adventures as allAdventures } from "@/app/data/adventures";

function SimilarTrips({ current }: { current: Adventure }) {
  const similar = allAdventures
    .filter((a: Adventure) => a.slug !== current.slug)
    .sort((a: Adventure, b: Adventure) => {
      let scoreA = 0;
      let scoreB = 0;
      if (a.style === current.style) scoreA += 2;
      if (b.style === current.style) scoreB += 2;
      if (Math.abs(a.price - current.price) < 500) scoreA += 1;
      if (Math.abs(b.price - current.price) < 500) scoreB += 1;
      if (Math.abs(a.durationDays - current.durationDays) <= 2) scoreA += 1;
      if (Math.abs(b.durationDays - current.durationDays) <= 2) scoreB += 1;
      return scoreB - scoreA;
    })
    .slice(0, 3);

  return (
    <section className="mt-20 border-t border-gray-200 pt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Similar Trips</h2>
      <p className="text-gray-500 mb-8">You might also be interested in these adventures</p>
      <div className="grid md:grid-cols-3 gap-6">
        {similar.map((trip: Adventure) => (
          <Link
            key={trip.slug}
            href={`/adventures/${trip.slug}`}
            className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${STYLE_COLORS[trip.style]}`}>
                {trip.style}
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-1 mb-2">
                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold text-gray-800">{trip.rating}</span>
                <span className="text-sm text-gray-400">({trip.reviewCount})</span>
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition mb-1">
                {trip.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{trip.location}</p>
              <div className="flex items-end justify-between pt-2 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-400">From</p>
                  <p className="text-lg font-bold text-green-700">${trip.price.toLocaleString()}</p>
                </div>
                <span className="text-sm text-gray-500">{trip.duration}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function AdventureDetailClient({ adventure }: { adventure: Adventure }) {
  const [openDay, setOpenDay] = useState<number | null>(1);

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <div>
      {/* Full-width Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <img
          src={adventure.image}
          alt={adventure.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/adventures" className="hover:text-white transition">Adventures</Link>
            <span>/</span>
            <span className="text-white font-medium">{adventure.title}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${STYLE_COLORS[adventure.style]}`}>
              {adventure.style}
            </span>
            {adventure.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/15 text-white/90">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {adventure.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {adventure.location}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {adventure.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {adventure.groupSize}
            </span>
          </div>
        </div>
      </div>

      {/* Quick Facts Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <div className="text-center">
                <p className="text-xs text-gray-400 uppercase tracking-wide">Duration</p>
                <p className="font-bold text-gray-900">{adventure.duration}</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="text-center">
                <p className="text-xs text-gray-400 uppercase tracking-wide">Group Size</p>
                <p className="font-bold text-gray-900">{adventure.groupSize}</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="text-center">
                <p className="text-xs text-gray-400 uppercase tracking-wide">Difficulty</p>
                <p className="font-bold text-gray-900">{DIFFICULTY_LABELS[adventure.physicalRating]}</p>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div className="text-center">
                <p className="text-xs text-gray-400 uppercase tracking-wide">Style</p>
                <p className="font-bold text-gray-900">{adventure.style}</p>
              </div>
              <div className="w-px h-8 bg-gray-200 hidden sm:block" />
              <div className="text-center">
                <p className="text-xs text-gray-400 uppercase tracking-wide">Rating</p>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-gray-900">{adventure.rating}</span>
                  <span className="text-sm text-gray-400">({adventure.reviewCount})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left — Content */}
          <div className="lg:col-span-2">
            {/* About */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Trip</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{adventure.description}</p>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {adventure.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3 bg-green-50 rounded-lg p-4">
                    <div className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Day-by-Day Itinerary</h2>
              <p className="text-gray-500 mb-6">{adventure.itinerary.length} days of adventure</p>
              <div className="space-y-3">
                {adventure.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className={`border rounded-xl overflow-hidden transition-all ${
                      openDay === day.day ? "border-green-200 shadow-sm" : "border-gray-200"
                    }`}
                  >
                    <button
                      onClick={() => toggleDay(day.day)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                          openDay === day.day ? "bg-green-700 text-white" : "bg-gray-100 text-gray-600"
                        }`}>
                          {day.day}
                        </span>
                        <span className="font-semibold text-gray-900">{day.title}</span>
                      </div>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          openDay === day.day ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDay === day.day && (
                      <div className="px-5 pb-5 pl-[76px]">
                        <p className="text-gray-600 leading-relaxed">{day.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Included / Not Included */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Included
                  </h3>
                  <ul className="space-y-2">
                    {adventure.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Not Included
                  </h3>
                  <ul className="space-y-2">
                    {adventure.notIncluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <SimilarTrips current={adventure} />
          </div>

          {/* Right — Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                <p className="text-sm text-gray-400 mb-1">From</p>
                <p className="text-4xl font-bold text-green-700 mb-1">
                  ${adventure.price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mb-6">per person</p>

                <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3.5 rounded-lg font-semibold transition mb-3 flex items-center justify-center gap-2">
                  Book Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg font-semibold transition">
                  Enquire
                </button>

                <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Duration
                    </span>
                    <span className="font-semibold text-gray-900">{adventure.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Group size
                    </span>
                    <span className="font-semibold text-gray-900">{adventure.groupSize}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Difficulty
                    </span>
                    <span className="font-semibold text-gray-900">{DIFFICULTY_LABELS[adventure.physicalRating]}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Next available
                    </span>
                    <span className="font-semibold text-green-700">{adventure.nextAvailable}</span>
                  </div>
                </div>

                {/* Trust signals */}
                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Free cancellation up to 30 days
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Secure booking — pay in installments
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    24/7 support — call or WhatsApp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
