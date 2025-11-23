import React from 'react'
import '../styles.css'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer id="footer" className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Sudarshan Baral</h3>
                        <p>Software Engineer</p>
                    </div>
                    <div className="footer-links">
                        <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}>About</a>
                        <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>Projects</a>
                        <a href="#skills" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) }}>Skills</a>
                        <a href="#footer" onClick={(e) => { e.preventDefault(); document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' }) }}>Contact</a>
                    </div>
                    <div className="footer-social">
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="mailto:sudarshanbaral1117@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sudarshan Baral. All rights reserved.</p>
                    <button className="back-to-top" onClick={scrollToTop}>
                        <i className="fas fa-arrow-up"></i>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
