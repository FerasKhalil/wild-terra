"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Adventures", href: "/adventures" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-green-700"
                >
                    WildTerra
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-green-700 transition font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden flex flex-col space-y-1.5"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${isOpen ? "opacity-0" : ""
                            }`}
                    ></span>
                    <span
                        className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    ></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 pb-6 space-y-4 bg-white shadow-md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-700 hover:text-green-700 transition font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}