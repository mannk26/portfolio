import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}

export default Home
