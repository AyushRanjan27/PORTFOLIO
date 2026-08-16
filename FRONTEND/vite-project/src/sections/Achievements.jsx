import React from "react";
import { Award, Target, Users, BookOpen, PenTool } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export default function Achievements() {
  const { achievements } = portfolioData;

  // Helper to assign icons dynamically
  const getIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes("leader")) return <Users size={22} />;
    if (t.includes("sports") || t.includes("carnival")) return <Target size={22} />;
    if (t.includes("writing")) return <PenTool size={22} />;
    return <Award size={22} />;
  };

  return (
    <section id="achievements" style={{ borderTop: '1px solid var(--border-color)' }}>
      <h2 className="section-title">Achievements & Activities</h2>
      <p className="section-subtitle">A record of leadership roles, hackathons, and sports participations reflecting teamwork, discipline, and communication skills.</p>
      
      <div className="achievements-grid">
        {achievements.map((ach, idx) => (
          <div key={idx} className="achievement-card">
            <div className="achievement-icon-box">
              {getIcon(ach.title || ach.event)}
            </div>
            
            <div className="achievement-content">
              <h3 className="achievement-title">{ach.title}</h3>
              <p className="achievement-event">{ach.event}</p>
              <p className="achievement-org">{ach.issuer} &bull; {ach.date}</p>
              <p className="achievement-desc">{ach.highlight}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
