import { profile } from '../data.js'

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-[clamp(1rem,4vw,3rem)] py-22 text-center" id="contact">
      <div className="mb-[2.6rem]">
        <span className="font-cond font-bold text-[0.8rem] tracking-[0.34em] text-(--accent)">
          SUMMON THE HERO
        </span>
        <h2 className="section-title section-title-center font-display font-bold text-[clamp(1.9rem,4.5vw,3rem)] tracking-[0.06em] text-fg-bright mt-1">
          CONTACT
        </h2>
      </div>

      <p className="text-fg max-w-[52ch] mx-auto mb-8">
        Looking for a React developer to carry your frontend lane? My inbox is always warded.
      </p>

      <div className="grid place-items-center gap-5">
        <a
          href={`mailto:${profile.email}`}
          className="font-cond font-bold text-base tracking-[0.16em] text-[#0a0d12] px-9 py-3.5 rounded-sm shadow-[0_0_16px_var(--glow)] transition-[transform,box-shadow] duration-150 hover:-translate-y-px hover:shadow-[0_0_26px_var(--glow)]"
          style={{ background: 'linear-gradient(180deg, var(--accent), var(--accent-strong))' }}
        >
          SEND A MESSAGE
        </a>

        <div className="flex items-center gap-4 font-cond font-semibold tracking-[0.16em] uppercase text-[0.9rem]">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-(--accent) hover:text-fg-bright transition-colors duration-200"
          >
            GitHub
          </a>
          <span className="text-fg-dim">✦</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-(--accent) hover:text-fg-bright transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
