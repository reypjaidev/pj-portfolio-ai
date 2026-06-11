import { family } from '../data.js'

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-[clamp(1rem,4vw,3rem)] py-22" id="about">
      <div className="mb-[2.6rem]">
        <span className="font-cond font-bold text-[0.8rem] tracking-[0.34em] text-(--accent)">
          LORE
        </span>
        <h2 className="section-title font-display font-bold text-[clamp(1.9rem,4.5vw,3rem)] tracking-[0.06em] text-fg-bright mt-1">
          ABOUT THE HERO
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-[clamp(1.5rem,4vw,3.5rem)] items-start">

        {/* Bio */}
        <div className="text-fg text-[1rem] leading-relaxed space-y-4">
          <p>
            I&apos;m <strong className="text-fg-bright">PJ</strong>, a React JS developer
            with <strong className="text-fg-bright">5 years of experience</strong> building
            fast, polished and maintainable web apps. I care about clean component
            architecture, smooth UX and shipping things that feel as satisfying as a
            well-executed gank.
          </p>
          <p>
            Off the keyboard I&apos;m a <strong className="text-fg-bright">husband and a
            dad of two</strong> — my kids, <strong className="text-fg-bright">Luna</strong>{' '}
            and <strong className="text-fg-bright">Shadow</strong>, are the reason this whole
            site is themed after my two favorite heroes. Family is my main quest; code is the
            ranked grind I genuinely love.
          </p>
        </div>

        {/* Party panel */}
        <div className="bg-dark-soft border border-edge rounded-sm p-[1.4rem]">
          <h3 className="font-cond font-bold text-[0.8rem] tracking-[0.26em] text-fg-dim mb-4">
            THE PARTY
          </h3>
          <div className="grid gap-4">
            {family.map(member => (
              <article
                key={member.name}
                className="grid grid-cols-[150px_1fr] bg-panel border border-edge rounded-sm overflow-hidden transition-[border-color,transform,box-shadow] duration-200 hover:border-(--accent) hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.45),0_0_14px_var(--glow)] max-sm:grid-cols-1"
              >
                {member.img ? (
                  <img
                    src={member.img}
                    alt={`${member.name} hero art`}
                    loading="lazy"
                    className="w-full h-full min-h-[110px] object-cover max-sm:max-h-[150px]"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="grid place-items-center text-[2.2rem] text-(--accent) min-h-[110px] text-shadow-[0_0_14px_var(--glow)]"
                    style={{
                      background: 'radial-gradient(circle at 50% 45%, var(--accent-soft), transparent 70%), linear-gradient(160deg, #1a2030, #10141d)',
                      textShadow: '0 0 14px var(--glow)',
                    }}
                  >
                    ♥
                  </div>
                )}
                <div className="p-[0.85rem_1rem]">
                  <span className="font-cond font-bold text-[0.68rem] tracking-[0.24em] text-(--accent)">
                    {member.tag}
                  </span>
                  <h4 className="font-display text-[1.15rem] text-fg-bright mt-0.5 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-[0.86rem] text-fg-dim">{member.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
