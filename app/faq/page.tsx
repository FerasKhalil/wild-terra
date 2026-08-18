"use client";

import { useState } from "react";
import Link from "next/link";

const FAQ_ITEMS = [
  {
    question: "What is included in the trip price?",
    answer: "Our trip prices typically include accommodation, local ground transportation in air-conditioned vehicles, an English-speaking local guide, daily breakfast, and selected meals as specified in each itinerary. Entrance fees to all listed attractions and experiences are also included.",
  },
  {
    question: "Are international flights included?",
    answer: "International flights are not included unless specifically stated in the trip description. This gives you the flexibility to choose your preferred airline, dates, and departure city. We can advise on the best flight options to reach your destination.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer free cancellation up to 30 days before departure for a full refund. Cancellations 15-29 days before departure receive a 50% refund. Within 14 days, no refund is available. We strongly recommend purchasing travel insurance to protect your investment.",
  },
  {
    question: "What is the group size?",
    answer: "Our groups are intentionally small, ranging from 8 to 16 travelers depending on the trip style. Premium and luxury trips have even smaller groups of up to 8. This ensures a more personal experience and allows access to places larger groups can't reach.",
  },
  {
    question: "Do I need to be fit for these trips?",
    answer: "Each trip has a physical rating from 1 (Easy) to 5 (Strenuous) displayed on the trip page. Most of our trips are rated 2-3 and are suitable for anyone with a reasonable level of fitness. If you have specific concerns, our team can help you choose the right trip.",
  },
  {
    question: "Can I customize a trip or travel privately?",
    answer: "Absolutely. Many of our trips can be arranged as private departures for your own group. We can also customize itineraries to suit your interests, pace, and budget. Contact us to discuss your ideal trip and we'll create something just for you.",
  },
  {
    question: "What happens if I'm traveling solo?",
    answer: "Solo travelers are very welcome — our small group trips are perfect for meeting like-minded people. You'll share the experience with a diverse group of fellow adventurers. We can pair you with a roommate to avoid single supplement fees.",
  },
  {
    question: "Do I need a visa to visit Jordan?",
    answer: "Most nationalities can obtain a visa on arrival in Jordan, or purchase the Jordan Pass online before departure which includes visa fees and Petra entry. We'll provide detailed visa guidance once you book your trip.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[35vh] min-h-[260px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero/discover_jordan.webp"
          alt="Jordan landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <p className="text-green-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Help Center
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg">
            Everything you need to know before you go
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <Link href="/" className="hover:text-green-700 transition">Home</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">FAQ</span>
        </nav>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${
                openIndex === i ? "border-green-200 shadow-sm" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h2>
          <p className="text-gray-500 mb-6">
            Our team is happy to help with anything you need.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-3.5 rounded-lg font-semibold transition"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
