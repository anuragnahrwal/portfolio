# Anurag — Video Editor Portfolio

Personal portfolio website for Anurag — Video Editor & Motion Graphics Designer.

## Structure

```
portfolio/
├── index.html          ← Main single-page site
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Animations, nav, form
└── README.md
```

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `portfolio`)
2. Push all files to the `main` branch
3. Go to **Settings → Pages**
4. Source: **Deploy from branch** → `main` → `/ (root)`
5. Save — site goes live at `https://yourusername.github.io/portfolio/`

Or use a custom domain: Settings → Pages → Custom domain.

## Customize

| What | Where |
|------|-------|
| Name / Bio | `index.html` → hero section |
| Work cards | `index.html` → `.work-grid` section |
| Photo | Replace `.about-photo-placeholder` with `<img src="assets/photo.jpg">` |
| Email / socials | `index.html` → contact-info section |
| Accent color | `css/style.css` → `--accent` and `--accent2` variables |
| Add real video thumbnails | Replace `background: linear-gradient(...)` in work cards with `background-image: url(...)` |

## Add your photo

Place your photo in `assets/photo.jpg`, then in `index.html` replace:
```html
<div class="about-photo-placeholder">
  <span>A</span>
</div>
```
with:
```html
<img src="assets/your-photo.jpg" alt="Anurag" class="about-photo-img" />
```
And in `css/style.css` add:
```css
.about-photo-img {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid var(--border);
}
```
