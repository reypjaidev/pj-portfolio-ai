import { ThemeProvider } from './context/ThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-edge py-9 px-4 text-center">
        <p className="font-display text-fg-bright tracking-wider mb-2">
          &ldquo;Forged in moonlight. Tempered in shadow.&rdquo;
        </p>
        <p className="text-xs text-fg-dim max-w-[60ch] mx-auto">
          Built with React by PJ. Dota&nbsp;2 hero art &amp; renders are property of Valve
          Corporation — used here as fan homage.
        </p>
      </footer>
    </ThemeProvider>
  )
}
