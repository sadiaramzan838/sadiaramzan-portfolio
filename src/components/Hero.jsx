import React, { useState, useEffect } from "react";
import "../App.css";
import heroImage from "../assets/hero-image.png";
import { Download, Briefcase } from "lucide-react";
import resume from "../assets/resume.png";

export default function Hero() {
    const lines = ["Hi, I’m Sadia Ramzan", "Frontend Developer"];
    const [text, setText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let timeout;

        if (typing) {
            if (text.length < lines[lineIndex].length) {
                timeout = setTimeout(() => {
                    setText(lines[lineIndex].slice(0, text.length + 1));
                }, 100);
            } else {
                timeout = setTimeout(() => setTyping(false), 1500);
            }
        } else {
            if (text.length > 0) {
                timeout = setTimeout(() => {
                    setText(lines[lineIndex].slice(0, text.length - 1));
                }, 50);
            } else {
                setLineIndex((prev) => (prev + 1) % lines.length);
                setTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [text, typing, lineIndex]);

    return (<section id="home" className="hero-pattern h-screen flex flex-col md:flex-row items-center justify-center px-6 relative overflow-hidden pt-12 md:pt-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">

            <div className="flex-1 mt-2 md:mt-0 md:ml-4 order-1 md:order-2 animate-float">
                <img
                    src={heroImage}
                    alt="Sadia Ramzan"
                    className="w-44 h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-full shadow-lg object-cover"
                />
            </div>

            <div className="flex-1 text-center md:text-left md:ml-23 order-2 md:order-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 whitespace-nowrap">
                    {text}
                    <span className="animate-blink">|</span>
                </h1>


                <p className="text-gray-200 mb-6 max-w-md mx-auto md:mx-0">
                    With a strong focus on clean design and usability, I create responsive and engaging web experiences that deliver smooth and meaningful interactions.</p>                <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-teal-400 text-black font-semibold rounded-lg hover:bg-teal-500 transition transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
                    >
                        View My Work
                        <Briefcase size={20} />
                    </a>

                    <a
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-teal-400 text-teal-400 font-semibold rounded-lg hover:bg-teal-600 hover:text-white transition transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
                    >
                        Get Resume
                        <Download size={20} className="text-white" />
                    </a>


                </div>
            </div>

        </div>
    </section>

    );
}
