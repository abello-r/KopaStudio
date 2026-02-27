# KopaStudio

Conversion-focused digital agency landing page built with **React + Vite**.

> Services showcased: **Web Development**, **Chatbots**, and **Business Automation**.

## Live Website
- **Production:** https://abello-r.github.io/KopaStudio/

## Tech Stack
- React
- Vite
- CSS (custom, no UI framework)

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

## Project Structure
```txt
landing-servicios/
├─ src/
│  ├─ App.jsx        # Main content and sections
│  ├─ App.css        # Layout + responsive styles
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

## SEO / Sharing
Open Graph + Twitter metadata is configured in `landing-servicios/index.html`.

Preview image used when sharing:
- `landing-servicios/public/og-kopastudio.jpg`

## Repository Metadata
- Topics: `landing`, `automation`, `business`
- Homepage: https://abello-r.github.io/KopaStudio/
