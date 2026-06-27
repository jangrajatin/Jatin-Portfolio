import calculator from "../assets/projects/calculator.png";
import portfolio from "../assets/projects/portfolio.png";
import spacex from "../assets/projects/spacex.png";
import automobile from "../assets/projects/automobile.png";


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
  {
    title: "SpaceX Data Analysis",
    image: spacex,
    description:
      "Data analysis and visualization using Python, Pandas and Matplotlib.",
    github: "https://github.com/jangrajatin",
    demo: "#",
  },
  {
    title: "Automobile Sales Dashboard",
    image: automobile,
    description:
      "Exploratory Data Analysis project using Python with interactive charts and insights.",
    github: "https://github.com/jangrajatin",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

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

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Live Demo
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