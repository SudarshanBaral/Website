import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import '../styles.css'

function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()

  const projects = {
    'electrox': {
      title: "ElectroX",
      description: "A comprehensive multivendor e-commerce platform specifically designed for electrical products. Features include vendor management, product catalog, shopping cart, order processing, and payment integration.",
      fullDescription: "ElectroX is a full-featured multivendor e-commerce platform built specifically for the electrical products industry. The system allows multiple vendors to manage their product catalogs, inventory, and orders through a unified platform. Customers can browse products from different vendors, compare prices, and make purchases seamlessly. The platform includes advanced features like real-time inventory management, vendor analytics, customer reviews, and secure payment processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
      features: [
        "Multi-vendor marketplace functionality",
        "Advanced product catalog with filtering",
        "Shopping cart and checkout system",
        "Payment gateway integration",
        "Vendor dashboard and analytics",
        "Order management system",
        "Customer reviews and ratings",
        "Real-time inventory tracking"
      ],
      image: "/images/electrox.png" // You can add your image later
    },
    'khaja-ghar': {
      title: "Khaja Ghar",
      description: "A complete restaurant management system that streamlines operations including menu management, order tracking, table reservations, inventory control, and staff management for efficient restaurant operations.",
      fullDescription: "Khaja Ghar is a comprehensive restaurant management system designed to streamline all aspects of restaurant operations. The platform provides tools for menu management, real-time order tracking, table reservations, inventory control, and staff management. It helps restaurant owners manage their business more efficiently with features like automated order processing, kitchen display system integration, customer feedback management, and detailed analytics for business insights.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
      features: [
        "Menu management and customization",
        "Real-time order tracking",
        "Table reservation system",
        "Inventory management",
        "Staff management and scheduling",
        "Kitchen display system",
        "Customer feedback system",
        "Business analytics and reports"
      ],
      image: "/images/khaja-ghar.png" // You can add your image later
    },
    'anpr-system': {
      title: "ANPR Traffic Monitoring System",
      description: "An Automatic Number Plate Recognition system designed for traffic monitoring and management. Features real-time vehicle detection, license plate recognition, traffic analytics, and automated violation tracking.",
      fullDescription: "The ANPR (Automatic Number Plate Recognition) Traffic Monitoring System is an intelligent solution for traffic management and monitoring. The system uses computer vision and machine learning to automatically detect and recognize vehicle license plates in real-time. It provides comprehensive traffic analytics, violation tracking, and automated reporting. The system can be integrated with traffic management infrastructure to improve road safety and traffic flow.",
      technologies: ["Python", "OpenCV", "TensorFlow", "React", "Node.js", "MongoDB"],
      features: [
        "Real-time license plate recognition",
        "Vehicle detection and tracking",
        "Traffic analytics and reporting",
        "Automated violation detection",
        "Speed monitoring",
        "Vehicle database management",
        "Alert system for violations",
        "Dashboard for traffic insights"
      ],
      image: "/images/anpr-system.png" // You can add your image later
    }
  }

  const project = projects[projectId]

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="project-not-found">
          <h2>Project Not Found</h2>
          <button onClick={() => navigate('/')} className="btn btn-primary">Back to Home</button>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail-container">
      <Header />
      <div className="project-detail">
        <div className="project-detail-header">
          <button onClick={() => navigate('/')} className="back-button">
            <i className="fas fa-arrow-left"></i> Back to Portfolio
          </button>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-subtitle">{project.description}</p>
        </div>

        <div className="project-detail-content">
          <div className="project-detail-image">
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <div className="project-image-placeholder">
                <i className="fas fa-image"></i>
                <p>Project image will be added here</p>
              </div>
            )}
          </div>

          <div className="project-detail-info">
            <div className="project-detail-section">
              <h2>About This Project</h2>
              <p>{project.fullDescription}</p>
            </div>

            <div className="project-detail-section">
              <h2>Key Features</h2>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-detail-section">
              <h2>Technologies Used</h2>
              <div className="project-tech-detail">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag-large">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProjectDetail

