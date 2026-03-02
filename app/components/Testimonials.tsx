export default function Testimonials() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-5xl mx-auto text-center px-6 text-black">
                <h2 className="text-3xl font-bold mb-12">
                    What Our Travelers Say
                </h2>

                <div className="space-y-10">
                    <div>
                        <p className="text-lg italic">
                            “Best travel experience of my life.”
                        </p>
                        <p className="font-semibold mt-2">
                            – Sarah M.
                        </p>
                    </div>

                    <div>
                        <p className="text-lg italic">
                            “Perfect balance of adventure and comfort.”
                        </p>
                        <p className="font-semibold mt-2">
                            – James K.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}