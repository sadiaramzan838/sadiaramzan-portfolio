import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";

import weather from "../assets/weather.png";
import task from "../assets/task.png";
import glownest from "../assets/glownest.png";
import blog from "../assets/blog.png";
import buynest from "../assets/buynest-ecommerce.png";
import aidas from "../assets/aidas.png";
import apexcify from "../assets/apexcify.png";
import figma from "../assets/figma.png";
import mini from "../assets/mini.png";


// Mini Projects images
import kanban from "../assets/kanban.png";
import rockpaper from "../assets/rockpaper.png";
import tictac from "../assets/tictac.png";
import calculator from "../assets/calculator.png";
import todo from "../assets/todolist.png";
import form from "../assets/form.png";
import quote from "../assets/quote.png";
import clock from "../assets/clock.png";
import charactercount from "../assets/charactercount.png";
import popupmodel from "../assets/popupmodel.png";
import bgcolor from "../assets/bgcolor.png";
import clickcounter from "../assets/clickcounter.png";
import faq from "../assets/faq.png";

const projects = [
    { title: "Weather App", tech: "React & Tailwind", image: weather, live: "https://weatherflow-app.netlify.app/", code: "https://github.com/sadiaramzan838/weather-app.git" },
    { title: "Task Management App", tech: "React & Tailwind", image: task, live: "https://taskmanaging-app.netlify.app", code: "https://github.com/sadiaramzan838/task-management-app.git" },
    { title: "Glow Nest", tech: "HTML, CSS & JS", image: glownest, live: "https://glow-nest-website.netlify.app", code: "https://github.com/sadiaramzan838/glow-nest.git" },
    { title: "My Blog Zone", tech: "React & Bootstrap", image: blog, live: "https://myblog-zone.netlify.app", code: "https://github.com/sadiaramzan838/blog-zone.git" },
    { title: "Buynest Ecommerce App", tech: "React & Tailwind", image: buynest, live: "https://buynest-ecommerce-app.netlify.app/", code: "https://github.com/sadiaramzan838/buynest-ecommerce-app.git" },
    { title: "Aidas Clone app for movie trailers", tech: "React & Tailwind", image: aidas, live: "https://aidas-clone-website.netlify.app/", code: "https://github.com/sadiaramzan838/aidas-netflix-clone-website.git" },
    { title: "Apexify Technologys website", tech: "HTML, Tailwind and JS", image: apexcify, live: "https://apexcifytechnologys-task1.netlify.app/", code: "https://github.com/sadiaramzan838/apexcify-technologys-task1-website.git" },
    { title: "Figma design of ecommerce website", tech: "HTML & Tailwind", image: figma, live: "https://developershub-task-ecommercesite.netlify.app/", code: "https://github.com/sadiaramzan838/developershub-ecommerce-figmadesign-internship-task.git" },
    { title: "More Mini Projects", tech: "HTML, CSS & JS", image: mini, live: "#", code: "#", isModal: true },
];

const miniProjects = [
        { title: "Kanban Board", tech: "HTML, CSS & JS", image: kanban, live: "https://simplekanban-board.netlify.app/", code: "https://github.com/sadiaramzan838/syntecxhubinternship-task4-kanbanboard.git" },
    { title: "Rock Paper Scissor", tech: "HTML, CSS & JS", image: rockpaper, live: "https://rockxpaperxscissor.netlify.app", code: "https://github.com/sadiaramzan838/rock-paper-scissor-game.git" },
    { title: "Tic Tac Toe", tech: "HTML, CSS & JS", image: tictac, live: "https://tictac-pro.netlify.app", code: "https://github.com/sadiaramzan838/tic-tac-toe-game.git" },
    { title: "Calculator", tech: "HTML, CSS & JS", image: calculator, live: "https://quick-calculater.netlify.app", code: "https://github.com/sadiaramzan838/calculator.git" },
    { title: "To-Do List", tech: "HTML, CSS & JS", image: todo, live: "https://firstone-to-do-list.netlify.app", code: "https://github.com/sadiaramzan838/to-do-list.git" },
    { title: "Form With Validations", tech: "HTML, CSS & JS", image: form, live: "https://formwithvalidations.netlify.app", code: "https://github.com/sadiaramzan838/form.git" },
    { title: "Quote Generator", tech: "HTML, CSS & JS", image: quote, live: "https://quotesgenerating.netlify.app", code: "https://github.com/sadiaramzan838/quote-generator.git" },
    { title: "Digital Clock", tech: "HTML, CSS & JS", image: clock, live: "https://timetrax.netlify.app", code: "https://github.com/sadiaramzan838/digital-clock.git" },
    { title: "Character Count Tool", tech: "HTML, CSS & JS", image: charactercount, live: "https://characterscount.netlify.app", code: "https://github.com/sadiaramzan838/character-count.git" },
    { title: "Popup Modal", tech: "HTML, CSS & JS", image: popupmodel, live: "https://simple-popup-model.netlify.app", code: "https://github.com/sadiaramzan838/popup-model.git" },
    { title: "Background Color Tool", tech: "HTML, CSS & JS", image: bgcolor, live: "https://background-color-tool.netlify.app", code: "https://github.com/sadiaramzan838/color-changer.git" },
    { title: "Button Click Counter", tech: "HTML, CSS & JS", image: clickcounter, live: "https://buttonclickcounter.netlify.app", code: "https://github.com/sadiaramzan838/button-click-counter.git" },
    { title: "FAQ Session", tech: "HTML, CSS & JS", image: faq, live: "https://faq-session.netlify.app", code: "https://github.com/sadiaramzan838/FAQ.git" },
];

