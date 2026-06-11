import { family } from '../data.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-head">
        <span className="section-kicker">LORE</span>
        <h2 className="section-title">ABOUT THE HERO</h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I&apos;m <strong>PJ</strong>, a React JS developer with <strong>5 years of
            experience</strong> building fast, polished and maintainable web apps. I care about
            clean component architecture, smooth UX and shipping things that feel as satisfying
            as a well-executed gank.
          </p>
          <p>
            Off the keyboard I&apos;m a <strong>husband and a dad of two</strong> — my kids,{' '}
            <strong>Luna</strong> and <strong>Shadow</strong>, are the reason this whole site is
            themed after my two favorite heroes. Family is my main quest; code is the ranked grind
            I genuinely love.
          </p>
        </div>

        <div className="party-panel">
          <h3 className="panel-title">THE PARTY</h3>
          <div className="party-grid">
            {family.map(member => (
              <article className="party-card" key={member.name}>
                {member.img ? (
                  <img src={member.img} alt={`${member.name} hero art`} loading="lazy" />
                ) : (
                  <div className="party-card-placeholder" aria-hidden="true">
                    <span>♥</span>
                  </div>
                )}
                <div className="party-card-body">
                  <span className="party-tag">{member.tag}</span>
                  <h4>{member.name}</h4>
                  <p>{member.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
