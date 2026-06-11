// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update your portfolio content.
// All text, links, jobs and projects live here.
// ─────────────────────────────────────────────────────────────

const VIDEO_CDN = 'https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders'
const IMG_CDN = 'https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes'

export const themes = {
  luna: {
    id: 'luna',
    label: 'Luna',
    epithet: 'OF THE MOON',
    video: `${VIDEO_CDN}/luna.webm`,
    videoMov: `${VIDEO_CDN}/luna.mov`,
    poster: `${VIDEO_CDN}/luna.png`,
  },
  shadow: {
    id: 'shadow',
    label: 'Shadow Fiend',
    epithet: 'OF THE SHADOW',
    video: `${VIDEO_CDN}/nevermore.webm`,
    videoMov: `${VIDEO_CDN}/nevermore.mov`,
    poster: `${VIDEO_CDN}/nevermore.png`,
  },
}

export const profile = {
  name: 'PJ',
  title: 'The Code Rider',
  attribute: 'UNIVERSAL', // because full-stack-ish frontend devs scale with everything
  role: 'REACT JS DEVELOPER',
  description:
    'Wielding React for 5 years, PJ descends upon legacy codebases like an Eclipse — ' +
    'beams of clean components raining from above. By day a frontend carry; by night a ' +
    'dad of two and a husband, guarding his lane and his family with equal devotion.',
  stats: [
    { label: 'ATTACK TYPE', value: 'Remote / Onsite' },
    { label: 'EXPERIENCE', value: '5 Years' },
    { label: 'BASE CLASS', value: 'Frontend Carry' },
  ],
  complexity: 2, // out of 3 — dad of two, complexity is at home
  email: 'pj@example.com',
  github: 'https://github.com/your-github',
  linkedin: 'https://linkedin.com/in/your-linkedin',
}

export const roles = [
  { name: 'Frontend', level: 95 },
  { name: 'UI / UX', level: 80 },
  { name: 'Backend', level: 60 },
  { name: 'Testing', level: 70 },
  { name: 'DevOps', level: 45 },
]

export const family = [
  {
    name: 'Luna',
    tag: 'THE MOON RIDER',
    blurb: 'Firstborn and namesake of the Moon. Rides scooters instead of Nova — for now. Lucent Beams of energy from sunrise to bedtime.',
    img: `${IMG_CDN}/luna.png`,
  },
  {
    name: 'Shadow',
    tag: 'THE LITTLE FIEND',
    blurb: 'Collects toys the way Nevermore collects souls. Requiem of Tantrums hits the whole house, but the smile heals all damage dealt.',
    img: `${IMG_CDN}/nevermore.png`,
  },
  {
    name: 'The Wife',
    tag: 'HARD SUPPORT',
    blurb: 'The true MVP. Wards the household, stacks the camps, and somehow keeps the whole team alive. MMR: immeasurable.',
    img: null, // styled card, no hero art
  },
]

export const skills = [
  {
    id: 'react',
    name: 'React',
    type: 'CORE / SIGNATURE ABILITY',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    years: 5,
    desc: 'Primary weapon. Hooks, context, suspense, performance tuning — component trees fall like creep waves.',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    type: 'PASSIVE / ALWAYS ACTIVE',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    years: 6,
    desc: 'The base attribute everything scales from. ES2024+, async patterns, the event loop holds no mysteries.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    type: 'AURA / TEAM BUFF',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    years: 4,
    desc: 'Grants +100 confidence to all allied developers within refactor range. Strict mode always on.',
  },
  {
    id: 'redux',
    name: 'Redux / Zustand',
    type: 'ACTIVE / STATE CONTROL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    years: 4,
    desc: 'Controls the battlefield state. Single source of truth, predictable as a well-timed Eclipse.',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    type: 'ULTIMATE / SSR STRIKE',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    invert: true,
    years: 3,
    desc: 'Server components, routing, rendering strategies — global presence on every lane of the web.',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    type: 'ACTIVE / BACKLINE',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    years: 4,
    desc: 'REST APIs, tooling and build scripts. Comfortable rotating to the backend when the team needs it.',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    type: 'PASSIVE / FAST CRAFT',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    years: 3,
    desc: 'Rapid-fire styling with utility classes. Ships polished UI before the enemy finishes their boots.',
  },
  {
    id: 'jest',
    name: 'Jest / RTL',
    type: 'WARD / VISION',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    years: 4,
    desc: 'Places true sight over the codebase. Regressions revealed before they ever reach production.',
  },
]

export const experience = [
  {
    level: 25,
    period: '2025 — PRESENT',
    title: 'Senior React Developer',
    company: 'Your Current Company',
    points: [
      'Leads the frontend lane on the flagship product, mentoring a party of junior devs.',
      'Architected a component library used across 4 internal teams.',
      'Cut initial bundle size by 40% — faster than a Moon Glaive bounce.',
    ],
  },
  {
    level: 18,
    period: '2023 — 2025',
    title: 'React Developer',
    company: 'Previous Company',
    points: [
      'Shipped customer-facing dashboards with React, TypeScript and Redux.',
      'Migrated a legacy class-component codebase to modern hooks.',
      'Paired with designers to push pixel-perfect UI every sprint.',
    ],
  },
  {
    level: 10,
    period: '2021 — 2023',
    title: 'Frontend Developer',
    company: 'First Company',
    points: [
      'First blood: built and maintained marketing sites and internal tools.',
      'Learned the meta — responsive layouts, accessibility, performance.',
      'Earned the React core badge and never looked back.',
    ],
  },
]

export const projects = [
  {
    name: 'Project Nova',
    tag: 'WEB APP',
    desc: 'A real-time analytics dashboard with live charts and websocket updates. Glaives of data bouncing between services.',
    tech: ['React', 'TypeScript', 'WebSockets'],
    link: '#',
    flavor: 'luna',
  },
  {
    name: 'Requiem UI',
    tag: 'COMPONENT LIBRARY',
    desc: 'A dark-themed React component library. Every release gathers souls — I mean, GitHub stars.',
    tech: ['React', 'Storybook', 'Tailwind'],
    link: '#',
    flavor: 'shadow',
  },
  {
    name: 'Eclipse Commerce',
    tag: 'E-COMMERCE',
    desc: 'A full storefront with cart, checkout and CMS integration. Converts visitors faster than a level 6 power spike.',
    tech: ['Next.js', 'Stripe', 'Sanity'],
    link: '#',
    flavor: 'luna',
  },
]
