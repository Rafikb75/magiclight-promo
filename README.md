# Build setup (Tailwind CSS)

This site no longer loads Tailwind from the Play CDN (`cdn.tailwindcss.com`).
Instead, `css/styles.css` is a small, precompiled, minified file generated
from `input.css` + your HTML files.

## Files

- `input.css` — your source CSS (Tailwind directives + custom rules)
- `tailwind.config.js` — scans `./*.html` for class names so it only generates CSS for classes you actually use
- `package.json` — build scripts (`npm run build`, `npm run watch`)
- `.github/workflows/build-css.yml` — GitHub Action that rebuilds `css/styles.css` automatically on commit

## Local usage

```bash
npm install
npm run build
```
