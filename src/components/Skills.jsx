import { useState } from 'react'
import { skills } from '../data.js'

export default function Skills() {
  const [activeId, setActiveId] = useState(skills[0].id)
  const active = skills.find(s => s.id === activeId)

  return (
    <section className="section" id="skills">
      <div className="section-head">
        <span className="section-kicker">SKILL BUILD</span>
        <h2 className="section-title">ABILITIES</h2>
      </div>

      <div className="abilities-bar">
        {skills.map(s => (
          <button
            key={s.id}
            className={`ability-slot ${s.id === activeId ? 'active' : ''}`}
            onClick={() => setActiveId(s.id)}
            aria-pressed={s.id === activeId}
            title={s.name}
          >
            <img
              src={s.icon}
              alt={s.name}
              className={s.invert ? 'invert' : ''}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <div className="ability-detail" key={active.id}>
        <img
          src={active.icon}
          alt=""
          className={`ability-detail-icon ${active.invert ? 'invert' : ''}`}
        />
        <div className="ability-detail-text">
          <span className="ability-type">{active.type}</span>
          <h3>{active.name}</h3>
          <p>{active.desc}</p>
          <div className="ability-meta">
            <span>
              <b>EXPERIENCE:</b> {active.years} {active.years === 1 ? 'YEAR' : 'YEARS'}
            </span>
            <span><b>COOLDOWN:</b> NONE</span>
            <span><b>MANA COST:</b> COFFEE</span>
          </div>
        </div>
      </div>
    </section>
  )
}
