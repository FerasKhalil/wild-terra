export default function CTASection() {
    return (
        <section className="bg-green-700 text-white py-20 text-center">
            <h2 className="text-4xl font-bold mb-6">
                Ready For Your Next Adventure?
            </h2>
            <a
                href="/adventures"
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold"
            >
                Browse Trips
            </a>
        </section>
    );
}