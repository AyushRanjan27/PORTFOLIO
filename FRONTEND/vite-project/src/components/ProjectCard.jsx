import React from "react";
import { Github, ExternalLink, GitBranch, Database, FileText } from "lucide-react";

export default function ProjectCard({ project }) {
  const isDataAnalytics = project.category === "Machine Learning" || project.category === "Data Analytics";

  return (
    <div className="project-card">
      <div>
        <div className="project-card-header">
          <span className="project-tag">{project.tag}</span>
          <span className="project-date">{project.date}</span>
        </div>
        
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        
        {/* Structural Analysis Metadata block */}
        <div className="project-meta-box">
          <p>
            <strong>Problem: </strong> {project.problem}
          </p>
          
          {isDataAnalytics ? (
            <>
              {project.data && <p><strong>Data Source: </strong> {project.data}</p>}
              {project.analysis && <p><strong>Analysis Method: </strong> {project.analysis}</p>}
              {project.insight && <p><strong>Key Insight: </strong> {project.insight}</p>}
              {project.result && <p><strong>Result: </strong> {project.result}</p>}
            </>
          ) : (
            <>
              {project.result && <p><strong>Solution: </strong> {project.result}</p>}
            </>
          )}
          
          {project.contribution && (
            <p style={{ marginTop: '8px', borderTop: '1px solid var(--border-color)', paddingTop: '6px' }}>
              <strong>My Contribution: </strong> {project.contribution}
            </p>
          )}
        </div>
      </div>
      
      <div>
        <div className="project-tech">
          {project.techStack.map((tech) => (
            <span key={tech} className="project-tech-item">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              title="View GitHub Repository"
            >
              <Github size={16} /> Code
            </a>
          )}
          
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              title="View Live Demo"
            >
              <ExternalLink size={16} /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
