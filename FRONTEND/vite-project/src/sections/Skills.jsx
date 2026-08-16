import React from "react";
import { Code, Layout, Database, BarChart2, Brain, Wrench } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    {
      title: "Programming",
      skillsList: skills.programming,
      icon: <Code className="skills-card-icon" size={24} />
    },
    {
      title: "Web Development",
      skillsList: skills.webDev,
      icon: <Layout className="skills-card-icon" size={24} />
    },
    {
      title: "Database Management",
      skillsList: skills.database,
      icon: <Database className="skills-card-icon" size={24} />
    },
    {
      title: "Data Analytics",
      skillsList: skills.dataAnalytics,
      icon: <BarChart2 className="skills-card-icon" size={24} />
    },
    {
      title: "Data Science & ML",
      skillsList: skills.dataScience,
      icon: <Brain className="skills-card-icon" size={24} />
    },
    {
      title: "Developer Tools",
      skillsList: skills.tools,
      icon: <Wrench className="skills-card-icon" size={24} />
    }
  ];

  return (
    <section id="skills" style={{ borderTop: '1px solid var(--border-color)' }}>
      <h2 className="section-title">Skills & Expertise</h2>
      <p className="section-subtitle">A dashboard of technologies and methodologies I have studied and worked with.</p>
      
      <div className="skills-container">
        {categories.map((cat) => (
          <div key={cat.title} className="skills-card">
            <div className="skills-card-header">
              {cat.icon}
              <h3 className="skills-card-title">{cat.title}</h3>
            </div>
            
            <div className="skills-list">
              {cat.skillsList.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
