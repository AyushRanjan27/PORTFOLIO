import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import CertificationCard from "../components/CertificationCard";
import Modal from "../components/Modal";

export default function Certifications() {
  const { certifications } = portfolioData;
  const [filter, setFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = ["All", "Development", "Data Science", "Cloud / Networking"];

  const filteredCerts = certifications.filter((cert) => {
    if (filter === "All") return true;
    return cert.category === filter;
  });

  return (
    <section id="certifications" style={{ borderTop: '1px solid var(--border-color)' }}>
      <h2 className="section-title">Certifications & Credentials</h2>
      <p className="section-subtitle">Verified professional credentials and academic course completions from AWS, Cisco, and IIT/NPTEL.</p>
      
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="certs-grid">
        {filteredCerts.map((cert) => (
          <CertificationCard
            key={cert.id}
            certificate={cert}
            onClick={() => setSelectedCert(cert)}
          />
        ))}
      </div>
      
      {selectedCert && (
        <Modal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
