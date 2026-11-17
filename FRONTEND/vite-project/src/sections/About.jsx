import React from "react";
import { User, BookOpen, Heart, Shield } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function About() {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" style={{ borderTop: '1px solid var(--border-color)' }}>
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">A brief overview of my academic foundation, technical capabilities, and interests.</p>
      
      <div className="about-grid">
        <div className="about-text">
          <p>
            Hello! I am <strong>Ayush Ranjan</strong>, a Computer Science & Engineering student at Parul Institute of Technology, Parul University. I specialize in building practical applications using the MERN Stack and extracting actionable insights from data using statistical analysis.
          </p>
          <p>
            My core interest lies at the intersection of <strong>Software Engineering</strong> and <strong>Data Science</strong>. I enjoy writing clean, modular backend APIs and modeling relational/non-relational databases, as well as preprocessing complex datasets to construct machine learning classification pipelines.
          </p>
          <p>
            Through my coursework and certifications (AWS Cloud Computing, Cisco Data Science, and NPTEL Introduction to Internet of Things), I have built a strong foundation in cloud systems, distributed applications, IoT concepts, database management, and data analytics, which I apply to hands-on projects.
          </p>
        </div>
        
        <div className="about-details">
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
            Quick Facts
          </h3>
          
          <div className="about-detail-item">
            <span className="about-detail-label">Name</span>
            <span className="about-detail-value">{personalInfo.name}</span>
          </div>
          
          <div className="about-detail-item">
            <span className="about-detail-label">Role</span>
            <span className="about-detail-value">Web Developer & Analyst</span>
          </div>
          
          <div className="about-detail-item">
            <span className="about-detail-label">Education</span>
            <span className="about-detail-value">B.Tech in CSE (Ongoing)</span>
          </div>
          
          <div className="about-detail-item">
            <span className="about-detail-label">Location</span>
            <span className="about-detail-value">{personalInfo.location}</span>
          </div>
          
          <div className="about-detail-item">
            <span className="about-detail-label">Languages</span>
            <span className="about-detail-value">English, Hindi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
