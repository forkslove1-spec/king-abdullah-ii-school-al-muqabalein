# Deployment — Amman Crest Academy

Frontend-only static site (Vite + React). No backend, database, or authentication.

## Production URL

**Live HTTPS site:** https://forkslove1-spec.github.io/amman-crest-academy/

- Public worldwide (including Jordan)
- HTTPS enforced
- No login required
- Works on desktop, laptop, phone, and tablet browsers

Source repository: https://github.com/forkslove1-spec/amman-crest-academy

## Publish an update (current workflow)

```bash
npm install
$env:VITE_BASE='/amman-crest-academy/'   # PowerShell
npm run build
Copy-Item dist\index.html dist\404.html  # SPA refresh fallback on GitHub Pages
npx gh-pages -d dist
```

HTML is not long-cached by GitHub Pages; hashed files under `/assets/` are cache-friendly.

## Vercel / Netlify / Cloudflare Pages

The project is also ready for these platforms (`vercel.json`, `netlify.toml`, `public/_redirects`, cache headers).

### Vercel

```bash
npm install
npm run build
npx vercel login
npx vercel --prod
```

For root hosting on Vercel, deploy **without** `VITE_BASE` (default `/`).

Optional: claim a temporary Vercel deploy (if you still have the claim link from this session) at the Vercel claim-deployment page, then connect the GitHub repo for automatic updates.

### Netlify

```bash
npm install
npm run build
npx netlify login
npx netlify deploy --prod --dir=dist
```

### Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite

## Local development

```bash
npm install
npm run dev
```

## Verification checklist

- [x] Public HTTPS URL opens without login
- [x] Home page renders brand, slideshow controls, dashboard cards
- [x] Direct section URLs work (SPA fallback via `404.html` on GitHub Pages)
- [ ] Spot-check on a physical phone (Chrome/Safari)
- [ ] Confirm slideshow advances (~30s full loop: 5 × 6s)
- [ ] Confirm video “Play campus video” fallback if autoplay is blocked
