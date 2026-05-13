# KOC Transmission - Modern Website

## Project Overview
A modern, premium static website for KOC Transmission (industrial power transmission company, est. 2000, Bursa/Turkey). Rebuilt from the original degisimmotor.com under the new brand identity, with a refined, non-generic design using taste-skill soft-skill principles. Domain: koctransmission.com (deployed on Vercel).

## Tech Stack
- **HTML5** + **CSS3** (custom properties, scroll-driven animations, modern grid)
- **Vanilla JavaScript** (no frameworks, no build step)
- **Font**: Satoshi (via Fontshare CDN)
- **Icons**: Lucide Icons (via CDN)
- **Design System**: taste-skill soft-skill — premium, calm, low-contrast

## Design Decisions
- **DESIGN_VARIANCE: 7** — Asymmetric layouts, visual diversity
- **MOTION_INTENSITY: 5** — Smooth CSS transitions + IntersectionObserver reveals
- **VISUAL_DENSITY: 4** — Balanced, breathable spacing
- **Palette**: Warm neutrals + muted industrial accent (deep teal #1a3a3a, warm sand #f5f0e8)
- **No AI slop**: No emojis, no neon glows, no purple gradients, no 3-column card grids, no generic stock imagery descriptions, no oversized H1s

## Site Structure
```
index.html          — Single-page site
css/
  style.css         — Full design system + components
js/
  main.js           — Interactions, i18n, animations
assets/             — Images (if any)
```

## Sections
1. **Nav** — Sticky, minimal, logo + links + language toggle + CTA
2. **Hero** — Full viewport, bold tagline, subtle background texture
3. **About** — Company story since 2000, stat counters (25+ years, etc.)
4. **Products** — 8 categories in asymmetric grid (NOT 3-col cards)
5. **Services** — 6 core services in alternating layout
6. **Contact** — Info cards + contact form + embedded map placeholder
7. **Footer** — Links, legal, social

## Features
- EN/TR language toggle (English primary)
- WhatsApp floating button
- Contact CTA button in nav
- Smooth scroll navigation
- Scroll-reveal animations via IntersectionObserver
- Mobile-first responsive (collapses gracefully)
- `min-h-[100dvh]` for mobile safety

## Content Data
### Company
- Brand: KOC Transmission (rebranded from Degisim Motor)
- Founded: 2000
- Location: Bursa, Turkey
- Specialty: Power transmission solutions

### Products (8 categories)
1. Electric Motors — Industrial motors, wide power ranges
2. Gearboxes — Helical, worm, bevel, planetary
3. Brake & Clutch Systems — Electromagnetic brakes
4. Circulation Pumps — Fans and pumps
5. Vibration Motors — Screening, feeding, conveying
6. Transmission Accessories — Keys, pulleys
7. Crowned Motors — CE Motors brand, press brake motors
8. Gearbox Selection Program — Interactive tool

### Contact
- Phones: 0(224) 441 23 79 / 441 24 78 / 441 13 77
- Emails: info@koctransmission.com, sales@koctransmission.com
- Address: Alaaddinbey Mah. 615. Sok. No:8, 16120 Nilufer/Bursa
- Hours: Mon-Fri 08:00-17:30, Sat 08:00-12:30, Sun Closed

### Services
1. Motor Supply & Distribution
2. Gearbox Systems & Solutions
3. Spare Parts Supply
4. After-Sales Technical Support
5. Engineering Consultancy
6. Project-Based Custom Solutions

## Browser Check Protocol
After each major step, open `index.html` in browser to verify:
- Layout integrity on desktop and mobile viewport
- Typography hierarchy and readability
- Color contrast and visual harmony
- Animation smoothness
- Interactive elements (menu, language toggle, WhatsApp button)
- No broken elements or overflow issues
