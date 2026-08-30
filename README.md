# moessouthwestgrillmenu.com

This repository contains the complete static website for **moessouthwestgrillmenu.com**, prepared and optimized for fast, reliable deployment on **GitHub Pages** (or Vercel, Netlify, Cloudflare Pages).

## Features & SEO Highlights
- **100% Authentic WordPress Content**: All 14 articles, 5 core pages, nutrition calculator, allergen guides, catering menu, and pricing tables preserved without modification.
- **Zero Broken Links / Full Permalink Support**: Supports both category paths (`/menu/...`, `/nutrition/...`), direct slugs (`/...`), and shorthand aliases (`/catering/`, `/coupons/`, etc.).
- **Rich Schema & Meta Tags**: Full JSON-LD schema markup, OpenGraph tags, and Twitter Cards preserved for high Google rankings.
- **Automated GitHub Pages Workflow**: Preconfigured `.github/workflows/deploy.yml` for 1-click automatic builds.
- **Fast Static Hosting**: Clean static HTML, CSS, assets, sitemap.xml, and robots.txt.

## How to Deploy on GitHub

1. **Initialize Git & Push**:
   ```bash
   cd github
   git init
   git add .
   git commit -m "Deploy moessouthwestgrillmenu.com static site"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, select **GitHub Actions** (or Deploy from branch `main` / `root`).
   - If using the custom domain, ensure `moessouthwestgrillmenu.com` is entered in the **Custom domain** field and DNS is pointed to GitHub Pages.

3. **Domain DNS Settings (for custom domain `moessouthwestgrillmenu.com`)**:
   - **Apex A Records**:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME Record** (`www`): `<YOUR-USERNAME>.github.io`
