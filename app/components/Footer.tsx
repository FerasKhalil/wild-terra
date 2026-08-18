import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-bold text-green-400">
                            WildTerra
                        </Link>
                        <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                            Small group adventure travel focused on authentic experiences,
                            sustainability, and responsible tourism.
                        </p>
                        <div className="flex gap-4 mt-5">
                            {["Facebook", "Instagram", "YouTube"].map((social) => (
                                <span
                                    key={social}
                                    className="text-gray-500 hover:text-green-400 cursor-pointer transition text-sm"
                                >
                                    {social}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Destinations</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/adventures?keyword=petra" className="hover:text-green-400 transition">Petra</Link></li>
                            <li><Link href="/adventures?keyword=wadi+rum" className="hover:text-green-400 transition">Wadi Rum</Link></li>
                            <li><Link href="/adventures?keyword=dead+sea" className="hover:text-green-400 transition">Dead Sea</Link></li>
                            <li><Link href="/adventures?keyword=amman" className="hover:text-green-400 transition">Amman</Link></li>
                            <li><Link href="/adventures" className="hover:text-green-400 transition">All Destinations</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-green-400 transition">About Us</Link></li>
                            <li><Link href="/faq" className="hover:text-green-400 transition">FAQ</Link></li>
                            <li><Link href="/contact" className="hover:text-green-400 transition">Contact</Link></li>
                            <li><span className="hover:text-green-400 cursor-pointer transition">Sustainability</span></li>
                            <li><span className="hover:text-green-400 cursor-pointer transition">Careers</span></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><span className="hover:text-green-400 cursor-pointer transition">Travel Alerts</span></li>
                            <li><span className="hover:text-green-400 cursor-pointer transition">Booking Conditions</span></li>
                            <li><span className="hover:text-green-400 cursor-pointer transition">Privacy Policy</span></li>
                            <li><span className="hover:text-green-400 cursor-pointer transition">Flexible Bookings</span></li>
                            <li><Link href="/contact" className="hover:text-green-400 transition">Get in Touch</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} WildTerra Travel. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs">
                        Adventure travel experiences around the world.
                    </p>
                </div>
            </div>
        </footer>
    );
}
