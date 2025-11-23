import React from 'react'
import '../styles.css'

function Contacts() {
  const contactMethods = [
    {
      icon: "fa-envelope",
      label: "Email",
      value: "sudarshanbaral1117@gmail.com",
      link: "mailto:sudarshanbaral1117@gmail.com",
      color: "#EA4335"
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      value: "github.com",
      link: "https://www.github.com",
      color: "#333"
    },
    {
      icon: "fab fa-facebook",
      label: "Facebook",
      value: "facebook.com",
      link: "https://www.facebook.com",
      color: "#1877F2"
    },
    {
      icon: "fab fa-instagram",
      label: "Instagram",
      value: "instagram.com",
      link: "https://www.instagram.com",
      color: "#E4405F"
    }
  ]

  return (
    <section id="contacts" className="contacts-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Contact</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-description">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
        </div>
        
        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <a 
              key={index} 
              href={method.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon" style={{ backgroundColor: `${method.color}20`, color: method.color }}>
                <i className={method.icon}></i>
              </div>
              <div className="contact-info">
                <h3 className="contact-label">{method.label}</h3>
                <p className="contact-value">{method.value}</p>
              </div>
              <div className="contact-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contacts
