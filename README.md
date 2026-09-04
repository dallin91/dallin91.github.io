# Portfolio Website

A personal portfolio site — resume, about me, and projects — built with plain HTML, CSS, and JavaScript. No frameworks, no build step.

## Structure

```
index.html              Single-page site: nav, hero, about, resume, projects, contact
css/style.css            All styling (colors, layout, components, responsive rules)
js/main.js                Projects data + rendering, mobile nav, active-link highlighting
assets/resume.pdf         Downloadable resume (placeholder — replace with your real one)
assets/images/            Profile picture and project thumbnails (placeholder SVGs)
```

## Preview locally

Just open `index.html` in a browser. If you want relative links to behave exactly as they will when deployed, run a simple local server from this folder instead:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Editing content

- **Name, bio, experience, education, skills, contact links**: edit directly in `index.html`. Each section has an `id` (`about`, `resume`, `contact`, etc.) so it's easy to find.
- **Projects**: edit the `projects` array at the top of `js/main.js`. Each entry looks like:
  ```js
  {
    title: "My Project",
    description: "A short description of what it does.",
    image: "assets/images/projects/project-1.svg",
    tags: ["React", "Node.js"],
    repoUrl: "https://github.com/your-username/my-project",
  }
  ```
  Add, remove, or reorder objects in the array — the cards render automatically.
- **Resume PDF**: replace `assets/resume.pdf` with your real resume, keeping the same filename (or update the `href` in the Resume section of `index.html` if you rename it).
- **Images**: replace files under `assets/images/` with your own photos, keeping the same filenames — or update the `src`/`image` references if you rename them.
- **Colors and theme**: edit the CSS custom properties at the top of `css/style.css` (`:root` block). A dark-mode palette is already defined for `prefers-color-scheme: dark`.

## Deploying to GitHub Pages

1. Initialize git and push this folder to a new GitHub repository:
   ```bash
   git init
   git add index.html css js assets README.md .gitignore
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub, go to the repo's **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**, then select branch `main` and folder `/ (root)`.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` (or `https://<your-username>.github.io/` if the repo is named exactly `<your-username>.github.io`).

All asset paths in this project are relative, so the site works correctly whether it's served from a domain root or a subpath like `/repo-name/`.
