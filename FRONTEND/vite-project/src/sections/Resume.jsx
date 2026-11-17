import React from "react";
import { Download, FileText } from "lucide-react";

const resumeUrl = "/Resume.pdf";

export default function Resume() {
  return (
    <section id="resume" style={{ borderTop: '1px solid var(--border-color)' }}>
      <h2 className="section-title">Resume & CV</h2>
      <p className="section-subtitle">View or download the complete PDF resume.</p>
      
      <div className="resume-box">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a href={resumeUrl} download="Ayush_Ranjan_Resume.pdf" className="btn btn-primary">
            <Download size={18} /> Download PDF Resume
          </a>
          
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <FileText size={18} /> Open PDF in New Tab
          </a>
        </div>
        
        <div className="resume-preview-container">
          <iframe
            src={resumeUrl}
            title="Ayush Ranjan Resume"
            style={{ width: "100%", height: "900px", border: "none", borderRadius: "8px" }}
          />
        </div>
      </div>
    </section>
  );
}
