import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative py-24 overflow-hidden">
            <img
                src="/images/wadi_rum.jpg"
                alt="Wadi Rum desert"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-green-900/80" />
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <p className="text-green-300 font-semibold text-sm tracking-widest uppercase mb-4">
                    Start Your Journey
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready For Your Next Adventure?
                </h2>
                <p className="text-green-100/80 text-lg mb-10 max-w-2xl mx-auto">
                    Join thousands of travelers who&apos;ve discovered the magic of Jordan with WildTerra. 
                    Small groups, expert guides, unforgettable experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/adventures"
                        className="bg-white text-green-800 hover:bg-green-50 px-8 py-4 rounded-lg font-bold transition inline-flex items-center justify-center gap-2"
                    >
                        Browse Trips
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                    <Link
                        href="/contact"
                        className="border-2 border-white/40 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold transition inline-flex items-center justify-center gap-2"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
