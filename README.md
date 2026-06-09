# Robert B. Harmon, Esq. — Netlify Static Site

## How to use

1. Upload these files to your GitHub repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `thank-you.html`
   - the `assets` folder

2. Add your two images inside the `assets` folder with these exact file names:
   - `nyc-bg.jpg` for the hero/background city photo
   - `robert-harmon.jpg` for the attorney photo

3. In Netlify:
   - Add new site → Import from GitHub
   - Select this repository
   - Build command: leave empty
   - Publish directory: `/` or leave as default if Netlify accepts root

4. The form uses Netlify Forms:
   - After first deploy, submit a test form.
   - Go to Netlify → Site → Forms.
   - You should see `case-review`.
   - File uploads will be stored with the form submission.

5. To connect the domain:
   - Netlify → Domain management → Add custom domain
   - Add `rbharmonlaw.com`
   - In Namecheap DNS, point records to Netlify as instructed.

## Important

The website is static and does not require Lovable's $25/month plan. Netlify Forms has limits depending on your Netlify plan, but the site itself can run on the free plan.
