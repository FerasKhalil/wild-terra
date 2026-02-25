export default function Contact() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-6">
                Contact Us
            </h1>
            <form className="space-y-6">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border p-3 rounded-lg"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded-lg"
                />
                <textarea
                    placeholder="Message"
                    className="w-full border p-3 rounded-lg h-32"
                />
                <button className="bg-green-700 text-white px-6 py-3 rounded-lg">
                    Send Message
                </button>
            </form>
        </div>
    );
}