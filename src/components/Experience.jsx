import { experience } from '../data.js'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-head">
        <span className="section-kicker">MATCH HISTORY</span>
        <h2 className="section-title">EXPERIENCE</h2>
      </div>

      <div className="timeline">
        {experience.map(job => (
          <article className="timeline-item" key={job.period}>
            <div className="level-badge">
              <span className="level-label">LVL</span>
              <span className="level-num">{job.level}</span>
            </div>
            <div className="timeline-card">
              <span className="timeline-period">{job.period}</span>
              <h3>{job.title}</h3>
              <span className="timeline-company">{job.company}</span>
              <ul>
                {job.points.map(p => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
