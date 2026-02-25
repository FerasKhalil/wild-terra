"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-green-700">
                    WildTerra
                </Link>

                <div className="space-x-6 hidden md:flex">
                    <Link href="/" className="text-green-700 hover:text-green-600">
                        Home
                    </Link>
                    <Link href="/adventures" className="text-green-700 hover:text-green-600">
                        Adventures
                    </Link>
                    <Link href="/about" className="text-green-700 hover:text-green-600">
                        About
                    </Link>
                    <Link href="/contact" className="text-green-700 hover:text-green-600">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}