import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <div className="container">
          <h1>Jatin Jangra</h1>
        </div>

        <TypeAnimation
          sequence={[
            "BCA Student",
            1500,
            "Python Developer",
            1500,
            "React Developer",
            1500,
            "Frontend Developer",
            1500,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <p>
          Passionate about Python, C++, Java, SQL and building modern software
          solutions.
        </p>

        <div className="hero-buttons">
          <a
            href="https://github.com/jangrajatin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jatin-jangra-a2b9253aa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="/resume/JATIN-RESUME.pdf"
            download
            className="btn btn-outline"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Jatin Jangra" />
      </div>
    </motion.section>
  );
}

export default Hero;