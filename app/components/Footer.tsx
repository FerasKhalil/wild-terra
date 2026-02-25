export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12 text-center">
                <h2 className="text-xl font-semibold mb-4">WildTerra Travel</h2>
                <p className="text-gray-400">
                    © {new Date().getFullYear()} WildTerra. All rights reserved.
                </p>
            </div>
        </footer>
    );
}