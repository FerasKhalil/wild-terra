export default function Newsletter() {
    return (
        <section className="bg-gray-100 py-20 text-center">
            <h2 className="text-3xl text-black font-bold mb-6">
                Join Our Community
            </h2>

            <div className="max-w-md mx-auto flex gap-4c text-black">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 p-3 rounded-lg border text-black"
                />
                <button className="bg-green-700 text-white px-6 rounded-lg">
                    Subscribe
                </button>
            </div>
        </section>
    );
}