import React, { useState } from "react";
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import axios from "axios";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Post form inputs to the Express backend port 5000 API
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      
      if (res.status === 200 || res.status === 201) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Server returned an unexpected status code.");
      }
    } catch (err) {
      console.error("Failed to connect to portfolio API backend:", err);
      // Helpful fallback message if local backend server is down
      setStatus({ 
        loading: false, 
        success: false, 
        error: "Unable to reach the messaging server. Please contact me directly at " + personalInfo.email
      });
    }
  };

  return (
    <section id="contact" style={{ borderTop: '1px solid var(--border-color)' }}>
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Have a question or a job opportunity? Drop me a line, and I will get back to you as soon as possible.</p>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <div className="contact-icon-box">
              <Mail size={20} />
            </div>
            <div className="contact-card-content">
              <h3>Email</h3>
              <p><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon-box">
              <MapPin size={20} />
            </div>
            <div className="contact-card-content">
              <h3>Location</h3>
              <p>{personalInfo.location}</p>
            </div>
          </div>
          
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
            Note: This form connects directly to an active Express.js backend on port 5000, which handles inquiry recording.
          </p>
        </div>
        
        <div className="contact-form-box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                required
                disabled={status.loading}
                placeholder="Enter your name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
                disabled={status.loading}
                placeholder="you@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-control"
                required
                disabled={status.loading}
                placeholder="What is this regarding?"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                required
                disabled={status.loading}
                placeholder="Wrote your message here..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status.loading}>
              {status.loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending Message...
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
            
            {status.success && (
              <div className="form-status status-success">
                <CheckCircle2 size={16} /> Message sent successfully! I will get back to you shortly.
              </div>
            )}
            
            {status.error && (
              <div className="form-status status-error">
                <AlertCircle size={16} /> {status.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
