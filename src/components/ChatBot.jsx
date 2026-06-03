import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Send } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I'm Sadia's AI Assistant. Ask me about Sadia's skills, projects, internships, certificates or contact information.",
    },
  ]);

  const messagesEndRef = useRef(null);
  const genAI = new GoogleGenerativeAI(
    import.meta.env.VITE_GEMINI_API_KEY
  );

 const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const getAIResponse = async (userQuestion) => {
    try {
      const prompt = `
You are Sadia Ramzan's personal portfolio assistant.

About Sadia:
- Frontend Developer
- BSCS Student at Bahauddin Zakariya University Multan
- Session 2023–2027
- CGPA 3.67

Skills:
HTML, CSS, JavaScript, React JS, Tailwind CSS, Bootstrap, GitHub, Netlify, VS Code

Projects:
- Weather App
- Task Management App
- Glow Nest
- My Blog Zone
- Buynest Ecommerce App
- Aidas Clone
- Apexcify Technologies Website
- Ecommerce Figma Design Project
- Multiple JavaScript Mini Projects

Certificates:
- Frontend Development using AI (WebDev Masters)
- Full Stack Web Development (Skills Education)

Internships:
- WebDev Masters
- Syntecxhub
- Apexcify Technologys
- DevelopersHub Corporation
- Softgrow Tech

Social Links:
LinkedIn:
https://www.linkedin.com/in/sadia-ramzan-1a87092a3

GitHub:
https://github.com/sadiaramzan838

Instagram:
https://www.instagram.com/saadii.dev

Rules:
- Answer only about Sadia and her portfolio.
- Keep answers concise and professional.
- If a question is unrelated to Sadia, politely explain that you only assist with Sadia's portfolio.

Question:
${userQuestion}
`;

      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error(error);
      return "Sorry, I'm unable to respond right now. Please try again later.";
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const reply = await getAIResponse(input);

    const botMessage = {
      sender: "bot",
      text: reply,
    };

    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };

  const handleQuickQuestion = async (question) => {
    const userMessage = {
      sender: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    const reply = await getAIResponse(question);

    const botMessage = {
      sender: "bot",
      text: reply,
    };

    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-teal-400 to-teal-600 text-black p-4 rounded-full shadow-[0_0_20px_rgba(45,212,191,0.5)] hover:scale-110 transition-all duration-300"
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[92%] sm:w-80 h-[500px] bg-gray-900 border border-teal-400 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">

          {/* Header */}
          <div className="bg-teal-400 text-black font-bold p-4 flex items-center gap-2">
            <Bot size={20} />
            Sadia's AI Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-gray-800">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] p-3 rounded-xl text-sm whitespace-pre-wrap ${
                  msg.sender === "user"
                    ? "ml-auto bg-teal-400 text-black"
                    : "bg-gray-800 text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-gray-800 text-white p-3 rounded-xl text-sm w-fit">
                Thinking...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Buttons */}
          <div className="px-3 py-2 flex flex-wrap gap-2 border-t border-gray-700">
            {[
              "Tell me about Sadia",
              "Skills",
              "Projects",
              "Experience",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => handleQuickQuestion(item)}
                className="text-xs bg-gray-800 text-teal-400 px-2 py-1 rounded hover:bg-gray-700"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-700 flex gap-2">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg outline-none border border-gray-700 focus:border-teal-400"
            />

            <button
              onClick={sendMessage}
              className="bg-teal-400 text-black px-3 rounded-lg hover:bg-teal-500 transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}