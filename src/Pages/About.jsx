import React from "react";
import "./About.css"; // we'll add styles here

const skills = [
  { name: "HTML", icon: "🌐", level: 90 },
  { name: "CSS", icon: "🎨", level: 85 },
  { name: "JavaScript", icon: "⚙️", level: 80 },
  { name: "React", icon: "⚛️", level: 75 },
];

function Skills() {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      {skills.map((e) => (
        <div key={e.name} className="skill-bar">
          <div className="skill-header">
            <span>{e.icon}</span>
            <strong>{e.name}</strong>
          </div>
          <div className="progress-wrapper">
            <div
              className="progress-fill"
              style={{ width: `${e.level}%` }}
            >
              <span className="progress-text">{e.level}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
