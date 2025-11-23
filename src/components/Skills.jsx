import React from 'react'
import '../styles.css'

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "TypeScript"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "REST APIs"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "VS Code", "MongoDB", "Firebase", "Figma"]
    }
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-description">A collection of technologies and tools I use to bring ideas to life</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
