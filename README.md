# forBET Digital — Corporate Website

Static corporate website for forBET Digital, built for deployment on GitHub Pages with clean URLs.

## File structure

```
forbet-digital/
├── index.html              → /
├── about/index.html        → /about/
├── solutions/index.html    → /solutions/
├── tech-stack/index.html   → /tech-stack/
├── careers/index.html      → /careers/
├── news/index.html         → /news/
├── contacts/index.html     → /contacts/
├── policy/index.html       → /policy/
├── 404.html                → custom error page
├── assets/
│   ├── style.css           → all styles
│   └── script.js           → burger menu + form handler
├── .nojekyll               → tells GitHub Pages to serve files as-is
├── robots.txt
├── sitemap.xml
└── README.md
```

Each section is its own folder containing `index.html`. GitHub Pages serves `/about/index.html` at the URL `/about/` automatically, which gives you clean URLs without `.html` extensions.

## Deployment to GitHub Pages

1. Create a new repository on GitHub (public, or private with GitHub Pro).
2. Upload the entire contents of this folder to the root of the repo. **Do not** put it inside a subfolder — the structure must start at the repo root, so that `index.html` is at the top level.
3. In the repo: **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, select branch `main` (or `master`) and folder `/ (root)`. Save.
5. Wait 1–2 minutes. The site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Custom domain (recommended for Google Play verification)

1. In the repo root, create a file named `CNAME` containing a single line with your domain, e.g. `forbet-apps.com`.
2. At your DNS provider, point the apex (`@`) record to GitHub Pages IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
   For `www`, create a CNAME record pointing to `<your-username>.github.io`.
3. Back in **Settings → Pages**, enter your custom domain and tick **Enforce HTTPS** once the certificate is issued (this can take up to 24 hours).

## Notes

- **No build step.** All files are static — just upload and go.
- **Burger menu** is fully accessible (keyboard, ESC to close) and works on mobile.
- **Privacy Policy** is the page Google Play Console will check — keep it always reachable at `/policy/`.
- **Contact form** is front-end only; to actually receive submissions, plug it into a service like Formspree, Web3Forms, or your own endpoint by editing `assets/script.js`.

## Editing content

- All text is in plain HTML — open any `index.html` and edit.
- All styling is in `assets/style.css`. Colors are CSS variables at the top of the file (`:root`), so you can rebrand in one place.
- Footer and header are repeated across pages for simplicity (no build tool needed). When you change one, update all 9 HTML files. A quick `sed` works:

  ```bash
  # Example: replace email everywhere
  grep -rl 'hello@forbet-apps.com' . | xargs sed -i 's/hello@forbet-apps.com/new@email.com/g'
  ```
