# Session Notes — Personal Website / Portfolio

## What This Project Does
A personal portfolio site showcasing PJ Cooley's AI and automation projects — built for future employers, friends, and family. Features a project grid with category filtering, live demo links, GitHub links, and "Private repo" indicators for work-related projects.

## Live URLs
- **Production:** https://personal-website-six-mu.vercel.app
- **GitHub repo:** https://github.com/pjcooley7-ship-it/personal-website
- **Vercel dashboard:** https://vercel.com/pjcooley7-1083s-projects/personal-website

## Current Status
- Fully built and live on Vercel
- Auto-deploys on every push to `master`
- All 7 projects populated with descriptions, stack tags, status badges, and links

## Stack
- React 18 + TypeScript + Vite
- Tailwind CSS 3 (Warm Professional design)
- Fonts: DM Sans (body), Space Mono (labels) via Google Fonts
- Hosted on Vercel, source on GitHub

## Design System — Warm Professional
- Background: `#f8f7f4` (cream), cards: white, accent: `#7c3aed` (violet)
- Rounded cards (rounded-2xl), soft shadow, hover lift effect
- Category badges: color-coded by type (blue=Web App, purple=AI Tool, amber=Automation, stone=CLI Tool)
- Status badges: green=Live, amber=In Progress

## Project Data
All project content lives in **`src/data/projects.ts`** — this is the only file you need to edit to add/update/remove projects.

### Projects currently featured:
| Title | Category | Link Type | Notes |
|---|---|---|---|
| Return Tracker Pro | Web App | Live | https://refund-angel.lovable.app |
| Wanderlust | Web App | Live | https://global-family-adventures.lovable.app/ |
| Flux Commentary Generator | AI Tool | Private repo | Work project — repo private |
| Journal Entry Assistant | Automation | Private repo | Work project — repo private |
| Close Checklist Monitor | Automation | Private repo | Work project — repo private |
| Claude Usage Tracker | CLI Tool | GitHub | https://github.com/pjcooley7-ship-it/claude-usage-tracker |
| Recipe Book | Web App | GitHub | https://github.com/pjcooley7-ship-it/recipe-book |

### To add a new project:
Add an entry to the `projects` array in `src/data/projects.ts`. Fields:
- `id` — unique slug
- `title`, `tagline`, `description`
- `category` — `'Web App' | 'AI Tool' | 'Automation' | 'CLI Tool'`
- `stack` — array of tech strings (first 3 shown, rest as +N)
- `link` — `{ type: 'live', url }` | `{ type: 'github', url, private?: true }` | `{ type: 'none' }`
- `status` — `'live' | 'in-progress' | 'planning'`

### To make a private repo public on the site:
1. Make the GitHub repo public (repo → Settings → Danger Zone → Change visibility)
2. In `projects.ts`, change `{ type: 'github', url: '...', private: true }` → remove `private: true`
3. `git add . && git commit -m "..." && git push` — Vercel auto-deploys

## File Structure
```
personal-website/
├── src/
│   ├── App.tsx                  # Root layout (Nav + Hero + ProjectGrid + Footer)
│   ├── index.css                # Tailwind base + component classes (.badge, .tag, .project-card, etc.)
│   ├── data/
│   │   └── projects.ts          # ← ALL project content lives here
│   └── components/
│       ├── Nav.tsx              # Name + GitHub/LinkedIn/Substack links (centered, stacked)
│       ├── Hero.tsx             # Bio section with badge, headline, bio, Substack link
│       ├── ProjectGrid.tsx      # Filter bar + responsive grid
│       ├── ProjectCard.tsx      # Individual card with category, status, stack tags, link button
│       └── Footer.tsx           # Built-with note + GitHub/LinkedIn links
├── tailwind.config.js           # Custom colors (cream, ink, muted, accent, border)
├── index.html                   # Page title, meta description, Google Fonts
└── design-options.html          # Original 5 design mockups (reference only)
```

## Deploy Workflow
```bash
cd /Users/pjcooley/personal-website
# make your changes...
git add . && git commit -m "describe change" && git push
# Vercel auto-deploys in ~30 seconds
```

## Key Decisions
- **Warm Professional** design chosen from 5 options (clean cards, violet accent, cream bg)
- **Nav layout:** PJ Cooley centered on top, GitHub / LinkedIn / Substack links centered below
- **Private repo indicator:** lock icon + "Private repo" label (non-clickable) for work projects
- **Filter bar:** All / Web App / AI Tool / Automation / CLI Tool — client-side, no routing needed
- **Vercel over GitHub Pages:** simpler for Vite/React, auto-deploys, supports custom domain later

## Next Steps / Ideas
- Add a custom domain (e.g. pjcooley.dev — ~$12/yr on Namecheap or Porkbun)
- Add screenshots or short video demos per project card
- Make Claude Usage Tracker and Recipe Book repos public once ready
- Add new projects as they're built in 2026 (goal: 12 apps)
- Consider an "About" section with photo

## GitHub Repos Created This Session
All created under `pjcooley7-ship-it`, currently **private**:
| Repo | Local path |
|---|---|
| flux-commentary-generator | ~/flux-commentary |
| journal-entry-assistant | ~/google-sheets-agents |
| close-checklist-monitor | ~/close-checklist-monitor |
| claude-usage-tracker | ~/claude-usage-tracker |
| recipe-book | ~/recipe-book |
| personal-website | ~/personal-website ← this repo (public) |

## Session Log

### 2026-04-16
- Surveyed all local project folders and cross-referenced with GitHub for full project inventory
- Drafted bio based on LinkedIn profile + Substack ("Building Small Things With AI" — new parent, expat in Zurich, 12 apps in 2026 goal)
- Built 5 design option mockups (design-options.html), user selected Warm Professional
- Recommended Vercel for hosting
- Scaffolded full React + Vite + Tailwind site with Nav, Hero, ProjectCard, ProjectGrid, Footer
- Populated all 7 projects with descriptions, stack, status, and correct link types
- Created 5 new private GitHub repos and pushed code for local projects that had none
- Anonymized Wolt-sensitive data in close-checklist-monitor (Drive folder ID, folder path, Slack channel)
- Added "Private repo" lock indicator for 3 work-related projects
- Deployed to Vercel — live at https://personal-website-six-mu.vercel.app
- Set up GitHub → Vercel auto-deploy on push
- Iterated nav layout: settled on centered name on top, links below
- Added Substack link to nav
