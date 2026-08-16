import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Software Dev", href: "#software-dev" },
    { label: "Data Analytics", href: "#data-analytics" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Achievements", href: "#achievements" },
    { label: "Education", href: "#education" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const item of navItems) {
        const target = document.querySelector(item.href);
        if (target) {
          const offsetTop = target.offsetTop;
          const offsetHeight = target.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.href.substring(1));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveSection(href.substring(1));
    }
  };

  return (
    <header className="header-nav">
      <div className="logo-container">
        <Terminal size={22} className="logo-icon" />
        <span>AYUSH RANJAN</span>
        <span className="logo-dot"></span>
      </div>

      <nav>
        <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeSection === item.href.substring(1) ? "active" : ""}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav-right-controls">
        <ThemeToggle />
        <button
          className="menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
