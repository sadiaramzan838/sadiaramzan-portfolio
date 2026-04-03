import React, { useState } from "react";
import webdevletter from "../assets/webdev-letter.jpeg";
import syntecxhub from "../assets/syntecxhub.png";


const letters = [
  {
    title: " Internship at WebDev Masters ",
    issuer: "Frontend Development using AI",
    date: "From 15 Nov to 15 Dec 2025",
    image: webdevletter,
  },
  {
    title: "Internship at Syntecxhub ",
    issuer: "Frontend Development ",
    date: " From 24 Feb to 24 March 2026",
    image: syntecxhub,
  },
];

export default function Letters() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="experience"
      className="hero-pattern min-h-screen flex flex-col items-center justify-center px-6 py-16"
    >
      <h2 className="text-3xl sm:text-5xl font-bold text-teal-400 mb-10">
        Experience
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {letters.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full flex flex-col justify-between transform transition duration-300 hover:scale-105"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {cert.title}
              </h3>
              <p className="text-teal-700 mb-1">{cert.issuer}</p>
              <p className="text-teal-700 mb-4">{cert.date}</p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedCert(cert.image)}
              className="mt-auto px-4 py-2 bg-teal-400 text-black font-semibold rounded-lg hover:bg-teal-500 transition transform hover:scale-105"
            >
              View Internship Letter
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
       <img
  src={selectedCert}
  alt="Certificate"
  className="max-h-[90vh] max-w-full h-auto w-auto mx-auto rounded-md"
/>

            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-2 right-2 text-gray-700 text-2xl font-bold hover:text-black"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
