export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label="PJ — back to top">
      <svg viewBox="0 0 64 64" width="40" height="40" aria-hidden="true">
        {/* Shield emblem */}
        <path
          d="M32 2 L58 12 V34 C58 48 46 58 32 62 C18 58 6 48 6 34 V12 Z"
          fill="var(--panel)"
          stroke="var(--accent)"
          strokeWidth="2.5"
        />
        {/* Crescent moon (Luna) */}
        <path
          d="M22 14 A 11 11 0 1 0 33 25 A 8.5 8.5 0 0 1 22 14 Z"
          fill="var(--accent)"
          opacity="0.35"
        />
        {/* PJ monogram */}
        <text
          x="32"
          y="42"
          textAnchor="middle"
          fontFamily="Cinzel, serif"
          fontWeight="900"
          fontSize="24"
          fill="var(--text-bright)"
        >
          PJ
        </text>
      </svg>
      <span className="logo-text">
        PJ<span className="logo-dot">.</span>DEV
      </span>
    </a>
  )
}
