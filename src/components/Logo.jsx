export default function Logo() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2.5 group"
      aria-label="PJ — back to top"
    >
      <svg
        viewBox="0 0 64 64"
        width="40"
        height="40"
        aria-hidden="true"
        className="drop-shadow-[0_0_6px_var(--glow)] group-hover:drop-shadow-[0_0_12px_var(--glow)] transition-[filter] duration-300"
      >
        <path
          d="M32 2 L58 12 V34 C58 48 46 58 32 62 C18 58 6 48 6 34 V12 Z"
          fill="var(--color-panel)"
          stroke="var(--accent)"
          strokeWidth="2.5"
        />
        <path
          d="M22 14 A 11 11 0 1 0 33 25 A 8.5 8.5 0 0 1 22 14 Z"
          fill="var(--accent)"
          opacity="0.35"
        />
        <text
          x="32"
          y="42"
          textAnchor="middle"
          fontFamily="Cinzel, serif"
          fontWeight="900"
          fontSize="24"
          fill="var(--color-fg-bright)"
        >
          PJ
        </text>
      </svg>
      <span className="font-display font-bold text-[1.05rem] tracking-[0.12em] text-fg-bright">
        PJ<span className="text-(--accent)">.</span>DEV
      </span>
    </a>
  )
}
