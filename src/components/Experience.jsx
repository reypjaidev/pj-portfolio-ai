import { experience } from '../data.js'

export default function Experience() {
  return (
    <section className="max-w-7xl mx-auto px-[clamp(1rem,4vw,3rem)] py-22" id="experience">
      <div className="mb-[2.6rem]">
        <span className="font-cond font-bold text-[0.8rem] tracking-[0.34em] text-(--accent)">
          MATCH HISTORY
        </span>
        <h2 className="section-title font-display font-bold text-[clamp(1.9rem,4.5vw,3rem)] tracking-[0.06em] text-fg-bright mt-1">
          EXPERIENCE
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative grid gap-6 pl-2.5">
        {/* Vertical line */}
        <div
          className="absolute left-9.5 top-2.5 bottom-2.5 w-0.5"
          style={{ background: 'linear-gradient(180deg, var(--accent), #232a3a)' }}
          aria-hidden="true"
        />

        {experience.map(job => (
          <article key={job.period} className="grid grid-cols-[58px_1fr] gap-[1.4rem] items-start max-sm:grid-cols-[44px_1fr] max-sm:gap-4">
            {/* Level badge */}
            <div
              className="relative z-10 w-14.5 h-14.5 grid place-content-center text-center bg-panel border-2 border-(--accent) rotate-45 shadow-[0_0_14px_var(--glow)] max-sm:w-11 max-sm:h-11"
            >
              <span className="-rotate-45 block font-cond font-semibold text-[0.55rem] tracking-[0.2em] text-fg-dim leading-none">
                LVL
              </span>
              <span className="-rotate-45 block font-cond font-bold text-[1.15rem] text-fg-bright leading-none max-sm:text-[0.95rem]">
                {job.level}
              </span>
            </div>

            {/* Card */}
            <div className="bg-dark-soft border border-edge rounded-sm px-6 py-5 transition-[border-color,box-shadow] duration-200 hover:border-(--accent) hover:shadow-[0_0_14px_var(--glow)]">
              <span className="font-cond font-bold text-[0.74rem] tracking-[0.26em] text-(--accent)">
                {job.period}
              </span>
              <h3 className="font-display text-[1.35rem] text-fg-bright mt-1 mb-0.5">
                {job.title}
              </h3>
              <span className="font-cond font-semibold text-[0.92rem] tracking-[0.08em] uppercase text-fg-dim">
                {job.company}
              </span>
              <ul className="mt-3 pl-[1.1rem] grid gap-1.5 text-[0.93rem] text-fg [&_li::marker]:text-(--accent)">
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
