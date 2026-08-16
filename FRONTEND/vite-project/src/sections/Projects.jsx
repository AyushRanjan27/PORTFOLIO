import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web Development", "Full Stack", "Machine Learning"];

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Web Development") return project.tag === "Web Development";
    if (filter === "Full Stack") return project.category === "Full Stack";
    if (filter === "Machine Learning") return project.category === "Machine Learning";
    return true;
  });

  return (
    <section id="projects" style={{ borderTop: '1px solid var(--border-color)' }}>
      <h2 className="section-title">Projects Portfolio</h2>
      <p className="section-subtitle">A collection of academic and personal projects demonstrating full-stack engineering and machine learning implementations.</p>
      
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
