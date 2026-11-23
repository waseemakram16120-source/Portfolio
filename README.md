# Muhammad Waseem Akram — Portfolio (React + Vite)

Personal portfolio for Muhammad Waseem Akram, Final Year BSCS student at
COMSATS University Vehari (Reg No FA23-BCS-039). Dark theme with an
orange-to-gold gradient accent, matching the reference design.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project → Import** that repository.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
4. Deploy — no environment variables are needed.

## Structure

- `src/data.js` — all content (profile, education, experience, skills, projects, services)
- `src/components/` — Navbar, Hero, About, Education, Experience, Skills, Projects, Services, Reviews, Contact, Footer
- `src/assets/profile.jpg` — profile photo
- `src/utils/resume.js` — generates the downloadable text resume

## Notes

- Reviews start empty on purpose — no fake testimonials. Visitors can add one
  with the Write-a-Review form; it is kept for the session only (static site).
- The contact form opens the visitor's email app addressed to
  waseemakram16120@gmail.com (mailto) — there is no backend.
- Skill percentages are self-assessed.
- MathQuest, AI Mock Interview Coach and doctorhub have no live link yet, so
  their project cards show "Live coming soon" with a Code link only.
