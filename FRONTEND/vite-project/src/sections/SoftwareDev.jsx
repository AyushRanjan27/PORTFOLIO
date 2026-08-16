import React from "react";
import { Terminal, Code, Cpu, Server, ShieldCheck } from "lucide-react";

export default function SoftwareDev() {
  const bulletPoints = [
    "Full-Stack Web Architectures: Designing client interfaces in React and linking them with robust backend services.",
    "RESTful API Engineering: Creating structured API routes using Express.js to process and validate JSON data payloads.",
    "Relational & Document Databases: Modeling data schemas using Mongoose (MongoDB) and SQL queries (MySQL).",
    "Security & Middleware: Setting up CORS policies, environment variables via dotenv, and validation rules.",
    "Modern Tooling & Git: Version control workflows, API verification using Postman, and package management via NPM."
  ];

  return (
    <section id="software-dev" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="spotlight-section">
        <div className="spotlight-header">
          <Terminal size={32} className="spotlight-icon" />
          <h2 className="spotlight-title">Software Development Focus</h2>
        </div>
        
        <div className="spotlight-grid">
          <div className="spotlight-desc">
            <p>
              I build scalable, modern web applications utilizing the MERN stack. My engineering process focuses on writing clean, self-documenting code, enforcing type/schema safety, and ensuring seamless asynchronous communication between client and server layers.
            </p>
            
            <ul className="spotlight-bullets">
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          
          <div className="spotlight-case-study">
            <h3 className="case-study-title">Featured Implementation: MERN Inquiry Portal</h3>
            
            <div className="case-study-steps">
              <div className="case-step">
                <span className="case-step-num">1</span>
                <div className="case-step-content">
                  <strong>Client Form Submission</strong>
                  <p>React interface collects recruiter input, checks validation, and initiates a POST request using Axios.</p>
                </div>
              </div>
              
              <div className="case-step">
                <span className="case-step-num">2</span>
                <div className="case-step-content">
                  <strong>Express Server Processing</strong>
                  <p>Server parses the payload, executes CORS checks, and handles endpoint routing at port 5000.</p>
                </div>
              </div>
              
              <div className="case-step">
                <span className="case-step-num">3</span>
                <div className="case-step-content">
                  <strong>Mongoose Serialization</strong>
                  <p>Mongoose validates records against the strict database schema (name, email, subject, message).</p>
                </div>
              </div>
              
              <div className="case-step">
                <span className="case-step-num">4</span>
                <div className="case-step-content">
                  <strong>DB Storage with Graceful Fallback</strong>
                  <p>Saves inquiries to MongoDB. Falls back to console logger and buffer array if DB server is offline.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
