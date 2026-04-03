import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-4 border-t border-teal-400">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6">



                {/* Social Icons */}
                <div className="flex gap-6 text-xl md:text-2xl">
                    <a
                        href="https://www.instagram.com/saadii.dev?igsh=MWh4aGZ2MTJ6aG12aw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 transition transform hover:scale-110 duration-300"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sadia-ramzan-1a87092a3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 transition transform hover:scale-110 duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/sadiaramzan838"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-400 transition transform hover:scale-110 duration-300"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>

            <div className="text-center text-xs text-black-400 mt-2">
                &copy; {new Date().getFullYear()} Sadia Ramzan. All rights reserved.
            </div>
        </footer>
    );
}