export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="projects" className="w-full hero-pattern px-4 sm:px-6 py-14 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl sm:text-5xl font-bold text-teal-400 mb-10">
                    My Projects
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => project.isModal && setIsModalOpen(true)}
                            className={`bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform ${project.isModal ? "ring-2 ring-teal-500/30" : ""}`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-32 sm:h-44 object-cover"
                            />
                            <div className="p-3 sm:p-4 flex flex-col flex-1">
                                <h3 className="text-sm sm:text-lg font-semibold">{project.title}</h3>
                                <p className="text-xs sm:text-sm text-gray-300 mb-3">{project.tech}</p>

                                {project.isModal ? (
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="px-2 py-1 sm:px-3 sm:py-2 bg-teal-400 text-black font-semibold text-xs sm:text-sm rounded-lg hover:bg-teal-500 transition"
                                    >
                                        Explore Mini Projects
                                    </button>
                                ) : (
                                    <div className="flex gap-2 mt-auto">
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            className="flex-1 px-2 py-1 sm:px-3 sm:py-2 bg-teal-400 text-black text-xs sm:text-sm rounded-lg text-center font-semibold hover:bg-teal-500 transition"
                                        >
                                            Live
                                        </a>
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            className="flex-1 px-2 py-1 sm:px-3 sm:py-2 border border-teal-400 text-teal-400 text-xs sm:text-sm rounded-lg text-center font-semibold hover:bg-teal-600 hover:text-white transition"
                                        >
                                            Code
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        className="relative bg-gray-900 rounded-2xl w-full max-w-4xl mx-4 p-5 overflow-y-auto max-h-[85vh]"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-teal-400">Mini Projects</h3>
                            <button
                                className="text-gray-200 text-2xl hover:bg-gray-800 px-2 rounded"
                                onClick={() => setIsModalOpen(false)}
                            >
                                ×
                            </button>
                        </div>

                        {/* MINI PROJECTS GRID */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                            {miniProjects.map((mini, idx) => (
                                <div key={idx} className="bg-gray-800 rounded-lg overflow-hidden">
                                    <img
                                        src={mini.image}
                                        className="w-full h-24 sm:h-32 object-cover"
                                    />
                                    <div className="p-2 sm:p-3">
                                        <h4 className="text-xs sm:text-sm font-semibold">{mini.title}</h4>
                                        <p className="text-[10px] sm:text-xs text-gray-300">{mini.tech}</p>

                                        <div className="mt-2 flex gap-1 sm:gap-2">
                                            <a
                                                href={mini.live}
                                                target="_blank"
                                                className="flex-1 px-2 py-1 bg-teal-400 text-black text-[10px] sm:text-xs rounded font-medium text-center"
                                            >
                                                Live
                                            </a>
                                            <a
                                                href={mini.code}
                                                target="_blank"
                                                className="flex-1 px-2 py-1 border border-teal-400 text-teal-400 text-[10px] sm:text-xs rounded font-medium text-center"
                                            >
                                                Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 flex justify-end">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-3 py-2 bg-teal-400 text-black rounded-lg font-medium"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
}
