const testimonials = [
    {
        quote: "Best travel experience of my life. The small group size made it feel personal and the local guides were incredible.",
        name: "Sarah M.",
        location: "London, UK",
        trip: "Jordan Discovery",
        rating: 5,
        initials: "SM",
    },
    {
        quote: "Perfect balance of adventure and comfort. Every detail was taken care of while still feeling like a real adventure.",
        name: "James K.",
        location: "Toronto, Canada",
        trip: "Explore Jordan",
        rating: 5,
        initials: "JK",
    },
    {
        quote: "I've traveled with many companies but WildTerra stands out. Authentic experiences, responsible tourism, and amazing value.",
        name: "Emily R.",
        location: "Sydney, Australia",
        trip: "Premium Jordan",
        rating: 5,
        initials: "ER",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-green-700 font-semibold text-sm tracking-widest uppercase mb-3">
                        Testimonials
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What Our Travelers Say
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Real reviews from real travelers who&apos;ve experienced WildTerra adventures
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-5">
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

                            <p className="text-gray-600 italic mb-6 leading-relaxed">
                                &ldquo;{t.quote}&rdquo;
                            </p>

                            <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-sm">
                                    {t.initials}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-semibold text-gray-800 text-sm">{t.name}</p>
                                        <span className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            Verified
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-400">{t.location} · {t.trip}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
