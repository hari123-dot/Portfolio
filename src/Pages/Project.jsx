import React, { useEffect, useState } from "react";
import "./Project.css";

function Projects() {
  const [repos, setRepos] = useState([]);
  const githubUsername = "hari123-dot"; // Replace with your GitHub username

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  return (
    <div className="projects-section">
      <h2>My GitHub Projects</h2>
      <div className="projects-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="project-card">
            <h3>{repo.name}</h3>
            <p>{repo.description || "No description provided."}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );    
}

export default Projects;
