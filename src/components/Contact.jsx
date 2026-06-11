import { profile } from '../data.js'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-head">
        <span className="section-kicker">SUMMON THE HERO</span>
        <h2 className="section-title">CONTACT</h2>
      </div>

      <p className="contact-blurb">
        Looking for a React developer to carry your frontend lane? My inbox is always warded.
      </p>

      <div className="contact-links">
        <a className="cta-btn big" href={`mailto:${profile.email}`}>
          SEND A MESSAGE
        </a>
        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <span className="sep">✦</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
