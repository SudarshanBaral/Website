import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles.css'

function Projects() {
  const navigate = useNavigate()

  const projects = [
    {
      id: 'electrox',
      title: "ElectroX",
      description: "A comprehensive multivendor e-commerce platform specifically designed for electrical products. Features include vendor management, product catalog, shopping cart, order processing, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
      shortDescription: "Multivendor e-commerce platform for electrical products"
    },
    {
      id: 'khaja-ghar',
      title: "Khaja Ghar",
      description: "A complete restaurant management system that streamlines operations including menu management, order tracking, table reservations, inventory control, and staff management for efficient restaurant operations.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
      shortDescription: "Complete restaurant management system for streamlined operations"
    },
    {
      id: 'anpr-system',
      title: "ANPR Traffic Monitoring System",
      description: "An Automatic Number Plate Recognition system designed for traffic monitoring and management. Features real-time vehicle detection, license plate recognition, traffic analytics, and automated violation tracking.",
      technologies: ["Python", "OpenCV", "TensorFlow", "React", "Node.js", "MongoDB"],
      shortDescription: "Automatic Number Plate Recognition system for traffic monitoring"
    }
  ]

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`)
  }

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">Here are some of my recent projects that showcase my skills and experience</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <span className="project-link view-link">
                      <i className="fas fa-eye"></i>
                      <span>View Details</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>
                <div className="project-tech">
                  {project.technologies?.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies?.length > 4 && (
                    <span className="tech-tag">+{project.technologies.length - 4} more</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
