# ☕ The Roasted Bean & Co. — Responsive Café Website

A responsive, artisanal multi-page website designed for cafés, coffee shops, and bakeries. Fully optimized for static hosting on **GitHub Pages**.

![GitHub Pages Ready](https://img.shields.io/badge/GitHub%20Pages-Ready-brightgreen)
![Vanilla HTML5/CSS3/JS](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20ES6-orange)
![Responsive](https://img.shields.io/badge/Design-Mobile--First-blue)

---

## 🌟 Key Features

- **10s Looping Video Hero**: Seamless, muted, and autoplaying coffee pour background loop with play/pause accessibility toggle and poster fallback.
- **Pure Static Architecture**: 100% compatible with **GitHub Pages** (relative asset links, zero dependencies, no build steps required).
- **Responsive Layout**: Fluid experience across mobile phones (<768px), tablets (768px-1024px), and desktop displays.
- **Interactive Menu Filter**: Filter offerings on-the-fly by category (*Coffee, Teas & Cold Drinks, Bakery & Breakfast, Lunch & Savory, Desserts*).
- **Client-Side Form Validation**: Interactive contact form with real-time feedback and success status.
- **Design System**: Warm espresso, caramel roast, milk cream, and botanical sage green color palette with Google Fonts (*Playfair Display* & *Plus Jakarta Sans*).
- **Custom 404 Page**: Handcrafted `404.html` ready for GitHub Pages custom routing.

---

## 📁 Project Structure

```text
cafe-website/
├── index.html              # Landing page with 10s looping video hero
├── about.html              # Story, values, and photo gallery
├── menu.html               # Filterable categorized menu
├── contact.html            # Contact form, schedule & location map
├── 404.html                # GitHub Pages custom 404 error page
├── README.md               # Documentation & deployment guide
├── css/
│   ├── style.css           # Global typography, color variables & component styles
│   └── responsive.css      # Mobile drawer & breakpoint queries
├── js/
│   └── main.js             # Mobile nav toggle, video controls & menu filter
└── assets/
    ├── video/
    │   ├── cafe-loop.webm  # 14s looping video clip
    │   └── cafe-loop.mov   # Secondary video fallback
    └── images/
        └── hero-poster.jpg # Poster fallback for mobile / reduced motion
```

---

## 🚀 How to Deploy on GitHub Pages

1. **Initialize Git** in this folder (if not done already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Responsive Cafe Website"
   ```

2. **Create a GitHub repository** named `cafe-website` (or any name you prefer).

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/cafe-website.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub.
   - Navigate to **Settings** > **Pages** (under Code and automation).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch: `main` and folder: `/ (root)`.
   - Click **Save**.

Your website will be live in ~1 minute at:
`https://YOUR-USERNAME.github.io/cafe-website/`

---

## 🛠️ Customization Guide

- **Café Name & Tagline**: Change `"Roasted Bean"` in the `<header>` and `<h1>` tags across `.html` files.
- **Colors**: Adjust the CSS variables in the `:root` selector at the top of [`css/style.css`](./css/style.css):
  - `--color-espresso`: `#24140E`
  - `--color-caramel`: `#8C5332`
  - `--color-cream`: `#FAF7F2`
  - `--color-sage`: `#4E6E58`
- **Menu Items**: Add or edit items directly in [`menu.html`](./menu.html) with custom `data-category` attributes.
