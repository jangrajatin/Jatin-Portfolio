import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Github from "./components/Github";


function App() {
  return (
    <>
      <ScrollProgress /> 

      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Github />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;