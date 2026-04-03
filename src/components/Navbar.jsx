import React, { useState } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-teal-500 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-teal-400 text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-semibold tracking-wide">
                    Sadia'<span className="text-white"> Portfolio</span>
                </h1>

                {/* Hamburger Button (Mobile) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-teal-400 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Links (Desktop) */}
                <ul className="hidden md:flex gap-8 text-white text-sm font-medium">
                    <li><a href="#home" className="hover:text-teal-400 duration-200">Home</a></li>
                    <li><a href="#about" className="hover:text-teal-400 duration-200">About</a></li>
                    <li><a href="#skills" className="hover:text-teal-400 duration-200">Skills</a></li>
                    <li><a href="#projects" className="hover:text-teal-400 duration-200">Projects</a></li>
                    <li><a href="#certificates" className="hover:text-teal-400 duration-200">Certificates</a></li>
                    <li><a href="#experience" className="hover:text-teal-400 duration-200">Experience</a></li>
                    <li><a href="#contact" className="hover:text-teal-400 duration-200">Contact</a></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-black/95 text-white text-center py-4 flex flex-col gap-4 border-t border-teal-500">
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#certificates" onClick={() => setIsOpen(false)}>Certificates</a></li>
                    <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            )}
        </nav>
    );
}
