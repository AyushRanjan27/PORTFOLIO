import React, { useEffect } from "react";
import { X, Award, ExternalLink, Calendar, CheckSquare, Clock } from "lucide-react";

export default function Modal({ certificate, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!certificate) return null;

  return (
    <div className="modal-overlay" onClick={onClose} aria-modal="true" role="dialog">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>
        
        <div className="modal-body">
          <div className="modal-cert-icon">
            <Award size={40} />
          </div>
          
          <h2 className="modal-title">{certificate.name}</h2>
          <p className="modal-org">{certificate.issuer}</p>
          
          <div className="modal-meta-grid">
            <div>
              <p className="modal-meta-label">
                <Calendar size={12} style={{ marginRight: '4px', display: 'inline' }} /> Issue Date
              </p>
              <p className="modal-meta-val">{certificate.date}</p>
            </div>
            <div>
              <p className="modal-meta-label">Category</p>
              <p className="modal-meta-val">{certificate.category}</p>
            </div>
            
            {certificate.hours && (
              <div>
                <p className="modal-meta-label">
                  <Clock size={12} style={{ marginRight: '4px', display: 'inline' }} /> Course Length
                </p>
                <p className="modal-meta-val">{certificate.hours}</p>
              </div>
            )}
            
            {certificate.score && (
              <div>
                <p className="modal-meta-label">Consolidated Score</p>
                <p className="modal-meta-val">{certificate.score}</p>
              </div>
            )}

            {certificate.rollNumber && (
              <div style={{ gridColumn: 'span 2', marginTop: '8px' }}>
                <p className="modal-meta-label">Credential Verification Roll Number</p>
                <p className="modal-mono-val" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  {certificate.rollNumber}
                </p>
              </div>
            )}
          </div>
          
          <div className="modal-skills">
            <h3 className="modal-skills-title">
              <CheckSquare size={14} style={{ marginRight: '6px', display: 'inline', verticalAlign: 'middle' }} /> 
              Key Skills Validated
            </h3>
            <div className="modal-skills-list">
              {certificate.skills.map((skill) => (
                <span key={skill} className="modal-skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
            {certificate.certificateUrl ? (
              <a
                href={certificate.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                View Certificate <ExternalLink size={16} />
              </a>
            ) : null}

            {certificate.credentialUrl ? (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                Verify Credential <ExternalLink size={16} />
              </a>
            ) : (
              <button disabled className="btn btn-secondary" style={{ flex: 1, cursor: 'not-allowed', opacity: 0.6 }}>
                Verification Link Unavailable
              </button>
            )}
            
            <button className="btn btn-secondary" onClick={onClose} style={{ flex: 0.5 }}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
