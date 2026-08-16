import React from "react";
import { Award, Eye, Calendar } from "lucide-react";

export default function CertificationCard({ certificate, onClick }) {
  return (
    <div className="cert-card" onClick={onClick} title="Click to view full credential details">
      <div>
        <div className="cert-issuer">{certificate.issuer}</div>
        <h3 className="cert-name">{certificate.name}</h3>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '12px' }}>
          {certificate.skills.slice(0, 3).map((skill) => (
            <span 
              key={skill} 
              className="project-tech-item" 
              style={{ fontSize: '0.75rem', padding: '2px 6px' }}
            >
              {skill}
            </span>
          ))}
          {certificate.skills.length > 3 && (
            <span 
              className="project-tech-item" 
              style={{ fontSize: '0.75rem', padding: '2px 6px', opacity: 0.8 }}
            >
              +{certificate.skills.length - 3} more
            </span>
          )}
        </div>
      </div>
      
      <div className="cert-footer">
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Calendar size={14} /> {certificate.date}
        </span>
        
        <button className="cert-btn">
          <Eye size={14} /> View Details
        </button>
      </div>
    </div>
  );
}
