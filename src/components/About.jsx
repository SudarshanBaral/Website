import React from 'react'
import '../styles.css'

function About() {
  const projects = [
    {
      title: "ElectroX",
      description: "Multivendor e-commerce platform for electrical products"
    },
    {
      title: "Khaja Ghar",
      description: "Complete restaurant management system for streamlined operations"
    },
    {
      title: "ANPR Traffic Monitoring",
      description: "Automatic Number Plate Recognition system for traffic monitoring"
    }
  ]

  return (
    <section id="about" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">Welcome</div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Sudarshan Baral</span>
          </h1>
          <h2 className="hero-subtitle">Software Engineer </h2>
          <p className="hero-description">
            Passionate about creating innovative solutions and bringing ideas to life through code. 
            I love building applications that make a difference and continuously learning new technologies 
            to stay at the forefront of software development.
          </p>
          
          {/* <div className="hero-projects">
            <h3 className="hero-projects-title">My Recent Projects</h3>
            <div className="hero-projects-list">
              {projects.map((project, index) => (
                <div key={index} className="hero-project-item">
                  <i className="fas fa-code"></i>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View My Work
            </a>
            <a href="#contacts" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default About
