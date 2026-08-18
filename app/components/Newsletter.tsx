"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-green-700 font-semibold text-sm tracking-widest uppercase mb-3">
          Newsletter
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Join Our Community
        </h2>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto">
          Get travel tips, exclusive deals, and trip inspiration delivered to your inbox. 
          No spam, unsubscribe anytime.
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-md mx-auto">
            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-semibold text-gray-900 mb-1">You&apos;re subscribed!</p>
            <p className="text-sm text-gray-500">Thanks for joining the WildTerra community.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm text-green-700 font-medium mt-3 hover:underline"
            >
              Subscribe another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            />
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
