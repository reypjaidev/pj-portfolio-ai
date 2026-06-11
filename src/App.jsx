import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [theme, setTheme] = useState('luna')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme(t => (t === 'luna' ? 'shadow' : 'luna'))} />
      <main>
        <Hero theme={theme} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p className="footer-flavor">“Forged in moonlight. Tempered in shadow.”</p>
        <p className="footer-note">
          Built with React by PJ. Dota 2 hero art &amp; renders are property of Valve Corporation —
          used here as fan homage.
        </p>
      </footer>
    </>
  )
}
