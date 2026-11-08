# Deployment — Amman Crest Academy

Frontend-only static site (Vite + React). No backend, database, or authentication.

## Production hosting

Supported platforms: **Vercel**, **Netlify**, or **Cloudflare Pages**.

### Vercel (recommended)

```bash
npm install
npm run build
npx vercel --prod
```

Or connect the GitHub repo in the Vercel dashboard — every push to `main` publishes automatically.

`vercel.json` configures:

- SPA fallback so refreshing `/about`, `/academics`, etc. works
- `Cache-Control: max-age=0, must-revalidate` for HTML
- Long-lived immutable caching for `/assets/*` (hashed filenames)

### Netlify

```bash
npm install
npm run build
npx netlify deploy --prod --dir=dist
```

`netlify.toml` and `public/_redirects` provide the same SPA + cache behavior.

### Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite

Add a `_redirects` rule (already in `public/`):

```
/*    /index.html   200
```

## Local development

```bash
npm install
npm run dev
```

## Update workflow

1. Edit frontend files
2. Commit and push (or redeploy with the CLI)
3. CDN serves the new `index.html` immediately (not long-cached)
4. Versioned JS/CSS assets remain cache-friendly

## Verification checklist

- [ ] Open the HTTPS production URL from desktop and mobile
- [ ] Refresh `/about`, `/admissions`, and other section routes
- [ ] Confirm hero slideshow advances (~30s full loop)
- [ ] Confirm video fallback button appears if autoplay is blocked
- [ ] Confirm no login is required
