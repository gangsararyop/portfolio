# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Maintenance rule:** Whenever a change alters anything documented here (structure, sections, data shape, conventions, commands, folder layout), update this file as part of the same task — don't wait to be asked.

## Overview

Single-page site for Gangsar Aryo that markets his web-development services to potential clients (UMKM/local businesses, startups, and individuals). It is positioned as a sales/lead-generation site — not a CV — driving visitors to hire him via WhatsApp or email. Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4. The entire site is one scrolling page composed of sticky-sidebar navigation and stacked content sections. Copy is in English. Tone is benefit-led ("what you get") rather than résumé-style.

## Commands

```bash
npm run dev     # Start dev server with Turbopack (http://localhost:3000)
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # ESLint (next/core-web-vitals + next/typescript)
```

There is no test setup in this project.

## Architecture

- **Routing**: App Router. [src/app/page.tsx](src/app/page.tsx) is a thin server component that renders the client `Homepage`. [src/app/layout.tsx](src/app/layout.tsx) sets the `Inter` font (via CSS var `--font-inter`) and global metadata.
- **Page composition**: [src/app/home/index.tsx](src/app/home/index.tsx) (`"use client"`) is the real page. It lays out a two-column grid — a sticky left column (name, value-proposition headline, WhatsApp/Email CTA buttons, scroll-spy nav) and a right column that stacks the section components in order: About, Services, Work, Experience, Contact.
- **Content as data**: All copy/data lives in [src/app/home/static/index.tsx](src/app/home/static/index.tsx) as typed arrays (`sections`, `services`, `experiences`, `professionalProjects`) with their `I*` interfaces. Edit content here, not in the section components. The `sections` array drives both the nav and the scroll-spy `id`s — each section component must render a matching `id` (current ids: `about`, `services`, `work`, `experience`, `contact`).
- **Services offering**: The `services` array (`IService`) is the core sales content — five offerings: Landing Page & Company Profile, Web Apps & Custom Dashboards, E-Commerce & Online Store, Management Systems (HRIS/POS/Inventory/CRM/LMS/Booking), and Maintenance & Revamp. Rendered by [src/app/home/sections/ServicesSection.tsx](src/app/home/sections/ServicesSection.tsx) via [src/app/home/components/ServiceCard.tsx](src/app/home/components/ServiceCard.tsx).
- **Work / proof**: [src/app/home/sections/WorkSection.tsx](src/app/home/sections/WorkSection.tsx) renders `professionalProjects` (via `ProjectCard`) as client-work proof. (The old `personalProjects` data and `PersonalProjectSection`/`PersonalProject` were removed — they duplicated the professional projects.)
- **Contact config**: Email, WhatsApp, GitHub, and LinkedIn live in [src/app/home/static/contact.ts](src/app/home/static/contact.ts) (`EMAIL`, `WHATSAPP_NUMBER`, `GITHUB_URL`, `LINKEDIN_URL`, and prebuilt `WHATSAPP_URL`/`EMAIL_URL`). The hero uses the WhatsApp/Email CTA buttons plus GitHub/LinkedIn icon links (via Iconify `mdi:github`/`mdi:linkedin`); ContactSection uses the WhatsApp/Email CTAs.
- **Scroll-spy**: [src/app/home/hooks/useInViewport.tsx](src/app/home/hooks/useInViewport.tsx) listens to `window` scroll and returns the active section `id`, which `index.tsx` uses to highlight the nav. Note the codebase also imports `react-intersection-observer` (`useInView`) inside individual sections (e.g. AboutSection) — both mechanisms coexist.
- **Smooth nav**: [src/app/home/helpers/scrollTo.ts](src/app/home/helpers/scrollTo.ts) scrolls to a section by `id` on nav click.

### Folder convention under `src/app/home/`
- `sections/` — one component per page section (the big building blocks).
- `components/` — reusable pieces used inside sections (cards, chips).
- `hooks/`, `helpers/`, `static/` — logic, utilities, and content data respectively.

## Animation

Scroll reveal is powered by [framer-motion](https://www.framer.com/motion/). [src/app/home/components/Reveal.tsx](src/app/home/components/Reveal.tsx) is a `"use client"` wrapper (`motion.div` with `initial`/`whileInView`/`viewport={{ once: true }}`) that fades and slides content up as it enters the viewport; it accepts `delay` and `y` props for tuning. Every section wraps its content in `Reveal`, and list-rendering sections (Services, Work, Experience) wrap each mapped item in its own `Reveal` with an index-based `delay` (`index * 0.08`) for a staggered effect. Use `Reveal` for any new section/list content instead of hand-rolling intersection-observer animation logic.

## Icons

Icons come from [Iconify](https://iconify.design) via `@iconify/react`. Import the `Icon` component and pass an `icon` name plus Tailwind classes for sizing/color, e.g. `<Icon icon="mdi:whatsapp" className="size-5 text-[#030608]" />`. Icons inherit color via `currentColor`, so set the color with a `text-*` class. Icons currently in use: `mdi:whatsapp`, `mdi:github`, `mdi:linkedin`, `heroicons:envelope-20-solid`, `heroicons:arrow-up-right-20-solid`, `heroicons:link-20-solid`. (The old hand-rolled inline-SVG components under `src/app/assets/` were removed in favor of Iconify.)

## Conventions

- Path alias `@/*` maps to `./src/*` (tsconfig). TypeScript is in `strict` mode.
- Styling is Tailwind v4 utility classes inline. The brand palette is hard-coded as hex/`rgb(from ...)` values directly in `className` (e.g. `#e1ecf3`, `#98b7d4`, `#bb795a`). Custom `container` utility and `.text-gradient-1` are defined in [src/app/globals.css](src/app/globals.css); Tailwind config lives entirely in that CSS file (v4 style), not a `tailwind.config.js`.
- Components are default-exported. Any component using hooks, state, or browser APIs needs the `"use client"` directive.
