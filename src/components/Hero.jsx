import { profile, roles, themes } from '../data.js'
import { useTheme } from '../context/ThemeContext.jsx'

function ComplexityDots({ value }) {
  return (
    <div title={`Complexity: dad of ${value}`}>
      <span className="block font-cond font-semibold text-[0.72rem] tracking-[0.22em] text-fg-dim">
        COMPLEXITY
      </span>
      <div className="flex gap-[5px] mt-[5px]">
        {[1, 2, 3].map(i => (
          <span
            key={i}
            className="w-3 h-3 rotate-45 border border-fg-dim"
            style={
              i <= value
                ? { background: 'var(--accent)', borderColor: 'var(--accent)', boxShadow: '0 0 8px var(--glow)' }
                : undefined
            }
          />
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const { theme } = useTheme()
  const hero = themes[theme]

  return (
    <section className="relative min-h-screen flex items-center px-[clamp(1rem,4vw,3rem)] pt-28 pb-16 overflow-hidden" id="top">
      <div className="hero-bg absolute inset-0 -z-10" aria-hidden="true" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[clamp(1.5rem,4vw,4rem)] items-center max-w-7xl mx-auto w-full">

        {/* Content */}
        <div>
          {/* Attribute row */}
          <div className="flex items-center gap-2.5 mb-2">
            <span
              aria-hidden="true"
              className="w-[22px] h-[22px] shadow-[0_0_10px_var(--glow)]"
              style={{
                background: 'linear-gradient(135deg, var(--accent), var(--accent-strong))',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              }}
            />
            <span className="font-cond font-bold text-base tracking-[0.3em] text-fg-bright">
              {profile.attribute}
            </span>
          </div>

          <h1 className="text-hero-gradient font-display font-black leading-[0.95] tracking-[0.04em] text-[clamp(4.5rem,11vw,8.5rem)]">
            {profile.name}
          </h1>

          <p className="font-cond font-semibold text-[clamp(1rem,2vw,1.35rem)] tracking-[0.28em] uppercase text-(--accent) mt-2.5 mb-6">
            {profile.title}{' '}
            <span className="text-fg-dim">—</span>{' '}
            {hero.epithet}
          </p>

          <p className="max-w-[56ch] text-fg text-[1.02rem] mb-7">
            {profile.description}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-10 gap-y-5 mb-8">
            {profile.stats.map(s => (
              <div key={s.label}>
                <span className="block font-cond font-semibold text-[0.72rem] tracking-[0.22em] text-fg-dim">
                  {s.label}
                </span>
                <span className="font-cond font-bold text-[1.05rem] tracking-[0.06em] text-fg-bright">
                  {s.value}
                </span>
              </div>
            ))}
            <ComplexityDots value={profile.complexity} />
          </div>

          {/* Roles panel */}
          <div className="bg-[rgba(13,17,25,0.7)] border border-edge rounded-sm p-[1.1rem_1.3rem] max-w-[480px]">
            <h3 className="font-cond font-bold text-[0.8rem] tracking-[0.26em] text-fg-dim mb-3.5">
              ROLES
            </h3>
            <div className="grid gap-[0.55rem]">
              {roles.map(r => (
                <div key={r.name} className="grid grid-cols-[90px_1fr] items-center gap-3">
                  <span className="font-cond font-semibold text-[0.82rem] tracking-[0.1em] uppercase text-fg">
                    {r.name}
                  </span>
                  <div className="h-[7px] bg-[#0a0d13] border border-edge rounded-sm overflow-hidden">
                    <div
                      className="h-full shadow-[0_0_8px_var(--glow)]"
                      style={{
                        width: `${r.level}%`,
                        background: 'linear-gradient(90deg, var(--accent-strong), var(--accent))',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero render */}
        <div className="relative text-center order-first lg:order-last">
          <div
            className="render-glow absolute inset-[10%_5%_0] blur-[10px] -z-0 transition-[background] duration-700"
            aria-hidden="true"
          />
          <video
            key={hero.id}
            autoPlay
            loop
            muted
            playsInline
            poster={hero.poster}
            className="animate-hero-fade relative z-10 w-full max-w-[560px] lg:max-w-none mx-auto drop-shadow-[0_18px_40px_rgba(0,0,0,0.6)]"
          >
            <source src={hero.videoMov} type='video/mp4; codecs="hvc1"' />
            <source src={hero.video} type="video/webm" />
          </video>
          <p className="relative z-10 font-cond text-[0.78rem] font-semibold tracking-[0.2em] text-fg-dim mt-1.5">
            {hero.label.toUpperCase()} MODE — named after my kid{' '}
            {theme === 'luna' ? 'Luna' : 'Shadow'}
          </p>
        </div>

      </div>
    </section>
  )
}
