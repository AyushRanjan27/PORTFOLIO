import React from "react";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" style={{ borderTop: '1px solid var(--border-color)' }}>
      <h2 className="section-title">Education History</h2>
      <p className="section-subtitle">My academic history and specialized engineering coursework.</p>
      
      <div className="timeline">
        {education.map((edu, idx) => (
          <div key={idx} className="timeline-item">
            <div className="timeline-dot"></div>
            
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-degree">{edu.degree}</h3>
                  <p className="timeline-institution">{edu.institution}</p>
                </div>
                
                <span className="timeline-date">
                  <Calendar size={12} style={{ marginRight: '4px', display: 'inline' }} />
                  {edu.dates}
                </span>
              </div>
              
              <div className="timeline-location" style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: '4px 0 12px' }}>
                <MapPin size={14} />
                {edu.location}
              </div>
              
              <p className="timeline-desc">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
