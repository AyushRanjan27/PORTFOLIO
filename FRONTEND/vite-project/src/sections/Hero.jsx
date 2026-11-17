import React from "react";
import { Github, Linkedin, Mail, FileText, ChevronRight } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  const { personalInfo } = portfolioData;

  const scrollToSection = (id) => {
    const target = document.querySelector(id);
    if (target) {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <p className="hero-subtitle">Welcome to my space</p>
        <h1 className="hero-title">{personalInfo.name}</h1>
        <h2 className="hero-subtitle" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', textTransform: 'none', margin: '0 0 24px', letterSpacing: 'normal' }}>
          {personalInfo.title}
        </h2>
        
        <p className="hero-description">
          Computer Science & Engineering student at Parul University. Certified in <strong>AWS Cloud Computing</strong>, <strong>Cisco Data Science</strong>, and <strong>NPTEL Introduction to Internet of Things</strong>. I build clean full-stack web applications and conduct statistical data analysis to generate business insights and solve real-world problems.
        </p>
        
        <div className="hero-actions">
          <button onClick={() => scrollToSection("#projects")} className="btn btn-primary">
            View Projects <ChevronRight size={16} />
          </button>
          
          <button onClick={() => scrollToSection("#resume")} className="btn btn-secondary">
            <FileText size={16} /> View Resume
          </button>
          
          <button onClick={() => scrollToSection("#contact")} className="btn btn-secondary">
            Contact Me
          </button>
        </div>
        
        <div className="hero-socials">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            <Github size={22} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="social-link" title="Email">
            <Mail size={22} />
          </a>
        </div>
      </div>
      
      <div className="hero-visual">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <img 
            src={profileImg} 
            alt="Ayush Ranjan" 
            style={{ 
              width: '180px', 
              height: '180px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              border: '4px solid var(--accent-color)', 
              boxShadow: 'var(--shadow-lg)',
              transition: 'transform var(--transition-normal)'
            }} 
            className="profile-photo"
          />
          <div className="hero-badge-box" style={{ width: '280px', height: 'auto', padding: '20px' }}>
            <h3 className="hero-badge-name" style={{ fontSize: '1.25rem' }}>{personalInfo.name}</h3>
            <p className="hero-badge-desc" style={{ fontSize: '0.85rem' }}>CSE Student & Developer</p>
            <div className="hero-badge-tag" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>MERN Stack | Data Analytics</div>
            
            <div style={{ marginTop: '12px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Parul Institute of Technology
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
