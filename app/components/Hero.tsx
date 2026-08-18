"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import petra from "../../public/images/hero/petra.webp";
import jerash from "../../public/images/jerash.webp";
import ajloun from "../../public/images/ajloun.jpg";
import wadi_rum from "../../public/images/wadi_rum.jpg";

export default function HeroCarousel() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");

    const images = [
        { src: petra, label: "Petra" },
        { src: jerash, label: "Jerash" },
        { src: ajloun, label: "Ajloun" },
        { src: wadi_rum, label: "Wadi Rum" },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [current]);

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (searchQuery.trim()) {
            params.set("keyword", searchQuery.trim());
        }
        router.push(`/adventures?${params.toString()}`);
    };

    return (
        <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden">

            {/* Images */}
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img.src.src}
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl px-6 w-full">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    Adventure Without Limits
                </h1>

                <p className="text-lg md:text-xl mb-8 text-white/90">
                    Small group journeys. Big life experiences.
                </p>

                {/* Search Bar */}
                <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                    <div className="flex bg-white rounded-lg overflow-hidden shadow-2xl">
                        <div className="flex-1 flex items-center px-4">
                            <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Where do you want to go?"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full py-4 px-2 text-gray-800 text-lg outline-none placeholder-gray-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 font-semibold transition-colors flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Search
                        </button>
                    </div>
                </form>

                {/* Quick Links */}
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <span className="text-white/70 text-sm">Popular:</span>
                    {["Petra", "Wadi Rum", "Dead Sea", "Amman"].map((term) => (
                        <button
                            key={term}
                            onClick={() => {
                                setSearchQuery(term);
                                const params = new URLSearchParams();
                                params.set("keyword", term);
                                router.push(`/adventures?${params.toString()}`);
                            }}
                            className="text-sm text-white/90 bg-white/15 hover:bg-white/25 px-3 py-1 rounded-full transition"
                        >
                            {term}
                        </button>
                    ))}
                </div>
            </div>

            {/* LEFT ARROW */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
            >
                ‹
            </button>

            {/* RIGHT ARROW */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
            >
                ›
            </button>

            {/* DOTS */}
            <div className="absolute bottom-6 flex gap-2 z-20">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === current ? "bg-white" : "bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
