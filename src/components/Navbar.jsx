import { useState } from 'react'
import Logo from './Logo.jsx'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Abilities' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <Logo />

      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          title={theme === 'luna' ? 'Switch to Shadow Fiend mode' : 'Switch to Luna mode'}
        >
          <span className={`toggle-orb ${theme}`} />
          {theme === 'luna' ? 'MOON' : 'SHADOW'}
        </button>
        <a className="cta-btn" href="#contact">
          HIRE ME
        </a>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
