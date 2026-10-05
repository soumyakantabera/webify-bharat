# Webify Bharat

Custom software and marketing for Indian businesses — websites, stores, payments, WhatsApp, CRM/ERP and more, built for you and run for you.

**Live site:** https://soumyakantabera.github.io/webify-bharat
**Contact:** WhatsApp [+91 83360 97642](https://wa.me/918336097642)

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000/webify-bharat (the site lives under the `/webify-bharat` path, same as on GitHub Pages).

## Build

```bash
npm run lint    # type-check
npm run build   # static export to out/
```

## Deploy (GitHub Pages only)

Every push to `main` runs `.github/workflows/pages.yml`: type-check, build the static export, and publish `out/` to GitHub Pages.

One-time setting: **Settings → Pages → Build and deployment → Source: GitHub Actions**. (If it's set to "Deploy from a branch", GitHub also publishes the raw repository and the two deployments fight.)

### Custom domain (optional, later)

Add the domain in Settings → Pages, then build with `PAGES_BASE_PATH=""` and `NEXT_PUBLIC_SITE_URL=https://your-domain` (set them as `env` on the build step in the workflow).

## Brand assets

Generated, not hand-edited — see `CLAUDE.md` and review everything at `/brand`.
