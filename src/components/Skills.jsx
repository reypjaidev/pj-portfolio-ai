import { useState } from 'react'
import { skills } from '../data.js'

export default function Skills() {
  const [activeId, setActiveId] = useState(skills[0].id)
  const active = skills.find(s => s.id === activeId)

  return (
    <section className="max-w-7xl mx-auto px-[clamp(1rem,4vw,3rem)] py-22" id="skills">
      <div className="mb-[2.6rem]">
        <span className="font-cond font-bold text-[0.8rem] tracking-[0.34em] text-(--accent)">
          SKILL BUILD
        </span>
        <h2 className="section-title font-display font-bold text-[clamp(1.9rem,4.5vw,3rem)] tracking-[0.06em] text-fg-bright mt-1">
          ABILITIES
        </h2>
      </div>

      {/* Ability slots */}
      <div className="flex flex-wrap gap-3 mb-6">
        {skills.map(s => (
          <button
            key={s.id}
            onClick={() => setActiveId(s.id)}
            aria-pressed={s.id === activeId}
            title={s.name}
            className={[
              'w-19 h-19 grid place-items-center rounded-sm border-2 transition-[transform,border-color,box-shadow] duration-150',
              'bg-[linear-gradient(160deg,#1a2030,#0e1219)]',
              s.id === activeId
                ? '-translate-y-0.75 border-(--accent) shadow-[0_0_16px_var(--glow),inset_0_0_14px_var(--accent-soft)]'
                : 'border-edge hover:-translate-y-0.75 hover:border-fg-dim',
            ].join(' ')}
          >
            <img
              src={s.icon}
              alt={s.name}
              loading="lazy"
              className={`w-11 h-11 ${s.invert ? 'invert' : ''}`}
            />
          </button>
        ))}
      </div>

      {/* Ability detail */}
      <div
        key={active.id}
        className="grid grid-cols-[110px_1fr] max-sm:grid-cols-1 gap-6 items-start bg-dark-soft border border-edge border-l-[3px] border-l-(--accent) rounded-sm p-6 animate-hero-fade"
      >
        <img
          src={active.icon}
          alt=""
          className={`w-27.5 h-27.5 p-4.5 bg-[linear-gradient(160deg,#1a2030,#0e1219)] border-2 border-(--accent) rounded-sm shadow-[0_0_18px_var(--glow)] ${active.invert ? 'invert' : ''}`}
        />
        <div>
          <span className="font-cond font-bold text-[0.72rem] tracking-[0.26em] text-(--accent)">
            {active.type}
          </span>
          <h3 className="font-display text-[1.6rem] text-fg-bright mt-0.5 mb-2">
            {active.name}
          </h3>
          <p className="text-fg">{active.desc}</p>
          <div className="flex flex-wrap gap-x-7 gap-y-1.5 mt-3.5 font-cond text-[0.8rem] tracking-[0.12em] text-fg-dim">
            <span>
              <b className="text-fg font-bold">EXPERIENCE:</b>{' '}
              {active.years} {active.years === 1 ? 'YEAR' : 'YEARS'}
            </span>
            <span><b className="text-fg font-bold">COOLDOWN:</b> NONE</span>
            <span><b className="text-fg font-bold">MANA COST:</b> COFFEE</span>
          </div>
        </div>
      </div>
    </section>
  )
}
