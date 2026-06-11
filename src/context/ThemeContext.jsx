import { createContext, useContext, useEffect, useState } from 'react'

const ThemeCtx = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('luna')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  function toggle() {
    setTheme(t => (t === 'luna' ? 'shadow' : 'luna'))
  }

  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>
      {children}
    </ThemeCtx.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeCtx)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
