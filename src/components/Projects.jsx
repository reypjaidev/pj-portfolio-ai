import { projects } from '../data.js'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-head">
        <span className="section-kicker">ARMORY</span>
        <h2 className="section-title">PROJECTS</h2>
      </div>

      <div className="projects-grid">
        {projects.map(p => (
          <a
            className={`project-card flavor-${p.flavor}`}
            href={p.link}
            key={p.name}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-art" aria-hidden="true" />
            <div className="project-body">
              <span className="project-tag">{p.tag}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="tech-tags">
                {p.tech.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
