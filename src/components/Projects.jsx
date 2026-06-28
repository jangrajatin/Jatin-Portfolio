import calculator from "../assets/projects/calculator.png";
import portfolio from "../assets/projects/portfolio.png";


const projects = [
  {
    title: "Advanced Calculator",
    image: calculator,
    description:
      "A desktop calculator built with Python and CustomTkinter featuring a modern interface and advanced calculations.",
    github: "https://github.com/jangrajatin",
    demo: "https://github.com/jangrajatin/Advance-Calculator",
  },
  {
    title: "React Portfolio",
    image: portfolio,
    description:
      "A premium personal portfolio built using React, Vite and Framer Motion with a modern black and yellow design.",
    github: "https://github.com/jangrajatin",
    demo: "https://github.com/jangrajatin/React-Portfolio",
  },
  
  
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>My Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  GitHub
                </a>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;