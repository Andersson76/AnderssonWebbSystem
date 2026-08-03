# Andersson Webb & System AB

Modern företagswebbplats byggd med Next.js 15, TypeScript, Tailwind CSS,
GSAP/ScrollTrigger och Lenis.

## Kom igång

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i webbläsaren.

## Tech stack

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS v4**
- **GSAP + ScrollTrigger** — scrollstyrda animationer och pinned content
- **Lenis** — mjuk scroll med native touch-scroll och tillgänglig fallback

## Struktur

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Contact.tsx
    ├── Hero.tsx
    ├── HowIWork.tsx
    ├── MotionExperience.tsx
    └── WhatIDo.tsx
```

Animationerna stängs av för `prefers-reduced-motion`. Lenis och GSAP delar en
enda animationsticker och städas upp när upplevelselagret avmonteras.
