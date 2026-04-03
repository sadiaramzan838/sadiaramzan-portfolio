import React from "react";
import { motion } from "framer-motion";
import "../App.css";

// Import icons
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/js.png";
import reactIcon from "../assets/react.png";
import tailwindIcon from "../assets/tailwind.png";
import bootstrapIcon from "../assets/bootstrap.png";
import github from "../assets/github.png";
import netlify from "../assets/netlify.png";
import vscodeIcon from "../assets/vscode.png";

const skills = [
    htmlIcon,
    cssIcon,
    jsIcon,
    reactIcon,
    tailwindIcon,
    bootstrapIcon,
    github,
    netlify,
    vscodeIcon,
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="w-full hero-pattern px-4 py-16 md:py-24 overflow-hidden"
        >
            <div className="container mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-teal-400 mb-12">
                    My Skills
                </h2>

                <div className="overflow-hidden relative">
                    <motion.div
                        className="flex gap-4 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* Duplicate icons for seamless scroll */}
                        {[...skills, ...skills].map((icon, index) => (
                            <div
                                key={index}
                                className="flex-none w-[20vw] sm:w-[12vw] h-[20vw] sm:h-[12vw] flex items-center justify-center"
                            >
                                <img
                                    src={icon}
                                    alt={`skill-${index}`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
