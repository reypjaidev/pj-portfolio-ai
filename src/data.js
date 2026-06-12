// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update your portfolio content.
// All text, links, jobs and projects live here.
// ─────────────────────────────────────────────────────────────

const VIDEO_CDN =
  "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders";
const IMG_CDN =
  "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes";

export const themes = {
  luna: {
    id: "luna",
    label: "Luna",
    epithet: "OF THE MOON",
    video: `${VIDEO_CDN}/luna.webm`,
    videoMov: `${VIDEO_CDN}/luna.mov`,
    poster: `${VIDEO_CDN}/luna.png`,
  },
  shadow: {
    id: "shadow",
    label: "Shadow Fiend",
    epithet: "OF THE SHADOW",
    video: `${VIDEO_CDN}/nevermore.webm`,
    videoMov: `${VIDEO_CDN}/nevermore.mov`,
    poster: `${VIDEO_CDN}/nevermore.png`,
  },
};

export const profile = {
  name: "PJ",
  title: "The Code Rider",
  photo:
    "https://res.cloudinary.com/ddmr2bcva/image/upload/v1781252197/1724207144515_blwfk7.jpg",
  attribute: "UNIVERSAL", // because full-stack-ish frontend devs scale with everything
  role: "FRONTEND DEVELOPER",
  description:
    "Hailing from Cebu, PJ descends upon the frontend lane like an Eclipse — " +
    "beams of clean React components raining from above. By day a frontend carry at " +
    "Zouq Online PH; by night a dad of two and a husband, guarding his lane and his " +
    "family with equal devotion.",
  stats: [
    { label: "ATTACK TYPE", value: "Remote / Onsite" },
    { label: "EXPERIENCE", value: "2+ Years" },
    { label: "BASE CLASS", value: "Frontend Carry" },
  ],
  complexity: 2, // out of 3 — dad of two, complexity is at home
  email: "reypjbaliguat@gmail.com",
  github: "https://github.com/reypjaidev",
  linkedin: "https://www.linkedin.com/in/rey-pj-baliguat-01a817200/",
};

export const roles = [
  { name: "Frontend", level: 95 },
  { name: "UI / UX", level: 80 },
  { name: "Backend", level: 60 },
  { name: "Testing", level: 70 },
  { name: "DevOps", level: 45 },
];

export const family = [
  {
    name: "Luna",
    tag: "THE MOON RIDER",
    blurb:
      "Firstborn and namesake of the Moon. Rides scooters instead of Nova — for now. Lucent Beams of energy from sunrise to bedtime.",
    img: `https://res.cloudinary.com/ddmr2bcva/image/upload/v1781200588/660468886_26106157462340829_8186466714842810495_n_w3ohya.jpg`,
  },
  {
    name: "Shadow",
    tag: "THE LITTLE FIEND",
    blurb:
      "Collects toys the way Nevermore collects souls. Requiem of Tantrums hits the whole house, but the smile heals all damage dealt.",
    img: "https://res.cloudinary.com/ddmr2bcva/image/upload/v1781200235/493989076_10229050531429050_8671170489907195796_n_jv7bjj.jpg",
  },
  {
    name: "The Wife",
    tag: "HARD SUPPORT",
    blurb:
      "The true MVP. Wards the household, stacks the camps, and somehow keeps the whole team alive. MMR: immeasurable.",
    img: "https://res.cloudinary.com/ddmr2bcva/image/upload/v1781200236/720920219_26950327744590459_7706548873559747927_n_i82rqs.jpg", // styled card, no hero art
  },
];

export const skills = [
  {
    id: "react",
    name: "React",
    type: "CORE / SIGNATURE ABILITY",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    years: 2,
    desc: "Primary weapon. Hooks, context, scalable dynamic UIs — component trees fall like creep waves.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    type: "PASSIVE / ALWAYS ACTIVE",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    years: 3,
    desc: "The base attribute everything scales from. Modern ES, async patterns, the event loop holds no mysteries.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    type: "ULTIMATE / SSR STRIKE",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    invert: true,
    years: 2,
    desc: "Server-side rendering and routing — global presence on every lane of the web.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    type: "PASSIVE / FAST CRAFT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    years: 2,
    desc: "Rapid-fire styling with utility classes. Ships polished UI before the enemy finishes their boots.",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    type: "ARMOR / CONSISTENT BUILD",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    years: 2,
    desc: "Battle-tested armor set. Consistent, responsive layouts equipped in seconds.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    type: "ACTIVE / BACKLINE",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    years: 2,
    desc: "Express APIs, tooling and build scripts. Comfortable rotating to the backend when the team needs it.",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    type: "WARD / DATA VISION",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    years: 2,
    desc: "The M in MERN. Stores the team's gold and items — documents flow like a well-farmed lane.",
  },
  {
    id: "agile",
    name: "Agile / Scrum",
    type: "AURA / TEAM BUFF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    years: 2,
    desc: "Grants +100 coordination to all allied developers. Sprints, stand-ups and Kanban boards — drafted every patch.",
  },
];

export const experience = [
  {
    level: 25,
    period: "2025 — PRESENT", // TODO: confirm dates
    title: "Senior Design Engineer",
    company: "Sesimi",
    points: [
      "Carries the design-engineering lane of a brand-management platform — dynamic, on-brand templates built with React.",
      "Bridges design and code, turning brand systems into reusable, pixel-perfect components.",
      "Raises the bar on UI quality, accessibility and performance across the product.",
    ],
  },
  {
    level: 20,
    period: "2024 — 2025", // TODO: confirm dates
    title: "Full Stack Developer",
    company: "Zouq Online PH",
    points: [
      "Held both lanes — scalable, dynamic user interfaces with React.js on the front, APIs on the back.",
      "Crafted consistent, responsive layouts with Tailwind CSS and Bootstrap.",
      "Optimized web apps for performance, accessibility and SEO — vision over the whole map.",
      "Rotated with the team in Agile fashion — Scrum sprints and Kanban boards.",
    ],
  },
  {
    level: 15,
    period: "2023 — 2024", // TODO: confirm dates
    title: "Application Developer",
    company: "AWS Philippines (Advanced World Systems)",
    points: [
      "Developed and maintained enterprise-level software solutions for client teams.",
      "Learned the meta of large codebases — discipline, process and clean delivery.",
      "Modernized legacy interfaces into responsive, component-driven UIs.",
    ],
  },
  {
    level: 10,
    period: "2022 — 2023", // TODO: confirm dates
    title: "Software Engineer",
    company: "Beautitag Limited",
    points: [
      "First blood: built and shipped customer-facing web features for a beauty-tech platform.",
      "Sharpened the fundamentals — responsive layouts, REST integrations and clean component architecture.",
      "Earned the frontend core badge and never looked back.",
    ],
  },
];

export const projects = [
  {
    name: "Hero Portfolio",
    tag: "WEB APP",
    desc: "This very page — a Dota 2 hero-themed portfolio with theme switching and hero-render videos. Glaives of components bouncing between sections.",
    tech: ["React", "Vite", "Tailwind"],
    link: "https://github.com/reypjaidev",
    flavor: "luna",
  },
  {
    name: "Typing Game",
    tag: "MERN APP",
    desc: "A typing game web app powered by the full MERN stack. Farms words-per-minute the way Nevermore farms souls.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/reypjaidev",
    flavor: "shadow",
  },
];
