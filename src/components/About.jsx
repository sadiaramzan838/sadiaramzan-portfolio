import React from "react";
import "../App.css";
import aboutImage from "../assets/about.png";

export default function About() {
    return (
        <section
    id="about"
    className="hero-pattern w-full text-white flex items-center justify-center px-6 py-10 md:py-20"
>
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Image */}
        <div className="flex-1 hidden md:flex justify-center">
            <img
                src={aboutImage}
                alt="Sadia Ramzan"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl object-cover shadow-xl"
            />
        </div>

        {/* Right Text */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold text-teal-400 mb-4">
                About Me
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg max-w-md mx-auto md:mx-0">
                I’m Sadia Ramzan, a passionate Frontend Developer and a BSCS student
                at Bahauddin Zakariya University Multan (Session 2023–2027) with
                a CGPA of 3.67.<br /> I specialize in HTML, CSS, JavaScript, React,
                Bootstrap, and Tailwind, and have completed professional training
                from Skills Education (90% score) and WebDev Masters.<br />
                I’ve built multiple responsive, user-focused projects,
                prioritizing clean code, modern UI, and smooth user experience.
                I am also actively growing my professional presence on LinkedIn
                to connect with fellow developers and expand my learning network.
            </p>
        </div>
    </div>
</section>

    );
}
