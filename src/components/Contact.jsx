import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        setSuccess(false);

        try {
            const response = await fetch("https://formspree.io/f/xnneglpz", {
                method: "POST",
                headers: { "Accept": "application/json" },
                body: new FormData(e.target),
            });

            const result = await response.json();

            if (result.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                setError(true);
            }
        } catch (err) {
            setError(true);
        }

        setLoading(false);
    };

    return (
        <section
            id="contact"
            className="hero-pattern min-h-screen flex flex-col items-center justify-center px-6 py-16 text-white"
        >
            <h2 className="text-3xl sm:text-5xl font-bold text-teal-400 mb-10">Contact Me</h2>

            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl max-w-xl w-full border border-white/20 transition transform hover:scale-105 duration-300">

                {!success ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full px-5 py-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                        />

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full px-5 py-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                        />

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Your Message"
                            className="w-full px-5 py-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                        />

                        {error && (
                            <p className="text-red-400 text-sm text-center">
                                Something went wrong. Please try again.
                            </p>
                        )}

                        <button
                            type="submit"
                            className="px-7 py-4 bg-teal-400 text-black font-semibold rounded-xl hover:bg-teal-500 transition transform hover:scale-105 duration-300 disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                ) : (
                    <p className="text-teal-300 text-center text-lg font-semibold">
                        Message sent successfully! 🎉 I will reply soon.
                    </p>
                )}

                {/* SOCIAL MEDIA ICONS */}
                <div className="mt-8 flex justify-center gap-6 text-2xl">
                    <a
                        href="https://www.instagram.com/saadii.dev?igsh=MWh4aGZ2MTJ6aG12aw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-teal-400 transition transform hover:scale-110 duration-300"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sadia-ramzan-1a87092a3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-teal-400 transition transform hover:scale-110 duration-300"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/sadiaramzan838"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-teal-400 transition transform hover:scale-110 duration-300"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>
        </section>
    );
}
