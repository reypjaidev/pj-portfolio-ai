# PJ.DEV — Dota 2 Hero Portfolio

A personal portfolio styled after the [Dota 2 hero pages](https://www.dota2.com/hero/luna),
themed around **Luna** and **Shadow Fiend** — named after my two kids, Luna and Shadow.

## Run it

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production build into dist/
```

## Make it yours

Almost all content lives in **`src/data.js`** — edit that one file to update:

- `profile` — your name, title, bio, email, GitHub/LinkedIn links (currently placeholders!)
- `experience` — your real jobs (placeholder companies right now)
- `projects` — your real projects and links
- `skills` — the "abilities" bar
- `family` — the Party cards in the About section

The Luna ↔ Shadow Fiend theme toggle is in the navbar (MOON / SHADOW). Theme colors are
CSS variables at the top of `src/index.css`.

## Credits

Dota 2, Luna and Shadow Fiend art/renders are property of Valve Corporation, streamed from
Valve's official CDN as a fan homage. Skill icons via [Devicon](https://devicon.dev/).
