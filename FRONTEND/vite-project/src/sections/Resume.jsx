import React from "react";
import { Download, FileText, Briefcase, GraduationCap, Award, Settings } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Resume() {
  const { personalInfo, education, skills, certifications } = portfolioData;

  return (
    <section id="resume" style={{ borderTop: '1px solid var(--border-color)' }}>
      <h2 className="section-title">Resume & CV</h2>
      <p className="section-subtitle">Review my qualifications or download a print-friendly version of my professional CV.</p>
      
      <div className="resume-box">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href="/resume.pdf" download="Ayush_Ranjan_Resume.pdf" className="btn btn-primary">
            <Download size={18} /> Download PDF Resume
          </a>
          
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <FileText size={18} /> Open PDF in New Tab
          </a>
        </div>
        
        <div className="resume-preview-container">
          <div className="resume-header">
            <h3 className="resume-name">{personalInfo.name}</h3>
            <p className="resume-title">{personalInfo.title}</p>
            <div className="resume-contact">
              <span>{personalInfo.email}</span>
              <span>{personalInfo.location}</span>
              <span><a href={personalInfo.github}>GitHub</a></span>
              <span><a href={personalInfo.linkedin}>LinkedIn</a></span>
            </div>
          </div>
          
          <h4 className="resume-section-title">
            <GraduationCap size={16} style={{ marginRight: '6px', verticalAlign: 'middle', display: 'inline' }} />
            Education
          </h4>
          {education.map((edu, index) => (
            <div key={index} className="resume-item">
              <div className="resume-item-title">
                <span>{edu.degree} &bull; {edu.field}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{edu.dates}</span>
              </div>
              <p className="resume-item-subtitle">{edu.institution}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{edu.details}</p>
            </div>
          ))}
          
          <h4 className="resume-section-title">
            <Settings size={16} style={{ marginRight: '6px', verticalAlign: 'middle', display: 'inline' }} />
            Skills Summary
          </h4>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            <p style={{ marginBottom: '6px' }}><strong>Programming:</strong> {skills.programming.join(", ")}</p>
            <p style={{ marginBottom: '6px' }}><strong>Web Development (MERN):</strong> {skills.webDev.join(", ")}</p>
            <p style={{ marginBottom: '6px' }}><strong>Databases:</strong> {skills.database.join(", ")}</p>
            <p style={{ marginBottom: '6px' }}><strong>Data Analytics:</strong> {skills.dataAnalytics.join(", ")}</p>
            <p style={{ marginBottom: '6px' }}><strong>Data Science / ML:</strong> {skills.dataScience.join(", ")}</p>
          </div>
          
          <h4 className="resume-section-title">
            <Award size={16} style={{ marginRight: '6px', verticalAlign: 'middle', display: 'inline' }} />
            Certifications
          </h4>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {certifications.map((cert) => (
              <p key={cert.id} style={{ marginBottom: '6px' }}>
                <strong>{cert.name}</strong> &ndash; {cert.issuer} ({cert.date})
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
