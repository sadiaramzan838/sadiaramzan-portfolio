import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import ChatBot from "./components/ChatBot";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Experience/>
      <Contact />
      <Footer />
<ChatBot />
      

      <div id="home">
        {/* Hero Section Here */}
      </div>

      <div id="about">
        {/* About Component */}
      </div>

      <div id="skills">
        {/* Skills Component */}
      </div>

      <div id="projects">
        {/* Projects Component */}
      </div>

      <div id="certificates">
        {/* Certificates Component */}
      </div>
      <div id="experience">
        {/* Experience Component */}
      </div>

      <div id="contact">
        {/* Contact Component */}
      </div>
    </>
  );
}

export default App;
