const testimonials = [
    {
        quote: "Best travel experience of my life. The small group size made it feel personal and the local guides were incredible.",
        name: "Sarah M.",
        trip: "Jordan Discovery",
        rating: 5,
    },
    {
        quote: "Perfect balance of adventure and comfort. Every detail was taken care of while still feeling like a real adventure.",
        name: "James K.",
        trip: "Explore Jordan",
        rating: 5,
    },
    {
        quote: "I've traveled with many companies but WildTerra stands out. Authentic experiences, responsible tourism, and amazing value.",
        name: "Emily R.",
        trip: "Premium Jordan",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                    What Our Travelers Say
                </h2>
                <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
                    Real reviews from real travelers who&apos;ve experienced WildTerra adventures
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg
                                        key={i}
                                        className={`w-4 h-4 ${i <= t.rating ? "text-amber-400" : "text-gray-300"}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-gray-600 italic mb-4 leading-relaxed">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            <div className="border-t border-gray-100 pt-4">
                                <p className="font-semibold text-gray-800">{t.name}</p>
                                <p className="text-sm text-gray-400">{t.trip}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
