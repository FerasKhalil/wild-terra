export default function WhyUs() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl text-black font-bold mb-12">
                    Why Travel With Us
                </h2>

                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-semibold mb-2 text-black">Small Groups</h3>
                        <p className="text-gray-600">
                            More connection, less chaos.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2 text-black">Local Guides</h3>
                        <p className="text-gray-600">
                            Authentic experiences from locals.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2 text-black">Sustainable Travel</h3>
                        <p className="text-gray-600">
                            Responsible tourism practices.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2 text-black">Transparent Pricing</h3>
                        <p className="text-gray-600">
                            No hidden surprises.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}