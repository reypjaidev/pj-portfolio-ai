import { profile, roles, themes } from '../data.js'

function ComplexityDots({ value }) {
  return (
    <div className="complexity" title={`Complexity: dad of ${value}`}>
      <span className="stat-label">COMPLEXITY</span>
      <div className="dots">
        {[1, 2, 3].map(i => (
          <span key={i} className={`dot ${i <= value ? 'filled' : ''}`} />
        ))}
      </div>
    </div>
  )
}

export default function Hero({ theme }) {
  const hero = themes[theme]

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-info">
          <div className="attribute-row">
            <span className="attribute-gem" aria-hidden="true" />
            <span className="attribute-name">{profile.attribute}</span>
          </div>

          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-epithet">
            {profile.title} <span className="epithet-sep">—</span> {hero.epithet}
          </p>

          <p className="hero-desc">{profile.description}</p>

          <div className="hero-stats">
            {profile.stats.map(s => (
              <div className="hero-stat" key={s.label}>
                <span className="stat-label">{s.label}</span>
                <span className="stat-value">{s.value}</span>
              </div>
            ))}
            <ComplexityDots value={profile.complexity} />
          </div>

          <div className="roles-panel">
            <h3 className="panel-title">ROLES</h3>
            <div className="roles-grid">
              {roles.map(r => (
                <div className="role" key={r.name}>
                  <span className="role-name">{r.name}</span>
                  <div className="role-bar">
                    <div className="role-fill" style={{ width: `${r.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-render">
          <div className="render-glow" aria-hidden="true" />
          <video
            key={hero.id}
            autoPlay
            loop
            muted
            playsInline
            poster={hero.poster}
          >
            <source src={hero.videoMov} type='video/mp4; codecs="hvc1"' />
            <source src={hero.video} type="video/webm" />
          </video>
          <p className="render-caption">
            {hero.label.toUpperCase()} MODE — named after my kid {theme === 'luna' ? 'Luna' : 'Shadow'}
          </p>
        </div>
      </div>
    </section>
  )
}
