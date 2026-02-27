# KopaStudio

<p align="left">
  <img src="https://img.shields.io/badge/React-19+-61DAFB?logo=react&logoColor=000" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7+-646CFF?logo=vite&logoColor=fff" alt="Vite" />
  <img src="https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=github&logoColor=fff" alt="GitHub Pages" />
  <img src="https://img.shields.io/badge/Status-Live-16a34a" alt="Live" />
</p>

Conversion-focused digital agency landing page built with **React + Vite**.

> Services showcased: **Web Development**, **Chatbots**, and **Business Automation**.

---

## Live Website
- **Production:** https://abello-r.github.io/KopaStudio/

## Preview

![KopaStudio Preview](landing-servicios/public/og-kopastudio.jpg)

---

## Why this project
- Presents Kopa Studio’s offer with a clear mobile-first conversion flow.
- Balances trust (process, guarantee, FAQ) with direct CTAs.
- Includes SEO/share metadata for better visibility on WhatsApp/social previews.

## Core Sections
- Hero + primary CTAs
- New client promo card
- Benefits
- Audience fit (ideal / not ideal)
- Pricing
- Process
- Guarantee
- FAQ
- Contact
- Legal pages

---

## Tech Stack
- React
- Vite
- CSS (custom, no UI framework)

## Project Structure
```txt
landing-servicios/
├─ src/
│  ├─ App.jsx        # Main content and section composition
│  ├─ App.css        # Layout, components, responsive rules
│  ├─ index.css      # Global styles
│  └─ main.jsx
├─ public/
│  ├─ favicon.svg
│  ├─ og-kopastudio.jpg
│  ├─ aviso-legal.html
│  ├─ politica-privacidad.html
│  └─ politica-cookies.html
├─ index.html        # SEO + Open Graph metadata
└─ vite.config.js
```

---

## Local Development
```bash
cd landing-servicios
npm install
npm run dev
```

## Build
```bash
cd landing-servicios
npm run build
npm run preview
```

## Deploy (GitHub Pages)
```bash
cd landing-servicios
npm run deploy
```

---

## SEO / Sharing
Open Graph + Twitter metadata is configured in `landing-servicios/index.html`.

Preview image used when sharing:
- `landing-servicios/public/og-kopastudio.jpg`

---

## Repository Metadata
- Topics: `landing`, `automation`, `business`
- Homepage: https://abello-r.github.io/KopaStudio/
- Default branch: `master`
