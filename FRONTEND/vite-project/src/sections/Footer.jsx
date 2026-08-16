import React, { useState, useEffect } from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { personalInfo } = portfolioData;
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--text-primary)' }}>
          <Terminal size={18} style={{ color: 'var(--accent-color)' }} />
          <span>AYUSH RANJAN</span>
        </div>
        
        <p className="footer-copyright">
          &copy; {currentYear} Ayush Ranjan. Built using React, Vite, and custom CSS. All rights reserved.
        </p>
        
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <button
        onClick={scrollToTop}
        className={`back-to-top-btn ${showScrollBtn ? "visible" : ""}`}
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
