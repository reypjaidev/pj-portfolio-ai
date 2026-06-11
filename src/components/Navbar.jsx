import { useState } from 'react'
import Logo from './Logo.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

const NAV_LINKS = [
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Abilities'  },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
  { href: '#contact',    label: 'Contact'    },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-6 px-[clamp(1rem,4vw,3rem)] py-2.5 bg-[rgba(8,10,15,0.82)] backdrop-blur-md border-b border-edge">
      <Logo />

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-[clamp(1rem,2.5vw,2.2rem)]">
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="nav-link font-cond font-semibold text-[0.95rem] tracking-[0.18em] uppercase text-fg-dim hover:text-fg-bright transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3.5">
        {/* Theme toggle */}
        <button
          onClick={toggle}
          title={theme === 'luna' ? 'Switch to Shadow Fiend mode' : 'Switch to Luna mode'}
          className="flex items-center gap-2 bg-panel border border-edge text-fg font-cond font-semibold text-[0.78rem] tracking-[0.14em] px-3.5 py-[0.45rem] rounded-sm transition-[border-color,box-shadow] duration-200 hover:border-(--accent) hover:shadow-[0_0_12px_var(--glow)]"
        >
          <span
            aria-hidden="true"
            className="w-3.5 h-3.5 rounded-full shadow-[0_0_8px_var(--glow)]"
            style={{ background: 'radial-gradient(circle at 35% 35%, #fff, var(--accent) 45%, var(--accent-strong))' }}
          />
          {theme === 'luna' ? 'MOON' : 'SHADOW'}
        </button>

        {/* Hire me CTA */}
        <a
          href="#contact"
          className="hidden md:block font-cond font-bold text-[0.85rem] tracking-[0.16em] text-[#0a0d12] px-5 py-[0.55rem] rounded-sm shadow-[0_0_16px_var(--glow)] transition-[transform,box-shadow] duration-150 hover:-translate-y-px hover:shadow-[0_0_26px_var(--glow)]"
          style={{ background: 'linear-gradient(180deg, var(--accent), var(--accent-strong))' }}
        >
          HIRE ME
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer"
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          <span className="block w-[22px] h-[2px] bg-fg-bright" />
          <span className="block w-[22px] h-[2px] bg-fg-bright" />
          <span className="block w-[22px] h-[2px] bg-fg-bright" />
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden fixed top-[58px] right-0 flex flex-col gap-4 bg-[rgba(8,10,15,0.97)] border border-edge border-r-0 px-9 py-5">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-cond font-semibold text-[0.95rem] tracking-[0.18em] uppercase text-fg-dim hover:text-fg-bright transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
