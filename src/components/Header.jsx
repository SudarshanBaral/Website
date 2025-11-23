import React, { useState, useEffect } from 'react'
import '../styles.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="nav-brand">
          <span className="brand-gradient">SB</span>
        </div>
        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Projects</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>Skills</a></li>
          <li><a href="#footer" onClick={(e) => { e.preventDefault(); scrollToSection('footer') }}>Contact</a></li>
        </ul>
        <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  )
}

export default Header
