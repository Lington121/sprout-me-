# Sprout Me — Splash & Onboarding

A Vite + React prototype of the first 8 screens of the Sprout Me mobile flow
(Splash → 3 onboarding slides → Style → Create Tree → Daily Limit → Mode → Done).
Renders inside an iPhone-sized frame on desktop, and deploys to GitHub Pages.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
Pushed to `https://lington121.github.io/sprout-me-/`

Built with `base: './'` so it works under any repo subpath. The `.github/workflows/deploy.yml`
handles continuous deployment on every push to `main`.

## Stack
- React 18 + Vite 5 — plain CSS, inline SVG illustrations, Sora via Google Fonts
- No backend, no auth, no persistence
