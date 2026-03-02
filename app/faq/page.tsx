export default function FAQPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-10">
                Frequently Asked Questions
            </h1>

            <div className="space-y-8">
                <div>
                    <h3 className="font-semibold text-lg mb-2">
                        What is included in the trip price?
                    </h3>
                    <p className="text-gray-600">
                        Accommodation, local transport, selected meals, and guided experiences.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-2">
                        Are flights included?
                    </h3>
                    <p className="text-gray-600">
                        International flights are not included unless specified.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg mb-2">
                        What is your cancellation policy?
                    </h3>
                    <p className="text-gray-600">
                        Free cancellation up to 30 days before departure.
                    </p>
                </div>
            </div>
        </div>
    );
}