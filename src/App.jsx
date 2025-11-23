import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
