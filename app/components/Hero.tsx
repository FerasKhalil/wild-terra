"use client";

import { useEffect, useState } from "react";
import petra from "../../public/images/hero/petra.webp";
import jerash from "../../public/images/jerash.webp";
import ajloun from "../../public/images/ajloun.jpg";
import wadi_rum from "../../public/images/wadi_rum.jpg";

export default function HeroCarousel() {
    const images = [
        { src: petra, label: "Petra" },
        { src: jerash, label: "Jerash" },
        { src: ajloun, label: "Ajloun" },
        { src: wadi_rum, label: "Wadi Rum" },
    ];

    const [current, setCurrent] = useState(0);

    // Auto slide (resets on manual navigation)
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

    return (
        <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">

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
            <div className="relative z-10 text-center max-w-3xl p-10">
                <h1 className="text-5xl font-bold mb-4">
                    Adventure Without Limits
                </h1>

                <p className="text-lg mb-4">
                    Small group journeys. Big life experiences.
                </p>

                {/* Dynamic location */}
                <p className="text-xl font-semibold tracking-wide">
                    {images[current].label}
                </p>
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