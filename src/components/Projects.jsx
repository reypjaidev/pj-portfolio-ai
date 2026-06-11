import { projects } from '../data.js'

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-[clamp(1rem,4vw,3rem)] py-22" id="projects">
      <div className="mb-[2.6rem]">
        <span className="font-cond font-bold text-[0.8rem] tracking-[0.34em] text-(--accent)">
          ARMORY
        </span>
        <h2 className="section-title font-display font-bold text-[clamp(1.9rem,4.5vw,3rem)] tracking-[0.06em] text-fg-bright mt-1">
          PROJECTS
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[1.4rem]">
        {projects.map(p => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col bg-dark-soft border border-edge rounded-sm overflow-hidden text-fg transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-(--accent) hover:shadow-[0_14px_34px_rgba(0,0,0,0.5),0_0_18px_var(--glow)]"
          >
            <div
              aria-hidden="true"
              className={`project-art ${p.flavor === 'luna' ? 'project-art-luna' : 'project-art-shadow'}`}
            />
            <div className="flex flex-col flex-1 px-5 pt-4 pb-6">
              <span className="font-cond font-bold text-[0.68rem] tracking-[0.28em] text-(--accent)">
                {p.tag}
              </span>
              <h3 className="font-display text-[1.3rem] text-fg-bright mt-0.5 mb-2">
                {p.name}
              </h3>
              <p className="text-[0.92rem] text-fg flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-3.5">
                {p.tech.map(t => (
                  <span
                    key={t}
                    className="font-cond font-semibold text-[0.74rem] tracking-widest text-fg bg-(--accent-soft) border border-edge px-2.5 py-0.5 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
