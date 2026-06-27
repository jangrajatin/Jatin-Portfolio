function Skills() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "C++", level: 85 },
    { name: "Java", level: 80 },
    { name: "SQL", level: 85 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-title">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;