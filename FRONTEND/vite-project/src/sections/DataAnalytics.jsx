import React from "react";
import { BarChart2, TrendingUp, Filter, BrainCircuit, Activity } from "lucide-react";

export default function DataAnalytics() {
  const analyticsFocus = [
    "Data Wrangling & Cleaning: Filtering missing fields, formatting categories, and parsing raw spreadsheet/database inputs using Pandas.",
    "Exploratory Analysis (EDA): Spotting trends, distributions, and outliers using descriptive statistics and correlation matrices.",
    "Data Visualization: Plotting analytical metrics, category distributions, and feature importance matrices via Matplotlib.",
    "Machine Learning: Building classification models, preprocessing tabular/image data, and tuning parameters using Scikit-learn.",
    "SQL Database Querying: Writing structured relational queries to aggregate metrics, join tables, and filter datasets."
  ];

  return (
    <section id="data-analytics" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="spotlight-section">
        <div className="spotlight-header">
          <BarChart2 size={32} className="spotlight-icon" />
          <h2 className="spotlight-title">Data Analytics & ML Focus</h2>
        </div>
        
        <div className="spotlight-grid">
          <div className="spotlight-desc">
            <p>
              I leverage statistical analysis, machine learning algorithms, and visualization tools to turn raw datasets into actionable insights. My process combines data preprocessing, cleaning, exploratory analysis, and model building to solve complex problems.
            </p>
            
            <ul className="spotlight-bullets">
              {analyticsFocus.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
          
          <div className="spotlight-case-study">
            <h3 className="case-study-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BrainCircuit size={18} /> Analytical Case Study: KrishiAI
            </h3>
            
            <div className="case-study-steps">
              <div className="case-step">
                <span className="case-step-num" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent-color)' }}>P</span>
                <div className="case-step-content">
                  <strong>Problem</strong>
                  <p>Late crop disease identification leads to crop failure and heavy financial losses for farmers due to lack of expert advice in rural areas.</p>
                </div>
              </div>
              
              <div className="case-step">
                <span className="case-step-num" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent-color)' }}>D</span>
                <div className="case-step-content">
                  <strong>Data</strong>
                  <p>Curated image datasets representing diseased and healthy plant leaves, detailing nitrogen, phosphorus, and potassium deficiencies.</p>
                </div>
              </div>
              
              <div className="case-step">
                <span className="case-step-num" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent-color)' }}>A</span>
                <div className="case-step-content">
                  <strong>Analysis</strong>
                  <p>Pre-processed images (resizing, contrast tuning, noise cleaning) and constructed a CNN image classification model in Python (TensorFlow).</p>
                </div>
              </div>
              
              <div className="case-step">
                <span className="case-step-num" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent-color)' }}>I</span>
                <div className="case-step-content">
                  <strong>Insight</strong>
                  <p>Extracted specific leaf-surface lesion patterns and discoloration features linked to particular crop illnesses and nutrient deficits.</p>
                </div>
              </div>
              
              <div className="case-step">
                <span className="case-step-num" style={{ backgroundColor: 'var(--accent-light)', color: 'var(--accent-color)' }}>R</span>
                <div className="case-step-content">
                  <strong>Result</strong>
                  <p>Developed an automated AI diagnostic pipeline returning leaf health classification scores, fertilizer advice, and preventative steps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
