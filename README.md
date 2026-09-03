# José Guerrero Vazquez — Portfolio

Personal developer portfolio built with Next.js (App Router), TypeScript and
Tailwind CSS. Single page, English/German language switch, real project
screenshots captured with Playwright.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
src/
  app/                 Route, layout, metadata, sitemap/robots, OG image
  components/          UI sections (Hero, SelectedWork, ProtectedWork, ...)
  config/site.ts        Personal info & external links (single source of truth)
  data/                 Typed content: projects.ts, experience.ts, technologies.ts
  i18n/                 EN/DE translations + language context/provider
scripts/
  capture-projects.ts   Playwright screenshot automation
public/
  projects/             Project screenshots (webp)
  cv/                   CV PDF goes here
```

## Editing content

- **Text/copy**: `src/i18n/translations.ts` (EN and DE side by side).
- **Projects**: `src/data/projects.ts` — add/edit entries in `publicProjects`
  or `protectedProjects`. Each project is fully typed.
- **Experience**: `src/data/experience.ts`.
- **Technologies**: `src/data/technologies.ts`.
- **Contact links / email / CV path**: `src/config/site.ts` — do not hardcode
  URLs elsewhere.

## Screenshot generation

Screenshots for the public projects are captured for real with Playwright
(no mockups, no third-party screenshot APIs):

```bash
npx playwright install chromium   # first time only
npm run screenshots
```

This opens each project URL at a 1440×900 desktop viewport (and a 390-wide
mobile viewport), waits for the page/fonts/images to settle, and saves
optimised WebP files into `public/projects/`:

- `casa-vazquez.webp` / `casa-vazquez-mobile.webp`
- `muenster-quiz.webp` / `muenster-quiz-mobile.webp`

If a page can't be reached (no network, blocked automation, auth wall) the
script leaves the existing image in place and writes `SCREENSHOTS_NEEDED.md`
with the exact files to replace manually — check for that file after running
the script.

## Replacing the CV

Drop your PDF at `public/cv/Jose-Guerrero-Vazquez-CV.pdf` (the exact path
configured in `src/config/site.ts` → `links.cv`). No code changes needed.

## Replacing project screenshots manually

Overwrite the files in `public/projects/` with the same filenames (see
"Screenshot generation" above for exact names and recommended dimensions).

## Quality checks

```bash
npm run lint
npm run build
```

Both must pass with zero errors before deploying.

## Deployment (Vercel)

The project builds cleanly and is ready to deploy.

```bash
npx vercel        # preview deployment
npx vercel --prod # production deployment
```

### Connecting GitHub for automatic deployments

1. Push this repository to GitHub (already done if you're reading this from
   the repo).
2. In the Vercel dashboard, "Add New Project" → import the GitHub repo.
3. Vercel auto-detects Next.js; no extra configuration is required.
4. Every push to the default branch triggers a production deployment;
   pull requests get preview deployments automatically.

## Custom domain

In the Vercel project settings → **Domains**, add your domain and follow the
DNS instructions (A/CNAME record). Update `siteUrl` in
`src/config/site.ts` to match the final domain once it's live (used for
metadata, sitemap and OpenGraph URLs).
